// src/components/Contacto.jsx
import React from "react";
import PropTypes from "prop-types";

const Contacto = ({ darkMode }) => {
  return (
    <div
      id="contacto"
      className={`body-font relative px-6 py-12 ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      } ${darkMode ? "text-gray-100" : "text-gray-800"}`}
    >
      <div className="mb-12 flex w-full flex-col text-center">
        <h1
          className={`mb-6 font-Playfair ${
            darkMode ? "text-gray-100" : "text-gray-800"
          }`}
          style={{ fontSize: "4rem" }}
        >
          Contactame
        </h1>
        <p className="mx-auto text-base font-Madefor leading-relaxed lg:w-2/3">
          Estoy disponible para nuevas oportunidades y colaboraciones. Si estás
          interesado en trabajar conmigo o simplemente quieres decir hola, no
          dudes en contactarme.
        </p>
      </div>

      <div className="mx-auto md:w-2/3 lg:w-1/2">
        <div className="-m-2 flex flex-wrap">
          {/* Form Fields */}
          <div className="w-1/2 p-2">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className={`peer w-full rounded border ${
                  darkMode
                    ? "border-gray-700 bg-gray-800 text-gray-100"
                    : "border-gray-300 bg-gray-100 text-gray-900"
                } py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-blue-400 focus:ring-2 ${
                  darkMode
                    ? "focus:bg-gray-900 focus:ring-indigo-900"
                    : "focus:bg-white focus:ring-indigo-200"
                }`}
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className={`absolute left-3 -top-6 text-sm leading-7 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base ${
                  darkMode
                    ? "peer-placeholder-shown:text-gray-500 peer-focus:text-blue-400"
                    : "peer-placeholder-shown:text-gray-500 peer-focus:text-blue-400"
                }`}
              >
                Name
              </label>
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className={`peer w-full rounded border ${
                  darkMode
                    ? "border-gray-700 bg-gray-800 text-gray-100"
                    : "border-gray-300 bg-gray-100 text-gray-900"
                } py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-blue-400 focus:ring-2 ${
                  darkMode
                    ? "focus:bg-gray-900 focus:ring-indigo-900"
                    : "focus:bg-white focus:ring-indigo-200"
                }`}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className={`absolute left-3 -top-6 text-sm leading-7 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base ${
                  darkMode
                    ? "peer-placeholder-shown:text-gray-500 peer-focus:text-blue-400"
                    : "peer-placeholder-shown:text-gray-500 peer-focus:text-blue-400"
                }`}
              >
                Email
              </label>
            </div>
          </div>

          <div className="mt-4 w-full p-2">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                className={`peer h-32 w-full resize-none rounded border ${
                  darkMode
                    ? "border-gray-700 bg-gray-800 text-gray-100"
                    : "border-gray-300 bg-gray-100 text-gray-900"
                } py-1 px-3 text-base leading-6 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-blue-400 focus:ring-2 ${
                  darkMode
                    ? "focus:bg-gray-900 focus:ring-indigo-900"
                    : "focus:bg-white focus:ring-indigo-200"
                }`}
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className={`absolute left-3 -top-6 text-sm leading-7 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base ${
                  darkMode
                    ? "peer-placeholder-shown:text-gray-500 peer-focus:text-blue-400"
                    : "peer-placeholder-shown:text-gray-500 peer-focus:text-blue-400"
                }`}
              >
                Message
              </label>
            </div>
          </div>

          <div className="w-full p-2">
            <button
              className={`mx-auto flex rounded border-0 py-2 px-8 text-lg focus:outline-none ${
                darkMode
                  ? "bg-gray-800 text-white hover:bg-gray-100 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-400"
                  : "bg-gray-800 text-white hover:bg-gray-400 hover:text-gray-800"
              }`}
            >
              Send Message
            </button>
          </div>

          {/* Footer */}
          <div
            className={`mt-8 w-full p-2 pt-8 text-center ${
              darkMode ? "border-gray-800" : "border-gray-300"
            }`}
          >
            <a
              className={`${darkMode ? "text-indigo-400" : "text-indigo-500"}`}
            >
              JohnDoe@gmail.com
            </a>
            <p className="my-5 leading-normal"></p>
            <span className="inline-flex">
              {/* Redes sociales con colores condicionales */}
              <a
                className={`ml-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <img
                  src="./social/twitter-svgrepo-com.svg"
                  alt="Twitter"
                  className="w-8 h-8"
                  style={{
                    filter: darkMode ? "invert(1) brightness(0.9)" : "none",
                  }} // Agregado
                />
              </a>
              <a
                className={`ml-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <img
                  src="./social/pinterest-svgrepo-com.svg"
                  alt="Pinterest"
                  className="w-8 h-8"
                  style={{
                    filter: darkMode ? "invert(1) brightness(0.9)" : "none",
                  }} // Agregado
                />
              </a>
              <a
                className={`ml-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <img
                  src="./social/instagram-svgrepo-com.svg"
                  alt="Instagram"
                  className="w-8 h-8"
                  style={{
                    filter: darkMode ? "invert(1) brightness(0.9)" : "none",
                  }} // Agregado
                />
              </a>
              <a
                className={`ml-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <img
                  src="./social/linkedin-svgrepo-com.svg"
                  alt="LinkedIn"
                  className="w-8 h-8"
                  style={{
                    filter: darkMode ? "invert(1) brightness(0.9)" : "none",
                  }} // Agregado
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Contacto.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Contacto;
