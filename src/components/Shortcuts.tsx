import { motion } from 'motion/react';
import { Keyboard } from 'lucide-react';

const shortcuts = [
  { keys: ['Ctrl', 'N'], action: 'Quick Add New Task' },
  { keys: ['Ctrl', 'F'], action: 'Instant Task Search' },
  { keys: ['Ctrl', 'T'], action: 'Toggle Dark / Light Theme' },
  { keys: ['Esc'], action: 'Close Modals & Sheets' },
];

export function Shortcuts() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#121318] rounded-3xl border-4 border-slate-900 shadow-[12px_12px_0px_rgba(15,23,42,1)] p-8 md:p-12 relative overflow-hidden"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-14 h-14 bg-emerald-500 border-2 border-black rounded-xl flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <Keyboard className="w-8 h-8 text-black" />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
              Keyboard Shortcuts
            </h2>
            <p className="text-slate-400 font-medium">Power user cheat sheet for maximum efficiency.</p>
          </div>
        </div>

        <div className="space-y-4">
          {shortcuts.map((shortcut, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border-b-2 border-slate-800 last:border-0 hover:bg-white/5 transition-colors rounded-lg">
              <span className="text-slate-200 font-bold text-lg">{shortcut.action}</span>
              <div className="flex items-center gap-2">
                {shortcut.keys.map((k, i) => (
                  <span key={i} className="flex items-center">
                    <kbd className="px-3 py-1.5 bg-slate-800 border-b-4 border-slate-950 rounded-lg text-emerald-400 font-mono font-bold tracking-wider">
                      {k}
                    </kbd>
                    {i < shortcut.keys.length - 1 && (
                      <span className="text-slate-500 font-bold mx-2">+</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
