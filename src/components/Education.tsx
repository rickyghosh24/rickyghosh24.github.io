import React from 'react';
import { motion } from 'framer-motion';
import { educationSection } from '../portfolio';
import './Education.css';

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

const Education = () => {
  return (
    <section className="education" id="education">
      <MotionDiv
        className="education-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={item}>
          Education
        </motion.h2>

        <div className="education-grid">
          {educationSection.schools.map((school, index) => (
            <MotionDiv
              key={index}
              className="education-card"
              variants={item}
            >
              <h3 className="school-name">{school.school}</h3>
              <p className="degree">{school.degree}</p>
              {school.minor && (
                <p className="minor">{school.minor}</p>
              )}
              <div className="education-details">
                <p className="location">{school.location}</p>
                <p className="date">{school.date}</p>
                <p className="gpa">GPA: {school.gpa}</p>
              </div>
              <div className="coursework">
                <h4>Relevant Coursework:</h4>
                <ul>
                  {school.coursework.map((course, i) => (
                    <li key={i}>{course}</li>
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

export default Education; 