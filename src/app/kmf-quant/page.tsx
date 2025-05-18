"use client";

import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { SectionHeader } from "@/components/kmf-quest/Section-header";
import { SectionCard } from "@/components/kmf-quest/Section-card";
import { questionBank } from "./data";
import { useSearchParams } from "next/navigation";

interface Section {
  id: string;
  number: number;
  difficulty: "Medium" | "Hard" | "Research";
  color: "blue" | "orange" | "purple";
  description: string;
  category: string;
}

type DifficultyFilter = "All" | "Medium" | "Hard" | "Research";

// Map questionBank sections to the format expected by SectionCard
const mapSections = (category: string): Section[] => {
  const categoryData = questionBank.find(
    (cat) => cat.category.toLowerCase() === category.toLowerCase()
  );

  if (!categoryData) return [];

  return categoryData.sections.map((section, index) => {
    const number = parseInt(section.id);
    const difficulty = section.difficulty;
    const color =
      difficulty === "Medium"
        ? "blue"
        : difficulty === "Hard"
        ? "orange"
        : "purple";
    const time = 15 + (index % 3) * 5;

    return {
      id: section.id,
      number,
      difficulty,
      color,
      description:
        category === "sprint"
          ? `${difficulty} level geometry problems, ${time} mins`
          : category === "special"
          ? `Special ${difficulty.toLowerCase()} practice set`
          : `Latest puzzle challenge, updated weekly`,
      category,
    };
  });
};

// Combine all sections from questionBank
const allSections = [
  ...mapSections("sprint"),
  ...mapSections("special"),
  ...mapSections("puzzle"),
];

export default function Home() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const id = searchParams.get("id") || "";

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [difficultyFilter, setDifficultyFilter] =
    useState<DifficultyFilter>("All");

  // Filter sections based on search term, difficulty, category, and id
  const filterSection = (section: Section): boolean => {
    const matchesSearch =
      searchTerm === "" ||
      section.number.toString().includes(searchTerm) ||
      `section ${section.number}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesDifficulty =
      difficultyFilter === "All" || section.difficulty === difficultyFilter;

    const matchesCategory =
      !category || section.category.toLowerCase() === category.toLowerCase();

    const matchesId = !id || section.id === id;

    return matchesSearch && matchesDifficulty && matchesCategory && matchesId;
  };

  const filteredSections = allSections.filter(filterSection);

  // Check if we have any results
  const hasResults = filteredSections.length > 0;

  // Filter button component
  const FilterButton = ({ label }: { label: DifficultyFilter }) => (
    <button
      className={`px-3 py-1 rounded-full backdrop-blur-sm border text-sm transition-all ${
        difficultyFilter === label
          ? label === "Medium"
            ? "bg-blue-500/20 border-blue-500/50 text-blue-600 dark:text-blue-300"
            : label === "Hard"
            ? "bg-orange-500/20 border-orange-500/50 text-orange-600 dark:text-orange-300"
            : label === "Research"
            ? "bg-purple-500/20 border-purple-500/50 text-purple-600 dark:text-purple-300"
            : "bg-primary/20 border-primary/50 text-primary"
          : "bg-card/50 border-border hover:bg-card/80"
      }`}
      onClick={() => setDifficultyFilter(label)}
    >
      {label}
    </button>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-background to-background/80 text-foreground p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Search and filter container */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="relative w-full lg:w-1/3 min-w-[250px]">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search by section (e.g., Section 1)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-primary/20 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all"
            />
          </div>

          <div className="flex flex-wrap justify-center lg:justify-end gap-2">
            <FilterButton label="All" />
            <FilterButton label="Medium" />
            <FilterButton label="Hard" />
            <FilterButton label="Research" />
          </div>
        </div>

        {!hasResults && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-muted-foreground">
              No {difficultyFilter !== "All" ? difficultyFilter : ""} sections
              found matching {searchTerm}
              {category && ` in ${category}`}
              {id && ` section ${id}`}
            </h3>
            <p className="mt-2 text-muted-foreground">
              Try searching for a different section or changing the difficulty
              filter
            </p>
          </div>
        )}

        {/* Combined Sections */}
        {hasResults && (
          <section className="space-y-6 animate-fade-in">
            <SectionHeader
              title={
                category
                  ? `${
                      category.charAt(0).toUpperCase() + category.slice(1)
                    } Practice`
                  : "All Practice Sections"
              }
              subtitle="KMF Quant Questions"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredSections.map((section, i) => (
                <SectionCard
                  key={section.id}
                  number={section.number}
                  difficulty={section.difficulty}
                  color={section.color}
                  description={section.description}
                  animationDelay={i * 0.05}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}