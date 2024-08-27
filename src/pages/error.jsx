// src/pages/error.js

import React from "react";
import "./App.css";

const ErrorPage = () => {
  return (
    <section className="error-body h-screen w-screen relative overflow-hidden">
      <video
        preload="auto"
        className="background absolute top-0 left-0 w-full h-full z-0 grayscale luminosity"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/396624/err.mp4"
        autoPlay
        muted
        loop
      />
      <div className="message relative w-full h-full text-center z-3">
        <h1
          className="absolute top-10 left-0 w-full text-10xl font-bold text-green-500"
          style={{
            textShadow:
              "0 0 0.07em #afd33d, -0.2em 0 2em rgba(175, 211, 61, 0.3), 0.2em 0 2em rgba(175, 211, 61, 0.3)",
            userSelect: "none",
          }}
        >
          404
          <span
            className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/4 h-1 w-full overflow-hidden opacity-70"
            style={{
              animation: "scan 500ms ease-in-out infinite alternate",
            }}
          >
            404
          </span>
          <span
            className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 h-5 w-full overflow-hidden opacity-80"
            style={{
              animation: "scan 665ms ease-in-out infinite alternate",
            }}
          >
            404
          </span>
        </h1>
        <div className="bottom absolute top-2/3 left-0 w-full">
          <p className="text-2xl font-mono text-green-500 text-shadow-md filter blur-sm">
            You have lost your way
          </p>
          <a
            href="#"
            className="text-2xl font-mono text-green-500 font-bold border-2 border-green-500 uppercase py-2 px-8 rounded-sm hover:bg-green-500 hover:text-black transition duration-200 ease-in-out"
          >
            return home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
