import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Glow effect behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-400 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          Whitepaper v2.0 is now live
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl text-white drop-shadow-lg">
          Replacing resumes <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 glow-text">
            with ledgers.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 leading-relaxed">
          Bringing trust and coordination to the Web3 and AI talent ecosystem via oracle-verified Soulbound Tokens and on-demand Flash Organizations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 font-semibold w-full sm:w-auto h-12 shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all">
            Read Whitepaper
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-full px-8 font-semibold w-full sm:w-auto h-12 bg-transparent transition-all">
            Join Waitlist
          </Button>
        </div>

        {/* Purple/Pink Protocol visualization */}
        <div className="mt-24 relative w-full max-w-4xl aspect-[21/9] bg-[#120a1f]/80 backdrop-blur-md rounded-xl border border-pink-500/20 overflow-hidden flex flex-col shadow-2xl shadow-purple-900/40">
          <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-purple-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <div className="ml-4 h-4 w-48 bg-white/5 rounded"></div>
          </div>
          <div className="flex-1 p-6 flex gap-6">
            <div className="w-1/3 flex flex-col gap-4">
              <div className="h-8 w-24 bg-pink-500/20 rounded border border-pink-500/30 flex items-center px-2 glow-card">
                <div className="h-2 w-12 bg-pink-400/50 rounded"></div>
              </div>
              <div className="h-24 w-full bg-white/5 rounded border border-white/5"></div>
              <div className="h-24 w-full bg-white/5 rounded border border-white/5"></div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="h-full w-full bg-[linear-gradient(to_right,#ec489915_1px,transparent_1px),linear-gradient(to_bottom,#ec489915_1px,transparent_1px)] bg-[size:2rem_2rem] border border-white/5 rounded flex items-center justify-center relative">
                 <div className="absolute w-32 h-32 border border-pink-500/30 rounded-full flex items-center justify-center glow-card">
                    <div className="w-16 h-16 border border-purple-500/50 rounded-full bg-pink-500/10 backdrop-blur-md animate-pulse"></div>
                 </div>
                 <div className="absolute top-1/2 left-10 w-24 h-[1px] bg-gradient-to-r from-transparent to-pink-500/50"></div>
                 <div className="absolute top-1/2 right-10 w-24 h-[1px] bg-gradient-to-l from-transparent to-purple-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}