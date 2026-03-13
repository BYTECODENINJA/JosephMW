import { motion } from "motion/react";
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../../components/ui/button.tsx";
import { toast } from "sonner";

const socialLinks = [
    { icon: Github, href: "https://github.com/BYTECODENINJA", label: "GitHub", color: "hover:text-white" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/joseph-mulwa808", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto: josephmulwa8055@gmail.com", label: "Mail", color: "hover:text-red-500" },
];

const floatingTech = [
    { label: "React", color: "bg-blue-500/20 text-blue-400 border-blue-500/30", delay: 0 },
    { label: "Docker", color: "bg-sky-500/20 text-sky-400 border-sky-500/30", delay: 0.2 },
    { label: "Node", color: "bg-green-500/20 text-green-400 border-green-500/30", delay: 0.4 },
    { label: "K8s", color: "bg-blue-600/20 text-blue-300 border-blue-600/30", delay: 0.6 },
    { label: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30", delay: 0.8 },
    { label: "TS", color: "bg-blue-400/20 text-blue-300 border-blue-400/30", delay: 1.0 },
    { label: "Express", color: "bg-green-500/20 text-green-400 border-green-500/30", delay: 1.2 },
    { label: "MongoDB", color: "bg-green-500/20 text-green-400 border-green-500/30", delay: 1.4 },
];

export default function Hero() {
    const handleDownloadCV = () => {
        toast.info("CV download coming soon! Reach out via email for my latest CV.");
    };

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="home" className="relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl scroll-mt-24 px-8 py-12 md:px-14 md:py-16 lg:min-h-[calc(100vh-7rem)] lg:flex lg:flex-col lg:justify-center">
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left content */}
                <div className="space-y-6">
                    {/* Social icons */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-4"
                    >
                        {socialLinks.map(({ icon: Icon, href, label, color }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`text-muted-foreground ${color} transition-colors p-2 rounded-xl bg-white/5 hover:bg-white/10`}
                                aria-label={label}
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">
                            Welcome to my Portfolio
                        </p>
                        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
                            Hi, I&apos;m{" "}
                            <span className="text-primary">Joseph Mulwa</span>
                        </h1>
                        <div className="mt-3 flex items-center gap-3">
                            <div className="h-1 w-12 bg-primary rounded-full" />
                            <p className="text-lg text-muted-foreground font-medium">
                                Fullstack Developer &amp; DevOps Engineer
                            </p>
                        </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted-foreground leading-relaxed max-w-md"
                    >
                        Passionate about building scalable web applications and robust DevOps pipelines.
                        Specializing in the MERN stack, Python, and cloud-native technologies like Docker
                        and Kubernetes. Aiming on delivering end-to-end solutions that are both performant and maintainable.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button
                            onClick={handleDownloadCV}
                            className="rounded-full px-7 font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 gap-2"
                        >
                            <Download size={16} />
                            Download CV
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={scrollToContact}
                            className="rounded-full px-7 font-bold bg-white/10 text-white hover:bg-white/20 border border-white/20 gap-2"
                        >
                            <Mail size={16} />
                            Contact Me
                        </Button>
                    </motion.div>
                </div>

                {/* Right - character + floating tech */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative flex justify-center items-center"
                >
                    {/* Floating tech badges */}
                    {floatingTech.map((tech, i) => (
                        <motion.div
                            key={tech.label}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: tech.delay + 0.5, duration: 0.4, type: "spring" }}
                            style={{
                                position: "absolute",
                                top: `${[5, 10, 75, 70, 15, 60, 105, -10][i]}%`,
                                left: `${[5, 80, 82, 0, 45, 88, 40, 40][i]}%`,
                            }}
                            className={`px-3 py-1.5 rounded-xl border text-xs font-bold ${tech.color} backdrop-blur-sm shadow-lg`}
                        >
                            {tech.label}
                        </motion.div>
                    ))}

                    {/* Character image */}
                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <div className="w-72 h-72 md:w-80 md:h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-br from-primary/20 to-blue-500/10 p-2">
                            <img
                                src="https://cdn.hercules.app/file_tOvWr5IAip8H6B2zTm1BVZf2"
                                alt="Joseph Mulwa - Developer"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
                    </motion.div>

                    {/* Decorative orb */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
                </motion.div>
            </div>
        </section>
    );
}
