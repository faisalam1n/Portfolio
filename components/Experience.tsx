import React from 'react';
import { SectionProps } from '../types';
import { EXPERIENCE_DATA } from '../constants';
import { Calendar } from 'lucide-react';
import { Reveal } from './Reveal';

const Experience: React.FC<SectionProps> = ({ themeColor }) => {
  const getAccentColor = () => {
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

  const getBadgeClass = () => {
    switch (themeColor) {
      case 'red': return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
      case 'blue': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
      case 'green': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'purple': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
      case 'orange': return 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20';
      case 'cyan': return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20';
      default: return 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
    }
  }

  return (
    <section id="experience" className="scroll-mt-24 py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          </Reveal>
        </div>

        <div className="max-w-3xl mx-auto">
          {EXPERIENCE_DATA.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-12 pb-12 last:pb-0 group">

              {/* Timeline Line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-800 group-last:bottom-auto group-last:h-full"></div>

              {/* Timeline Dot */}
              <div className={`absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full ${getAccentColor().replace('text-', 'bg-')} ring-4 ring-gray-100 dark:ring-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.2)] dark:shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></div>

              <Reveal delay={index * 100} direction="up">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.role}</h3>
                      <div className={`text-lg font-medium ${getAccentColor()}`}>{job.company}</div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm bg-gray-200/50 dark:bg-gray-900/50 px-3 py-1 rounded-full w-fit">
                      <Calendar size={14} />
                      {job.period}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                  <ul className="space-y-2 mb-6">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gray-400 dark:bg-gray-500`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.techStack.map((tech) => (
                      <span key={tech} className={`px-2 py-1 text-xs rounded border transition-colors ${getBadgeClass()} hover:bg-opacity-20`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;