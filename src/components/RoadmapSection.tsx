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
    quarter: "END OF Q1 2025",
    title: "Dehix Learn Launch",
    description: "We will collaborate with web3 projects, assisting them in building a community for their initiatives. Additionally, we will work together to create content aimed at upskilling learners.",
  },
  {
    quarter: "END OF Q2 2025",
    title: "Beta Launch",
    description: "We will launch our Beta version for all users, introducing new features for managing communities for web3 projects. Additionally, we will provide a platform for web3 projects to host events and raise funds.",
  },
  {
    quarter: "END OF Q3 2025",
    title: "DAO integration",
    description: "We will launch a feature to create DAOs for projects with fundraising capabilities. Any user can contribute to the fundraising and become a part-owner of the project through the DAO.",
  },
  {
    quarter: "END OF Q4 2025",
    title: "Mega Dehix Update",
    description: "We will fully launch the Dehix ecosystem for seamless integration across all individuals in the Web3 space. We will provide complete access to our ecosystem, including cross-chain across L1 chains.",
  }
];

export function RoadmapSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            Our Roadmap
          </h2>
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
                      <div className="w-4 h-4 rounded-full bg-pink-500 border-4 border-[#0d0914] z-10 relative">
                        <div className="absolute inset-0 rounded-full bg-pink-500 blur-sm"></div>
                      </div>
                      <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
                    </div>

                    <div className="text-sm font-bold text-white/50 tracking-wider mb-4 ml-2">
                      {item.quarter}
                    </div>

                    <Card className="bg-[#120a1f] border-white/5 h-full rounded-2xl hover:bg-[#160c26] transition-colors">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                          </div>
                          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-white/60 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>

                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute -top-20 right-12 flex gap-2">
              <CarouselPrevious className="relative static bg-white text-black hover:bg-gray-200 border-0 h-12 w-12 rounded-full translate-y-0 translate-x-0" />
              <CarouselNext className="relative static bg-white text-black hover:bg-gray-200 border-0 h-12 w-12 rounded-full translate-y-0 translate-x-0" />
            </div>

          </Carousel>
        </div>
      </div>
    </section>
  );
}