import LightningBackground from './components/LightningBackground';
import Services from './components/Services';
import Contact from './components/Contact';
import { Facebook, Instagram, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Background Animation */}
      <LightningBackground hue={220} intensity={1} size={1} speed={1} />

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4">

        {/* Navigation / Header */}
        <nav className="absolute top-0 w-full p-6 flex justify-between items-center backdrop-blur-sm bg-black/20">
          <div className="text-2xl font-bold tracking-tighter text-horde-blue shadow-neon">
            THE HORDE
          </div>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/abicrcic" target="_blank" rel="noopener noreferrer" className="hover:text-horde-blue transition-colors">
              <Facebook />
            </a>
            {/* Add more socials as placeholders if needed */}
            <a href="#" className="hover:text-horde-blue transition-colors"><Instagram /></a>
            <a href="#" className="hover:text-horde-blue transition-colors"><Twitter /></a>
          </div>
        </nav>

        {/* Hero Content */}
        <main className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              DOMINATE YOUR FUTURE
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            State of the art immigration services for Waterloo Students.
            Join The Horde and secure your place in Canada.
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
