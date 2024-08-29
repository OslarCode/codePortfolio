// src/components/Project.jsx
import React from "react";

const Project = ({ title, description, imageSrc, link, altText }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col lg:flex-row">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full lg:w-1/3 rounded-lg object-cover mb-4 lg:mb-0 lg:mr-6"
        />
        <div>
          <h3 className="text-2xl font-Raleway mb-2 text-gray-800 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
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
    </div>
  );
};

export default Project;
