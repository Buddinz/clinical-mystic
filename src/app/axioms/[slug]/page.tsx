import { notFound } from "next/navigation";
import Link from "next/link";
import { Container, Divider, Section, Stack } from "@/components/layout";
import { axioms } from "@/data/axioms";

interface AxiomPageProps {
  params: { slug: string };
}

export default function AxiomPage({ params }: AxiomPageProps) {
  const axiom = axioms.find((item) => item.slug === params.slug);

  if (!axiom) {
    notFound();
  }

  return (
    <main>
      <Section>
        <Container>
          <Stack>
            <p className="text-xs uppercase tracking-[0.28em] text-muted">Axiom</p>
            <h1 className="text-4xl sm:text-5xl">{axiom.title}</h1>
            <p className="measure text-base text-muted sm:text-lg">{axiom.statement}</p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-muted">
              <span>{axiom.tag}</span>
              <span>Permalink: /axioms/{axiom.slug}</span>
            </div>
            <Link href="/axioms" className="text-sm font-medium text-accent transition hover:underline">
              Back to axioms
            </Link>
          </Stack>
        </Container>
      </Section>
      <Divider />
    </main>
  );
}

export function generateStaticParams() {
  return axioms.map((axiom) => ({ slug: axiom.slug }));
}
