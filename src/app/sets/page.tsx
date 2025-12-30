"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllSets, deleteSet } from "@/lib/storage";
import { Set } from "@/types";

export default function SetsPage() {
  const [sets, setSets] = useState<Set[]>([]);

  useEffect(() => {
    setSets(getAllSets());
  }, []);

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this set?")) {
      deleteSet(id);
      setSets(getAllSets());
    }
  };

  const getProgress = (set: Set) => {
    if (set.videos.length === 0) return 0;
    const watched = set.videos.filter((v) => v.watched).length;
    return Math.round((watched / set.videos.length) * 100);
  };

  return (
    <main className="min-h-screen p-8 max-w-7xl mx-auto">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">My Sets</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Organize your learning journey by topic and goal.
          </p>
        </div>
        <Link
          href="/sets/new"
          className="btn-primary flex items-center gap-2 shadow-lg shadow-red-500/20 hover:shadow-red-500/30"
        >
          <span>+ New Set</span>
        </Link>
      </div>

      {sets.length === 0 ? (
        <div className="card p-16 text-center border-dashed border-2 border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20">
          <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            📁
          </div>
          <h3 className="text-xl font-semibold mb-2">No sets created yet</h3>
          <p className="text-zinc-500 mb-6 max-w-sm mx-auto">
            Create your first set to start organizing videos into focused learning collections.
          </p>
          <Link
            href="/sets/new"
            className="btn-primary inline-flex"
          >
            Create Set
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sets.map((set) => {
            const progress = getProgress(set);
            return (
              <div
                key={set.id}
                className="card p-6 group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm hover:shadow-md"
              >
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <Link
                      href={`/sets/${set.id}`}
                      className="text-xl font-bold hover:text-[var(--primary)] transition-colors line-clamp-1"
                    >
                      {set.name}
                    </Link>
                    <button
                      onClick={() => handleDelete(set.id)}
                      className="text-zinc-400 hover:text-red-500 transition-colors p-1"
                      title="Delete set"
                    >
                      ×
                    </button>
                  </div>
                  {set.description && (
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2 h-10">
                      {set.description}
                    </p>
                  )}
                  {!set.description && (
                    <p className="text-sm text-zinc-400 italic h-10 flex items-center">No description</p>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    <span>
                      {set.videos.length} video{set.videos.length !== 1 ? "s" : ""}
                    </span>
                    <span>{progress}% Complete</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <div
                      className="h-full bg-[#FF0000] transition-all duration-500 ease-out rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}

