import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Target, Zap } from 'lucide-react';

export function ProductivityQuiz() {
  const [q1, setQ1] = useState<string>('');
  const [q2, setQ2] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const calculateScore = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setShowResult(false);
    setQ1('');
    setQ2('');
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto relative z-10 font-sans">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight mb-4">
          Productivity Check
        </h2>
        <p className="text-lg text-slate-600 font-medium">Find out how you can improve your workflow.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white border-2 border-slate-200 rounded-[2rem] shadow-xl p-8 md:p-12"
      >
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800">1. तुम्ही रोज तुमचे काम कुठे लिहिता?</h3>
                <div className="flex flex-wrap gap-4">
                  {['नोटबुक', 'ॲप', 'डोक्यात'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setQ1(option)}
                      className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${
                        q1 === option 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                          : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800">2. तुम्ही मोठे प्रोजेक्ट्स लहान तुकड्यांत (Subtasks) विभागता का?</h3>
                <div className="flex flex-wrap gap-4">
                  {['होय', 'नाही'].map((option) => (
                    <button
                      key={option}
                      onClick={() => setQ2(option)}
                      className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${
                        q2 === option 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md' 
                          : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={calculateScore}
                disabled={!q1 || !q2}
                className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  (!q1 || !q2) 
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                    : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20 hover:-translate-y-1'
                }`}
              >
                <Target className="w-5 h-5" />
                Calculate Score
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-24 h-24 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-12 h-12" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-500 mb-2">Your Productivity Score</h3>
              <div className="text-6xl font-black text-slate-900 mb-8 tracking-tighter">
                {q1 === 'ॲप' && q2 === 'होय' ? '95%' : 
                 (q1 === 'ॲप' || q2 === 'होय') ? '70%' : '40%'}
              </div>

              <p className="text-xl text-slate-700 font-medium mb-10 max-w-md mx-auto">
                Boost your score and stay organized effortlessly with TaskFlow!
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="#download"
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
                >
                  Download TaskFlow
                </a>
                <button 
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                >
                  Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
