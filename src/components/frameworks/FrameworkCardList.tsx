"use client";

import type { Framework } from "@/data/frameworks";

interface FrameworkCardListProps {
  frameworks: Framework[];
  onSelect: (id: string) => void;
}

export function FrameworkCardList({ frameworks, onSelect }: FrameworkCardListProps) {
  return (
    <div className="grid gap-4">
      {frameworks.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onSelect(item.id)}
          className="rounded-xl border border-white/10 bg-white/5 p-5 text-left text-white/80 shadow-sm transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/50">{item.category}</p>
          <h3 className="mt-2 text-xl text-white">{item.title}</h3>
          <p className="mt-2 text-sm text-white/70">{item.summary}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </button>
      ))}
    </div>
  );
}
