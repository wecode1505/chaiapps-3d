"use client";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [particles, setParticles] = useState<{ id: number; size: number; x: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate random particles only on the client side to prevent hydration mismatches
    const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // Sizes between 2px and 6px
      x: Math.random() * 100, // Random horizontal position (0-100%)
      duration: Math.random() * 15 + 10, // Float duration between 10s and 25s
      delay: Math.random() * 5, // Random start delay
    }));
    setParticles(generatedParticles);

    // Stop loading after 2.8 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  // 3D Parallax Mouse Tracking Engine
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <>
      {/* =========================================
          THE BREWING PRE-LOADER
          ========================================= */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="preloader"
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0906] text-amber-50"
          >
            <div className="flex flex-col items-center">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-black tracking-[0.2em] uppercase mb-8"
              >
                CHAI<span className="text-amber-500 font-light">APPS</span>
              </motion.h1>
              
              <div className="w-64 md:w-80 h-[2px] bg-amber-950 overflow-hidden relative rounded-full">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="absolute top-0 left-0 h-full bg-amber-500 shadow-[0_0_15px_rgba(217,119,6,0.8)]"
                />
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] text-amber-700 font-bold uppercase tracking-[0.3em] mt-8 animate-pulse"
              >
                Brewing the Perfect Cup...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          MAIN WEBSITE CONTENT
          ========================================= */}
      <main className={`relative min-h-screen overflow-hidden selection:bg-amber-500/30 flex items-center justify-center px-6 transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen' : 'opacity-100'}`}>
        
        <Navbar />
        
        {/* --- NEW: CINEMATIC BACKGROUND LAYERS --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Base Image: Dark Roasted Coffee Beans */}
          <img 
            src="https://images.unsplash.com/photo-1511920170033-f8396924c648?q=80&w=2000" 
            alt="Coffee Texture" 
            className="w-full h-full object-cover opacity-20"
          />
          {/* Heavy Dark Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#0d0906]/80" />
          {/* Amber Ambient Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-600/15 blur-[150px] rounded-full" />
        </div>

        {/* --- NEW: FLOATING PARTICLES --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-amber-500/40 rounded-full blur-[1px]"
              style={{
                width: p.size,
                height: p.size,
                left: `${p.x}%`,
                bottom: "-10%", // Start below the screen
              }}
              animate={{
                y: ["0vh", "-120vh"], // Float way up past the top
                opacity: [0, 1, 0], // Fade in, then fade out
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "linear",
              }}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10 pt-16">
          
          {/* Left Side: Typography */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? -40 : 0 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
          >
            <div className="inline-flex items-center gap-2 bg-amber-950/40 border border-amber-900/50 px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-amber-300 mb-6 uppercase shadow-lg backdrop-blur-md">
              <span className="text-amber-500 animate-pulse">☕</span> Phagwara's Premium Lounge
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-amber-50 drop-shadow-2xl">
              SIP THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-100">
                EXPERIENCE.
              </span>
            </h1>
            
            <p className="text-amber-100/70 text-lg mt-6 max-w-md font-medium leading-relaxed drop-shadow-md">
              Dive into a handcrafted menu of authentic chai, artisan wraps, and premium cold frappes.
            </p>
            <div className="flex gap-4 mt-10">
              <Link href="/menu">
                <button className="bg-amber-600 hover:bg-amber-500 text-amber-50 font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(217,119,6,0.3)] hover:shadow-[0_15px_40px_rgba(217,119,6,0.5)] hover:-translate-y-1">
                  View Menu
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: 3D Interactive Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoading ? 0 : 1, scale: isLoading ? 0.8 : 1 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="relative flex justify-center perspective-1000 w-full"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full max-w-[400px] aspect-[4/5] relative"
            >
              <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="w-full h-full rounded-[32px] bg-amber-950/40 border border-amber-800/50 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/20 via-transparent to-transparent opacity-50 z-0" />
                
                <div style={{ transform: "translateZ(40px)" }} className="w-full h-[65%] rounded-2xl overflow-hidden relative shadow-[0_15px_35px_rgba(0,0,0,0.6)] border border-amber-900/50">
                  <img 
                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000" 
                    alt="Steaming Hot Chai" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                <div style={{ transform: "translateZ(60px)" }} className="mt-6 relative z-10 flex justify-between items-end">
                  <div>
                    <div className="text-xs font-bold text-amber-500 uppercase tracking-widest drop-shadow-md">House Signature</div>
                    <h3 className="text-3xl font-black uppercase text-amber-50 tracking-tight mt-1 drop-shadow-lg">MASALA CHAI</h3>
                  </div>
                  <div className="text-xl font-black text-amber-400 drop-shadow-md">₹180</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </main>
    </>
  );
}