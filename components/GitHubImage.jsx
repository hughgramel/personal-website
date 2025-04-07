'use client';

import Image from 'next/image';

// This component handles GitHub Pages deployment by adjusting image paths
export default function GitHubImage({ src, ...props }) {
  // For production with GitHub Pages, prepend the basePath when needed
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/personal-website' : '';
  
  // If the src already starts with http/https, don't add basePath
  const fullSrc = src.startsWith('http') ? src : `${basePath}${src}`;
  
  // Pass through to the regular Image component with adjusted src
  return <Image src={fullSrc} {...props} />;
} 