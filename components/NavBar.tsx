import React, { useState } from 'react';
import { Menu, X, Bug, Sun, Moon } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import { ThemeColor } from '../types';

interface NavBarProps {
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ themeColor, setThemeColor, isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Sample Work', href: '#work' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      setIsMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', href);
    }
  };

  const getHoverClass = () => {
    switch (themeColor) {
      case 'red': return 'hover:text-red-500';
      case 'blue': return 'hover:text-blue-500';
      case 'green': return 'hover:text-emerald-500';
      case 'purple': return 'hover:text-purple-500';
      case 'orange': return 'hover:text-orange-500';
      case 'cyan': return 'hover:text-cyan-500';
      default: return 'hover:text-red-500';
    }
  };

  const getAccentText = () => {
    switch (themeColor) {
      case 'red': return 'text-red-600 dark:text-red-500';
      case 'blue': return 'text-blue-600 dark:text-blue-500';
      case 'green': return 'text-emerald-600 dark:text-emerald-500';
      case 'purple': return 'text-purple-600 dark:text-purple-500';
      case 'orange': return 'text-orange-600 dark:text-orange-500';
      case 'cyan': return 'text-cyan-600 dark:text-cyan-500';
      default: return 'text-red-600 dark:text-red-500';
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex-shrink-0 flex items-center gap-2"
          >
            <Bug className={getAccentText()} size={24} />
            <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
              Faisal<span className={getAccentText()}>.QA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors ${getHoverClass()}`}
              >
                {link.name}
              </a>
            ))}

            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>

            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <ThemeSelector currentTheme={themeColor} onThemeChange={setThemeColor} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <ThemeSelector currentTheme={themeColor} onThemeChange={setThemeColor} />

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 ${getHoverClass()}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;