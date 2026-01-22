'use client';

import React from 'react';
import { 
  Users, 
  Brain, 
  Layers, 
  Activity,
  UsersRound,
  MessagesSquare,
  HeartHandshake,
  Fingerprint,
  Anchor,
  Scale,
  Eye,
  PenTool,
  Quote
} from 'lucide-react';

export default function PsychotherapyPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#5A4A42] selection:bg-[#E69796] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO: 雜誌封面式排版 ================= */}
      <section className="pt-32 pb-24 px-6 relative">
        {/* 背景裝飾：有機色塊 */}
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-[#FAFBF6] rounded-bl-[200px] -z-20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#C6C09C]/20 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            
            {/* 左側：標題與導言 */}
            <div className="lg:w-1/2 pt-10 relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-[1px] bg-[#5A4A42]"></span>
                <span className="text-xs font-bold tracking-[0.2em] text-[#A09578] uppercase">Psychotherapy Approaches</span>
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl text-[#5A4A42] leading-[1.1] mb-10">
                心理治療<br />
                <span className="text-[#E69796] text-3xl md:text-5xl font-normal italic block mt-4">
                  理解經驗的多重路徑
                </span>
              </h1>

              {/* Block 1 內文 */}
              <div className="prose prose-lg text-[#7D6B63] font-light leading-loose pl-6 border-l-2 border-[#FFB283]">
                <h2 className="text-xl font-bold text-[#5A4A42] mb-4 not-prose flex items-center gap-2">
                  <Layers size={20} className="text-[#FFB283]"/> 分野方式
                </h2>
                <p>
                  心理治療的理論差異，經常被理解為一條時間軸。有些取向將理解指向過去，關注早期經驗、內在動力與心理結構的形成；有些取向將視野放在未來，關注人如何在意義、選擇與方向中定位自己。
                </p>
                <p>
                  也有一群取向刻意不以時間作為主要軸線，而是將注意力放在經驗本身，特別是情緒、認知與行為之間如何彼此牽動、彼此影響。
                </p>
                <p className="text-[#5A4A42] font-medium">
                  不同理論並非走在同一條路上，而是從不同角度切入同一個人類經驗場域。這些差異，構成了心理治療理論傳統的基本樣貌。
                </p>
              </div>
            </div>

            {/* 右側：圖片拼貼 (Collage) */}
            <div className="lg:w-1/2 relative min-h-[600px] w-full mt-10 lg:mt-0">
              {/* i01 (689x375) - 主圖 */}
              <div className="absolute top-0 right-0 w-[90%] shadow-2xl rounded-2xl overflow-hidden border-4 border-white z-10">
                <div className="relative aspect-[689/375]">
                  <img src="https://cwjen.vercel.app/Photos/i01.png" alt="理論分野" className="object-cover w-full h-full" />
                </div>
              </div>
              
              {/* i02 (436x386) - 次圖，重疊 */}
              <div className="absolute top-[280px] left-0 w-[60%] shadow-xl rounded-2xl overflow-hidden border-4 border-[#FAFBF6] z-20">
                <div className="relative aspect-[436/386]">
                  <img src="https://cwjen.vercel.app/Photos/i02.png" alt="臨床主體" className="object-cover w-full h-full" />
                </div>
              </div>

              {/* 裝飾圓形 */}
              <div className="absolute top-[200px] left-[10%] w-32 h-32 bg-[#FFCA8C] rounded-full mix-blend-multiply opacity-80 z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Block 2: 雜誌對頁設計 (i03 & i04) ================= */}
      <section className="py-24 px-6 bg-[#FAFBF6]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* 圖片區塊 */}
            <div className="lg:w-5/12 flex flex-col gap-8">
              {/* i03 (562x301) */}
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C6C09C] rounded-xl"></div>
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-white aspect-[562/301]">
                  <img src="https://cwjen.vercel.app/Photos/i03.png" alt="非中心化理論配置" className="w-full h-full object-cover"/>
                </div>
              </div>
              
              {/* i04 (530x298) */}
              <div className="relative self-end w-[90%] -mt-6">
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-white aspect-[530/298]">
                  <img src="https://cwjen.vercel.app/Photos/i04.png" alt="折衷取向中的並存" className="w-full h-full object-cover"/>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#E69796]/20 rounded-full -z-10"></div>
              </div>
            </div>

            {/* 文字區塊 */}
            <div className="lg:w-7/12">
              <h2 className="font-serif text-3xl text-[#5A4A42] mb-8 flex items-center gap-3">
                <span className="bg-[#C6C09C] text-white p-2 rounded-lg"><Activity size={24}/></span>
                理論學習與折衷取向
              </h2>
              <div className="space-y-6 text-[#7D6B63] font-light text-lg leading-relaxed">
                <p>
                  多數治療師在理論學習過程中，會接觸不只一種取向，也會在實務中形成折衷取向。不同方法的並用，在臨床現場相當常見。
                </p>
                <p>
                  但在實際工作中，真正影響治療方向的，並不是方法混合的程度，而是治療師如何理解眼前這一個人。
                </p>
                <div className="bg-white p-8 rounded-tr-[3rem] rounded-bl-[3rem] shadow-sm border border-[#E69796]/30">
                  <p className="text-[#5A4A42] font-medium text-xl font-serif italic text-center">
                   「理論的角色，不只是工具來源，而是提供一種觀看個案的方式。治療師如何觀看，會直接影響他在治療中看見什麼、聽見什麼，以及如何回應。」
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 五大取向：Bento Grid (便當盒) 佈局 ================= */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl text-[#5A4A42] mb-4">五大理論取向</h2>
            <div className="h-1 w-20 bg-[#FFB283] mx-auto rounded-full mb-4"></div>
            <p className="text-[#A09578]">從不同視角切入，理解人類經驗的多重維度</p>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            
            {/* Card 1: 生命歷史 (佔 2 格) */}
            <div className="lg:col-span-2 bg-[#F9F8F4] rounded-[2.5rem] p-10 border border-[#C6C09C]/20 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-40 h-40 bg-[#C6C09C]/10 rounded-bl-full group-hover:scale-110 transition-transform"></div>
              <div className="flex flex-col h-full justify-between relative z-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-white rounded-full text-[#A09578] shadow-sm"><Anchor size={24}/></div>
                    <span className="text-sm font-bold tracking-widest text-[#A09578] uppercase">History & Structure</span>
                  </div>
                  <h3 className="font-serif text-2xl text-[#5A4A42] mb-4">一｜以生命歷史與心理結構為理解重心</h3>
                  <p className="text-[#7D6B63] font-light leading-relaxed mb-6 max-w-xl">
                    這一群理論，將人的困擾理解為長期經驗累積的結果，關注早期關係、內在結構與深層動力。
                  </p>
                  <div className="flex gap-3">
                    <span className="px-4 py-1 bg-white border border-[#C6C09C] rounded-full text-sm text-[#5A4A42]">Psychoanalysis</span>
                    <span className="px-4 py-1 bg-white border border-[#C6C09C] rounded-full text-sm text-[#5A4A42]">Adlerian</span>
                  </div>
                </div>
                <p className="mt-8 text-sm text-[#A09578] italic">工作邏輯：建立在「人現在的經驗，與其過往生命歷程之間存在結構性連結」之上。</p>
              </div>
            </div>

            {/* i05 Image Card */}
            <div className="bg-white rounded-[2.5rem] p-6 border-2 border-[#FAFBF6] shadow-lg flex flex-col items-center justify-center">
              <div className="relative w-full aspect-[479/286] mb-4">
                <img src="https://cwjen.vercel.app/Photos/i05.png" alt="概念尚未成形" className="w-full h-full object-contain"/>
              </div>
              <p className="text-xs text-[#C6C09C] font-serif italic">Concepts in formation...</p>
            </div>

            {/* Card 2: 存在處境 (直式) */}
            <div className="bg-[#FFF8F0] rounded-[2.5rem] p-10 border border-[#FFB283]/20 hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB283]/10 rounded-bl-full"></div>
              <div className="p-3 bg-white rounded-full text-[#FFB283] shadow-sm w-fit mb-6"><Scale size={24}/></div>
              <h3 className="font-serif text-xl text-[#5A4A42] mb-4">二｜以存在處境與意義為理解重心</h3>
              <p className="text-[#7D6B63] font-light leading-relaxed mb-6 text-sm">
                將心理困擾放在人如何面對生命、選擇與責任的處境中理解。關注人如何在當下位置中回應生命要求。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/60 text-[#d98c5f] text-xs font-bold rounded-md">Existential</span>
                <span className="px-3 py-1 bg-white/60 text-[#d98c5f] text-xs font-bold rounded-md">Reality</span>
              </div>
            </div>

            {/* Card 3: 當下經驗 (直式) */}
            <div className="bg-[#FFF4F4] rounded-[2.5rem] p-10 border border-[#E69796]/20 hover:shadow-xl transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E69796]/10 rounded-bl-full"></div>
              <div className="p-3 bg-white rounded-full text-[#E69796] shadow-sm w-fit mb-6"><UsersRound size={24}/></div>
              <h3 className="font-serif text-xl text-[#5A4A42] mb-4">三｜以當下經驗與關係互動為工作場域</h3>
              <p className="text-[#7D6B63] font-light leading-relaxed mb-6 text-sm">
                關注感受、互動與經驗如何在關係中展開。將治療關係本身視為主要工作場域，理解在互動中形成。
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/60 text-[#c97574] text-xs font-bold rounded-md">Person-Centered</span>
                <span className="px-3 py-1 bg-white/60 text-[#c97574] text-xs font-bold rounded-md">Gestalt</span>
              </div>
            </div>

            {/* i06 Image Card */}
            <div className="bg-white rounded-[2.5rem] p-6 border-2 border-[#FAFBF6] shadow-lg flex flex-col items-center justify-center">
              <div className="relative w-3/4 aspect-[297/292] mb-4">
                <img src="https://cwjen.vercel.app/Photos/i06.png" alt="概念化穩定" className="w-full h-full object-contain"/>
              </div>
              <p className="text-xs text-[#E69796] font-serif italic">Temporary stabilization.</p>
            </div>

            {/* Card 4: CBT (橫式) */}
            <div className="lg:col-span-2 bg-[#FFFAF0] rounded-[2.5rem] p-10 border border-[#FFCA8C]/20 hover:shadow-xl transition-shadow flex flex-col justify-center relative overflow-hidden">
               <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#FFCA8C]/20 rounded-full"></div>
               <div className="relative z-10 flex items-start gap-6">
                 <div className="p-3 bg-white rounded-full text-[#E0B84E] shadow-sm shrink-0"><Activity size={24}/></div>
                 <div>
                   <h3 className="font-serif text-xl text-[#5A4A42] mb-2">四｜以認知、行為與情緒連動為理解重心</h3>
                   <p className="text-[#7D6B63] font-light text-sm mb-3">
                     刻意不以生命時間軸作為主架構，而是關注經驗系統內部如何彼此牽動。
                   </p>
                   <span className="inline-block px-3 py-1 bg-[#FFCA8C]/20 text-[#9A6116] text-xs font-bold rounded-full">CBT 認知行為</span>
                 </div>
               </div>
            </div>

            {/* Card 5: Postmodern (橫式 - Dark Accent) */}
            <div className="lg:col-span-1 bg-[#5A4A42] rounded-[2.5rem] p-10 text-[#FAFBF6] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-full h-full bg-[#E69796] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <div className="relative z-10">
                 <div className="flex items-center justify-between mb-6">
                   <h3 className="font-serif text-xl">五｜社會位置與權力</h3>
                   <MessagesSquare size={24} className="text-[#E69796]"/>
                 </div>
                 <p className="text-white/80 font-light text-sm mb-4">
                   將心理困擾放在文化、性別、權力與語言結構中理解。
                 </p>
                 <div className="flex gap-2">
                   <span className="text-[10px] uppercase tracking-wider border border-white/30 px-2 py-1 rounded">Feminist</span>
                   <span className="text-[10px] uppercase tracking-wider border border-white/30 px-2 py-1 rounded">Postmodern</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= Sticky Scroll Layout (Blocks 3, 4, 5) ================= */}
      {/* 這個區塊使用 Sticky 佈局：左邊是文字流，右邊是圖像流 */}
      <section className="bg-[#FAFBF6] px-6 py-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Section: 個案概念化 (Block 3) */}
          <div className="flex flex-col lg:flex-row gap-16 mb-32">
            <div className="lg:w-1/2 lg:sticky lg:top-32 lg:self-start h-fit">
              <span className="text-[#E69796] font-bold tracking-widest text-xs uppercase mb-2 block">Core Competency</span>
              <h2 className="font-serif text-4xl text-[#5A4A42] mb-8">個案概念化的形成</h2>
              <div className="space-y-6 text-[#7D6B63] font-light leading-loose text-lg">
                <div className="flex gap-4">
                  <PenTool className="shrink-0 text-[#C6C09C] mt-1"/>
                  <p>個案概念化來自於治療歷程中累積的資料。這些資料包含來談問題的敘述、重要事件的經驗方式、情緒反應的型態，以及關係中反覆出現的互動樣式。</p>
                </div>
                <div className="flex gap-4">
                  <Brain className="shrink-0 text-[#C6C09C] mt-1"/>
                  <p>治療師將這些素材組織起來，形成對個案目前狀態的理解。這種理解不是單一事實的拼接，而是一個對經驗如何被組織、如何持續運作的整體看法。</p>
                </div>
                <blockquote className="border-l-4 border-[#5A4A42] pl-6 text-[#5A4A42] italic font-serif">
                  在心理治療中，這樣的概念化能力，構成了治療師的核心專業能力。
                </blockquote>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex flex-col gap-8">
              {/* i09 (578x460) */}
              <div className="bg-white p-4 rounded-[2rem] shadow-lg rotate-1">
                <div className="aspect-[578/460] rounded-xl overflow-hidden bg-[#FAFBF6]">
                  <img src="https://cwjen.vercel.app/Photos/i09.png" alt="經驗被貼身感知" className="w-full h-full object-cover"/>
                </div>
                <p className="text-center mt-3 text-sm text-[#A09578]">經驗被貼身感知與承載</p>
              </div>
              {/* i10 (491x423) */}
              <div className="bg-white p-4 rounded-[2rem] shadow-lg -rotate-1 w-[90%] self-end">
                <div className="aspect-[491/423] rounded-xl overflow-hidden bg-[#FAFBF6]">
                  <img src="https://cwjen.vercel.app/Photos/i10.png" alt="經驗被容納與展開" className="w-full h-full object-cover"/>
                </div>
                <p className="text-center mt-3 text-sm text-[#A09578]">經驗被容納與展開</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#C6C09C]/30 my-20"></div>

          {/* Section: 關係與經驗 (Block 4 & 5) */}
          <div className="flex flex-col lg:flex-row-reverse gap-16">
            <div className="lg:w-1/2 lg:sticky lg:top-32 lg:self-start h-fit">
              <span className="text-[#FFB283] font-bold tracking-widest text-xs uppercase mb-2 block">The Therapeutic Relationship</span>
              <h2 className="font-serif text-4xl text-[#5A4A42] mb-8">關係作為理解的途徑</h2>
              <div className="space-y-8 text-[#7D6B63] font-light leading-loose">
                <p>
                  有些取向關注終極議題，有些關注早期關係，也有關注當下互動。這些取向的共同點，在於都將<strong className="text-[#E69796] font-medium">治療關係</strong>視為理解人的重要途徑。
                </p>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#FFCA8C]/30">
                  <p className="mb-4">
                    人在關係中如何靠近、退縮、防衛、依附，會在治療情境中持續出現。治療師需要能夠聽懂這些表面事件之下，尚未被說出口、卻深刻影響行為與感受的經驗。
                  </p>
                  <div className="flex items-center gap-2 text-[#5A4A42] font-medium mt-4 pt-4 border-t border-[#FAFBF6]">
                    <Eye size={18}/>
                    <span>理解經驗本身的工作</span>
                  </div>
                  <p className="mt-2 text-sm">
                    治療師將專業訓練與臨床理解帶入關係之中，逐步形成對個案狀態的整體掌握。若相信人具有成長與發展的潛能，治療工作便會圍繞在接納、理解與支持個案內在經驗的展開上。
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-8">
               {/* i07 (503x283) */}
               <div className="bg-[#FFF8F0] p-2 rounded-2xl">
                 <div className="aspect-[503/283] rounded-xl overflow-hidden shadow-md">
                   <img src="https://cwjen.vercel.app/Photos/i07.png" alt="共同焦點" className="w-full h-full object-cover"/>
                 </div>
               </div>
               
               {/* i08 (482x303) */}
               <div className="bg-[#FFF8F0] p-2 rounded-2xl w-[90%] ml-auto">
                 <div className="aspect-[482/303] rounded-xl overflow-hidden shadow-md">
                   <img src="https://cwjen.vercel.app/Photos/i08.png" alt="關係變化" className="w-full h-full object-cover"/>
                 </div>
               </div>

               {/* i11 (492x345) */}
               <div className="bg-[#FFF4F4] p-2 rounded-2xl mt-8">
                 <div className="aspect-[492/345] rounded-xl overflow-hidden shadow-md">
                   <img src="https://cwjen.vercel.app/Photos/i11.png" alt="流動經驗" className="w-full h-full object-cover mix-blend-multiply opacity-90"/>
                 </div>
               </div>

               {/* i12 (444x322) */}
               <div className="bg-[#FFF4F4] p-2 rounded-2xl w-[80%] ml-auto">
                 <div className="aspect-[444/322] rounded-xl overflow-hidden shadow-md">
                   <img src="https://cwjen.vercel.app/Photos/i12.png" alt="安置經驗" className="w-full h-full object-cover mix-blend-multiply opacity-90"/>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CONCLUSION (Block 6) ================= */}
      <section className="py-32 px-6 relative bg-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block p-4 rounded-full bg-[#FAFBF6] border border-[#C6C09C] mb-8">
            <Fingerprint size={32} className="text-[#C6C09C]"/>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl text-[#5A4A42] mb-10 leading-tight">
            情緒作為治療的核心經驗
          </h2>
          
          <div className="prose prose-lg mx-auto text-[#7D6B63] font-light leading-loose">
            <p>
              在許多文化脈絡中，情緒經常被不信任。忍耐、壓抑、轉移注意力，成為人們習慣採取的因應方式。這些方式，曾經協助人避免心理痛苦，也形成了保護自己的盔甲。
            </p>
            <p className="text-[#E69796] font-medium text-xl">
              當這些防衛逐漸鬆動，底層往往是脆弱且曾經受傷的心理經驗。這些經驗，正是許多困擾的來源。
            </p>
            <p>
              心理治療的工作，包含讓這些痛苦得以被理解，讓深層的恐懼與創傷能被心智系統消化並重新整理。
            </p>
          </div>

          <div className="mt-16 relative">
            <Quote size={40} className="text-[#FFCA8C] absolute -top-6 -left-4 opacity-50" />
            <p className="text-2xl font-serif italic text-[#5A4A42] relative z-10">
              人在情緒層次上，理解自己為何喜愛、厭惡、依附與渴望。<br/>
              心理治療所處理的，正是這些感受經驗本身。
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}