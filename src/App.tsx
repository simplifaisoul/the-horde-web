import LightningBackground from './components/LightningBackground';
import Services from './components/Services';
import Contact from './components/Contact';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white selection:bg-horde-blue/50 selection:text-white overflow-x-hidden font-['Rajdhani']">
      <div className="bg-grain"></div>

      {/* Background Animation - Fixed to viewport */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/50 via-black to-black opacity-80"></div>
      <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen">
        <LightningBackground hue={200} intensity={1.5} size={1.2} speed={0.8} />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Navigation / Header */}
        <nav className="sticky top-0 z-50 w-full p-6 flex justify-between items-center backdrop-blur-xl bg-black/60 border-b border-white/5 supports-[backdrop-filter]:bg-black/30">
          <div className="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-['Orbitron'] flex items-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            THE HORDE
          </div>
          <div className="flex gap-6">
            <a href="https://www.facebook.com/abicrcic" target="_blank" rel="noopener noreferrer" className="hover:text-horde-blue transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_#00f0ff]">
              <Facebook size={24} />
            </a>
            <a href="#" className="hover:text-horde-blue transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_#00f0ff]"><Instagram size={24} /></a>
            <a href="#" className="hover:text-horde-blue transition-all hover:scale-125 hover:drop-shadow-[0_0_8px_#00f0ff]"><Twitter size={24} /></a>
          </div>
        </nav>

        {/* Hero Content */}
        <main className="flex-grow flex flex-col items-center justify-center text-center max-w-6xl mx-auto space-y-12 animate-fade-in-up py-32 px-4">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter font-['Orbitron'] leading-none">
            <span className="block text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">DOMINATE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-horde-blue via-cyan-400 to-white drop-shadow-[0_0_20px_rgba(0,240,255,0.6)]">
              YOUR FUTURE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-medium">
            <span className="text-horde-blue font-bold">ABIC Immigration</span> re-imagined for the ambitious.
            <br />
            Secure your study permit, PGWP, and Permanent Residency with the power of The Horde.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <button className="px-8 py-4 bg-horde-blue text-black font-bold rounded hover:bg-cyan-300 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(0,240,255,0.5)]">
              START ASSESSMENT
            </button>
            <button className="px-8 py-4 border border-horde-blue text-horde-blue font-bold rounded hover:bg-horde-blue/10 transition-all">
              OUR SERVICES
            </button>
          </div>
        </main>

        <Services />
        <Contact />

        {/* Footer info placeholder */}
        <footer className="py-8 text-xs text-gray-500 text-center w-full mt-auto">
          <p>ABIC Immigration | Dixie Park Mall, Mississauga | +1 (416) 333 8110</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
