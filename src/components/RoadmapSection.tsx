"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const roadmapData = [
  {
    phase: "PHASE 1",
    title: "AI Engine Alpha",
    description: "Deployment of the core neural matching models. Implementation of AI-verified credentials and the Flash Organization engine. Initial network secured by internal models and human validators.",
  },
  {
    phase: "PHASE 2",
    title: "Predictive Analytics & Growth",
    description: "Expansion of the dataset and refining the predictive performance models to increase team compatibility scores. Onboarding of enterprise integrations.",
  },
  {
    phase: "PHASE 3",
    title: "Maturity & Autonomous Assembly",
    description: "Achieving fully autonomous squad assembly with zero human intervention. Introduction of predictive project lifecycle management.",
  }
];

export function RoadmapSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-md">
              Technology Roadmap
            </h2>
            <p className="text-white/60 text-lg max-w-2xl">
              A progressive development model leading towards a fully autonomous AI recruitment engine and predictive talent architecture.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Horizontal line behind timeline dots */}
          <div className="absolute top-8 left-0 right-0 h-px bg-white/10 hidden md:block" />

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {roadmapData.map((item, index) => (
                <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                  <div className="relative pt-16">

                    {/* Timeline dot and connecting line */}
                    <div className="absolute top-0 left-8 flex flex-col items-center">
                      <div className="w-4 h-4 rounded bg-pink-500 border-2 border-[#120a1f] z-10 relative shadow-[0_0_15px_rgba(236,72,153,0.6)] glow-card" />
                      <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
                    </div>

                    <div className="text-sm font-mono text-pink-400 tracking-wider mb-4 ml-2 glow-text">
                      {item.phase}
                    </div>

                    <Card className="bg-[#120a1f]/80 backdrop-blur-sm border-white/10 h-full rounded-xl hover:bg-[#160c26] hover:border-pink-500/30 transition-all shadow-lg glow-card">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-white/60 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute -top-24 right-0 flex gap-2">
              <CarouselPrevious className="relative static bg-white/5 hover:bg-white/10 text-white border border-white/10 h-12 w-12 rounded-lg translate-y-0 translate-x-0 transition-colors" />
              <CarouselNext className="relative static bg-white/5 hover:bg-white/10 text-white border border-white/10 h-12 w-12 rounded-lg translate-y-0 translate-x-0 transition-colors" />
            </div>

          </Carousel>
        </div>
      </div>
    </section>
  );
}