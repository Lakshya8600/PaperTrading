import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold tracking-wide">
            <span className="text-green-400">Trade</span>
            <span className="text-white">Sathi</span>
          </span>
        </div>

        {/* Links */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-green-400 transition">Privacy Policy</li>
          <li className="hover:text-green-400 transition">Terms of Service</li>
          <li className="hover:text-green-400 transition">Support</li>
          <li className="hover:text-green-400 transition">Contact</li>
        </ul>

        {/* Copyright */}
        <p className="text-xs text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} TradeSathi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
