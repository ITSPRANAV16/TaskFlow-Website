import { motion } from 'motion/react';
import { Rocket, ShieldCheck, Zap, Heart } from 'lucide-react';

const stats = [
  {
    icon: Rocket,
    title: "17.8 MB",
    description: "Ultra Lightweight",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20"
  },
  {
    icon: ShieldCheck,
    title: "100% Offline",
    description: "Zero Cloud Tracking",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20"
  },
  {
    icon: Zap,
    title: "0.1s Startup",
    description: "Blazing Fast",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20"
  },
  {
    icon: Heart,
    title: "Free & No Ads",
    description: "Open Source",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20"
  }
];

export function KeyStats() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`p-6 rounded-3xl border ${stat.border} ${stat.bg} backdrop-blur-sm flex flex-col items-center text-center group hover:scale-[1.02] transition-transform duration-300`}
          >
            <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 mb-1 tracking-tight">{stat.title}</h3>
            <p className="text-sm sm:text-base font-medium text-slate-600">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
