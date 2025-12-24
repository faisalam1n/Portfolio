import React from 'react';
import { SectionProps } from '../types';
import { Award, BookOpen, Target } from 'lucide-react';
import { Reveal } from './Reveal';

const About: React.FC<SectionProps> = ({ themeColor }) => {
  const getIconColor = () => {
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
    <section id="about" className="scroll-mt-24 py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className={`h-1 w-20 mx-auto rounded bg-gray-200 dark:bg-gray-700`}>
              <div className={`h-1 w-10 rounded ${getIconColor().replace('text-', 'bg-')}`}></div>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Reveal delay={200} direction="right">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Detail-Oriented QA Professional with <span className={getIconColor()}>4+ Years</span> of Experience
              </h3>
            </Reveal>
            <Reveal delay={300} direction="right">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a Software Engineer turned Quality Assurance specialist. My journey began with a strong foundation in software principles, which allows me to understand code structure and collaborate effectively with developers.
              </p>
            </Reveal>
            <Reveal delay={400} direction="right">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I specialize in bridging the gap between manual testing and automation. While I have a deep appreciation for the human insight required in exploratory testing, I am passionate about building robust automation frameworks using Cypress and Playwright to accelerate delivery cycles.
              </p>
            </Reveal>
            <Reveal delay={500} direction="right">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My philosophy is simple: <strong>Quality is not an act, it is a habit.</strong> I advocate for user-centric testing, ensuring that every feature not only works as coded but delivers the intended value to the end-user.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6">
            <Reveal delay={200} direction="left">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className={`mb-4 ${getIconColor()}`}>
                  <Award size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">Bachelor's Degree in Software Engineering.</p>
              </div>
            </Reveal>

            <Reveal delay={350} direction="left">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className={`mb-4 ${getIconColor()}`}>
                  <Target size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Key Strength</h4>
                <p className="text-gray-600 dark:text-gray-400">Writing clear, Jira-ready test cases and breaking down complex acceptance criteria.</p>
              </div>
            </Reveal>

            <Reveal delay={500} direction="left">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className={`mb-4 ${getIconColor()}`}>
                  <BookOpen size={32} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Domain Knowledge</h4>
                <p className="text-gray-600 dark:text-gray-400">Experience in Fintech, Document Management (PDF), and User Account Systems.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;