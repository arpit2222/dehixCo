"use client";

import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/10 bg-[#050505] py-12 relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold text-2xl tracking-tight mb-2">DEHIX</span>
            <p className="text-neutral-500 text-sm">Replacing resumes with ledgers.</p>
          </div>
          <div className="flex gap-6 text-sm text-neutral-400">
            <a href="https://www.dehix.org" className="hover:text-white transition-colors">www.dehix.org</a>
            <a href="mailto:info@dehix.org" className="hover:text-white transition-colors">info@dehix.org</a>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-8 border-t border-white/10">
          <p className="text-neutral-600 text-sm">© {new Date().getFullYear()} DEHIX. All rights reserved.</p>

          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded bg-white/5 hover:bg-white/10 text-neutral-400 border border-white/10 w-10 h-10 transition-colors"
          >
            <ChevronUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
}