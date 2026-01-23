import type { Metadata, LayoutProps } from 'next';
import { Noto_Serif_TC, Inter } from 'next/font/google';
import TopNavbar from '@/components/TopNavbar';
import '../globals.css';
import { isLocale } from '@/lib/locale';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoserif = Noto_Serif_TC({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Wade Jen | Psychology Research',
  description: 'Personal academic website for psychotherapy and counseling.',
};

export async function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'zh' },
  ];
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const langParam = params?.lang;
  const lang = isLocale(typeof langParam === 'string' ? langParam : (Array.isArray(langParam) ? langParam[0] : String(langParam)))
    ? (Array.isArray(langParam) ? langParam[0] : (typeof langParam === 'string' ? langParam : 'zh'))
    : 'zh';
  const htmlLang = lang === 'zh' ? 'zh-TW' : 'en';

  return (
    <html lang={htmlLang} className={`${inter.variable} ${notoserif.variable}`}>
      <body className="bg-[#F7F5F3] text-stone-800 font-sans antialiased min-h-screen flex flex-col">
        <TopNavbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {children}
        </main>
      </body>
    </html>
  );
}
