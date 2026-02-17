"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search frameworks"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-sm text-white/80 placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      />
      <span className="pointer-events-none absolute right-4 top-3.5 text-white/40">⌕</span>
    </div>
  );
}
