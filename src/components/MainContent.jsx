// src/components/MainContent.jsx
import React from "react";
import Divider from "./Divider";

const MainContent = ({ darkMode }) => {
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
        <p className="text-lg max-w-3xl mx-auto text-gray-900 dark:text-gray-300">
          Soy un desarrollador frontend con más de 5 años de experiencia en la
          creación de interfaces web modernas y funcionales. Mi trayectoria como
          freelance me ha permitido colaborar con una variedad de clientes,
          desde startups hasta empresas consolidadas, ayudándoles a llevar sus
          ideas a la realidad digital. Estoy especializado en tecnologías como
          React, Tailwind CSS y JavaScript, y me apasiona construir soluciones
          intuitivas y atractivas que mejoren la experiencia del usuario. Cada
          proyecto es una oportunidad para aprender y crecer, y me esfuerzo por
          estar al día con las últimas tendencias y mejores prácticas en
          desarrollo web.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-12 w-full">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">
          Proyectos Destacados
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              E-commerce React Store
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollo de una tienda en línea completa utilizando React, Redux
              para la gestión del estado y Tailwind CSS para el diseño.
              Implementé funcionalidades como el carrito de compras, filtros de
              productos y un sistema de pago seguro. Este proyecto ayudó a
              aumentar las ventas en un 30% al proporcionar una experiencia de
              usuario fluida y moderna. Puedes verlo en acción{" "}
              <a
                href="https://ecommerce-example.com"
                className="text-blue-600 dark:text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Portfolio Personal
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Creación de un sitio web de portfolio para un diseñador gráfico
              utilizando React y Tailwind CSS. El sitio destaca los trabajos del
              diseñador con una galería interactiva y una sección de blog.
              Implementé una integración con un CMS headless para la gestión de
              contenido y optimicé el sitio para un rendimiento rápido y una
              carga eficiente. Puedes verlo en{" "}
              <a
                href="https://portfolio-example.com"
                className="text-blue-600 dark:text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Dashboard de Análisis de Datos
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollo de un dashboard interactivo para la visualización de
              datos en tiempo real utilizando React y D3.js. El proyecto incluía
              gráficos dinámicos, tablas de datos y filtros avanzados para
              analizar grandes volúmenes de información. Implementé una API
              RESTful para la integración de datos y aseguré un rendimiento
              óptimo con técnicas de carga diferida. Puedes ver una demo{" "}
              <a
                href="https://dashboard-example.com"
                className="text-blue-600 dark:text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>

          {/* Project 4 */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Aplicación de Tareas
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Implementación de una aplicación de gestión de tareas con una
              interfaz intuitiva usando React y Tailwind CSS. Incluye
              funcionalidades como agregar, editar y eliminar tareas, así como
              establecer recordatorios. Utilicé localStorage para la
              persistencia de datos y realicé pruebas exhaustivas para asegurar
              la robustez de la aplicación. Puedes probarla{" "}
              <a
                href="https://tasks-app-example.com"
                className="text-blue-600 dark:text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>

          {/* Project 5 */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Plataforma de Blog
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollo de una plataforma de blogging donde los usuarios pueden
              publicar, editar y eliminar sus artículos. Utilicé React para la
              interfaz y Firebase para la autenticación y almacenamiento de
              datos. El proyecto incluye una función de comentarios y un sistema
              de categorías para facilitar la navegación. Puedes ver el proyecto{" "}
              <a
                href="https://blog-platform-example.com"
                className="text-blue-600 dark:text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>

          {/* Project 6 */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Aplicación de Seguimiento de Fitness
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Creación de una aplicación para el seguimiento de actividades
              físicas y objetivos de fitness. La aplicación, construida con
              React y Tailwind CSS, permite a los usuarios registrar sus
              entrenamientos, establecer metas y realizar un seguimiento del
              progreso. Incluye gráficos interactivos para visualizar el
              rendimiento. Puedes probar la aplicación{" "}
              <a
                href="https://fitness-tracker-example.com"
                className="text-blue-600 dark:text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>

          {/* Project 7 */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Sistema de Reservas
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollo de un sistema de reservas para una cadena de
              restaurantes. Implementé una interfaz de usuario amigable con
              React y una API para la gestión de reservas en tiempo real. La
              solución incluye una vista de calendario, confirmaciones por
              correo electrónico y un panel de administración para gestionar las
              reservas. Puedes ver el proyecto{" "}
              <a
                href="https://reservation-system-example.com"
                className="text-blue-600 dark:text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>

          {/* Project 8 */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Aplicación de Encuestas
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Desarrollo de una aplicación para la creación y gestión de
              encuestas. Utilicé React para la interfaz y una base de datos
              NoSQL para almacenar las respuestas. La aplicación permite a los
              usuarios crear encuestas personalizadas, recopilar respuestas y
              ver estadísticas en tiempo real. Puedes verlo en{" "}
              <a
                href="https://survey-app-example.com"
                className="text-blue-600 dark:text-blue-400 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                aquí
              </a>
              .
            </p>
          </div>

          {/* Project 9 */}
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Aplicación de Productividad
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              TodoList Pro es una aplicación de productividad que te permite
              gestionar tus tareas y proyectos de manera eficiente. La
              aplicación está diseñada para ayudarte a organizar tus tareas
              diarias, semanales y mensuales, y a mantener un registro de tus
              progresos.. Puedes verlo en{" "}
              <a
                href="https://survey-app-example.com"
                className="text-blue-600 dark:text-blue-400 underline"
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
            <img src="./icons/css3.svg" alt="HTML5" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/javaScript.svg" alt="HTML5" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/react.svg" alt="HTML5" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">React</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/tailwind.svg" alt="HTML5" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/node.svg" alt="HTML5" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">Node.js</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="./icons/git.svg" alt="HTML5" className="w-8 h-8" />
            <p className="mt-2 text-lg font-medium">Git</p>
          </div>
        </div>
      </section>

      <Divider color="blue-500" thickness="2px" marginY="8" />

      {/* Contact Section */}
      <section id="contact" className="mt-12 text-center w-full">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">
          Contacto
        </h2>
        <p className="text-lg mb-4 text-gray-900 dark:text-gray-300">
          Estoy disponible para nuevas oportunidades y colaboraciones. Si estás
          interesado en trabajar conmigo o simplemente quieres decir hola, no
          dudes en contactarme.
        </p>
        <a
          href="mailto:tucorreo@ejemplo.com"
          className="inline-block bg-blue-600 dark:bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-500 dark:hover:bg-blue-400 transition duration-300"
        >
          Envíame un correo
        </a>
      </section>

      {/* Mentoring Section */}
      <section id="mentoring" className="mt-12 text-center w-full">
        <h2 className="text-3xl font-semibold text-blue-700 dark:text-blue-400 mb-6">
          Mentoría y Educación
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-900 dark:text-gray-300">
          Además de mi experiencia como desarrollador, tengo una sólida
          formación en mentoría y educación en informática y nuevas
          tecnologías...
        </p>
      </section>
    </div>
  );
};

export default MainContent;
