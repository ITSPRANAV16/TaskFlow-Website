import { Download } from 'lucide-react';
import logoUrl from '../assets/images/logoo.png';

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] flex items-center justify-center overflow-hidden">
            <img src={logoUrl} alt="TaskFlow Logo" width="45" height="45" className="w-full h-full object-contain" style={{ imageRendering: 'crisp-edges' }} />
          </div>
          <span className="text-2xl font-heading font-bold text-slate-900 tracking-tight">TaskFlow</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#developer" className="hover:text-blue-600 transition-colors">Developer</a>
          <a
            href="https://github.com/ITSPRANAV16/TaskFlow/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 text-white transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download App</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
