import Link from "next/link";
import { Container, Divider, Section, Stack } from "@/components/layout";
import { frameworks } from "@/data/frameworks";

export default function FrameworksPage() {
  return (
    <main>
      <Section>
        <Container>
          <Stack>
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.28em] text-muted">Frameworks</p>
              <h1 className="text-4xl tracking-tight text-balance sm:text-5xl">Pillars and frameworks</h1>
              <p className="max-w-2xl text-base text-muted leading-8 sm:text-lg md:leading-9">
                A small set of operating frameworks that keep the work stable, legible, and repeatable.
              </p>
            </div>
          </Stack>
        </Container>
      </Section>

      <Divider />

      <Section>
        <Container>
          <Stack className="gap-10">
            {frameworks.map((framework) => (
              <article key={framework.id} id={framework.id} className="scroll-mt-28">
                <div className="flex flex-col gap-4 rounded-lg border border-soft bg-white p-6">
                  <h2 className="text-2xl sm:text-3xl">{framework.title}</h2>
                  <p className="text-sm text-muted">{framework.summary}</p>
                  <p className="text-sm text-muted">{framework.detail}</p>
                  <Link href="/contact" className="text-sm font-medium text-accent transition hover:underline">
                    Request a brief
                  </Link>
                </div>
              </article>
            ))}
          </Stack>
        </Container>
      </Section>
    </main>
  );
}
