'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, Code, NotebookText, Mail } from 'lucide-react'

// Define the apps that appear in the dock
const dockItems = [
  { 
    name: 'Home', 
    icon: <Home className="w-5 h-5" />, 
    href: '/jdavyy' 
  },
  { 
    name: 'Projects', 
    icon: <Code className="w-5 h-5" />, 
    href: '/jdavyy/projects' 
  },
  { 
    name: 'RAG Lab', 
    icon: <NotebookText className="w-5 h-5" />, 
    href: '/jdavyy/rag-lab' 
  },
  { 
    name: 'Contact', 
    icon: <Mail className="w-5 h-5" />, 
    href: '/jdavyy/contact' 
  },
]

const Dock = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex space-x-2 p-3 bg-gray-900/60 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700/50">
        {dockItems.map((item) => (
          <Link href={item.href} key={item.name} passHref>
            <motion.div
              className="relative p-2 rounded-xl text-text-primary hover:bg-gray-800/80 transition-all duration-200 cursor-pointer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title={item.name}
            >
              {item.icon}
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  )
}

export default Dock
