'use client';

import React from 'react';
import { ArrowRight, Heart, Shield, Zap, Circle } from 'lucide-react';

// ----------------------------------------------------------------------
// SVG 插畫組件：使用線條展現心理意象
// ----------------------------------------------------------------------

const IllustrationArmor = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
    <path d="M50,40 L150,40 L150,160 L50,160 Z" fill="none" stroke="#5E5448" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50,70 L150,70 M70,40 L70,160 M130,40 L130,160" fill="none" stroke="#5E5448" strokeWidth="1" opacity="0.3"/>
    <path d="M100,100 Q110,90 120,100 T100,130 T80,100 T100,100" fill="#B5A89F" fillOpacity="0.2" stroke="#B5A89F" strokeWidth="2"/>
    <path d="M150,60 L160,50 M40,140 L50,130" stroke="#8C857B" strokeWidth="1"/>
  </svg>
);

const IllustrationSplit = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
    <path d="M80,60 Q60,60 60,90 Q60,120 80,140" fill="none" stroke="#5E5448" strokeWidth="2"/>
    <circle cx="75" cy="85" r="2" fill="#5E5448" />
    <path d="M120,50 Q140,50 140,80 Q140,110 120,130" fill="none" stroke="#B5A89F" strokeWidth="2"/>
    <circle cx="125" cy="75" r="2" fill="#B5A89F" />
    <path d="M100,40 L100,160" stroke="#D6CFC7" strokeWidth="1" strokeDasharray="4 4"/>
  </svg>
);

const IllustrationReach = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
    <circle cx="100" cy="100" r="60" fill="none" stroke="#EBE8E4" strokeWidth="1" />
    <path d="M60,140 C60,100 80,100 100,100" fill="none" stroke="#5E5448" strokeWidth="2"/>
    <path d="M140,60 C140,100 120,100 100,100" fill="none" stroke="#B5A89F" strokeWidth="2"/>
    <circle cx="100" cy="100" r="4" fill="#8C857B" />
  </svg>
);

// ----------------------------------------------------------------------
// 主頁面組件
// ----------------------------------------------------------------------

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#5E5448] font-sans leading-relaxed selection:bg-[#B5A89F] selection:text-white overflow-x-hidden relative">
      
      {/* 全局背景元素 */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#DEECDA] rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-[#F1E4A0] rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-[#F2BC9C] rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
        <div className="absolute bottom-[30%] left-[20%] w-[300px] h-[300px] bg-[#EDA89D] rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
        <div className="absolute top-[10%] left-[30%] w-[200px] h-[200px] bg-[#E47C57] rounded-full blur-2xl opacity-30 mix-blend-multiply"></div>
      </div>

      {/* ------------------- Hero Section ------------------- */}
      <header className="relative pt-32 pb-24 px-6 border-b border-[#EBE8E4]/50">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left z-10">
            <span className="block text-sm font-bold tracking-[0.2em] text-[#8C857B] uppercase mb-6">
              Men's Encounter Group Project
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-[#5E5448] leading-tight mb-8 font-medium">
              在陽剛的盔甲之下，<br />
              找回真實的連結
            </h1>
            <p className="text-[#8C857B] max-w-xl text-xl font-light leading-normal mb-10">
              這是一個關於「拆解」與「重組」的心理工程。<br />
              我們在此凝視那些被男性氣概所否定的脆弱，並在斷裂處重新生長。
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-[#5E5448] text-[#FAF9F6] rounded-full hover:bg-[#4A4238] transition-colors duration-300 group">
              了解更多
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center relative z-0">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-[#DEECDA] rounded-full blur-2xl opacity-30 transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://cwjen.vercel.app/Photos/sm01.png" 
                alt="人物輪廓被外在結構牽引，線條指向身體與關係之間的張力與限制。" 
                className="w-full h-auto relative z-10 drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        
        {/* ------------------- 深度心理教育：陽剛與羞恥 ------------------- */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FAF9F6]/80 backdrop-blur-sm -z-10"></div>
          <div className="max-w-6xl mx-auto">
            
            {/* 區塊一：社會腳本與分裂 */}
            <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
              <div className="md:w-1/2 order-2 md:order-1 z-10">
                <h2 className="font-serif text-3xl text-[#5E5448] mb-8 font-medium flex items-center">
                  <Shield className="mr-4 text-[#E47C57] w-8 h-8" />
                  陽剛的社會腳本：<br/>一場關於「否定」的表演
                </h2>
                <div className="prose text-[#8C857B] font-light text-justify leading-loose space-y-6 text-lg">
                  <p>
                    主流文化對男性的要求從不只是「變強」，而是「切斷」。為了符合社會對男子氣概（Masculinity）的期待，我們從小學習獨立、競爭，並系統性地否定內在的脆弱與依賴需求。
                  </p>
                  <p>
                    對於性少數男性，這是一種毀滅性的雙重束縛。我們既要應對「不像男人」的指控，又要為了生存而過度展現陽剛。這種生存策略導致了心理上的<strong>「分裂 (Splitting)」</strong>——為了保護自己，我們將渴望愛、柔軟的那個「真實自我」切除，僅保留一個符合社會期待的「偽裝自我」來應對世界。
                  </p>
                  <div className="bg-[#F2BC9C]/20 p-6 rounded-r-2xl border-l-4 border-[#F2BC9C]">
                    <p className="text-[#5E5448] font-medium m-0">
                      結果是：我們越是成功地扮演男人，內在就越感到荒蕪。
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 flex justify-center relative z-0">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-[#F2BC9C] rounded-full blur-2xl opacity-30 transform -translate-x-4 -translate-y-4"></div>
                  <img 
                    src="https://cwjen.vercel.app/Photos/sm05.png" 
                    alt="人物蜷曲於自身形成的邊界之中，畫面呈現高度內縮的防衛狀態。" 
                    className="w-full h-auto relative z-10 drop-shadow-xl"
                  />
                </div>
              </div>
            </div>

            {/* 區塊二：同志羞恥與防衛 */}
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2 flex justify-center relative z-0">
                <div className="relative w-full max-w-sm">
                  <div className="absolute inset-0 bg-[#EDA89D] rounded-full blur-2xl opacity-30 transform translate-x-4 translate-y-4"></div>
                  <img 
                    src="https://cwjen.vercel.app/Photos/sm09.png" 
                    alt="方形碎片隨線條漂移，結構尚未穩定，畫面指向概念與感受暫時失序的狀態。" 
                    className="w-full h-auto relative z-10 drop-shadow-xl"
                  />
                </div>
              </div>
              <div className="md:w-1/2 z-10">
                <h2 className="font-serif text-3xl text-[#5E5448] mb-8 font-medium flex items-center">
                  <Heart className="mr-4 text-[#EDA89D] w-8 h-8" />
                  深層羞恥 (Gay Shame)：<br/>監控自我的內在之眼
                </h2>
                <div className="prose text-[#8C857B] font-light text-justify leading-loose space-y-6 text-lg">
                  <p>
                    羞恥（Shame）不同於愧疚（Guilt）。愧疚是覺得「我做錯了事」，而羞恥是深信<strong>「我這個人本身就是錯的」</strong>。
                  </p>
                  <p>
                    成長過程中的污名內化後，轉變為一種高強度的自我監控機制。我們隨時掃描環境：我有露餡嗎？我的聲音會太高嗎？這個動作會被討厭嗎？ 這種長期的警覺狀態（Hypervigilance）讓我們即便身處人群，仍感到本質上的與世隔絕。
                  </p>
                  <p>
                    為了防衛這份羞恥，我們可能發展出「補償策略」：在社群內崇拜陽剛、排斥陰柔與年長者，試圖透過貶低他人來證明自己的價值。這不是驕傲，這是創傷的代償。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ------------------- 孤獨的本質 ------------------- */}
        <section className="py-32 px-6 relative bg-[#5E5448] text-[#FAF9F6] overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[#5E5448] opacity-90 z-[-1]"></div>
           {/* 使用 CSS animation class 替代 animate-blob */}
           <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
            <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-[#DEECDA] rounded-full blur-3xl opacity-20 mix-blend-screen animate-pulse duration-[8000ms]"></div>
            <div className="absolute bottom-[-20%] right-[-20%] w-[600px] h-[600px] bg-[#F2BC9C] rounded-full blur-3xl opacity-20 mix-blend-screen animate-pulse duration-[8000ms] delay-1000"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="w-48 h-48 mx-auto mb-12 relative">
               <div className="absolute inset-0 bg-[#F1E4A0] rounded-full blur-xl opacity-30"></div>
               <img 
                 src="https://cwjen.vercel.app/Photos/sm03.png" 
                 alt="兩人相對置於圓形邊界內，邊界線條標示關係被框定且可被承載。" 
                 className="w-full h-full object-contain relative z-10 filter brightness-125 drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)]"
               />
            </div>
            <h3 className="font-serif text-3xl md:text-5xl mb-12 leading-tight font-medium tracking-wide">
              「孤獨並非身旁無人，<br/>而是真實的連結被阻斷。」
            </h3>
            <div className="font-light text-[#D6CFC7] leading-loose text-xl max-w-2xl mx-auto space-y-6">
              <p>
                當我們戴著面具被愛時，我們並不會感到被愛。<br/>
                我們會想：「如果你看見真實的我，你就會離開。」
              </p>
              <p className="text-[#F1E4A0] font-medium">
                這就是孤立（Isolation）的源頭——不是物理上的獨處，而是心理連結的斷裂。
              </p>
            </div>
          </div>
        </section>

        {/* ------------------- 我們的介入：4E 模式 ------------------- */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FFFFFF]/80 backdrop-blur-sm -z-10"></div>
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-24 z-10 relative">
                <span className="text-[#B5A89F] tracking-[0.2em] text-sm font-bold uppercase">Intervention</span>
                <h2 className="font-serif text-4xl md:text-5xl text-[#5E5448] mt-4 mb-8 font-medium">
                  從分裂走向整合：4E 模式
                </h2>
                <p className="text-[#8C857B] font-light max-w-3xl mx-auto text-xl leading-relaxed">
                  我們運用關係文化治療（RCT）與社會學觀點，<br/>在團體中創造「矯正性情緒經驗」，修復那些為了生存而切斷的連結。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Empathize */}
              <div className="group p-8 bg-[#FAF9F6] rounded-3xl border border-[#EBE8E4]/50 hover:border-[#DEECDA] hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DEECDA] opacity-10 rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>
                <span className="block text-5xl font-serif text-[#DEECDA] group-hover:text-[#5E5448] transition-colors mb-6">01</span>
                <h3 className="font-serif text-2xl text-[#5E5448] mb-4">共情<br/>Empathize</h3>
                <p className="text-[#8C857B] leading-relaxed text-justify">
                  打破「只有我是這樣」的孤立感。在團體中，你的痛苦不再是個人的失敗，而是被深深理解的普同經驗。我們練習的不只是聆聽，而是「承接」。
                </p>
              </div>

              {/* Enlighten */}
              <div className="group p-8 bg-[#FAF9F6] rounded-3xl border border-[#EBE8E4]/50 hover:border-[#F1E4A0] hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F1E4A0] opacity-10 rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>
                <span className="block text-5xl font-serif text-[#F1E4A0] group-hover:text-[#5E5448] transition-colors mb-6">02</span>
                <h3 className="font-serif text-2xl text-[#5E5448] mb-4">啟迪<br/>Enlighten</h3>
                <p className="text-[#8C857B] leading-relaxed text-justify">
                  將個人的掙扎置回社會脈絡。看見那些內化的羞恥，其實源自結構性的壓迫與性別框架。你不需要為社會的錯誤負責，理解是解構羞恥的第一步。
                </p>
              </div>

              {/* Empower */}
              <div className="group p-8 bg-[#FAF9F6] rounded-3xl border border-[#EBE8E4]/50 hover:border-[#F2BC9C] hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2BC9C] opacity-10 rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>
                <span className="block text-5xl font-serif text-[#F2BC9C] group-hover:text-[#5E5448] transition-colors mb-6">03</span>
                <h3 className="font-serif text-2xl text-[#5E5448] mb-4">賦能<br/>Empower</h3>
                <p className="text-[#8C857B] leading-relaxed text-justify">
                  重新定義你的力量。力量不是壓抑情感，而是擁有「定義自己」的權利。我們發展新的因應策略，不再被動順應社會期待，而是主動創造生活。
                </p>
              </div>

              {/* Encounter */}
              <div className="group p-8 bg-[#FAF9F6] rounded-3xl border border-[#EBE8E4]/50 hover:border-[#EDA89D] hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EDA89D] opacity-10 rounded-bl-full transition-all duration-500 group-hover:scale-150"></div>
                <span className="block text-5xl font-serif text-[#EDA89D] group-hover:text-[#5E5448] transition-colors mb-6">04</span>
                <h3 className="font-serif text-2xl text-[#5E5448] mb-4">會心<br/>Encounter</h3>
                <p className="text-[#8C857B] leading-relaxed text-justify">
                  最關鍵的實踐。在「此時此刻」的互動中，練習冒險展露那個不完美的真實自我。當脆弱被接納，防衛機制便失去存在的必要，連結由此再生。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------- 心理成效指標 ------------------- */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[#FAF9F6]/80 backdrop-blur-sm -z-10"></div>
          <div className="max-w-5xl mx-auto relative z-10">
              <div className="bg-[#FFFFFF]/90 p-12 md:p-16 rounded-[3rem] shadow-2xl border border-[#EBE8E4]/50 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#DEECDA]/10 via-transparent to-[#F2BC9C]/10 pointer-events-none"></div>
                  
                  <div className="text-center mb-16 relative z-10">
                     <Zap className="w-12 h-12 text-[#F1E4A0] mx-auto mb-6" />
                     <h3 className="font-serif text-3xl md:text-4xl text-[#5E5448] mb-6 font-medium">我們致力於達成的心智轉變</h3>
                     <p className="text-[#8C857B] text-lg max-w-2xl mx-auto">
                       透過團體的動力，我們見證成員從防衛走向開放，從孤立走向連結的歷程。
                     </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                      <div className="flex flex-col items-center text-center">
                          <div className="mb-8 relative">
                             <div className="absolute inset-0 bg-[#DEECDA] rounded-full blur-xl opacity-40"></div>
                             <img 
                               src="https://cwjen.vercel.app/Photos/sm06.png" 
                               alt="人物低頭凝視胸前新芽，植物意象指向經驗被感知後逐步生成。" 
                               className="w-48 h-auto relative z-10 drop-shadow-lg"
                             />
                          </div>
                          <h4 className="text-xl font-bold text-[#5E5448] mb-4">述情障礙 (Alexithymia) 的緩解</h4>
                          <p className="text-[#8C857B] leading-relaxed">
                              長期壓抑導致我們失去辨識情緒的能力。團體協助成員重新連結身體與感受，找回「說出我感覺」的語言能力。
                          </p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                          <div className="mb-8 relative">
                             <div className="absolute inset-0 bg-[#F2BC9C] rounded-full blur-xl opacity-40"></div>
                             <img 
                               src="https://cwjen.vercel.app/Photos/sm08.png" 
                               alt="人物軀幹向上開展，植物沿身體線條生長，呈現經驗被感知後逐步內化的歷程。" 
                               className="w-48 h-auto relative z-10 drop-shadow-lg"
                             />
                          </div>
                          <h4 className="text-xl font-bold text-[#5E5448] mb-4">從防衛到真實 (From Defense to Authenticity)</h4>
                          <p className="text-[#8C857B] leading-relaxed">
                              降低對拒絕的災難化想像。經驗到「即使我不偽裝，關係也不會斷裂」，從而建立具備安全感的依附關係。
                          </p>
                      </div>
                  </div>
              </div>
          </div>
        </section>

      </main>

      {/* ------------------- Footer ------------------- */}
      <footer className="bg-[#5E5448] text-[#D6CFC7]/70 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#5E5448] opacity-90 z-[-1]"></div>
        <div className="absolute inset-0 pointer-events-none -z-20 overflow-hidden">
            <div className="absolute top-[50%] left-[50%] w-[800px] h-[800px] bg-[#E47C57] rounded-full blur-[100px] opacity-10 mix-blend-screen transform -translate-x-1/2 -translate-y-1/2 animate-pulse duration-[5000ms]"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="mb-12">
            <Heart className="w-12 h-12 text-[#EDA89D] mx-auto opacity-50" />
          </div>
          <h2 className="font-serif text-3xl text-[#EBE8E4] mb-8 font-medium tracking-wider">
            性少數男性會心團體計畫
          </h2>
          <p className="opacity-80 text-lg font-light tracking-wider leading-loose mb-12 max-w-2xl mx-auto">
            一個關於愛、接納與真實存在的空間。<br />
            A space for love, acceptance, and authentic being.
          </p>
          <div className="flex justify-center gap-8 mb-12">
             <a href="#" className="text-[#D6CFC7] hover:text-[#EDA89D] transition-colors">關於我們</a>
             <a href="#" className="text-[#D6CFC7] hover:text-[#EDA89D] transition-colors">計畫理念</a>
             <a href="#" className="text-[#D6CFC7] hover:text-[#EDA89D] transition-colors">聯絡方式</a>
          </div>
          <div className="text-xs mt-12 opacity-40 font-mono">
            &copy; 2025 Men's Encounter Group Project. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}