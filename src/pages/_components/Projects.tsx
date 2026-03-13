import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../../components/ui/button.tsx";
import { Badge } from "../../components/ui/badge.tsx";

type Project = {
    title: string;
    description: string;
    tags: string[];
    gradient: string;
    demo: string;
    code: string;
    icon: string;
};

const projects: Project[] = [
    {
        title: "Gaming Landing page",
        description: "A fully animated landing page for a gaming website with a clean and modern design. It features a dynamic navbar, a smooth scroll animation, a smooth parallax effect, and a fully responsive design.",
        tags: ["React", "Javascript", "GSAP"],
        gradient: "from-blue-600/30 to-purple-600/20",
        demo: "https://gaminglandingpage.vercel.app/",
        code: "https://github.com/BYTECODENINJA/gamingwebsite",
        icon: "🎮",
    },
    {
        title: "Windows Portfolio",
        description: "A windows UI looking Portfolio website for a fullstack developer with a clean and modern design. It features a dynamic resume section, a blog section, a contact form etc all represented in windows UI design.",
        tags: ["Tailwind CSS", "Next.js", "React", "javascript"],
        gradient: "from-sky-600/30 to-blue-600/20",
        demo: "https://windows-portfolio-ruby.vercel.app/",
        code: "https://github.com/BYTECODENINJA/WindowsPortfolio",
        icon: "🪟",
    },
    {
        title: "AI Content Generator",
        description: "AI-powered content generation tool using Python, FastAPI, and OpenAI GPT.",
        tags: ["Python", "FastAPI", "React"],
        gradient: "from-violet-600/30 to-pink-600/20",
        demo: "#",
        code: "#",
        icon: "🤖",
    },
    {
        title: "Real-Time Chat App",
        description: "WebSocket-powered real-time chat with rooms, direct messaging, and file sharing.",
        tags: ["Node.js", "Socket.io", "React"],
        gradient: "from-green-600/30 to-emerald-600/20",
        demo: "#",
        code: "#",
        icon: "💬",
    },
    {
        title: "Task Management System",
        description: "Collaborative task manager with Kanban board, deadlines, and team assignments.",
        tags: ["MERN", "TypeScript"],
        gradient: "from-orange-600/30 to-red-600/20",
        demo: "#",
        code: "#",
        icon: "📋",
    },
    {
        title: "Infrastructure Monitor",
        description: "Real-time server and container health monitoring with alerting and analytics.",
        tags: ["Docker", "Node.js", "MongoDB"],
        gradient: "from-teal-600/30 to-cyan-600/20",
        demo: "#",
        code: "#",
        icon: "📊",
    },
];

const tagColors: Record<string, string> = {
    "React": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Node.js": "bg-green-500/20 text-green-300 border-green-500/30",
    "MongoDB": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "TypeScript": "bg-blue-400/20 text-blue-200 border-blue-400/30",
    "Python": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "Docker": "bg-sky-500/20 text-sky-300 border-sky-500/30",
    "K8s": "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    "FastAPI": "bg-teal-500/20 text-teal-300 border-teal-500/30",
    "Socket.io": "bg-gray-400/20 text-gray-300 border-gray-400/30",
    "MERN": "bg-orange-500/20 text-orange-300 border-orange-500/30",
};

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl p-8 md:p-10 scroll-mt-24 lg:min-h-[calc(100vh-7rem)] lg:flex lg:flex-col lg:justify-center">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-1">
                        My Recent Work
                    </p>
                    <h2 className="text-3xl font-bold text-white">My Projects</h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        A showcase of my best recent work
                    </p>
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            whileHover={{ y: -5 }}
                            className="group bg-white/5 rounded-2xl border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-300"
                        >
                            {/* Project thumbnail */}
                            <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                                <span className="text-6xl">{project.icon}</span>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Card content */}
                            <div className="p-5 space-y-3">
                                <h3 className="font-bold text-white text-base group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className={`text-xs px-2 py-0.5 rounded-md border ${tagColors[tag] ?? "bg-white/10 text-white/60 border-white/20"}`}
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex gap-2 pt-1">
                                    <Button
                                        size="sm"
                                        className="flex-1 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20 gap-1.5"
                                        onClick={() => window.open(project.demo, "_blank")}
                                    >
                                        <ExternalLink size={12} />
                                        Demo
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="secondary"
                                        className="flex-1 rounded-xl text-xs font-bold bg-white/10 text-white hover:bg-white/20 border border-white/10 gap-1.5"
                                        onClick={() => window.open(project.code, "_blank")}
                                    >
                                        <Github size={12} />
                                        Code
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
