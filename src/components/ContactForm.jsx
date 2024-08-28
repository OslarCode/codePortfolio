// src/components/ContactForm.jsx
import React from "react";

const ContactForm = ({ darkMode }) => {
  return (
    <section
      id="contacto"
      className={`py-12 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
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
    </section>
  );
};

export default ContactForm;
