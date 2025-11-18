
// app/layout.tsx
import type { Metadata } from 'next'
import '../globals.css'
import Dock from '@/components/layout/Dock'

// --- SEO Metadata ---
export const metadata: Metadata = {
  title: 'Jack Davy | AI/ML Engineer & RAG Specialist',
  description: 'Senior-level portfolio of Jack Davy, a Computer Science graduate specializing in advanced RAG architectures, full-stack ML systems, and creative technology.',
  keywords: ['AI Engineer', 'RAG Specialist', 'Next.js', 'Framer Motion', 'Three.js', 'TypeScript', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Set the dark class globally for Tailwind
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans bg-dark-bg antialiased min-h-screen">
        {/* Main content area */}
        {children}
        
        {/* Persistent Dock for easy navigation */}
        <Dock /> 
      </body>
    </html>
  )
}
