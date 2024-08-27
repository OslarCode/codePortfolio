// src/components/Navbar.jsx
// src/components/Navbar.jsx
import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline"; // Importar iconos desde la versión 2

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark"); // Alternar clase dark en el documento
  };

  return (
    <div
      className={`px-4 mx-auto max-w-7xl sm:px-6 ${
        darkMode ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="relative pt-6 pb-16 sm:pb-24">
        <nav
          className={`relative flex items-center justify-between sm:h-10 md:justify-center ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
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
              <div className="flex items-center -mr-2 md:hidden">
                <button
                  className="inline-flex items-center justify-center p-2 text-gray-400 bg-transparent rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
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
            </div>
          </div>
          <div
            className={`md:flex md:space-x-10 list-none ${
              menuOpen ? "block" : "hidden"
            } md:block`}
          >
            <li>
              <a href="#" className="text-base font-normal hover:text-gray-900">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#" className="text-base font-normal hover:text-gray-900">
                Contacto
              </a>
            </li>
          </div>
          <div className="hidden md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <button
              onClick={handleThemeToggle}
              className="inline-flex items-center justify-center p-2 text-gray-500 bg-transparent rounded-full hover:text-gray-900"
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
