
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden flex flex-col pt-10 px-4 text-center">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-red-500/10 rounded-full blur-[100px] opacity-50 dark:opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] opacity-30 dark:opacity-10"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 contrast-150 brightness-100"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 fill-mode-forwards pt-12">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
          Master your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0000] to-[#FF4D4D]">Watchlist</span>.
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
          Stop hoarding tabs. Start organizing your learning.
          <span className="block mt-2 text-zinc-500 dark:text-zinc-500 text-lg">Curate collections, track progress, and actually watch what you save.</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/sets"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#FF0000] text-white px-10 py-4 rounded-full text-xl font-bold tracking-wide transition-all hover:scale-105 hover:bg-[#cc0000] shadow-[0_0_40px_-10px_rgba(255,0,0,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,0,0,0.6)]"
          >
            <span>Start Organizing</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:translate-x-1 transition-transform">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 4v16l13 -8z" />
            </svg>
          </Link>
          <a href="#how-it-works" className="px-10 py-4 rounded-full border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all font-semibold text-lg hover:scale-105">
            How it works
          </a>
        </div>
      </div>

      {/* Visual Mockup */}
      <div className="relative z-10 mt-24 mb-10 w-full max-w-6xl mx-auto perspective-[2000px] group">
        <div className="relative bg-white dark:bg-[#0f0f0f] border-4 border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden transform rotate-x-12 scale-90 group-hover:rotate-x-2 group-hover:scale-100 transition-all duration-700 ease-out origin-top p-2">
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-20 h-full w-full pointer-events-none dark:from-[#0f0f0f]"></div>

          <div className="h-4 bg-zinc-100 dark:bg-zinc-800 rounded-t-lg mb-4 flex items-center gap-2 px-4">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 text-left">
            <div className="hidden md:block col-span-1 space-y-3">
              <div className="h-8 w-24 bg-zinc-100 dark:bg-zinc-800 rounded-md"></div>
              <div className="space-y-2 pt-4">
                <div className="px-3 py-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">My Libraries</div>
                <div className="px-3 py-1 bg-red-50 text-red-600 rounded text-sm font-medium">React Focus</div>
                <div className="px-3 py-1 text-zinc-500 text-sm">Design Patterns</div>
                <div className="px-3 py-1 text-zinc-500 text-sm">Startup Wisdom</div>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Advanced React Hooks", channel: "Web Dev Simplified" },
                { title: "System Design basics", channel: "ByteByteGo" },
                { title: "Next.js 14 Full Course", channel: "JavaScript Mastery" },
                { title: "Understanding UI/UX", channel: "Flux" },
                { title: "The Future of AI", channel: "ColdFusion" },
                { title: "Build a SAS App", channel: "Fireship" }
              ].map((item, i) => (
                <div key={i} className="aspect-video bg-zinc-100 dark:bg-zinc-800 rounded-lg border border-zinc-100 dark:border-zinc-700 p-3 flex flex-col justify-end">
                  <div className="font-semibold text-xs truncate">{item.title}</div>
                  <div className="text-[10px] text-zinc-500">{item.channel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* The Problem Section */}
      <section id="how-it-works" className="relative z-10 py-32 max-w-4xl mx-auto text-left px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">We've all been there.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/20">
              <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">The "Watch Later" Graveyard</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                You find a great tutorial. You click "Watch Later". You never see it again. It gets buried under 5,000 other "important" videos.
              </p>
            </div>
            <div className="p-6 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Tab Hoarding</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                "I'll watch this later today." *Leaves tab open for 3 weeks until Chrome crashes.*
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              YouTube is great for discovery, but <strong>terrible for learning management</strong>.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300">
              When you're trying to learn a skill—like coding, design, or cooking—you need structure. You need distinct piles. You need to know what you've finished.
            </p>
          </div>
        </div>
      </section>

      {/* Why I Built This */}
      <section className="relative z-10 py-24 bg-zinc-50 dark:bg-[#0a0a0a] w-full border-y border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-sm font-medium mb-6">
            Creator's Note
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why I built this?</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto text-zinc-600 dark:text-zinc-400 leading-relaxed text-left">
            <p className="mb-6">
              I’m a developer who relies heavily on YouTube to learn.
            </p>
            <p className="mb-6">
              Like many others, I spent years stuck in <strong>“tutorial hell.”</strong> I’d watch part of a React or backend tutorial, get distracted by recommendations, and forget where I stopped. Over time, my Watch Later playlist grew to thousands of videos, making it impossible to stay focused or organized.
            </p>
            <p className="mb-6">
              I built <strong>Organizer</strong> to solve this problem for myself.
            </p>
            <p className="mb-6">
              It’s a clean, distraction-free space to learn from YouTube — without comments, recommendations, or noise. Just the videos I choose, organized in a way that helps me actually finish what I start.
            </p>
            <p>
              This started as a personal tool, but I believe many learners face the same problem.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center font-bold text-lg">
              me
            </div>
            <div className="text-left">
              <div className="font-bold text-zinc-900 dark:text-zinc-100">The Developer</div>
              <div className="text-sm text-zinc-500">Shipped on a Sunday afternoon</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-zinc-200 dark:border-zinc-800 mt-auto bg-white dark:bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md::flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-4 bg-red-600 rounded flex items-center justify-center">
              <div className="w-0 h-0 border-t-[2px] border-t-transparent border-l-[4px] border-l-white border-b-[2px] border-b-transparent ml-0.5"></div>
            </div>
            <span className="font-bold tracking-tight">Vidset</span>
          </div>

          <div className="text-sm text-zinc-500 flex gap-6">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300">Privacy</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300">Terms</a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-300">Twitter</a>
          </div>

          <div className="text-sm text-zinc-400">
            © {new Date().getFullYear()} Vidset Organizer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

