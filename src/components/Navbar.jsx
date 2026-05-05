import { useState } from "react";

function Navbar() {
    const [active, setActive] = useState("home");

    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Education", id: "education" },
        { name: "Contact", id: "contact" },
    ];

    const handleScroll = (id) => {
        setActive(id);

        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-10 py-5 flex justify-between items-center">

                {/* Logo */}
                <div
                    onClick={() => handleScroll("home")}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-xl font-bold shadow-lg shadow-blue-500/20">
                        M
                    </div>

                    <div>
                        <h1 className="text-xl font-bold">
                            Mayakrishnan <span className="text-blue-500">G</span>
                        </h1>

                        <p className="text-xs text-slate-400">
                            Full Stack Developer
                        </p>
                    </div>
                </div>

                {/* Menu */}
                <ul className="hidden md:flex items-center gap-3 bg-slate-900/70 border border-slate-800 px-3 py-2 rounded-full">
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => handleScroll(item.id)}
                            className={`px-5 py-2 rounded-full cursor-pointer transition duration-300 ${active === item.id
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                                }`}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    download
                    className="hidden md:block px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition font-medium shadow-lg shadow-blue-500/20"
                >
                    Download Resume
                </a>

            </div>
        </nav>
    );
}

export default Navbar;