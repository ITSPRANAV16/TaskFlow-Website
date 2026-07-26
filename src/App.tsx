import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { DownloadsCounter } from './components/DownloadsCounter';
import { Features } from './components/Features';
import { Screenshots } from './components/Screenshots';
import { DevLog } from './components/DevLog';
import { DirectDownload } from './components/DirectDownload';
import { TechStack } from './components/TechStack';
import { Developer } from './components/Developer';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden selection:bg-blue-500/30 font-body">
      {/* Global Decorative Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sky-500/10 blur-[120px]"></div>
      </div>
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <DownloadsCounter />
          <Features />
          <Screenshots />
          <DevLog />
          <DirectDownload />
          <TechStack />
          <Developer />
        </main>
        <Footer />
      </div>
    </div>
  );
}
