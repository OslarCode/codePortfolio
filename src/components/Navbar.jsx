// src/components/Navbar.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode, outlined }) => {
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
          ? `bg-gray-800 border-gray-700 ${outlined ? "navbar-outlined" : ""}`
          : `bg-gray-100 border-gray-200 ${
              outlined ? "navbar-outlined-light" : ""
            }`
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
        {/* Links for large screens */}
        <div className="hidden md:flex md:space-x-10">
          <a
            href="#"
            className={`text-3xl font-Playfair  ${
              darkMode
                ? `text-gray-300 hover:text-white ${
                    outlined ? "nav-item-outlined" : ""
                  }`
                : `text-gray-900 hover:text-gray-600 ${
                    outlined ? "nav-item-outlined-light" : ""
                  }`
            }`}
          >
            Proyectos
          </a>
          <ScrollLink
            to="contacto"
            smooth={true}
            duration={500}
            className={`cursor-pointer text-3xl font-Playfair ${
              darkMode
                ? `text-gray-300 hover:text-white ${
                    outlined ? "nav-item-outlined" : ""
                  }`
                : `text-gray-900 hover:text-gray-600 ${
                    outlined ? "nav-item-outlined-light" : ""
                  }`
            }`}
          >
            Contacto
          </ScrollLink>
        </div>

        {/* Dark Mode Toggle for large screens */}
        <div className="hidden md:flex md:items-center">
          <button
            onClick={handleThemeToggle}
            className={`inline-flex items-center justify-center p-2 rounded-full ${
              darkMode
                ? `text-gray-400 hover:text-white bg-gray-700 ${
                    outlined ? "dark-mode-toggle-outlined" : ""
                  }`
                : `text-gray-500 hover:text-gray-900 border-2 ${
                    outlined ? "dark-mode-toggle-outlined-light" : ""
                  }`
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
              ? `text-gray-300 hover:text-white ${
                  outlined ? "nav-item-outlined" : ""
                }`
              : `text-gray-900 hover:text-gray-600 ${
                  outlined ? "nav-item-outlined-light" : ""
                }`
          }`}
        >
          Proyectos
        </a>
        <ScrollLink
          to="contacto"
          smooth={true}
          duration={500}
          className={`cursor-pointer block text-base font-normal ${
            darkMode
              ? `text-gray-300 hover:text-white ${
                  outlined ? "nav-item-outlined" : ""
                }`
              : `text-gray-900 hover:text-gray-600 ${
                  outlined ? "nav-item-outlined-light" : ""
                }`
          }`}
        >
          Contacto
        </ScrollLink>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  outlined: PropTypes.bool, // Nueva prop para controlar estilos outlined
};

export default Navbar;
