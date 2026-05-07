import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-6xl">
        <Link href="/" className="flex items-center gap-3 group">
          {/* Minimalist Logo */}
          <div className="flex items-center justify-center w-8 h-8 bg-white rounded flex-shrink-0 transition-transform group-hover:scale-105">
            <span className="text-black font-bold text-lg leading-none tracking-tighter">DX</span>
          </div>
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block">DEHIX</span>
        </Link>
        <div className="hidden md:flex gap-8 items-center font-medium text-sm text-neutral-400">
          <Link href="#protocol" className="hover:text-white transition-colors">Protocol</Link>
          <Link href="#flash-orgs" className="hover:text-white transition-colors">Flash Orgs</Link>
          <Link href="#tokenomics" className="hover:text-white transition-colors">DXUT</Link>
          <Link href="#whitepaper" className="text-blue-400 hover:text-blue-300 transition-colors">Whitepaper v2.0</Link>
        </div>
      </div>
    </nav>
  );
}