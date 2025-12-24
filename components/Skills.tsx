import React from 'react';
import { SectionProps } from '../types';
import { SKILLS_DATA } from '../constants';
import { Reveal } from './Reveal';

const Skills: React.FC<SectionProps> = ({ themeColor }) => {
  const getThemeClass = (type: 'text' | 'bg' | 'border') => {
    switch (themeColor) {
      case 'red': return type === 'text' ? 'text-red-600 dark:text-red-500' : type === 'bg' ? 'bg-red-500/10' : 'border-red-500/20 dark:border-red-500/50';
      case 'blue': return type === 'text' ? 'text-blue-600 dark:text-blue-500' : type === 'bg' ? 'bg-blue-500/10' : 'border-blue-500/20 dark:border-blue-500/50';
      case 'green': return type === 'text' ? 'text-emerald-600 dark:text-emerald-500' : type === 'bg' ? 'bg-emerald-500/10' : 'border-emerald-500/20 dark:border-emerald-500/50';
      case 'purple': return type === 'text' ? 'text-purple-600 dark:text-purple-500' : type === 'bg' ? 'bg-purple-500/10' : 'border-purple-500/20 dark:border-purple-500/50';
      case 'orange': return type === 'text' ? 'text-orange-600 dark:text-orange-500' : type === 'bg' ? 'bg-orange-500/10' : 'border-orange-500/20 dark:border-orange-500/50';
      case 'cyan': return type === 'text' ? 'text-cyan-600 dark:text-cyan-500' : type === 'bg' ? 'bg-cyan-500/10' : 'border-cyan-500/20 dark:border-cyan-500/50';
      default: return type === 'text' ? 'text-red-600 dark:text-red-500' : type === 'bg' ? 'bg-red-500/10' : 'border-red-500/20 dark:border-red-500/50';
    }
  };

  return (
    <section id="skills" className="scroll-mt-24 py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Proficiency</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A balanced mix of manual testing expertise and modern automation capabilities.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS_DATA.map((category, idx) => (
            <Reveal key={idx} delay={idx * 150} direction="up" className="h-full">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                <h3 className={`text-xl font-semibold mb-6 ${getThemeClass('text')}`}>
                  {category.title}
                </h3>
                <ul className="space-y-4 flex-grow">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group">
                      <span className={`p-2 rounded-lg transition-colors group-hover:bg-opacity-20 ${getThemeClass('bg')} ${getThemeClass('text')}`}>
                        {skill.icon}
                      </span>
                      <span className="font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;