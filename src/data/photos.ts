export type PhotoItem = {
  id: string;
  src: string;
  filename: string;
  title: string;
  date: string;
  description?: string;
};

// Add photos by placing image files in public/photos, then adding metadata here.
// Real photos can be .jpg, .png, .webp, or .avif. Use newest items first.
// Example src: "/photos/my-image.jpg".
export const photos: PhotoItem[] = [
  {
    id: "st-louis-light",
    src: "/photos/st-louis-light.svg",
    filename: "st-louis-light.svg",
    title: "St. Louis Light",
    date: "2026",
    description: "Placeholder metadata for a future city, travel, or life image."
  },
  {
    id: "workspace-snapshot",
    src: "/photos/workspace-snapshot.svg",
    filename: "workspace-snapshot.svg",
    title: "Workspace Snapshot",
    date: "2026",
    description: "Placeholder metadata for a desk, studio, or project-in-progress image."
  },
  {
    id: "weekend-field-note",
    src: "/photos/weekend-field-note.svg",
    filename: "weekend-field-note.svg",
    title: "Weekend Field Note",
    date: "2026",
    description: "Placeholder metadata for an everyday moment worth keeping."
  }
];
