export type LinkItem = {
  label: string;
  href: string;
  description?: string;
};

export type LinkGroup = {
  category: "Work" | "Tools" | "Writing" | "Gaming" | "Warhammer";
  links: LinkItem[];
};

// Bookmark categories and links can be edited here.
export const linkGroups: LinkGroup[] = [
  {
    category: "Work",
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/", description: "Professional profile placeholder." }]
  },
  {
    category: "Tools",
    links: [{ label: "GitHub", href: "https://github.com/", description: "Code and project placeholder." }]
  },
  {
    category: "Writing",
    links: [{ label: "Blog archive", href: "/", description: "Posts and notes on this site." }]
  },
  {
    category: "Gaming",
    links: [{ label: "Mizzou Esports", href: "/", description: "Replace with a real link later." }]
  },
  {
    category: "Warhammer",
    links: [{ label: "Black Templars notes", href: "/", description: "Army tracking placeholder." }]
  }
];
