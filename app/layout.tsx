import type { Metadata } from 'next';
import { Noto_Serif_TC, Inter } from 'next/font/google';
import Navbar from '@/components/Navbar'; // 確保路徑正確指向剛才建立的 Navbar 組件
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
        
        {/* 這裡載入新的 Navbar，會取代原本藍色的 header */}
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