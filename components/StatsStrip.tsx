import React from 'react';
import { SectionProps } from '../types';
import { TrendingUp, Bug, ShieldCheck, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

const StatsStrip: React.FC<SectionProps> = ({ themeColor }) => {
  const getThemeText = () => {
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

  const stats = [
    { icon: <Zap size={24} />, value: "40%", label: "Efficiency Boost" },
    { icon: <Bug size={24} />, value: "200+", label: "Bugs Caught" },
    { icon: <ShieldCheck size={24} />, value: "98%", label: "Leakage Prevention" },
    { icon: <TrendingUp size={24} />, value: "100%", label: "Reliability" },
  ];

  return (
    <section className="w-full bg-white/50 dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800 backdrop-blur-sm relative z-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 100} direction="up" className="w-full">
              <div className="flex flex-col items-center justify-center text-center space-y-2 group cursor-default">
                <div className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors duration-300 ${getThemeText()} mb-2 shadow-lg`}>
                  {stat.icon}
                </div>
                <span className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">{stat.value}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;