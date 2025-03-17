import React from "react";

const Publication = () => {
  return (
    <section className="">
      <div className="container text-white">
        <h2 className="pb-4">Publication</h2>
        <h3>i-Glove: An Intelligent Glove System</h3>
        <p className="lead">
          Presented at the <strong>2024 IEEE 3rd International Conference on Robotics, Automation, AI, and IoT (RAAICON)</strong> at BUET, Dhaka, this research showcases an intelligent glove system using deep learning to help deaf-blind individuals recognize Bangladeshi banknotes.
        </p>
        <a
          href="https://example.com/publication-link"
          className="btn text-white"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read more about the i-Glove publication"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default Publication;
