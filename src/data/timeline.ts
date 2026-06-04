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
    date: "2023",
    title: "Joined Missouri S&T Business Intelligence",
    category: "Work",
    description: "Joined the Business Intelligence team at Missouri S&T."
  },
  {
    date: "2022",
    title: "Became Chief Storyteller at Trulaske College of Business",
    category: "Work",
    description: "Became Chief Storyteller at the Trulaske College of Business."
  },
  {
    date: "2019",
    title: "Founded Mizzou Esports",
    category: "Project",
    description: "Founded Mizzou Esports."
  },
  {
    date: "2014",
    title: "Graduated from Mizzou",
    category: "Life",
    description: "Graduated from the University of Missouri."
  },
  {
    date: "1991",
    title: "Born in St. Louis, Missouri",
    category: "Life",
    description: "Born in St. Louis, Missouri."
  }
];
