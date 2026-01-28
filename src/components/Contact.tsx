export default function Contact() {
    return (
        <section className="py-20 w-full px-4 relative z-10" id="contact">
            <div className="max-w-4xl mx-auto text-center border border-horde-blue/30 bg-horde-blue/5 rounded-2xl p-12 backdrop-blur-sm">
                <h2 className="text-3xl font-bold text-white mb-8">Ready to Join The Horde?</h2>
                <div className="space-y-6 text-gray-300">
                    <p className="text-lg">
                        Visit our HQ: <span className="text-white font-semibold">Dixie Park Mall, 1550 South Gateway Rd., Unit 318, Mississauga ON</span>
                    </p>
                    <p className="text-lg">
                        Call for Backup: <a href="tel:+14163338110" className="text-horde-blue hover:underline font-bold">+1 (416) 333 8110</a>
                    </p>
                    <div className="pt-8">
                        <button className="px-10 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                            BOOK CONSULTATION
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
