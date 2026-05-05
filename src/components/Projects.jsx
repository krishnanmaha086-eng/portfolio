import { useState } from "react";

function Projects() {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            img: "/project2.png",
            title: "E-Commerce Website",
            desc: "Modern shopping platform with product browsing, cart management, and responsive UI.",
            link: "https://e-commerce-psi-five-88.vercel.app/",
        },
        {
            img: "/project3.png",
            title: "Tea Shop Website",
            desc: "Elegant responsive tea shop website with modern layout and interactive sections.",
            link: "https://mayakrishnan.neocities.org/bootstrap/Tea%20shop",
        },
        {
            img: "/project4.png",
            title: "AI Chatbot",
            desc: "Smart conversational chatbot built with modern full stack technologies.",
            link: "https://ai-chatbot-wet8.vercel.app/",
        },
        {
            img: "/project5.png",
            title: "Portfolio Website",
            desc: "Professional personal portfolio built using React and Tailwind CSS.",
            link: "#",
        },
        {
            img: "/project1.png",
            title: "AI-Based Classroom Security Monitoring System",
            desc: "Intelligent monitoring system using face recognition, attendance automation, and unauthorized person detection.",
            link: "#",
        },
    ];

    const visibleProjects = showAll ? projects : projects.slice(0, 4);

    return (
        <section id="projects" className="max-w-7xl mx-auto px-10 py-16">
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-blue-400">
                    PROJECTS
                </h2>

                <button
                    onClick={() => setShowAll(!showAll)}
                    className="text-blue-400 hover:text-blue-300 transition text-lg cursor-pointer"
                >
                    {showAll ? "Show Less ↑" : "View All →"}
                </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {visibleProjects.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-slate-900/70 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 transition duration-300 block cursor-pointer"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-52 object-cover"
                        />

                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-3">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-7">
                                {project.desc}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Projects;