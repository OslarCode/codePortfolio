// src/components/IntroScreen.jsx

import { useState, useEffect } from "react";

export default function IntroScreen({ onSkip }) {
  const [isVisible, setIsVisible] = useState(true);

  // Ocultar automáticamente después de 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onSkip(); // Llama a onSkip cuando la intro se oculta
    }, 5000);

    return () => clearTimeout(timer);
  }, [onSkip]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white z-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Bienvenido a mi Portfolio</h1>
        <p className="mt-4 text-lg">Un momento por favor...</p>
        <button
          onClick={() => {
            setIsVisible(false);
            onSkip(); // Llama a onSkip al hacer clic en el botón
          }}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Saltar Intro
        </button>
      </div>
    </div>
  );
}
