
// components/layout/Dock.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, NotebookText, Code, Mail } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface DockItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const DockItem: React.FC<DockItemProps> = ({ href, icon, label }) => {
  const pathname = usePathname();
  // Check if pathname matches href or the root path with basePath applied
  const isActive = pathname === href || (href === '/' && pathname === '/jdavyy'); 
  
  // Adjust links for GitHub Pages basePath (important for client-side navigation)
  const basePath = '/jdavyy'; // MUST match next.config.js
  const linkHref = `${basePath}${href}`;


  return (
    <Link href={linkHref} passHref>
      <motion.div
        whileHover={{ y: -10, scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className={`relative p-3 rounded-xl transition-colors cursor-pointer ${
          isActive ? 'bg-neon-blue/30 shadow-neon-glow' : 'hover:bg-dark-border/80'
        }`}
        title={label}
      >
        <div className={`w-6 h-6 ${isActive ? 'text-neon-blue' : 'text-text-primary'}`}>
          {icon}
        </div>
        {isActive && (
          <motion.div
            layoutId="dock-indicator" 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-neon-blue"
          />
        )}
      </motion.div>
    </Link>
  );
};

const Dock: React.FC = () => {
  const dockItems = [
    { href: '/', icon: <Home />, label: 'Home OS' },
    { href: '/about', icon: <NotebookText />, label: 'About' },
    { href: '/projects', icon: <Code />, label: 'Projects Lab' },
    { href: '/rag-lab', icon: <NotebookText />, label: 'RAG Simulator' },
    { href: '/contact', icon: <Mail />, label: 'Contact' },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 100 }}
        className="flex space-x-4 p-3 bg-dark-card/90 backdrop-blur-xl border border-dark-border rounded-2xl shadow-neon-glow"
      >
        {dockItems.map((item) => (
          <DockItem key={item.href} {...item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Dock;
