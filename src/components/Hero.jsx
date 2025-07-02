import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight">
          Hi, I'm{' '}
          <span className="relative">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Siddamsetti Santosh
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transform scale-x-0 animate-pulse"></div>
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-slate-600 mb-8 font-light tracking-wide">
          <span className="font-semibold text-slate-800">Java Developer</span> &{' '}
          <span className="font-semibold text-slate-800">Frontend Developer</span>
        </h2>

        <p className="text-xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
          Creating user-friendly websites with a focus on{' '}
          <span className="text-indigo-600 font-semibold">clean design</span> and{' '}
          <span className="text-purple-600 font-semibold">functionality</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">

          <a
            href="/resume.pdf"
            download
            className="group bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105 transition-all duration-300 flex items-center gap-3 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Download className="h-6 w-6 relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </a>

          <button
            onClick={scrollToContact}
            className="group border-2 border-indigo-600 text-indigo-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center gap-3 hover:shadow-xl hover:shadow-indigo-500/25 transform hover:scale-105"
          >
            <Mail className="h-6 w-6" />
            Get In Touch
          </button>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-slate-500 text-sm font-medium mb-4 tracking-wide">Discover More</p>
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-slate-400 hover:text-indigo-600 transition-colors duration-300 p-2 rounded-full hover:bg-indigo-50"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;