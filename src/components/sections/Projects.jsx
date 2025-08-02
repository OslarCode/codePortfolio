// src/components/sections/Projects.jsx
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "E-commerce React Store",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies hendrerit aliquam. Pellentesque vehicula elit mi, quis eleifend justo vehicula at. Nunc semper massa luctus dolor malesuada, iaculis tincidunt urna aliquam. v",
    imageSrc: "/projects/pexels-pixabay-259200.jpg",
    link: "https://ecommerce-example.com",
    altText: "E-commerce React Store",
  },
  {
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies hendrerit aliquam. Pellentesque vehicula elit mi, quis eleifend justo vehicula at. Nunc semper massa luctus dolor malesuada, iaculis tincidunt urna aliquam. ",
    imageSrc: "/projects/pexels-ann-h-45017-14936124.jpg",
    link: "https://ecommerce-example.com",
    altText: "Portfolio Personal",
  },
  {
    title: "Educational platform",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies hendrerit aliquam. Pellentesque vehicula elit mi, quis eleifend justo vehicula at. Nunc semper massa luctus dolor malesuada, iaculis tincidunt urna aliquam. ",
    imageSrc: "/projects/pexels-cottonbro-4065891.jpg",
    link: "https://plataforma-educativa.com",
    altText: "Pantalla de plataforma educativa",
  },
  // ... puedes añadir más
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 bg-gray-100 dark:bg-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center font-Playfair mb-12 text-gray-800 dark:text-gray-100"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
