
// components/features/Window.tsx
'use client'
import React, { useState, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { X, Minus, Square } from 'lucide-react'

interface WindowProps {
  id: string
  title: string
  children: ReactNode
  initialX: number
  initialY: number
  zIndex: number
  onFocus: (id: string) => void
}

const Window: React.FC<WindowProps> = ({ id, title, children, initialX, initialY, zIndex, onFocus }) => {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const dragRef = useRef(null)

  const handleClose = () => setIsMinimized(true)
  const handleMaximize = () => setIsMaximized(!isMaximized)
  const handleMinimize = () => setIsMinimized(true)

  if (isMinimized) return null 

  const windowClasses = isMaximized
    ? 'fixed inset-0 w-screen h-screen rounded-none'
    : 'w-[400px] h-[300px] min-w-[300px] min-h-[200px] rounded-lg'
    
  return (
    <motion.div
      ref={dragRef}
      // Allow dragging only when not maximized
      drag={!isMaximized}
      dragMomentum={false}
      initial={{ x: initialX, y: initialY, scale: 0.9, opacity: 0 }}
      animate={{ x: isMaximized ? 0 : initialX, y: isMaximized ? 0 : initialY, scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ zIndex }}
      onClick={() => onFocus(id)}
      className={`absolute bg-dark-card/90 border border-dark-border shadow-2xl backdrop-blur-md overflow-hidden ${windowClasses} cursor-default`}
    >
      {/* Header (Drag Handle) */}
      <div 
        className="p-3 border-b border-dark-border flex justify-between items-center cursor-move"
        onMouseDown={() => onFocus(id)}
      >
        <span className="text-text-secondary text-sm font-mono flex items-center">
            {title}
        </span>
        
        {/* Controls */}
        <div className="flex space-x-2">
          <button onClick={handleMinimize} className="p-1 hover:bg-dark-border rounded-full transition-colors"><Minus className="w-4 h-4 text-yellow-400" /></button>
          <button onClick={handleMaximize} className="p-1 hover:bg-dark-border rounded-full transition-colors"><Square className="w-4 h-4 text-green-400" /></button>
          <button onClick={handleClose} className="p-1 hover:bg-dark-border rounded-full transition-colors"><X className="w-4 h-4 text-red-400" /></button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 overflow-y-auto h-[calc(100%-49px)]">
        {children}
      </div>
    </motion.div>
  )
}

export default Window
