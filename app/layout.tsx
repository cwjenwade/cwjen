import type { Metadata } from 'next';
import { Noto_Serif_TC, Inter } from 'next/font/google';
import TopNavbar from '@/components/TopNavbar'; // ✅ 引用新檔案
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoserif = Noto_Serif_TC({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-serif' 
});

export const metadata: Metadata = {
  title: 'Wade Jen | Psychology Research',
  description: 'Personal academic website for psychotherapy and counseling.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${notoserif.variable}`}>
      <body className="bg-[#F7F5F3] text-stone-800 font-sans antialiased min-h-screen flex flex-col">
        
        {/* 頂部導覽列 */}
        <TopNavbar />

        {/* 主要內容區域 */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {children}
        </main>
        
      </body>
    </html>
  );
}