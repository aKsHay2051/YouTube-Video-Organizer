"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getSetById, addVideoToSet, extractVideoId } from "@/lib/storage";
import { Set, VideoPurpose } from "@/types";

export default function AddVideoPage() {
  const params = useParams();
  const router = useRouter();
  const [set, setSet] = useState<Set | null>(null);
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [purpose, setPurpose] = useState<VideoPurpose>("Learn");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const setId = params.id as string;
    const loadedSet = getSetById(setId);
    if (!loadedSet) {
      router.push("/sets");
      return;
    }
    setSet(loadedSet);
  }, [params.id, router]);

  const handleUrlChange = (value: string) => {
    setUrl(value);
    setError("");

    // Try to extract video ID and fetch title
    const videoId = extractVideoId(value);
    if (videoId && !title) {
      // For MVP, we'll use a simple approach - user can edit title
      // In production, you'd fetch from YouTube API
      setTitle(`Video ${videoId.substring(0, 8)}...`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!set) return;

    const videoId = extractVideoId(url);
    if (!videoId) {
      setError("Invalid YouTube URL. Please enter a valid YouTube link.");
      return;
    }

    if (!title.trim()) {
      setError("Please enter a video title.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const fullUrl = url.startsWith("http") ? url : `https://www.youtube.com/watch?v=${videoId}`;
      addVideoToSet(set.id, {
        title: title.trim(),
        videoId,
        url: fullUrl,
        purpose,
        watched: false,
      });
      router.push(`/sets/${set.id}`);
    } catch (err) {
      setError("Failed to add video. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (!set) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <Link
          href={`/sets/${set.id}`}
          className="mb-8 inline-flex items-center text-sm font-medium text-zinc-500 hover:text-[var(--primary)] transition-colors"
        >
          ← Back to {set.name}
        </Link>

        <div className="card p-8 shadow-xl border-zinc-200 dark:border-zinc-800">
          <h1 className="text-2xl font-bold mb-2">Add Video</h1>
          <p className="text-zinc-500 text-sm mb-8">
            Add a video to <span className="font-semibold text-[var(--foreground)]">{set.name}</span>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="url" className="block text-sm font-medium mb-2">
                YouTube URL *
              </label>
              <input
                id="url"
                type="text"
                value={url}
                onChange={(e) => handleUrlChange(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                required
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-zinc-400 focus:border-[var(--primary)] focus:ring-[var(--primary)] focus:outline-none transition-all"
              />
              <p className="mt-2 text-xs text-zinc-400">
                Supports youtube.com/watch, youtu.be, or just the video ID
              </p>
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-2">
                Video Title *
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter video title"
                required
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-zinc-400 focus:border-[var(--primary)] focus:ring-[var(--primary)] focus:outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-medium mb-2">
                Purpose *
              </label>
              <select
                id="purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value as VideoPurpose)}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3 text-sm text-[var(--foreground)] focus:border-[var(--primary)] focus:ring-[var(--primary)] focus:outline-none transition-all appearance-none"
              >
                <option value="Learn" className="bg-white dark:bg-[#0f0f0f] text-zinc-900 dark:text-zinc-100">Learn</option>
                <option value="Watch" className="bg-white dark:bg-[#0f0f0f] text-zinc-900 dark:text-zinc-100">Watch</option>
                <option value="Reference" className="bg-white dark:bg-[#0f0f0f] text-zinc-900 dark:text-zinc-100">Reference</option>
              </select>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 p-3 text-sm text-red-600 dark:text-red-400">
                {error}
              </div>
            )}

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting || !url.trim() || !title.trim()}
                className="btn-primary flex-1 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Adding..." : "Add Video"}
              </button>
              <Link
                href={`/sets/${set.id}`}
                className="px-6 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

