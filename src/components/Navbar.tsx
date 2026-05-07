import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-3">
          {/* Logo container with the purple shape icon */}
          <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg rotate-3 glow-card">
            <span className="text-white font-bold text-xl -rotate-3">DXH</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block glow-text">DEHIX</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-semibold text-sm tracking-widest text-white/80">
          <Link href="/protocol" className="hover:text-pink-400 transition-colors">PROTOCOL</Link>
          <Link href="/tokenomics" className="hover:text-pink-400 transition-colors">TOKENOMICS</Link>
          <Link href="/governance" className="hover:text-pink-400 transition-colors">GOVERNANCE</Link>
          <Link href="#" className="text-purple-400 hover:text-pink-400 transition-colors">WHITEPAPER</Link>
        </div>
      </div>
    </nav>
  );
}