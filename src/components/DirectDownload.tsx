import { motion } from 'motion/react';
import { useState } from 'react';
import { Smartphone, Cpu, HardDrive, LayoutGrid } from 'lucide-react';
import { useGitHubRelease } from '../hooks/useGitHubRelease';

export function DirectDownload() {
  const [selectedArch, setSelectedArch] = useState<string>('arm64-v8a');
  const { releaseData } = useGitHubRelease();

  const architectures = [
    { id: 'arm64-v8a', label: 'ARM64-V8A (RECOMMENDED)', icon: Smartphone, size: '17.8 MB', fileUrl: releaseData.assets.arm64 },
    { id: 'armeabi-v7a', label: 'ARMV7 (32-BIT)', icon: Cpu, size: '15.5 MB', fileUrl: releaseData.assets.arm7 },
    { id: 'x86_64', label: 'X86_64', icon: HardDrive, size: '19.2 MB', fileUrl: releaseData.assets.x86_64 },
    { id: 'universal', label: 'UNIVERSAL', icon: LayoutGrid, size: '24.5 MB', fileUrl: releaseData.assets.universal },
  ];

  const selectedData = architectures.find(a => a.id === selectedArch) || architectures[0];

  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto relative z-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#121318] rounded-3xl border-2 border-[#121318] shadow-[8px_8px_0px_rgba(255,255,255,1)] p-6 md:p-10 w-full relative overflow-hidden flex flex-col">
          
          {/* Card Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase mb-4 text-center md:text-left">
              DIRECT DOWNLOAD
            </h2>
            <div className="h-0.5 w-full bg-slate-800"></div>
          </div>

          {/* Architecture Selection List */}
          <div className="flex flex-col gap-4 mb-10">
            {architectures.map((arch) => {
              const isSelected = selectedArch === arch.id;

              return (
                <label
                  key={arch.id}
                  className={`relative flex items-center p-4 cursor-pointer rounded-2xl border-2 transition-all duration-200 ${
                    isSelected
                      ? 'bg-[#E2E8F0] border-[#E2E8F0]'
                      : 'bg-[#121318] border-white hover:bg-slate-900 hover:translate-x-1'
                  }`}
                >
                  <input
                    type="radio"
                    name="architecture"
                    value={arch.id}
                    checked={isSelected}
                    onChange={() => setSelectedArch(arch.id)}
                    className="sr-only"
                  />
                  
                  <div className="flex flex-1 items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center border-2 ${
                      isSelected ? 'bg-white border-black text-black' : 'bg-[#121318] border-white text-white'
                    }`}>
                      <arch.icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className={`font-bold tracking-wide uppercase ${isSelected ? 'text-black' : 'text-white'}`}>
                        {arch.label}
                      </h4>
                    </div>
                  </div>

                  {/* Custom Radio Circle indicator */}
                  <div className={`ml-4 w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'border-black' : 'border-white'
                  }`}>
                    {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-black"></div>}
                  </div>
                </label>
              );
            })}
          </div>

          {/* Main Download Button */}
          <div className="flex justify-center mb-10">
              <a
                href={selectedData.fileUrl}
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-5 bg-white border-2 border-black rounded-full text-black font-black uppercase tracking-widest transition-all duration-200 hover:scale-105 hover:bg-gray-100 active:scale-95 w-full md:w-auto text-sm sm:text-base"
              >
                <span className="text-lg sm:text-xl">📥</span>
                <span>DOWNLOAD APK ({selectedData.size})</span>
              </a>
          </div>

          {/* Card Footer Section */}
          <div className="mt-auto pt-6 border-t-2 border-slate-800 flex flex-col items-center gap-5">
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest text-center">
              LOVE THE APP? SUPPORT THE DEVELOPER!
            </p>
            <a 
              href="https://github.com/ITSPRANAV16/TaskFlow" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8B5CF6] border-2 border-[#8B5CF6] rounded-full text-white font-bold uppercase tracking-wider hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-colors"
            >
              <span>⭐</span>
              <span>Star on GitHub</span>
            </a>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
