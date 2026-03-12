import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button.tsx";
import { cn } from "../../lib/utils.ts";

type NavbarProps = {
    onHireMe: () => void;
};

const navLinks = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Interests", href: "interests" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
];

export default function Navbar({ onHireMe }: NavbarProps) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleNavClick = (href: string) => {
        const el = document.getElementById(href);
        el?.scrollIntoView({ behavior: "smooth" });
        setMobileOpen(false);
    };

    return (
        <div className="relative flex justify-center">
            <motion.div
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={cn(
                    "flex items-center gap-4 md:gap-6",
                    "bg-[oklch(0.17_0.025_255/0.88)] backdrop-blur-xl",
                    "border border-white/10 rounded-full px-5 py-2.5 shadow-2xl shadow-black/40"
                )}
            >
                {/* Logo */}
                <button
                    className="font-bold text-xl text-white"
                    onClick={() => handleNavClick("home")}
                >
                    Portfolio<span className="text-primary">.</span>
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-5">
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            onClick={() => handleNavClick(link.href)}
                            className="text-sm text-muted-foreground hover:text-white transition-colors font-medium"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <button className="hidden md:block text-muted-foreground hover:text-white transition-colors">
                        <Globe size={15} />
                    </button>
                    <Button
                        size="sm"
                        className="rounded-full text-sm font-bold px-5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
                        onClick={onHireMe}
                    >
                        Hire Me
                    </Button>
                    <button
                        className="md:hidden text-muted-foreground hover:text-white transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.div>

            {/* Mobile dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-14 left-0 right-0 bg-card border border-border rounded-2xl p-3 shadow-2xl z-50"
                    >
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => handleNavClick(link.href)}
                                className="block w-full text-left py-3 px-4 text-sm text-muted-foreground hover:text-white hover:bg-white/5 rounded-xl transition-colors font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
