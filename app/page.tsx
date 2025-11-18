'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Window from '@/components/features/Window'
import TypingEffect from '@/components/ui/TypingEffect'
import ParticleBackground from '@/components/three/ParticleBackground'
// FIX: Renamed imported Home icon to HomeIcon to avoid conflict with default export function Home()
import { Home as HomeIcon, Code, NotebookText, Globe, Zap, LineChart, Mail } from 'lucide-react'

// Define the windows for the OS interface
const initialWindows = [
  { 
    id: 'about', 
    title: 'About Jack.davy', 
    path: '/about', 
    // FIX: Use the renamed icon
    icon: <HomeIcon className="w-5 h-5" />, 
    initialX: 50, 
    initialY: 50, 
    content: 'Scrollytelling: Education, travel, and technical milestones. Impact metrics and bio.' 
  },
  { 
    id: 'projects', 
    title: 'Project Lab', 
    path: '/projects', 
    icon: <Code className="w-5 h-5" />, 
    initialX: 400, 
    initialY: 100, 
    content: 'Interactive demos of AI/ML, RAG, and full-stack engineering projects.' 
  },
  { 
    id: 'rag-lab', 
    title: 'RAG Architecture Simulator', 
    path: '/rag-lab', 
    icon: <NotebookText className="w-5 h-5" />, 
    initialX: 100, 
    initialY: 300, 
    content: 'See complex RAG pipelines in action. Multi-stage retrieval and fusion demo.' 
  },
  { 
    id: 'travel', 
    title: 'Global Traversal', 
    path: '/travel', 
    icon: <Globe className="w-5 h-5" />, 
    initialX: 600, 
    initialY: 20, 
    content: 'An interactive 3D globe plotting major trips (Japan, Thailand, etc.).' 
  },
  { 
    id: 'contact', 
    title: 'Connect_to_Jack', 
    path: '/contact', 
    icon: <Mail className="w-5 h-5" />, 
    initialX: 900, 
    initialY: 150, 
    content: 'Send a message through the secured contact form. Get in touch.' 
  },
]

export default function Home() {
  const [zOrder, setZOrder] = useState<string[]>(initialWindows.map(w => w.id))

  const handleFocus = (id: string) => {
    // Bring the clicked window to the front
    setZOrder(prev => [id, ...prev.filter(i => i !== id)])
  }

  const getZIndex = (id: string) => 10 + zOrder.indexOf(id) + 1

  return (
    <main className="relative min-h-screen w-full bg-dark-bg overflow-hidden p-4">
      <ParticleBackground />

      <motion.header
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-xl sm:text-2xl font-mono text-text-secondary mb-4">
          JACK DAvY // CS Graduate, RAG Specialist
        </h1>
        <TypingEffect />
        <p className="mt-4 text-lg text-text-secondary/70">
            Systems Thinking Meets Creative Technology
        </p>
      </motion.header>

      <div className="absolute inset-0 z-10">
        {initialWindows.map((win) => (
          <Window
            key={win.id}
            id={win.id}
            title={win.title}
            initialX={win.initialX}
            initialY={win.initialY}
            zIndex={getZIndex(win.id)}
            onFocus={handleFocus}
          >
            <div className="flex flex-col space-y-3">
              <div className="text-text-primary text-md">{win.content}</div>
              <Link href={`/jdavyy${win.path}`} className="flex items-center text-neon-blue hover:underline font-bold transition-colors">
                Launch Application
              </Link>
            </div>
          </Window>
        ))}
      </div>
    </main>
  )
}
