import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "TaskFlow ॲप पूर्णपणे मोफत आहे का?",
    answer: "होय! TaskFlow 100% मोफत, विना-जाहिरात (No Ads) आणि ओपन-सोर्स आहे."
  },
  {
    question: "ॲप इंटरनेटशिवाय (Offline) काम करते का?",
    answer: "होय, सर्व टास्क तुमच्या मोबाईलमध्ये सुरक्षित साठवले जातात आणि 100% ऑफलाईन चालतात."
  },
  {
    question: "ॲप कसे अपडेट करायचे?",
    answer: "ॲपमध्ये ऑटो-अपडेट सिस्टीम आहे जी नवीन व्हर्जन आल्यावर ऑटोमॅटिक अलर्ट दाखवते."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
          Everything you need to know about TaskFlow.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`border-2 rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#0A0F1D] border-blue-500/30' : 'bg-[#121318] border-white/10 hover:border-white/20'}`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold font-heading transition-colors ${isOpen ? 'text-white' : 'text-slate-200'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-white/10 text-slate-400'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
