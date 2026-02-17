"use client";

import { useMemo, useState } from "react";
import { marked } from "marked";
import type { Framework } from "@/data/frameworks";

interface AtlasDrawerProps {
  framework: Framework;
  related: Framework[];
  onClose: () => void;
  onRunSpine: () => void;
  showSpine: boolean;
}

export function AtlasDrawer({ framework, related, onClose, onRunSpine, showSpine }: AtlasDrawerProps) {
  const [spineOpen, setSpineOpen] = useState(false);

  const html = useMemo(() => marked.parse(framework.content), [framework.content]);

  return (
    <aside className="h-full w-full max-w-[520px] border-l border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="flex h-full flex-col gap-6 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-white/60">
              Frameworks → {framework.category} → {framework.title}
            </p>
            <h2 className="mt-3 text-3xl text-white">{framework.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70 transition hover:border-white/30"
          >
            Back to Galaxy
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/70">
            {framework.category}
          </span>
          {framework.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={async () => {
              const url = `${window.location.origin}/frameworks?id=${framework.id}`;
              await navigator.clipboard.writeText(url);
            }}
            className="rounded-lg border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70 transition hover:border-white/30"
          >
            Copy link
          </button>
          <button
            type="button"
            onClick={onRunSpine}
            className="rounded-lg bg-white px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#070A10] transition hover:-translate-y-0.5 hover:shadow"
          >
            Run Through Spine
          </button>
        </div>

        <div className="atlas-content prose prose-invert max-w-none text-white/80">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="text-sm uppercase tracking-[0.2em] text-white/70">Related</h3>
          <div className="mt-3 flex flex-col gap-3">
            {related.map((item) => (
              <div key={item.id} className="text-sm text-white/70">
                <span className="text-white">{item.title}</span>
                <span className="block text-xs text-white/50">{item.category}</span>
              </div>
            ))}
          </div>
        </div>

        {showSpine && (
          <div className="mt-auto">
            <button
              type="button"
              onClick={() => setSpineOpen((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm text-white/80"
            >
              Spit It Out
              <span className="text-xs uppercase tracking-[0.18em] text-white/50">
                {spineOpen ? "Hide" : "Expand"}
              </span>
            </button>
            {spineOpen && (
              <div className="mt-4 space-y-4 rounded-xl border border-white/10 bg-[#0B0F18] p-4 text-sm text-white/70">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white/60">Friction Identified</h4>
                  <p className="mt-2">Placeholder analysis describing the precise friction surfaced by this framework.</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white/60">Cognitive Distortion</h4>
                  <p className="mt-2">Placeholder note on the common distortion that keeps the pattern alive.</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white/60">Replacement Frame</h4>
                  <p className="mt-2">Placeholder reframing line that restores structure and calm.</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-white/60">Actionable Move</h4>
                  <p className="mt-2">Placeholder action step that can be executed today without escalation.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}
