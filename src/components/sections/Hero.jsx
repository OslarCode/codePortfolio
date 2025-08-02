// src/components/sections/Hero.jsx
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="text-center px-6 py-20 md:py-32">
      <motion.h1
        className="text-5xl sm:text-6xl font-bold font-Playfair text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I´m John Doe
      </motion.h1>
      <motion.p
        className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-Madefor"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies
        hendrerit aliquam. Pellentesque vehicula elit mi, quis eleifend justo
        vehicula at.
      </motion.p>
      <motion.hr
        className="w-24 h-1 mx-auto mt-10 bg-gray-800 border-0 rounded dark:bg-gray-600"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
    </section>
  );
};

export default Hero;
