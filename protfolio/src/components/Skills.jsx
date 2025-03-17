import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaJsSquare, FaJava, FaCuttlefish, FaReact, FaServer, FaDatabase, FaRobot, FaFlask, FaJira } from 'react-icons/fa';
import "../styles/Skills.css";

const skillsData = [
  { name: "Python", icon: <FaPython />, level: 90 },
  { name: "JavaScript", icon: <FaJsSquare />, level: 85 },
  { name: "Java", icon: <FaJava />, level: 70 },
  { name: "C", icon: <FaCuttlefish />, level: 75 },
  { name: "C++", icon: <FaCuttlefish />, level: 80 },
  { name: "Django", icon: <FaPython />, level: 85 },
  { name: "React", icon: <FaReact />, level: 80 },
  { name: "FastAPI", icon: <FaServer />, level: 70 },
  { name: "Flask", icon: <FaFlask />, level: 75 },
  { name: "MySQL", icon: <FaDatabase />, level: 85 },
  { name: "SQLite", icon: <FaDatabase />, level: 80 },
  { name: "PostgreSQL", icon: <FaDatabase />, level: 75 },
  { name: "TensorFlow", icon: <FaRobot />, level: 70 },
  { name: "Keras", icon: <FaRobot />, level: 65 },
  { name: "CNN", icon: <FaRobot />, level: 75 },
  { name: "Postman", icon: <FaServer />, level: 85 },
  { name: "Jira", icon: <FaJira />, level: 80 },
];

const Skills = () => {
  return (
    <motion.section 
      className="skills-container container" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="skills-title">Skills</h2>
      <motion.div 
        className="skills-list"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
            <div className="progress-bar-container">
              <motion.div 
                className="progress-bar"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: 0.2, duration: 0.8 }}
              />
            </div>
            <p className="skill-level">{skill.level}%</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
