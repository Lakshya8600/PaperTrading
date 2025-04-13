// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";



// const Trade = () => {
  


//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
//         {/* Timeline buttons */}
//         <div className="flex justify-center items-center flex-wrap gap-4 mb-10">
//           {["1D", "1W", "1M", "1Y"].map((label, index) => (
//             <button
//               key={index}
//               className="px-5 py-2 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 text-white font-semibold text-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
//             >
//               {label}
//             </button>
//           ))}
//         </div>

//         {/* Trade Panel */}
//         <div className="flex justify-center items-center">
//           <form className="bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md space-y-6">
//             <h2 className="text-3xl font-bold text-center text-green-400">Trade Panel</h2>

//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">Quantity</label>
//               <input
//                 type="number"
//                 name="quantity"
//                 placeholder="Enter quantity"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 value={object.display}
//                 onChange={(e) =>
//                   setObject({
//                     ...object,
//                     quantity: Number(e.target.value),
//                     display: Number(e.target.value),
//                   })
//                 }
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 placeholder="Enter price"
//                 className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
//                 value={object.price}
//                 onChange={(e) =>
//                   setObject({
//                     ...object,
//                     price: Number(e.target.value),
//                   })
//                 }
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-300 mb-2">Action</label>
//               <div className="flex rounded-full overflow-hidden border border-gray-700">
//                 <label className="flex-1 text-center">
//                   <input
//                     type="radio"
//                     name="action"
//                     value="buy"
//                     className="hidden peer"
//                     checked={action === "buy"}
//                     onChange={() => setAction("buy")}
//                   />
//                   <span className="block py-2 peer-checked:bg-green-500 peer-checked:text-white text-gray-400 font-medium transition">
//                     Buy
//                   </span>
//                 </label>
//                 <label className="flex-1 text-center">
//                   <input
//                     type="radio"
//                     name="action"
//                     value="sell"
//                     className="hidden peer"
//                     checked={action === "sell"}
//                     onChange={() => setAction("sell")}
//                   />
//                   <span className="block py-2 peer-checked:bg-red-500 peer-checked:text-white text-gray-400 font-medium transition">
//                     Sell
//                   </span>
//                 </label>
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300"
//               onClick={(e) => {
//                 e.preventDefault();

//                 const trade = {
//                   stock: object.stock,
//                   quantity: object.quantity,
//                   price: object.price,
//                   date: new Date().toLocaleDateString(),
//                 };

//                 if (action === "buy") {
//                   const updatedBuyList = [...activeBuy, trade];
//                   setActiveBuy(updatedBuyList);
//                   console.log("Updated activeBuy list:", updatedBuyList);
//                 } else {
//                   const updatedSellList = [...activeSell, trade];
//                   setActiveSell(updatedSellList);
//                   console.log("Updated activeSell list:", updatedSellList);
//                 }

//                 // Reset form input values
//                 setObject({
//                   ...object,
//                   quantity: 0,
//                   price: 0,
//                   display: 0,
//                   date: new Date().toLocaleDateString(),
//                 });

//                 // Update balance
//                 setBalance((prevBalance) =>
//                   action === "buy"
//                     ? prevBalance - object.quantity * object.price
//                     : prevBalance + object.quantity * object.price
//                 );

//                 console.log("Trade submitted:", trade);
//               }}
//             >
//               Submit Trade
//             </button>

//             {/* Balance Info */}
//             <p className="text-sm text-gray-400 text-left">Balance: ₹10,000</p>
//           </form>
//         </div>
//       </div>

//     </>
//   );
// };

// export default Trade;


import React, { useEffect, useState } from "react";
import ApexChart from "react-apexcharts";

const Trade = ({ symbol }) => {
  const [currentPrice, setCurrentPrice] = useState(null);
  const [companyName, setCompanyName] = useState(symbol); // fallback to symbol
  const [range, setRange] = useState("6mo");
  const [interval, setInterval] = useState("1d");
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  // --- Trade state ---
  const [balance, setBalance] = useState(() => {
    return parseFloat(localStorage.getItem("balance")) || 100000;
  });

  const [activeBuy, setActiveBuy] = useState(() => {
    return JSON.parse(localStorage.getItem("activeBuy")) || [];
  });

  const [activeSell, setActiveSell] = useState(() => {
    return JSON.parse(localStorage.getItem("activeSell")) || [];
  });

  const [tradeHistory, setTradeHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("tradeHistory")) || [];
  });

  const handleBuy = () => {
    if (balance >= currentPrice) {
      const newTrade = { type: "buy", price: currentPrice, symbol, timestamp: new Date() };
      const updatedBuys = [...activeBuy, newTrade];
      const updatedBalance = balance - currentPrice;

      setActiveBuy(updatedBuys);
      setBalance(updatedBalance);
      setTradeHistory([...tradeHistory, newTrade]);

      localStorage.setItem("activeBuy", JSON.stringify(updatedBuys));
      localStorage.setItem("balance", updatedBalance);
      localStorage.setItem("tradeHistory", JSON.stringify([...tradeHistory, newTrade]));
    }
  };

  const handleSell = () => {
    if (activeBuy.length > 0) {
      const boughtTrade = activeBuy[activeBuy.length - 1];
      const profit = currentPrice - boughtTrade.price;

      const newTrade = { type: "sell", price: currentPrice, symbol, timestamp: new Date(), profit };
      const updatedSells = [...activeSell, newTrade];
      const updatedBalance = balance + currentPrice;
      const updatedBuys = activeBuy.slice(0, -1); // Remove last buy

      setActiveSell(updatedSells);
      setActiveBuy(updatedBuys);
      setBalance(updatedBalance);
      setTradeHistory([...tradeHistory, newTrade]);

      localStorage.setItem("activeSell", JSON.stringify(updatedSells));
      localStorage.setItem("activeBuy", JSON.stringify(updatedBuys));
      localStorage.setItem("balance", updatedBalance);
      localStorage.setItem("tradeHistory", JSON.stringify([...tradeHistory, newTrade]));
    }
  };

  // --- Fetch data for chart ---
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
      const closes = Object.values(rawData[`('Close', '${symbol}.NS')`] || {});
      const opens = Object.values(rawData[`('Open', '${symbol}.NS')`] || {});
      const highs = Object.values(rawData[`('High', '${symbol}.NS')`] || {});
      const lows = Object.values(rawData[`('Low', '${symbol}.NS')`] || {});

      const candlestickData = dates.map((timestamp, index) => {
        const utcDate = new Date(timestamp);
        const istOffset = 5.5 * 60 * 60 * 1000;
        const istDate = new Date(utcDate.getTime() + istOffset);
      
        return {
          x: istDate,
          y: [
            opens[index] || 0,
            highs[index] || 0,
            lows[index] || 0,
            closes[index] || 0,
          ],
        };
      });


      setSeries([{ data: candlestickData }]);

      //  Set the latest close price here
      const latestClose = closes[closes.length - 1];
      setCurrentPrice(latestClose);

      // Optional: Set company name if API includes it
      if (rawData.meta && rawData.meta.shortName) {
        setCompanyName(rawData.meta.shortName);
      } else {
        setCompanyName(symbol);
      }

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
      toolbar: { show: false },
    },
    title: {
      text: `${symbol} Candlestick Chart`,
      align: "left",
      style: { color: "#ffffff" },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: { colors: "#d1d5db" },
      },
    },
    yaxis: {
      tooltip: { enabled: true },
      labels: {
        style: { colors: "#d1d5db" },
        formatter: (value) => Math.round(value),
      },
    },
    theme: {
      mode: "dark",
    },
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-xl shadow-xl">
      <h2 className="text-xl font-semibold mb-2">{companyName}</h2>
      <p className="text-lg mb-4">Current Price: ₹{currentPrice?.toFixed(2) || "Loading..."}</p>

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

        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-white">
            {companyName} <span className="text-gray-400">({symbol})</span>
          </h2>
          {currentPrice && (
            <p className="text-lg text-green-400 mt-1">
              Current Price: ₹{Number(currentPrice).toFixed(2)}
            </p>
          )}
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

      {/* Balance */}
      <p className="mt-4 text-md">Balance: ₹{balance.toFixed(2)}</p>

      {/* Trade History */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Trade History</h3>
        <ul className="max-h-40 overflow-y-auto text-sm mt-2">
          {tradeHistory.map((trade, index) => (
            <li key={index}>
              {trade.type.toUpperCase()} at ₹{trade.price} on{" "}
              {new Date(trade.timestamp).toLocaleString()}{" "}
              {trade.profit !== undefined && `(Profit: ₹${trade.profit.toFixed(2)})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trade;

