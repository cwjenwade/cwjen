import type { Metadata } from 'next';
import { Noto_Serif_TC, Inter } from 'next/font/google';
import Script from 'next/script';
import TopNavbar from '@/components/TopNavbar';
import './globals.css';
import Providers from '@/components/Providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoserif = Noto_Serif_TC({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: {
    template: '%s | 任祈蔚 Wade Jen',
    default: '任祈蔚 CHI-WEI JEN (Wade Jen) | 諮商心理師',
  },
  description: '任祈蔚（CHI-WEI JEN, Wade Jen）諮商心理師的個人學術與專業網站，專注於心理諮商與心理治療。Personal academic website of Wade Jen, Counseling Psychologist.',
  keywords: ['任祈蔚', 'CHI-WEI JEN', 'Wade Jen', '諮商心理師', '心理治療', '心理諮商', 'Counseling Psychologist'],
  authors: [{ name: '任祈蔚 Wade Jen' }],
  creator: '任祈蔚 Wade Jen',
  openGraph: {
    title: '任祈蔚 CHI-WEI JEN (Wade Jen) | 諮商心理師',
    description: '任祈蔚（CHI-WEI JEN）諮商心理師的個人學術與專業網站。',
    locale: 'zh_TW',
    type: 'website',
  },
};

// [新增] 結構化資料物件
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: '任祈蔚',
  alternateName: ['CHI-WEI JEN', 'Wade Jen'],
  jobTitle: '諮商心理師',
  description: '專注於心理諮商與心理治療研究。',
  knowsAbout: ['心理諮商', '心理治療', 'Counseling', 'Psychotherapy'],
  url: 'https://您的網站網址.com', // 需替換為正式網域
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: '諮商心理師證照',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${notoserif.variable}`}>
      <head>
        {/* [新增] 寫入 JSON-LD 腳本 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#FAF9F6] text-stone-800 font-sans antialiased min-h-screen flex flex-col">
        <style>{`
          .goog-te-banner-frame.skiptranslate {
            display: none !important;
          }
          body {
            top: 0px !important;
          }
          .goog-tooltip {
            display: none !important;
          }
          .goog-tooltip:hover {
            display: none !important;
          }
          .goog-text-highlight {
            background-color: transparent !important;
            border: none !important; 
            box-shadow: none !important;
          }
        `}</style>

        <Providers>
          <TopNavbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
            {children}
          </main>
          <footer className="bg-[#F8F8EC] text-center py-6 border-t border-[#BAC680]/30">
            <p className="text-sm text-[#5C6155]">
              © 2026 任祈蔚 Wade Jen | 諮商心理師
            </p>
          </footer>
        </Providers>

        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'zh-TW',     
                includedLanguages: 'en,zh-TW', 
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element'); 
            }
          `}
        </Script>

        <Script 
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}