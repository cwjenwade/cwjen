import type { Metadata } from 'next';
import { Noto_Serif_TC, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoserif = Noto_Serif_TC({ 
  weight: ['400', '500', '600', '700'], 
  subsets: ['latin'],
  variable: '--font-serif' 
});

export const metadata: Metadata = {
  title: 'Titanic | Psychology Research',
  description: 'Academic resources and research notes on psychotherapy.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className={`${inter.variable} ${notoserif.variable}`}>
      <body className="bg-[#F7F5F3] text-stone-800 font-sans antialiased min-h-screen flex flex-col">
        
        {/* 頂部導覽列 (包含桌面 Hover 選單與手機漢堡選單) */}
        <Navbar />

        {/* 主要內容區域 */}
        {/* pt-20 是為了預留 Navbar 的高度，避免內容被遮擋 */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          {children}
        </main>
        
      </body>
    </html>
  );
}