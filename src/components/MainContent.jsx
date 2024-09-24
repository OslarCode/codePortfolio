// src/components/MainContent.jsx
import React from "react";
import Project from "./Project";
import Feature from "./Feature";

const MainContent = ({ darkMode }) => {
  const projects = [
    {
      title: "E-commerce React Store",
      description:
        "Online store with React, Redux and Tailwind CSS, including shopping cart, product filters and a secure payment system.",
      imageSrc: "/projects/pexels-pixabay-259200.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Personal Portfolio",
      description:
        "Portfolio website for a graphic designer using React and Tailwind CSS, with an interactive gallery, blog section and integration with a headless CMS.",
      imageSrc: "/projects/pexels-ann-h-45017-14936124.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Data Analysis Dashboard",
      description:
        "Interactive dashboard with React and D3.js for real-time data visualization, including dynamic graphs, tables and advanced filters.",
      imageSrc: "/projects/pexels-rdne-7948060.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Task Application",
      description:
        "Task management application with React and Tailwind CSS, allowing you to add, edit, delete tasks and set reminders. I used localStorage for data persistence.",
      imageSrc: "/projects/pexels-n-voitkevich-6120218.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Blog Platform",
      description:
        "Blogging platform with React and Firebase, where users can publish, edit and delete articles. The platform includes authentication, comments, and a category system for easy navigation.",
      imageSrc: "/projects/pexels-pixabay-267389.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Fitness Tracker App",
      description:
        "Physical activity and fitness goal tracking application with React and Tailwind CSS, which allows you to record workouts, set goals, and view progress using interactive graphics.",
      imageSrc: "/projects/pexels-jonathanborba-14037022.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Reservation System",
      description:
        "Reservation system for a restaurant chain with a friendly interface in React and an API for real-time management. Includes calendar view, email confirmations and an administration panel to manage reservations.",
      imageSrc: "/projects/pexels-ionix08-540650-1648373.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Survey Application",
      description:
        "Application to create and manage surveys with React and a NoSQL database. Users can create custom surveys, collect responses, and view real-time statistics.",
      imageSrc: "/projects/pexels-cottonbro-4065891.jpg",
      link: "https://ecommerce-example.com",
      altText: "E-commerce React Store",
    },
    {
      title: "Productivity Application",
      description:
        "Productivity application designed to manage tasks and projects, helping to organize daily, weekly and monthly activities, and keep track of progress.",
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
          こんにちは、ジョン・ドゥです！
        </h1>
        <div className="p-6 w-full">
          <p className="text-lg max-w-3xl mx-auto font-Madefor text-gray-900 dark:text-gray-300">
            容ル局6窓どらつか後程めルそ口展ひ業護っまや験見チ向注ユエ麓報マソヒユ豊越ノオエ弱祭フテスヒ嶺件皇ユコモ米3演こー控4侮冗きゆり。丁ソシヱル紙価り果経断ずろ事移指中こる画商なる教安ぎへね政快スくり汰復際京ろ目氏め一験キサトウ必勝ン玉無期熊習ゆ。田ワハニ組気純レクネヒ権氏しリづ校康ナシク下29重ムチワ戦偉づえろぎ営決コヤツロ県能へし定作タ社佐エ陸算幹秋豊らど。
          </p>
          <hr className="w-48 h-1 mx-auto my-4 bg-gray-800 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-12 w-full">
        <h2 className="text-2xl font-Raleway text-center font-Playfair text-gray-800 dark:text-gray-100 mb-6">
          注目のプロジェクト
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
          スキル
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
