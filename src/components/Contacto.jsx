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
          className={`title-font mb-4 text-2xl font-medium ${
            darkMode ? "text-white" : "text-gray-900"
          } sm:text-3xl`}
        >
          Contactame
        </h1>
        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
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
                } py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 ${
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
                    ? "peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-gray-500 peer-focus:text-indigo-500"
                    : "peer-placeholder-shown:bg-white peer-placeholder-shown:text-gray-500 peer-focus:text-indigo-500"
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
                } py-1 px-3 text-base leading-8 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 ${
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
                    ? "peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-gray-500 peer-focus:text-indigo-500"
                    : "peer-placeholder-shown:bg-white peer-placeholder-shown:text-gray-500 peer-focus:text-indigo-500"
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
                } py-1 px-3 text-base leading-6 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 ${
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
                    ? "peer-placeholder-shown:bg-gray-900 peer-placeholder-shown:text-gray-500 peer-focus:text-indigo-500"
                    : "peer-placeholder-shown:bg-white peer-placeholder-shown:text-gray-500 peer-focus:text-indigo-500"
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
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "bg-indigo-600 text-white hover:bg-indigo-700"
              }`}
            >
              Send Message
            </button>
          </div>

          {/* Footer */}
          <div
            className={`mt-8 w-full border-t p-2 pt-8 text-center ${
              darkMode ? "border-gray-800" : "border-gray-300"
            }`}
          >
            <a
              className={`${darkMode ? "text-indigo-400" : "text-indigo-500"}`}
            >
              oslar1980@gmail.com
            </a>
            <p className="my-5 leading-normal"></p>
            <span className="inline-flex">
              {/* Redes sociales con colores condicionales */}
              <a className={`${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a
                className={`ml-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                className={`ml-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                  <path d="M17.5 6.5h.01"></path>
                </svg>
              </a>
              <a
                className={`ml-4 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 11-4.47-5.74A5 5 0 004 8c0 2.21 1.79 4 4 4h8a4 4 0 014 4v1a1 1 0 11-2 0v-1a2 2 0 00-2-2H8a6 6 0 01-6-6 7 7 0 016-6.92A7 7 0 0116 8z"
                  ></path>
                </svg>
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
