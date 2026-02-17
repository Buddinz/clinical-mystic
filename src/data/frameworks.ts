export interface Framework {
  id: string;
  title: string;
  category: "Regulation" | "Decision" | "Systems" | "Perception" | "Strategy";
  summary: string;
  content: string;
  tags: string[];
}

export const frameworks: Framework[] = [
  {
    id: "affected-homeostasis",
    title: "Affected Homeostasis",
    category: "Regulation",
    summary:
      "A stabilization protocol for returning to baseline without numbing the signal.",
    content:
      "## What it is\nAffected Homeostasis maps how emotional volatility shifts baseline regulation and how to return to steady state.\n\n## Why it matters\nIf baseline is unstable, every decision is distorted by urgency. Stability restores accurate perception.\n\n## How it works\n- Observe the physiological signal\n- Separate stimulus from story\n- Stabilize with repeatable steps\n- Rebuild with structural habits",
    tags: ["Baseline", "Stability", "Regulation"],
  },
  {
    id: "noble-gas-state",
    title: "Noble Gas state",
    category: "Regulation",
    summary:
      "A metaphor for internal non-reactivity under pressure.",
    content:
      "## What it is\nA model for remaining inert under pressure while still responsive to truth.\n\n## Signal\nNon-reactivity is not withdrawal. It is controlled permeability.\n\n## Practice\n- Name the stimulus\n- Slow the response window\n- Maintain internal temperature",
    tags: ["Non-reactivity", "Boundary", "Composure"],
  },
  {
    id: "decision-friction",
    title: "Decision Friction",
    category: "Decision",
    summary:
      "A diagnostic for where momentum breaks and why.",
    content:
      "## What it is\nDecision friction identifies the exact point where motion stalls.\n\n## Distinction\nFriction is not failure; it is missing clarity.\n\n## Interventions\n- Name the constraint\n- Reduce options\n- Reintroduce motion",
    tags: ["Momentum", "Constraint", "Clarity"],
  },
  {
    id: "people-versus-system",
    title: "People vs System Problems",
    category: "Systems",
    summary:
      "A clean distinction for where change should be aimed.",
    content:
      "## What it is\nA diagnostic that separates individual behavior from the structure that shapes it.\n\n## Why it matters\nWhen a pattern repeats across people, the system is the source.\n\n## Application\n- Map recurrence\n- Fix the structure\n- Re-test with new constraints",
    tags: ["Structure", "Accountability", "Pattern"],
  },
  {
    id: "signal-before-story",
    title: "Signal Before Story",
    category: "Perception",
    summary:
      "A perception rule that preserves raw data before narrative." ,
    content:
      "## What it is\nA protocol for capturing raw sensation before interpretation.\n\n## Effect\nPrevents cognitive distortion from dominating early analysis.\n\n## Practice\n- Record signal\n- Delay story\n- Compare to baseline",
    tags: ["Perception", "Accuracy", "Signal"],
  },
  {
    id: "structural-stillness",
    title: "Structural Stillness",
    category: "Regulation",
    summary:
      "Stillness as a structural requirement for clean feedback.",
    content:
      "## What it is\nA rule that the system must be calm enough to tolerate its own feedback.\n\n## Why it matters\nNoise hides data. Stillness reveals constraint.\n\n## Practice\n- Remove noise\n- Name the signal\n- Stabilize the loop",
    tags: ["Feedback", "Calm", "Signal"],
  },
  {
    id: "axiom-density",
    title: "Axiom Density",
    category: "Strategy",
    summary:
      "A method for compressing doctrine into repeatable statements.",
    content:
      "## What it is\nAxiom density measures how quickly a system can restate its core truths.\n\n## Use\nLow density creates drift. High density sustains focus.\n\n## Practice\n- Reduce to first principles\n- Test for repeatability\n- Publish the core line",
    tags: ["Doctrine", "Compression", "Strategy"],
  },
  {
    id: "attention-weight",
    title: "Attention Weight",
    category: "Perception",
    summary:
      "A model for how focus distorts the system over time.",
    content:
      "## What it is\nAttention changes the weight of what it touches.\n\n## Effect\nOverfocus creates distortion. Underfocus creates noise.\n\n## Practice\n- Track attention targets\n- Rebalance weekly\n- Return to baseline",
    tags: ["Focus", "Bias", "Perception"],
  },
  {
    id: "constraint-ladder",
    title: "Constraint Ladder",
    category: "Systems",
    summary:
      "A hierarchy for identifying the real bottleneck.",
    content:
      "## What it is\nA ladder for locating the constraint that actually blocks motion.\n\n## Steps\n- Surface symptoms\n- Map dependencies\n- Resolve highest leverage constraint",
    tags: ["Bottleneck", "Leverage", "Systems"],
  },
  {
    id: "move-before-scale",
    title: "Move Before Scale",
    category: "Strategy",
    summary:
      "A rule that motion quality precedes expansion.",
    content:
      "## What it is\nScale without stability magnifies disorder.\n\n## Use\nValidate movement quality before expansion.\n\n## Practice\n- Prove repeatability\n- Stabilize throughput\n- Expand carefully",
    tags: ["Scale", "Stability", "Strategy"],
  },
  {
    id: "decision-surface",
    title: "Decision Surface",
    category: "Decision",
    summary:
      "Reduce open decisions to increase velocity.",
    content:
      "## What it is\nDecision surface area quantifies the number of live options.\n\n## Why it matters\nToo many options flatten momentum.\n\n## Practice\n- Collapse options\n- Commit to a path\n- Review quarterly",
    tags: ["Velocity", "Choice", "Commitment"],
  },
];
