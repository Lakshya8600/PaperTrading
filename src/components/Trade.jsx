import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Trade = () => {
  


  return (
    <>
      <Navbar />
      <div className="owncontainer">
        <div id="chart">
          <div className="h-screen flex justify-center items-center bg-gray-100 timeline">
            <button
              className="
          px-2 py-1 
          rounded-lg 
          bg-gradient-to-br from-blue-400 to-cyan-400 
          text-white font-bold text-lg  
          shadow-lg 
          transition-all duration-300 ease-in-out 
          hover:translate-y-[-3px] hover:shadow-2xl
          timelineBt
        "
            >
              1D
            </button>
            <button
              className="
          px-2 py-1 
          rounded-lg 
          bg-gradient-to-br from-blue-400 to-cyan-400 
          text-white font-bold text-lg  
          shadow-lg 
          transition-all duration-300 ease-in-out 
          hover:translate-y-[-3px] hover:shadow-2xl
          timelineBt
        "
            >
              1D
            </button>
            <button
              className="
          px-2 py-1 
          rounded-lg 
          bg-gradient-to-br from-blue-400 to-cyan-400 
          text-white font-bold text-lg  
          shadow-lg 
          transition-all duration-300 ease-in-out 
          hover:translate-y-[-3px] hover:shadow-2xl
          timelineBt
        "
            >
              1D
            </button>
            <button
              className="
          px-2 py-1 
          rounded-lg 
          bg-gradient-to-br from-blue-400 to-cyan-400 
          text-white font-bold text-lg  
          shadow-lg 
          transition-all duration-300 ease-in-out 
          hover:translate-y-[-3px] hover:shadow-2xl
          timelineBt
        "
            >
              1D
            </button>
            <button
              className="
          px-2 py-1 
          rounded-lg 
          bg-gradient-to-br from-blue-400 to-cyan-400 
          text-white font-bold text-lg  
          shadow-lg 
          transition-all duration-300 ease-in-out 
          hover:translate-y-[-3px] hover:shadow-2xl
          timelineBt
        "
            >
              1D
            </button>
          </div>
        </div>
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            background: "#f4f4f4",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            margin: 0,
          }}
        >
          <form
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              minWidth: "300px",
              position: "relative",
            }}
          >
            <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
              Trade Panel
            </h2>

            <label style={{ display: "block", marginBottom: "10px" }}>
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />

            <label style={{ display: "block", marginBottom: "10px" }}>
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "20px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>
                Action
              </label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  background: "#e0e0e0",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <label
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="action"
                    value="buy"
                    style={{ display: "none" }}
                    defaultChecked
                  />
                  <span
                    style={{
                      display: "inline-block",
                      width: "100%",
                      padding: "10px 0",
                      background: "#4CAF50",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    Buy
                  </span>
                </label>
                <label
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "10px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="action"
                    value="sell"
                    style={{ display: "none" }}
                  />
                  <span
                    style={{
                      display: "inline-block",
                      width: "100%",
                      padding: "10px 0",
                      color: "#333",
                    }}
                  >
                    Sell
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                background: "#007BFF",
                color: "white",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>

            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                left: "20px",
                fontSize: "14px",
                color: "#555",
              }}
            >
              Balance: ₹10,000
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Trade;
