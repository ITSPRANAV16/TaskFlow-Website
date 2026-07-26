import { motion } from 'motion/react';

const tech = [
  { name: "Flutter", tag: "UI Framework", version: "v3.41.3" },
  { name: "Dart", tag: "Language", version: "v3.11.1" },
  { name: "Provider", tag: "State Management" },
  { name: "SharedPreferences", tag: "Data Persistence" },
  { name: "GitHub Actions", tag: "CI/CD" },
  { name: "REST API", tag: "Auto Updates" },
];

export function TechStack() {
  return (
    <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl shadow-blue-900/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-2/5 text-center lg:text-left">
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Architecture</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 text-slate-900 tracking-tight">
                Built with <br/>Modern Tech
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                TaskFlow is engineered for supreme performance, cross-platform reliability, and an exceptional user experience using the Flutter SDK.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-3/5 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 w-full">
            {tech.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-white/80 backdrop-blur-md border border-slate-200 p-6 rounded-3xl text-center hover:border-blue-300 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <h4 className="font-heading font-semibold text-lg text-slate-700 mb-1 group-hover:text-slate-900 transition-colors">{item.name}</h4>
                <p className="text-xs font-medium text-slate-500">{item.tag}</p>
                {item.version && (
                  <div className="mt-4">
                    <span className="inline-block text-[10px] font-bold tracking-wider bg-slate-100 text-slate-500 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">
                      {item.version}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
