import React from 'react';
import { SectionProps } from '../types';
import { Mail, Linkedin, MapPin } from 'lucide-react';
import { Reveal } from './Reveal';

const Contact: React.FC<SectionProps> = ({ themeColor }) => {
  const getButtonClass = () => {
    switch (themeColor) {
      case 'red': return 'bg-red-600 hover:bg-red-700';
      case 'blue': return 'bg-blue-600 hover:bg-blue-700';
      case 'green': return 'bg-emerald-600 hover:bg-emerald-700';
      case 'purple': return 'bg-purple-600 hover:bg-purple-700';
      case 'orange': return 'bg-orange-600 hover:bg-orange-700';
      case 'cyan': return 'bg-cyan-600 hover:bg-cyan-700';
      default: return 'bg-red-600 hover:bg-red-700';
    }
  };

  const getLinkHover = () => {
    switch (themeColor) {
      case 'red': return 'hover:text-red-600 dark:hover:text-red-500';
      case 'blue': return 'hover:text-blue-600 dark:hover:text-blue-500';
      case 'green': return 'hover:text-emerald-600 dark:hover:text-emerald-500';
      case 'purple': return 'hover:text-purple-600 dark:hover:text-purple-500';
      case 'orange': return 'hover:text-orange-600 dark:hover:text-orange-500';
      case 'cyan': return 'hover:text-cyan-600 dark:hover:text-cyan-500';
      default: return 'hover:text-red-600 dark:hover:text-red-500';
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-20 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="grid md:grid-cols-2">

            <div className="p-8 md:p-12 space-y-8">
              <Reveal direction="right">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    Ready to improve your software quality? Reach out for collaboration or interview opportunities.
                  </p>
                </div>
              </Reveal>

              <div className="space-y-6">
                <Reveal delay={200} direction="right">
                  <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <Mail size={20} className="text-gray-500 dark:text-gray-500" />
                    <a href="mailto:faisal.amin@example.com" className={`transition-colors ${getLinkHover()}`}>
                      faisal.amin@example.com
                    </a>
                  </div>
                </Reveal>
                <Reveal delay={300} direction="right">
                  <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <Linkedin size={20} className="text-gray-500 dark:text-gray-500" />
                    <a href="#" className={`transition-colors ${getLinkHover()}`}>
                      linkedin.com/in/faisal-amin
                    </a>
                  </div>
                </Reveal>
                <Reveal delay={400} direction="right">
                  <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <MapPin size={20} className="text-gray-500 dark:text-gray-500" />
                    <span>Remote / Hybrid</span>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <Reveal delay={200} direction="left">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-gray-500 transition-colors"
                      placeholder="Recruiter / Hiring Manager"
                    />
                  </div>
                </Reveal>
                <Reveal delay={300} direction="left">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-gray-500 transition-colors"
                      placeholder="you@company.com"
                    />
                  </div>
                </Reveal>
                <Reveal delay={400} direction="left">
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:outline-none focus:border-gray-500 transition-colors resize-none"
                      placeholder="Hi Faisal, I'd like to discuss a QA role..."
                    ></textarea>
                  </div>
                </Reveal>
                <Reveal delay={500} direction="left">
                  <button
                    type="submit"
                    className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-transform active:scale-95 shadow-lg ${getButtonClass()}`}
                  >
                    Send Message
                  </button>
                </Reveal>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;