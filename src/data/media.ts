export type MediaItem = {
  title: string;
  type: "watching" | "reading" | "listening" | "playing" | "thinking";
  category: "screen" | "shelf" | "hold";
  status: "current" | "finished" | "paused" | "want to start";
  season?: string;
  thoughts?: string;
  rating?: string;
  link?: string;
};

// Edit this list for watching, reading, listening, playing, and thinking notes.
export const mediaItems: MediaItem[] = [
  {
    title: "Friends & Neighbors",
    type: "watching",
    category: "hold",
    status: "current",
    season: "S.3",
    link: "https://tv.apple.com/us/show/your-friends--neighbors/umc.cmc.74o37kzay0yuuub8iumddjsg"
  },
  {
    title: "Maximum Pleasure Guaranteed",
    type: "watching",
    category: "screen",
    status: "current",
    season: "S.1",
    link: "https://tv.apple.com/us/show/maximum-pleasure-guaranteed/umc.cmc.10k6tes7rmc2ti0ho1ozgwezc"
  },
  {
    title: "Widow's Bay",
    type: "watching",
    category: "screen",
    status: "current",
    season: "S.1",
    link: "https://tv.apple.com/us/show/widows-bay/umc.cmc.1zzly0vah46bnvnwf0qkrjhh2"
  },
  {
    title: "Eisenhorn Omnibus",
    type: "reading",
    category: "shelf",
    status: "current",
    link: "https://www.goodreads.com/book/show/63224135-eisenhorn"
  },
  {
    title: "Legends of the Waaagh! Omnibus",
    type: "reading",
    category: "shelf",
    status: "current",
    link: "https://www.goodreads.com/search?q=Legends+of+the+Waaagh%21+Omnibus"
  },
  {
    title: "Dune",
    type: "reading",
    category: "shelf",
    status: "current",
    link: "https://www.goodreads.com/book/show/1022854.Dune"
  }
];
