function Hero() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section
            id="home"
            className="max-w-7xl mx-auto px-10 py-24 grid md:grid-cols-2 gap-10 items-center"
        >
            {/* Left */}
            <div>
                <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500 text-blue-400 text-sm mb-6">
                    Open to Opportunities
                </span>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    Mayakrishnan <span className="text-blue-500">G</span>
                </h1>

                <h2 className="text-2xl text-slate-300 mt-4">
                    Full Stack Developer | Software Engineering Student
                </h2>

                <p className="mt-6 text-lg text-slate-400 leading-8 max-w-xl">
                    Crafting modern digital experiences through clean code,
                    thoughtful design, and innovative solutions.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex gap-5 flex-wrap">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="px-6 py-3 bg-blue-600 rounded-xl hover:scale-105 transition cursor-pointer"
                    >
                        View Projects
                    </button>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="px-6 py-3 border border-slate-600 rounded-xl hover:border-blue-500 transition cursor-pointer"
                    >
                        Contact Me
                    </button>
                </div>
            </div>

            {/* Right */}
            <div className="flex justify-center">
                <div className="relative w-80 h-80">
                    {/* Glow border */}
                    <div className="absolute inset-0 rounded-full border-4 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.9),0_0_40px_rgba(59,130,246,0.6)] animate-pulse"></div>

                    {/* Photo */}
                    <div className="absolute inset-3 rounded-full overflow-hidden bg-slate-900">
                        <img
                            src="/my-photo.png"
                            alt="Mayakrishnan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;