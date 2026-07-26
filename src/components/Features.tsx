import { motion } from 'motion/react';
import { useState } from 'react';
import { Database, ListTodo, Palette, AlertTriangle, RefreshCw, ShieldAlert } from 'lucide-react';

const featuresData = [
  { id: "01", icon: Database, title: "OFFLINE PERSISTENCE", details: "Powered by SharedPreferences, instant load time, no internet required" },
  { id: "02", icon: ListTodo, title: "SUBTASKS & CHECKLISTS", details: "Break projects into subtasks with live progress bar" },
  { id: "03", icon: Palette, title: "IMMERSIVE GLASS UI", details: "Premium Dark & Light mode with HSL Indigo/Teal gradients" },
  { id: "04", icon: AlertTriangle, title: "SMART PRIORITIES", details: "Urgent, High, Medium & Low color-coded tagging" },
  { id: "05", icon: RefreshCw, title: "AUTO UPDATES", details: "One-tap update detection via GitHub Releases REST API" },
  { id: "06", icon: ShieldAlert, title: "CRASH REPORTING", details: "Automatically catches unexpected app errors and logs them directly to GitHub Issues with full stack trace & device diagnostics" }
];

function FeatureCard({ id, icon: Icon, title, details }: any) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-[#121318] border-2 border-white rounded-3xl p-6 md:p-8 w-full sm:w-auto relative overflow-hidden shrink-0 snap-center shadow-[6px_6px_0px_rgba(255,255,255,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_rgba(255,255,255,1)] transition-all flex flex-col">
      {/* Watermark */}
      <div className="absolute top-2 right-4 text-7xl font-black text-white/[0.03] select-none pointer-events-none">
        {id}
      </div>
      
      <div>
        <div className="w-14 h-14 rounded-2xl bg-[#0D0D12] border-2 border-white flex items-center justify-center mb-6 text-white shadow-[2px_2px_0px_rgba(255,255,255,1)]">
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-black text-white uppercase tracking-wider mb-4 leading-snug">
          {title}
        </h3>
        
        <div className="w-full h-0.5 bg-slate-800 mb-6"></div>
      </div>
      
      <div className="mt-auto">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-white text-black border-2 border-black font-black uppercase text-xs rounded-full shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[0px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          {isOpen ? "- READ LESS" : "+ READ MORE"}
        </button>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            className="mt-5"
          >
            <p className="text-slate-300 font-bold text-sm leading-relaxed">
              {details}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#0D0D12] relative z-10 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Left Header Column */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left gap-8 lg:sticky lg:top-32">
            <div className="inline-flex w-fit items-center justify-center px-5 py-2.5 bg-black border-2 border-white rounded-full shadow-[4px_4px_0px_rgba(255,255,255,1)]">
              <span className="text-sm font-black text-white uppercase tracking-widest">⚡ KEY FEATURES</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-widest leading-[1.15]">
              ENGINEERED FOR <br/>
              <span className="inline-block bg-slate-200 text-black px-4 py-1.5 mt-3 border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] -rotate-2">PRODUCTIVITY</span>
            </h2>
            
            <div className="mt-4 bg-[#121318] border-2 border-white rounded-3xl p-6 md:p-8 shadow-[6px_6px_0px_rgba(255,255,255,1)]">
              <p className="text-slate-300 font-bold text-lg leading-relaxed">
                TaskFlow combines ultra-fast local storage with striking minimalist aesthetics to deliver an uncompromising task management experience.
              </p>
            </div>
          </div>
          
          {/* Right Features Cards Row */}
          <div className="col-span-1 lg:col-span-8 w-full">
               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                 {featuresData.map((f, idx) => (
                   <motion.div 
                     key={f.id} 
                     className="w-full"
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.5, delay: idx * 0.1 }}
                   >
                     <FeatureCard {...f} />
                   </motion.div>
                 ))}
               </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
