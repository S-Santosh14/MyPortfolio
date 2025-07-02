import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import ssImg from './Stroke_Symphony.png';
import pamImg from './PAM.png';
import ttImg from './Traveller.png'
const Projects = () => {
  const projects = [
    {
      title: "Stroke Symphony",
      description: "A full-stack web app that identifies top cricket players by skill type using machine learning.Includes player classification, interactive dashboards, and a custom Decision Tree model for performance analysis.",
      image: ssImg,
      technologies: ["React", "Flask", "SQLite", "Scikit-learn", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/S-Santosh14",
      features: [
        "Clean, responsive UI with a modern design",
        "Machine learning-based player classification",
        "Interactive visualizations for performance insights",
        "Custom dataset creation and management"
      ]
    },
    {
      title: "Price A Med (Evernorth Case Study)",
      description: "A web application for comparing medication prices using a PBM system. Allows users to search prescriptions, compare prices across pharmacies, and view real-time data with detailed pharmacy information.",
      image: pamImg,
      technologies: ["React", "Spring Boot", "Docker", "Kafka", "Jenkins"],
      liveUrl: "#",
      githubUrl: "https://github.com/trinay-krishna/Price-A-Med_PAM",
      features: [
        "Pharmacy-wise price comparison with availability tracking",
        "Search functionality with location-based results",
        "Distance-based pharmacy suggestions",
        "User-friendly interface for quick and easy search experience"
      ]
    },
    {
      title: "Travel Planner",
      description: "A web-based travel planner for organizing and personalizing trips. Offers destination details, accommodation options, and activity suggestions in an easy-to-use interface.",
      image: ttImg,
      technologies: ["HTML", "CSS", "Javascript"],
      liveUrl: "#",
      githubUrl: "https://github.com/S-Santosh14",
      features: [
        "Destination search with detailed information",
        "Accommodation and activity suggestions",
        "Trip planning and organization tools",
        "User-friendly and intuitive interface"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 font-medium">
            Showcasing my passion for development through innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-indigo-200 transform hover:-translate-y-2"
            >

              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex items-center justify-center w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl text-slate-800 hover:bg-white transition-all duration-200 transform hover:scale-110"
                    >
                      <Eye className="h-6 w-6" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl text-slate-800 hover:bg-white transition-all duration-200 transform hover:scale-110"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-3 text-lg">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-slate-600 flex items-start">
                        <span className="text-indigo-600 mr-3 mt-1 font-bold">•</span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 text-xs rounded-xl font-bold border border-indigo-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-sm font-bold transform hover:scale-105 shadow-lg"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-2xl hover:bg-slate-50 hover:border-indigo-300 transition-all duration-300 text-sm font-bold transform hover:scale-105"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all duration-300 font-bold text-lg transform hover:scale-105 shadow-lg"
          >
            <ExternalLink className="h-6 w-6 mr-3" />
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;