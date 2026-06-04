export type NoteItem = {
  title: string;
  body: string;
  date?: string;
};

// Short notes, quotes, scraps, and small thoughts can be edited here.
export const notes: NoteItem[] = [
  {
    title: "Thoughts on baseball",
    body: "A personal site can feel less like a brochure and more like a place someone keeps returning to.",
    date: "2026"
  },
  {
    title: "Useful rule",
    body: "Make the weird part polished enough that it feels intentional.",
    date: "2026"
  },
  {
    title: "Future scrap",
    body: "Add a now page, a reading list, or a tiny changelog inside this notes app."
  }
];
