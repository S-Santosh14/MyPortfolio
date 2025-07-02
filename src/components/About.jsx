import React from 'react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-7 w-7" />,
      title: "Clean Code",
      description: "Writing code that is easy to understand, update, and works well with others' code"
    },
    {
      icon: <Palette className="h-7 w-7" />,
      title: "Design Thinking",
      description: "Making easy-to-use interfaces with simple and clear design"
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Performance",
      description: "Making websites and apps run fast and work smoothly."
    },
    {
      icon: <Heart className="h-7 w-7" />,
      title: "User Focus",
      description: "Building with users in mind simple, accessible, and helpful for everyone"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-slate-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            About Me
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mt-6 font-medium">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">
            Crafting Digital{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h3>
          <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
            <p className="font-medium">
              With strong problem-solving skills and a solid foundation in{' '}
              <span className="text-indigo-600 font-bold">Data Structures and Algorithms using Java</span>, I enjoy tackling 
              challenging coding problems and building efficient solutions.
            </p>
            <p>
              Over time, I've developed an interest in frontend development and have built 
              <span className="text-purple-600 font-semibold"> responsive, user-friendly websites</span> using 
              React and Tailwind CSS.
            </p>
            <p>
              I like combining logic with creativity  whether it's optimizing code or designing 
              intuitive interfaces. My coding journey is driven by <span className="text-pink-600 font-semibold">continuous learning</span>, 
              and I often explore new tools and technologies to stay sharp.
            </p>
          </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">Details</h4>
                <ul className="space-y-3 text-slate-700">
                  <li><span className="font-semibold text-slate-900">Name:</span> Siddamsetti Santosh</li>
                  <li><span className="font-semibold text-slate-900">Location:</span> Hyderabad, Telangana</li>
                  <li><span className="font-semibold text-slate-900">Contact:</span> +91 9014288517</li>
                  <li><span className="font-semibold text-slate-900">Email:</span> santoshsiddamsetti0507<br/>@gmail.com</li>
                </ul>
              </div>
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-slate-200/50">
                <h4 className="font-bold text-slate-900 mb-4 text-lg">Interests</h4>
                <ul className="space-y-3 text-slate-700">
                  <li>• Web Technologies</li>
                  <li>• Problem Solving with java</li>
                  <li>• Frontend Design</li>
                  <li>• Learning New Technologies</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-8 rounded-3xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 border border-slate-200/50 hover:border-indigo-200 transform hover:-translate-y-2"
              >
                <div className="text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-3 text-lg">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;