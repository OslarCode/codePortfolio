// src/pages/Home.jsx
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Features from "../components/sections/Features";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

const Home = ({ darkMode }) => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Features />
      <Contact darkMode={darkMode} />
      <Footer />;
    </>
  );
};

export default Home;
