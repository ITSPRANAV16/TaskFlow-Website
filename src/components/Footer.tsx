import { Github, Instagram, Mail } from 'lucide-react';
import logoUrl from '../assets/images/logoo.png';

export function Footer() {
  return (
    <footer className="bg-[#0A0F1D] border-t border-[#1E293B] relative z-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#0A0F1D] rounded-full border-2 border-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] transition-all">
              <div className="w-[28px] h-[28px] flex items-center justify-center overflow-hidden">
                <img src={logoUrl} alt="TaskFlow Logo" width="28" height="28" className="w-full h-full object-contain" style={{ imageRendering: 'crisp-edges' }} />
              </div>
              <span className="text-xl font-heading font-black text-white tracking-wider uppercase">TaskFlow</span>
            </div>
            
            <div className="flex items-center gap-4">
              <a href="https://github.com/ITSPRANAV16" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A0F1D] border-2 border-white text-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] transition-all">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://www.instagram.com/pranav_patil__16" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A0F1D] border-2 border-white text-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] transition-all">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="mailto:pranavpatil@example.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0A0F1D] border-2 border-white text-white shadow-[4px_4px_0px_rgba(255,255,255,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_rgba(255,255,255,1)] transition-all">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          {/* Middle Column (NAVIGATION) */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="text-white font-bold text-lg tracking-widest uppercase relative inline-block w-fit">
              NAVIGATION
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-white"></span>
            </h3>
            
            <ul className="flex flex-col items-center md:items-start gap-4 mt-4">
              <li>
                <a href="#hero" className="text-slate-400 hover:text-white font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all group-hover:w-4"></span>
                  HOME
                </a>
              </li>
              <li>
                <a href="#features" className="text-slate-400 hover:text-white font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all group-hover:w-4"></span>
                  FEATURES
                </a>
              </li>
              <li>
                <a href="#download" className="text-slate-400 hover:text-white font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all group-hover:w-4"></span>
                  DOWNLOAD
                </a>
              </li>
              <li>
                <a href="#changelog" className="text-slate-400 hover:text-white font-bold uppercase tracking-wider text-sm transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-0.5 bg-white transition-all group-hover:w-4"></span>
                  CHANGELOG
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column (LEGAL) */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h3 className="text-white font-bold text-lg tracking-widest uppercase relative inline-block w-fit">
              LEGAL
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-white"></span>
            </h3>
            
            <div className="flex flex-col items-center md:items-start gap-3 mt-4 text-center md:text-left">
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Copyright © 2026 TaskFlow. All Rights Reserved.
              </p>
              <p className="text-slate-500 text-sm font-medium flex items-center gap-1.5 mt-2">
                Created with <span className="text-red-500 animate-pulse">❤️</span> by Pranav Patil.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
