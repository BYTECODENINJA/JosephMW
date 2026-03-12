import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "../../components/ui/button.tsx";
import { Input } from "../../components/ui/input.tsx";
import { Textarea } from "../../components/ui/textarea.tsx";
import { toast } from "sonner";


const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const contactInfo = [
    { icon: Mail, value: "josephmulwa@email.com", label: "Email" },
    { icon: Phone, value: "+254 700 000 000", label: "Phone" },
    { icon: MapPin, value: "Nairobi, Kenya", label: "Location" },
];

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
};

const initialForm: FormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
};

export default function Contact() {
    const [form, setForm] = useState<FormState>(initialForm);
    const [sending, setSending] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.firstName || !form.email || !form.message) {
            toast.error("Please fill in required fields.");
            return;
        }
        setSending(true);
        // Simulate a brief delay for UX feedback
        await new Promise((resolve) => setTimeout(resolve, 800));
        toast.success("Message sent! I'll get back to you soon.");
        setForm(initialForm);
        setSending(false);
    };

    return (
        <section id="contact" className="relative overflow-hidden rounded-3xl bg-card border border-white/5 shadow-2xl p-8 md:p-10 scroll-mt-24 lg:min-h-[calc(100vh-7rem)] lg:flex lg:flex-col lg:justify-center">
            {/* Background decoration */}
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-primary/8 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-1">
                        Let&apos;s Work Together
                    </p>
                    <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
                    <p className="text-muted-foreground text-sm mt-2">
                        Let&apos;s discuss your project
                    </p>
                </motion.div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Left - Character + contact info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Character */}
                        <div className="relative flex justify-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-blue-500/10">
                                    <img
                                        src="https://cdn.hercules.app/file_tOvWr5IAip8H6B2zTm1BVZf2"
                                        alt="Contact Joseph"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Online indicator */}
                                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/20 border border-green-500/30 rounded-full px-3 py-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    <span className="text-xs text-green-400 font-medium">Available</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Contact info */}
                        <div className="space-y-3">
                            {contactInfo.map(({ icon: Icon, value, label }) => (
                                <div key={label} className="flex items-center gap-3 text-sm">
                                    <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                                        <Icon size={14} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">{label}</p>
                                        <p className="text-white font-medium">{value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social links */}
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:border-primary/30 hover:bg-primary/10 transition-all"
                                    aria-label={label}
                                >
                                    <Icon size={16} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-muted-foreground">
                                    First Name <span className="text-primary">*</span>
                                </label>
                                <Input
                                    name="firstName"
                                    value={form.firstName}
                                    onChange={handleChange}
                                    placeholder="Joseph"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 rounded-xl"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-muted-foreground">
                                    Last Name
                                </label>
                                <Input
                                    name="lastName"
                                    value={form.lastName}
                                    onChange={handleChange}
                                    placeholder="Mulwa"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 rounded-xl"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground">
                                Email Address <span className="text-primary">*</span>
                            </label>
                            <Input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 rounded-xl"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground">
                                Phone Number
                            </label>
                            <Input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="+254 700 000 000"
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 rounded-xl"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-medium text-muted-foreground">
                                Your Message <span className="text-primary">*</span>
                            </label>
                            <Textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows={4}
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-primary/50 rounded-xl resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={sending}
                            className="w-full rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30 gap-2 py-5"
                        >
                            {sending ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send size={16} />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </motion.form>
                </div>

                {/* Footer */}
                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                        <p className="font-bold text-white">
                            Portfolio<span className="text-primary">.</span>
                        </p>
                        <p className="text-xs text-muted-foreground">
                            Fullstack Developer &amp; DevOps Engineer
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} Joseph Mulwa. All rights reserved.
                    </p>
                    <div className="flex gap-2">
                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-primary/20 transition-all"
                                aria-label={label}
                            >
                                <Icon size={14} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
