import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css'; // Import your custom CSS file

const Experience = () => {
  return (
    <motion.section
      className="experience py-5"
      initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
      animate={{ opacity: 1, x: 0 }}    // Fade in and slide in from the left
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className="container">
        <motion.h2
          className="display-4 text-light"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          Experience
        </motion.h2>
        <p className="lead text-info">
          2024/11 – Present | Dhaka, Bangladesh
        </p>
        <div className="row">
          <div className="col-md-12">
            <motion.ul
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
              >
                <strong>Built a Bengali font converter</strong> from Vijoy to Unicode for Amar Desh Newspaper.
                <br />
                I developed a Python-based tool to convert the legacy Vijoy font into the Unicode format, enabling seamless integration into modern digital platforms for the newspaper.
                <br />
                <a
                  href="https://converter.dailyamardesh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info"
                >
                  Link to Converter
                </a>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
              >
                <strong>Built a Python DICOM file uploader</strong> to handle medical imaging data uploads.
                <br />
                The tool facilitates uploading and processing DICOM files, which are crucial for storing and transmitting medical imaging data, enabling a smoother workflow in healthcare applications.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
              >
                Acquired practical experience in <strong>testing and planning e-commerce software systems</strong>.
                <br />
                I worked closely with the development team to plan, test, and optimize e-commerce solutions, ensuring robust performance and user-friendly interfaces in real-time systems.
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
              >
                Played a key role in the <strong>development and quality assurance</strong> of a multi-vendor real-time hospital management system.
                <br />
                I contributed to both the backend development and testing phases, ensuring that multiple hospital vendors could seamlessly manage patient data, appointments, and records with minimal downtime.
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
