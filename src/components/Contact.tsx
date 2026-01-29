import { MapPin, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-24 w-full px-4 relative z-10" id="contact">
            {/* Cyberpunk Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-horde-blue/50 to-transparent"></div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
                {/* Info Card */}
                <div className="flex-1 border border-white/10 bg-black/60 backdrop-blur-xl rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden group">
                    {/* Hover glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-horde-blue/20 to-purple-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>

                    <div className="relative z-10">
                        <h2 className="text-5xl font-black text-white mb-8 font-['Orbitron'] leading-tight">
                            JOIN THE <span className="text-horde-blue">HORDE</span>
                        </h2>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-horde-blue">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-['Orbitron'] tracking-widest mb-1">HEADQUARTERS</p>
                                    <p className="text-lg text-white">Dixie Park Mall, Unit 318</p>
                                    <p className="text-gray-400">1550 South Gateway Rd., Mississauga ON</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/5 rounded-lg text-horde-blue">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 font-['Orbitron'] tracking-widest mb-1">HOTLINE</p>
                                    <a href="tel:+14163338110" className="text-2xl font-bold text-white hover:text-horde-blue transition-colors">
                                        +1 (416) 333 8110
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Card */}
                <div className="flex-1 bg-horde-blue text-black p-10 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black font-['Orbitron'] mb-4">READY TO DOMINATE?</h3>
                        <p className="text-lg font-medium mb-8 opacity-80 max-w-sm mx-auto">
                            Stop waiting. Start your application today with our certified experts.
                        </p>
                        <button className="px-12 py-4 bg-black text-white font-bold text-lg rounded hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] font-['Orbitron'] tracking-widest">
                            BOOK CONSULTATION
                        </button>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
                </div>
            </div>
        </section>
    );
}
