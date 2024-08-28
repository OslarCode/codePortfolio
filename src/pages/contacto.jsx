// src/pages/contacto.jsx
import React from "react";
import useDarkMode from "../hooks/useDarkMode"; // Asegúrate de que la ruta sea correcta

const Contacto = () => {
  const [darkMode] = useDarkMode(); // Hook para obtener el estado del modo oscuro

  return (
    <div
      className={`min-h-screen px-6 py-12 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-4xl font-semibold mb-6">Contacto</h1>
      <form className="max-w-lg mx-auto space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700"
            placeholder="Tu correo electrónico"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700"
            placeholder="Tu mensaje"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Enviar
        </button>
      </form>
      <div className="flex justify-center mt-8 space-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M22 2.5C22 2.22386 21.7761 2 21.5 2H20.5C20.2239 2 20 2.22386 20 2.5V3.5C20 3.77614 20.2239 4 20.5 4H21.5C21.7761 4 22 3.77614 22 3.5V2.5Z" />
            <path d="M12 2.5C12 2.22386 11.7761 2 11.5 2H10.5C10.2239 2 10 2.22386 10 2.5V3.5C10 3.77614 10.2239 4 10.5 4H11.5C11.7761 4 12 3.77614 12 3.5V2.5Z" />
            <path d="M2 12C2 11.7761 2.22386 11.5 2.5 11.5H3.5C3.77614 11.5 4 11.7761 4 12V13C4 13.2239 3.77614 13.5 3.5 13.5H2.5C2.22386 13.5 2 13.2239 2 13V12Z" />
            <path d="M22 12C22 11.7761 21.7761 11.5 21.5 11.5H20.5C20.2239 11.5 20 11.7761 20 12V13C20 13.2239 20.2239 13.5 20.5 13.5H21.5C21.7761 13.5 22 13.2239 22 13V12Z" />
          </svg>
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M23 3a10.91 10.91 0 01-3.1.85A4.99 4.99 0 0022.4 1a10.26 10.26 0 01-3.15 1.21A5.01 5.01 0 0016.35 0a4.98 4.98 0 00-4.96 6.13A14.18 14.18 0 011.67 1.16a5.001 5.001 0 001.55 6.65A4.98 4.98 0 01.99 8v.05a5.01 5.01 0 004.01 4.91 5.11 5.11 0 01-2.26.09c.64 1.98 2.5 3.41 4.71 3.46a10.11 10.11 0 01-6.27 2.17A10.56 10.56 0 010 20.29a14.27 14.27 0 007.7 2.27c9.21 0 14.25-7.62 14.25-14.25v-.65a10.1 10.1 0 002.48-2.55z" />
          </svg>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zm-11 19H6v-8h2v8zm-1-9.059c-.779 0-1.412-.634-1.412-1.413 0-.779.633-1.413 1.412-1.413.779 0 1.413.634 1.413 1.413 0 .779-.634 1.413-1.413 1.413zm14.059 9.059h-2v-4.406c0-1.055-.038-2.418-1.467-2.418-1.469 0-1.694 1.146-1.694 2.328v4.496h-2v-8h2v1.1c.274-.527.953-1.074 1.933-1.074 2.069 0 2.455 1.358 2.455 3.137v4.837z" />
          </svg>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2.4c-5.25 0-9.6 4.35-9.6 9.6 0 5.25 4.35 9.6 9.6 9.6 5.25 0 9.6-4.35 9.6-9.6 0-5.25-4.35-9.6-9.6-9.6zm0 17.76c-4.5 0-8.16-3.66-8.16-8.16 0-4.5 3.66-8.16 8.16-8.16 4.5 0 8.16 3.66 8.16 8.16 0 4.5-3.66 8.16-8.16 8.16zM18.5 9.8c-.6 0-1.1-.49-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.49 1.1 1.1 0 .6-.5 1.1-1.1 1.1zm-6.5 1.65c-2.69 0-4.9-2.21-4.9-4.9s2.21-4.9 4.9-4.9 4.9 2.21 4.9 4.9-2.21 4.9-4.9 4.9z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contacto;
