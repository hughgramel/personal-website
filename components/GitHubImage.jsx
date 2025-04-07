'use client';

import Image from 'next/image';

export default function GitHubImage(props) {
  const { src, ...rest } = props;
  
  // If src begins with a slash, handle basePath for GitHub Pages
  const imageSrc = src.startsWith('/') 
    ? (typeof window !== 'undefined' && window.location.hostname === 'hughgramel.github.io' 
        ? `/personal-website${src}` 
        : src)
    : src;
    
  return <Image {...rest} src={imageSrc} />;
} 