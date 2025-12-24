import React from 'react';
import { Download, ChevronRight } from 'lucide-react';
import { SectionProps } from '../types';
import { Reveal } from './Reveal';

const Hero: React.FC<SectionProps> = ({ themeColor }) => {
  const getThemeClasses = () => {
    switch (themeColor) {
      case 'red': return { bg: 'bg-red-600 hover:bg-red-700', text: 'text-red-600 dark:text-red-500', glow: 'shadow-red-500/20' };
      case 'blue': return { bg: 'bg-blue-600 hover:bg-blue-700', text: 'text-blue-600 dark:text-blue-500', glow: 'shadow-blue-500/20' };
      case 'green': return { bg: 'bg-emerald-600 hover:bg-emerald-700', text: 'text-emerald-600 dark:text-emerald-500', glow: 'shadow-emerald-500/20' };
      case 'purple': return { bg: 'bg-purple-600 hover:bg-purple-700', text: 'text-purple-600 dark:text-purple-500', glow: 'shadow-purple-500/20' };
      case 'orange': return { bg: 'bg-orange-600 hover:bg-orange-700', text: 'text-orange-600 dark:text-orange-500', glow: 'shadow-orange-500/20' };
      case 'cyan': return { bg: 'bg-cyan-600 hover:bg-cyan-700', text: 'text-cyan-600 dark:text-cyan-500', glow: 'shadow-cyan-500/20' };
      default: return { bg: 'bg-red-600 hover:bg-red-700', text: 'text-red-600 dark:text-red-500', glow: 'shadow-red-500/20' };
    }
  };

  const themeStyle = getThemeClasses();

  return (
    <section id="home" className="scroll-mt-24 pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center min-h-[85vh]">
      <div className="flex-1 space-y-8 text-center md:text-left z-10">
        <div className="space-y-4">
          <Reveal delay={200}>
            <h2 className={`text-lg font-semibold tracking-wide uppercase ${themeStyle.text}`}>
              Software Quality Assurance Engineer
            </h2>
          </Reveal>

          <Reveal delay={400}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight">
              Faisal <span className={themeStyle.text}>Amin</span>
            </h1>
          </Reveal>

          <Reveal delay={600}>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Delivering high-quality software through rigorous manual testing and robust automation strategies.
              Specialized in Cypress, Playwright, and building reliable QA processes.
            </p>
          </Reveal>
        </div>

        <Reveal delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className={`${themeStyle.bg} text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg ${themeStyle.glow} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              Hire Me
              <ChevronRight size={20} />
            </a>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:bg-gray-50 dark:hover:bg-gray-800 duration-300"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={1000}>
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-500 dark:text-gray-500 text-sm font-medium">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${themeStyle.bg} animate-pulse`}></span>
              4+ Years Exp.
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${themeStyle.bg} animate-pulse`}></span>
              Automation Expert
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${themeStyle.bg} animate-pulse`}></span>
              Agile & Scrum
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${themeStyle.bg} animate-pulse`}></span>
              Detail Oriented
            </div>
          </div>
        </Reveal>
      </div>

      <div className="flex-1 mt-12 md:mt-0 relative w-full flex justify-center perspective-1000">
        {/* Code Window Visual */}
        <Reveal direction="left" delay={600} className="w-full flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className={`absolute inset-0 opacity-20 rounded-full blur-3xl ${themeStyle.bg} animate-pulse-slow`}></div>

            <div className="relative bg-gray-900 rounded-xl border border-gray-800 shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Window Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400 font-mono flex items-center gap-2">
                  <span className={themeStyle.text}>automation.spec.ts</span>
                </div>
              </div>

              {/* Code Content - Always Keep Dark for Code Block */}
              <div className="p-6 font-mono text-sm text-gray-300 leading-relaxed overflow-x-auto">
                <div className="flex">
                  <span className="text-gray-600 select-none mr-4 w-4 text-right">1</span>
                  <span><span className={themeStyle.text}>import</span> {'{ test, expect }'} <span className={themeStyle.text}>from</span> '@playwright/test';</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none mr-4 w-4 text-right">2</span>
                  <span></span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none mr-4 w-4 text-right">3</span>
                  <span>test(<span className="text-green-400">'User Login Flow'</span>, <span className={themeStyle.text}>async</span> ({'{ page }'}) ={'>'} {'{'}</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none mr-4 w-4 text-right">4</span>
                  <span className="pl-4"><span className="text-purple-400">await</span> page.goto(<span className="text-green-400">'/login'</span>);</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none mr-4 w-4 text-right">5</span>
                  <span className="pl-4"><span className="text-purple-400">await</span> page.fill(<span className="text-green-400">'#email'</span>, user.email);</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none mr-4 w-4 text-right">6</span>
                  <span className="pl-4"><span className="text-purple-400">await</span> page.click(<span className="text-green-400">'button[type="submit"]'</span>);</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none mr-4 w-4 text-right">7</span>
                  <span className="pl-4"><span className="text-purple-400">await</span> expect(page).toHaveURL(<span className="text-green-400">'/dashboard'</span>);</span>
                </div>
                <div className="flex">
                  <span className="text-gray-600 select-none mr-4 w-4 text-right">8</span>
                  <span>{'}'});</span>
                </div>
                <div className="flex mt-3 pt-3 border-t border-gray-800">
                  <span className="text-gray-600 select-none mr-4 w-4 text-right">9</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-2">
                    ✓ 1 passed (1.2s)
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative elements behind */}
            <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-xl opacity-20 ${themeStyle.bg} animate-float-delayed z-0`}></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;