// src/components/MainContent.jsx
import React from "react";

const MainContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300">
      {/* Hero Section */}
      <section id="hero" className="text-center">
        <h1 className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
          ¡Hola, soy [Tu Nombre]!
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Soy un desarrollador frontend apasionado por crear experiencias web
          modernas y eficientes. Tengo experiencia en tecnologías como React,
          Tailwind CSS, y JavaScript, y me encanta construir interfaces de
          usuario dinámicas y atractivas.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-12 w-full">
        <h2 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
          Proyectos Destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Proyecto 1</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Descripción breve del proyecto 1. Este proyecto fue desarrollado
              utilizando [Tecnologías]. Puedes verlo en acción{" "}
              <a
                href="#"
                className="text-indigo-500 dark:text-indigo-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">Proyecto 2</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Descripción breve del proyecto 2. Este proyecto fue desarrollado
              utilizando [Tecnologías]. Puedes verlo en acción{" "}
              <a
                href="#"
                className="text-indigo-500 dark:text-indigo-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-12 text-center w-full">
        <h2 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
          Contacto
        </h2>
        <p className="text-lg mb-4">
          Estoy disponible para nuevas oportunidades. ¡Hablemos!
        </p>
        <a
          href="mailto:tucorreo@ejemplo.com"
          className="inline-block bg-indigo-600 dark:bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-500 dark:hover:bg-indigo-400 transition duration-300"
        >
          Envíame un correo
        </a>
      </section>
    </div>
  );
};

export default MainContent;
