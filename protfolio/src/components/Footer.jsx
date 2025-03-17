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
      <a href="https://api.whatsapp.com/send?phone=01631381077&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." 
   className="float" target="_blank" rel="noopener noreferrer">
  <i className="fa fa-whatsapp my-float"></i>
</a>

    </motion.footer>
    
  );
};

export default Footer;
