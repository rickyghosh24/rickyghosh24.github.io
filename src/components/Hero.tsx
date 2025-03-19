import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import profilePic from '../assets/rohan_panda_portrait.jpg';
import { greeting, socialMediaLinks } from '../portfolio';
import './Hero.css';

const MotionDiv = motion.div;

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <MotionDiv
            className="hero-text-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="hero-title">{greeting.title}</h1>
            <p className="hero-subtitle">{greeting.subTitle}</p>

            <a
              href={greeting.resumeLink}
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>

            <div className="social-links">
              <a
                href={socialMediaLinks.github}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> Github
              </a>
              <a
                href={socialMediaLinks.linkedin}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href={`mailto:${socialMediaLinks.gmail}`}
                className="social-link"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </MotionDiv>

          <motion.div
            className="hero-image-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="profile-pic-container">
              <img
                src={profilePic}
                alt="Rohan Panda"
                className="profile-pic"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;