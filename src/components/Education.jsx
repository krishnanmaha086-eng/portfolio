function Education() {
    const certificates = [
        {
            img: "/ncc-logo.png",
            title: "Completed NCC 'C' Training",
            subtitle: "Official certificate pending issuance",
            link: "/cert2.png",
        },
        {
            img: "/internship.png",
            title: "Web Development",
            subtitle: "Keyan Technologies",
            link: "/cert1.png",
        },
        {
            img: "/conference.png",
            title: "National Conference",
            subtitle: "VTHT Participation",
            link: "/cert3.png",
        },
    ];

    return (
        <section
            id="education"
            className="max-w-7xl mx-auto px-10 py-16"
        >
            <div className="grid lg:grid-cols-2 gap-6">

                {/* Education */}
                {/* Education */}
                <a
                    href="https://www.velhightech.com/"
                    className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 hover:-translate-y-1 transition block cursor-pointer"
                >
                    <h2 className="text-2xl font-bold text-blue-400 mb-8">
                        EDUCATION
                    </h2>

                    <div className="flex items-start gap-5">
                        {/* College Logo */}
                        <div className="w-20 h-20 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden">
                            <img
                                src="/VTHT-logo.png"
                                alt="College Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Details */}
                        <div>
                            <h3 className="text-xl font-semibold leading-8">
                                Vel Tech High Tech Engineering College
                            </h3>

                            <p className="text-slate-400 mt-2">
                                (Dr. Rangarajan Dr. Sakunthala Engineering College)
                            </p>

                            <p className="text-blue-400 mt-4 font-medium">
                                B.Tech – Information Technology
                            </p>

                            <div className="flex flex-wrap gap-5 mt-5 text-sm text-slate-400">
                                <span>📅 2022 – 2026 (Expected)</span>
                                <span>📍 Chennai, Tamil Nadu</span>
                            </div>
                        </div>
                    </div>
                </a>
                {/* Certifications */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition">
                    <h2 className="text-2xl font-bold text-blue-400 mb-8">
                        CERTIFICATIONS & ACHIEVEMENTS
                    </h2>

                    <div className="grid grid-cols-3 gap-6 text-center">
                        {certificates.map((cert, index) => (
                            <a
                                key={index}
                                href={cert.link}
                                className="hover:-translate-y-2 transition duration-300 cursor-pointer block"
                            >
                                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white p-2 flex items-center justify-center overflow-hidden shadow-lg">
                                    <img
                                        src={cert.img}
                                        alt={cert.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <h3 className="font-semibold">
                                    {cert.title}
                                </h3>

                                <p className="text-slate-400 text-sm mt-2 leading-6">
                                    {cert.subtitle}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Education;