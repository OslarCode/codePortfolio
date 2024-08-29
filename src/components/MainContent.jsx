// src/components/MainContent.jsx
import React from "react";
import Project from "./Project";
import Feature from "./Feature";

const MainContent = ({ darkMode }) => {
  const projects = [
    {
      title: "E-commerce React Store",
      description:
        "Tienda en línea con React, Redux y Tailwind CSS, incluyendo carrito de compras, filtros de productos y un sistema de pago seguro.",
      imageSrc: "/projects/pexels-pixabay-259200.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Portfolio Personal",
      description:
        "Sitio web de portfolio para un diseñador gráfico usando React y Tailwind CSS, con una galería interactiva, sección de blog e integración con un CMS headless.",
      imageSrc: "/projects/pexels-ann-h-45017-14936124.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Dashboard de Análisis de Datos",
      description:
        "Dashboard interactivo con React y D3.js para la visualización de datos en tiempo real, incluyendo gráficos dinámicos, tablas y filtros avanzados. ",
      imageSrc: "/projects/pexels-rdne-7948060.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Aplicación de Tareas",
      description:
        "Aplicación de gestión de tareas con React y Tailwind CSS, que permite agregar, editar, eliminar tareas y establecer recordatorios. Usé localStorage para la persistencia de datos.",
      imageSrc: "/projects/pexels-n-voitkevich-6120218.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Plataforma de Blog",
      description:
        "Plataforma de blogging con React y Firebase, donde los usuarios pueden publicar, editar y eliminar artículos. La plataforma incluye autenticación, comentarios y un sistema de categorías para facilitar la navegación.",
      imageSrc: "/projects/pexels-pixabay-267389.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Aplicación de Seguimiento de Fitness",
      description:
        "Aplicación de seguimiento de actividades físicas y objetivos de fitness con React y Tailwind CSS, que permite registrar entrenamientos, establecer metas y visualizar el progreso mediante gráficos interactivos.",
      imageSrc: "/projects/pexels-jonathanborba-14037022.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Sistema de Reservas",
      description:
        "Sistema de reservas para una cadena de restaurantes con una interfaz amigable en React y una API para la gestión en tiempo real.Incluye vista de calendario, confirmaciones por correo electrónico y un panel de administración para gestionar reservas.",
      imageSrc: "/projects/pexels-ionix08-540650-1648373.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Aplicación de Encuestas",
      description:
        "Aplicación para crear y gestionar encuestas con React y una base de datos NoSQL. Los usuarios pueden crear encuestas personalizadas, recopilar respuestas y ver estadísticas en tiempo real.",
      imageSrc: "/projects/pexels-cottonbro-4065891.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Aplicación de Productividad",
      description:
        "Aplicación de productividad diseñada para gestionar tareas y proyectos, ayudando a organizar actividades diarias, semanales y mensuales, y a mantener un registro de progresos.",
      imageSrc: "/projects/pexels-ijonrobles-2388936.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    // ... Añade los demás proyectos aquí de la misma manera
  ];
  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen px-6 py-12 ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      } ${darkMode ? "text-gray-100" : "text-gray-800"}`}
    >
      {/* Hero Section */}
      <section id="hero" className="text-center">
        <h1 className="text-9xl font-Playfair text-gray-800 dark:text-gray-100 mt-12 mb-4">
          ¡Hola, soy Oslar!
        </h1>
        <div className="p-6 w-full">
          <p className="text-lg max-w-3xl mx-auto font-Madefor text-gray-900 dark:text-gray-300">
            Desarrollador frontend con 5+ años de experiencia en React, Tailwind
            CSS y JavaScript. Me apasiona mejorar la experiencia del usuario y
            mantenerme al día con las últimas tendencias.
          </p>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-800 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-12 w-full">
        <h2 className="text-2xl font-Raleway text-center font-Playfair text-gray-800 dark:text-gray-100 mb-6">
          Proyectos Destacados
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 flex items-stretch"
            >
              <Project
                title={project.title}
                description={project.description}
                imageSrc={project.imageSrc}
                link={project.link}
                altText={project.altText}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-12 text-center w-full">
        <h2 className="text-2xl font-Playfair text-gray-800 dark:text-gray-100 mb-6">
          Habilidades
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <img src="./icons/html5.svg" alt="HTML5" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/css3.svg" alt="CSS3" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./icons/javaScript.svg"
              alt="JavaScript"
              className="w-8 h-8"
            />
            <p className="mt-2 text-lg font-medium">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/react.svg" alt="React" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="./icons/tailwind.svg"
              alt="Tailwind CSS"
              className="w-8 h-8"
            />
            <p className="mt-2 text-lg font-medium">Tailwind</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/node.svg" alt="Node.js" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/git.svg" alt="Git" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">Git</p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <Feature />
    </div>
  );
};

export default MainContent;
