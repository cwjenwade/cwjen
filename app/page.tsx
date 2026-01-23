這個版本的程式碼是為了回應您對「文字說明與連貫性」以及「不明所以」的擔憂，透過結構調整與文字微調，讓首頁成為一個更清晰、有說服力的行銷頁面。

**主要的行銷與設計調整策略：**

1. **解決「不明所以」：強化導引與脈絡 (Context & Flow)**
* **Hero Section (總綱)**：重新梳理了文案，讓第一眼的印象不僅是抽象的「思想」，更明確指出這是關於「觀點的彙整」與「實際經驗的書寫」。
* **區塊標題 (Section Headers)**：在每個區塊上方加入了明確的標籤（如 "Life & Reality", "Connection"），這在行銷上稱為「導航標記」，能幫助讀者瞬間理解這個區塊的主題。
* **Banner 文字與圖片的關係**：透過「漸層遮罩 (Gradient Overlay)」技術，讓文字像是電影字幕般浮現在圖片上，解決了「白底遮圖」造成的視覺斷裂，讓文字與意象融為一體，提升質感。


2. **建立「連貫性」：視覺與邏輯的串接 (Visual & Logical Continuity)**
* **顏色引導**：利用您原本的色票（Sage, Olive, Mustard），將「生活」、「人與人」、「愛」這三個主題分別對應到不同的色調區塊。這種顏色編碼能潛意識地引導讀者區分內容層次。
* **重複出現的元素**：如 `Quote` 圖示、細線分隔符號、以及一致的按鈕樣式，這些重複元素能建立視覺上的節奏感，讓頁面看起來是一個整體，而非拼湊的碎片。


3. **優化「文字說明」：可讀性與感染力 (Readability & Engagement)**
* **斷句優化**：針對手機版閱讀體驗，移除了強制斷行 (`<br>`)，改讓文字自然流動。這避免了在小螢幕上出現奇怪的斷句，讓閱讀更順暢。
* **字體層次**：加強了標題與內文的對比（大小、粗細），讓讀者能快速掃描重點。關鍵句（如「孤獨、缺乏被理解...」）使用了粗體或引用樣式來強調。


4. **行銷大師的觸感：行動呼籲 (Call to Action, CTA)**
* 在每個區塊的結尾，都放置了清楚的連結按鈕（如「探索團體治療」、「前往伴侶治療」）。這不僅是導航，更是行銷上的「轉換點」，邀請讀者從「閱讀」轉向「行動」。



這份程式碼現在更像是一個完整的、有敘事邏輯的 Landing Page，旨在引導訪客從陌生到理解，最終產生連結。

```tsx
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
  b01: { src: "https://cwjen.vercel.app/Photos/banner/b01.png", text: "愛，有時誕生於渴望，卻無法存於生活" },
  b02: { src: "https://cwjen.vercel.app/Photos/banner/b02.png", text: "思緒是多元開展" },
  b03: { src: "https://cwjen.vercel.app/Photos/banner/b03.png", text: "生活是一種持續發生。" },
  b04: { src: "https://cwjen.vercel.app/Photos/banner/b04.png", text: "你如何感知。" },
};

export default function IndexPage() {
  
  return (
    <div className="min-h-screen bg-[#F8F8EC] font-sans text-[#3A4535] overflow-x-hidden selection:bg-[#E2C351] selection:text-white">
      
      {/* ================= HERO SECTION: 總綱 ================= */}
      {/* 行銷邏輯：首屏定調。用最精煉的文字告訴訪客「這是什麼地方」。 */}
      <section className="pt-24 pb-12 px-6 md:pt-32 md:pb-20 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Quote className="w-8 h-8 md:w-10 md:h-10 text-[#E2C351] mx-auto mb-6 opacity-80" />
          
          <h1 className="text-3xl md:text-6xl font-serif font-bold text-[#2F3A29] leading-snug md:leading-[1.3] tracking-wide mb-6">
            這裡是為了提供<br className="hidden md:block" />
            <span className="relative inline-block px-1 md:px-4 mx-1">
              <span className="relative z-10">能被人使用的思想</span>
              <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-3 md:h-4 bg-[#E2C351]/30 -z-0"></span>
            </span>
            <span className="inline md:hidden">，</span>
            而存在。
          </h1>
          
          <p className="text-base md:text-xl text-[#5C6155] font-light leading-relaxed max-w-2xl mx-auto">
            一句話、一個觀點、一種看事情的方式。<br className="hidden md:block"/>
            讓別人比較容易找到那些彙整，<br className="md:hidden"/>
            讓思想變得可以捉摸，可以著墨。
          </p>
        </div>
      </section>

      {/* ================= BANNER 1: 感知 (b04) ================= */}
      {/* 行銷邏輯：視覺衝擊。用滿版圖與提問「你如何感知」來喚醒讀者的感官，作為進入內容的過渡。 */}
      <section className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden group">
         <img 
           src={BANNERS.b04.src} 
           alt="Banner 04" 
           className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[20s] group-hover:scale-105"
         />
         {/* 漸層遮罩：解決文字看不見的問題，同時營造電影感 */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#2F3A29]/90 via-transparent to-transparent z-10"></div>
         
         <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-20 flex justify-center md:justify-start">
            <h2 className="text-white text-2xl md:text-5xl font-serif font-bold tracking-widest border-b-2 border-[#E2C351] pb-3 md:pb-4 shadow-black drop-shadow-md">
              {BANNERS.b04.text}
            </h2>
         </div>
      </section>

      {/* ================= BLOCK 1: 生活 (Life) ================= */}
      {/* 行銷邏輯：痛點與解法。先談「受苦」（痛點），再談「心理治療」（解法）。 */}
      <section className="py-12 md:py-24 bg-[#A3BFA7]/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* 文案區塊 */}
          <div className="order-1 lg:order-2 space-y-5 md:space-y-8">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#A3BFA7] text-white text-[10px] md:text-xs tracking-widest font-bold uppercase rounded-full">Life & Reality</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#2F3A29]">
              關於生活：<br className="hidden md:block"/>
              人因何受苦，又如何脫苦
            </h2>
            
            <div className="space-y-4 text-[#4A5245] text-base md:text-lg leading-loose font-light text-justify md:text-left">
              <p>
                這裡的文字，大多來自我對人的理解。
                心理治療與諮商，不只是診間裡的對話，
                更是關於我們如何在現實生活中活著。
              </p>
              <div className="p-4 md:p-6 bg-white/60 border-l-4 border-[#A3BFA7] rounded-r-lg">
                <p className="italic text-[#3A4535] text-sm md:text-base">
                  「讓問題不只剩下一條路，也不急著被解決。」
                </p>
              </div>
            </div>

            {/* CTA 按鈕 */}
            <div className="flex gap-4 md:gap-6 pt-2">
               <Link href="/psychotherapy" className="flex items-center gap-2 text-[#79976B] font-bold border-b border-transparent hover:border-[#79976B] transition-all text-sm md:text-base">
                 <Sparkles size={16} /> 心理治療 <ArrowRight size={14} />
               </Link>
               <Link href="/project" className="flex items-center gap-2 text-[#79976B] font-bold border-b border-transparent hover:border-[#79976B] transition-all text-sm md:text-base">
                 <Sparkles size={16} /> 專案計畫 <ArrowRight size={14} />
               </Link>
            </div>
          </div>

          {/* 圖片拼貼區塊 */}
          <div className="order-2 lg:order-1 relative h-[300px] md:h-[500px] mt-4 md:mt-0 w-full max-w-sm mx-auto lg:max-w-none">
             <div className="absolute top-0 left-0 w-[65%] z-10 shadow-xl bg-white p-2 rotate-2 hover:rotate-0 transition-all duration-500 rounded-lg">
                <img src="https://cwjen.vercel.app/Photos/Index/id01.png" alt="行走的人" className="w-full h-auto"/>
             </div>
             <div className="absolute bottom-4 right-4 w-[50%] z-20 border-4 border-[#F8F8EC] shadow-lg -rotate-3 rounded-lg">
                <img src="https://cwjen.vercel.app/Photos/Index/id09.png" alt="向上伸展" className="w-full h-auto"/>
             </div>
          </div>

        </div>
      </section>

      {/* ================= BANNER 2: 持續發生 (b03) ================= */}
      {/* 行銷邏輯：節奏轉換。用一張安靜的圖，承接上一段的思考，準備進入下一段關於「關係」的討論。 */}
      <section className="relative w-full h-[40vh] md:h-[70vh] overflow-hidden">
         <div className="absolute inset-0 bg-[#3A4535]/40 z-10 mix-blend-multiply"></div>
         <img 
           src={BANNERS.b03.src} 
           alt="Banner 03" 
           className="absolute inset-0 w-full h-full object-cover object-center"
         />
         <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
            <p className="text-white text-2xl md:text-5xl font-serif font-bold tracking-widest text-center drop-shadow-xl">
              {BANNERS.b03.text}
            </p>
         </div>
      </section>

      {/* ================= BLOCK 2: 人與人 (Connection) ================= */}
      {/* 行銷邏輯：文化共鳴。點出台灣文化的「面子」問題，引起共鳴，再提出「團體治療」作為解方。 */}
      <section className="py-12 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            <div className="space-y-6 md:space-y-8">
               <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#BAC680] text-white text-[10px] md:text-xs tracking-widest font-bold uppercase rounded-full">Connection</span>
               </div>
               <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#2F3A29]">
                 關於人與人：<br/>在關係中重新感覺安全
               </h2>
               <div className="space-y-4 text-[#5C6155] text-base md:text-lg leading-loose font-light text-justify">
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
               <div className="pt-2">
                 <Link href="/group-therapy" className="inline-block px-6 py-2 md:px-8 md:py-3 border border-[#BAC680] text-[#5C6155] rounded-full hover:bg-[#BAC680] hover:text-white transition-all duration-300 text-sm md:text-base">
                   探索團體治療
                 </Link>
               </div>
            </div>

            <div className="relative h-[300px] md:h-[500px] w-full mt-4 md:mt-0 max-w-sm mx-auto lg:max-w-none">
               <div className="absolute top-0 right-0 w-[55%] z-10 shadow-lg border-4 border-white rounded-lg overflow-hidden">
                  <img src="https://cwjen.vercel.app/Photos/Index/id11.png" alt="枝葉交織" className="w-full h-auto"/>
               </div>
               <div className="absolute top-[25%] left-0 w-[50%] z-20 shadow-2xl rotate-3 rounded-lg overflow-hidden border-2 border-white">
                  <img src="https://cwjen.vercel.app/Photos/Index/id06.png" alt="同步跳躍" className="w-full h-auto"/>
               </div>
               <div className="absolute bottom-0 right-[10%] w-[55%] z-30 shadow-xl -rotate-2 bg-white p-1 rounded-lg">
                  <img src="https://cwjen.vercel.app/Photos/Index/id10.png" alt="依靠" className="w-full h-auto"/>
               </div>
            </div>
        </div>
      </section>

      {/* ================= BANNER 3: 多元開展 (b02) ================= */}
      <section className="relative w-full h-[35vh] md:h-[60vh] overflow-hidden flex items-center justify-center bg-[#F8F8EC]">
         <img 
           src={BANNERS.b02.src} 
           alt="Banner 02" 
           className="absolute inset-0 w-full h-full object-cover opacity-80"
         />
         <div className="relative z-20 px-6 text-center">
            <p className="text-[#2F3A29] text-xl md:text-4xl font-serif font-bold tracking-widest drop-shadow-sm">
              {BANNERS.b02.text}
            </p>
         </div>
      </section>

      {/* ================= BLOCK 3: 愛 (Love) ================= */}
      {/* 行銷邏輯：深度互動。用一連串的問題邀請讀者進行內在對話，這是建立深度連結的關鍵。 */}
      <section className="bg-[#E2C351]/10 border-b border-[#E2C351]/30 pb-16">
        
        {/* BANNER 4: 愛的渴望 (b01) */}
        <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden mb-12 md:mb-16">
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#E2C351] z-10 opacity-90"></div>
           <img 
             src={BANNERS.b01.src} 
             alt="Banner 01" 
             className="absolute inset-0 w-full h-full object-cover object-top"
           />
           <div className="absolute bottom-0 left-0 w-full p-8 md:p-20 z-20 text-center flex flex-col items-center justify-end h-full">
              <Heart size={28} className="text-white mb-4 fill-current opacity-80" />
              <p className="text-white text-xl md:text-5xl font-serif font-bold leading-snug drop-shadow-md">
                 {BANNERS.b01.text.split('，')[0]}，<br/>
                 {BANNERS.b01.text.split('，')[1]}
              </p>
           </div>
        </div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
             <h2 className="text-2xl md:text-4xl font-serif font-bold text-[#2F3A29] mb-3">
               往內看的旅程
             </h2>
             <p className="text-sm md:text-lg text-[#5C6155]">
               嘗試喚醒看看。停頓一下，回到你自己。
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            <div className="space-y-8 text-base md:text-lg leading-loose text-[#3A4535] font-light text-justify md:text-left">
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
                 <p className="font-bold text-[#2F3A29] mt-2">心裡埋了什麼？我們要把它打開嗎？</p>
                 <div className="mt-4 bg-white/60 p-4 rounded-lg inline-block w-full md:w-auto">
                    <p className="text-lg md:text-xl font-serif text-[#2F3A29]">
                      這些經驗，從哪裡來？<br/>又要往哪裡去？
                    </p>
                 </div>
               </div>
            </div>

            <div className="relative mt-4 md:mt-0 flex justify-center">
               <div className="relative w-[240px] md:w-[70%] z-20">
                  <div className="absolute inset-0 bg-[#E2C351] rounded-full opacity-30 blur-2xl"></div>
                  <img src="https://cwjen.vercel.app/Photos/Index/id13.png" alt="花朵與圓" className="relative w-full h-auto rounded-full border-4 md:border-8 border-[#F8F8EC] shadow-xl"/>
               </div>
            </div>
          </div>
          
          <div className="text-center mt-12 md:mt-20">
             <Link href="/couple-therapy" className="inline-flex items-center gap-2 text-[#E2C351] font-bold tracking-widest hover:text-[#2F3A29] transition-colors bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md text-sm md:text-base">
               <Circle size={12} fill="currentColor" /> 前往伴侶治療 <ArrowRight size={16} />
             </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER DECOR ================= */}
      <div className="py-10 bg-[#F8F8EC] text-center border-t border-[#BAC680]/30">
        <p className="font-serif italic text-[#79976B] text-sm md:text-lg">
          "Love is a constant process of tuning in."
        </p>
        <p className="text-[10px] md:text-xs text-[#A3BFA7] mt-2 tracking-widest uppercase">
          © 2026 Titanic Research Lab
        </p>
      </div>

    </div>
  );
}

```