import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook, FaQuestionCircle } from 'react-icons/fa'; // React Iconsimport '../styles/Hero.css';
// import '../styles/Hero.css';  // Uncomment and ensure the path is correct

const Hero = () => {
  return (
    <motion.section
      className="hero text-center py-5 bg-dark d-flex align-items-center justify-content-center"
      initial={{ opacity: 0, y: -50 }} // Start off-screen at the top with opacity 0
      animate={{ opacity: 1, y: 0 }}   // Fade in and slide down to the center
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text on the Left Side */}
          <div className="col-md-6 text-md-left text-center">
            <motion.h1
              className="display-4 text-light"
              initial={{ opacity: 0, x: -50 }} // Start from the left
              animate={{ opacity: 1, x: 0 }}    // Fade in and slide to original position
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            >
              Hi, I am Rafit Alavi
            </motion.h1>
            <motion.p
              className="lead text-info"
              initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and from below
              animate={{ opacity: 1, y: 0 }}  // Fade in and move to normal position
              transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            >
              Software Engineer | Python | React | Django | SQA
            </motion.p>
            <motion.a
  href="/assets/Rafit-Alavi.pdf"
  download
  className="btn btn-light btn-lg"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
  aria-label="Download CV"
>
  Download CV
</motion.a>

          </div>

          {/* Image on the Right Side */}
          <div className="col-md-6 text-center">
            <motion.img
              src="/assets/profile.jpg"
              alt="Rafit Alavi"
              className="profile-img rounded-circle img-fluid mb-4 shadow-lg"
              initial={{ scale: 0.8 }} // Start smaller
              animate={{ scale: 1 }}    // Scale to full size
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <a 
              href="https://www.linkedin.com/in/rafit-alavi-6a189b1b6/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FaLinkedin size={30} className="text-info" />
            </a>
          </div>
          <div className="col-auto">
            <a 
              href="https://github.com/rafitalavi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FaGithub size={30} className="text-light" />
            </a>
          </div>
          <div className="col-auto">
            <a 
               href="mailto:rafitalavi12345@gmail.com"
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FaEnvelope size={30} className="text-info" />
            </a>
          </div>
          <div className="col-auto">
            <a 
              href="https://www.facebook.com/rj.sifat.37" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FaFacebook size={30} className="text-primary" />
            </a>
          </div>
           {/* LeetCode Icon */}
           <div className="col-auto">
            <a 
              href="https://leetcode.com/u/rafitalavi/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FaQuestionCircle size={30} className="text-success" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
