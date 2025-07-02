import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo/Name */}
          <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Siddamsetti Santosh
          </h3>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {['About', 'Skills', 'Experience', 'Projects', 'Profiles', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-semibold text-lg hover:scale-105 transform"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-10 rounded-full"></div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-slate-400 mb-6 sm:mb-0 font-medium">
              © {currentYear} Siddamsetti Santosh. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <p className="text-slate-400 font-medium">
                Made with React & Tailwind CSS
              </p>
              <button
                onClick={scrollToTop}
                className="p-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
