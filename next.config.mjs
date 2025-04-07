/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add basePath if your site is not hosted at the root
  // basePath: '/personal-website',
  
  // GitHub Pages does not support dynamic routes with trailing slashes
  trailingSlash: true,
  
  // Disable image optimization since GitHub Pages doesn't support it
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
