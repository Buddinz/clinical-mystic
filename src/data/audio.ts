export interface AudioItem {
  slug: string;
  title: string;
  description: string;
  duration: string;
}

export const audioItems: AudioItem[] = [
  {
    slug: "signal-before-story",
    title: "Signal Before Story",
    description:
      "A short reflection on identifying raw data before interpretation.",
    duration: "12 min",
  },
  {
    slug: "the-noble-gas-buffer",
    title: "The Noble Gas Buffer",
    description:
      "A guided framing for non-reactivity and steady internal atmosphere.",
    duration: "9 min",
  },
  {
    slug: "structure-over-pressure",
    title: "Structure Over Pressure",
    description:
      "Why structure outlives effort and protects decision quality.",
    duration: "14 min",
  },
];
