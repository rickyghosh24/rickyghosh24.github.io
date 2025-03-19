import React from 'react';
import { motion } from 'framer-motion';
import { skillsSection } from '../portfolio';
import {
  FaPython, FaGitAlt, FaBrain,
  FaDatabase
} from 'react-icons/fa';
import {
  SiCplusplus, SiTensorflow, SiPytorch, SiNumpy, SiPandas,
  SiScikitlearn, SiGooglecloud, SiJupyter, SiGrafana, SiJira,
  SiMlflow, SiStreamlit, SiKeras, SiDocker, SiKubernetes,
  SiOpenai, SiHuggingface
} from 'react-icons/si';
import './Skills.css';

const MotionDiv = motion.div;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Define icons with their official brand colors
const skillIcons: { [key: string]: { icon: JSX.Element; color: string } } = {
  'Python': { icon: <FaPython />, color: '#3776AB' },
  'C++': { icon: <SiCplusplus />, color: '#00599C' },
  'SQL': { icon: <FaDatabase />, color: '#336791' },
  'PyTorch': { icon: <SiPytorch />, color: '#EE4C2C' },
  'TensorFlow': { icon: <SiTensorflow />, color: '#FF6F00' },
  'numpy': { icon: <SiNumpy />, color: '#013243' },
  'pandas': { icon: <SiPandas />, color: '#150458' },
  'scikit-learn': { icon: <SiScikitlearn />, color: '#F7931E' },
  'Git': { icon: <FaGitAlt />, color: '#F05032' },
  'Google Cloud': { icon: <SiGooglecloud />, color: '#4285F4' },
  'Docker': { icon: <SiDocker />, color: '#2496ED' },
  'JupyterLab': { icon: <SiJupyter />, color: '#F37626' },
  'Grafana': { icon: <SiGrafana />, color: '#FF6D00' },
  'Jira': { icon: <SiJira />, color: '#0052CC' },
  'MLFlow': { icon: <SiMlflow />, color: '#0194E2' },
  'Streamlit': { icon: <SiStreamlit />, color: '#FF4B4B' },
  'Keras': { icon: <SiKeras />, color: '#D00000' },
  'Kubernetes': { icon: <SiKubernetes />, color: '#326CE5' },
  'OpenAI': { icon: <SiOpenai />, color: '#00A67E' },
  'Hugging Face': { icon: <SiHuggingface />, color: '#FFD21E' }
};

const getIcon = (skill: string) => {
  // First try exact match
  if (skillIcons[skill]) {
    return skillIcons[skill];
  }

  // Try case-insensitive match
  const skillLower = skill.toLowerCase();
  const match = Object.keys(skillIcons).find(key =>
    key.toLowerCase() === skillLower
  );

  if (match) {
    return skillIcons[match];
  }

  // Default icon with random color for AI Techniques
  return {
    icon: <FaBrain />,
    color: `hsl(${Math.random() * 360}, 70%, 50%)`
  };
};

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <MotionDiv
        className="skills-container"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2 className="section-title" variants={item}>
          Skills
        </motion.h2>
        {Object.entries(skillsSection.categories).map(([category, skills]) => (
          <div key={category} className="skills-category">
            <h3 className="category-title">
              {category
                .replace(/([A-Z])/g, ' $1')
                .replace('A I', 'AI')
                .replace('M L Ops', 'MLOps')
                .trim()}
            </h3>
            <div className="skills-cards">
              {skills.map((skill, index) => {
                const { icon, color } = getIcon(skill);
                return (
                  <MotionDiv
                    key={index}
                    className="skill-card"
                    variants={item}
                    style={{ borderColor: color }}
                  >
                    <div className="skill-icon" style={{ color }}>
                      {icon}
                    </div>
                    <span className="skill-name">{skill}</span>
                  </MotionDiv>
                );
              })}
            </div>
          </div>
        ))}
      </MotionDiv>
    </section>
  );
};

export default Skills; 