import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

const About = () => {
  return (
    <motion.section
      className="about py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container">
        {/* Heading Animation */}
        <motion.h2
          className="display-4 text-light"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About Me
        </motion.h2>

        {/* Subtitle Animation */}
        <motion.p
          className="lead text-info"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          B.Sc. in Computer Science & Engineering from Mymensingh Engineering College, University of Dhaka.
        </motion.p>

        {/* Description Animation */}
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="col-md-12">
            <p className="text-white">
              I'm passionate about technology, coding, and solving problems. Over the years, I have honed my skills in various programming languages, frameworks, and technologies to deliver high-quality software solutions.
            </p>
          </div>
        </motion.div>

        {/* Accounts Links */}
        {/* <motion.div
          className="social-links mt-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <h3 className="text-light">Find me on:</h3>
          <div className="d-flex justify-content-center">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link text-info mx-3"
            >
              <i className="fab fa-linkedin fa-2x"></i> LinkedIn
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link text-info mx-3"
            >
              <i className="fab fa-github fa-2x"></i> GitHub
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-link text-info mx-3"
            >
              <i className="fab fa-twitter fa-2x"></i> Twitter
            </a>
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default About;
