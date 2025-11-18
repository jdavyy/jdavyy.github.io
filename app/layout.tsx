import type { Metadata } from 'next'
// Note: Removed the unused 'Inter' font import for simplicity
// FIX: Change '../globals.css' to './globals.css'
import './globals.css' 
import Dock from '@/components/layout/Dock'

export const metadata: Metadata = {
  title: 'Jack Davy | AI/ML Engineer & RAG Specialist',
  description: 'Senior-level portfolio of Jack Davy, specializing in advanced RAG architectures, full-stack ML systems, and creative technology.',
  keywords: ['AI Engineer', 'RAG Specialist', 'Next.js', 'Framer Motion', 'Three.js', 'TypeScript', 'Portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="font-sans bg-dark-bg antialiased min-h-screen">
        {children}
        <Dock /> 
      </body>
    </html>
  )
}
