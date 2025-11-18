
// app/rag-lab/page.tsx
'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { MessageSquare, Server, CheckCircle, ArrowRight, User } from 'lucide-react'

const pipelineStages = [
    { id: 1, name: "User Query Received", icon: User, duration: 0.5, result: "Initial request captured." },
    { id: 2, name: "Entity-Mode Retrieval", icon: Server, duration: 1.0, result: "Extracted entities (Jack Davy, RAG, Python) and retrieved 12 relevant document chunks." },
    { id: 3, name: "LLM Re-ranking & Filtering", icon: CheckCircle, duration: 1.5, result: "GPT-4o re-ranked chunks based on goal-relevance, filtering down to top 4 segments." },
    { id: 4, name: "Goal-Mode Retrieval (Structured)", icon: Target, duration: 2.0, result: "Performed focused metadata lookup for systems architecture and CS background." },
    { id: 5, name: "Structured Fusion & Synthesis", icon: Zap, duration: 2.5, result: "Combined refined data into final, concise, and structured answer format." },
]

const PipelineFlowchart: React.FC<{ activeStage: number }> = ({ activeStage }) => (
    <div className="flex flex-col space-y-4 items-center">
        {pipelineStages.map((stage, index) => (
            <React.Fragment key={stage.id}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                        opacity: activeStage >= stage.id ? 1 : 0.3, 
                        scale: activeStage === stage.id ? 1.05 : 1,
                        boxShadow: activeStage === stage.id ? '0 0 20px rgba(0, 240, 255, 0.7)' : 'none'
                    }}
                    transition={{ duration: 0.5 }}
                    className={`p-4 w-full max-w-sm rounded-lg border flex items-center ${
                        activeStage >= stage.id 
                            ? 'bg-neon-blue/20 border-neon-blue text-text-primary' 
                            : 'bg-dark-card border-dark-border text-text-secondary'
                    }`}
                >
                    <stage.icon className="w-6 h-6 mr-3" />
                    <span className="font-mono font-semibold">{stage.name}</span>
                </motion.div>
                {index < pipelineStages.length - 1 && (
                    <motion.div 
                        animate={{ opacity: activeStage > stage.id ? 1 : 0.3 }}
                        className="text-neon-blue/80"
                    >
                        <ArrowRight className="w-6 h-6 rotate-90" />
                    </motion.div>
                )}
            </React.Fragment>
        ))}
    </div>
)

export default function RAGLabPage() {
    const [query, setQuery] = useState('')
    const [activeStage, setActiveStage] = useState(0)
    const [pipelineMessage, setPipelineMessage] = useState('Pipeline is ready. Enter a query to begin simulation.')
    const [answer, setAnswer] = useState('')

    const simulatePipeline = (userQuery: string) => {
        if (!userQuery.trim()) return

        setAnswer('')
        setActiveStage(1)
        setPipelineMessage(pipelineStages[0].result)

        // Simulate each stage delay
        pipelineStages.forEach((stage, index) => {
            setTimeout(() => {
                setActiveStage(stage.id)
                setPipelineMessage(stage.result)
                
                if (index === pipelineStages.length - 1) {
                    // Final simulated output
                    setTimeout(() => {
                        setPipelineMessage('Structured Fusion Complete. Generating final output.')
                        setAnswer(`The RAG pipeline confirms Jack Davy is a CS graduate specializing in multi-stage RAG architectures, full-stack ML systems, and advanced data storytelling. Key projects include QueryChain (Excel metadata extraction) and systems using ChromaDB and Azure OpenAI.`)
                    }, 500)
                }
            }, stage.duration * 400); // Speed up for demo
        })
    }

    return (
        <main className="min-h-screen bg-dark-bg text-text-primary p-4 sm:p-12 pt-20 flex flex-col items-center">
            <header className="text-center max-w-3xl mb-12">
                <h1 className="text-5xl font-bold text-neon-blue">
                    RAG Architecture Simulator
                </h1>
                <p className="text-xl text-text-secondary mt-3">
                    Watch the multi-stage, goal-oriented retrieval process in real-time. This visualization demonstrates how complex queries are handled by Jack's advanced pipelines.
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full max-w-7xl">
                {/* 1. Input Panel */}
                <div className="lg:col-span-1 bg-dark-card p-6 rounded-xl border border-dark-border">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center text-text-primary">
                        <MessageSquare className="w-5 h-5 mr-2 text-neon-blue" /> Ask the System
                    </h2>
                    <textarea
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="e.g., What is Jack's background in RAG and systems engineering?"
                        rows={4}
                        className="w-full p-3 bg-dark-bg border border-dark-border rounded-md text-text-primary focus:border-neon-blue resize-none"
                    />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => simulatePipeline(query)}
                        disabled={activeStage > 0 && activeStage < 5}
                        className="mt-4 w-full py-2 rounded-lg bg-neon-blue text-dark-bg font-bold disabled:opacity-50 transition-all"
                    >
                        {activeStage > 0 && activeStage < 5 ? `Simulating Stage ${activeStage}...` : 'Run Query'}
                    </motion.button>
                </div>
                
                {/* 2. Flowchart Panel */}
                <div className="lg:col-span-1 p-6 flex justify-center items-start">
                    <PipelineFlowchart activeStage={activeStage} />
                </div>

                {/* 3. Output Panel */}
                <div className="lg:col-span-1 bg-dark-card p-6 rounded-xl border border-dark-border">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center text-text-primary">
                        <Zap className="w-5 h-5 mr-2 text-neon-blue" /> Output & Status
                    </h2>
                    
                    <div className="text-sm font-mono text-text-secondary mb-4 p-3 bg-dark-bg border border-dark-border rounded-md">
                        {pipelineMessage}
                    </div>

                    <h3 className="text-lg font-semibold mt-6 mb-2 text-neon-blue">
                        Final Answer:
                    </h3>
                    <motion.p
                        key={answer}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: answer ? 1 : 0.5, y: answer ? 0 : 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-text-primary text-lg border-l-4 border-neon-blue pl-4 py-2"
                    >
                        {answer || 'Awaiting Fusion...'}
                    </motion.p>
                </div>
            </div>
        </main>
    )
}
