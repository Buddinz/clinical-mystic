"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { frameworks } from "@/data/frameworks";
import {
  AtlasDrawer,
  CategoryLegend,
  FrameworkCardList,
  GalaxyScene,
  SearchBar,
} from "@/components/frameworks";

export default function FrameworksClient() {
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string | null>(null);
  const [mode, setMode] = useState<"galaxy" | "atlas">("galaxy");
  const [query, setQuery] = useState("");
  const [showSpine, setShowSpine] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id) {
      setSelectedFrameworkId(id);
      setMode("atlas");
    }
  }, []);

  const filtered = useMemo(() => {
    if (!query) return frameworks;
    const q = query.toLowerCase();
    return frameworks.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }, [query]);

  const categories = useMemo(() => {
    return Array.from(new Set(frameworks.map((item) => item.category)));
  }, []);

  const selectedFramework = frameworks.find((item) => item.id === selectedFrameworkId) ?? null;

  const related = useMemo(() => {
    if (!selectedFramework) return [];
    return frameworks
      .filter(
        (item) =>
          item.id !== selectedFramework.id &&
          item.tags.some((tag) => selectedFramework.tags.includes(tag))
      )
      .slice(0, 6);
  }, [selectedFramework]);

  const handleSelect = (id: string) => {
    setSelectedFrameworkId(id);
    setMode("atlas");
    setShowSpine(false);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("id", id);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const showGalaxy = mode === "galaxy";

  return (
    <main className="min-h-screen bg-[#070A10] text-[18px] leading-[1.6] text-white">
      <div className="relative flex min-h-screen flex-col">
        <div className="flex items-center justify-between px-6 py-6 lg:px-10">
          <Link href="/" className="text-xs uppercase tracking-[0.28em] text-white/80">
            Clinical Mystic
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-white/70 lg:flex">
            <Link href="/frameworks" className="text-white">
              Frameworks
            </Link>
            <Link href="/axioms" className="transition hover:text-white">
              Axioms
            </Link>
            <Link href="/essays" className="transition hover:text-white">
              Essays
            </Link>
            <Link href="/audio" className="transition hover:text-white">
              Audio
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMode("galaxy")}
              className={`rounded-lg border px-3 py-2 text-xs uppercase tracking-[0.2em] transition ${
                mode === "galaxy" ? "border-white/60 bg-white/10" : "border-white/15 text-white/60"
              }`}
            >
              Galaxy
            </button>
            <button
              type="button"
              onClick={() => setMode("atlas")}
              className={`rounded-lg border px-3 py-2 text-xs uppercase tracking-[0.2em] transition ${
                mode === "atlas" ? "border-white/60 bg-white/10" : "border-white/15 text-white/60"
              }`}
            >
              Atlas
            </button>
            <button
              type="button"
              className="hidden rounded-lg border border-white/15 p-2 text-white/60 transition hover:border-white/30 lg:inline-flex"
              aria-label="Search"
            >
              ⌕
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:flex-row">
          <div className="relative flex-1 px-6 pb-10 lg:px-10">
            <div className="mb-6 max-w-xl lg:hidden">
              <SearchBar value={query} onChange={setQuery} />
            </div>

            <div
              className={`hidden h-full min-h-[640px] rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur lg:block ${
                showGalaxy ? "" : "lg:hidden"
              }`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-white/60">Galaxy Mode</p>
                  <h1 className="mt-2 text-5xl font-semibold tracking-tight text-white lg:text-6xl">
                    Framework Constellation
                  </h1>
                </div>
                <div className="w-64">
                  <SearchBar value={query} onChange={setQuery} />
                </div>
              </div>
              <div className="relative h-[520px] rounded-2xl border border-white/10 bg-[#0B0F18]">
                <GalaxyScene
                  frameworks={filtered}
                  selectedId={selectedFrameworkId}
                  query={query}
                  onSelect={handleSelect}
                />
                <div className="absolute bottom-5 left-5">
                  <CategoryLegend categories={categories} />
                </div>
              </div>
            </div>

            <div
              className={`hidden h-full min-h-[640px] rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur lg:block ${
                showGalaxy ? "lg:hidden" : ""
              }`}
            >
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">Atlas Mode</p>
                <h1 className="mt-2 text-5xl font-semibold tracking-tight text-white lg:text-6xl">Framework Atlas</h1>
                <p className="mt-3 text-sm text-white/60">
                  Browse the catalog and open a framework to read the full protocol.
                </p>
              </div>
              <div className="mb-6 max-w-md">
                <SearchBar value={query} onChange={setQuery} />
              </div>
              <FrameworkCardList frameworks={filtered} onSelect={handleSelect} />
            </div>

            <div className="space-y-6 lg:hidden">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">Atlas Mode</p>
                <h1 className="mt-2 text-4xl font-semibold tracking-tight text-white">Framework Atlas</h1>
                <p className="mt-3 text-sm text-white/60">
                  Browse and open a framework to read the full protocol.
                </p>
              </div>
              <FrameworkCardList frameworks={filtered} onSelect={handleSelect} />
            </div>
          </div>

          <div
            className={`h-full border-t border-white/10 lg:border-l lg:border-t-0 ${
              selectedFramework ? "block" : "hidden lg:block"
            }`}
          >
            {selectedFramework ? (
              <AtlasDrawer
                framework={selectedFramework}
                related={related}
                onClose={() => {
                  setSelectedFrameworkId(null);
                  setShowSpine(false);
                  if (typeof window !== "undefined") {
                    const url = new URL(window.location.href);
                    url.searchParams.delete("id");
                    window.history.replaceState({}, "", url.toString());
                  }
                }}
                onRunSpine={() => setShowSpine(true)}
                showSpine={showSpine}
              />
            ) : (
              <div className="hidden h-full w-full max-w-[520px] items-center justify-center lg:flex">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-sm text-white/60">
                  Select a framework to open the Atlas panel.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
