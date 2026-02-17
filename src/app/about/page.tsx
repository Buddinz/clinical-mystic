import { Container, Divider, Section, Stack } from "@/components/layout";

export default function AboutPage() {
  return (
    <main>
      <Section>
        <Container>
          <Stack>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">About</p>
            <h1 className="text-4xl tracking-tight text-balance sm:text-5xl">The Clinical Mystic</h1>
            <p className="max-w-2xl border-l border-soft pl-6 text-base text-muted leading-8 sm:text-lg md:leading-9">
              An independent investigator working at the intersection of neuroscience, philosophy, emotional regulation, and systems
              design. The work is quiet by design. It values precision, restraint, and clarity over noise.
            </p>
            <div className="measure rounded-lg border border-soft bg-surface p-6 text-sm text-muted">
              Stance: No hype. No promises. Just clean observation, structured language, and usable frameworks.
            </div>
          </Stack>
        </Container>
      </Section>
      <Divider />
    </main>
  );
}
