import { Zap, Star } from 'lucide-react';

const sequence = [
  { type: 'icon', icon: 'zap' },
  { type: 'text', text: 'TASKFLOW' },
  { type: 'icon', icon: 'star' },
  { type: 'text', text: 'AD-FREE' },
  { type: 'icon', icon: 'zap' },
  { type: 'text', text: '100% PRIVATE' },
  { type: 'icon', icon: 'star' },
  { type: 'text', text: 'SUPER FAST' },
  { type: 'icon', icon: 'zap' },
  { type: 'text', text: 'OFFLINE FIRST' },
  { type: 'icon', icon: 'star' },
  { type: 'text', text: 'SMART TASKS' },
  { type: 'icon', icon: 'zap' },
  { type: 'text', text: '17.8 MB' },
  { type: 'icon', icon: 'star' },
];

export function Marquee() {
  return (
    <div className="w-full bg-[#6366F1] border-y-2 border-white overflow-hidden py-4 sm:py-5 flex items-center relative z-20 group font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
      <div className="flex whitespace-nowrap animate-marquee items-center min-w-max">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center min-w-max">
            {sequence.map((item, index) => (
              <div key={index} className="flex items-center mx-4 sm:mx-6">
                {item.type === 'icon' ? (
                  item.icon === 'zap' ? (
                    <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
                  ) : (
                    <Star className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
                  )
                ) : (
                  <span className="text-white font-black text-xl sm:text-2xl tracking-widest uppercase">
                    {item.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
