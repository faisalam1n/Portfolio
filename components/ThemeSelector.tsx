import React, { useState, useRef, useEffect } from 'react';
import { Palette, ChevronDown } from 'lucide-react';
import { ThemeColor } from '../types';

interface ThemeSelectorProps {
  currentTheme: ThemeColor;
  onThemeChange: (theme: ThemeColor) => void;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const themes: { id: ThemeColor; label: string; colorClass: string }[] = [
    { id: 'red', label: 'Professional Red', colorClass: 'bg-red-600' },
    { id: 'blue', label: 'Corporate Blue', colorClass: 'bg-blue-600' },
    { id: 'green', label: 'Fresh Green', colorClass: 'bg-emerald-600' },
    { id: 'purple', label: 'Creative Purple', colorClass: 'bg-purple-600' },
    { id: 'orange', label: 'Energetic Orange', colorClass: 'bg-orange-600' },
    { id: 'cyan', label: 'Tech Cyan', colorClass: 'bg-cyan-600' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getThemeColorClass = (theme: ThemeColor) => {
    switch (theme) {
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
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${getThemeColorClass(currentTheme)}`}
        aria-label="Select Theme"
      >
        <Palette size={18} />
        <span className="hidden sm:block text-sm font-medium capitalize text-gray-700 dark:text-gray-200">{currentTheme}</span>
        <ChevronDown size={14} className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-1 z-50">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                onThemeChange(t.id);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-3 transition-colors text-gray-700 dark:text-gray-200"
            >
              <span className={`w-3 h-3 rounded-full ${t.colorClass}`} />
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;