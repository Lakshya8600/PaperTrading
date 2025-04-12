import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg py-3">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-extrabold tracking-wide">
            <span className="text-green-400">Trade</span>
            <span className="text-white">Sathi</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'Trade', path: '/trade' },
            { name: 'Login', path: '/login' },
            { name: 'Dashboard', path: '/dashboard' },
            { name: 'Report', path: '/report' },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-white hover:text-green-400 font-semibold transition-all duration-300 hover:underline underline-offset-4"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
