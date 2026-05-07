import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ProtocolPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md">
              Protocol Architecture
            </h1>
            <p className="text-xl text-white/60">
              Deep dive into the credential and coordination layers powering DEHIX.
            </p>
          </div>

          <div className="space-y-16">
            <section className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-pink-500/20 p-8 md:p-12 glow-card">
              <h2 className="text-2xl font-bold text-pink-400 mb-6 glow-text">1. Credential Layer (NFWTs)</h2>
              <div className="prose prose-invert max-w-none text-white/80">
                <p>
                  Non-Fungible Wisdom Tokens (NFWTs) are the core primitives of DEHIX. Unlike traditional NFTs, NFWTs are Soulbound Tokens (SBTs) mapped irreversibly to a user's wallet address.
                </p>
                <h3 className="text-xl font-semibold text-white mt-8 mb-4">Reputation Scoring</h3>
                <p>
                  Every NFWT comes with a deterministic reputation score based on oracle verification. This score represents absolute proof of skill, work history, and successful deliverables within Flash Organizations.
                </p>
                <div className="bg-white/5 border border-white/10 p-4 rounded-lg my-6 font-mono text-sm text-pink-300">
                  struct NFWT {'{'} <br/>
                  &nbsp;&nbsp;address owner;<br/>
                  &nbsp;&nbsp;string ipfs_hash; // Verified metadata<br/>
                  &nbsp;&nbsp;uint256 rep_score;<br/>
                  &nbsp;&nbsp;bool is_verified;<br/>
                  {'}'}
                </div>
              </div>
            </section>

            <section className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-purple-500/20 p-8 md:p-12 glow-card">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 glow-text">2. Oracle Verification Network</h2>
              <div className="prose prose-invert max-w-none text-white/80">
                <p>
                  To prevent sybil attacks and fraudulent credential minting, DEHIX relies on a hybrid oracle network. When a user requests an NFWT mint, the protocol routes the claim to decentralized nodes (and randomly assigned expert human interviewers) who verify the claim.
                </p>
                <p>
                  Consensus is reached when a threshold of Oracles signs off on the claim, allowing the smart contract to permanently etch the NFWT onto the Polygon ledger.
                </p>
              </div>
            </section>

            <section className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-pink-500/20 p-8 md:p-12 glow-card">
              <h2 className="text-2xl font-bold text-pink-400 mb-6 glow-text">3. Flash Organization Protocol</h2>
              <div className="prose prose-invert max-w-none text-white/80">
                <p>
                  Flash Organizations represent the coordination layer. Instead of hiring employees permanently, project creators deposit funds into an escrow smart contract.
                </p>
                <p>
                  The DEHIX AI assembly engine queries the subgraph for available wallets holding relevant NFWTs. It algorithmically constructs a cross-functional squad (e.g., 1 PM, 2 Devs, 1 Designer) and deploys them. Once deliverables are verified, the escrow contract releases funds trustlessly.
                </p>
                <div className="mt-8 text-center">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                    Deploy an Org (Soon)
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
