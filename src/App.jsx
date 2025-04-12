import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
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
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/report" element={<Report />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
