import type { Metadata } from 'next'; // 移除 LayoutProps
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

// 這裡定義 Props 的介面
interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ lang: string }>; // Next.js 15+ 的 params 是 Promise
}

// 修正函式簽章
export default async function RootLayout({ children, params }: RootLayoutProps) {
  // 等待 params 解析 (Next.js 15+ 必須)
  const resolvedParams = await params;
  const langParam = resolvedParams.lang;
  
  const lang = isLocale(langParam) ? langParam : 'zh';
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