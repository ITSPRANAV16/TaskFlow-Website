import { motion } from 'motion/react';
import { useState } from 'react';

const changelogData = [
  {
    version: "V1.0.5",
    date: "27 July 2026",
    isLatest: true,
    items: [
      "🧹 Clean First Install: Removed sample default tasks for 100% clean experience",
      "🛡️ Automated Crash Reporting System (catches crashes & logs to GitHub Issues API)",
      "📱 Dynamic Version System in About Sheet",
      "⚡ 17.8 MB Optimized APK Size & 100% Passed CI/CD Automated Tests"
    ]
  },
  {
    version: "V1.0.4",
    date: "26 July 2026",
    isLatest: false,
    items: [
      "Added Automated Crash Reporting System (catch unhandled errors & post to GitHub Issues API)",
      "Optimized APK size to just 17.8 MB (80% smaller)",
      "Added Branded Native & Animated Splash Screen",
      "CI/CD Pipeline fully automated via GitHub Actions"
    ]
  },
  {
    version: "V1.0.1",
    date: "26 July 2026",
    isLatest: false,
    items: [
      "Branded Native & Animated Splash Screen (Dark Theme + TaskFlow Logo)",
      "App size reduced from ~100MB to 17.8MB (80% smaller)",
      "Official name set to \"Taskflow\"",
      "GitHub Actions CI/CD Auto-Release workflow",
      "Copyright © 2026 Pranav Patil License"
    ]
  },
  {
    version: "V1.0.0",
    date: "25 July 2026",
    isLatest: false,
    items: [
      "Task Management, Subtasks, Priority Levels, Categories",
      "Dashboard, Dark Mode, Offline Persistence"
    ]
  }
];

function DevLogCard({ version, date, isLatest, items }: { key?: number | string, version: string, date: string, isLatest: boolean, items: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#121318] border-2 border-white rounded-3xl shadow-[8px_8px_0px_rgba(255,255,255,1)] p-6 md:p-8 w-full max-w-xl mx-auto relative z-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[10px_10px_0px_rgba(255,255,255,1)]">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="px-3 py-1.5 bg-[#121318] border-2 border-white rounded-full text-white font-black text-xs sm:text-sm uppercase shadow-[2px_2px_0px_rgba(255,255,255,1)]">
          [ {version} ]
        </span>
        <span className="px-3 py-1.5 bg-[#121318] border-2 border-white rounded-full text-white font-bold text-xs sm:text-sm uppercase shadow-[2px_2px_0px_rgba(255,255,255,1)]">
          [ {date} ]
        </span>
        {isLatest ? (
           <span className="px-3 py-1.5 bg-[#8B5CF6] border-2 border-white rounded-full text-white font-black text-xs sm:text-sm uppercase shadow-[2px_2px_0px_rgba(255,255,255,1)]">
             [ LATEST ]
           </span>
        ) : (
           <span className="px-3 py-1.5 bg-slate-700 border-2 border-white rounded-full text-white font-black text-xs sm:text-sm uppercase shadow-[2px_2px_0px_rgba(255,255,255,1)]">
             [ STABLE ]
           </span>
        )}
      </div>
      
      <div className="w-full h-0.5 bg-slate-800 mb-6"></div>
      
      <div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="px-6 py-3 bg-white text-black border-2 border-black font-black uppercase text-sm rounded-full shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[0px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2"
        >
          {isOpen ? "- READ LESS" : "+ READ MORE"}
        </button>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: 'auto' }} 
            className="mt-6 overflow-hidden"
          >
            <ul className="space-y-4">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 font-medium leading-relaxed">
                  <span className="text-white font-bold shrink-0 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export function DevLog() {
  return (
    <section id="changelog" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-[#08080C] relative z-10 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Header Area */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-start gap-5 lg:sticky lg:top-32 h-fit z-20">
            <div className="inline-flex items-center justify-center px-6 py-4 bg-[#08080C] border-2 border-white rounded-full shadow-[6px_6px_0px_rgba(255,255,255,1)]">
              <span className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest">DEV LOG</span>
            </div>
            <div className="inline-flex items-center justify-center px-5 py-2.5 bg-[#121318] border-2 border-white rounded-full">
              <span className="text-sm font-bold text-white uppercase tracking-wider">Continuous improvements</span>
            </div>
          </div>
          
          {/* Right Wavy Path Timeline */}
          <div className="col-span-1 lg:col-span-8 relative py-8 w-full">
            {/* SVG Wavy Line Background */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[100px] pointer-events-none text-slate-600 opacity-60">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="wavyPath" x="0" y="0" width="100" height="300" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 C 90 45, 90 105, 50 150 C 10 195, 10 255, 50 300" stroke="currentColor" strokeWidth="4" strokeDasharray="12 12" fill="none" />
                  </pattern>
                </defs>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#wavyPath)" />
              </svg>
            </div>
            
            {/* Cards */}
            <div className="flex flex-col gap-12 md:gap-24 relative z-10">
              {changelogData.map((entry, idx) => (
                 <DevLogCard key={idx} version={entry.version} date={entry.date} isLatest={entry.isLatest} items={entry.items} />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
