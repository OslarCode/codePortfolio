// src/pages/NotFound.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-6 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <motion.h1
        className="text-7xl sm:text-8xl font-Playfair font-bold mb-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-lg text-center max-w-md font-Madefor mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        La página que estás buscando no existe o ha sido movida. Pero no te
        preocupes, puedes volver al inicio.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
