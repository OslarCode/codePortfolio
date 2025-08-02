// src/components/layout/Navbar.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ darkMode, setDarkMode, outlined = false }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 transition-colors duration-300 ${
        darkMode
          ? "bg-gray-900 text-white border-b border-gray-700"
          : "bg-white text-gray-900 border-b border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo o nombre */}
        <a
          href="/"
          className="text-2xl font-Playfair font-semibold tracking-tight focus:outline-none"
        >
          LOGO
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            className="cursor-pointer text-base font-medium hover:text-blue-600 transition-colors"
          >
            Proyects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            className="cursor-pointer text-base font-medium hover:text-blue-600 transition-colors"
          >
            Contact
          </ScrollLink>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 transition"
            aria-label="Alternar modo oscuro"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile nav toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Abrir menú móvil"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="mt-4 md:hidden space-y-2 text-center">
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer py-2 font-medium hover:text-blue-500"
          >
            Proyectos
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block cursor-pointer py-2 font-medium hover:text-blue-500"
          >
            Contacto
          </ScrollLink>
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setMenuOpen(false);
            }}
            className="inline-flex items-center gap-2 justify-center py-2 px-4 text-sm font-medium bg-gray-200 dark:bg-gray-700 rounded-lg"
          >
            {darkMode ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
            {darkMode ? "Claro" : "Oscuro"}
          </button>
        </nav>
      )}
    </header>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  outlined: PropTypes.bool,
};

export default Navbar;
