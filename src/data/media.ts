export type MediaItem = {
  title: string;
  type: "watching" | "reading" | "listening" | "playing" | "thinking";
  status: "current" | "finished" | "paused" | "want to start";
  date: string;
  thoughts: string;
  rating?: string;
  link?: string;
};

// Edit this list for watching, reading, listening, playing, and thinking notes.
export const mediaItems: MediaItem[] = [
  {
    title: "Friends & Neighbors",
    type: "watching",
    status: "current",
    date: "2026-06-04",
    thoughts: "Currently watching."
  },
  {
    title: "Maximum Pleasure Guaranteed",
    type: "watching",
    status: "current",
    date: "2026-06-04",
    thoughts: "Currently watching."
  },
  {
    title: "Widow's Bay",
    type: "watching",
    status: "current",
    date: "2026-06-04",
    thoughts: "Currently watching."
  },
  {
    title: "Eisenhorn Omnibus",
    type: "reading",
    status: "current",
    date: "2026-06-04",
    thoughts: "Currently reading."
  },
  {
    title: "Legends of the Waaagh! Omnibus",
    type: "reading",
    status: "current",
    date: "2026-06-04",
    thoughts: "Currently reading."
  },
  {
    title: "Dune",
    type: "reading",
    status: "current",
    date: "2026-06-04",
    thoughts: "Currently reading."
  }
];
