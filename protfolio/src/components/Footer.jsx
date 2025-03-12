import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Footer.css';  // Add custom CSS file for footer styles

const Footer = () => {
  return (
    <motion.footer 
      className="footer py-4 text-center" 
      initial={{ y: 50 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 1 }}
    >
      <p className="text-light">&copy; 2025 Rafit Alavi. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
