import { useState,useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Trade from "./components/Trade";
import Login from "./components/Login";
import Report from "./components/Report";
import Dashboard from "./components/Dashboard";
import Notfound from "./components/Notfound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";


function App() {
  
  const [count, setCount] = useState(0);
  const [user, setUser] = useLocalStorage("user", null);
  const [trade, setTrade] = useLocalStorage("trade", null);
  const [report, setReport] = useLocalStorage("report", null);
  const [dashboard, setDashboard] = useLocalStorage("dashboard", null);
  const [login, setLogin] = useLocalStorage("login", null);
  const [home, setHome] = useLocalStorage("home", null);
  const [notfound, setNotfound] = useLocalStorage("notfound", null);
  const [symbol, setSymbol] = useState("ICICIBANK");

  
  useEffect(() => {
    // Fetch the data whenever the symbol changes
    // You can also set range and interval here if needed
    const fetchData = async () => {
      try {
        const url = `https://kumrawatyogesh.pythonanywhere.com/info/${symbol}/6mo/1d`;
        const response = await fetch(url);
        const rawData = await response.json();
        
        const dates = Object.values(rawData["('Date', '')"]);
        const closes = Object.values(rawData[`('Close', '${symbol}.NS')`]);
        const opens = Object.values(rawData[`('Open', '${symbol}.NS')`]);
        const highs = Object.values(rawData[`('High', '${symbol}.NS')`]);
        const lows = Object.values(rawData[`('Low', '${symbol}.NS')`]);

        const candlestickData = dates.map((timestamp, index) => ({
          x: new Date(timestamp),
          y: [opens[index], highs[index], lows[index], closes[index]],
        }));

        // Assuming you'll pass this data to the Trade component through props
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [symbol]);

  return (
    <>
      <div className="class min-h-[82vh]">
      <Router>
      <Navbar symbol={symbol} setSymbol={setSymbol} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trade" element={<Trade symbol={symbol} />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/report" element={<Report />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;
