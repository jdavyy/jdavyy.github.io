
// app/contact/page.tsx (Static Version)
'use client'
import { motion } from 'framer-motion'
import { GitHub, Linkedin, Rss, MessageSquare } from 'lucide-react'
import { useState } from 'react'

// IMPORTANT: Replace this with your actual FormSubmit endpoint (e.g., your email address or hash)
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/jack.davy@gmail.com"

export default function ContactPage() {
  const [status, setStatus] = useState({ sent: false, error: false })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus({ sent: false, error: false })
    
    const form = event.currentTarget
    const data = new FormData(form)

    try {
      // FormSubmit requires a POST request to their endpoint
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json',
        }
      })
      
      if (response.ok) {
        setStatus({ sent: true, error: false })
        form.reset()
      } else {
        setStatus({ sent: false, error: true })
      }
    } catch (e) {
      setStatus({ sent: false, error: true })
    }
  }

  return (
    <main className="min-h-screen bg-dark-bg text-text-primary p-4 sm:p-12 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl p-8 bg-dark-card border border-dark-border rounded-xl shadow-2xl"
      >
        <h1 className="text-4xl font-bold text-neon-blue mb-4">
          Connect\_to\_Jack
        </h1>
        <p className="text-text-secondary mb-8">
          Have an advanced AI project, technical collaboration idea, or want to talk systems? Send a secured message.
        </p>

        {/* --- Form Section --- */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_subject" value="New Portfolio Message: Jack Davy" />
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full p-3 bg-dark-bg border border-dark-border focus:border-neon-blue rounded-md transition-colors" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full p-3 bg-dark-bg border border-dark-border focus:border-neon-blue rounded-md transition-colors" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full p-3 bg-dark-bg border border-dark-border focus:border-neon-blue rounded-md transition-colors resize-none" />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`mt-6 w-full py-3 rounded-lg font-bold transition-all duration-300 bg-neon-blue text-dark-bg hover:shadow-neon-glow flex items-center justify-center`}
          >
            <MessageSquare className="w-5 h-5 mr-2" /> Send Message
          </motion.button>
          
          {/* Status Feedback */}
          {status.sent && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 rounded-lg text-center font-semibold bg-green-600/30 text-green-300">
              Message successfully sent! I will be in touch soon.
            </motion.div>
          )}
          {status.error && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-3 rounded-lg text-center font-semibold bg-red-600/30 text-red-300">
              Error sending message. Please check the email or connect via a link below.
            </motion.div>
          )}
        </form>

        {/* --- Social Links Section --- */}
        <div className="mt-12 pt-6 border-t border-dark-border">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
                Social Data Streams
            </h3>
            <div className="flex space-x-6">
                {/* These URLs MUST be absolute for GitHub Pages */}
                <motion.a 
                    href="https://github.com/jdavyy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: '#00F0FF' }}
                    className="text-text-secondary hover:text-neon-blue transition-colors"
                    title="GitHub: See the source"
                >
                    <GitHub className="w-6 h-6" />
                </motion.a>
                <motion.a 
                    href="https://www.linkedin.com/in/jack-davy-820293225/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, color: '#00F0FF' }}
                    className="text-text-secondary hover:text-neon-blue transition-colors"
                    title="LinkedIn: Professional Network"
                >
                    <Linkedin className="w-6 h-6" />
                </motion.a>
            </div>
        </div>
      </motion.div>
    </main>
  )
}
