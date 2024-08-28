// src/components/MainContent.jsx
import React from "react";
import Project from "./Project";

const MainContent = ({ darkMode }) => {
  const projects = [
    {
      title: "E-commerce React Store",
      description:
        "Desarrollo de una tienda en línea completa utilizando React, Redux para la gestión del estado y Tailwind CSS para el diseño. Implementé funcionalidades como el carrito de compras, filtros de productos y un sistema de pago seguro. Este proyecto ayudó a aumentar las ventas en un 30% al proporcionar una experiencia de usuario fluida y moderna.",
      imageSrc: "/images/projects/ecommerce-react-store.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Portfolio Personal",
      description:
        "Creación de un sitio web de portfolio para un diseñador gráfico utilizando React y Tailwind CSS. El sitio destaca los trabajos del diseñador con una galería interactiva y una sección de blog. Implementé una integración con un CMS headless para la gestión de contenido y optimicé el sitio para un rendimiento rápido y una carga eficiente. ",
      imageSrc: "/images/projects/ecommerce-react-store.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Dashboard de Análisis de Datos",
      description:
        "Desarrollo de un dashboard interactivo para la visualización de datos en tiempo real utilizando React y D3.js. El proyecto incluía gráficos dinámicos, tablas de datos y filtros avanzados para analizar grandes volúmenes de información. Implementé una API RESTful para la integración de datos y aseguré un rendimiento óptimo con técnicas de carga diferida.",
      imageSrc: "/images/projects/ecommerce-react-store.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Aplicación de Tareas",
      description:
        "Implementación de una aplicación de gestión de tareas con una interfaz intuitiva usando React y Tailwind CSS. Incluye funcionalidades como agregar, editar y eliminar tareas, así como establecer recordatorios. Utilicé localStorage para la persistencia de datos y realicé pruebas exhaustivas para asegurar la robustez de la aplicación",
      imageSrc: "/images/projects/ecommerce-react-store.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Plataforma de Blog",
      description:
        "Desarrollo de una plataforma de blogging donde los usuarios pueden publicar, editar y eliminar sus artículos. Utilicé React para la interfaz y Firebase para la autenticación y almacenamiento de datos. El proyecto incluye una función de comentarios y un sistema de categorías para facilitar la navegación.",
      imageSrc: "/images/projects/ecommerce-react-store.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Aplicación de Seguimiento de Fitness",
      description:
        "Creación de una aplicación para el seguimiento de actividades físicas y objetivos de fitness. La aplicación, construida con React y Tailwind CSS, permite a los usuarios registrar sus entrenamientos, establecer metas y realizar un seguimiento del progreso. Incluye gráficos interactivos para visualizar el rendimiento.",
      imageSrc: "/images/projects/ecommerce-react-store.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Sistema de Reservas",
      description:
        "Desarrollo de un sistema de reservas para una cadena de restaurantes. Implementé una interfaz de usuario amigable con React y una API para la gestión de reservas en tiempo real. La solución incluye una vista de calendario, confirmaciones por correo electrónico y un panel de administración para gestionar las reservas.",
      imageSrc: "/images/projects/ecommerce-react-store.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Aplicación de Encuestas",
      description:
        "Desarrollo de una aplicación para la creación y gestión de encuestas. Utilicé React para la interfaz y una base de datos NoSQL para almacenar las respuestas. La aplicación permite a los usuarios crear encuestas personalizadas, recopilar respuestas y ver estadísticas en tiempo real",
      imageSrc: "/images/projects/ecommerce-react-store.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Aplicación de Productividad",
      description:
        "TodoList Pro es una aplicación de productividad que te permite gestionar tus tareas y proyectos de manera eficiente. La aplicación está diseñada para ayudarte a organizar tus tareas diarias, semanales y mensuales, y a mantener un registro de tus progresos",
      imageSrc: "/images/projects/ecommerce-react-store.jpg",
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
        <h1 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mt-4 mb-4">
          ¡Hola, soy Oslar!
        </h1>
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6">
          <p className="text-lg max-w-3xl mx-auto text-gray-900 dark:text-gray-300">
            Soy un desarrollador frontend con más de 5 años de experiencia en la
            creación de interfaces web modernas y funcionales. Mi trayectoria
            como freelance me ha permitido colaborar con una variedad de
            clientes, desde startups hasta empresas consolidadas, ayudándoles a
            llevar sus ideas a la realidad digital. Estoy especializado en
            tecnologías como React, Tailwind CSS y JavaScript, y me apasiona
            construir soluciones intuitivas y atractivas que mejoren la
            experiencia del usuario. Cada proyecto es una oportunidad para
            aprender y crecer, y me esfuerzo por estar al día con las últimas
            tendencias y mejores prácticas en desarrollo web.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-12 w-full">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">
          Proyectos Destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Projects 1 */}
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              link={project.link}
              altText={project.altText}
            />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-12 text-center w-full">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">
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
            <p className="mt-2 text-lg font-medium">Tailwind CSS</p>
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

      {/* Mentoring Section */}
      <section id="contact-mentoring-education" className="mt-12 w-full">
        <h2 className="text-3xl font-semibold text-center text-blue-700 dark:text-blue-400 mb-6">
          Mentoría y educación
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mentoring Section */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Mentoría
            </h3>
            <p className="text-lg text-gray-900 dark:text-gray-300">
              Como mentor especializado en nuevas tecnologías, guío a
              estudiantes y profesionales en el dominio de las últimas
              tendencias y herramientas tecnológicas. Con experiencia en
              desarrollo web y pasión por la educación, ofrezco una perspectiva
              única para ayudar a mis mentores a alcanzar sus objetivos.
            </p>
          </div>

          {/* Education Section */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Actualización
            </h3>
            <p className="text-lg text-gray-900 dark:text-gray-300">
              Me esfuerzo por mantenerme actualizado en las últimas tendencias y
              herramientas tecnológicas, desde desarrollo web con React y
              Tailwind CSS hasta inteligencia artificial y aprendizaje
              automático.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
