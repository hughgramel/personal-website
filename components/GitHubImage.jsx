'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GitHubImage(props) {
  const { src, ...rest } = props;
  const [imageSrc, setImageSrc] = useState(src);
  
  useEffect(() => {
    // Only run this on the client after hydration
    if (window.location.hostname === 'hughgramel.github.io') {
      if (src.startsWith('/')) {
        setImageSrc(`/personal-website${src}`);
      }
    }
  }, [src]);
    
  return <Image {...rest} src={imageSrc} />;
} 