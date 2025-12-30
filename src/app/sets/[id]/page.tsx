"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getSetById, updateVideoInSet, deleteVideoFromSet } from "@/lib/storage";
import { Set, Video } from "@/types";

export default function SetDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [set, setSet] = useState<Set | null>(null);

  useEffect(() => {
    const setId = params.id as string;
    const loadedSet = getSetById(setId);
    if (!loadedSet) {
      router.push("/sets");
      return;
    }
    setSet(loadedSet);
  }, [params.id, router]);

  const handleToggleWatched = (videoId: string) => {
    if (!set) return;
    const video = set.videos.find((v) => v.id === videoId);
    if (video) {
      updateVideoInSet(set.id, videoId, { watched: !video.watched });
      setSet(getSetById(set.id));
    }
  };

  const handleDeleteVideo = (videoId: string) => {
    if (!set) return;
    if (confirm("Delete this video from the set?")) {
      deleteVideoFromSet(set.id, videoId);
      setSet(getSetById(set.id));
    }
  };

  if (!set) {
    return (
      <main className="min-h-screen p-8 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </main>
    );
  }

  const watchedCount = set.videos.filter((v) => v.watched).length;
  const progress = set.videos.length > 0 ? Math.round((watchedCount / set.videos.length) * 100) : 0;

  const videosByPurpose = {
    Learn: set.videos.filter((v) => v.purpose === "Learn"),
    Watch: set.videos.filter((v) => v.purpose === "Watch"),
    Reference: set.videos.filter((v) => v.purpose === "Reference"),
  };

  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto">
      <div className="mb-4">
        <Link
          href="/sets"
          className="text-sm font-medium text-zinc-500 hover:text-[var(--primary)] transition-colors"
        >
          ← Back to Sets
        </Link>
      </div>

      <div className="card p-8 mb-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h1 className="text-3xl font-bold">{set.name}</h1>
              <span className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs font-semibold tracking-wider uppercase text-zinc-500">
                {set.videos.length} Videos
              </span>
            </div>
            {set.description && (
              <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">{set.description}</p>
            )}

            <div className="mt-6 flex items-center gap-4 max-w-md">
              <div className="flex-1 h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#FF0000] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-sm font-bold w-12 text-right">{progress}%</span>
            </div>
          </div>

          <Link
            href={`/sets/${set.id}/add`}
            className="btn-primary whitespace-nowrap shadow-lg shadow-red-500/20"
          >
            + Add Video
          </Link>
        </div>
      </div>

      {set.videos.length === 0 ? (
        <div className="card p-12 text-center border-dashed">
          <p className="text-zinc-500 mb-4">No videos in this set yet.</p>
          <Link
            href={`/sets/${set.id}/add`}
            className="btn-primary inline-block"
          >
            Add First Video
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {(["Learn", "Watch", "Reference"] as const).map((purpose) => {
            const videos = videosByPurpose[purpose];
            if (videos.length === 0) return null;

            return (
              <div key={purpose} className="space-y-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <span className={`w-2 h-6 rounded-full ${purpose === 'Learn' ? 'bg-blue-500' : purpose === 'Watch' ? 'bg-purple-500' : 'bg-orange-500'}`}></span>
                  {purpose}
                </h2>
                <div className="grid gap-3">
                  {videos.map((video) => (
                    <VideoItem
                      key={video.id}
                      video={video}
                      onToggleWatched={() => handleToggleWatched(video.id)}
                      onDelete={() => handleDeleteVideo(video.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

function VideoItem({
  video,
  onToggleWatched,
  onDelete,
}: {
  video: Video;
  onToggleWatched: () => void;
  onDelete: () => void;
}) {
  return (
    <div className={`group card p-4 flex items-center gap-4 transition-all hover:border-[var(--primary)] hover:shadow-md ${video.watched ? 'opacity-60 bg-zinc-50 dark:bg-zinc-900/50' : 'bg-white dark:bg-[#1a1a1a]'}`}>
      <button
        onClick={onToggleWatched}
        className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${video.watched ? 'bg-zinc-500 border-zinc-500 text-white' : 'border-zinc-300 dark:border-zinc-600 hover:border-[var(--primary)]'}`}
      >
        {video.watched && <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
      </button>

      <div className="flex-1 min-w-0">
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-medium block truncate text-lg ${video.watched ? 'line-through text-zinc-500' : 'text-[var(--foreground)]'}`}
        >
          {video.title}
        </a>
        <div className="text-xs text-zinc-500 flex items-center gap-2 mt-0.5">
          <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-[10px]">ID: {video.videoId}</span>
          {video.watched && <span>• Watched</span>}
        </div>
      </div>

      <button
        onClick={onDelete}
        className="w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:bg-red-50 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100"
        title="Remove video"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
  );
}

