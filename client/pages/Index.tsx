import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@shared/projects";

export default function Index() {
  const [isDark, setIsDark] = useState(false);
  const [visibleCards, setVisibleCards] = useState<string[]>([]);

  useEffect(() => {
    document.documentElement.scrollBehavior = "smooth";
    
    // Check for dark mode preference
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
    
    // Animate cards on mount
    PROJECTS.forEach((project, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, project.id]);
      }, index * 150);
    });
  }, []);

  const handleExploreClick = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

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
      {/* Theme Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110"
        aria-label="Toggle dark mode"
      >
        {isDark ? (
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm2.22 4.22a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707zm0-8.84a1 1 0 010 1.414L19.707 7.5a1 1 0 01-1.414-1.414l.707-.707zM15 17a1 1 0 100-2h-1a1 1 0 100 2h1zM4.22 13.78a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zm2.828 2.828a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM3 11a1 1 0 100-2H2a1 1 0 100 2h1zm0-6a1 1 0 010 1.414L2.293 7.5a1 1 0 01-1.414-1.414l.707-.707A1 1 0 013 5zm0 6a1 1 0 010 1.414L2.293 13.5a1 1 0 01-1.414-1.414l.707-.707A1 1 0 013 11z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 px-4 py-20 sm:py-32">
        {/* Animated decorative elements */}
        <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-20 left-10 h-80 w-80 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-block rounded-full bg-blue-100 dark:bg-blue-900/40 px-4 py-2 backdrop-blur-sm border border-blue-200 dark:border-blue-800">
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              🌐 Computer Networks
            </span>
          </div>

          {/* Main heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl animate-fade-in">
            Networking projects : A1
            <span className="block mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              <i>Hands on</i>
            </span>
          </h1>

          {/* Tagline */}
          <p className="mx-auto mb-12 max-w-2xl text-xl text-slate-600 dark:text-slate-300 sm:text-2xl">
            Showcasing hands-on networking projects created by our class.
            Each project highlights a key concept in Computer Networks.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleExploreClick}
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 dark:hover:shadow-purple-500/50 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <span>Explore Projects</span>
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="h-6 w-6 text-slate-400 dark:text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative px-4 py-20 sm:py-32 bg-white dark:bg-slate-950 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-20 text-center">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                Our Work
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Featured Projects
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Five remarkable projects showcasing diverse skills and expertise in Computer Networks
            </p>
          </div>

          {/* Flowing Cascade Layout */}
          <div className="flex flex-wrap gap-6 justify-center items-start perspective">
            {PROJECTS.map((project, index) => {
              // Cascading wave effect
              const offsetY = (index % 2) * 60;
              const offsetX = (index * 20);
              const rotation = index % 2 === 0 ? -4 : 3;

              return (
                <div
                  key={project.id}
                  className={`transform transition-all duration-500 hover:z-50 hover:scale-105 hover:rotate-0 ${
                    visibleCards.includes(project.id)
                      ? "opacity-100"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                    transform: `translateY(${offsetY}px) translateX(${offsetX % 100 - 50}px) rotateZ(${rotation}deg) perspective(1000px) rotateX(${index % 2 === 0 ? 2 : -2}deg)`,
                    width: "288px",
                    flex: "0 0 auto",
                  }}
                >
                  <div className="drop-shadow-xl hover:drop-shadow-2xl transition-all duration-300 h-full">
                    <ProjectCard
                      icon={project.icon}
                      title={project.title}
                      description={project.description}
                      repositoryUrl={project.repositoryUrl}
                      imageUrl={project.imageUrl}
                      gradientFrom={project.gradientFrom}
                      gradientTo={project.gradientTo}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-100 dark:bg-blue-900 opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-100 dark:bg-purple-900 opacity-10 blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="relative px-4 py-16 sm:py-20 bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-900 dark:to-slate-950">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-3 text-center text-white">
            <div className="group">
              <div className="mb-2 text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                5
              </div>
              <div className="text-sm sm:text-base text-slate-300 uppercase tracking-wide">
                Projects
              </div>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                Networking
              </div>
              <div className="text-sm sm:text-base text-slate-300 uppercase tracking-wide">
                Focus Area
              </div>
            </div>
            <div className="group">
              <div className="mb-2 text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                Open
              </div>
              <div className="text-sm sm:text-base text-slate-300 uppercase tracking-wide">
                Source
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA Section */}
     {/* Footer CTA Section */}
{/* Footer CTA Section */}
<section className="w-full py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="mb-3 text-3xl font-bold">
      Ready to collaborate?
    </h2>

    <p className="text-lg text-blue-100 dark:text-blue-200">
      Check out our repositories and contribute to amazing projects
    </p>
  </div>
</section>

    </div>
  );
}
