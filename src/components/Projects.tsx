import React from 'react';
import { motion } from 'framer-motion';
import { projectsSection } from '../portfolio';  // Add this import
import './Projects.css';

const MotionDiv = motion.div;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <MotionDiv
        className="projects-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={item}>
          Research & Projects
        </motion.h2>
        <div className="projects-grid">
          {projectsSection.projects.map((project, index) => (
            <MotionDiv
              key={index}
              className="project-card"
              variants={item}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <h4 className="project-subtitle">{project.organization}</h4>
              </div>
              <div className="project-description">
                <ul>
                  {project.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </section>
  );
};

export default Projects; 