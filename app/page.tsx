"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function Home() {
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
    <main className="relative min-h-screen overflow-hidden selection:bg-amber-500/30 flex items-center justify-center px-6">
      
      {/* Ambient Cafe Lighting */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.15),transparent_50%)] pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center z-10">
        
        {/* Left Side: Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
        >
          <div className="inline-flex items-center gap-2 bg-amber-950/40 border border-amber-900/50 px-4 py-2 rounded-full text-xs font-semibold tracking-widest text-amber-300 mb-6 uppercase shadow-lg">
            <span className="text-amber-500">☕</span> Phagwara's Premium Lounge
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-amber-50">
            SIP THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-amber-100">
              EXPERIENCE.
            </span>
          </h1>
          
          <p className="text-amber-700/80 text-lg mt-6 max-w-md font-medium leading-relaxed">
            Dive into a handcrafted menu of authentic chai, artisan wraps, and premium cold frappes.
          </p>
          <div className="flex gap-4 mt-10">
            <button className="bg-amber-600 hover:bg-amber-500 text-amber-50 font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(217,119,6,0.2)]">
              View Menu
            </button>
          </div>
        </motion.div>

        {/* Right Side: 3D Interactive Card */}
        <div 
          className="relative flex justify-center perspective-1000 w-full"
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="w-full max-w-[400px] aspect-[4/5] rounded-[32px] bg-amber-950/20 border border-amber-900/40 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group backdrop-blur-md"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-600/10 via-transparent to-transparent opacity-50 z-0" />
            
            {/* The Image inside the 3D Card */}
            <div style={{ transform: "translateZ(40px)" }} className="w-full h-[65%] rounded-2xl overflow-hidden relative shadow-[0_15px_35px_rgba(0,0,0,0.4)] border border-amber-900/50">
              <img 
                src="https://images.unsplash.com/photo-1576092762791-dd9e2220afa1?q=80&w=800" 
                alt="Steaming Hot Chai" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Floating Text inside the 3D Card */}
            <div style={{ transform: "translateZ(60px)" }} className="mt-6 relative z-10 flex justify-between items-end">
              <div>
                <div className="text-xs font-bold text-amber-500 uppercase tracking-widest">House Signature</div>
                <h3 className="text-3xl font-black uppercase text-amber-50 tracking-tight mt-1">MASALA CHAI</h3>
              </div>
              <div className="text-xl font-black text-amber-400">₹180</div>
            </div>
          </motion.div>
        </div>

      </div>
    </main>
  );
}