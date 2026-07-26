import { motion } from 'motion/react';
import { Download, Github, Smartphone } from 'lucide-react';
import logoUrl from '../assets/images/logoo.png';
import { useGitHubRelease } from '../hooks/useGitHubRelease';

export function Hero() {
  const { releaseData } = useGitHubRelease();

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 w-full">
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={logoUrl} alt="TaskFlow Logo" width="150" height="150" className="w-[150px] h-[150px] object-contain mb-8 mx-auto lg:mx-0 drop-shadow-[0_0_30px_rgba(99,102,241,0.4)] relative z-10" style={{ imageRendering: 'crisp-edges' }} />
            
            <div className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 text-sm font-medium mb-8 backdrop-blur-sm w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              {releaseData.version} Now Available • 17.8 MB (Lightweight & Optimized)
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-heading tracking-tight mb-4 text-slate-900 leading-tight">
              Master Your <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Workflow.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 font-heading mb-6 font-medium">
              Smart Task Management App
            </p>
            
            <p className="text-slate-500 text-lg max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Experience the next generation of productivity. Offline-first, lightning fast, and beautifully designed with premium glassmorphic aesthetics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/ITSPRANAV16/TaskFlow/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                Download APK
              </a>
              <a
                href="https://github.com/ITSPRANAV16/TaskFlow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/80 hover:bg-slate-50 border border-slate-200 backdrop-blur-md text-slate-700 font-medium transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Github className="w-5 h-5" />
                View Source
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <Smartphone className="w-4 h-4 text-blue-600" />
                <span className="text-slate-700">Android Ready</span>
              </div>
              <div className="flex items-center gap-2 opacity-60 px-3 py-1.5">
                <Smartphone className="w-4 h-4" />
                <span>iOS Coming Soon</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex-1 relative w-full max-w-md lg:max-w-none flex justify-center lg:justify-end perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15, rotateX: 5 }}
            animate={{ opacity: 1, scale: 1, rotateY: -5, rotateX: 2 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="relative z-10 w-[300px] h-[620px] rounded-[3rem] border-[10px] border-slate-200 bg-white shadow-2xl overflow-hidden shadow-blue-900/10"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-7 bg-slate-200 rounded-b-3xl w-40 mx-auto z-20 flex justify-center items-end pb-1.5">
               <div className="w-12 h-1.5 bg-slate-300 rounded-full"></div>
            </div>
            
            {/* App UI */}
            <div className="h-full w-full bg-gradient-to-br from-slate-50 to-slate-100 p-5 pt-14 flex flex-col gap-5 relative">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-heading font-bold text-2xl text-slate-900 tracking-tight">Hello, Pranav</h3>
                  <p className="text-sm text-slate-500">You have 4 tasks today</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-0.5 shadow-lg">
                  <div className="w-full h-full bg-white rounded-full border-2 border-white"></div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/10 to-sky-500/5 border border-blue-200 p-5 rounded-3xl backdrop-blur-md relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
                <h4 className="font-heading font-medium text-blue-700 text-sm mb-2 relative z-10">Daily Progress</h4>
                <div className="flex items-end justify-between mb-3 relative z-10">
                   <span className="text-3xl font-bold font-heading text-slate-900">70%</span>
                   <span className="text-xs font-medium text-blue-600 bg-blue-500/10 px-2 py-1 rounded-md">Great Job!</span>
                </div>
                <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden relative z-10">
                  <div className="w-[70%] bg-gradient-to-r from-blue-600 to-sky-400 h-full rounded-full shadow-[0_0_10px_rgba(56,189,248,0.5)]"></div>
                </div>
              </div>
              
              <div className="space-y-3 mt-2 flex-1">
                {[
                  { title: "Design Landing Page", time: "10:00 AM", priority: "Urgent", color: "bg-rose-500", border: "border-rose-200" },
                  { title: "Review Code PR", time: "01:00 PM", priority: "High", color: "bg-orange-500", border: "border-orange-200" },
                  { title: "Update Dependencies", time: "03:30 PM", priority: "Medium", color: "bg-amber-500", border: "border-amber-200" },
                  { title: "Team Meeting", time: "05:00 PM", priority: "Low", color: "bg-emerald-500", border: "border-emerald-200" },
                ].map((task, i) => (
                  <div key={i} className={`bg-white border ${task.border} p-4 rounded-2xl flex items-center gap-4 shadow-sm`}>
                    <div className={`w-5 h-5 rounded-md border-2 border-slate-300 flex-shrink-0 ${i === 0 ? 'bg-blue-600 border-blue-600' : ''}`}>
                       {i === 0 && <svg className="w-full h-full text-white p-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-semibold truncate ${i === 0 ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{task.title}</p>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">{task.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${task.color} shadow-[0_0_8px_var(--tw-shadow-color)] shadow-${task.color.replace('bg-', '')}`}></div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Decorative elements behind phone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-500/10 to-sky-500/10 blur-[80px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
