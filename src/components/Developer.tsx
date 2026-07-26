import { motion } from 'motion/react';
import { Github, Instagram } from 'lucide-react';

export function Developer() {
  return (
    <section id="developer" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-12">Meet the Developer</h2>
        
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img src="/pranavphoto.png" alt="Pranav Patil" className="w-full h-full object-cover object-[center_20%]" />
            </div>
          </div>
        </div>
        
        <h3 className="text-4xl font-bold font-heading text-slate-900 mb-3">Pranav Patil</h3>
        <p className="text-blue-600 font-medium text-lg mb-10">Android Developer & Cross-Platform Software Engineer</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="https://github.com/ITSPRANAV16"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
          >
            <Github className="w-5 h-5" />
            <span>GitHub Profile</span>
          </a>
          <a
            href="https://www.instagram.com/pranav_patil__16"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-tr from-rose-50 to-orange-50 hover:from-rose-100 hover:to-orange-100 border border-rose-100 hover:border-rose-200 text-slate-700 font-medium transition-all hover:-translate-y-1 shadow-sm hover:shadow-md"
          >
            <Instagram className="w-5 h-5 text-rose-400" />
            <span>Instagram</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
