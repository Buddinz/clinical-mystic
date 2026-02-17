export type AxiomTag = "Regulation" | "Decision" | "Identity" | "Systems" | "Attention";

export interface Axiom {
  slug: string;
  title: string;
  statement: string;
  tag: AxiomTag;
}

export const axioms: Axiom[] = [
  {
    slug: "stillness-is-structural",
    title: "Stillness is structural",
    statement:
      "When the body is steady, the system can finally detect what is true instead of what is urgent.",
    tag: "Regulation",
  },
  {
    slug: "decision-friction-is-a-signal",
    title: "Decision friction is a signal",
    statement:
      "If momentum breaks, the system is asking for a clearer cost, not more force.",
    tag: "Decision",
  },
  {
    slug: "noble-gas-state",
    title: "Noble Gas state",
    statement:
      "Non-reactivity is not withdrawal; it is a stable internal state that resists contamination.",
    tag: "Regulation",
  },
  {
    slug: "affected-homeostasis",
    title: "Affected Homeostasis",
    statement:
      "Stabilization is the capacity to return to baseline without shrinking the field of care.",
    tag: "Regulation",
  },
  {
    slug: "people-versus-system",
    title: "People problems vs system problems",
    statement:
      "If the pattern repeats across people, it is a system problem wearing a face.",
    tag: "Systems",
  },
  {
    slug: "clarity-precedes-velocity",
    title: "Clarity precedes velocity",
    statement:
      "Speed without naming the constraint is just movement in place.",
    tag: "Decision",
  },
  {
    slug: "attention-has-weight",
    title: "Attention has weight",
    statement:
      "What you track becomes heavier; what you ignore becomes noisier.",
    tag: "Attention",
  },
  {
    slug: "identity-is-a-system",
    title: "Identity is a system",
    statement:
      "Selfhood is not a slogan; it is the set of routines that survive stress.",
    tag: "Identity",
  },
  {
    slug: "calm-is-a-constraint",
    title: "Calm is a constraint",
    statement:
      "The system must be calm enough to tolerate its own feedback.",
    tag: "Regulation",
  },
  {
    slug: "replace-pressure-with-structure",
    title: "Replace pressure with structure",
    statement:
      "Pressure fades; structure holds long after the feeling does.",
    tag: "Systems",
  },
  {
    slug: "conflict-maps-the-boundary",
    title: "Conflict maps the boundary",
    statement:
      "Where friction appears, a boundary is failing or missing.",
    tag: "Systems",
  },
  {
    slug: "decision-surface-area",
    title: "Reduce decision surface area",
    statement:
      "Fewer live options create higher quality movement.",
    tag: "Decision",
  },
];

export const axiomTags: AxiomTag[] = [
  "Regulation",
  "Decision",
  "Identity",
  "Systems",
  "Attention",
];
