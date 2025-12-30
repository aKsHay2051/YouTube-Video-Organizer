"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createSet } from "@/lib/storage";
import Link from "next/link";

export default function NewSetPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    const newSet = createSet(name.trim(), description.trim() || undefined);
    router.push(`/sets/${newSet.id}`);
  };

  return (
    <main className="min-h-screen p-8 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <Link
          href="/sets"
          className="mb-8 inline-flex items-center text-sm font-medium text-zinc-500 hover:text-[var(--primary)] transition-colors"
        >
          ← Back to Sets
        </Link>

        <div className="card p-8 shadow-xl border-zinc-200 dark:border-zinc-800">
          <h1 className="text-2xl font-bold mb-2">Create New Set</h1>
          <p className="text-zinc-500 text-sm mb-8">
            Start a new collection to organize your learning videos.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Set Name *
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., React Interview Prep"
                required
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-zinc-400 focus:border-[var(--primary)] focus:ring-[var(--primary)] focus:outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Description (optional)
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="What is this set for?"
                rows={4}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-700 bg-transparent px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-zinc-400 focus:border-[var(--primary)] focus:ring-[var(--primary)] focus:outline-none transition-all resize-none"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting || !name.trim()}
                className="btn-primary flex-1 justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Creating..." : "Create Set"}
              </button>
              <Link
                href="/sets"
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

