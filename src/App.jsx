import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/trade" element={<Navbar />} />
          <Route path="/login" element={<Navbar />} />
          <Route path="/report" element={<Contact />} />
          <Route path="/dashboard" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>

      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/trade" element={<Layout />}>
          <Route path="/login" element={<Layout />}>
          <Route path="/report" element={<Layout />}>
          <Route path="/dashboard" element={<Layout />}>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
