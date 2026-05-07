import { Button } from "./ui/button";

export function FeaturesSection() {
  return (
    <section className="py-32 relative text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight drop-shadow-md">
            The Coordination Protocol
          </h2>
          <p className="text-lg text-white/60">
            DEHIX replaces the structurally inefficient talent market with a trustless, composable architecture built on Polygon.
          </p>
        </div>

        {/* Feature 1: NFWTs */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
          <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-pink-600/20 blur-[100px] rounded-full -z-10" />
          <div className="order-2 lg:order-1 relative h-[400px] bg-[#120a1f]/50 backdrop-blur-md rounded-2xl border border-pink-500/20 flex items-center justify-center overflow-hidden glow-card">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.15)_0%,transparent_70%)]" />
            <div className="relative w-64 h-80 bg-[#160c26] border border-pink-500/30 rounded-xl shadow-[0_0_30px_rgba(236,72,153,0.2)] p-6 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-pink-500/20 rounded-full border border-pink-500/40 flex items-center justify-center mb-4 glow-card">
                  <div className="w-4 h-4 bg-pink-400 rounded-sm rotate-45" />
                </div>
                <h4 className="text-white font-mono text-sm mb-2">NFWT // ID: 8492</h4>
                <div className="h-2 w-3/4 bg-white/20 rounded mb-2" />
                <div className="h-2 w-1/2 bg-white/20 rounded" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-t border-white/10 pt-3">
                  <span className="text-xs text-white/50">Status</span>
                  <span className="text-xs text-pink-400 font-medium glow-text">Verified by Oracle</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/50">Rep Score</span>
                  <span className="text-xs text-white font-mono">985/1000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-pink-400 font-mono text-sm mb-4 tracking-wider glow-text">01 // CREDENTIAL LAYER</div>
            <h3 className="text-3xl font-bold mb-6 text-white">Non-Fungible Wisdom Tokens</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Self-reported resumes create adverse selection. We replace them with Soulbound Tokens (SBTs) that permanently record oracle-verified professional achievements on-chain. Unforgeable proof of skill, fully composable across Web3.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-pink-500 rounded-full glow-card" />
                </div>
                <span className="text-white/80">Non-transferable identity bound to your wallet.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-pink-500 rounded-full glow-card" />
                </div>
                <span className="text-white/80">Deterministic reputation scoring updated by oracle consensus.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 2: Flash Orgs */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
          <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-purple-600/20 blur-[100px] rounded-full -z-10" />
          <div>
            <div className="text-purple-400 font-mono text-sm mb-4 tracking-wider glow-text">02 // COORDINATION LAYER</div>
            <h3 className="text-3xl font-bold mb-6 text-white">Flash Organizations</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Complex Web3 projects require cross-functional teams. Our AI-driven squad assembly engine reads verified NFWT data to compute and deploy optimal cross-functional squads on demand.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-purple-500 rounded-full glow-card" />
                </div>
                <span className="text-white/80">AI-assembled teams based on verified compatibility.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-purple-500 rounded-full glow-card" />
                </div>
                <span className="text-white/80">Smart contract escrow manages the full project lifecycle.</span>
              </li>
            </ul>
          </div>

          <div className="relative h-[400px] bg-[#120a1f]/50 backdrop-blur-md rounded-2xl border border-purple-500/20 flex items-center justify-center p-8 glow-card">
             <div className="w-full flex flex-col gap-4">
               {/* Simulating Flash Org UI */}
               <div className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 rounded-lg">
                 <div className="w-10 h-10 rounded bg-pink-500/20 border border-pink-500/30 flex items-center justify-center text-xs font-mono text-pink-400">DEV</div>
                 <div className="flex-1">
                   <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                   <div className="h-1.5 w-16 bg-white/10 rounded" />
                 </div>
                 <div className="text-xs text-white/50 border border-white/10 px-2 py-1 rounded">Match: 99%</div>
               </div>
               <div className="flex items-center gap-4 p-4 border border-purple-500/40 bg-purple-500/10 rounded-lg relative overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 glow-card" />
                 <div className="w-10 h-10 rounded bg-purple-500/30 border border-purple-500/50 flex items-center justify-center text-xs font-mono text-purple-300">SEC</div>
                 <div className="flex-1">
                   <div className="h-2 w-32 bg-white/30 rounded mb-2" />
                   <div className="h-1.5 w-20 bg-white/20 rounded" />
                 </div>
                 <div className="text-xs text-white/50 border border-white/20 px-2 py-1 rounded">Match: 95%</div>
               </div>
               <div className="flex items-center gap-4 p-4 border border-white/10 bg-white/5 rounded-lg">
                 <div className="w-10 h-10 rounded bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-xs font-mono text-blue-400">PM</div>
                 <div className="flex-1">
                   <div className="h-2 w-20 bg-white/20 rounded mb-2" />
                   <div className="h-1.5 w-12 bg-white/10 rounded" />
                 </div>
                 <div className="text-xs text-white/50 border border-white/10 px-2 py-1 rounded">Match: 97%</div>
               </div>
             </div>
          </div>
        </div>

        {/* Feature 3: SFT & DXUT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] bg-[#120a1f]/50 backdrop-blur-md rounded-2xl border border-pink-500/20 flex items-center justify-center glow-card">
             <div className="absolute w-[200px] h-[200px] bg-pink-600/30 blur-[80px] rounded-full" />
             <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Concentric circles representing staking */}
                <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-pink-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 border border-purple-500/40 rounded-full" />
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 text-white font-bold flex items-center justify-center rounded-full shadow-[0_0_30px_rgba(236,72,153,0.5)] z-10 glow-card">
                  DXUT
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-pink-400 font-mono text-sm mb-4 tracking-wider glow-text">03 // INCENTIVE LAYER</div>
            <h3 className="text-3xl font-bold mb-6 text-white">Stake for Truth (SFT)</h3>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              A game-theoretic mechanism aligning all participants. Oracles and interviewers stake DXUT tokens to participate. Honest attestations earn rewards; false claims result in slashing.
            </p>
            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 h-12 backdrop-blur-sm transition-all">
              Explore Tokenomics
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}