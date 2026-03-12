import { motion } from "motion/react";
import { ArrowRight, Code2, Server, GitBranch } from "lucide-react";
import { Button } from "../../components/ui/button.tsx";

const stats = [
    { value: "3+", label: "Years Experience", icon: Code2 },
    { value: "20+", label: "Projects Completed", icon: Server },
    { value: "10+", label: "Technologies", icon: GitBranch },
];

export default function About() {
    const scrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="about" className="relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl p-8 md:p-10 scroll-mt-24 h-full lg:min-h-[calc(100vh-7rem)] lg:flex lg:flex-col lg:justify-center">
            {/* Background decoration */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                {/* Character illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex justify-center"
                >
                    {/* Star decoration */}
                    <div className="relative">
                        <svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 300 300"
                            fill="none"
                            style={{ filter: "drop-shadow(0 0 30px rgba(249,115,22,0.4))" }}
                        >
                            <path
                                d="M150 20L175 110L265 85L200 155L245 240L150 195L55 240L100 155L35 85L125 110Z"
                                fill="oklch(0.72 0.19 42 / 0.2)"
                                stroke="oklch(0.72 0.19 42 / 0.4)"
                                strokeWidth="1"
                            />
                        </svg>
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-56 h-56 md:w-64 md:h-64"
                        >
                            <img
                                src="https://cdn.hercules.app/file_k3rIdAddCrpltCJrDV420Vs2"
                                alt="About Joseph"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-6"
                >
                    <div>
                        <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-1">
                            Who I Am
                        </p>
                        <h2 className="text-3xl font-bold text-white">About Me</h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                        I&apos;m Joseph Mulwa, a passionate Fullstack Developer and DevOps Engineer with a
                        strong foundation in the MERN stack and cloud-native technologies. I love
                        architecting scalable systems, automating deployments, and crafting
                        beautiful user experiences. When I&apos;m not coding, I&apos;m exploring new
                        technologies and contributing to open source.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                        {stats.map(({ value, label, icon: Icon }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 + 0.3 }}
                                className="bg-white/5 rounded-2xl p-3 text-center border border-white/5"
                            >
                                <Icon size={18} className="text-primary mx-auto mb-1" />
                                <p className="text-xl font-bold text-primary">{value}</p>
                                <p className="text-xs text-muted-foreground leading-tight">{label}</p>
                            </motion.div>
                        ))}
                    </div>

                    <Button
                        onClick={scrollToProjects}
                        className="rounded-full px-6 font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 gap-2"
                    >
                        See My Work
                        <ArrowRight size={16} />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
