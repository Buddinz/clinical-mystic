"use client";

import type { Framework } from "@/data/frameworks";
import { getCategoryColors } from "./GalaxyScene";

interface CategoryLegendProps {
  categories: Framework["category"][];
}

export function CategoryLegend({ categories }: CategoryLegendProps) {
  const colors = getCategoryColors();

  return (
    <div className="flex flex-wrap gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70 backdrop-blur">
      {categories.map((category) => (
        <div key={category} className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: colors[category], boxShadow: `0 0 8px ${colors[category]}` }}
          />
          <span className="uppercase tracking-[0.2em]">{category}</span>
        </div>
      ))}
    </div>
  );
}
