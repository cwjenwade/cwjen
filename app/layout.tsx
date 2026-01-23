import type { Metadata } from 'next';
import { Noto_Serif_TC, Inter } from 'next/font/google';
import Script from 'next/script'; // [新增] 引入 Script 組件
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
  title: 'Wade Jen | Psychology Research',
  description: 'Personal academic website for psychotherapy and counseling.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${notoserif.variable}`}>
      <body className="bg-[#F7F5F3] text-stone-800 font-sans antialiased min-h-screen flex flex-col">
        {/* [新增] Google 翻譯樣式修正：隱藏頂部橫幅與預設樣式 */}
        <style>{`
          /* 隱藏 Google 翻譯的頂部工具列 */
          .goog-te-banner-frame.skiptranslate {
            display: none !important;
          }
          /* 移除 body 被 Google 強制推擠的 top margin */
          body {
            top: 0px !important;
          }
          /* 隱藏滑鼠 hover 時的翻譯提示框 (可選) */
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
        </Providers>

        {/* [新增] Google 翻譯初始化腳本 */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'zh-TW',     // 網頁原語言：繁體中文
                includedLanguages: 'en,zh-TW', // 只允許翻譯成：英文與繁中
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
              }, 'google_translate_element'); // 指定掛載點 ID，稍後會在 Navbar 中定義
            }
          `}
        </Script>

        {/* [新增] Google 翻譯核心腳本 */}
        <Script 
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}