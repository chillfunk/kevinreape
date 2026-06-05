export type PhotoMetadata = {
  id: string;
  src: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
};

export type PhotoItem = PhotoMetadata;

// Add real photo files to public/images/photos.
// Allowed formats: .jpg, .jpeg, .png, .webp, .gif.
// Metadata is optional. Photos appear automatically from the folder.
// Add an entry here only when you want a custom title, date, caption, or tags.
// Match src to the public URL, for example: /images/photos/file-name.jpg.
export const photoMetadata: PhotoMetadata[] = [
  {
    id: "download",
    src: "/images/photos/download.jpg",
    title: "Model Photo",
    date: "2026",
    description: "Photo metadata can be edited in src/data/photos.ts."
  }
];
