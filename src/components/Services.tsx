import { Search, GraduationCap, Briefcase, Map, ShieldCheck, Globe } from 'lucide-react';

const services = [
    {
        title: "Student Visa",
        description: "Your ticket to Waterloo. We navigate the bureaucracy so you can focus on your grades.",
        icon: <GraduationCap className="h-10 w-10 text-horde-blue" />,
        colSpan: "md:col-span-2"
    },
    {
        title: "Post-Grad Work Permit",
        description: "Don't let your hard work go to waste. Secure your PGWP and start your career in Canada.",
        icon: <Briefcase className="h-8 w-8 text-horde-blue" />,
        colSpan: "md:col-span-1"
    },
    {
        title: "Express Entry",
        description: "The fast track to Permanent Residency. meticulous profile building to maximize your CRS score.",
        icon: <Search className="h-8 w-8 text-white" />,
        colSpan: "md:col-span-1",
        special: true
    },
    {
        title: "Provincial Nomination",
        description: "Unlock Ontario's OINP streams. We identify opportunities others miss.",
        icon: <Map className="h-8 w-8 text-horde-blue" />,
        colSpan: "md:col-span-2"
    }
];

export default function Services() {
    return (
        <section className="py-24 w-full px-4 relative z-10" id="services">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-white mb-4 font-['Orbitron'] tracking-wider">
                        THE ARSENAL
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-['Rajdhani']">
                        Comprehensive immigration strategies designed for students who want to win.
                        Backed by ABIC's certified expertise.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`
                                group relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden
                                ${service.colSpan}
                                ${service.special
                                    ? 'bg-horde-blue border-horde-blue text-black hover:bg-cyan-300'
                                    : 'bg-black/40 border-white/10 hover:border-horde-blue/50 hover:bg-black/60 backdrop-blur-md'
                                }
                            `}
                        >
                            {/* Hover Gradient Effect */}
                            {!service.special && (
                                <div className="absolute inset-0 bg-gradient-to-br from-horde-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            )}

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-top-left">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className={`text-2xl font-bold mb-3 font-['Orbitron'] ${service.special ? 'text-black' : 'text-white'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-lg font-medium leading-relaxed ${service.special ? 'text-black/80' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Stat Card / Trust Indicator */}
                    <div className="md:col-span-3 bg-gradient-to-r from-gray-900 to-black border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <ShieldCheck className="h-12 w-12 text-horde-blue" />
                            <div>
                                <h4 className="text-xl font-bold text-white font-['Orbitron']">RCIC Certified</h4>
                                <p className="text-gray-400">Regulated Canadian Immigration Consultant</p>
                            </div>
                        </div>
                        <div className="h-full w-px bg-white/10 hidden md:block"></div>
                        <div className="flex items-center gap-4">
                            <Globe className="h-12 w-12 text-horde-blue" />
                            <div>
                                <h4 className="text-xl font-bold text-white font-['Orbitron']">Global Reach</h4>
                                <p className="text-gray-400">Offices in Canada & Malaysia</p>
                            </div>
                        </div>
                        <div>
                            <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-horde-blue text-horde-blue font-bold rounded hover:bg-horde-blue hover:text-black transition-all font-['Orbitron']">
                                VERIFY STATUS
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
