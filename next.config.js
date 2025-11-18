
//next.config.js
//type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  
  // IMPORTANT: Base Path for project-page hosting. Must match repo name.
  basePath: '/jdavyy', 

  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
