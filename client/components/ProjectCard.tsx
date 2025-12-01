interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  repositoryUrl: string;
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
  techStack?: string[];
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
  category?: string;
  views?: number;
}

export default function ProjectCard({
  icon,
  title,
  description,
  repositoryUrl,
  imageUrl,
  gradientFrom,
  gradientTo,
  techStack = [],
  difficulty = "Intermediate",
  category = "Project",
  views = 0,
}: ProjectCardProps) {
  const difficultyColor = {
    Beginner: "bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800",
    Intermediate: "bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-800",
    Advanced: "bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800",
  };

  const categoryColors: Record<string, string> = {
    Analysis: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",
    Simulation: "bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300",
    Protocol: "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-300",
    Security: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300",
    Infrastructure: "bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300",
  };

  return (
    <a
      href={repositoryUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-lg dark:shadow-slate-950 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-2xl hover:dark:shadow-slate-950/50 hover:-translate-y-3 dark:border dark:border-slate-800 hover:dark:border-slate-700"
    >
      {/* Image background for header area */}
      <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800 transition-all duration-300 group-hover:h-56">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
        />
        {/* Gradient overlay with enhanced dark mode */}
        <div
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}50, ${gradientTo}50)`,
          }}
          className="absolute inset-0 transition-all duration-300 group-hover:opacity-80"
        />
        {/* Icon overlay with animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl transition-all duration-300 group-hover:scale-150 drop-shadow-lg animate-float">
            {icon}
          </span>
        </div>
        
        {/* Floating particle effects on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse" />
          <div className="absolute top-8 right-8 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
          <div className="absolute bottom-4 left-8 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>

        {/* Category Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${categoryColors[category] || categoryColors.Protocol}`}>
          {category}
        </div>

        {/* Difficulty Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${difficultyColor[difficulty]}`}>
          {difficulty}
        </div>
      </div>

      {/* Content area */}
      <div className="relative p-6 flex-1 flex flex-col bg-white dark:bg-slate-900">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 flex-1 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Tags */}
        {techStack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {techStack.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700 transition-colors duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 group-hover:border-blue-300 dark:group-hover:border-blue-700"
              >
                {tech}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="inline-block px-2 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700">
                +{techStack.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Views and CTA */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <span>👁️</span>
            <span className="font-semibold">{views.toLocaleString()}</span>
          </div>
          <span className="inline-block rounded-lg bg-slate-50 dark:bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 group-hover:text-blue-600 dark:group-hover:text-blue-300 border border-transparent dark:border-slate-700 group-hover:border-blue-200 dark:group-hover:border-blue-700">
            View Repository →
          </span>
        </div>

        {/* Bottom accent line */}
        <div 
          style={{
            background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
          }}
          className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" 
        />
      </div>
    </a>
  );
}
