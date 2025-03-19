import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="content-wrapper">
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;