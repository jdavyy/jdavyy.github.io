
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables Static HTML Export for GitHub Pages
  output: 'export', 
  
  // IMPORTANT: Base Path for project-page hosting. Must match repo name.
  basePath: '/jdavyy', 

  // Disables server-side image optimization
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
