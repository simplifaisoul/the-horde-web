import { Search, GraduationCap, Briefcase, Map } from 'lucide-react';

const services = [
    {
        title: "Student Visa",
        description: "Secure your study permit and begin your journey at Waterloo.",
        icon: <GraduationCap className="h-8 w-8 text-horde-blue" />
    },
    {
        title: "Post-Grad Work Permit",
        description: "Transition from student to professional with a PGWP.",
        icon: <Briefcase className="h-8 w-8 text-horde-blue" />
    },
    {
        title: "Express Entry",
        description: "Fast-track your permanent residency application.",
        icon: <Search className="h-8 w-8 text-horde-blue" />
    },
    {
        title: "Provincial Nomination",
        description: " leverage Ontario's opportunities for newcomers.",
        icon: <Map className="h-8 w-8 text-horde-blue" />
    }
];

export default function Services() {
    return (
        <section className="py-20 w-full px-4 relative z-10 bg-black/50 backdrop-blur-md" id="services">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    OUR ARSENAL
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="group p-6 border border-gray-800 bg-gray-900/50 rounded-xl hover:border-horde-blue/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)]">
                            <div className="mb-4 p-3 bg-black/40 rounded-lg w-fit group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-gray-400 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
