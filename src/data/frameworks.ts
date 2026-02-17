export interface Framework {
  id: string;
  title: string;
  summary: string;
  detail: string;
}

export const frameworks: Framework[] = [
  {
    id: "affected-homeostasis",
    title: "Affected Homeostasis",
    summary:
      "A stabilization protocol for returning to baseline without numbing the signal.",
    detail:
      "Tracks how emotion shifts homeostatic balance and defines a clear path back to steadiness.",
  },
  {
    id: "noble-gas",
    title: "Noble Gas state",
    summary:
      "A metaphor for internal non-reactivity under pressure.",
    detail:
      "Builds a buffer between stimulus and response so the system can stay uncontaminated.",
  },
  {
    id: "decision-friction",
    title: "Decision friction",
    summary:
      "A diagnostic for where momentum breaks and why.",
    detail:
      "Locates the constraint, names the cost, and reintroduces motion with minimal force.",
  },
  {
    id: "people-systems",
    title: "People vs system problems",
    summary:
      "A clean distinction for where change should be aimed.",
    detail:
      "Separates individual behavior from the structure that shapes it, so fixes land correctly.",
  },
];
