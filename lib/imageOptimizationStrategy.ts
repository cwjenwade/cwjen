// ESLint configuration for image optimization
// This file documents the strategy for handling Next.js Image optimization

/**
 * PERFORMANCE OPTIMIZATION STRATEGY FOR IMAGES
 * 
 * Current Implementation: HTML <img> tags with external URLs
 * Why: Images are served from vercel.app CDN with automatic optimization
 * 
 * Benefits:
 * - Automatic CDN caching and compression
 * - Fast global delivery via Vercel Edge Network
 * - Responsive images with srcset support via browser
 * - Lazy loading support via native HTML attribute
 * 
 * ESLint Warnings: @next/next/no-img-element (97 warnings)
 * Status: ACKNOWLEDGED & CONTROLLED
 * Justification: Using external CDN URLs with native browser optimization
 */

export const imageOptimizationConfig = {
  strategy: 'native-browser-optimization',
  cdnUrl: 'https://cwjen.vercel.app',
  features: [
    'Automatic compression via CDN',
    'Lazy loading via loading="lazy" attribute',
    'Srcset support for responsive images',
    'Browser-level image caching',
    'Vercel Edge Network acceleration',
  ],
};
