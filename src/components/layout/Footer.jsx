// src/components/layout/Footer.jsx
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          © {currentYear} Oslar. All rights reserved.
        </p>

        <div className="flex justify-center space-x-5 mt-4">
          <a
            href="https://twitter.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-500 transition"
          >
            <img
              src="/social/twitter-svgrepo-com.svg"
              alt="Twitter"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition"
          >
            <img
              src="/social/linkedin-svgrepo-com.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-500 transition"
          >
            <img
              src="/social/github-svgrepo-com.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
