import { motion, useInView } from "motion/react";
import { useRef } from "react";

type Skill = {
    name: string;
    level: number;
    color: string;
    bg: string;
    abbr: string;
};

const skills: Skill[] = [
    { name: "React", level: 92, color: "bg-blue-500", bg: "bg-blue-500/15 text-blue-400", abbr: "Re" },
    { name: "Node.js", level: 88, color: "bg-green-500", bg: "bg-green-500/15 text-green-400", abbr: "No" },
    { name: "TypeScript", level: 90, color: "bg-blue-400", bg: "bg-blue-400/15 text-blue-300", abbr: "TS" },
    { name: "MongoDB", level: 84, color: "bg-emerald-500", bg: "bg-emerald-500/15 text-emerald-400", abbr: "DB" },
    { name: "Python", level: 82, color: "bg-yellow-500", bg: "bg-yellow-500/15 text-yellow-400", abbr: "Py" },
    { name: "Docker", level: 87, color: "bg-sky-500", bg: "bg-sky-500/15 text-sky-400", abbr: "Do" },
    { name: "Kubernetes", level: 76, color: "bg-indigo-500", bg: "bg-indigo-500/15 text-indigo-400", abbr: "K8" },
    { name: "JavaScript", level: 95, color: "bg-amber-400", bg: "bg-amber-400/15 text-amber-300", abbr: "JS" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.4 }}
            className="bg-white/5 rounded-2xl p-4 border border-white/5 hover:border-primary/20 transition-colors group"
        >
            {/* Icon + name */}
            <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl ${skill.bg} flex items-center justify-center font-bold text-xs`}>
                    {skill.abbr}
                </div>
                <div>
                    <p className="font-semibold text-white text-sm">{skill.name}</p>
                    <p className="text-xs text-muted-foreground">Proficiency</p>
                </div>
                <span className="ml-auto text-xs font-bold text-primary">{skill.level}%</span>
            </div>

            {/* Progress bar */}
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    className={`h-full ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: index * 0.07 + 0.3, ease: "easeOut" }}
                />
            </div>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl p-8 md:p-10 scroll-mt-24 lg:min-h-[calc(100vh-7rem)] lg:flex lg:flex-col lg:justify-center">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-1">
                        What I Know
                    </p>
                    <h2 className="text-3xl font-bold text-white">My Skills</h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        Technologies and tools I use to build amazing web experiences
                    </p>
                </motion.div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {skills.map((skill, i) => (
                        <SkillCard key={skill.name} skill={skill} index={i} />
                    ))}
                </div>

                {/* Additional tools row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap gap-2 pt-2"
                >
                    {["Git", "GitHub", "Express.js", "REST API", "Linux", "AWS", "CI/CD"].map((tool) => (
                        <span
                            key={tool}
                            className="px-3 py-1 text-xs font-medium bg-white/5 text-muted-foreground border border-white/10 rounded-full hover:border-primary/30 hover:text-primary transition-colors"
                        >
                            {tool}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
