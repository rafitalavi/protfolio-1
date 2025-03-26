import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav 
      className="navbar navbar-expand-lg navbar-dark bg-dark shadow-3d" 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container">
        <motion.h1 
          className="navbar-brand text-light" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Rafit Alavi
        </motion.h1>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <motion.li 
              className="nav-item" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#hero">
                <FaHome className="mr-2" />
                Home
              </a>
            </motion.li>
            <motion.li 
              className="nav-item " 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#about">
                <FaUser className="mr-2" />
                About
              </a>
            </motion.li>
            <motion.li 
              className="nav-item" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#service">
                <FaUser className="mr-2" />
                Service
              </a>
            </motion.li>
            <motion.li 
              className="nav-item" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#projects">
                <FaCode className="mr-2" />
                Projects
              </a>
            </motion.li>
            <motion.li 
              className="nav-item" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#skills">
                <FaCode className="mr-2" />
                Skills
              </a>
            </motion.li>
            <motion.li 
              className="nav-item" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#experience">
                <FaGraduationCap className="mr-2" />
                Experience
              </a>
            </motion.li>
            <motion.li 
              className="nav-item" 
              whileHover={{ scale: 1.1 }} 
              transition={{ duration: 0.3 }}
            >
              <a className="nav-link" href="#contact">
                <FaEnvelope className="mr-2" />
                Contact
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
