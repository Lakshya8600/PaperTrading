import { useState } from "react";
import "./App.css";
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

  return (
    <>
      <div className="class min-h-[82vh]">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
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
