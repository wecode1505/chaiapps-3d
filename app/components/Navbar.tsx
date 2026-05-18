"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 backdrop-blur-md bg-amber-950/40 border border-amber-900/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-black tracking-widest text-amber-50 uppercase bg-gradient-to-r from-amber-200 via-amber-500 to-orange-400 bg-clip-text text-transparent">
          CHAI<span className="text-amber-100 font-light">APPS</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
          <Link href="/" className={`hover:text-amber-300 transition-colors py-1 relative ${pathname === '/' ? 'text-amber-400' : ''}`}>
            Lounge
            {pathname === '/' && <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500" />}
          </Link>
          <Link href="/menu" className={`hover:text-amber-300 transition-colors py-1 relative ${pathname === '/menu' ? 'text-amber-400' : ''}`}>
            Menu
            {pathname === '/menu' && <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500" />}
          </Link>
          <Link href="/contact" className={`hover:text-amber-300 transition-colors py-1 relative ${pathname === '/contact' ? 'text-amber-400' : ''}`}>
            Reserve
            {pathname === '/contact' && <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-500" />}
          </Link>
        </div>

        <Link href="/menu">
          <button className="relative group bg-amber-600 hover:bg-amber-500 text-amber-50 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(217,119,6,0.3)] overflow-hidden">
            <span className="relative z-10">Order Now</span>
          </button>
        </Link>
      </div>
    </motion.nav>
  );
}