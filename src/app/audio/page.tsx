import { Container, Divider, Section, Stack } from "@/components/layout";
import { audioItems } from "@/data/audio";

export default function AudioPage() {
  return (
    <main>
      <Section>
        <Container>
          <Stack>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Audio</p>
              <h1 className="text-4xl sm:text-5xl">Audio briefs</h1>
              <p className="measure text-base text-muted sm:text-lg">
                Short audio notes designed for clear attention and measured pacing.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section>
        <Container>
          <Stack className="gap-6">
            <div className="rounded-lg border border-soft bg-surface p-6 text-sm text-muted">
              Placeholder player. Embed a private audio host or a clean HTML5 player.
            </div>
            {audioItems.map((item) => (
              <div key={item.slug} className="rounded-lg border border-soft bg-white p-6">
                <h2 className="text-2xl">{item.title}</h2>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted">{item.duration}</p>
              </div>
            ))}
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
