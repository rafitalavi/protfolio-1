import React, { Suspense, lazy, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/global.css";
import { Helmet } from "react-helmet-async";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Experience = lazy(() => import("./components/Experience"));
const Publication = lazy(() => import("./components/Publication"));
const Contact = lazy(() => import("./components/Contact"));

// Loading screen component
const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>Welcome to Rafit Alavi Portfolio</h1>
      <p>Loading...</p>
    </motion.div>
  );
};

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false); // Hide loading screen after 2 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <motion.div
      className="app-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>Rafit Alavi | Developer & SQA Engineer</title>
        <meta name="description" content="Portfolio of Rafit Alavi - A passionate Python Developer, React Developer, and SQA Engineer." />
        <meta name="keywords" content="Python, Django, React, Software Testing, SQA, Web Development" />
      </Helmet>

      <Navbar />
      <Suspense fallback={showLoading ? <LoadingScreen /> : null}>
        {/* Hero Section */}
        <motion.section id="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Hero />
        </motion.section>

        {/* About Section */}
        <motion.section id="about" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <About />
        </motion.section>

        {/* Services Section */}
        <motion.section id="service" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Services />
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <Projects />
        </motion.section>

        {/* Skills Section */}
        <motion.section id="skills" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
          <Skills />
        </motion.section>

        {/* Experience Section */}
        <motion.section id="experience" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Experience />
        </motion.section>

        {/* Publication Section */}
        <motion.section id="publication" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Publication />
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <Contact />
        </motion.section>
      </Suspense>

      <Footer />
    </motion.div>
  );
};

export default App;
