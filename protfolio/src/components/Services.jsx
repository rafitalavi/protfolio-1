import React from "react";

import "../styles/Services.css";  // Import custom CSS for hover effects
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "Blog Website",
    description: "I build responsive and SEO-friendly blog websites using React and Django.",
    icon: "📝",
  },
  {
    title: "Portfolio Website",
    description: "I create modern and interactive portfolio websites to showcase your work.",
    icon: "🎨",
  },
  {
    title: "E-commerce Website",
    description: "I develop scalable e-commerce platforms with secure payment gateways.",
    icon: "🛒",
  },
  {
    title: "Automation using Python",
    description: "I automate repetitive tasks using Python scripts and AI tools.",
    icon: "🤖",
  },
];

const Services = () => {
  return (
    <section className="py-5 bg-dark text-white" id="services">
      <div className="container">
        <h2 className=" mb-4">My Services</h2>
        <div className="row">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when in view
    threshold: 0.2, // Trigger when 20% of the card is in view
  });

  return (
    <div className="col-lg-3 col-md-6 mb-4">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.8 }}
        className="card service-card text-center bg-secondary text-white border-0 shadow-lg h-100"
      >
        <div className="card-body">
          <div className="fs-1">{service.icon}</div>
          <h5 className="card-title mt-3">{service.title}</h5>
          <p className="card-text">{service.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
