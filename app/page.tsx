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

// 定義 Banner 資料
const BANNERS = {
  b01: { src: "https://cwjen.vercel.app/Photos/banner/b01.png", text: "愛，有時誕生於渴望，卻無法存於生活。" },
  b02: { src: "https://cwjen.vercel.app/Photos/banner/b02.png", text: "線條向外分岔，思緒是多元開展。" },
  b03: { src: "https://cwjen.vercel.app/Photos/banner/b03.png", text: "生活是一種持續發生。" },
  b04: { src: "https://cwjen.vercel.app/Photos/banner/b04.png", text: "你如何感知。" },
};

export default function IndexPage() {
  
  return (
    <div className="min-h-screen bg-[#F8F8EC] font-sans text-[#3A4535] overflow-x-hidden selection:bg-[#E2C351] selection:text-white">
      
      {/* ================= HERO SECTION: 總綱 ================= */}
      <section className="pt-28 pb-16 px-6 md:pt-32 md:pb-20 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-8 md:mb-12">
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#E2C351] mx-auto mb-6 opacity-80" />
          
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-[#2F3A29] leading-tight md:leading-[1.3] tracking-wide mb-6 md:mb-8">
            這裡是為了提供<br className="hidden md:block" />
            <span className="relative inline-block px-2 md:px-4">
              <span className="relative z-10">能被人使用的思想</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-[#E2C351]/30 -z-0"></span>
            </span>
            <span className="inline md:hidden"> </span>
            而存在。
          </h1>
          
          <p className="text-lg md:text-xl text-[#5C6155] font-light leading-relaxed md:leading-relaxed">
            一句話、一個觀點、一種看事情的方式。<br className="hidden md:block" />
            讓別人比較容易找到那些彙整，<br className="md:hidden"/>
            讓思想變得可以捉摸，可以著墨。
          </p>
        </div>
      </section>

      {/* ================= FULL WIDTH BANNER 1: 感知 (b04) ================= */}
      <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden">
         <div className="absolute inset-0 bg-black/20 z-10"></div>
         <img 
           src={BANNERS.b04.src} 
           alt="Banner 04" 
           className="absolute inset-0 w-full h-full object-cover transition-transform duration-[20s] hover:scale-110"
         />
         <div className="absolute inset-0 flex items-center justify-center z-20 px-6 text-center">
            <h2 className="text-white text-3xl md:text-6xl font-serif font-bold tracking-widest drop-shadow-lg border-b-2 border-[#E2C351] pb-2 md:pb-4">
              {BANNERS.b04.text}
            </h2>
         </div>
      </section>

      {/* ================= BLOCK 1: 生活 (Life) ================= */}
      <section className="py-16 md:py-24 bg-[#A3BFA7]/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Mobile Order: Image first implies context, Text second explains it */}
          <div className="order-2 lg:order-1 relative h-[350px] md:h-[500px]">
             <div className="absolute top-0 left-4 md:top-10 md:left-10 w-[70%] z-10 shadow-xl bg-white p-2 rotate-2 hover:rotate-0 transition-all duration-500">
                <img src="https://cwjen.vercel.app/Photos/Index/id01.png" alt="行走的人" className="w-full h-auto"/>
             </div>
             <div className="absolute bottom-0 right-0 w-[50%] z-20 border-4 border-[#F8F8EC] shadow-lg -rotate-3">
                <img src="https://cwjen.vercel.app/Photos/Index/id09.png" alt="向上伸展" className="w-full h-auto"/>
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
            <div className="flex items-center gap-3 mb-2 md:mb-4">
              <span className="px-3 py-1 bg-[#A3BFA7] text-white text-xs tracking-widest font-bold uppercase rounded-full">Life & Reality</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#2F3A29]">
              關於生活：<br className="hidden md:block"/>
              <span className="md:hidden"> </span>
              人因何受苦，又如何脫苦
            </h2>
            <div className="space-y-4 md:space-y-6 text-[#4A5245] text-base md:text-lg leading-loose font-light text-justify md:text-left">
              <p>
                這裡的文字，大多來自我對人的理解。<br className="hidden md:block"/>
                心理治療與諮商，不只是診間裡的對話，
                更是關於我們如何在現實生活中活著。
              </p>
              <div className="p-5 md:p-6 bg-white/60 border-l-4 border-[#A3BFA7] rounded-r-lg">
                <p className="italic text-[#3A4535]">
                  「讓問題不只剩下一條路，<br className="inline md:hidden"/>也不急著被解決。」
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-2">
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

      {/* ================= FULL WIDTH BANNER 2: 持續發生 (b03) ================= */}
      <section className="relative w-full h-[45vh] md:h-[70vh] overflow-hidden">
         <div className="absolute inset-0 bg-[#3A4535]/30 z-10 mix-blend-multiply"></div>
         <img 
           src={BANNERS.b03.src} 
           alt="Banner 03" 
           className="absolute inset-0 w-full h-full object-cover object-center"
         />
         <div className="absolute bottom-8 left-6 md:bottom-12 md:left-24 z-20 max-w-[80%] md:max-w-2xl">
            <p className="text-white text-2xl md:text-5xl font-serif font-bold leading-tight drop-shadow-md">
              {BANNERS.b03.text}
            </p>
         </div>
      </section>

      {/* ================= BLOCK 2: 人與人 (Connection) ================= */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            <div className="space-y-6 md:space-y-8">
               <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <span className="px-3 py-1 bg-[#BAC680] text-white text-xs tracking-widest font-bold uppercase rounded-full">Connection</span>
               </div>
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#2F3A29]">
                 關於人與人：<br className="hidden md:block"/>
                 <span className="md:hidden"> </span>
                 在關係中重新感覺安全
               </h2>
               <div className="space-y-4 md:space-y-6 text-[#5C6155] text-base md:text-lg leading-loose font-light text-justify md:text-left">
                 <p>
                   在台灣，我們珍惜面子，報喜不報憂。
                   這樣的文化形成了一種困境：
                   <strong className="block mt-2 text-[#3A4535]">孤獨、缺乏被理解，關係停留在眼前卻難以深化。</strong>
                 </p>
                 <p>
                   我長期關注團體。因為團體所提供的，
                   是來自「他人」的回應。
                   不是出於工作或專業素養，而是人與人之間自然發生的真實。
                 </p>
               </div>
               <div className="pt-2 md:pt-4">
                 <Link href="/group-therapy" className="inline-block px-6 py-2 md:px-8 md:py-3 border border-[#BAC680] text-[#5C6155] rounded-full hover:bg-[#BAC680] hover:text-white transition-all duration-300 text-sm md:text-base">
                   探索團體治療
                 </Link>
               </div>
            </div>

            <div className="relative h-[350px] md:h-[500px] w-full mt-4 md:mt-0">
               <div className="absolute top-0 right-0 w-[60%] z-10 shadow-lg border-4 border-white">
                  <img src="https://cwjen.vercel.app/Photos/Index/id11.png" alt="枝葉交織" className="w-full h-auto"/>
               </div>
               <div className="absolute bottom-10 left-0 w-[55%] z-20 shadow-xl -rotate-2">
                  <img src="https://cwjen.vercel.app/Photos/Index/id06.png" alt="同步跳躍" className="w-full h-auto"/>
               </div>
            </div>
        </div>
      </section>

      {/* ================= FULL WIDTH BANNER 3: 多元開展 (b02) ================= */}
      <section className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden flex items-center justify-center">
         <div className="absolute inset-0 bg-[#BAC680]/40 z-10 mix-blend-overlay"></div>
         <img 
           src={BANNERS.b02.src} 
           alt="Banner 02" 
           className="absolute inset-0 w-full h-full object-cover"
         />
         <div className="relative z-20 bg-white/80 backdrop-blur-sm p-6 md:p-12 shadow-2xl max-w-[90%] md:max-w-3xl text-center">
            <p className="text-[#2F3A29] text-xl md:text-3xl font-serif font-bold">
              {BANNERS.b02.text}
            </p>
         </div>
      </section>

      {/* ================= BLOCK 3: 愛 (Love) ================= */}
      <section className="bg-[#E2C351]/10 border-b border-[#E2C351]/30 pb-16 md:pb-24">
        
        {/* Banner 4: 愛的渴望 (b01) */}
        <div className="relative w-full h-[55vh] md:h-[80vh] overflow-hidden mb-12 md:mb-16">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E2C351]/90 z-10"></div>
           <img 
             src={BANNERS.b01.src} 
             alt="Banner 01" 
             className="absolute inset-0 w-full h-full object-cover object-top"
           />
           <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 z-20 text-center">
              <Heart size={32} className="text-white mx-auto mb-4 md:mb-6 fill-current opacity-80" />
              <p className="text-white text-xl md:text-5xl font-serif font-bold leading-tight drop-shadow-md">
                 {BANNERS.b01.text.split('，')[0]}，<br/>
                 {BANNERS.b01.text.split('，')[1]}
              </p>
           </div>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
             <h2 className="text-2xl md:text-5xl font-serif font-bold text-[#2F3A29] mb-4">
               往內看的旅程
             </h2>
             <p className="text-base md:text-lg text-[#5C6155]">
               嘗試喚醒看看。停頓一下，回到你自己。
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 md:space-y-10 text-base md:text-lg leading-loose text-[#3A4535] font-light text-justify md:text-left">
               <div>
                 <p>你怎麼看待自己？</p>
                 <p>你和別人相處的經驗是什麼？</p>
                 <p className="text-[#E2C351] font-medium italic mt-2">
                   它比較像纏在一起的毛線，<br className="inline md:hidden" />
                   還是像站在山頂時的一陣清爽的微風？
                 </p>
               </div>
               <div className="w-full h-[1px] bg-[#E2C351]/30 my-2"></div>
               <div>
                 <p>你談過戀愛嗎？對你來說，愛是什麼？</p>
                 <p>你愛自己嗎？</p>
               </div>
               <div className="w-full h-[1px] bg-[#E2C351]/30 my-2"></div>
               <div>
                 <p className="font-bold text-[#2F3A29] mt-4">心裡埋了什麼？我們要把它打開嗎？</p>
                 <p className="text-lg md:text-xl font-serif text-[#2F3A29] mt-4 md:mt-6 bg-white/50 inline-block px-4 py-2 rounded-lg">
                   這些經驗，從哪裡來？<br className="md:hidden"/>又要往哪裡去？
                 </p>
               </div>
            </div>

            <div className="relative space-y-12 mt-4 md:mt-0">
               <div className="relative w-[80%] md:w-[70%] mx-auto z-20">
                  <div className="absolute inset-0 bg-[#E2C351] rounded-full opacity-30 blur-2xl"></div>
                  <img src="https://cwjen.vercel.app/Photos/Index/id13.png" alt="花朵與圓" className="relative w-full h-auto rounded-full border-4 md:border-8 border-[#F8F8EC] shadow-xl hover:scale-105 transition-transform duration-700"/>
               </div>
            </div>
          </div>
          
          <div className="text-center mt-16 md:mt-20">
             <Link href="/couple-therapy" className="inline-flex items-center gap-2 text-[#E2C351] font-bold tracking-widest hover:text-[#2F3A29] transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md text-sm md:text-base">
               <Circle size={12} fill="currentColor" /> 前往伴侶治療 <ArrowRight size={16} />
             </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER DECOR ================= */}
      <div className="py-12 bg-[#F8F8EC] text-center border-t border-[#BAC680]/30">
        <p className="font-serif italic text-[#79976B] text-base md:text-lg">
          "Love is a constant process of tuning in."
        </p>
        <p className="text-[10px] md:text-xs text-[#A3BFA7] mt-2 tracking-widest uppercase">
          © 2026 Titanic Research Lab
        </p>
      </div>

    </div>
  );
}