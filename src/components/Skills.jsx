import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      gradient: "from-indigo-500 to-purple-600",
      skills: [
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 75 },
        { name: "TypeScript", level: 50 },
        { name: "Next.js", level: 40 }
      ]
    },
    {
      title: "Backend",
      gradient: "from-purple-500 to-pink-600",
      skills: [
        { name: "SpringBoot", level: 75 },
        { name: "Node.js", level: 50 },
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      gradient: "from-pink-500 to-rose-600",
      skills: [
        { name: "Java", level: 85 },
        { name: "AWS", level: 60 },
        { name: "Figma", level: 70 },
        { name: "HTML,CSS", level: 85 }
      ]
    }
  ];

  const SkillBar = ({ skill, gradient }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-bold text-slate-800">{skill.name}</span>
        <span className="text-sm font-semibold text-slate-600 bg-slate-100 px-2 py-1 rounded-lg">{skill.level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div
          className={`bg-gradient-to-r ${gradient} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${skill.level}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Skills & Expertise
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 font-medium">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200/50 hover:border-indigo-200 transform hover:-translate-y-2"
            >
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-black bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                  {category.title}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${category.gradient} mx-auto rounded-full`}></div>
              </div>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} gradient={category.gradient} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12 tracking-tight">
            Technologies I{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Master
            </span>
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              'C', 'Java', 'Python', 'C++','Data Structures and Algorithms','Rust', 'HTML', 
              'CSS', 'Javascript', 'React', 'Node.js', 'SpringBoot','AWS', 'MySQL', 'MongoDb', 'OOP', 
              'DBMS', 'Figma'
              
            ].map((tech, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200/50 hover:border-indigo-200 transform hover:-translate-y-1"
              >
                <span className="text-slate-800 font-bold text-lg group-hover:text-indigo-600 transition-colors duration-300">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;