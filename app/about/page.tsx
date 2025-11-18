
// app/about/page.tsx
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { Code, Plane, Zap, GitCommit, Target } from 'lucide-react'

const TimelineItem: React.FC<{ title: string, content: string, icon: React.ReactNode, year: string }> = ({ title, content, icon, year }) => (
    <div className="flex mb-8">
        <div className="flex flex-col items-center mr-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-neon-blue/20 text-neon-blue shadow-neon-glow">{icon}</div>
            <div className="w-px h-full bg-dark-border mt-2"></div>
        </div>
        <div>
            <span className="text-sm font-mono text-text-secondary">{year}</span>
            <h3 className="text-xl font-bold text-text-primary mt-1">{title}</h3>
            <p className="text-text-secondary mt-2">{content}</p>
        </div>
    </div>
)

const StatCard: React.FC<{ value: string, label: string, icon: React.ReactNode, delay: number }> = ({ value, label, icon, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="p-6 bg-dark-card border border-dark-border rounded-lg flex flex-col items-center text-center"
    >
        <div className="text-neon-blue mb-3">{icon}</div>
        <div className="text-4xl font-extrabold font-mono text-text-primary">{value}</div>
        <div className="text-sm text-text-secondary">{label}</div>
    </motion.div>
)

export default function AboutPage() {
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 0.1])
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, 200])

    return (
        <main className="min-h-[300vh] bg-dark-bg text-text-primary p-4 sm:p-12">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <motion.div
                    ref={targetRef}
                    style={{ opacity, y }}
                    className="max-w-4xl text-center z-10 p-8"
                >
                    <h1 className="text-7xl font-extrabold text-neon-blue mb-4">
                        Systems Architect // Jack Davy
                    </h1>
                    <p className="text-2xl text-text-secondary leading-relaxed">
                        I specialize in advanced **RAG architectures**, blending **Probabilistic AI** with high-performance **Full-Stack Engineering**. Driven by data, I build systems that are robust, elegant, and production-ready.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto pt-[50vh]">
                <h2 className="text-5xl font-bold text-text-primary mb-12 text-center">
                    Milestone Timeline
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <TimelineItem 
                        year="2022" 
                        title="RAG Architecture Focus"
                        icon={<Code />}
                        content="Began deep-diving into retrieval-augmented generation. Developed multi-stage pipelines using ChromaDB and Azure OpenAI."
                    />
                    <TimelineItem 
                        year="2023" 
                        title="Global Exploration & Tech Growth"
                        icon={<Plane />}
                        content="Traveled extensively (Japan, Thailand, Korea) while developing QueryChain, a core RAG pipeline project. Systems thinking solidified."
                    />
                    <TimelineItem 
                        year="2024" 
                        title="Advanced ML/CS Coursework"
                        icon={<Target />}
                        content="Focused on Probabilistic AI, Programming Languages, and advanced graphics programming (OpenGL) at UOregon."
                    />
                    <TimelineItem 
                        year="2025" 
                        title="Graduation & Full-Time Systems"
                        icon={<Zap />}
                        content="Anticipated graduation and transition to a full-time role applying expertise in high-impact AI/ML engineering."
                    />
                </div>

                <h2 className="text-5xl font-bold text-text-primary mt-20 mb-12 text-center">
                    Impact Metrics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                    <StatCard value="98.5%" label="Code Quality Score" icon={<Code />} delay={0.1} />
                    <StatCard value="21k" label="GitHub Commits" icon={<GitCommit />} delay={0.2} />
                    <StatCard value="55" label="VO2 Max (ml/kg/min)" icon={<Zap />} delay={0.3} />
                    <StatCard value="7" label="Countries Traveled" icon={<Plane />} delay={0.4} />
                </div>
            </div>
        </main>
    )
}
