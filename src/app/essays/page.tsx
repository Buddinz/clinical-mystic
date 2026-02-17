import Link from "next/link";
import { Container, Divider, Section, Stack } from "@/components/layout";
import { essays } from "@/data/essays";

export default function EssaysPage() {
  return (
    <main>
      <Section>
        <Container>
          <Stack>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Essays</p>
              <h1 className="text-4xl sm:text-5xl">Essays and field notes</h1>
              <p className="measure text-base text-muted sm:text-lg">
                Short, precise essays that translate research into usable structure.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section>
        <Container>
          <Stack className="gap-8">
            {essays.map((essay) => (
              <article key={essay.slug} className="border-b border-soft pb-6">
                <Link href={`/essays/${essay.slug}`} className="text-2xl font-medium transition hover:underline">
                  {essay.title}
                </Link>
                <p className="mt-3 text-sm text-muted">{essay.excerpt}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted">{essay.readTime}</p>
              </article>
            ))}
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
