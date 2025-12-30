import { Set, Video } from "@/types";

const STORAGE_KEY = "youtube-video-organizer-sets";

// Get all sets from localStorage
export function getAllSets(): Set[] {
  if (typeof window === "undefined") return [];
  
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

// Save all sets to localStorage
export function saveAllSets(sets: Set[]): void {
  if (typeof window === "undefined") return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sets));
  } catch (error) {
    console.error("Failed to save sets:", error);
  }
}

// Get a single set by ID
export function getSetById(id: string): Set | null {
  const sets = getAllSets();
  return sets.find((set) => set.id === id) || null;
}

// Create a new set
export function createSet(name: string, description?: string): Set {
  const sets = getAllSets();
  const newSet: Set = {
    id: crypto.randomUUID(),
    name,
    description,
    videos: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  sets.push(newSet);
  saveAllSets(sets);
  return newSet;
}

// Update a set
export function updateSet(updatedSet: Set): void {
  const sets = getAllSets();
  const index = sets.findIndex((set) => set.id === updatedSet.id);
  
  if (index !== -1) {
    sets[index] = { ...updatedSet, updatedAt: new Date().toISOString() };
    saveAllSets(sets);
  }
}

// Delete a set
export function deleteSet(id: string): void {
  const sets = getAllSets();
  const filtered = sets.filter((set) => set.id !== id);
  saveAllSets(filtered);
}

// Add a video to a set
export function addVideoToSet(setId: string, video: Omit<Video, "id" | "createdAt">): Video {
  const sets = getAllSets();
  const set = sets.find((s) => s.id === setId);
  
  if (!set) {
    throw new Error("Set not found");
  }
  
  const newVideo: Video = {
    ...video,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };
  
  set.videos.push(newVideo);
  set.updatedAt = new Date().toISOString();
  saveAllSets(sets);
  
  return newVideo;
}

// Update a video in a set
export function updateVideoInSet(setId: string, videoId: string, updates: Partial<Video>): void {
  const sets = getAllSets();
  const set = sets.find((s) => s.id === setId);
  
  if (!set) {
    throw new Error("Set not found");
  }
  
  const video = set.videos.find((v) => v.id === videoId);
  if (video) {
    Object.assign(video, updates);
    set.updatedAt = new Date().toISOString();
    saveAllSets(sets);
  }
}

// Delete a video from a set
export function deleteVideoFromSet(setId: string, videoId: string): void {
  const sets = getAllSets();
  const set = sets.find((s) => s.id === setId);
  
  if (!set) {
    throw new Error("Set not found");
  }
  
  set.videos = set.videos.filter((v) => v.id !== videoId);
  set.updatedAt = new Date().toISOString();
  saveAllSets(sets);
}

// Extract video ID from YouTube URL
export function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  return null;
}

