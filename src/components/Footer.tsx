import { Github, Instagram, Mail, Star, Globe } from 'lucide-react';
import logoUrl from '../assets/images/logoo.png';

export function Footer() {
  return (
    <footer className="bg-[#0A0F1D] border-t border-[#1E293B] relative z-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
        
        {/* Support Card */}
        <div className="mb-16 md:mb-24">
          <div className="bg-[#121318] border-2 border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-white tracking-tight mb-2">
                LIKE TASKFLOW? SUPPORT THE DEVELOPER
              </h2>
              <p className="text-slate-400 font-medium">
                Your support helps keep this project free and open-source forever.
              </p>
            </div>
            <a 
              href="https://github.com/ITSPRANAV16/TaskFlow"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-colors shadow-[4px_4px_0px_rgba(59,130,246,0.5)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_rgba(59,130,246,0.5)]"
            >
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              Star on GitHub
            </a>
          </div>
        </div>

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
              LEGAL & PREFERENCES
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-white"></span>
            </h3>
            
            <div className="flex flex-col items-center md:items-start gap-3 mt-4 text-center md:text-left">
              <div className="relative mb-4">
                <select className="appearance-none bg-[#121318] border-2 border-slate-700 text-white font-bold text-sm px-4 py-2 pr-10 rounded-xl hover:border-slate-500 focus:outline-none focus:border-blue-500 transition-colors shadow-sm cursor-pointer">
                  <option value="en">English (US)</option>
                  <option value="mr">मराठी (Marathi)</option>
                  <option value="hi">हिंदी (Hindi)</option>
                  <option value="es">Español (Spanish)</option>
                  <option value="fr">Français (French)</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <Globe className="w-4 h-4" />
                </div>
              </div>
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
