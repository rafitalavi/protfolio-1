import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Projects.css';

const projectsData = [
  { name: "DevIn - Social App for Developers", link: "https://github.com/rafitalavi/devin_scioal_app_for_devlpoers" },
  { name: "BookPicker - Book Listing and Wishlist App", link: "https://github.com/rafitalavi/BookPicker" },
  { name: "E-commerce Website with Django", link: "https://github.com/rafitalavi/Online_market_place" },
  { name: "Ticket Management System with QR Code Verification", link: "https://github.com/rafitalavi/TicketManagement" },
  { name: "Protfolio", link: "https://botvictus.com/" },
  { name: "Potato Leaf Disease Detection Using CNN", link: "https://github.com/rafitalavi/Potato-Leaf_Disease_Detection_Using-" },
  { name: "GSM Based industrial protection System", link: "https://github.com/rafitalavi/Industrial-protection-System" },
  
  
  
];

const Projects = () => {
  return (
    <motion.section 
      className="projects-container  container" 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="projects-title">Projects</h2>
      <motion.div 
        className="projects-list"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={index} 
            className="project-card"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
