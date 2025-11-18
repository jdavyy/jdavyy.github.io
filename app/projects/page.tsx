
// app/projects/page.tsx
'use client'
import { motion } from 'framer-motion'
import { GitBranch, Zap, Cpu, Aperture } from 'lucide-react'

interface Project {
    id: number
    title: string
    tags: string[]
    icon: React.ReactNode
    description: string
}

const projects: Project[] = [
    { id: 1, title: 'QueryChain RAG Pipeline', tags: ['AI', 'RAG', 'Python', 'ChromaDB'], icon: <GitBranch className="w-6 h-6" />, description: 'Multi-stage retrieval pipeline for metadata extraction from complex documents.' },
    { id: 2, title: 'HiddenHeaderFinalRes', tags: ['Full-Stack', 'TypeScript', 'Node.js'], icon: <Zap className="w-6 h-6" />, description: 'A serverless function framework leveraging edge computing for advanced routing.' },
    { id: 3, title: 'Garmin Wellness AI Dashboard', tags: ['Data Eng', 'ML', 'Python'], icon: <Cpu className="w-6 h-6" />, description: 'AI-driven insights on VO2 Max progression and training loads using Garmin data.' },
    { id: 4, title: 'OpenGL 3D Carousel Horse', tags: ['Graphics', 'C++', 'OpenGL'], icon: <Aperture className="w-6 h-6" />, description: 'Keyframe animation and texture mapping demo in C++.' },
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    // This is the placeholder for the 3D Hover Card (Advanced Feature)
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, rotateY: 5 }} // Simulating 3D hover effect
            className="p-6 bg-dark-card border border-dark-border rounded-xl shadow-card-glow cursor-pointer hover:border-neon-blue transition-all"
            onClick={() => alert(`Launching Project: ${project.title}`)}
        >
            <div className="flex items-center text-neon-blue mb-4">
                {project.icon}
                <h3 className="text-xl font-bold ml-3 text-text-primary">{project.title}</h3>
            </div>
            <p className="text-text-secondary text-sm mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-dark-border text-neon-blue/80">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}

export default function ProjectsPage() {
    return (
        <main className="min-h-screen bg-dark-bg text-text-primary p-4 sm:p-12 pt-20">
            <motion.header
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto mb-12 text-center"
            >
                <h1 className="text-5xl font-bold text-neon-blue">
                    Interactive Project Lab
                </h1>
                <p className="text-xl text-text-secondary mt-3">
                    A portfolio of advanced systems: from multi-stage RAG to high-performance graphics. Click a card to simulate the app or view details.
                </p>
            </motion.header>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </main>
    )
}
