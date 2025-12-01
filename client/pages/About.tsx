import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function About() {
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

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar isDark={isDark} onThemeToggle={toggleDarkMode} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            About This Course
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Computer Networks is a comprehensive course covering fundamental and advanced networking concepts through practical, hands-on projects.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Course Overview */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                Course Overview
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                This course provides students with hands-on experience in computer networking concepts, protocols, and technologies. Through five distinct projects, students explore topics ranging from network traffic analysis to advanced security implementations.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Each project is designed to reinforce theoretical knowledge with practical application, enabling students to understand how networks operate in real-world scenarios.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-8 flex items-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5</div>
                <div className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">Core Projects</div>
                <div className="text-slate-600 dark:text-slate-400">Covering different aspects of networking</div>
              </div>
            </div>
          </div>

          {/* Learning Outcomes */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
              Learning Outcomes
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🔍",
                  title: "Network Analysis",
                  description: "Master packet inspection and traffic analysis using industry-standard tools like WireShark"
                },
                {
                  icon: "🌐",
                  title: "Protocol Understanding",
                  description: "Deep dive into various network protocols including DNS, FTP, and IP management"
                },
                {
                  icon: "🛡️",
                  title: "Security Concepts",
                  description: "Learn about access control, threat detection, and network security best practices"
                },
                {
                  icon: "📊",
                  title: "Simulation & Modeling",
                  description: "Build network simulations using NS-3 to understand complex network behaviors"
                },
                {
                  icon: "💻",
                  title: "Practical Implementation",
                  description: "Implement real networking solutions and servers from scratch"
                },
                {
                  icon: "🎓",
                  title: "Professional Skills",
                  description: "Develop documentation, collaboration, and technical communication abilities"
                }
              ].map((outcome, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{outcome.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {outcome.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Technologies & Tools</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {["WireShark", "NS-3", "DNS Tools", "FTP Servers", "Python", "C++", "Linux", "Network Protocols"].map((tech, idx) => (
                <div key={idx} className="bg-white/20 backdrop-blur rounded-xl p-6 hover:bg-white/30 transition-all duration-300">
                  <p className="font-semibold text-lg">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to explore the projects?
          </h2>
          <a
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
          >
            View All Projects →
          </a>
        </div>
      </section>
    </div>
  );
}
