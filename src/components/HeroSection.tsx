import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 min-h-[80vh] flex items-center overflow-hidden">
      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center">
        {/* Glow effect behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />

        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          V2 is live! Read the announcement
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-white drop-shadow-lg">
          Connecting you with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 glow-text">
            Web3
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
          Dehix brings you closer to the Web3 projects and resources. Collaborate, build, and earn across various L1s and L2s.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 font-semibold w-full sm:w-auto h-12 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
            Explore Dehix
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 font-semibold w-full sm:w-auto h-12 bg-transparent">
            Join the community
          </Button>
        </div>

        {/* Placeholder for the 3D cube illustration shown in the screenshot */}
        <div className="mt-20 relative w-full max-w-3xl aspect-[16/9] bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-pink-500/50 rounded-xl rotate-45 flex items-center justify-center glow-card shadow-[inset_0_0_50px_rgba(236,72,153,0.3)]">
             <div className="w-16 h-16 md:w-24 md:h-24 border-4 border-purple-500/50 rounded-lg -rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Abstract background waves/lines from screenshots */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden -z-10 opacity-30">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path fill="none" stroke="url(#wave-gradient)" strokeWidth="2" d="M0,160 C320,300,420,0,740,120 C1060,240,1280,60,1440,120" />
          <path fill="none" stroke="url(#wave-gradient)" strokeWidth="1" d="M0,200 C320,340,420,40,740,160 C1060,280,1280,100,1440,160" />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
              <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}