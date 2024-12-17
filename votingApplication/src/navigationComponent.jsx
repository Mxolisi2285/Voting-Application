import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">VoteHub</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
