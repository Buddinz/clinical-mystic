"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container, Divider, Section, Stack } from "@/components/layout";
import { axioms, axiomTags, type AxiomTag } from "@/data/axioms";

export default function AxiomsPage() {
  const [activeTag, setActiveTag] = useState<AxiomTag | "All">("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") {
      return axioms;
    }
    return axioms.filter((axiom) => axiom.tag === activeTag);
  }, [activeTag]);

  return (
    <main>
      <Section>
        <Container>
          <Stack>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Axioms library</p>
              <h1 className="text-4xl sm:text-5xl">Axioms for the Noble state</h1>
              <p className="measure text-base text-muted sm:text-lg">
                Axioms are small, repeatable truths. They stabilize perception and keep decisions clean.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {(["All", ...axiomTags] as const).map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(tag)}
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    activeTag === tag
                      ? "border-ink bg-ink text-white"
                      : "border-soft text-muted hover:border-black/20"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section>
        <Container>
          <Stack className="gap-8">
            {filtered.map((axiom) => (
              <article key={axiom.slug} className="border-b border-soft pb-6">
                <div className="flex flex-col gap-3">
                  <Link href={`/axioms/${axiom.slug}`} className="text-xl font-medium transition hover:underline">
                    {axiom.title}
                  </Link>
                  <p className="text-sm text-muted">{axiom.statement}</p>
                  <span className="text-xs uppercase tracking-[0.22em] text-muted">{axiom.tag}</span>
                </div>
              </article>
            ))}
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
