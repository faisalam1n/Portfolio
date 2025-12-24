import React from 'react';
import { SectionProps } from '../types';
import { Search, PenTool, Play, BarChart } from 'lucide-react';
import { Reveal } from './Reveal';

const Process: React.FC<SectionProps> = ({ themeColor }) => {
  const getStepColor = () => {
    switch (themeColor) {
      case 'red': return 'bg-red-600';
      case 'blue': return 'bg-blue-600';
      case 'green': return 'bg-emerald-600';
      case 'purple': return 'bg-purple-600';
      case 'orange': return 'bg-orange-600';
      case 'cyan': return 'bg-cyan-600';
      default: return 'bg-red-600';
    }
  };

  const steps = [
    {
      title: 'Analyze',
      desc: 'Review requirements, clarify acceptance criteria, and identify risks early.',
      icon: <Search className="text-white" size={24} />
    },
    {
      title: 'Plan',
      desc: 'Create comprehensive test plans, define scope, and design test cases.',
      icon: <PenTool className="text-white" size={24} />
    },
    {
      title: 'Execute',
      desc: 'Run manual tests, develop automation scripts, and report defects with precision.',
      icon: <Play className="text-white" size={24} />
    },
    {
      title: 'Report',
      desc: 'Provide actionable insights, track defect metrics, and sign-off on release quality.',
      icon: <BarChart className="text-white" size={24} />
    }
  ];

  return (
    <section id="process" className="scroll-mt-24 py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My QA Process</h2>
            <p className="text-gray-600 dark:text-gray-400">Structured approach to ensuring software excellence.</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -z-10 overflow-hidden">
                  <Reveal delay={idx * 200 + 400} direction="left" width="100%">
                    <div className="w-full h-full bg-gray-300 dark:bg-gray-700"></div>
                  </Reveal>
                </div>
              )}

              <Reveal delay={idx * 200} direction="up">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl ${getStepColor()} shadow-lg flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;