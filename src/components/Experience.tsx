import React from 'react';
import { motion } from 'framer-motion';
import { experienceSection } from '../portfolio';
import { FaCalendarAlt, FaRobot, FaBrain } from 'react-icons/fa';
import './Experience.css';

const MotionDiv = motion.div;

const companyLogos: { [key: string]: JSX.Element } = {
  'Inworld.ai': <FaRobot className="company-logo" />,
  'Moveworks': <FaBrain className="company-logo" />
};

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

const highlightText = (text: string) => {
  const termsToHighlight = [
    'GenAI', 'Mixtral', 'Llama', 'A/B testing', 'OpenAI',
    'Triton', 'Docker', 'SpanBERT', 'F1 score'
  ];

  let highlightedText = text;
  termsToHighlight.forEach(term => {
    const regex = new RegExp(`(${term})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<strong>$1</strong>');
  });

  return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
};

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <MotionDiv
        className="container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={item}>
          {experienceSection.title}
        </motion.h2>

        <div className="timeline">
          {experienceSection.experiences.map((exp, index) => (
            <MotionDiv
              key={index}
              className="timeline-item"
              variants={item}
            >
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="company-logo-container">
                    {companyLogos[exp.company]}
                  </div>
                  <div className="header-text">
                    <h3 className="role">{exp.role}</h3>
                    <div className="company-info">
                      <h4 className="company">{exp.company}</h4>
                    </div>
                    <div className="date-info">
                      <FaCalendarAlt className="date-icon" />
                      <span className="date">{exp.date}</span>
                    </div>
                  </div>
                </div>
                <ul className="description">
                  {exp.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {highlightText(desc)}
                    </motion.li>
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

export default Experience; 