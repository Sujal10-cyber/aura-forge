interface StatCard {
  icon: string;
  label: string;
  value: string | number;
  description: string;
}

interface StatsProps {
  stats: StatCard[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Course Statistics
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Overview of networking concepts and projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition-opacity duration-300 blur" />
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg dark:shadow-slate-950 border border-slate-200 dark:border-slate-800 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1 dark:border-slate-800 group-hover:dark:border-slate-700">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
