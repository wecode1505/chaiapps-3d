"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-[#0d0906] text-amber-50 min-h-screen relative">
      <Navbar />
      <div className="fixed top-1/2 left-0 w-[500px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 pt-44 pb-24 grid md:grid-cols-2 gap-16 relative z-10 w-full">
        <div>
          <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.3em]">VISIT US</span>
          <h1 className="text-6xl font-black uppercase tracking-tighter mt-2 mb-6">
            THE <span className="text-amber-500 font-light">LOUNGE</span>
          </h1>
          <p className="text-amber-700/80 font-medium text-lg leading-relaxed mb-10 max-w-md">
            Experience the finest blends in Phagwara. Whether you are looking for a quiet workspace or catching up with friends, your table awaits.
          </p>
          
          <div className="bg-amber-950/40 border border-amber-900/60 p-8 rounded-2xl backdrop-blur-sm shadow-xl max-w-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-amber-500 border-b border-amber-900/60 pb-3 mb-5">Phagwara Details</h3>
            <div className="space-y-4 text-sm font-medium">
              <p className="text-amber-50 flex items-center gap-3"><span className="text-xl">📍</span> Grand Trunk Rd, Sondhi Chowk</p>
              <p className="text-amber-50 flex items-center gap-3"><span className="text-xl">🕒</span> Open Daily: 10:00 AM - 11:00 PM</p>
              <p className="text-amber-50 flex items-center gap-3"><span className="text-xl">📞</span> Reserve: +91 98765 43210</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-amber-950/20 border border-amber-900/40 p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md"
        >
          <form className="flex flex-col gap-6">
            <h2 className="text-2xl font-black uppercase tracking-tight text-amber-50 border-b border-amber-900/50 pb-4">Table Reservation</h2>
            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Name</label>
                <input type="text" placeholder="YOUR NAME" className="bg-[#140e0a] border border-amber-900/50 rounded-xl p-4 text-sm text-amber-50 font-medium focus:outline-none focus:border-amber-500" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Guests</label>
                <select className="bg-[#140e0a] border border-amber-900/50 rounded-xl p-4 text-sm text-amber-50 font-medium focus:outline-none focus:border-amber-500">
                  <option>1-2 People</option>
                  <option>3-4 People</option>
                  <option>Group (5+)</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Special Requests</label>
              <textarea rows={3} placeholder="CELEBRATING A BIRTHDAY?" className="bg-[#140e0a] border border-amber-900/50 rounded-xl p-4 text-sm text-amber-50 font-medium focus:outline-none focus:border-amber-500 resize-none"></textarea>
            </div>
            <button type="button" className="w-full bg-amber-600 hover:bg-amber-500 text-amber-50 font-bold uppercase p-4 rounded-xl transition-all tracking-wider text-sm mt-2">
              Confirm Booking
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}