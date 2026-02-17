"use client";

import { useMemo } from "react";
import type { Framework } from "@/data/frameworks";

const categoryColors: Record<Framework["category"], string> = {
  Regulation: "#7C6BFF",
  Decision: "#4AC6FF",
  Systems: "#36F3B5",
  Perception: "#F4B05D",
  Strategy: "#FF7AA2",
};

interface GalaxySceneProps {
  frameworks: Framework[];
  selectedId?: string | null;
  query: string;
  onSelect: (id: string) => void;
}

export function GalaxyScene({ frameworks, selectedId, query, onSelect }: GalaxySceneProps) {
  const filtered = useMemo(() => {
    if (!query) return frameworks;
    const q = query.toLowerCase();
    return frameworks.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [frameworks, query]);

  const categories = Array.from(new Set(filtered.map((item) => item.category)));
  const centers = useMemo(() => {
    const radius = 180;
    return categories.map((_, index) => {
      const angle = (index / categories.length) * Math.PI * 2;
      return {
        x: 50 + Math.cos(angle) * 18,
        y: 50 + Math.sin(angle) * 18,
      };
    });
  }, [categories]);

  return (
    <div className="relative h-full w-full">
      {filtered.map((framework, index) => {
        const categoryIndex = categories.indexOf(framework.category);
        const center = centers[categoryIndex] ?? { x: 50, y: 50 };
        const angle = (index / Math.max(filtered.length, 1)) * Math.PI * 2;
        const offset = 12 + (index % 3) * 6;
        const x = center.x + Math.cos(angle) * offset;
        const y = center.y + Math.sin(angle) * offset;
        const glow = categoryColors[framework.category];

        return (
          <button
            key={framework.id}
            type="button"
            onClick={() => onSelect(framework.id)}
            className={`group absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
              selectedId === framework.id ? "bg-white/10" : "bg-white/5"
            }`}
            style={{ left: `${x}%`, top: `${y}%`, boxShadow: `0 0 24px ${glow}55` }}
          >
            <span className="text-[11px] uppercase tracking-[0.24em]">{framework.title}</span>
            <span
              className="pointer-events-none absolute left-1/2 top-12 z-10 w-52 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0D111A]/90 p-3 text-left text-xs text-white/80 opacity-0 backdrop-blur transition duration-200 group-hover:opacity-100"
              role="tooltip"
            >
              <span className="block text-sm text-white">{framework.title}</span>
              <span className="mt-1 block text-white/70">{framework.summary}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function getCategoryColors() {
  return categoryColors;
}
