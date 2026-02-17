export interface Essay {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export const essays: Essay[] = [
  {
    slug: "the-quiet-constraint",
    title: "The Quiet Constraint",
    excerpt:
      "A short analysis on why calm is a prerequisite for system-level change.",
    readTime: "8 min",
  },
  {
    slug: "repairing-decision-friction",
    title: "Repairing Decision Friction",
    excerpt:
      "Where momentum stalls and how to reduce the surface area of choice.",
    readTime: "10 min",
  },
  {
    slug: "when-the-system-is-the-story",
    title: "When the System Is the Story",
    excerpt:
      "A field note on identifying structural versus personal causes.",
    readTime: "7 min",
  },
];
