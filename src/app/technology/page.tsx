import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function TechnologyPage() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />

      <div className="flex-1 w-full pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white drop-shadow-md">
              AI Engine Technology
            </h1>
            <p className="text-xl text-white/60">
              Deep dive into the neural matching and predictive analytics powering DEHIX.
            </p>
          </div>

          <div className="space-y-16">
            <section className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-pink-500/20 p-8 md:p-12 glow-card">
              <h2 className="text-2xl font-bold text-pink-400 mb-6 glow-text">1. Predictive Performance Modeling</h2>
              <div className="prose prose-invert max-w-none text-white/80">
                <p>
                  At the core of DEHIX is our proprietary Predictive Performance Model. Traditional talent platforms rely on static resumes, which are inherently flawed and self-reported.
                </p>
                <h3 className="text-xl font-semibold text-white mt-8 mb-4">Dynamic Skill Vectors</h3>
                <p>
                  We convert a professional's work history, peer feedback, and successful deliverables into high-dimensional skill vectors. These vectors are constantly updated by our neural network to reflect their true, current capabilities and predict their future performance with extreme accuracy.
                </p>
              </div>
            </section>

            <section className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-purple-500/20 p-8 md:p-12 glow-card">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 glow-text">2. Continuous Feedback Loops</h2>
              <div className="prose prose-invert max-w-none text-white/80">
                <p>
                  Our AI models require high-quality, continuous data to function. DEHIX employs an automated feedback loop during the lifecycle of every project.
                </p>
                <p>
                  As tasks are completed within a Flash Organization, the system ingests data on time-to-completion, peer reviews, and code/design quality. This data is fed back into the engine, refining the confidence scores for every individual involved and training the model to make better matches in the future.
                </p>
              </div>
            </section>

            <section className="bg-[#120a1f]/80 backdrop-blur-md rounded-2xl border border-pink-500/20 p-8 md:p-12 glow-card">
              <h2 className="text-2xl font-bold text-pink-400 mb-6 glow-text">3. AI Squad Assembly Engine</h2>
              <div className="prose prose-invert max-w-none text-white/80">
                <p>
                  Flash Organizations represent the future of work coordination. When a project is initiated, human managers no longer need to spend weeks interviewing candidates.
                </p>
                <p>
                  The DEHIX AI Assembly Engine algorithmically constructs a cross-functional squad. It doesn't just look for isolated skills; it optimizes for <strong>team compatibility</strong>. By analyzing past interactions and complementary skill vectors, the engine predicts which combinations of talent will yield the highest success rate.
                </p>
                <div className="mt-8 text-center">
                  <Button className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 shadow-[0_0_15px_rgba(236,72,153,0.5)]">
                    Deploy an AI Squad (Soon)
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
