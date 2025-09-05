import React from 'react';
import { Github, Code, Trophy, Star, ExternalLink } from 'lucide-react';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "GitHub",
      username: "S-Santosh14",
      url: "https://github.com/S-Santosh14",
      icon: <Github className="h-8 w-8" />,
      stats: {
        repositories: "1",
        followers: "0",
        contributions: "0"
      },
      description: "Open source contributions and personal projects",
      color: "from-slate-700 to-slate-900"
    },
    {
      platform: "LeetCode",
      username: "S_Santosh",
      url: "https://leetcode.com/u/S_Santosh/",
      icon: <Code className="h-8 w-8" />,
      stats: {
        solved: "600+",
        ranking: "Top 4.17%",
        contests: "45+"
      },
      description: "Algorithm and data structure problem solving",
      color: "from-orange-500 to-red-600"
    },
    {
      platform: "Smart Interviews",
      username: "Santosh_B8",
      url: "https://smartinterviews.in/profile/Santosh_B8",
      icon: <Trophy className="h-8 w-8" />,
      stats: {
        score: "75000+",
        contests: "50+",
        rank: "353"
      },
      description: "Advanced Data Structures and Algorithms",
      color: "from-blue-500 to-purple-600"
    },
    {
      platform: "CodeChef",
      username: "s_santosh",
      url: "https://www.codechef.com/users/s_santosh",
      icon: <Star className="h-8 w-8" />,
      stats: {
        rating: "1200+",
        contests: "5+",
        ranking: "65575"
      },
      description: "Competitive programming and contests",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="profiles" className="py-24 bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Coding Profiles
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mt-6 font-medium">
            Connect with me on various coding platforms where I share my work and solve challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 border border-slate-200/50 group-hover:border-indigo-200 transform hover:-translate-y-2">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${profile.color} text-white mr-6 group-hover:scale-110 transition-transform duration-300`}>
                      {profile.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
                        {profile.platform}
                      </h3>
                      <p className="text-slate-600 font-semibold">@{profile.username}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-6 w-6 text-slate-400 group-hover:text-indigo-600 transition-colors duration-300" />
                </div>

                <p className="text-slate-700 mb-8 font-medium leading-relaxed">{profile.description}</p>

                <div className="grid grid-cols-3 gap-6 mb-6">
                  {Object.entries(profile.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center bg-slate-50 rounded-2xl p-4">
                      <div className="text-xl font-black text-slate-900 mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-slate-600 capitalize font-semibold">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-center text-sm text-slate-500 group-hover:text-indigo-600 transition-colors duration-300 font-bold">
                    View Profile
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-10 border border-slate-200/50">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
              Let's Code{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Together!
              </span>
            </h3>
            <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed font-medium text-lg">
              I'm always excited to collaborate on interesting projects, participate in coding challenges, 
              or contribute to open-source initiatives. Feel free to connect with me on any of these platforms 
              or reach out directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;