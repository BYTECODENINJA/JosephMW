import { motion } from "motion/react";
import {
    Cloud,
    GitBranch,
    Github,
    Brain,
    Shield,
    Layers,
    Zap,
    Box,
    Database,
    Code2,
    Terminal,
    Wrench,
} from "lucide-react";

type Interest = {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    title: string;
    description: string;
    colorClass: string;
    bgClass: string;
};

const interests: Interest[] = [
    {
        icon: Cloud,
        title: "Cloud Architecture",
        description: "Designing scalable, resilient cloud infrastructure on AWS and GCP",
        colorClass: "text-sky-400",
        bgClass: "bg-sky-500/10 border-sky-500/20",
    },
    {
        icon: GitBranch,
        title: "DevOps & CI/CD",
        description: "Automating pipelines, deployments, and infrastructure as code",
        colorClass: "text-orange-400",
        bgClass: "bg-orange-500/10 border-orange-500/20",
    },
    {
        icon: Brain,
        title: "AI & Machine Learning",
        description: "Exploring LLMs, neural networks, and intelligent automation systems",
        colorClass: "text-purple-400",
        bgClass: "bg-purple-500/10 border-purple-500/20",
    },
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Securing applications, APIs, and infrastructure against modern threats",
        colorClass: "text-red-400",
        bgClass: "bg-red-500/10 border-red-500/20",
    },
    {
        icon: Box,
        title: "Container Orchestration",
        description: "Kubernetes, Docker Swarm, and microservices architecture at scale",
        colorClass: "text-blue-400",
        bgClass: "bg-blue-500/10 border-blue-500/20",
    },
    {
        icon: Github,
        title: "Open Source",
        description: "Contributing to and building open-source tools and libraries",
        colorClass: "text-emerald-400",
        bgClass: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
        icon: Layers,
        title: "System Design",
        description: "Architecting distributed systems, databases, and APIs at scale",
        colorClass: "text-teal-400",
        bgClass: "bg-teal-500/10 border-teal-500/20",
    },
    {
        icon: Zap,
        title: "Web Performance",
        description: "Optimizing load times, Core Web Vitals, and rendering strategies",
        colorClass: "text-yellow-400",
        bgClass: "bg-yellow-500/10 border-yellow-500/20",
    },
    {
        icon: Database,
        title: "Database Engineering",
        description: "Efficient schemas, query optimization, and caching strategies",
        colorClass: "text-indigo-400",
        bgClass: "bg-indigo-500/10 border-indigo-500/20",
    },
    {
        icon: Code2,
        title: "API Development",
        description: "RESTful, GraphQL, and WebSocket APIs with clean design patterns",
        colorClass: "text-pink-400",
        bgClass: "bg-pink-500/10 border-pink-500/20",
    },
    {
        icon: Terminal,
        title: "Linux & Networking",
        description: "Deep knowledge of Linux internals, shell scripting, and networking",
        colorClass: "text-slate-300",
        bgClass: "bg-slate-500/10 border-slate-500/20",
    },
    {
        icon: Wrench,
        title: "Developer Tooling",
        description: "Building CLI tools and productivity tools for developer workflows",
        colorClass: "text-amber-400",
        bgClass: "bg-amber-500/10 border-amber-500/20",
    },
];

export default function Interests() {
    return (
        <section
            id="interests"
            className="relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl p-8 md:p-10 scroll-mt-24 lg:min-h-[calc(100vh-7rem)] lg:flex lg:flex-col lg:justify-center"
        >
            {/* Background decoration */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-1">
                        What Drives Me
                    </p>
                    <h2 className="text-3xl font-bold text-white">My Interests</h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        Areas of technology I&apos;m passionate about and continuously exploring
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {interests.map((interest, i) => {
                        const Icon = interest.icon;
                        return (
                            <motion.div
                                key={interest.title}
                                initial={{ opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.35 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className={`rounded-2xl border p-4 ${interest.bgClass} backdrop-blur-sm group cursor-default transition-shadow duration-300 hover:shadow-lg`}
                            >
                                <div className="flex items-start gap-3">
                                    {/* Icon */}
                                    <div className="p-2 rounded-xl bg-white/5 flex-shrink-0">
                                        <Icon size={20} className={interest.colorClass} />
                                    </div>
                                    {/* Text */}
                                    <div className="min-w-0">
                                        <h3 className="font-semibold text-sm text-white leading-snug">
                                            {interest.title}
                                        </h3>
                                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                                            {interest.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
