"use client";

import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0510] py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-2xl tracking-tight mb-2 glow-text">DEHIX.CO</span>
            <p className="text-white/60 text-sm">Replacing resumes with neural matching.</p>
          </div>
          <div className="flex gap-6 text-sm text-pink-400">
            <a href="https://www.dehix.co" className="hover:text-white transition-colors">www.dehix.co</a>
            <a href="mailto:info@dehix.co" className="hover:text-white transition-colors">info@dehix.co</a>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} DEHIX.CO. All rights reserved.</p>

          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full bg-pink-500/20 hover:bg-pink-500/40 text-pink-400 w-10 h-10 border border-pink-500/30 transition-colors"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}