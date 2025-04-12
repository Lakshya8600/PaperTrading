import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12 rounded-md">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold tracking-wide">
            <span className="text-green-400">Trade</span>
            <span className="text-white">Sathi</span>
          </span>
        </div>

        {/* Links */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-green-400 transition cursor-pointer">Privacy Policy</li>
          <li className="hover:text-green-400 transition cursor-pointer">Terms of Service</li>
          <li className="hover:text-green-400 transition cursor-pointer">Support</li>
          <li className="hover:text-green-400 transition cursor-pointer">Contact</li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center md:text-right cursor-pointer">
          © {new Date().getFullYear()} TradeSathi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
