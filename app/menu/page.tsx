"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const menuItems = [
  { id: 1, name: "Kesar Elaichi Chai", category: "Hot Brews", price: "₹120", desc: "Premium saffron and cardamom infused traditional tea.", tag: "Signature" },
  { id: 2, name: "Rose Chai", category: "Hot Brews", price: "₹140", desc: "Delicate rose petals slow-brewed with Assam tea leaves.", tag: "Bestseller" },
  { id: 3, name: "Hazelnut Cold Frappe", category: "Cold Beverages", price: "₹220", desc: "Rich espresso blended with hazelnut syrup and ice.", tag: "Chilled" },
  { id: 4, name: "Tandoori Paneer Wrap", category: "Cafe Bites", price: "₹180", desc: "Spiced paneer wrapped in a warm, toasted flatbread.", tag: "Spicy" },
  { id: 5, name: "Classic Masala Chai", category: "Hot Brews", price: "₹90", desc: "The everyday classic, brewed with fresh ginger and spices.", tag: "" },
  { id: 6, name: "Mocha Cookie Crumble", category: "Cold Beverages", price: "₹250", desc: "Chocolate frappe topped with whipped cream and cookies.", tag: "Indulgent" },
];

export default function MenuPage() {
  return (
    <main className="bg-[#0d0906] text-amber-50 min-h-screen pb-24 relative">
      <Navbar />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.05),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-44 relative z-10">
        <header className="mb-16 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-amber-600">HANDCRAFTED SELECTION</div>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-amber-50 mt-2">
            THE <span className="text-amber-500 font-light">MENU</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5, boxShadow: "0_20px_40px_rgba(217,119,6,0.2)" }}
              className="bg-amber-950/30 border border-amber-900/50 rounded-2xl p-8 cursor-pointer group transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              {item.tag && (
                <span className="absolute top-4 right-4 bg-amber-600 text-amber-50 font-bold uppercase tracking-widest px-3 py-1 rounded-full text-[9px] z-20">
                  {item.tag}
                </span>
              )}
              <div className="pt-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500">{item.category}</span>
                <h3 className="text-2xl font-black uppercase text-amber-50 mt-2 group-hover:text-amber-400 transition-colors">{item.name}</h3>
                <p className="text-amber-700/80 text-sm mt-3 font-medium leading-relaxed">{item.desc}</p>
                <div className="flex justify-between items-center border-t border-amber-900/50 pt-6 mt-6">
                  <span className="font-black text-xl text-amber-300">{item.price}</span>
                  <span className="bg-transparent border border-amber-800 group-hover:bg-amber-600 text-amber-50 px-4 py-2 rounded-lg text-xs font-bold uppercase transition-all">Add to Order</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}