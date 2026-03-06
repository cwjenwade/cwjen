/**
 * SEO Configuration
 * All pages are optimized with metadata and structured data
 */

export const SEO_CONFIG = {
  baseUrl: 'https://cwjen.vercel.app',
  siteName: '任祈蔚 Wade Jen',
  siteDescription: '任祈蔚（CHI-WEI JEN, Wade Jen）諮商心理師的個人學術與專業網站，專注於心理諮商與心理治療。',
  
  locales: {
    default: 'zh_TW',
    alternates: ['en_US'],
  },
  
  socialLinks: {
    // Add your social media links here
  },
  
  // Rich snippet configuration
  richSnippets: {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: '任祈蔚 諮商心理師',
    description: '提供專業的心理諮商與心理治療服務',
    areaServed: 'TW',
    availableLanguage: ['zh-TW', 'en'],
  },
  
  // Performance budgets
  performanceBudgets: {
    // Lighthouse scores target
    performance: 90,
    accessibility: 95,
    bestPractices: 90,
    seo: 95,
  },
};

// Sitemap priority configuration
export const SITEMAP_CONFIG = {
  pages: {
    '/': { priority: 1.0, frequency: 'weekly' },
    '/about': { priority: 0.9, frequency: 'monthly' },
    '/academic': { priority: 0.8, frequency: 'monthly' },
    '/psychotherapy': { priority: 0.9, frequency: 'weekly' },
    '/couple-therapy': { priority: 0.9, frequency: 'weekly' },
    '/group-therapy': { priority: 0.9, frequency: 'weekly' },
    '/eis-heauton': { priority: 0.7, frequency: 'monthly' },
    '/project': { priority: 0.7, frequency: 'monthly' },
  },
};
