import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJsSquare, FaReact, FaDatabase, FaRobot } from 'react-icons/fa';
import '../styles/Skills.css'; // Import your custom CSS file

// Skills data with proficiency levels (1-100)
const skillsData = [
  { name: 'Python', icon: <FaPython />, proficiency: 90 },
  { name: 'JavaScript', icon: <FaJsSquare />, proficiency: 80 },
  { name: 'Django', icon: <FaPython />, proficiency: 85 },  // Use FaPython here instead of FaDjango
  { name: 'React', icon: <FaReact />, proficiency: 75 },
  { name: 'MySQL', icon: <FaDatabase />, proficiency: 70 },
  { name: 'Machine Learning', icon: <FaRobot />, proficiency: 65 },
];

const Skills = () => {
  return (
    <motion.section 
      className="skills py-5" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="container">
        <h2 className="display-4 text-light">Skills</h2>
        <motion.div 
          className="skills-list"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <p className="text-light">{skill.name}</p>
              <div className="progress-bar-container">
                <motion.div 
                  className="progress-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.proficiency}%` }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                />
              </div>
              <p className="proficiency text-light">{skill.proficiency}%</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
