import { motion } from 'motion/react';

const mockups = [
  { title: "Dashboard", desc: "Analytics & Overview", color: "from-blue-600/20 to-transparent", delay: 0 },
  { title: "Task Details", desc: "Nested checklists", color: "from-sky-500/20 to-transparent", delay: 0.2 },
  { title: "Categories", desc: "Organized workspaces", color: "from-indigo-500/20 to-transparent", delay: 0.4 }
];

export function Screenshots() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-sky-500 uppercase mb-3">Interface</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-slate-900 tracking-tight">
            Beautifully Crafted
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Every pixel is designed for focus and productivity.
          </p>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
        {mockups.map((mockup, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: mockup.delay, duration: 0.6, type: "spring", bounce: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-full max-w-[280px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-slate-200 bg-white shadow-xl shadow-blue-900/5 relative overflow-hidden mb-8 group hover:-translate-y-2 transition-transform duration-500">
               <div className="absolute top-0 inset-x-0 h-6 bg-slate-200 rounded-b-2xl w-32 mx-auto z-20"></div>
               <div className={`absolute inset-0 bg-gradient-to-b ${mockup.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
               
               <div className="absolute inset-5 border border-slate-200 rounded-[1.5rem] bg-white/80 backdrop-blur-md p-5 pt-10 flex flex-col gap-4 shadow-sm">
                  {/* Abstract structural UI lines to simulate the app */}
                  <div className="flex justify-between items-center mb-2">
                     <div className="w-1/2 h-4 bg-slate-200 rounded-full"></div>
                     <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                  </div>
                  
                  {idx === 0 && (
                    <>
                      <div className="w-full h-28 bg-gradient-to-br from-blue-500/10 to-sky-500/5 border border-blue-100 rounded-2xl mb-2"></div>
                      <div className="space-y-3">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="w-full h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center px-3 gap-3">
                            <div className="w-4 h-4 rounded border-2 border-slate-300"></div>
                            <div className="w-3/4 h-2.5 bg-slate-200 rounded-full"></div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  
                  {idx === 1 && (
                    <>
                      <div className="w-3/4 h-6 bg-slate-200 rounded-lg mb-1"></div>
                      <div className="w-1/2 h-3 bg-slate-100 rounded-full mb-4"></div>
                      <div className="w-full h-24 bg-slate-50 rounded-2xl border border-slate-100 p-3 flex flex-col gap-2 mb-2">
                         <div className="w-full h-2 bg-slate-200 rounded-full"></div>
                         <div className="w-4/5 h-2 bg-slate-200 rounded-full"></div>
                         <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                      </div>
                      <div className="space-y-2 mt-auto">
                        <div className="w-full h-10 bg-blue-50 border border-blue-100 rounded-xl flex items-center px-3">
                           <div className="w-3/4 h-2 bg-blue-200 rounded-full"></div>
                        </div>
                        <div className="w-full h-10 bg-slate-50 border border-slate-100 rounded-xl flex items-center px-3">
                           <div className="w-2/3 h-2 bg-slate-200 rounded-full"></div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {idx === 2 && (
                    <>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="aspect-square bg-blue-50 border border-blue-100 rounded-2xl p-3 flex flex-col justify-end">
                           <div className="w-full h-2 bg-blue-200 rounded-full mb-1"></div>
                           <div className="w-1/2 h-2 bg-blue-100 rounded-full"></div>
                        </div>
                        <div className="aspect-square bg-rose-50 border border-rose-100 rounded-2xl p-3 flex flex-col justify-end">
                           <div className="w-full h-2 bg-rose-200 rounded-full mb-1"></div>
                           <div className="w-1/2 h-2 bg-rose-100 rounded-full"></div>
                        </div>
                        <div className="aspect-square bg-sky-50 border border-sky-100 rounded-2xl p-3 flex flex-col justify-end">
                           <div className="w-full h-2 bg-sky-200 rounded-full mb-1"></div>
                           <div className="w-1/2 h-2 bg-sky-100 rounded-full"></div>
                        </div>
                        <div className="aspect-square bg-amber-50 border border-amber-100 rounded-2xl p-3 flex flex-col justify-end">
                           <div className="w-full h-2 bg-amber-200 rounded-full mb-1"></div>
                           <div className="w-1/2 h-2 bg-amber-100 rounded-full"></div>
                        </div>
                      </div>
                    </>
                  )}
               </div>
            </div>
            <h4 className="text-xl font-heading font-semibold text-slate-900 mb-2">{mockup.title}</h4>
            <p className="text-slate-500 text-sm font-medium">{mockup.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
