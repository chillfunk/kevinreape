export type NoteItem = {
  date: string;
  text: string;
  tags: string[];
  link?: string;
};

// Short notes, quotes, scraps, and small thoughts can be edited here.
export const notes: NoteItem[] = [
  {
    date: "2026-06-04",
    text: "A personal site can feel less like a brochure and more like a place someone keeps returning to.",
    tags: ["web", "personal site"]
  },
  {
    date: "2026-06-03",
    text: "Make the weird part polished enough that it feels intentional.",
    tags: ["design"]
  },
  {
    date: "2026-06-02",
    text: "A good archive should make future editing feel obvious.",
    tags: ["systems", "notes"]
  }
];
