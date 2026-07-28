import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Cleanest task app I've used on Android! Ultra fast and zero ads.",
    author: "Alex M.",
  },
  {
    quote: "Subtasks and color-coded priorities help me stay organized every day.",
    author: "Rahul K.",
  },
  {
    quote: "Love the 17.8MB small size and dark theme UI.",
    author: "Priya S.",
  }
];

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight mb-4">
          Community Feedback
        </h2>
        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
          See what users are saying about TaskFlow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-3xl p-8 border-2 border-slate-100 shadow-[8px_8px_0px_rgba(226,232,240,1)] hover:-translate-y-1 transition-transform"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-slate-700 text-lg font-medium mb-8 italic">"{t.quote}"</p>
            <div className="mt-auto">
              <p className="font-bold text-slate-900">{t.author}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
