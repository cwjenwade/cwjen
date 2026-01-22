import React from 'react';

// ----------------------------------------------------------------------
// SVG 插畫組件：使用線條展現心理意象
// ----------------------------------------------------------------------

const IllustrationArmor = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
    {/* 外層：剛硬的幾何線條 (社會面具) */}
    <path
      d="M50,40 L150,40 L150,160 L50,160 Z"
      fill="none"
      stroke="#5E5448"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M50,70 L150,70 M70,40 L70,160 M130,40 L130,160"
      fill="none"
      stroke="#5E5448"
      strokeWidth="1"
      opacity="0.3"
    />
    {/* 內層：蜷縮的有機線條 (真實自我) */}
    <path
      d="M100,100 Q110,90 120,100 T100,130 T80,100 T100,100"
      fill="#B5A89F"
      fillOpacity="0.2"
      stroke="#B5A89F"
      strokeWidth="2"
    />
    {/* 裂痕 */}
    <path
      d="M150,60 L160,50 M40,140 L50,130"
      stroke="#8C857B"
      strokeWidth="1"
    />
  </svg>
);

const IllustrationSplit = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
    {/* 左臉：悲傷/真實 */}
    <path
      d="M80,60 Q60,60 60,90 Q60,120 80,140"
      fill="none"
      stroke="#5E5448"
      strokeWidth="2"
    />
    <circle cx="75" cy="85" r="2" fill="#5E5448" />
    
    {/* 右臉：面具/偽裝 (稍微錯位) */}
    <path
      d="M120,50 Q140,50 140,80 Q140,110 120,130"
      fill="none"
      stroke="#B5A89F"
      strokeWidth="2"
    />
    <circle cx="125" cy="75" r="2" fill="#B5A89F" />

    {/* 中間的斷裂線 */}
    <path
      d="M100,40 L100,160"
      stroke="#D6CFC7"
      strokeWidth="1"
      strokeDasharray="4 4"
    />
  </svg>
);

const IllustrationReach = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full opacity-90">
    {/* 孤獨的圓 */}
    <circle cx="100" cy="100" r="60" fill="none" stroke="#EBE8E4" strokeWidth="1" />
    
    {/* 手/連結的意象 */}
    <path
      d="M60,140 C60,100 80,100 100,100"
      fill="none"
      stroke="#5E5448"
      strokeWidth="2"
    />
    <path
      d="M140,60 C140,100 120,100 100,100"
      fill="none"
      stroke="#B5A89F"
      strokeWidth="2"
    />
    <circle cx="100" cy="100" r="4" fill="#8C857B" />
  </svg>
);

// ----------------------------------------------------------------------
// 主頁面組件
// ----------------------------------------------------------------------

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#5E5448] font-sans leading-relaxed selection:bg-[#B5A89F] selection:text-white">
      
      {/* ------------------- Hero Section ------------------- */}
      <header className="relative pt-32 pb-24 px-6 border-b border-[#EBE8E4] overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#D6CFC7]/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-72 h-72 bg-[#B5A89F]/10 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <span className="block text-sm font-bold tracking-[0.2em] text-[#8C857B] uppercase mb-6">
            Men's Encounter Group Project
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-[#5E5448] leading-tight mb-8 font-medium">
            在陽剛的盔甲之下，<br />
            找回真實的連結
          </h1>
          <p className="text-[#8C857B] max-w-2xl mx-auto text-xl font-light leading-normal">
            這是一個關於「拆解」與「重組」的心理工程。<br />
            我們在此凝視那些被男性氣概所否定的脆弱，並在斷裂處重新生長。
          </p>
        </div>
      </header>

      <main>
        
        {/* ------------------- 深度心理教育：陽剛與羞恥 ------------------- */}
        <section className="py-24 px-6 bg-[#FAF9F6]">
          <div className="max-w-5xl mx-auto">
            
            {/* 區塊一：社會腳本與分裂 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 md:order-1">
                <h2 className="font-serif text-3xl text-[#5E5448] mb-6 font-medium">
                  陽剛的社會腳本：<br/>一場關於「否定」的表演
                </h2>
                <div className="prose text-[#8C857B] font-light text-justify leading-loose space-y-6">
                  <p>
                    主流文化對男性的要求從不只是「變強」，而是「切斷」。為了符合社會對男子氣概（Masculinity）的期待，我們從小學習獨立、競爭，並系統性地否定內在的脆弱與依賴需求 [cite: 146, 151]。
                  </p>
                  <p>
                    對於性少數男性，這是一種毀滅性的雙重束縛。我們既要應對「不像男人」的指控，又要為了生存而過度展現陽剛。這種生存策略導致了心理上的<strong>「分裂 (Splitting)」</strong>——為了保護自己，我們將渴望愛、柔軟的那個「真實自我」切除，僅保留一個符合社會期待的「偽裝自我」來應對世界 [cite: 150]。
                  </p>
                  <p className="text-[#5E5448] font-medium border-l-2 border-[#B5A89F] pl-4">
                    結果是：我們越是成功地扮演男人，內在就越感到荒蕪。
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2 w-full max-w-sm mx-auto p-8 border border-[#EBE8E4] rounded-full bg-[#FFFFFF]">
                <IllustrationArmor />
                <p className="text-center text-xs text-[#8C857B] mt-4 tracking-widest uppercase">The Armor of Masculinity</p>
              </div>
            </div>

            {/* 區塊二：同志羞恥與防衛 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="w-full max-w-sm mx-auto p-8 border border-[#EBE8E4] rounded-full bg-[#FFFFFF]">
                <IllustrationSplit />
                 <p className="text-center text-xs text-[#8C857B] mt-4 tracking-widest uppercase">The Split Self</p>
              </div>
              <div>
                <h2 className="font-serif text-3xl text-[#5E5448] mb-6 font-medium">
                  深層羞恥 (Gay Shame)：<br/>監控自我的內在之眼
                </h2>
                <div className="prose text-[#8C857B] font-light text-justify leading-loose space-y-6">
                  <p>
                    羞恥（Shame）不同於愧疚（Guilt）。愧疚是覺得「我做錯了事」，而羞恥是深信<strong>「我這個人本身就是錯的」</strong> [cite: 145]。
                  </p>
                  <p>
                    成長過程中的污名內化後，轉變為一種高強度的自我監控機制。我們隨時掃描環境：我有露餡嗎？我的聲音會太高嗎？這個動作會被討厭嗎？[cite: 148] 這種長期的警覺狀態（Hypervigilance）讓我們即便身處人群，仍感到本質上的與世隔絕。
                  </p>
                  <p>
                    為了防衛這份羞恥，我們可能發展出「補償策略」：在社群內崇拜陽剛、排斥陰柔與年長者，試圖透過貶低他人來證明自己的價值 [cite: 148, 157]。這不是驕傲，這是創傷的代償。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ------------------- 孤獨的本質 ------------------- */}
        <section className="py-20 px-6 bg-[#5E5448] text-[#FAF9F6]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-24 h-24 mx-auto mb-8 text-[#B5A89F]">
               <IllustrationReach />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl mb-8 leading-relaxed">
              「孤獨並非身旁無人，<br/>而是真實的連結被阻斷。」
            </h3>
            <p className="font-light text-[#D6CFC7] leading-loose text-lg">
              當我們戴著面具被愛時，我們並不會感到被愛。<br/>
              我們會想：「如果你看見真實的我，你就會離開。」<br/>
              這就是孤立（Isolation）的源頭——不是物理上的獨處，而是心理連結的斷裂 [cite: 156]。
            </p>
          </div>
        </section>

        {/* ------------------- 我們的介入：4E 模式 ------------------- */}
        <section className="py-24 px-6 bg-[#FFFFFF]">
          <div className="max-w-6xl mx-auto">
             <div className="text-center mb-16">
                <span className="text-[#B5A89F] tracking-[0.2em] text-sm font-bold uppercase">Intervention</span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#5E5448] mt-4 mb-6 font-medium">
                  從分裂走向整合：4E 模式
                </h2>
                <p className="text-[#8C857B] font-light max-w-2xl mx-auto">
                  我們運用關係文化治療（RCT）與社會學觀點，<br/>在團體中創造「矯正性情緒經驗」，修復那些為了生存而切斷的連結 [cite: 160]。
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-b border-[#EBE8E4]">
              {/* Empathize */}
              <div className="group p-10 border-r border-[#EBE8E4] last:border-r-0 hover:bg-[#FAF9F6] transition-colors duration-500">
                <span className="block text-6xl font-serif text-[#EBE8E4] group-hover:text-[#B5A89F] transition-colors mb-6">01</span>
                <h3 className="font-serif text-xl text-[#5E5448] mb-4">共情<br/>Empathize</h3>
                <p className="text-sm text-[#8C857B] leading-relaxed text-justify">
                  打破「只有我是這樣」的孤立感。在團體中，你的痛苦不再是個人的失敗，而是被深深理解的普同經驗。我們練習的不只是聆聽，而是「承接」。
                </p>
              </div>

              {/* Enlighten */}
              <div className="group p-10 border-r border-[#EBE8E4] last:border-r-0 hover:bg-[#FAF9F6] transition-colors duration-500">
                <span className="block text-6xl font-serif text-[#EBE8E4] group-hover:text-[#D6CFC7] transition-colors mb-6">02</span>
                <h3 className="font-serif text-xl text-[#5E5448] mb-4">啟迪<br/>Enlighten</h3>
                <p className="text-sm text-[#8C857B] leading-relaxed text-justify">
                  將個人的掙扎置回社會脈絡。看見那些內化的羞恥，其實源自結構性的壓迫與性別框架。你不需要為社會的錯誤負責，理解是解構羞恥的第一步。
                </p>
              </div>

              {/* Empower */}
              <div className="group p-10 border-r border-[#EBE8E4] last:border-r-0 hover:bg-[#FAF9F6] transition-colors duration-500">
                <span className="block text-6xl font-serif text-[#EBE8E4] group-hover:text-[#8C857B] transition-colors mb-6">03</span>
                <h3 className="font-serif text-xl text-[#5E5448] mb-4">賦能<br/>Empower</h3>
                <p className="text-sm text-[#8C857B] leading-relaxed text-justify">
                  重新定義你的力量。力量不是壓抑情感，而是擁有「定義自己」的權利。我們發展新的因應策略，不再被動順應社會期待，而是主動創造生活。
                </p>
              </div>

              {/* Encounter */}
              <div className="group p-10 hover:bg-[#FAF9F6] transition-colors duration-500">
                <span className="block text-6xl font-serif text-[#EBE8E4] group-hover:text-[#5E5448] transition-colors mb-6">04</span>
                <h3 className="font-serif text-xl text-[#5E5448] mb-4">會心<br/>Encounter</h3>
                <p className="text-sm text-[#8C857B] leading-relaxed text-justify">
                  最關鍵的實踐。在「此時此刻」的互動中，練習冒險展露那個不完美的真實自我。當脆弱被接納，防衛機制便失去存在的必要，連結由此再生。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------- 心理成效指標 ------------------- */}
        <section className="py-24 px-6 bg-[#FAF9F6]">
            <div className="max-w-4xl mx-auto">
                <div className="bg-[#FFFFFF] p-8 md:p-12 rounded-2xl shadow-sm border border-[#EBE8E4]">
                    <h3 className="font-serif text-2xl text-[#5E5448] mb-8 text-center">我們致力於達成的心智轉變</h3>
                    <div className="space-y-8">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EBE8E4] flex items-center justify-center text-[#5E5448] font-bold">A</div>
                            <div>
                                <h4 className="text-lg font-bold text-[#5E5448] mb-2">述情障礙 (Alexithymia) 的緩解</h4>
                                <p className="text-[#8C857B] text-sm leading-relaxed">
                                    長期壓抑導致我們失去辨識情緒的能力。團體協助成員重新連結身體與感受，找回「說出我感覺」的語言能力 [cite: 70, 71]。
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#EBE8E4] flex items-center justify-center text-[#5E5448] font-bold">B</div>
                            <div>
                                <h4 className="text-lg font-bold text-[#5E5448] mb-2">從防衛到真實 (From Defense to Authenticity)</h4>
                                <p className="text-[#8C857B] text-sm leading-relaxed">
                                    降低對拒絕的災難化想像。經驗到「即使我不偽裝，關係也不會斷裂」，從而建立具備安全感的依附關係。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      </main>

      {/* ------------------- Footer ------------------- */}
      <footer className="bg-[#5E5448] text-[#D6CFC7]/70 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block w-12 h-[1px] bg-[#B5A89F]/40 mb-4"></span>
          </div>
          <h2 className="font-serif text-2xl text-[#EBE8E4] mb-6 font-medium tracking-wider">
            性少數男性會心團體計畫
          </h2>
          <p className="opacity-80 text-sm font-light tracking-wider leading-loose mb-8">
            一個關於愛、接納與真實存在的空間。<br />
            A space for love, acceptance, and authentic being.
          </p>
          <div className="text-xs mt-12 opacity-40 font-mono">
            &copy; 2025 Men's Encounter Group Project. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}