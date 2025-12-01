import Navbar from "@/components/Navbar";
import { useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  project: string;
  github: string;
  avatar: string;
}

export default function Team() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Apeksha",
      role: "Lead - Anomaly Detection",
      project: "Anomaly Detection using WireShark",
      github: "https://github.com/apeksha-3",
      avatar: "🎓"
    },
    {
      id: "2",
      name: "Soumya Gawande",
      role: "Lead - NS3 Simulation",
      project: "NS3 SIMULATION",
      github: "https://github.com/SoumyaGawande",
      avatar: "💻"
    },
    {
      id: "3",
      name: "Dev Lover",
      role: "Lead - DNS Monitoring",
      project: "Advanced Analysis of DNS Traffic",
      github: "https://github.com/dev-lov-oper",
      avatar: "🔧"
    },
    {
      id: "4",
      name: "Swamini",
      role: "Lead - FTP Server",
      project: "FTP Server Simulation",
      github: "https://github.com/swamini-10",
      avatar: "📱"
    },
    {
      id: "5",
      name: "Ayush Dutta",
      role: "Lead - Security",
      project: "IP Access Control Extension",
      github: "https://github.com/DuttaAyush",
      avatar: "🛡️"
    },
    {
      id: "6",
      name: "Instructor",
      role: "Course Mentor",
      project: "Course Coordinator",
      github: "#",
      avatar: "👨‍🏫"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar isDark={isDark} onThemeToggle={toggleDarkMode} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Meet the Team
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Talented students and mentors driving innovation in computer networking
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg dark:shadow-slate-950 border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 dark:hover:border-slate-700"
              >
                {/* Background Gradient */}
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300" />

                {/* Avatar */}
                <div className="relative px-6 pb-6">
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-6xl shadow-lg border-4 border-white dark:border-slate-900 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>

                  {/* Content */}
                  <div className="pt-24 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                      {member.role}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                      {member.project}
                    </p>

                    {/* GitHub Link */}
                    {member.github !== "#" && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-all duration-300"
                      >
                        <span>GitHub</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Our Collaboration Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤝",
                title: "Open Source",
                description: "All projects are open source and community-driven"
              },
              {
                icon: "💡",
                title: "Innovation",
                description: "Pushing boundaries of what's possible in networking"
              },
              {
                icon: "📚",
                title: "Knowledge Sharing",
                description: "Dedicated to teaching and mentoring the next generation"
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-8">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in joining us?
          </h2>
          <p className="text-lg text-blue-100 dark:text-blue-200 mb-6">
            Check out our projects and consider contributing to the community
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300"
          >
            Explore Projects →
          </a>
        </div>
      </section>
    </div>
  );
}
