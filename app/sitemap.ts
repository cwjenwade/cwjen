import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cwjen.vercel.app'; // 替換為正式網域

  const pages = [
    '/',
    '/about',
    '/psychotherapy',
    '/couple-therapy',
    '/group-therapy',
    '/eis-heauton',
    '/eis-heauton/freedom',
    '/eis-heauton/unity',
    '/project',
    '/project/male-sexual-minority',
    // add more as needed
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1.0 : 0.7,
  }));
}