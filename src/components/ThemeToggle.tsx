import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './ThemeToggle.css';

const MotionButton = motion.button;

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <MotionButton
      className="theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </MotionButton>
  );
};

export default ThemeToggle; 