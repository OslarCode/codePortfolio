// src/components/Project.jsx
import React from "react";

const Project = ({ title, description, imageSrc, link, altText }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg overflow-hidden mb-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <img src={imageSrc} alt={altText} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-Playfair mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="font-Madefor text-gray-700 dark:text-gray-300">
          {description}{" "}
          <a
            href={link}
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
  );
};

export default Project;
