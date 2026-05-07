import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function GovernancePage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md">
              Governance & Security
            </h1>
            <p className="text-xl text-white/60">
              Decentralizing control and securing the network architecture.
            </p>
          </div>

          <div className="space-y-12">
            <section className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-pink-500/20 p-8 md:p-12 glow-card">
              <h2 className="text-2xl font-bold text-pink-400 mb-6 glow-text">Progressive Decentralization</h2>
              <div className="prose prose-invert max-w-none text-white/80">
                <p>
                  DEHIX transitions through three distinct governance phases to ensure early-stage agility and long-term autonomy.
                </p>
                
                <div className="mt-8 space-y-6">
                  <div className="border-l-2 border-pink-500 pl-4">
                    <h4 className="text-white font-bold text-lg">Phase 1: Team Control (Months 0-6)</h4>
                    <p className="text-white/60 mt-2">Core team retains multi-sig control over smart contract upgrades and initial parameter tuning to respond rapidly to exploits.</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-4">
                    <h4 className="text-white font-bold text-lg">Phase 2: Hybrid Governance (Months 6-12)</h4>
                    <p className="text-white/60 mt-2">DXUT holders can create proposals and vote. Core team maintains a veto right strictly for security emergencies.</p>
                  </div>
                  <div className="border-l-2 border-pink-500 pl-4">
                    <h4 className="text-white font-bold text-lg">Phase 3: Full DAO (Month 12+)</h4>
                    <p className="text-white/60 mt-2">Smart contracts are ossified. Veto rights are burned. The protocol is entirely directed by the community Treasury and DXUT voting.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-purple-500/20 p-8 md:p-12 glow-card">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 glow-text">Security Threat Model</h2>
              <div className="prose prose-invert max-w-none text-white/80">
                <p>
                  We have modeled extensive attack vectors to protect user data, funds in escrow, and the integrity of the Oracle network.
                </p>
                <ul>
                  <li>
                    <strong className="text-white">Reentrancy Protection:</strong> All state changes inside the Escrow and Staking contracts follow the Checks-Effects-Interactions pattern and utilize OpenZeppelin ReentrancyGuards.
                  </li>
                  <li>
                    <strong className="text-white">Sybil Resistance (Oracles):</strong> The DXUT staking requirement imposes severe financial cost on creating fake oracle identities to push false credentials.
                  </li>
                  <li>
                    <strong className="text-white">Collusion Deterrence:</strong> Oracles are assigned randomly to verification tasks via Chainlink VRF, making it statistically impossible to guarantee that colluding nodes will be assigned the same verification request.
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
