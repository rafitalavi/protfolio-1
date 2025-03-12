import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css'; // Import your custom CSS file

const Projects = () => {
  return (
    <motion.section
      className="projects py-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the section is visible
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="container">
        <motion.h2
          className="display-4 text-light"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          Projects
        </motion.h2>

        <motion.ul
          className="projects-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.li
            className="project-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          >
            <a
              href="https://github.com/rafitalavi/devin_scioal_app_for_devlpoers"
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              DevIn - Social App for Developers
            </a>
          </motion.li>

          <motion.li
            className="project-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          >
            <a
              href="https://github.com/rafitalavi/BookPicker"
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              BookPicker - Book Listing and Wishlist App
            </a>
          </motion.li>

          <motion.li
            className="project-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          >
            <a
              href="https://github.com/rafitalavi/Online_market_place"
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              E-commerce Website with Django
            </a>
          </motion.li>

          <motion.li
            className="project-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
          >
            <a
              href="https://github.com/rafitalavi/TicketManagement"
              className="text-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ticket Management System with QR Code Verification
            </a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.section>
  );
};

export default Projects;
