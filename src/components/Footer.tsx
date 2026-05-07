"use client";

import { ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0510] py-8 relative">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <p className="text-white/40 text-sm">© {new Date().getFullYear()} Dehix. All rights reserved.</p>

        <Button
          onClick={scrollToTop}
          size="icon"
          className="rounded-full bg-pink-500/20 hover:bg-pink-500/40 text-pink-400 absolute right-8 -top-5 w-10 h-10 border border-pink-500/30"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </div>
    </footer>
  );
}