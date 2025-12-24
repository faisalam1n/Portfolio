import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import SampleWork from './components/SampleWork';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StatsStrip from './components/StatsStrip';
import { ThemeColor } from './types';

function App() {
  const [themeColor, setThemeColor] = useState<ThemeColor>(() => {
    const colors: ThemeColor[] = ['red', 'blue', 'green', 'purple', 'orange', 'cyan'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  });

  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
        <NavBar
          themeColor={themeColor}
          setThemeColor={setThemeColor}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <main>
          <Hero themeColor={themeColor} />
          <StatsStrip themeColor={themeColor} />
          <About themeColor={themeColor} />
          <Skills themeColor={themeColor} />
          <Experience themeColor={themeColor} />
          <SampleWork themeColor={themeColor} />
          <Process themeColor={themeColor} />
          <Contact themeColor={themeColor} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;