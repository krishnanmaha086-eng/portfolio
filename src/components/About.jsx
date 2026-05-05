function About() {
    return (
        <section id="about" className="max-w-7xl mx-auto px-10 py-16">
            <div className="grid lg:grid-cols-2 gap-8">

                {/* About */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition">
                    <h2 className="text-2xl font-bold mb-6 text-blue-400">
                        ABOUT ME
                    </h2>

                    <p className="text-slate-300 leading-8 mb-5">
                        I am a 3rd year Information Technology student with a strong
                        passion for full stack development.
                    </p>

                    <p className="text-slate-300 leading-8 mb-5">
                        I enjoy building web applications that are simple,
                        efficient, and impactful.
                    </p>

                    <p className="text-slate-300 leading-8">
                        I love turning ideas into real world solutions
                        through code and continuous learning.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-10 text-center">
                        <div>
                            <h3 className="text-3xl font-bold text-blue-400">5+</h3>
                            <p className="text-slate-400 text-sm mt-2">
                                Projects Built
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-400">6+</h3>
                            <p className="text-slate-400 text-sm mt-2">
                                Technologies
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-400">∞</h3>
                            <p className="text-slate-400 text-sm mt-2">
                                Learning
                            </p>
                        </div>
                    </div>
                </div>

                {/* Skills */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition">
                    <h2 className="text-2xl font-bold mb-8 text-blue-400">
                        SKILLS
                    </h2>

                    <div className="grid md:grid-cols-4 gap-8">

                        {/* Frontend */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-400 mb-5 uppercase tracking-wider">
                                Frontend
                            </h3>

                            <div className="space-y-4">
                                {[
                                    "HTML5",
                                    "CSS3",
                                    "JavaScript",
                                    "React",
                                    "Tailwind CSS",
                                    "Bootstrap",
                                ].map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 text-slate-200 hover:text-blue-400 transition"
                                    >
                                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Backend */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-400 mb-5 uppercase tracking-wider">
                                Backend
                            </h3>

                            <div className="space-y-4">
                                {["Node.js", "Express.js"].map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 text-slate-200 hover:text-blue-400 transition"
                                    >
                                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Programming */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-400 mb-5 uppercase tracking-wider">
                                Programming
                            </h3>

                            <div className="space-y-4">
                                {["Java", "Python"].map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 text-slate-200 hover:text-blue-400 transition"
                                    >
                                        <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="text-sm font-semibold text-slate-400 mb-5 uppercase tracking-wider">
                                Tools
                            </h3>

                            <div className="space-y-4">
                                {["Git", "GitHub", "VS Code", "LinkedIn"].map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 text-slate-200 hover:text-blue-400 transition"
                                    >
                                        <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;