import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Divider, Section, Stack } from "@/components/layout";
import { essays } from "@/data/essays";

interface EssayPageProps {
  params: { slug: string };
}

export default function EssayPage({ params }: EssayPageProps) {
  const essay = essays.find((item) => item.slug === params.slug);

  if (!essay) {
    notFound();
  }

  return (
    <main>
      <Section>
        <Container>
          <Stack>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Essay</p>
            <h1 className="text-4xl tracking-tight text-balance sm:text-5xl">{essay.title}</h1>
            <p className="max-w-2xl border-l border-soft pl-6 text-base text-muted leading-8 sm:text-lg md:leading-9">
              {essay.excerpt}
            </p>
            <div className="measure rounded-lg border border-soft bg-surface p-6 text-sm text-muted">
              This is a placeholder essay. Replace with full editorial content, citations, and structured sections.
            </div>
            <Link href="/essays" className="text-sm font-medium text-accent transition hover:underline">
              Back to essays
            </Link>
          </Stack>
        </Container>
      </Section>
      <Divider />
    </main>
  );
}

export function generateStaticParams() {
  return essays.map((essay) => ({ slug: essay.slug }));
}
