
//tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        //Core Dark Theme Palette
        'dark-bg': '#0D1117',
        'dark-card': '#161B22',
        'dark-border': '#30363D',
        //Primary Neon Accent
        'neon-blue': '#00F0FF', 
        //Text Colors
        'text-primary': '#E6E6E6',
        'text-secondary': '#A8A8A8',
      },
      boxShadow: {
        'neon-glow': '0 0 10px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}

export default config
