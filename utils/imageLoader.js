/**
 * Custom image loader for Next.js that properly handles GitHub Pages basePath
 */
export default function imageLoader({ src }) {
  // For local development, use the normal path
  if (process.env.NODE_ENV === 'development') {
    return src;
  }
  
  // For production (GitHub Pages), prepend the basePath
  return `/personal-website${src}`;
} 