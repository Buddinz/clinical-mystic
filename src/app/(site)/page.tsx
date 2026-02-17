import Link from "next/link";
import { Container, Divider, Grid, Section, Stack } from "@/components/layout";
import { axioms } from "@/data/axioms";
import { frameworks } from "@/data/frameworks";

export default function Home() {
  const axiomPreview = axioms.slice(0, 6);

  return (
    <main>
      <section className="hero-gradient min-h-screen border-b border-soft">
        <Container>
          <div className="flex min-h-screen flex-col justify-center py-24 md:py-32">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.32em] text-muted">Private Research Platform</p>
              <div className="flex flex-col gap-4">
                <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                  Stillness Is Structural
                </h1>
                <p className="text-base text-muted">
                  Alternate headlines: Clarity Precedes Momentum · Stability Before Strategy · Signal Over Noise · Regulate. Observe.
                  Rebuild.
                </p>
                <p className="max-w-[600px] text-lg text-muted sm:text-xl">
                  The Clinical Mystic is a calm, forensic practice at the intersection of neuroscience, philosophy, emotional
                  regulation, and systems design.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#thesis"
                  className="rounded-lg bg-ink px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Read the Thesis
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section id="thesis" className="bg-white">
        <Container>
          <Stack>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Thesis</p>
              <h2 className="text-3xl sm:text-4xl">Affected Homeostasis</h2>
            </div>
            <p className="max-w-2xl border-l border-soft pl-6 text-base text-muted leading-8 sm:text-lg md:leading-9">
              Affected Homeostasis is a stabilization protocol for the human system. It treats emotional volatility as a measurable
              shift in baseline and builds a precise route back to steadiness without numbing the signal. The goal is not detachment,
              but a stable internal atmosphere that allows accurate perception. Many failures that look personal are structural. When a
              pattern repeats across people, it is a system problem wearing a face. This work separates people problems from system
              problems, then repairs the structure so the person can move cleanly again. Stillness is structural. It is the condition
              that lets decisions regain their weight and allows the system to hold its own feedback without collapse.
            </p>
          </Stack>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <Stack>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Framework pillars</p>
              <h2 className="text-3xl text-balance sm:text-4xl">Frameworks that hold the work</h2>
            </div>
            <Grid className="sm:grid-cols-2">
              {frameworks.map((framework) => (
                <div
                  key={framework.id}
                  className="rounded-xl border border-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl">{framework.title}</h3>
                    <p className="text-sm text-muted">{framework.summary}</p>
                    <p className="text-sm text-muted">Category: {framework.category}</p>
                    <Link
                      href={`/frameworks?id=${framework.id}`}
                      className="text-sm font-medium text-accent transition hover:underline"
                    >
                      View framework
                    </Link>
                  </div>
                </div>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Stack>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Axioms library</p>
              <h2 className="text-3xl text-balance sm:text-4xl">Axioms for regulated thinking</h2>
            </div>
            <ul className="flex flex-col gap-4">
              {axiomPreview.map((axiom) => (
                <li key={axiom.slug} className="flex flex-col gap-2 border-b border-soft pb-4">
                  <Link href={`/axioms/${axiom.slug}`} className="text-lg font-medium transition hover:underline">
                    {axiom.title}
                  </Link>
                  <p className="text-sm text-muted">{axiom.statement}</p>
                  <span className="text-xs uppercase tracking-[0.22em] text-muted">{axiom.tag}</span>
                </li>
              ))}
            </ul>
            <Link href="/axioms" className="text-sm font-medium text-accent transition hover:underline">
              Browse all axioms
            </Link>
          </Stack>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <Stack>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Method</p>
              <h2 className="text-3xl text-balance sm:text-4xl">A four-step forensic method</h2>
            </div>
            <Grid className="sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Observe",
                  description: "Collect the signal without judgment or narrative.",
                },
                {
                  title: "Separate",
                  description: "Distinguish person from system and isolate the constraint.",
                },
                {
                  title: "Stabilize",
                  description: "Return the system to baseline with clear, repeatable steps.",
                },
                {
                  title: "Rebuild",
                  description: "Install structure that keeps the signal clean over time.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-xl border border-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <h3 className="text-lg">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted">{step.description}</p>
                </div>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <Stack>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Work outputs</p>
              <h2 className="text-3xl text-balance sm:text-4xl">A quiet catalog of outputs</h2>
            </div>
            <Grid className="sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Essays",
                  description: "Short research notes with disciplined claims.",
                  href: "/essays",
                },
                {
                  title: "Axioms",
                  description: "Atomic statements built for repetition and memory.",
                  href: "/axioms",
                },
                {
                  title: "Audio",
                  description: "Voice studies and field notes for regulated attention.",
                  href: "/audio",
                },
                {
                  title: "Experimental Interfaces",
                  description: "Small tools that translate theory into structure.",
                  href: "/frameworks",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-xl border border-soft bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-black/20 hover:shadow-md"
                >
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted">{item.description}</p>
                </Link>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container>
          <Stack>
            <h2 className="text-3xl text-balance sm:text-4xl">A calm invitation</h2>
            <p className="max-w-2xl text-base text-muted leading-8 sm:text-lg md:leading-9">
              If the work feels aligned, reach out quietly. No campaigns. No funnels.
            </p>
            <Link
              href="/contact"
              className="w-fit rounded-lg border border-soft px-6 py-3 text-sm font-medium text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Contact
            </Link>
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
