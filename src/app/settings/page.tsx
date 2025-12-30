"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
    const router = useRouter();
    const [isClearing, setIsClearing] = useState(false);

    const handleClearData = () => {
        if (confirm("Are you sure? This will delete ALL your sets and videos. This cannot be undone.")) {
            setIsClearing(true);
            localStorage.clear();
            // Small delay to show state change
            setTimeout(() => {
                router.push("/");
                router.refresh();
            }, 500);
        }
    };

    return (
        <main className="min-h-screen p-8 flex items-center justify-center">
            <div className="w-full max-w-lg space-y-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Settings</h1>
                    <p className="text-zinc-500">Manage your data and preferences.</p>
                </div>

                {/* Data Management */}
                <div className="card p-6 border-red-200 dark:border-red-900/30">
                    <h2 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                        Danger Zone
                    </h2>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                        This application uses your browser's local storage. Clearing data will remove all your sets and videos permanently from this browser.
                    </p>
                    <button
                        onClick={handleClearData}
                        disabled={isClearing}
                        className="w-full py-2.5 px-4 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 hover:border-red-300 dark:bg-red-900/10 dark:border-red-900/30 dark:text-red-400 dark:hover:bg-red-900/20 font-medium transition-colors flex items-center justify-center gap-2"
                    >
                        {isClearing ? 'Clearing...' : 'Clear All Data'}
                    </button>
                </div>

                {/* App Info */}
                <div className="text-center space-y-2 pt-8">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="w-6 h-4 bg-zinc-800 dark:bg-zinc-200 rounded flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[2px] border-t-transparent border-l-[4px] border-l-white dark:border-l-black border-b-[2px] border-b-transparent ml-0.5"></div>
                        </div>
                        <span className="font-bold tracking-tight text-zinc-900 dark:text-zinc-100">Vidset</span>
                    </div>
                    <p className="text-xs text-zinc-400">
                        Version 1.0.0 • Local Storage Edition
                    </p>
                    <p className="text-xs text-zinc-400">
                        Designed with intent.
                    </p>
                </div>
            </div>
        </main>
    );
}
