import { type Metadata } from 'next';

const SITE_NAME = '任祈蔚 Wade Jen';
const BASE_URL = 'https://您的網站網址.com'; // replace with actual domain

export function pageMetadata(
  title: string,
  description: string,
  path?: string
): Metadata {
  const fullTitle = title + ' | ' + SITE_NAME;
  const url = path ? `${BASE_URL}${path}` : BASE_URL;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}
