import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "../../components/ui/button.tsx";
import { Badge } from "../../components/ui/badge.tsx";

type Project = {
    title: string;
    description: string;
    tags: string[];
    gradient: string;
    demo?: string;
    code: string;
    icon: string;
};

const projects: Project[] = [
    {
        title: "Gaming Landing page",
        description: "A fully animated landing page for a gaming website with a clean and modern design. Features a dynamic navbar, smooth scroll animation, parallax effect, and fully responsive layout.",
        tags: ["React", "Javascript", "GSAP"],
        gradient: "from-blue-600/30 to-purple-600/20",
        demo: "https://gaminglandingpage.vercel.app/",
        code: "https://github.com/BYTECODENINJA/gamingwebsite",
        icon: "🎮",
    },
    {
        title: "Windows Portfolio",
        description: "A Windows UI-style portfolio website for a fullstack developer. Features a dynamic resume section, blog section, contact form, and more — all in a Windows-inspired design.",
        tags: ["Tailwind CSS", "Next.js", "React", "javascript"],
        gradient: "from-sky-600/30 to-blue-600/20",
        demo: "https://windows-portfolio-ruby.vercel.app/",
        code: "https://github.com/BYTECODENINJA/WindowsPortfolio",
        icon: "🪟",
    },
    {
        title: "Hangman Game",
        description: "My first project after learning JavaScript. A fun, interactive web-based Hangman game built with HTML, CSS, and JavaScript.",
        tags: ["HTML", "CSS", "javascript"],
        gradient: "from-violet-600/30 to-pink-600/20",
        demo: "https://bytecodeninja.github.io/hangman-game/",
        code: "https://github.com/BYTECODENINJA/hangman-game",
        icon: "🤖",
    },
];

const incompleteProjects: Project[] = [
    {
        title: "ExpenseTracker",
        description: "A modern finance tracker with a clean minimalist UI and detailed financial statistics.",
        tags: ["Node.js", "MongoDb", "React", "javascript"],
        gradient: "from-green-600/30 to-emerald-600/20",
        code: "https://github.com/BYTECODENINJA/ExpenseTracker",
        icon: "💵",
    },
    {
        title: "Productivity Application",
        description: "An app that helps in managing events, keeping journals, taking notes and other productivity tools.",
        tags: ["Javascript", "TailwindCss", "TypeScript"],
        gradient: "from-orange-600/30 to-red-600/20",
        code: "https://github.com/BYTECODENINJA/neo-focus",
        icon: "📋",
    },
    {
        title: "Car Rental Website",
        description: "A car rental platform with vehicle listings, booking management, and a modern UI.",
        tags: ["Typescript", "Node.js", "css", "Supabase"],
        gradient: "from-teal-600/30 to-cyan-600/20",
        code: "https://github.com/BYTECODENINJA/autogram",
        icon: "🚗",
    },
];

const tagColors: Record<string, string> = {
    "React":       "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "Node.js":     "bg-green-500/20 text-green-300 border-green-500/30",
    "MongoDB":     "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "MongoDb":     "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    "TypeScript":  "bg-blue-400/20 text-blue-200 border-blue-400/30",
    "Typescript":  "bg-blue-400/20 text-blue-200 border-blue-400/30",
    "Python":      "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    "Docker":      "bg-sky-500/20 text-sky-300 border-sky-500/30",
    "K8s":         "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    "Javascript":  "bg-amber-400/20 text-amber-300 border-amber-400/30",
    "javascript":  "bg-amber-400/20 text-amber-300 border-amber-400/30",
    "css":         "bg-sky-400/20 text-sky-300 border-sky-400/30",
    "CSS":         "bg-sky-400/20 text-sky-300 border-sky-400/30",
    "HTML":        "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Tailwind CSS":"bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    "TailwindCss": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    "Next.js":     "bg-gray-400/20 text-gray-300 border-gray-400/30",
    "GSAP":        "bg-green-400/20 text-green-300 border-green-400/30",
    "Supabase":    "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
    "FastAPI":     "bg-teal-500/20 text-teal-300 border-teal-500/30",
    "Socket.io":   "bg-gray-400/20 text-gray-300 border-gray-400/30",
    "MERN":        "bg-orange-500/20 text-orange-300 border-orange-500/30",
};

// Reusable project card
function ProjectCard({ project, i }: { project: Project; i: number }) {
    return (
        <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ y: -5 }}
            className="group bg-white/5 rounded-2xl border border-white/5 overflow-hidden hover:border-primary/20 transition-all duration-300"
        >
            {/* Thumbnail */}
            <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <span className="text-6xl">{project.icon}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Content */}
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
                    {project.demo && (
                        <Button
                            size="sm"
                            className="flex-1 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20 gap-1.5"
                            onClick={() => window.open(project.demo, "_blank")}
                        >
                            <ExternalLink size={12} />
                            Demo
                        </Button>
                    )}
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
    );
}

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl p-8 md:p-10 scroll-mt-24 lg:min-h-[calc(100vh-7rem)] lg:flex lg:flex-col lg:justify-center"
        >
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

                {/* Completed projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} i={i} />
                    ))}
                </div>

                {/* Works in progress */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-white text-center"
                >
                    Works In Progress
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {incompleteProjects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
