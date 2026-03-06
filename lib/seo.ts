import { type Metadata } from 'next';

const SITE_NAME = '任祈蔚 Wade Jen';
const BASE_URL = 'https://cwjen.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

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
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'zh_TW',
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
      creator: '@wadejen',
    },
    alternates: {
      canonical: url,
    },
  };
}
