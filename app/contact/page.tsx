'use client'
import { motion } from 'framer-motion'
// FIX: Changed 'GitHub' to 'Github' (lowercase 'h')
import { Github, Linkedin, Rss, MessageSquare } from 'lucide-react' 
import { useState } from 'react'

// IMPORTANT: Replace this with your actual FormSubmit endpoint (e.g., your email address or hash)
// I am using a placeholder URL here. You need to configure this to receive messages.
const FORM_ENDPOINT = "https://formsubmit.co/jack.davy@gmail.com"

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Message sent successfully! I will be in touch soon.')
        form.reset()
      } else {
        setStatus('error')
        setMessage('Failed to send message. Please try again or connect via LinkedIn.')
      }
    } catch (error) {
      console.error('Submission Error:', error)
      setStatus('error')
      setMessage('An unexpected error occurred. Please check your console.')
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 max-w-4xl mx-auto bg-dark-bg/80 backdrop-blur-sm rounded-xl shadow-2xl min-h-screen"
    >
      <h1 className="text-3xl font-bold text-text-primary mb-4 border-b border-neon-blue/50 pb-2">
        Connect_to_Jack
      </h1>
      <p className="text-text-secondary mb-8">
        If you have a project in mind, a job opportunity, or just want to discuss the future of RAG systems, feel free to drop me a line.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-neon-blue mb-4 flex items-center">
            <MessageSquare className="w-6 h-6 mr-2"/> Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />
            
            <div>
              <label htmlFor="name" className="block text-text-secondary font-medium mb-1">Name</label>
              <input 
                id="name"
                type="text" 
                name="name" 
                required 
                className="w-full p-3 bg-dark-bg border border-gray-700 rounded-lg text-text-primary focus:border-neon-blue focus:ring focus:ring-neon-blue/30 transition-colors"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-text-secondary font-medium mb-1">Email</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                required 
                className="w-full p-3 bg-dark-bg border border-gray-700 rounded-lg text-text-primary focus:border-neon-blue focus:ring focus:ring-neon-blue/30 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-text-secondary font-medium mb-1">Message</label>
              <textarea 
                id="message"
                name="message" 
                rows={5} 
                required 
                className="w-full p-3 bg-dark-bg border border-gray-700 rounded-lg text-text-primary focus:border-neon-blue focus:ring focus:ring-neon-blue/30 transition-colors"
                placeholder="Your detailed message..."
              ></textarea>
            </div>
            
            <motion.button
              type="submit"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-bold transition-all duration-300 
                ${status === 'sending' ? 'bg-neon-blue/50 cursor-not-allowed' : 'bg-neon-blue text-dark-bg hover:bg-neon-blue/80'}
              `}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>

          {/* Status Message */}
          {status !== 'idle' && status !== 'sending' && (
            <div className={`mt-4 p-3 rounded-lg text-sm text-center font-semibold ${
              status === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
            }`}>
              {message}
            </div>
          )}
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-semibold text-neon-blue mb-4 flex items-center">
            <Rss className="w-6 h-6 mr-2"/> Digital Presence
          </h2>
          <div className="space-y-4">
            <a 
              href="https://github.com/jdavyy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-dark-bg border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-6 h-6 text-text-primary mr-3"/>
              <span className="font-semibold text-text-primary">jdavyy (GitHub)</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/jack-davy-820293225/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center p-4 bg-dark-bg border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Linkedin className="w-6 h-6 text-text-primary mr-3"/>
              <span className="font-semibold text-text-primary">Jack Davy (LinkedIn)</span>
            </a>
            {/* Add more links as needed */}
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-text-primary mb-2">Technical Summary</h3>
            <p className="text-text-secondary text-sm">
              Focused on high-performance RAG architectures, full-stack MLops, and creating beautiful, functional interfaces. Always exploring new ways to integrate AI into real-world systems.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
