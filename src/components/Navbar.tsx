import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 glow-card rounded-lg overflow-hidden">
            <Image src="/dlogo.png" alt="DEHIX Logo" fill className="object-cover" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block glow-text">DEHIX.CO</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-semibold text-sm tracking-widest text-white/80">
          <Link href="/technology" className="hover:text-pink-400 transition-colors">TECHNOLOGY</Link>
          <Link href="#" className="text-purple-400 hover:text-pink-400 transition-colors">AI WHITEPAPER</Link>
        </div>
      </div>
    </nav>
  );
}