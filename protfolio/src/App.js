import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Publication = lazy(() => import("./components/Publication"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <motion.div
      className="app-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <motion.section id="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Hero />
        </motion.section>

        <motion.section id="about" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <About />
        </motion.section>

        <motion.section id="projects" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Projects />
        </motion.section>

        <motion.section id="skills" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <Skills />
        </motion.section>

        <motion.section id="experience" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Experience />
        </motion.section>

        <motion.section id="publication" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Publication />
        </motion.section>

        <motion.section id="contact" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Contact />
        </motion.section>
      </Suspense>

      <Footer />
    </motion.div>
  );
};

export default App;
