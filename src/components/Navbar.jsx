// src/components/Navbar.jsx
import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`w-full px-4 sm:px-6 ${
        darkMode
          ? "bg-gray-800 border-b border-gray-700"
          : "bg-white border-b border-gray-200"
      } ${menuOpen ? "shadow-lg" : "shadow-none"} ${
        menuOpen ? "py-4" : "py-2"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <nav
        className={`flex items-center justify-between ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="#">
            <span className="sr-only">Company Name</span>
            <img
              className="w-auto h-8 sm:h-10"
              src="https://www.svgrepo.com/show/448244/pack.svg"
              loading="lazy"
              width="202"
              height="40"
              alt="Company Logo"
            />
          </a>
        </div>

        {/* Links for large screens */}
        <div className="hidden md:flex md:space-x-10">
          <a
            href="#"
            className={`text-base font-normal ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-900 hover:text-gray-600"
            }`}
          >
            Proyectos
          </a>
          <a
            href="#"
            className={`text-base font-normal ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-900 hover:text-gray-600"
            }`}
          >
            Contacto
          </a>
        </div>

        {/* Dark Mode Toggle for large screens */}
        <div className="hidden md:flex md:items-center">
          <button
            onClick={handleThemeToggle}
            className={`inline-flex items-center justify-center p-2 rounded-full ${
              darkMode
                ? "text-gray-400 hover:text-white bg-gray-700"
                : "text-gray-500 hover:text-gray-900 bg-gray-200"
            }`}
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6" aria-hidden="true" />
            ) : (
              <MoonIcon className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="flex md:hidden">
          <button
            className={`inline-flex items-center justify-center p-2 rounded-md ${
              darkMode
                ? "text-gray-400 hover:text-white bg-gray-700"
                : "text-gray-500 hover:text-gray-900 bg-gray-200"
            } focus:outline-none focus:ring-2 focus:ring-inset ${
              darkMode ? "focus:ring-gray-500" : "focus:ring-gray-300"
            }`}
            type="button"
            aria-expanded={menuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Menu for small screens */}
      <div
        className={`${menuOpen ? "block" : "hidden"} md:hidden mt-4 space-y-4`}
      >
        <a
          href="#"
          className={`block text-base font-normal ${
            darkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-900 hover:text-gray-600"
          }`}
        >
          Proyectos
        </a>
        <a
          href="#"
          className={`block text-base font-normal ${
            darkMode
              ? "text-gray-300 hover:text-white"
              : "text-gray-900 hover:text-gray-600"
          }`}
        >
          Contacto
        </a>
      </div>
    </div>
  );
};

export default Navbar;
