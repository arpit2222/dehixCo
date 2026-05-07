import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TokenomicsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md">
              Token Economics & SFT
            </h1>
            <p className="text-xl text-white/60">
              The game theory aligning incentives across the DEHIX network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-purple-500/20 p-8 glow-card">
              <h3 className="text-xl font-bold text-purple-400 mb-4 glow-text">DXUT Utility</h3>
              <ul className="space-y-4 text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong>Escrow Medium:</strong> Used to fund Flash Organizations and pay out talent upon completion.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong>Staking:</strong> Required for Oracles and Interviewers to participate in consensus.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span><strong>Governance:</strong> Used to vote on protocol upgrades and treasury allocation.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-pink-500/20 p-8 glow-card">
              <h3 className="text-xl font-bold text-pink-400 mb-4 glow-text">Token Allocation</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm text-white/60">40%</div>
                  <div className="flex-1 h-3 bg-white/10 rounded overflow-hidden">
                    <div className="h-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)] w-[40%]"></div>
                  </div>
                  <div className="w-24 text-sm text-right text-white/80">Community</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm text-white/60">25%</div>
                  <div className="flex-1 h-3 bg-white/10 rounded overflow-hidden">
                    <div className="h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] w-[25%]"></div>
                  </div>
                  <div className="w-24 text-sm text-right text-white/80">Treasury</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm text-white/60">20%</div>
                  <div className="flex-1 h-3 bg-white/10 rounded overflow-hidden">
                    <div className="h-full bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.5)] w-[20%]"></div>
                  </div>
                  <div className="w-24 text-sm text-right text-white/80">Team</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 text-sm text-white/60">15%</div>
                  <div className="flex-1 h-3 bg-white/10 rounded overflow-hidden">
                    <div className="h-full bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)] w-[15%]"></div>
                  </div>
                  <div className="w-24 text-sm text-right text-white/80">Investors</div>
                </div>
              </div>
            </div>
          </div>

          <section className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-pink-500/20 p-8 md:p-12 glow-card">
            <h2 className="text-2xl font-bold text-pink-400 mb-6 glow-text">Stake for Truth (SFT) Protocol</h2>
            <div className="prose prose-invert max-w-none text-white/80">
              <p>
                The SFT protocol ensures the integrity of the Oracle network through rigorous game theory.
              </p>
              <h3 className="text-xl font-semibold text-white mt-8 mb-4">Mechanism Design</h3>
              <p>
                To act as an Oracle (human or node), you must stake a minimum amount of DXUT. When a credential claim is submitted, the Oracle votes `TRUE` or `FALSE`.
              </p>
              <ul>
                <li><strong>Honest Majority:</strong> Oracles voting with the consensus majority receive the user's validation fee + protocol emissions.</li>
                <li><strong>Malicious Minority (Slashing):</strong> Oracles voting against the consensus are slashed. A percentage of their staked DXUT is burned, and the rest is distributed to the honest actors.</li>
              </ul>
              <p>
                This ensures that the expected value of telling the truth is strictly greater than the expected value of colluding to verify fake credentials.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
