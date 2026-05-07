import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { RoadmapSection } from "@/components/RoadmapSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Navbar />

      <div className="flex-1 w-full pt-20">
        <HeroSection />
        <FeaturesSection />
        <RoadmapSection />
        <FAQSection />
      </div>

      <Footer />
    </main>
  );
}