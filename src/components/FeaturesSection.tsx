import { Button } from "./ui/button";

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">

        {/* Token Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="order-2 lg:order-1 relative h-[400px] flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute w-[300px] h-[300px] bg-purple-600/30 blur-[100px] rounded-full" />

            {/* Conceptual Token Graphic */}
            <div className="relative w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-white/10 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_50px_rgba(168,85,247,0.2)]">
              <div className="w-48 h-48 rounded-full border border-pink-400/30 flex items-center justify-center bg-background/50">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center glow-card">
                  <span className="text-4xl font-bold text-white">DXUT</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute top-0 right-10 w-8 h-8 bg-pink-500/80 rounded-full blur-sm" />
              <div className="absolute bottom-10 left-0 w-12 h-12 bg-purple-500/80 rounded-full blur-md" />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-6 text-pink-400 uppercase tracking-widest text-sm font-semibold">
              <span className="w-8 h-[1px] bg-pink-400"></span>
              Utility Token
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
              What are DXUT tokens?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              DXUT is the native utility token of the Dehix platform. It is designed to reward users for their contributions and active participation within the community. Through DXUT, members can access premium features, participate in governance, and claim exclusive rewards across various integrated Web3 protocols.
            </p>
            <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full px-8 h-12 backdrop-blur-sm">
              Learn more about DXUT
            </Button>
          </div>
        </div>

        {/* Community/Builders Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
              Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Builders</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Our platform empowers developers, creators, and enthusiasts to collaborate on cutting-edge decentralized projects. Whether you are launching a new DAO or contributing to an existing protocol, Dehix provides the tools and network you need to succeed in the Web3 ecosystem.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8 text-left">
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">500+</h3>
                <p className="text-white/50 text-sm">Active Projects</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2">50k+</h3>
                <p className="text-white/50 text-sm">Community Members</p>
              </div>
            </div>
          </div>

          <div className="relative h-[400px] flex items-center justify-center">
            <div className="absolute w-[300px] h-[300px] bg-pink-600/20 blur-[100px] rounded-full" />

            {/* Abstract UI representation */}
            <div className="relative w-full max-w-md bg-gradient-to-b from-[#1a1025] to-[#0d0914] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex gap-2 mb-6 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="space-y-4">
                <div className="h-12 bg-white/5 rounded-lg border border-white/5 flex items-center px-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mr-4"></div>
                  <div className="h-2 w-32 bg-white/20 rounded"></div>
                  <div className="ml-auto h-6 w-16 bg-pink-500/20 text-pink-400 text-[10px] flex items-center justify-center rounded-full border border-pink-500/30">Active</div>
                </div>
                <div className="h-12 bg-white/5 rounded-lg border border-white/5 flex items-center px-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 mr-4"></div>
                  <div className="h-2 w-24 bg-white/20 rounded"></div>
                </div>
                <div className="h-12 bg-white/5 rounded-lg border border-white/5 flex items-center px-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mr-4"></div>
                  <div className="h-2 w-40 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}