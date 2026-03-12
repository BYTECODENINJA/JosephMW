import { useState } from "react";
import { Send, Briefcase, UserCheck } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "../../components/ui/dialog.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs.tsx";
import { Input } from "../../components/ui/input.tsx";
import { Textarea } from "../../components/ui/textarea.tsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select.tsx";
import { Button } from "../../components/ui/button.tsx";
import { Label } from "../../components/ui/label.tsx";
import { toast } from "sonner";


type ProjectForm = {
    name: string;
    email: string;
    company: string;
    projectType: string;
    budget: string;
    timeline: string;
    description: string;
    technologies: string;
};

type EmploymentForm = {
    name: string;
    email: string;
    companyName: string;
    role: string;
    positionTitle: string;
    employmentType: string;
    workLocation: string;
    jobDescription: string;
    requiredSkills: string;
};

const initialProject: ProjectForm = {
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    technologies: "",
};

const initialEmployment: EmploymentForm = {
    name: "",
    email: "",
    companyName: "",
    role: "",
    positionTitle: "",
    employmentType: "",
    workLocation: "",
    jobDescription: "",
    requiredSkills: "",
};

type Props = { open: boolean; onClose: () => void };

// Reusable field wrapper
function Field({
                   label,
                   required,
                   children,
               }: {
    label: string;
    required?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div className="space-y-1.5">
            <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {label} {required && <span className="text-primary">*</span>}
            </Label>
            {children}
        </div>
    );
}

const inputCls =
    "bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 focus:ring-primary/20 rounded-xl h-10";
const selectContentCls = "bg-[oklch(0.2_0.03_255)] border-white/10 text-white";
const selectItemCls = "focus:bg-white/10 focus:text-white text-muted-foreground cursor-pointer";
const triggerCls = "bg-white/5 border-white/10 text-white rounded-xl h-10 focus:border-primary/60";

export default function HireModal({ open, onClose }: Props) {
    const [project, setProject] = useState<ProjectForm>(initialProject);
    const [employment, setEmployment] = useState<EmploymentForm>(initialEmployment);
    const [sending, setSending] = useState(false);

    const handleProjectChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setProject((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    const handleEmploymentChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setEmployment((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    const handleProjectSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!project.name || !project.email || !project.description) {
            toast.error("Please fill in Name, Email, and Description.");
            return;
        }
        setSending(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        toast.success("Project inquiry sent! I'll respond within 24 hours.");
        setProject(initialProject);
        setSending(false);
        onClose();
    };

    const handleEmploymentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!employment.name || !employment.email || !employment.jobDescription) {
            toast.error("Please fill in Name, Email, and Job Description.");
            return;
        }
        setSending(true);
        await new Promise((resolve) => setTimeout(resolve, 800));
        toast.success("Employment inquiry sent! I'll review and get back to you.");
        setEmployment(initialEmployment);
        setSending(false);
        onClose();
    };

    const SubmitButton = ({ label }: { label: string }) => (
        <Button
            type="submit"
            disabled={sending}
            className="w-full rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 h-11 gap-2 mt-1"
        >
            {sending ? (
                <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending…
                </>
            ) : (
                <>
                    <Send size={15} />
                    {label}
                </>
            )}
        </Button>
    );

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl bg-card border border-white/10 text-foreground p-0 overflow-hidden">
                {/* Header */}
                <DialogHeader className="px-7 pt-7 pb-0">
                    <DialogTitle className="text-2xl font-bold text-white">Hire Me</DialogTitle>
                    <DialogDescription className="text-muted-foreground text-sm mt-1">
                        Choose the type of engagement you&apos;re looking for
                    </DialogDescription>
                </DialogHeader>

                {/* Tabs */}
                <Tabs defaultValue="project" className="w-full">
                    <TabsList className="mx-7 mt-5 bg-white/5 border border-white/10 rounded-xl p-1 h-11 grid grid-cols-2">
                        <TabsTrigger
                            value="project"
                            className="rounded-lg text-sm font-semibold flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                        >
                            <Briefcase size={14} />
                            Project Based
                        </TabsTrigger>
                        <TabsTrigger
                            value="employment"
                            className="rounded-lg text-sm font-semibold flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all"
                        >
                            <UserCheck size={14} />
                            Employment
                        </TabsTrigger>
                    </TabsList>

                    {/* ── PROJECT FORM ── */}
                    <TabsContent
                        value="project"
                        className="px-7 pb-7 pt-5 max-h-[65vh] overflow-y-auto space-y-4"
                    >
                        <form onSubmit={handleProjectSubmit} className="space-y-4">
                            {/* Name + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field label="Name" required>
                                    <Input
                                        name="name"
                                        value={project.name}
                                        onChange={handleProjectChange}
                                        placeholder="Joseph Mulwa"
                                        className={inputCls}
                                    />
                                </Field>
                                <Field label="Email Address" required>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={project.email}
                                        onChange={handleProjectChange}
                                        placeholder="you@company.com"
                                        className={inputCls}
                                    />
                                </Field>
                            </div>

                            {/* Company */}
                            <Field label="Company / Organisation">
                                <Input
                                    name="company"
                                    value={project.company}
                                    onChange={handleProjectChange}
                                    placeholder="Acme Inc."
                                    className={inputCls}
                                />
                            </Field>

                            {/* Project Type + Budget */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field label="Project Type">
                                    <Select
                                        value={project.projectType}
                                        onValueChange={(v) => setProject((p) => ({ ...p, projectType: v }))}
                                    >
                                        <SelectTrigger className={triggerCls}>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent className={selectContentCls}>
                                            <SelectItem className={selectItemCls} value="web-app">Web Application</SelectItem>
                                            <SelectItem className={selectItemCls} value="mobile-app">Mobile App</SelectItem>
                                            <SelectItem className={selectItemCls} value="api-backend">API / Backend</SelectItem>
                                            <SelectItem className={selectItemCls} value="devops-cloud">DevOps / Cloud</SelectItem>
                                            <SelectItem className={selectItemCls} value="ai-ml">AI / Machine Learning</SelectItem>
                                            <SelectItem className={selectItemCls} value="ecommerce">E-Commerce</SelectItem>
                                            <SelectItem className={selectItemCls} value="dashboard">Dashboard / Analytics</SelectItem>
                                            <SelectItem className={selectItemCls} value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field label="Budget Range">
                                    <Select
                                        value={project.budget}
                                        onValueChange={(v) => setProject((p) => ({ ...p, budget: v }))}
                                    >
                                        <SelectTrigger className={triggerCls}>
                                            <SelectValue placeholder="Select budget" />
                                        </SelectTrigger>
                                        <SelectContent className={selectContentCls}>
                                            <SelectItem className={selectItemCls} value="under-1k">Under $1,000</SelectItem>
                                            <SelectItem className={selectItemCls} value="1k-5k">$1,000 – $5,000</SelectItem>
                                            <SelectItem className={selectItemCls} value="5k-10k">$5,000 – $10,000</SelectItem>
                                            <SelectItem className={selectItemCls} value="10k-25k">$10,000 – $25,000</SelectItem>
                                            <SelectItem className={selectItemCls} value="25k-plus">$25,000+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>

                            {/* Timeline */}
                            <Field label="Timeline">
                                <Select
                                    value={project.timeline}
                                    onValueChange={(v) => setProject((p) => ({ ...p, timeline: v }))}
                                >
                                    <SelectTrigger className={triggerCls}>
                                        <SelectValue placeholder="Select timeline" />
                                    </SelectTrigger>
                                    <SelectContent className={selectContentCls}>
                                        <SelectItem className={selectItemCls} value="asap">ASAP</SelectItem>
                                        <SelectItem className={selectItemCls} value="1-3months">1 – 3 months</SelectItem>
                                        <SelectItem className={selectItemCls} value="3-6months">3 – 6 months</SelectItem>
                                        <SelectItem className={selectItemCls} value="6-12months">6 – 12 months</SelectItem>
                                        <SelectItem className={selectItemCls} value="long-term">Long-term / Ongoing</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Field>

                            {/* Description */}
                            <Field label="Description" required>
                                <Textarea
                                    name="description"
                                    value={project.description}
                                    onChange={handleProjectChange}
                                    placeholder="Describe your project goals, features, and any specific requirements…"
                                    rows={3}
                                    className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 rounded-xl resize-none"
                                />
                            </Field>

                            {/* Preferred Technologies */}
                            <Field label="Preferred Technologies">
                                <Input
                                    name="technologies"
                                    value={project.technologies}
                                    onChange={handleProjectChange}
                                    placeholder="e.g. React, Node.js, Docker, Python"
                                    className={inputCls}
                                />
                            </Field>

                            <SubmitButton label="Submit Project Inquiry" />
                        </form>
                    </TabsContent>

                    {/* ── EMPLOYMENT FORM ── */}
                    <TabsContent
                        value="employment"
                        className="px-7 pb-7 pt-5 max-h-[65vh] overflow-y-auto space-y-4"
                    >
                        <form onSubmit={handleEmploymentSubmit} className="space-y-4">
                            {/* Name + Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field label="Name" required>
                                    <Input
                                        name="name"
                                        value={employment.name}
                                        onChange={handleEmploymentChange}
                                        placeholder="Jane Smith"
                                        className={inputCls}
                                    />
                                </Field>
                                <Field label="Email Address" required>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={employment.email}
                                        onChange={handleEmploymentChange}
                                        placeholder="hr@company.com"
                                        className={inputCls}
                                    />
                                </Field>
                            </div>

                            {/* Company + Role */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field label="Company Name">
                                    <Input
                                        name="companyName"
                                        value={employment.companyName}
                                        onChange={handleEmploymentChange}
                                        placeholder="Tech Corp Ltd."
                                        className={inputCls}
                                    />
                                </Field>
                                <Field label="Role">
                                    <Input
                                        name="role"
                                        value={employment.role}
                                        onChange={handleEmploymentChange}
                                        placeholder="e.g. Engineering Manager"
                                        className={inputCls}
                                    />
                                </Field>
                            </div>

                            {/* Position Title */}
                            <Field label="Position Title">
                                <Input
                                    name="positionTitle"
                                    value={employment.positionTitle}
                                    onChange={handleEmploymentChange}
                                    placeholder="e.g. Senior Fullstack Engineer"
                                    className={inputCls}
                                />
                            </Field>

                            {/* Employment Type + Work Location */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Field label="Employment Type">
                                    <Select
                                        value={employment.employmentType}
                                        onValueChange={(v) =>
                                            setEmployment((p) => ({ ...p, employmentType: v }))
                                        }
                                    >
                                        <SelectTrigger className={triggerCls}>
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent className={selectContentCls}>
                                            <SelectItem className={selectItemCls} value="full-time">Full-time</SelectItem>
                                            <SelectItem className={selectItemCls} value="part-time">Part-time</SelectItem>
                                            <SelectItem className={selectItemCls} value="contract">Contract</SelectItem>
                                            <SelectItem className={selectItemCls} value="freelance">Freelance</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field label="Work Location">
                                    <Select
                                        value={employment.workLocation}
                                        onValueChange={(v) =>
                                            setEmployment((p) => ({ ...p, workLocation: v }))
                                        }
                                    >
                                        <SelectTrigger className={triggerCls}>
                                            <SelectValue placeholder="Select location" />
                                        </SelectTrigger>
                                        <SelectContent className={selectContentCls}>
                                            <SelectItem className={selectItemCls} value="remote">Remote</SelectItem>
                                            <SelectItem className={selectItemCls} value="on-site">On-site</SelectItem>
                                            <SelectItem className={selectItemCls} value="hybrid">Hybrid</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>

                            {/* Job Description */}
                            <Field label="Job Description" required>
                                <Textarea
                                    name="jobDescription"
                                    value={employment.jobDescription}
                                    onChange={handleEmploymentChange}
                                    placeholder="Describe the role, responsibilities, team, and what success looks like…"
                                    rows={3}
                                    className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground/50 focus:border-primary/60 rounded-xl resize-none"
                                />
                            </Field>

                            {/* Required Skills */}
                            <Field label="Required Skills">
                                <Input
                                    name="requiredSkills"
                                    value={employment.requiredSkills}
                                    onChange={handleEmploymentChange}
                                    placeholder="e.g. React, Node.js, Docker, 3+ years exp"
                                    className={inputCls}
                                />
                            </Field>

                            <SubmitButton label="Submit Employment Inquiry" />
                        </form>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    );
}
