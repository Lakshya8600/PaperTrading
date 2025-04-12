import React from "react";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-950 text-white flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-green-400 mb-8">Dashboard</h2>
          <ul className="space-y-4">
            <li className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">Overview</li>
            <li className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">Transactions</li>
            <li className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">Settings</li>
            <li className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">Profile</li>
            <li className="hover:bg-gray-800 p-2 rounded-md cursor-pointer">Log Out</li>
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-green-400 mb-6">Welcome back, User!</h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-3">Total Balance</h3>
              <p className="text-2xl font-bold">₹10,000</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-3">Transactions</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-3">Notifications</h3>
              <p className="text-2xl font-bold">5 New</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-4">
              <li className="text-gray-300">Bought 10 BTC at ₹35,000</li>
              <li className="text-gray-300">Sold 5 BTC at ₹40,000</li>
              <li className="text-gray-300">Withdrawn ₹2,000 to bank</li>
              <li className="text-gray-300">Deposit ₹5,000</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
