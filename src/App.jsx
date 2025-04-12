import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Trade from "./components/Trade";
import Login from "./components/Login";
import Report from "./components/Report";
import Dashboard from "./components/Dashboard";
import Notfound from "./components/Notfound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

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
