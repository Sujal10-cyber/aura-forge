import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import FilterBar from "@/components/FilterBar";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import { PROJECTS } from "@shared/projects";

export default function Index() {
  const [isDark, setIsDark] = useState(false);
  const [visibleCards, setVisibleCards] = useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);

  const categories = Array.from(new Set(PROJECTS.map((p) => p.category)));

  useEffect(() => {
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

  useEffect(() => {
    let filtered = PROJECTS;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Difficulty filter
    if (selectedDifficulty) {
      filtered = filtered.filter((p) => p.difficulty === selectedDifficulty);
    }

    setFilteredProjects(filtered);
  }, [searchQuery, selectedCategory, selectedDifficulty]);

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

  const stats = [
    {
      icon: "📊",
      label: "Total Projects",
      value: PROJECTS.length,
      description: "Hands-on networking implementations",
    },
    {
      icon: "👥",
      label: "Student Contributions",
      value: "20+",
      description: "From diverse CS backgrounds",
    },
    {
      icon: "🎓",
      label: "Concepts Covered",
      value: "15+",
      description: "Networking fundamentals & advanced",
    },
  ];

  const testimonials = [
    {
      id: "1",
      name: "Apeksha",
      role: "Student | Anomaly Detection Lead",
      content: "Working on anomaly detection taught me how network protocols work in practice. The WireShark analysis was eye-opening!",
      avatar: "A",
    },
    {
      id: "2",
      name: "Soumya",
      role: "Student | NS3 Simulation Expert",
      content: "Building the NS3 simulation helped me understand routing algorithms and network topologies at a deeper level.",
      avatar: "S",
    },
    {
      id: "3",
      name: "Ayush",
      role: "Student | Security Focus",
      content: "The IP access control project made security concepts tangible. I learned how firewalls really protect networks.",
      avatar: "A",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Navbar */}
      <Navbar isDark={isDark} onThemeToggle={toggleDarkMode} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 px-4 py-24 sm:py-40 mt-16">
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
            Networking Projects : A1
            <span className="block mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              <i>Hands On</i>
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

      {/* Statistics Section */}
      <Stats stats={stats} />

      {/* Projects Section */}
      <section
        id="projects"
        className="relative px-4 py-20 sm:py-32 bg-white dark:bg-slate-950 scroll-mt-20"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section header */}
          <div className="mb-12 text-center">
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

          {/* Filter Bar */}
          <FilterBar
            onSearchChange={setSearchQuery}
            onCategoryChange={setSelectedCategory}
            onDifficultyChange={setSelectedDifficulty}
            categories={categories}
          />

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={`transform transition-all duration-500 ${
                    visibleCards.includes(project.id)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${index * 120}ms`,
                  }}
                >
                  <ProjectCard
                    icon={project.icon}
                    title={project.title}
                    description={project.description}
                    repositoryUrl={project.repositoryUrl}
                    imageUrl={project.imageUrl}
                    gradientFrom={project.gradientFrom}
                    gradientTo={project.gradientTo}
                    techStack={project.techStack}
                    difficulty={project.difficulty}
                    category={project.category}
                    views={project.views}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Try adjusting your filters or search term
              </p>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-blue-100 dark:bg-blue-900 opacity-10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-purple-100 dark:bg-purple-900 opacity-10 blur-3xl" />
      </section>

      {/* Testimonials Section */}
      <Testimonials testimonials={testimonials} />

      {/* Footer CTA Section */}
      <section className="w-full py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-3 text-3xl font-bold">
            Ready to explore networking?
          </h2>
          <p className="text-lg text-blue-100 dark:text-blue-200">
            Check out our repositories and contribute to amazing projects
          </p>
        </div>
      </section>
    </div>
  );
}
