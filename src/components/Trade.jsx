import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";

const Trade = ({ symbol }) => {
  const [range, setRange] = useState("6mo");
  const [interval, setInterval] = useState("1d");
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const url = `https://kumrawatyogesh.pythonanywhere.com/info/${symbol}/${range}/${interval}`;
      const response = await fetch(url);
      const rawData = await response.json();

      const datetimeField =
        interval === "1m" || interval === "5m" || interval === "1h"
          ? rawData["('Datetime', '')"] || rawData["('Date', '')"]
          : rawData["('Date', '')"];

      const dates = Object.values(datetimeField || []);

      const closes = Object.values(rawData[`('Close', '${symbol}.NS')`]);
      const opens = Object.values(rawData[`('Open', '${symbol}.NS')`]);
      const highs = Object.values(rawData[`('High', '${symbol}.NS')`]);
      const lows = Object.values(rawData[`('Low', '${symbol}.NS')`]);

      const candlestickData = dates.map((timestamp, index) => {
        const utcDate = new Date(timestamp);
        const istOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
        const istDate = new Date(utcDate.getTime() + istOffset);
      
        return {
          x: istDate,
          y: [opens[index], highs[index], lows[index], closes[index]],
        };
      });
      

      setSeries([{ data: candlestickData }]);
    } catch (err) {
      console.error("Error fetching chart:", err);
      setSeries([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [symbol, range, interval]);

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: { show: false },
    },
    title: {
      text: `${symbol} Candlestick Chart`,
      align: "left",
      style: { color: "#38bdf8" },
    },
    xaxis: {
      type: "datetime",
      labels: { style: { colors: "#d1d5db" } },
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: {
        style: { colors: "#d1d5db" },
        formatter: (value) => Math.round(value), // Convert float to integer
      },
    },
    theme: {
      mode: "dark",
    },
  };

  return (
    <>

      <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">

          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
          >
            <option value="1d">1 Day</option>
            <option value="1wk">1 Week</option>
            <option value="1mo">1 Month</option>
            <option value="3mo">3 Months</option>
            <option value="6mo">6 Months</option>
            <option value="1y">1 Year</option>
          </select>
          <select
            value={interval}
            onChange={(e) => setInterval(e.target.value)}
            className="px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600"
          >
            <option value="1m">1 Min</option>
            <option value="5m">5 Min</option>
            <option value="1h">1 hr</option>
            <option value="1d">1 Day</option>
            <option value="1wk">1 Week</option>
            <option value="1mo">1 Month</option>
          </select>
          <button
            onClick={fetchData}
            className="px-5 py-2 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 text-white font-semibold transition hover:shadow-lg hover:-translate-y-1 duration-300"
          >
            Search
          </button>
        </div>

        {/* Chart */}
        <div className="bg-gray-900 p-4 rounded-xl shadow-xl mb-12">
          {loading ? (
            <p className="text-center text-gray-300">Loading chart...</p>
          ) : (
            <ApexChart options={options} series={series} type="candlestick" height={350} />
          )}
        </div>

        {/* Trade Panel */}
        <div className="flex justify-center items-center">
          <form className="bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-center text-green-400">Trade Panel</h2>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="Enter quantity"
                className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Action</label>
              <div className="flex rounded-full overflow-hidden border border-gray-700">
                <label className="flex-1 text-center">
                  <input type="radio" name="action" value="buy" defaultChecked className="hidden peer" />
                  <span className="block py-2 peer-checked:bg-green-500 peer-checked:text-white text-gray-400 font-medium transition">
                    Buy
                  </span>
                </label>
                <label className="flex-1 text-center">
                  <input type="radio" name="action" value="sell" className="hidden peer" />
                  <span className="block py-2 peer-checked:bg-red-500 peer-checked:text-white text-gray-400 font-medium transition">
                    Sell
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Submit Trade
            </button>

            <p className="text-sm text-gray-400 text-left">Balance: ₹10,000</p>
          </form>
        </div>
      </div>

    </>
  );
};

export default Trade;
