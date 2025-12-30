export type VideoPurpose = "Learn" | "Watch" | "Reference";

export interface Video {
  id: string;
  title: string;
  videoId: string;
  url: string;
  purpose: VideoPurpose;
  watched: boolean;
  createdAt: string;
}

export interface Set {
  id: string;
  name: string;
  description?: string;
  videos: Video[];
  createdAt: string;
  updatedAt: string;
}

