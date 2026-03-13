import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "./_components/Navbar.tsx";
import Hero from "./_components/Hero.tsx";
import About from "./_components/About.tsx";
import Skills from "./_components/Skills.tsx";
import Interests from "./_components/Interests.tsx";
import Projects from "./_components/Projects.tsx";
import Contact from "./_components/Contact.tsx";
import HireModal from "./_components/HireModal.tsx";

// Wraps each section with a smooth scroll-reveal animation
function SectionReveal({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}

export default function Index() {
    const [hireModalOpen, setHireModalOpen] = useState(false);

    return (
        <div className="min-h-screen relative overflow-x-hidden">
            {/* Fixed ambient background glows */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px]" />
                <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
            </div>

            {/* Fixed floating navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:px-8 pointer-events-none">
                <div className="w-full max-w-[1600px] pointer-events-auto">
                    <Navbar onHireMe={() => setHireModalOpen(true)} />
                </div>
            </header>

            {/* Scrollable main content */}
            <main className="relative z-10 max-w-[1600px] mx-auto px-4 md:px-8 pt-24 pb-12">
                <div className="flex flex-col gap-5">

                    {/* Hero – individual card */}
                    <SectionReveal>
                        <Hero />
                    </SectionReveal>

                    {/* About + Skills – two individual cards side by side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <SectionReveal delay={0.05}>
                            <About />
                        </SectionReveal>
                        <SectionReveal delay={0.15}>
                            <Skills />
                        </SectionReveal>
                    </div>

                    {/* Interests – individual card */}
                    <SectionReveal>
                        <Interests />
                    </SectionReveal>

                    {/* Projects – individual card */}
                    <SectionReveal>
                        <Projects />
                    </SectionReveal>

                    {/* Contact – individual card */}
                    <SectionReveal>
                        <Contact />
                    </SectionReveal>

                </div>
            </main>

            {/* Hire Me Modal */}
            <HireModal open={hireModalOpen} onClose={() => setHireModalOpen(false)} />
        </div>
    );
}
