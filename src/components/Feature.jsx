// src/components/Feature.jsx
import React from "react";
import {
  ChatBubbleOvalLeftIcon,
  BoltIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const Feature = () => {
  return (
    <div className="bg-white">
      <section
        id="features"
        className="relative block px-6 py-10 md:py-20 md:px-10 bg-gray-100 dark:bg-gray-800"
      >
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="my-3 flex items-center justify-center font-Playfair text-2xl text-gray-800 dark:text-gray-100">
            Why choose me
          </span>
          <h2 className="text-black font-Playfair text-3xl sm:text-4xl dark:text-gray-100">
            Experiencia, Personalización y Resultados que Impulsarán tu Éxito
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl text-center font-Madefor text-gray-600 dark:text-gray-100">
            Si buscas un programador web comprometido, experimentado y orientado
            a resultados, no dudes en contactarme. Estoy emocionado por la
            oportunidad de trabajar contigo y ayudar a llevar tu presencia en
            línea al siguiente nivel.
          </p>
        </div>
        <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gray-300">
              <ChatBubbleOvalLeftIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="mt-6 text-black dark:text-gray-100">Mentoría</h3>
            <p className="my-4 mb-0 font-Madefor text-gray-600 dark:text-gray-100">
              Como mentor especializado en nuevas tecnologías, guío a
              estudiantes y profesionales en el dominio de las últimas
              tendencias y herramientas tecnológicas. Con experiencia en
              desarrollo web y pasión por la educación, ofrezco una perspectiva
              única para ayudar a mis mentores a alcanzar sus objetivos.
            </p>
          </div>
          <div className="rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gray-300">
              <BoltIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="mt-6 text-black dark:text-gray-100">
              Actualización
            </h3>
            <p className="my-4 mb-0 font-Madefor text-gray-600 dark:text-gray-100">
              Me esfuerzo por mantenerme actualizado en las últimas tendencias y
              herramientas tecnológicas, desde desarrollo web con React y
              Tailwind CSS hasta inteligencia artificial y aprendizaje
              automático.
            </p>
          </div>
          <div className="rounded-md border border-black dark:bg-gray-800 dark:border-gray-100 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md border bg-gray-300">
              <WrenchScrewdriverIcon className="w-6 h-6 text-black" />
            </div>
            <h3 className="mt-6 text-black dark:text-gray-100">
              Personalizado
            </h3>
            <p className="my-4 mb-0 font-Madefor text-gray-600 dark:text-gray-100">
              Entiendo que cada negocio es único, y creo soluciones web que se
              adaptan específicamente a tus necesidades. No ofrezco plantillas
              genéricas; en su lugar, desarrollo estrategias y diseños a medida
              que reflejan tu marca y objetivos, garantizando una solución que
              realmente funcione para ti.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
