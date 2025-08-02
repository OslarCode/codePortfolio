// src/components/sections/Skills.jsx
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "/icons/html-5-svgrepo-com.svg" },
  { name: "CSS3", icon: "/icons/css-3-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
  { name: "React", icon: "/icons/react-svgrepo-com.svg" },
  { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
  { name: "Node.js", icon: "/icons/node-js-svgrepo-com.svg" },
  { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-Playfair font-bold text-gray-800 dark:text-gray-100 mb-4">
          Technologies
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 font-Madefor text-base">
          Tools and technologies I use to create modern and scalable
          experiences.
        </p>
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 mb-2"
              loading="lazy"
            />
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
