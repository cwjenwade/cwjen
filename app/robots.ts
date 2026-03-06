import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api'],
    },
    sitemap: 'https://cwjen.vercel.app/sitemap.xml',
    host: 'https://cwjen.vercel.app',
  };
}