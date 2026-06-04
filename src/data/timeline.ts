export type TimelineItem = {
  date: string;
  title: string;
  category: "Life" | "Work" | "Project" | "Writing";
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

export const timelineItems: TimelineItem[] = [
  {
    date: "2026",
    title: "Launched kevinreape.com",
    category: "Project",
    description: "A new home for notes, essays, experiments, and the occasional carefully opened door."
  },
  {
    date: "2025",
    title: "Expanded creative systems work",
    category: "Work",
    description: "Placeholder milestone for a meaningful professional chapter, project arc, or role."
  },
  {
    date: "2024",
    title: "Started a public writing practice",
    category: "Writing",
    description: "Placeholder milestone for collecting ideas, documenting process, and sharing useful artifacts."
  }
];
