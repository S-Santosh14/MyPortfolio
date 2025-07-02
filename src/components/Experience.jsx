import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Mentor at Smart Interviews",
      company: "Smart Interviews",
      location: "Madhapur, Hyderabad",
      period: "Jun 2025 - Present",
      description: [
        "Mentoring juniors in Data Structures and Algorithms across 34+ sessions",
        "Conducting extra lab sessions and resolving coding queries on Discord",
        "Assisting in real-time debugging and strengthening problem-solving skills",
        "Enhancing communication and leadership by guiding peers consistently"
      ],
      technologies: ["DSA", "C++", "Java", "Python"],
      link: "https://smartinterviews.in/"
    },
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Work Experience
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 font-medium">
            My professional journey and the impact I've made along the way
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 md:mb-20">
              <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full border-4 border-white shadow-xl z-10"></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} ml-20 md:ml-0`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-indigo-200 transform hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                      {exp.title}
                    </h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 font-bold mb-4 hover:text-purple-600 transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {exp.company}
                    </a>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-slate-600">
                      <div className="flex items-center bg-slate-100 px-3 py-2 rounded-xl">
                        <Calendar className="h-4 w-4 mr-2 text-indigo-600" />
                        <span className="font-semibold">{exp.period}</span>
                      </div>
                      <div className="flex items-center bg-slate-100 px-3 py-2 rounded-xl">
                        <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                        <span className="font-semibold">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-slate-700 flex items-start leading-relaxed">
                          <span className="text-indigo-600 mr-3 mt-1 font-bold">•</span>
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-sm rounded-xl font-bold border border-indigo-200/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
