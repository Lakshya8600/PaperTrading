import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";



const Trade = () => {
  


  return (
    <>
      <Navbar />

      <div className="min-h-screen  text-white px-4 py-8">
        {/* Chart timeline buttons */}
        <div className="flex justify-center items-center flex-wrap gap-4 mb-12">
          {['1D', '1W', '1M', '1Y'].map((label, index) => (
            <button
              key={index}
              className="px-4 py-2 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 text-white font-bold text-lg shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Trade Panel */}
        <div className="flex justify-center items-center">
          <form className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-6 text-center text-green-400">Trade Panel</h2>

            <label className="block mb-2 font-medium">Quantity</label>
            <input
              type="number"
              name="quantity"
              placeholder="Enter quantity"
              className="w-full p-3 mb-6 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <label className="block mb-2 font-medium">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="w-full p-3 mb-6 rounded-md bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <div className="mb-6">
              <label className="block mb-2 font-medium">Action</label>
              <div className="flex bg-gray-700 rounded-full overflow-hidden">
                <label className="flex-1 text-center cursor-pointer">
                  <input type="radio" name="action" value="buy" defaultChecked className="hidden" />
                  <span className="block py-2 bg-green-500 text-white font-semibold">Buy</span>
                </label>
                <label className="flex-1 text-center cursor-pointer">
                  <input type="radio" name="action" value="sell" className="hidden" />
                  <span className="block py-2 text-gray-300">Sell</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition duration-300"
            >
              Submit
            </button>

            <p className="text-sm text-gray-400 mt-4 text-left">Balance: ₹10,000</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Trade;
