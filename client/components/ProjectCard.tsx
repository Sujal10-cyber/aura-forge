interface ProjectCardProps {
  icon: string;
  title: string;
  description: string;
  repositoryUrl: string;
  imageUrl: string;
  gradientFrom: string;
  gradientTo: string;
}

export default function ProjectCard({
  icon,
  title,
  description,
  repositoryUrl,
  imageUrl,
  gradientFrom,
  gradientTo,
}: ProjectCardProps) {
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
      </div>

      {/* Content area */}
      <div className="relative p-6 flex-1 flex flex-col bg-white dark:bg-slate-900">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 flex-1 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
          {description}
        </p>

        {/* Button with enhanced interactivity */}
        <div className="mt-6 flex items-center gap-2">
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
