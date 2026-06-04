export type ProjectItem = {
  title: string;
  description: string;
  category: "Personal" | "Web" | "AI" | "Video" | "Creative";
  status: "Idea" | "Active" | "Paused" | "Shipped";
  link?: string;
  tags: string[];
};

// Add personal, web, AI, video, and creative projects here.
export const projects: ProjectItem[] = [
  {
    title: "kevinreape.com",
    description: "A personal operating system for writing, projects, photos, and strange little files.",
    category: "Web",
    status: "Active",
    link: "/",
    tags: ["Astro", "personal site"]
  },
  {
    title: "Story Systems Notebook",
    description: "A placeholder project for frameworks, prompts, and repeatable creative workflows.",
    category: "AI",
    status: "Idea",
    tags: ["AI", "writing"]
  },
  {
    title: "Video Field Notes",
    description: "A shelf for future video essays, experiments, and production notes.",
    category: "Video",
    status: "Paused",
    tags: ["video", "editing"]
  }
];
