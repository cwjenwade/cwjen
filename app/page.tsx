"use client";

import React from 'react';
import { 
  Quote, 
  Sparkles,
  ArrowRight,
  Circle,
  Heart
} from 'lucide-react';
import Link from 'next/link';

// 定義 Banner 資料結構以便管理
const BANNERS = {
  b01: { src: "https://cwjen.vercel.app/Photos/banner/b01.jpg", text: "愛，有時誕生於渴望，卻無法存於生活。" },
  b02: { src: "https://cwjen.vercel.app/Photos/banner/b02.jpg", text: "線條向外分岔，思緒是多元開展。" },
  b03: { src: "https://cwjen.vercel.app/Photos/banner/b03.jpg", text: "生活是一種持續發生。" },
  b04: { src: "https://cwjen.vercel.app/Photos/banner/b04.jpg", text: "你如何感知。" },
};

export default function IndexPage() {
  
  return (
    <div className="min-h-screen bg-[#F8F8EC] font-sans text-[#3A4535] overflow-x-hidden selection:bg-[#E2C351] selection:text-white">
      
      {/* ================= HERO SECTION: 總綱 & 感知 ================= */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Background blur */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A3BFA7] rounded-full opacity-10 -z-10 blur-3xl"></div>
        
        {/* --- Banner Integration 1: b04 (你如何感知) --- */}
        {/* 將此圖作為開場的視覺提問 */}
        <div className="relative w-full max-w-4xl mx-auto mb-16 h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F3A29]/80 to-transparent z-10"></div>
          <img 
            src={BANNERS.b04.src} 
            alt="Banner 04" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-8 left-8 md:left-12 z-20">
            <p className="text-white text-3xl md:text-4xl font-serif font-bold tracking-wide border-l-4 border-[#E2C351] pl-4">
              {BANNERS.b04.text}
            </p>
          </div>
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <Quote className="w-10 h-10 text-[#E2C351] mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2F3A29] leading-[1.3] tracking-wide mb-8">
            這裡是為了提供<br/>
            <span className="relative inline-block px-4">
              <span className="relative z-10">能被人使用的思想</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-[#E2C351]/30 -z-0"></span>
            </span>
            而存在。
          </h1>
          <p className="text-xl text-[#5C6155] font-light leading-relaxed">
            一句話、一個觀點、一種看事情的方式。<br/>
            讓別人比較容易找到那些彙整，<br className="md:hidden"/>讓思想變得可以捉摸，可以著墨。
          </p>
        </div>
      </section>

      {/* ================= BLOCK 1: 生活 (Life) & 持續發生 ================= */}
      <section className="py-24 bg-[#A3BFA7]/10 relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- Banner Integration 2: b03 (生活是一種持續發生) --- */}
          <div className="order-2 lg:order-1 relative">
             <div className="relative z-10 w-full shadow-2xl bg-white p-2 rounded-xl -rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="relative rounded-lg overflow-hidden">
                  <img src={BANNERS.b03.src} alt="Banner 03" className="w-full h-auto"/>
                  {/* 文字疊加層 */}
                  <div className="absolute inset-0 bg-[#A3BFA7]/40 mix-blend-multiply transition-opacity hover:opacity-0"></div>
                  <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#3A4535] to-transparent">
                    <p className="text-white text-2xl font-serif font-bold">{BANNERS.b03.text}</p>
                  </div>
                </div>
             </div>
             
             {/* 保留原本的裝飾元素增加層次感 */}
             <div className="absolute -bottom-10 -left-10 md:-left-12 w-[40%] z-20 border-4 border-[#F8F8EC] shadow-xl rotate-3">
                <img src="https://cwjen.vercel.app/Photos/Index/id09.png" alt="向上伸展" className="w-full h-auto rounded-lg"/>
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#A3BFA7] text-white text-xs tracking-widest font-bold uppercase rounded-full">Life & Reality</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F3A29]">
              關於生活：<br/>人因何受苦，又如何脫苦
            </h2>
            <div className="space-y-6 text-[#4A5245] text-lg leading-loose font-light">
              <p>
                這裡的文字，大多來自我對人的理解。<br/>
                心理治療與諮商，不只是診間裡的對話，<br/>
                更是關於我們如何在現實生活中活著。
              </p>
              <p>
                從心理治療的各個學派，到實際進入場域的專案計畫。<br/>
                這裡記錄了那些被執行過的痕跡。
              </p>
              <div className="p-6 bg-white/60 border-l-4 border-[#A3BFA7] rounded-r-lg">
                <p className="italic text-[#3A4535]">
                  「讓問題不只剩下一條路，也不急著被解決。」
                </p>
              </div>
            </div>
            <div className="flex gap-6 pt-4">
               <Link href="/psychotherapy" className="group flex items-center gap-2 text-[#79976B] font-bold border-b border-transparent hover:border-[#79976B] transition-all">
                 <Sparkles size={18} /> 心理治療 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
               </Link>
               <Link href="/project" className="group flex items-center gap-2 text-[#79976B] font-bold border-b border-transparent hover:border-[#79976B] transition-all">
                 <Sparkles size={18} /> 專案計畫 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
               </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BLOCK 2: 人與人 (Connection) & 多元開展 ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[#BAC680]/5 -skew-y-3 scale-110 z-0"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 order-2 lg:order-1">
               <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#BAC680] text-white text-xs tracking-widest font-bold uppercase rounded-full">Connection</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F3A29]">
                 關於人與人：<br/>在關係中重新感覺安全
               </h2>
               
               {/* --- Banner Integration 3: b02 (線條向外分岔) --- */}
               <div className="relative w-full my-8 rounded-xl overflow-hidden shadow-lg">
                  <img src={BANNERS.b02.src} alt="Banner 02" className="w-full h-auto object-cover opacity-90"/>
                  <div className="absolute inset-0 bg-[#BAC680] mix-blend-overlay opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <p className="text-white text-2xl md:text-3xl font-serif font-bold text-center drop-shadow-md">
                      {BANNERS.b02.text}
                    </p>
                  </div>
               </div>

               <div className="space-y-6 text-[#5C6155] text-lg leading-loose font-light">
                 <p>
                   在台灣，我們珍惜面子，報喜不報憂。<br/>
                   這樣的文化形成了一種困境：<br/>
                   <strong>孤獨、缺乏被理解，關係停留在眼前卻難以深化。</strong>
                 </p>
                 <p>
                   我長期關注團體。因為團體所提供的，<br/>
                   是來自「他人」的回應。<br/>
                   不是出於工作或專業素養，而是人與人之間自然發生的真實。
                 </p>
               </div>
               <div className="pt-4">
                 <Link href="/group-therapy" className="inline-block px-8 py-3 border border-[#BAC680] text-[#5C6155] rounded-full hover:bg-[#BAC680] hover:text-white transition-all duration-300">
                   探索團體治療
                 </Link>
               </div>
            </div>

            {/* 保留原本的拼貼元素在右側，維持風格 */}
            <div className="relative h-[500px] w-full order-1 lg:order-2">
               <div className="absolute top-0 right-0 w-[70%] z-10 shadow-lg border-4 border-white rounded-lg overflow-hidden">
                  <img src="https://cwjen.vercel.app/Photos/Index/id11.png" alt="枝葉交織" className="w-full h-auto"/>
               </div>
               <div className="absolute top-[30%] left-0 w-[60%] z-20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 rounded-lg overflow-hidden">
                  <img src="https://cwjen.vercel.app/Photos/Index/id06.png" alt="同步跳躍" className="w-full h-auto"/>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BLOCK 3: 愛 (Love) & 渴望與生活 ================= */}
      <section className="py-24 bg-[#E2C351]/10 border-b border-[#E2C351]/30">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="text-center mb-12">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm mb-6">
                <Heart size={16} className="text-[#E2C351] fill-current" />
                <span className="text-xs font-bold tracking-widest text-[#5C6155] uppercase">Love & Self</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2F3A29] mb-8">
               關於愛：<br/>往內看的旅程
             </h2>
          </div>

          {/* --- Banner Integration 4: b01 (愛，有時誕生於渴望...) --- */}
          {/* 作為此區塊的核心視覺 */}
          <div className="relative w-full max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
             <img src={BANNERS.b01.src} alt="Banner 01" className="w-full h-auto"/>
             <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#E2C351]/90 via-[#E2C351]/70 to-transparent">
                <p className="text-white text-2xl md:text-4xl font-serif font-bold leading-tight drop-shadow-sm">
                   {BANNERS.b01.text.split('，')[0]}，<br/>
                   {BANNERS.b01.text.split('，')[1]}
                </p>
             </div>
          </div>

          {/* The Inquiry Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            
            {/* Left Column: Questions */}
            <div className="space-y-10 text-lg leading-[2] text-[#3A4535] font-light">
               <div>
                 <p>你怎麼看待自己？</p>
                 <p>你和別人相處的經驗是什麼？</p>
                 <p className="text-[#E2C351] font-medium italic">
                   它比較像纏在一起的毛線，<br/>
                   還是像站在山頂時的一陣清爽的微風？
                 </p>
               </div>
               <div className="w-full h-[1px] bg-[#E2C351]/30"></div>
               <div>
                 <p>你談過戀愛嗎？對你來說，愛是什麼？</p>
                 <p>你愛自己嗎？你有愛的人嗎？</p>
               </div>
               <div className="w-full h-[1px] bg-[#E2C351]/30"></div>
               <div>
                 <p className="font-bold text-[#2F3A29] mt-4">心裡埋了什麼？我們要把它打開嗎？</p>
                 <p className="text-xl font-serif text-[#2F3A29] mt-6 bg-white/50 inline-block px-4 py-2 rounded-lg">
                   這些經驗，從哪裡來？又要往哪裡去？
                 </p>
               </div>
            </div>

            {/* Right Column: Visuals */}
            <div className="relative space-y-12 mt-8 md:mt-0">
               {/* id13: 滋養 (Self-Care) */}
               <div className="relative w-[70%] mx-auto z-20">
                  <div className="absolute inset-0 bg-[#E2C351] rounded-full opacity-30 blur-2xl"></div>
                  <img src="https://cwjen.vercel.app/Photos/Index/id13.png" alt="花朵與圓" className="relative w-full h-auto rounded-full border-8 border-[#F8F8EC] shadow-xl hover:scale-105 transition-transform duration-700"/>
               </div>
            </div>

          </div>
          
          <div className="text-center mt-20">
             <Link href="/couple-therapy" className="inline-flex items-center gap-2 text-[#E2C351] font-bold tracking-widest hover:text-[#2F3A29] transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md">
               <Circle size={12} fill="currentColor" /> 前往伴侶治療 <ArrowRight size={16} />
             </Link>
          </div>

        </div>
      </section>

      {/* ================= FOOTER DECOR ================= */}
      <div className="py-12 bg-[#F8F8EC] text-center border-t border-[#BAC680]/30">
        <p className="font-serif italic text-[#79976B] text-lg">
          "Love is a constant process of tuning in."
        </p>
        <p className="text-xs text-[#A3BFA7] mt-2 tracking-widest uppercase">
          © 2026 Titanic Research Lab
        </p>
      </div>

    </div>
  );
}