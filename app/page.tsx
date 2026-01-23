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

export default function IndexPage() {
  
  return (
    <div className="min-h-screen bg-[#F8F8EC] font-sans text-[#3A4535] overflow-x-hidden selection:bg-[#E2C351] selection:text-white">
      
      {/* ================= HERO SECTION: 總綱 ================= */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A3BFA7] rounded-full opacity-10 -z-10 blur-3xl"></div>
        
        <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
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

        {/* Hero Collage */}
        <div className="relative h-[300px] md:h-[400px] w-full max-w-5xl mx-auto">
           {/* id02: 擴散的光 (思想) */}
           <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[280px] md:w-[400px] z-10 p-3 bg-white shadow-xl rotate-0 hover:rotate-1 transition-transform duration-700">
              <img src="https://cwjen.vercel.app/Photos/Index/id02.png" alt="放射狀光源" className="w-full h-auto"/>
           </div>
           {/* id05: 生長的植物 (生命) */}
           <div className="absolute left-[10%] bottom-0 w-[200px] md:w-[300px] z-20 shadow-lg -rotate-6 hover:rotate-0 transition-transform duration-700 bg-white p-2">
              <img src="https://cwjen.vercel.app/Photos/Index/id05.png" alt="植物枝葉" className="w-full h-auto"/>
           </div>
           {/* id08: 門 (邀請) */}
           <div className="absolute right-[10%] bottom-10 w-[180px] md:w-[280px] z-0 opacity-80 rotate-6">
              <img src="https://cwjen.vercel.app/Photos/Index/id08.png" alt="敞開的門" className="w-full h-auto"/>
           </div>
        </div>
      </section>

      {/* ================= BLOCK 1: 生活 (Life) ================= */}
      {/* 主題：受苦、脫苦、現實、專案。色調：Sage Green (#A3BFA7) */}
      <section className="py-24 bg-[#A3BFA7]/10 relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             {/* id01: 行走 (Action/Life) */}
             <div className="relative z-10 w-[80%] md:w-[350px] mx-auto shadow-2xl bg-white p-3 rotate-2 hover:rotate-0 transition-all duration-500">
                <img src="https://cwjen.vercel.app/Photos/Index/id01.png" alt="行走的人" className="w-full h-auto"/>
             </div>
             {/* id09: 觸碰 (Awareness) */}
             <div className="absolute -bottom-10 -left-10 md:left-0 w-[60%] md:w-[250px] z-20 border-4 border-[#F8F8EC] shadow-xl -rotate-3">
                <img src="https://cwjen.vercel.app/Photos/Index/id09.png" alt="向上伸展" className="w-full h-auto"/>
             </div>
             <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#A3BFA7] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 -z-0 blur-3xl"></div>
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
                  「有些思想，實際進入過不同的場域。<br/>
                  讓問題不只剩下一條路，也不急著被解決。」
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

      {/* ================= BLOCK 2: 人與人 (Connection) ================= */}
      {/* 主題：團體、孤獨、連結、真實。色調：Olive (#BAC680) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-full h-full bg-[#BAC680]/5 -skew-y-3 scale-110 z-0"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
               <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#BAC680] text-white text-xs tracking-widest font-bold uppercase rounded-full">Connection</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2F3A29]">
                 關於人與人：<br/>在關係中重新感覺安全
               </h2>
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
                 <p>
                   那種被接納的經驗，能讓人重新相信這個世界。<br/>
                   這是個別治療中看不到，卻在團體裡反覆遇見的。
                 </p>
               </div>
               <div className="pt-4">
                 <Link href="/group-therapy" className="inline-block px-8 py-3 border border-[#BAC680] text-[#5C6155] rounded-full hover:bg-[#BAC680] hover:text-white transition-all duration-300">
                   探索團體治療
                 </Link>
               </div>
            </div>

            <div className="relative h-[500px] w-full">
               {/* id11: 交織 (Complexity) */}
               <div className="absolute top-0 right-0 w-[60%] z-10 shadow-lg border-4 border-white">
                  <img src="https://cwjen.vercel.app/Photos/Index/id11.png" alt="枝葉交織" className="w-full h-auto"/>
               </div>
               {/* id06: 同步 (Resonance) */}
               <div className="absolute top-[30%] left-0 w-[55%] z-20 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img src="https://cwjen.vercel.app/Photos/Index/id06.png" alt="同步跳躍" className="w-full h-auto"/>
               </div>
               {/* id10: 依靠 (Support) */}
               <div className="absolute bottom-0 right-[10%] w-[60%] z-30 border-t-8 border-[#BAC680] shadow-xl bg-white -rotate-2">
                  <img src="https://cwjen.vercel.app/Photos/Index/id10.png" alt="相互依靠" className="w-full h-auto"/>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= BLOCK 3: 愛 (Love & Inquiry) ================= */}
      {/* 主題：喚醒、提問、依附、自己。色調：Mustard (#E2C351) */}
      <section className="py-24 bg-[#E2C351]/10 border-b border-[#E2C351]/30">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Section Header */}
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm mb-6">
                <Heart size={16} className="text-[#E2C351] fill-current" />
                <span className="text-xs font-bold tracking-widest text-[#5C6155] uppercase">Love & Self</span>
             </div>
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#2F3A29] mb-8">
               關於愛：<br/>往內看的旅程
             </h2>
             <p className="text-lg text-[#5C6155] max-w-2xl mx-auto leading-relaxed">
               接下來，嘗試喚醒看看。<br/>
               停頓一下，回到你自己。如果你願意，慢慢讀下去。
             </p>
          </div>

          {/* The Inquiry Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Left Column: Questions */}
            <div className="space-y-10 text-lg leading-[2] text-[#3A4535] font-light">
               <div>
                 <p>你怎麼看待自己？</p>
                 <p>你和別人相處的經驗是什麼？</p>
                 <p>做決定的時候，那個過程，你享受嗎？</p>
                 <p className="text-[#E2C351] font-medium italic">
                   它比較像纏在一起的毛線，<br/>
                   還是像站在山頂時的一陣清爽的微風？
                 </p>
               </div>

               <div className="w-full h-[1px] bg-[#E2C351]/30"></div>

               <div>
                 <p>你和媽媽的關係怎麼樣？</p>
                 <p>你談過戀愛嗎？對你來說，愛是什麼？</p>
                 <p>你愛自己嗎？你有愛的人嗎？</p>
               </div>

               <div className="w-full h-[1px] bg-[#E2C351]/30"></div>

               <div>
                 <p>有沒有一些事情，你其實很想忘記，卻怎麼樣也忘不了？</p>
                 <p>即使很多人告訴你放下，你還是放不下。</p>
                 <p className="font-bold text-[#2F3A29] mt-4">那些是什麼？我們要把它打開嗎？</p>
                 <p className="text-xl font-serif text-[#2F3A29] mt-6 bg-white/50 inline-block px-4 py-2">
                   這些經驗，從哪裡來？又要往哪裡去？
                 </p>
               </div>
            </div>

            {/* Right Column: Visuals */}
            <div className="relative space-y-12 mt-8 md:mt-0">
               {/* id12: 擁抱 (Intimacy) */}
               <div className="relative w-[80%] ml-auto z-10 shadow-lg rotate-2 hover:rotate-0 transition-transform duration-700">
                  <img src="https://cwjen.vercel.app/Photos/Index/id12.png" alt="擁抱" className="w-full h-auto border-4 border-white"/>
               </div>

               {/* id13: 滋養 (Self-Care) */}
               <div className="relative w-[70%] mr-auto z-20">
                  <div className="absolute inset-0 bg-[#E2C351] rounded-full opacity-20 blur-xl"></div>
                  <img src="https://cwjen.vercel.app/Photos/Index/id13.png" alt="花朵與圓" className="relative w-full h-auto rounded-full border-8 border-[#F8F8EC] shadow-2xl"/>
               </div>

               {/* id04: 釋放 (Freedom) */}
               <div className="relative w-[85%] ml-auto z-10 p-2 bg-white shadow-md -rotate-1 hover:rotate-0 transition-transform duration-700">
                  <img src="https://cwjen.vercel.app/Photos/Index/id04.png" alt="躍起" className="w-full h-auto"/>
               </div>
            </div>

          </div>
          
          <div className="text-center mt-20">
             <Link href="/couple-therapy" className="inline-flex items-center gap-2 text-[#E2C351] font-bold tracking-widest hover:text-[#2F3A29] transition-colors">
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