import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { DownloadCloud } from 'lucide-react';
import { useGitHubRelease } from '../hooks/useGitHubRelease';

export function DownloadsCounter() {
  const { releaseData, loading } = useGitHubRelease();
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const targetCount = releaseData.totalDownloads;

  useEffect(() => {
    if (isInView && !loading && targetCount > 0) {
      let startTimestamp: number;
      const duration = 2000; // 2 seconds

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        // easeOut expo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setDisplayCount(Math.floor(ease * targetCount));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayCount(targetCount);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, loading, targetCount]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative z-10" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white border border-slate-200 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-blue-900/5 relative overflow-hidden group hover:border-blue-200 transition-colors duration-500"
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-500/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none transition-transform duration-700 group-hover:scale-110"></div>
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100 flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-500 group-hover:bg-blue-100">
            <DownloadCloud className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 tracking-tight flex items-center">
              {loading ? (
                <span className="w-16 h-10 bg-slate-100 rounded animate-pulse inline-block"></span>
              ) : (
                `${displayCount.toLocaleString()}`
              )}
              {!loading && <span className="text-blue-600 ml-1">+</span>}
            </h3>
            <p className="text-slate-500 font-medium mt-1">Total Downloads Worldwide</p>
          </div>
        </div>
        
        <div className="relative z-10 text-center md:text-right max-w-sm">
          <p className="text-slate-600 leading-relaxed font-medium">
            Join the growing community of users who have transformed their productivity with TaskFlow.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
