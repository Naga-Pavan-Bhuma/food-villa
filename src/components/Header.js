import { useState } from "react";
import Logo from "../assets/img/food_villa.jpg";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="h-14 w-14 object-cover rounded-full shadow-md transform hover:scale-105 transition-transform duration-300"
        alt="logo"
        src={Logo}
      />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state to manage the menu visibility

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-400 shadow-lg rounded-md">
      {/* Title Section */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <Title />

        {/* Hamburger Menu for small screens */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>
      </div>

      {/* Pop-up Menu (on small screens) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300`}
        onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
      >
        <div
          className={`bg-white w-64 h-full p-4 space-y-5 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-all duration-300`}
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
        >
          <div className="flex justify-between items-center">
            <Title />
            <button
              className="text-gray-700 text-2xl"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <nav className="space-y-3">
            <Link
              className="block text-lg font-semibold text-gray-700 hover:text-indigo-900 transition-colors duration-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block text-lg font-semibold text-gray-700 hover:text-indigo-900 transition-colors duration-200"
              to="/about"
            >
              About
            </Link>
            <Link
              className="block text-lg font-semibold text-gray-700 hover:text-indigo-900 transition-colors duration-200"
              to="/contact"
            >
              Contact Us
            </Link>
            <Link
              className="block text-lg font-semibold text-gray-700 hover:text-indigo-900 transition-colors duration-200"
              to="/cart"
            >
              Cart
            </Link>
            <Link
              className="block text-lg font-semibold text-gray-700 hover:text-indigo-900 transition-colors duration-200"
              to="/instamart"
            >
              Insta Mart
            </Link>
          </nav>

          {/* Login/Logout Button */}
          <button
            onClick={() => setIsLoggedIn(!isLoggedIn)}
            className={`w-full py-2 mt-4 rounded-md font-semibold text-white shadow-md transition-transform duration-300 transform hover:scale-105 ${
              isLoggedIn
                ? "bg-red-500 hover:bg-red-600"
                : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {isLoggedIn ? "Log Out" : "Log In"}
          </button>
        </div>
      </div>

      {/* Navigation Links (for larger screens) */}
      <div className="hidden md:flex space-x-5 text-sm font-semibold text-gray-700 tracking-wide">
        <Link
          className="relative group hover:text-indigo-900 transition-colors duration-200"
          to="/"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-900 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          className="relative group hover:text-indigo-900 transition-colors duration-200"
          to="/about"
        >
          About
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-900 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          className="relative group hover:text-indigo-900 transition-colors duration-200"
          to="/contact"
        >
          Contact Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-900 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          className="relative group hover:text-indigo-900 transition-colors duration-200"
          to="/cart"
        >
          Cart
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-900 transition-all group-hover:w-full"></span>
        </Link>
        <Link
          className="relative group hover:text-indigo-900 transition-colors duration-200"
          to="/instamart"
        >
          Insta Mart
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-900 transition-all group-hover:w-full"></span>
        </Link>

        {/* Login/Logout Button */}
        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className={`px-4 py-1 rounded-md font-semibold text-white shadow-md transition-transform duration-300 transform hover:scale-105 ${
            isLoggedIn
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
    </div>
  );
};

export default Header;
