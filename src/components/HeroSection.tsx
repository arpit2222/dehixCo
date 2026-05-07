import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 min-h-[85vh] flex items-center justify-center overflow-hidden bg-black selection:bg-blue-500/30">
      {/* Refined subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 z-10 relative flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-neutral-300 text-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Whitepaper v2.0 is now live
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl text-white">
          Replacing resumes <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            with ledgers.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-12 leading-relaxed font-light">
          Bringing trust and coordination to the Web3 and AI talent ecosystem via oracle-verified Soulbound Tokens and on-demand Flash Organizations.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
          <Button size="lg" className="bg-white hover:bg-neutral-200 text-black rounded-md px-8 font-medium w-full sm:w-auto h-12 transition-all">
            Read Whitepaper
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white rounded-md px-8 font-medium w-full sm:w-auto h-12 bg-transparent transition-all">
            Join Waitlist
          </Button>
        </div>

        {/* Minimalist Dashboard/Protocol visualization placeholder */}
        <div className="mt-24 relative w-full max-w-4xl aspect-[21/9] bg-[#0a0a0a] rounded-xl border border-white/10 overflow-hidden flex flex-col shadow-2xl shadow-blue-900/20">
          {/* Header */}
          <div className="h-10 border-b border-white/10 bg-[#111] flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-800"></div>
            <div className="ml-4 h-4 w-48 bg-neutral-800 rounded"></div>
          </div>
          {/* Body content abstraction */}
          <div className="flex-1 p-6 flex gap-6">
            <div className="w-1/3 flex flex-col gap-4">
              <div className="h-8 w-24 bg-blue-500/20 rounded border border-blue-500/30 flex items-center px-2">
                <div className="h-2 w-12 bg-blue-400/50 rounded"></div>
              </div>
              <div className="h-24 w-full bg-white/5 rounded border border-white/5"></div>
              <div className="h-24 w-full bg-white/5 rounded border border-white/5"></div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] border border-white/5 rounded flex items-center justify-center relative">
                 <div className="absolute w-32 h-32 border border-blue-500/30 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 border border-indigo-500/50 rounded-full bg-blue-500/10 backdrop-blur-md"></div>
                 </div>
                 {/* Connection lines */}
                 <div className="absolute top-1/2 left-10 w-24 h-[1px] bg-gradient-to-r from-transparent to-blue-500/50"></div>
                 <div className="absolute top-1/2 right-10 w-24 h-[1px] bg-gradient-to-l from-transparent to-blue-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}