'use client';

import Image from 'next/image';

// Instead of dynamically checking the hostname, we'll use Next.js's built-in
// basePath handling and environment variables
export default function GitHubImage({ src, ...props }) {
  // Pass through to the regular Image component with the same props
  return <Image src={src} {...props} />;
} 