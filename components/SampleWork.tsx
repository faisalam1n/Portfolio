import React, { useState } from 'react';
import { SectionProps } from '../types';
import { SAMPLE_WORK_DATA } from '../constants';
import { FileText, Code, Bug, X } from 'lucide-react';
import { Reveal } from './Reveal';

const SampleWork: React.FC<SectionProps> = ({ themeColor }) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

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

  const getHoverBorder = () => {
    switch (themeColor) {
      case 'red': return 'hover:border-red-500/50';
      case 'blue': return 'hover:border-blue-500/50';
      case 'green': return 'hover:border-emerald-500/50';
      case 'purple': return 'hover:border-purple-500/50';
      case 'orange': return 'hover:border-orange-500/50';
      case 'cyan': return 'hover:border-cyan-500/50';
      default: return 'hover:border-red-500/50';
    }
  };

  return (
    <section id="work" className="scroll-mt-24 py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sample Artifacts</h2>
            <p className="text-gray-600 dark:text-gray-400">Click on any item to view the detailed structure.</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SAMPLE_WORK_DATA.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 150} direction="up" className="h-full">
              <div
                onClick={() => setActiveItem(item.id)}
                className={`bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 cursor-pointer transition-all hover:-translate-y-2 shadow-lg hover:shadow-xl ${getHoverBorder()} group h-full flex flex-col`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-800 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors ${getAccentColor()}`}>
                    {item.type === 'Bug Report' && <Bug size={24} />}
                    {item.type === 'Automation Script' && <Code size={24} />}
                    {item.type === 'Test Plan' && <FileText size={24} />}
                  </div>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider">{item.type}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">{item.description}</p>
                <div className={`mt-4 text-xs font-semibold ${getAccentColor()} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  View Details &rarr;
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal View */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white dark:bg-gray-900 w-full max-w-3xl rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-10 duration-300">
            <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-800/50">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {SAMPLE_WORK_DATA.find(i => i.id === activeItem)?.title}
              </h3>
              <button
                onClick={() => setActiveItem(null)}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto font-mono text-sm">
              <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-300 whitespace-pre-wrap">
                {SAMPLE_WORK_DATA.find(i => i.id === activeItem)?.previewContent}
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 text-right">
              <button
                onClick={() => setActiveItem(null)}
                className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SampleWork;