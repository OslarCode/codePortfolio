// src/components/Project.jsx
import React from "react";

const Project = ({ title, description, imageSrc, link, altText }) => {
  return (
    <div className="relative rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-6 text-center bg-white shadow-md dark:shadow-md overflow-hidden mb-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-48 object-cover mb-4 rounded-t-md"
      />
      <div className="text-left">
        <h3 className="text-xl font-Playfair mb-2 text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="font-Madefor text-gray-700 dark:text-gray-300 mb-4">
          {description}{" "}
          <a
            href={link}
            className="text-blue-600 dark:text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Project;
