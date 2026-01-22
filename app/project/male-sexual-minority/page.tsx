'use client';

import React from 'react';
import { 
  Shield, 
  Heart, 
  Zap, 
  BookOpen,
  Users,
  Eye,
  Quote,
  Anchor,
  Activity,
  Layers
} from 'lucide-react';

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#5E5448] font-sans leading-relaxed selection:bg-[#E47C57] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO: The Sad Young Man (sm01) ================= */}
      <header className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* 背景色塊拼貼 */}
        <div className="absolute top-0 right-0 w-[55%] h-[85%] bg-[#DEECDA] rounded-bl-[200px] -z-20 opacity-60"></div>
        <div className="absolute top-20 left-[-10%] w-[400px] h-[400px] bg-[#F1E4A0] rounded-full -z-10 mix-blend-multiply opacity-80"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2 z-10 pt-10">
            <div className="inline-block px-4 py-1 border border-[#5E5448] rounded-full mb-8 bg-white">
              <span className="text-xs font-bold tracking-[0.2em] text-[#5E5448] uppercase">
                Men's Encounter Group Project
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#5E5448] leading-[1.1] mb-10">
              陽剛盔甲下的<br />
              <span className="text-[#E47C57] italic">悲傷年輕人</span>
            </h1>
            
            <div className="prose text-[#8C857B] text-lg font-light leading-loose">
              <p>
                <strong>Gay 是一個悲傷的詞彙。</strong> Richard Dyer 曾描述過 "Sad Young Man" 的典型：這不是說同志「天性悲傷」，而是指出文本與社會如何預設同志的結局——關係短命、無子女、被譴責——於是憂鬱如同固定配樂，纏在青年身上。
              </p>
              <p className="mt-4">
                「Good as You」（常被寫成 G.A.Y.）是對「同性戀＝悲傷的年輕人」這一負面再現傳統的反制性命名。在這個傳統裡，男同志的形象被長期描繪為多愁、孤獨、終將走向失落的典型。
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 relative mt-10 lg:mt-0">
            {/* sm01: 人物輪廓與結構張力 */}
            <div className="relative z-10 p-6 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[2rem]">
              <img 
                src="https://cwjen.vercel.app/Photos/sm01.png" 
                alt="人物輪廓被外在結構牽引" 
                className="w-full h-auto rounded-xl grayscale-[10%] contrast-[1.05]"
              />
              <div className="mt-6 border-t border-[#EBE8E4] pt-4">
                <p className="text-xs text-[#E47C57] font-bold tracking-widest uppercase">
                  Tension between Body & Structure
                </p>
                <p className="text-xs text-[#8C857B] mt-1">人物輪廓被外在結構牽引，指向身體與關係之間的張力與限制。</p>
              </div>
            </div>
            {/* 裝飾圓點 */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#EDA89D] rounded-full mix-blend-multiply opacity-70"></div>
          </div>
        </div>
      </header>

      <main>
        
        {/* ================= SECTION 1: 數字背後的生活 (Meyer & Stats) (sm09) ================= */}
        <section className="py-24 px-6 bg-white relative border-t border-[#EBE8E4]">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 relative">
                 <div className="absolute top-[-20px] left-[-20px] w-full h-full bg-[#F2BC9C] rounded-[2rem] -z-10 opacity-30"></div>
                 {/* sm09: 碎片漂移 - 象徵統計數字下的破碎 */}
                 <div className="bg-[#FAF9F6] p-4 rounded-[2rem] border-2 border-white shadow-lg">
                   <img src="https://cwjen.vercel.app/Photos/sm09.png" alt="失序狀態" className="w-full h-auto rounded-xl mix-blend-multiply"/>
                   <p className="text-center text-xs text-[#E47C57] mt-3 font-serif italic">"Structure Unstable"</p>
                 </div>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <h2 className="font-serif text-3xl text-[#5E5448] flex items-center gap-3">
                  <Activity size={28} className="text-[#E47C57]"/>
                  如果把數字放回到生活...
                </h2>
                <div className="prose text-[#8C857B] font-light leading-loose">
                  <p>
                    問題不僅是「誰風險較高」，而是風險如何被製造。大量量化研究指出，性少數在憂鬱、焦慮、自殺意念與企圖、以及物質使用上承擔更高風險。
                  </p>
                  <div className="bg-[#DEECDA]/30 p-6 rounded-xl border-l-4 border-[#DEECDA] my-6">
                    <h4 className="font-bold text-[#5E5448] mb-2">Meyer (2003) 少數壓力模型</h4>
                    <p className="text-sm">
                      污名、排斥、被拒的預期、隱蔽與內化的貶抑，經由日常互動長期滲入身心。統計差距指向的是<strong>社會環境</strong>，而不是性傾向本身的病理。
                    </p>
                  </div>
                  <p>
                    在亞洲城市，LGB 青年的一年期自殺意念顯著高於異性戀同儕。娛樂性用藥與性風險的連動，反映了「尋找認同與歸屬」的社群動力，與快感政治、商業場域的交織。
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SECTION 2: 羞恥的機制 (Tomkins) (sm05, sm03) ================= */}
        <section className="py-24 px-6 relative bg-[#5E5448] text-[#FAF9F6]">
          {/* 背景裝飾 */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E47C57] rounded-full blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F1E4A0] rounded-full blur-[100px] opacity-10"></div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl text-[#F2BC9C] mb-6">當人們接觸到壓力時，經驗到了什麼？</h2>
              <p className="text-xl font-light text-[#D6CFC7]">—— Tomkins 對「羞恥 (Shame)」的基本界定與運作機制</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Theory Part 1 */}
              <div className="space-y-8">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-[#F1E4A0] mb-4">1. 羞恥是先天情感之一</h3>
                  <p className="font-light leading-loose text-white/80">
                    Tomkins 認為羞恥的核心引發條件不是「罪過」，而是<strong>對正向情感（興趣或快樂）之突然而顯著的中斷</strong>。在投入、感興趣的場景中，當互動被打斷、遭拒或被否定時，羞恥被點燃。
                  </p>
                </div>

                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-[#F1E4A0] mb-4">2. 完成與復歸，而非宣洩</h3>
                  <p className="font-light leading-loose text-white/80">
                    羞恥需要被「釋放」嗎？Tomkins 的語言是<strong>「完成—復歸 (completion/attenuation)」</strong>。情感一旦被引發，會尋求完成一個反應序列。若指「覺察並在合適脈絡中完成」，則正確；若指「單純宣洩」，則不符合原意。
                  </p>
                </div>
              </div>

              {/* Theory Part 2 & Images */}
              <div className="space-y-8">
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                  <h3 className="font-serif text-2xl text-[#F1E4A0] mb-4">3. 記憶化與腳本 (Scripts)</h3>
                  <p className="font-light leading-loose text-white/80">
                    當「正向投入被中斷」的結構反覆出現，人會將高情感密度的片段編碼為意象，形成「腳本」，作為對未來場景的預期與防衛。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                   {/* sm05: 蜷曲 (Defense) */}
                   <div className="bg-white/10 p-3 rounded-2xl">
                     <img src="https://cwjen.vercel.app/Photos/sm05.png" alt="內縮防衛" className="rounded-xl w-full h-auto opacity-90"/>
                     <p className="text-center text-xs text-[#F2BC9C] mt-2">防衛腳本</p>
                   </div>
                   {/* sm03: 邊界 (Structure) */}
                   <div className="bg-white/10 p-3 rounded-2xl self-end">
                     <img src="https://cwjen.vercel.app/Photos/sm03.png" alt="關係邊界" className="rounded-xl w-full h-auto opacity-90"/>
                     <p className="text-center text-xs text-[#F2BC9C] mt-2">關係框定</p>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SECTION 3: 4E 介入模式 (sm04, sm06, sm08, sm07) ================= */}
        <section className="py-24 px-6 bg-[#FAF9F6] relative">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-20 text-center">
              <span className="text-[#E47C57] font-bold tracking-[0.2em] text-sm uppercase block mb-4">The Intervention Model</span>
              <h2 className="font-serif text-4xl md:text-5xl text-[#5E5448]">從分裂走向整合：4E 模式</h2>
            </div>

            {/* Layout: Sticky Cards or Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* 1. Empathize (Green) */}
              <div className="group bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border-t-8 border-[#DEECDA] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DEECDA] opacity-10 rounded-bl-full"></div>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/3">
                    <img src="https://cwjen.vercel.app/Photos/sm04.png" alt="共情流動" className="w-full h-auto rounded-2xl shadow-inner bg-[#FAF9F6] p-2"/>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold text-[#5E5448] mb-4">共情 Empathize</h3>
                    <p className="text-[#8C857B] leading-relaxed">
                      打破「只有我是這樣」的孤立感。在團體中，你的痛苦不再是個人的失敗，而是被深深理解的普同經驗。我們練習的不只是聆聽，而是「承接」。
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Enlighten (Yellow) */}
              <div className="group bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border-t-8 border-[#F1E4A0] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F1E4A0] opacity-10 rounded-bl-full"></div>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/3">
                    <img src="https://cwjen.vercel.app/Photos/sm06.png" alt="啟迪萌芽" className="w-full h-auto rounded-2xl shadow-inner bg-[#FAF9F6] p-2"/>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold text-[#5E5448] mb-4">啟迪 Enlighten</h3>
                    <p className="text-[#8C857B] leading-relaxed">
                      將個人的掙扎置回社會脈絡。看見內化的羞恥源自結構性壓迫。你不需要為社會的錯誤負責，理解是解構羞恥的第一步。
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Empower (Peach) */}
              <div className="group bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border-t-8 border-[#F2BC9C] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F2BC9C] opacity-10 rounded-bl-full"></div>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/3">
                    <img src="https://cwjen.vercel.app/Photos/sm08.png" alt="賦能生長" className="w-full h-auto rounded-2xl shadow-inner bg-[#FAF9F6] p-2"/>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold text-[#5E5448] mb-4">賦能 Empower</h3>
                    <p className="text-[#8C857B] leading-relaxed">
                      重新定義你的力量。力量不是壓抑情感，而是擁有「定義自己」的權利。發展新的因應策略，不再被動順應，而是主動創造生活。
                    </p>
                  </div>
                </div>
              </div>

              {/* 4. Encounter (Pink/Red) */}
              <div className="group bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all duration-500 border-t-8 border-[#EDA89D] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#EDA89D] opacity-10 rounded-bl-full"></div>
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/3">
                    <img src="https://cwjen.vercel.app/Photos/sm07.png" alt="會心連結" className="w-full h-auto rounded-2xl shadow-inner bg-[#FAF9F6] p-2"/>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold text-[#5E5448] mb-4">會心 Encounter</h3>
                    <p className="text-[#8C857B] leading-relaxed">
                      最關鍵的實踐。在「此時此刻」的互動中，練習冒險展露真實自我。當脆弱被接納，防衛機制便失去必要，連結由此再生。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SECTION 4: 團體動力與成效 (sm02, sm11, sm10, sm12) ================= */}
        <section className="py-32 px-6 relative overflow-hidden bg-white">
          {/* 背景有機色塊 */}
          <div className="absolute top-0 left-0 w-[40%] h-full bg-[#E47C57] opacity-5 -z-10"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#F2BC9C] rounded-full opacity-20 blur-3xl -z-10"></div>

          <div className="max-w-6xl mx-auto">
            
            <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
              <div className="lg:w-1/2 relative">
                 {/* sm02: 團體支持 */}
                 <div className="relative z-10 p-4 bg-white rounded-[3rem] shadow-xl border border-[#EBE8E4]">
                   <img src="https://cwjen.vercel.app/Photos/sm02.png" alt="團體支持空間" className="w-full h-auto rounded-[2.5rem]"/>
                 </div>
                 {/* sm11: 共同承接 (疊圖) */}
                 <div className="absolute -bottom-10 -right-10 w-1/2 z-20 p-2 bg-[#FAF9F6] rounded-[2rem] shadow-lg border border-[#DEECDA]">
                   <img src="https://cwjen.vercel.app/Photos/sm11.png" alt="共同承接" className="w-full h-auto rounded-[1.5rem]"/>
                 </div>
              </div>

              <div className="lg:w-1/2 space-y-8">
                <h2 className="font-serif text-3xl text-[#5E5448]">團體諮商的介入力量</h2>
                <div className="prose text-[#8C857B] font-light leading-loose">
                  <p>
                    在本計畫中，<strong>會心團體</strong>扮演著至關重要的角色。它提供了一個平台讓成員能夠分享和探討個人經驗的多元性，促進了不同背景下同志個體之間的對話。
                  </p>
                  <p>
                    人跟人之間的真誠連結，恰巧就是性少數族群在成長過程中所少有的。在團體中，成員不僅可以獲得情感上的連結，還能夠透過他人的經驗學習如何在廣泛的社會文化框架中定位自己的身份。
                  </p>
                </div>
              </div>
            </div>

            {/* 成效指標區塊 */}
            <div className="bg-[#FAF9F6] rounded-[3rem] p-12 border border-[#EBE8E4] relative overflow-hidden">
               <div className="absolute top-0 right-0 w-full h-4 bg-gradient-to-r from-[#DEECDA] via-[#F1E4A0] to-[#E47C57]"></div>
               
               <h3 className="font-serif text-3xl text-[#5E5448] mb-12 text-center">我們致力於達成的心智轉變</h3>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 
                 {/* A. Alexithymia - sm10 */}
                 <div className="flex flex-col items-center text-center">
                   <div className="w-full max-w-[300px] mb-6 relative">
                     <div className="absolute inset-0 bg-[#DEECDA] rounded-full blur-2xl opacity-40"></div>
                     <img src="https://cwjen.vercel.app/Photos/sm10.png" alt="心理容器" className="relative z-10 w-full h-auto rounded-2xl shadow-sm border-4 border-white"/>
                   </div>
                   <h4 className="text-xl font-bold text-[#5E5448] mb-3">A. 述情障礙的緩解</h4>
                   <p className="text-[#8C857B] leading-relaxed">
                     長期壓抑導致我們失去辨識情緒的能力。團體協助成員重新連結身體與感受，找回「說出我感覺」的語言能力。形成可被承載的心理容器。
                   </p>
                 </div>

                 {/* B. Authenticity - sm12 */}
                 <div className="flex flex-col items-center text-center">
                   <div className="w-full max-w-[300px] mb-6 relative">
                     <div className="absolute inset-0 bg-[#E47C57] rounded-full blur-2xl opacity-20"></div>
                     <img src="https://cwjen.vercel.app/Photos/sm12.png" alt="經驗擴展" className="relative z-10 w-full h-auto rounded-2xl shadow-sm border-4 border-white"/>
                   </div>
                   <h4 className="text-xl font-bold text-[#5E5448] mb-3">B. 從防衛到真實</h4>
                   <p className="text-[#8C857B] leading-relaxed">
                     降低對拒絕的災難化想像。經驗到「即使我不偽裝，關係也不會斷裂」，從而建立具備安全感的依附關係。
                   </p>
                 </div>

               </div>
            </div>

          </div>
        </section>

      </main>

      {/* ================= Footer ================= */}
      <footer className="bg-[#5E5448] py-20 text-center text-[#D6CFC7] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#5E5448] z-[-1]"></div>
        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-[#E47C57] rounded-full blur-[150px] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <Heart size={40} className="text-[#EDA89D] mx-auto opacity-80" />
          </div>
          <h2 className="font-serif text-3xl text-[#FAF9F6] mb-8 tracking-widest">
            性少數男性會心團體計畫
          </h2>
          <p className="font-light text-lg opacity-80 leading-loose mb-12">
            一個關於愛、接納與真實存在的空間。<br />
            A space for love, acceptance, and authentic being.
          </p>
          <div className="w-24 h-[1px] bg-[#D6CFC7]/30 mx-auto mb-8"></div>
          <div className="text-xs opacity-40 font-mono tracking-widest">
            &copy; 2025 Men's Encounter Group Project. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}