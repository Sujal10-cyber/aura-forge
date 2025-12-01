import { useState } from "react";
import { Input } from "@/components/ui/input";

interface FilterBarProps {
  onSearchChange: (query: string) => void;
  onCategoryChange: (category: string | null) => void;
  onDifficultyChange: (difficulty: string | null) => void;
  categories: string[];
}

export default function FilterBar({
  onSearchChange,
  onCategoryChange,
  onDifficultyChange,
  categories,
}: FilterBarProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeDifficulty, setActiveDifficulty] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category: string) => {
    const newCategory = activeCategory === category ? null : category;
    setActiveCategory(newCategory);
    onCategoryChange(newCategory);
  };

  const handleDifficultyClick = (difficulty: string) => {
    const newDifficulty = activeDifficulty === difficulty ? null : difficulty;
    setActiveDifficulty(newDifficulty);
    onDifficultyChange(newDifficulty);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const handleReset = () => {
    setSearchQuery("");
    setActiveCategory(null);
    setActiveDifficulty(null);
    onSearchChange("");
    onCategoryChange(null);
    onDifficultyChange(null);
  };

  const difficulties = ["Beginner", "Intermediate", "Advanced"];

  return (
    <div className="mb-12 bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-lg dark:shadow-slate-950 border border-slate-200 dark:border-slate-800">
      {/* Search Bar */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search projects..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-300"
        />
      </div>

      {/* Category Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Categories
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 shadow-lg shadow-blue-500/50"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Difficulty Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
          Difficulty Level
        </h3>
        <div className="flex flex-wrap gap-2">
          {difficulties.map((difficulty) => (
            <button
              key={difficulty}
              onClick={() => handleDifficultyClick(difficulty)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 border ${
                activeDifficulty === difficulty
                  ? "bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 shadow-lg shadow-blue-500/50"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-700"
              }`}
            >
              {difficulty}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      {(searchQuery || activeCategory || activeDifficulty) && (
        <button
          onClick={handleReset}
          className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium transition-all duration-300"
        >
          Reset Filters
        </button>
      )}
    </div>
  );
}
