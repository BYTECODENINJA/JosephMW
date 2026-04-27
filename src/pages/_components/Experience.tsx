import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

type Experience = {
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    tags: string[];
};

const experiences: Experience[] = [
    {
        role: "Software Development Attachee",
        company: "Makueni Tech and Innovation Hub",
        location: "Makueni, Kenya",
        period: "Feb 2025 - Present",
        description: "Currently undertaking industrial attachment as part of my Computer Science degree program, gaining hands-on experience in modern web development and DevOps practices.",
        achievements: [
            "Developed responsive frontend web applications using modern frameworks and libraries",
            "Integrated and consumed RESTful APIs for dynamic data handling and real-time updates",
            "Implemented automated deployment workflows using CI/CD pipelines for efficient software delivery",
            "Collaborated with cross-functional teams to deliver production-ready solutions",
            "Gained practical experience in agile development methodologies and version control systems"
        ],
        tags: ["React", "REST APIs", "CI/CD", "Frontend Development", "DevOps", "Git"]
    }
];

const tagColors: Record<string, string> = {
    "React": "bg-blue-500/20 text-blue-300 border-blue-500/30",
    "REST APIs": "bg-green-500/20 text-green-300 border-green-500/30",
    "CI/CD": "bg-purple-500/20 text-purple-300 border-purple-500/30",
    "Frontend Development": "bg-sky-500/20 text-sky-300 border-sky-500/30",
    "DevOps": "bg-orange-500/20 text-orange-300 border-orange-500/30",
    "Git": "bg-red-500/20 text-red-300 border-red-500/30",
};

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl p-8 md:p-10 scroll-mt-24 lg:min-h-[calc(100vh-7rem)] lg:flex lg:flex-col lg:justify-center"
        >
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-1">
                        My Journey
                    </p>
                    <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        Where I&apos;ve worked and what I&apos;ve learned
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/30 to-transparent md:-translate-x-1/2" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative mb-12 last:mb-0"
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card md:-translate-x-1/2 z-10">
                                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                            </div>

                            {/* Content card */}
                            <div className={`ml-8 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                <div className="bg-white/5 rounded-2xl border border-white/5 p-6 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                    {/* Header */}
                                    <div className="mb-4">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="flex items-center gap-2 text-primary">
                                                <Briefcase size={18} />
                                                <span className="text-xs font-semibold tracking-wide uppercase">
                                                    Current Position
                                                </span>
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">
                                            {exp.role}
                                        </h3>
                                        <p className="text-lg font-semibold text-primary/90">
                                            {exp.company}
                                        </p>

                                        {/* Meta info */}
                                        <div className="flex flex-wrap gap-3 mt-3 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={14} />
                                                {exp.period}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {exp.description}
                                    </p>

                                    {/* Achievements */}
                                    <div className="space-y-2 mb-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.2 + i * 0.1 }}
                                                className="flex items-start gap-2 text-sm"
                                            >
                                                <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                                                <span className="text-muted-foreground">{achievement}</span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`px-3 py-1 text-xs font-medium rounded-lg border ${
                                                    tagColors[tag] ?? "bg-white/10 text-white/60 border-white/20"
                                                }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Future ambitions callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-primary/10 to-blue-600/5 rounded-2xl border border-primary/20 p-6 text-center"
                >
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Currently seeking opportunities to leverage my skills in{" "}
                        <span className="text-primary font-semibold">fullstack development</span> and{" "}
                        <span className="text-primary font-semibold">DevOps engineering</span> to build
                        impactful, scalable solutions. Open to full-time roles, internships, and freelance projects.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
