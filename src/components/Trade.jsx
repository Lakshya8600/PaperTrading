import React from "react";
import Navbar from "./Navbar";

const Trade = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-950 text-white px-4 py-12">
        {/* Timeline buttons */}
        <div className="flex justify-center items-center flex-wrap gap-4 mb-10">
          {["1D", "1W", "1M", "1Y"].map((label, index) => (
            <button
              key={index}
              className="px-5 py-2 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 text-white font-semibold text-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Trade Panel */}
        <div className="flex justify-center items-center">
          <form className="bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md space-y-6">
            <h2 className="text-3xl font-bold text-center text-green-400">Trade Panel</h2>

            {/* Quantity Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="Enter quantity"
                className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Price Input */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Price</label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            {/* Action Buttons */}
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

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Submit Trade
            </button>

            {/* Balance Info */}
            <p className="text-sm text-gray-400 text-left">Balance: ₹10,000</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Trade;
