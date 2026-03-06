import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cwjen.vercel.app';
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    // Main pages - High priority
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/academic`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Psychotherapy main - High priority
    {
      url: `${baseUrl}/psychotherapy`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    
    // Psychotherapy sub-pages
    {
      url: `${baseUrl}/psychotherapy/adler`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/psychotherapy/cbt`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/psychotherapy/existential`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/psychotherapy/feminist`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/psychotherapy/gestalt-therapy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/psychotherapy/person-centered`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/psychotherapy/postmodern`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/psychotherapy/psychoanalysis`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/psychotherapy/reality-therapy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // Therapy types - High priority
    {
      url: `${baseUrl}/couple-therapy`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/group-therapy`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    
    // Eis-heauton section
    {
      url: `${baseUrl}/eis-heauton`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/eis-heauton/freedom`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/eis-heauton/unity`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    
    // Projects
    {
      url: `${baseUrl}/project`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/project/male-sexual-minority`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  return pages;
}