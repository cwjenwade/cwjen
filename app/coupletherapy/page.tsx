'use client';

import React from 'react';
import { 
  HeartHandshake, 
  RefreshCw, 
  Fingerprint, 
  Anchor 
} from 'lucide-react';

// --- 插圖組件：抽象線條藝術 ---

// 1. 衝突與糾結 (The Tangle)
const IllustrationConflict = () => (
  <svg viewBox="0 0 200 120" className="w-full max-w-[200px] h-auto opacity-80" aria-hidden="true">
    <path 
      d="M20,60 C50,20 50,100 80,60 C110,20 110,100 140,60 C170,20 170,100 190,60" 
      fill="none" 
      stroke="#78716c" // stone-500
      strokeWidth="2" 
      className="animate-pulse"
    />
    <path 
      d="M20,60 C50,100 50,20 80,60 C110,100 110,20 140,60 C170,100 170,20 190,60" 
      fill="none" 
      stroke="#ef4444" // red-500, 代表激烈的訊號
      strokeWidth="2" 
      strokeOpacity="0.4"
    />
  </svg>
);

// 2. 孤獨與距離 (The Gap)
const IllustrationLoneliness = () => (
  <svg viewBox="0 0 200 100" className="w-full max-w-[200px] h-auto opacity-80" aria-hidden="true">
    <path 
      d="M10,30 Q50,30 90,30" 
      fill="none" 
      stroke="#78716c" 
      strokeWidth="2" 
      strokeDasharray="4 4" // 虛線代表斷裂
    />
    <path 
      d="M110,70 Q150,70 190,70" 
      fill="none" 
      stroke="#78716c" 
      strokeWidth="2" 
      strokeDasharray="4 4"
    />
    <circle cx="90" cy="30" r="3" fill="#78716c" />
    <circle cx="110" cy="70" r="3" fill="#78716c" />
  </svg>
);

// 3. 修復與共舞 (The Dance)
const IllustrationLove = () => (
  <svg viewBox="0 0 200 120" className="w-full max-w-[200px] h-auto opacity-80" aria-hidden="true">
    <path 
      d="M10,60 C60,10 60,110 110,60 S160,10 210,60" 
      fill="none" 
      stroke="#0d9488" // teal-600
      strokeWidth="2.5" 
    />
    <path 
      d="M10,60 C60,110 60,10 110,60 S160,110 210,60" 
      fill="none" 
      stroke="#14b8a6" // teal-500
      strokeWidth="2.5" 
      strokeOpacity="0.6"
    />
  </svg>
);

export default function CoupleTherapyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F3] pt-32 pb-20 font-sans">
      
      {/* --- Header Section: 核心隱喻 --- */}
      <section className="max-w-4xl mx-auto px-6 mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200/50 rounded-full mb-8">
          <HeartHandshake size={16} className="text-teal-700" />
          <span className="text-xs font-bold tracking-[0.15em] text-stone-600 uppercase">
            Emotionally Focused Therapy
          </span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-800 leading-[1.2] mb-10">
          在關係的斷裂處<br />
          <span className="text-teal-800/80">練習重新降落</span>
        </h1>

        <div className="relative max-w-2xl mx-auto">
          <p className="text-stone-600 text-lg md:text-xl font-light leading-loose tracking-wide">
            每一次激烈的爭吵，或令人窒息的冷戰，<br className="hidden md:block"/>
            本質上都只是一句無聲的呼喊：<br />
            <span className="block mt-4 font-serif text-2xl text-stone-800 italic">
              「你還在乎我嗎？我對你來說重要嗎？」
            </span>
          </p>
        </div>
      </section>

      {/* --- Section 1: 衝突與惡性循環 (The Cycle) --- */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* 左側：文字論述 */}
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="font-serif text-3xl text-stone-800">
              看見那支「令人痛苦的舞」
            </h2>
            <div className="prose prose-stone text-stone-600 leading-relaxed text-justify">
              <p>
                許多伴侶來到治療室時，感到精疲力竭。他們困惑：「為什麼我們總是為了同樣的小事爭吵？」、「為什麼我越努力解釋，他越是沈默？」
              </p>
              <p>
                在情緒取向治療（EFT）的視角中，我們不將彼此視為敵人，而是共同指認出真正的敵人——<strong>「惡性循環模式」</strong>。
              </p>
              <p className="border-l-4 border-teal-700/30 pl-4 italic text-stone-700">
                一方因為恐懼失去連結而「抗議、指責」（追逐）；<br/>
                另一方因為恐懼衝突與失敗而「封閉、抽離」（逃避）。
              </p>
              <p>
                這不是誰的錯，而是當安全感匱乏時，人類本能的求生反應。
              </p>
            </div>
          </div>

          {/* 右側：視覺意象 (衝突線條) */}
          <div className="order-1 md:order-2 flex flex-col items-center justify-center p-10 bg-white rounded-3xl shadow-sm border border-stone-100">
            <IllustrationConflict />
            <div className="mt-8 text-center space-y-2">
              <span className="block text-sm font-bold text-stone-400 tracking-widest uppercase">The Negative Cycle</span>
              <p className="text-xs text-stone-500 font-serif">焦慮的訊號 vs 迴避的訊號</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: 冰山下的孤獨 (Vulnerability) --- */}
      <section className="bg-stone-200/30 py-24 mb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* 左側：視覺意象 (距離) */}
            <div className="flex flex-col items-center justify-center p-10 bg-[#F7F5F3] rounded-3xl shadow-inner border border-stone-200">
              <IllustrationLoneliness />
              <div className="mt-8 text-center space-y-2">
                 <span className="block text-sm font-bold text-stone-400 tracking-widest uppercase">Emotional Distance</span>
                 <p className="text-xs text-stone-500 font-serif">表面的憤怒，掩蓋了底層的孤獨</p>
              </div>
            </div>

            {/* 右側：文字論述 */}
            <div className="space-y-6">
              <h2 className="font-serif text-3xl text-stone-800">
                憤怒是悲傷的保鑣
              </h2>
              <div className="prose prose-stone text-stone-600 leading-relaxed text-justify">
                <p>
                  當我們在關係中感到不安全時，直接展現脆弱是危險的。因此，我們往往穿上盔甲。那些尖銳的話語、冷漠的背影，其實都是為了保護心裡那個受傷的小孩。
                </p>
                <p>
                  我們將在治療中慢下來，去聽懂那些憤怒背後的孤單，去辨識那些冷漠背後的無助。
                </p>
                <div className="bg-white p-6 rounded-xl border border-stone-200/50 shadow-sm mt-6">
                  <p className="text-stone-800 font-medium mb-2 flex items-center gap-2">
                    <Fingerprint size={18} className="text-teal-700"/>
                    核心任務
                  </p>
                  <p className="text-sm text-stone-500">
                    從「互貼標籤」（你就是自私、你就是情緒化）轉向「情緒的解碼」（原來當我轉身離開時，你感覺到的是被拋棄）。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 3: 修復的三階段 (The Roadmap) --- */}
      <section className="max-w-4xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">依附關係的修復地圖</h2>
          <p className="text-stone-500 font-light">EFT 治療歷程的三個階段</p>
        </div>

        <div className="space-y-6">
          {/* Stage 1 */}
          <div className="group relative bg-white p-8 rounded-2xl border border-stone-200 hover:border-teal-600/30 transition-all duration-500 hover:shadow-lg hover:shadow-stone-200/50">
            <div className="absolute top-8 right-8 text-stone-100 font-serif text-6xl font-bold -z-10 group-hover:text-teal-50 transition-colors select-none">01</div>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-stone-100 rounded-lg text-stone-500 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                <RefreshCw size={20} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 pt-1">停下傷害 (De-escalation)</h3>
            </div>
            <p className="text-stone-600 font-light leading-relaxed pl-[3.25rem]">
              辨識並停止惡性循環。在這個階段，我們不急著解決問題，而是先建立安全感，讓雙方能放下武器，看見彼此是如何被捲入這場風暴的。
            </p>
          </div>

          {/* Stage 2 */}
          <div className="group relative bg-white p-8 rounded-2xl border border-stone-200 hover:border-teal-600/30 transition-all duration-500 hover:shadow-lg hover:shadow-stone-200/50">
            <div className="absolute top-8 right-8 text-stone-100 font-serif text-6xl font-bold -z-10 group-hover:text-teal-50 transition-colors select-none">02</div>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-stone-100 rounded-lg text-stone-500 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                <Anchor size={20} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 pt-1">重建連結 (Restructuring)</h3>
            </div>
            <p className="text-stone-600 font-light leading-relaxed pl-[3.25rem]">
              這是治療的核心。引導雙方在安全的氛圍下，向對方表達深層的恐懼與依附需求。當脆弱被對方溫柔地接住，一種新的情感經驗（Corrective Emotional Experience）就此產生。
            </p>
          </div>

          {/* Stage 3 */}
          <div className="group relative bg-white p-8 rounded-2xl border border-stone-200 hover:border-teal-600/30 transition-all duration-500 hover:shadow-lg hover:shadow-stone-200/50">
            <div className="absolute top-8 right-8 text-stone-100 font-serif text-6xl font-bold -z-10 group-hover:text-teal-50 transition-colors select-none">03</div>
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-stone-100 rounded-lg text-stone-500 group-hover:bg-teal-50 group-hover:text-teal-700 transition-colors">
                <HeartHandshake size={20} />
              </div>
              <h3 className="text-xl font-bold text-stone-800 pt-1">穩固與整合 (Consolidation)</h3>
            </div>
            <p className="text-stone-600 font-light leading-relaxed pl-[3.25rem]">
              當情感連結穩固後，我們才回頭處理生活中的實際衝突。這時你們不再是互鬥的敵人，而是能夠協商、互相支援的隊友。
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 4: 結語與意象 (Conclusion) --- */}
      <section className="bg-stone-800 text-stone-200 py-24 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="mb-10 flex justify-center opacity-80">
            {/* 使用淺色版本的 Love Illustration */}
            <svg viewBox="0 0 200 120" className="w-full max-w-[150px] h-auto" aria-hidden="true">
              <path 
                d="M10,60 C60,10 60,110 110,60 S160,10 210,60" 
                fill="none" 
                stroke="#ccfbf1" // teal-100
                strokeWidth="2" 
              />
              <path 
                d="M10,60 C60,110 60,10 110,60 S160,110 210,60" 
                fill="none" 
                stroke="#99f6e4" // teal-200
                strokeWidth="2" 
                strokeOpacity="0.5"
              />
            </svg>
          </div>
          
          <h2 className="font-serif text-2xl md:text-3xl leading-relaxed mb-6">
            「愛，是在受傷之後，<br/>依然願意冒險伸出的手。」
          </h2>
          <div className="w-12 h-[1px] bg-teal-500/50 mx-auto mb-8"></div>
          <p className="text-stone-400 font-light text-sm md:text-base leading-loose max-w-lg mx-auto">
            我們的工作不是讓爭吵消失，而是讓每一次的斷裂，都成為修復與加深連結的契機。在這裡，我們練習重新相愛。
          </p>
        </div>
      </section>

    </main>
  );
}