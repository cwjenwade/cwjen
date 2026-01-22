'use client';

import React, { useRef } from 'react';
import { 
  Users, 
  Brain, 
  Feather, 
  Layers, 
  Activity,
  UsersRound,
  MessagesSquare,
  HeartHandshake,
  Fingerprint,
  Sparkles,
  Anchor,
  Scale,
  Eye,
  PenTool,
  Link
} from 'lucide-react';

export default function PsychotherapyPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-[#FFF7A8] font-sans text-[#6B3A12] selection:bg-[#FFF18C] selection:text-[#9A6116] overflow-x-hidden" ref={contentRef}>
      
      {/* ================= HERO SECTION (i01 & i02) ================= */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-[#FFF7A8]">
        {/* 背景裝飾：圓點 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#D8B44F 2px, transparent 2px)', backgroundSize: '32px 32px' }}>
        </div>
        {/* 背景裝飾：色塊 */}
        <div className="absolute top-[-10%] right-[-20%] w-[600px] h-[600px] bg-[#FFF18C] rounded-full blur-3xl -z-10 opacity-50"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#F2E480] rounded-full blur-3xl -z-10 opacity-40"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="lg:pr-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF18C] rounded-full mb-8 border border-[#E0C56A] shadow-sm">
              <Brain size={18} className="text-[#B07F2C]" />
              <span className="text-xs font-bold tracking-widest text-[#9A6116] uppercase">Psychotherapy Approaches</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-[#6B3A12] leading-[1.2] mb-8 font-medium">
              心理治療<br />
              <span className="text-[#C9A24A] mt-3 block text-3xl md:text-5xl">理解經驗的多重路徑</span>
            </h1>
            <div className="prose prose-lg leading-loose font-light text-[#8F622B]">
              {/* Block 1 Content */}
              <h2 className="font-serif text-2xl text-[#9A6116] mb-4 flex items-center gap-2">
                <Layers size={24} className="text-[#CFA246]"/>
                心理治療的分野方式
              </h2>
              <p className="mb-4">
                心理治療的理論差異，經常被理解為一條時間軸。有些取向將理解指向過去，關注早期經驗、內在動力與心理結構的形成；有些取向將視野放在未來，關注人如何在意義、選擇與方向中定位自己。
              </p>
              <div className="bg-[#F2E480]/50 p-6 rounded-xl border-l-4 border-[#D8B44F] mb-6">
                <p className="text-[#6B3A12] italic font-medium">
                 也有一群取向刻意不以時間作為主要軸線，而是將注意力放在經驗本身，特別是情緒、認知與行為之間如何彼此牽動、彼此影響。
                </p>
              </div>
              <p>
                不同理論並非走在同一條路上，而是從不同角度切入同一個人類經驗場域。這些差異，構成了心理治療理論傳統的基本樣貌。
              </p>
            </div>
          </div>

          {/* 圖片 i01 & i02 */}
          <div className="flex flex-col gap-10">
             {/* i01: 理論分野 (689x375) */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-[#FFF18C] shadow-lg">
               <img 
                 src="https://cwjen.vercel.app/Photos/i01.png" 
                 alt="三條線自畫面邊緣進入中央但未交會，淡色圓形各自標示不同高度的位置，中央留白形成理論分野的空間。"
                 className="w-full h-auto object-cover"
               />
               <div className="absolute bottom-0 right-0 bg-[#E0B84E]/90 px-4 py-2 rounded-tl-xl text-white text-xs font-bold tracking-wider">
                 THEORETICAL DIVERGENCE
               </div>
            </div>
             {/* i02: 臨床主體 (436x386) */}
             <div className="relative rounded-3xl overflow-hidden border-4 border-[#F2E480] shadow-lg self-end w-4/5">
               <img 
                 src="https://cwjen.vercel.app/Photos/i02.png" 
                 alt="單一人形站立於中心，三枚圓形分布其周圍，呈現多重觀看角度同時指向一個臨床主體。"
                 className="w-full h-auto object-cover"
               />
                <div className="absolute bottom-0 left-0 bg-[#D6AD63]/90 px-4 py-2 rounded-tr-xl text-white text-xs font-bold tracking-wider">
                 THE CLINICAL SUBJECT
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= THEORY & ECLECTICISM (i03 & i04) ================= */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#FFF18C]">
         {/* 背景裝飾 */}
        <div className="absolute top-1/4 right-[-10%] w-[400px] h-[400px] bg-[#E0C56A] rounded-full blur-3xl -z-10 opacity-30"></div>
        <div className="absolute bottom-1/4 left-[-10%] w-[400px] h-[400px] bg-[#C9A24A] rounded-full blur-3xl -z-10 opacity-20"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* 圖片 i03 & i04 */}
          <div className="flex flex-col gap-12 order-2 lg:order-1">
             {/* i03: 非中心化理論配置 (562x301) */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-[#E0C56A] shadow-md rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://cwjen.vercel.app/Photos/i03.png" 
                 alt="書本以不同方向堆疊，彼此未對齊，淡色圓形散置其旁，形成非中心化的理論配置。"
                 className="w-full h-auto object-cover"
               />
            </div>
             {/* i04: 折衷取向中的並存 (530x298) */}
             <div className="relative rounded-2xl overflow-hidden border-4 border-[#C9A24A] shadow-md -rotate-1 hover:rotate-0 transition-transform duration-500 self-end w-5/6">
               <img 
                 src="https://cwjen.vercel.app/Photos/i04.png" 
                 alt="人物以穩定坐姿出現，前方兩個物件並置卻不融合，顯示折衷取向中的並存狀態。"
                 className="w-full h-auto object-cover"
               />
             </div>
          </div>

          <div className="prose prose-lg leading-loose font-light text-[#8F622B] order-1 lg:order-2">
            {/* Block 2 Content */}
            <h2 className="font-serif text-3xl text-[#6B3A12] mb-8 flex items-center gap-3">
              <Activity size={28} className="text-[#B07F2C]"/>
              理論學習與折衷取向
            </h2>
            <p className="mb-6">
              多數治療師在理論學習過程中，會接觸不只一種取向，也會在實務中形成折衷取向。不同方法的並用，在臨床現場相當常見。
            </p>
            <p className="mb-6">
              但在實際工作中，真正影響治療方向的，並不是方法混合的程度，而是治療師如何理解眼前這一個人。
            </p>
            <div className="bg-[#FFF7A8]/80 p-6 rounded-xl border-l-4 border-[#B07F2C]">
              <p className="text-[#6B3A12] font-medium">
               理論的角色，不只是工具來源，而是提供一種觀看個案的方式。治療師如何觀看，會直接影響他在治療中看見什麼、聽見什麼，以及如何回應。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5 MAJOR APPROACHES (i05 & i06) ================= */}
      <section className="py-24 px-6 relative bg-[#F2E480]">
        {/* 背景裝飾：點點 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15" 
             style={{ backgroundImage: 'radial-gradient(#CFA246 3px, transparent 3px)', backgroundSize: '36px 36px' }}>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-[#6B3A12] mb-6 font-medium">
              心理治療的五大理論取向
            </h2>
            <p className="text-lg text-[#9A6116] font-light">從不同視角理解人類經驗</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* 左側：五大取向列表 (佔 7 等份) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* 1. 生命歷史與心理結構 */}
              <div className="bg-[#FFF7A8] p-8 rounded-3xl shadow-md border-l-8 border-[#D8B44F]">
                <h3 className="font-serif text-xl font-bold text-[#6B3A12] mb-4 flex items-center gap-2">
                  <Anchor size={20} className="text-[#D6AD63]"/> 一｜以生命歷史與心理結構為理解重心
                </h3>
                <p className="text-[#8F622B] mb-4 font-light leading-relaxed">
                  這一群理論，將人的困擾理解為長期經驗累積的結果，關注早期關係、內在結構與深層動力。
                </p>
                <div className="flex gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-[#F2E480] text-[#9A6116] rounded-full text-sm font-medium">Psychoanalysis 精神分析</span>
                  <span className="px-4 py-1.5 bg-[#F2E480] text-[#9A6116] rounded-full text-sm font-medium">Adlerian Therapy 阿德勒學派</span>
                </div>
                <p className="text-[#9A6116] text-sm italic">
                  工作邏輯：建立在「人現在的經驗，與其過往生命歷程之間存在結構性連結」之上。
                </p>
              </div>

              {/* 2. 存在處境與意義 */}
              <div className="bg-[#FFF18C] p-8 rounded-3xl shadow-md border-l-8 border-[#C9A24A]">
                <h3 className="font-serif text-xl font-bold text-[#6B3A12] mb-4 flex items-center gap-2">
                  <Scale size={20} className="text-[#C9A24A]"/> 二｜以存在處境與意義為理解重心
                </h3>
                <p className="text-[#8F622B] mb-4 font-light leading-relaxed">
                  這一群理論，將心理困擾放在人如何面對生命、選擇與責任的處境中理解。
                </p>
                <div className="flex gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-[#E0C56A] text-[#9A6116] rounded-full text-sm font-medium">Existential Therapy 存在主義</span>
                  <span className="px-4 py-1.5 bg-[#E0C56A] text-[#9A6116] rounded-full text-sm font-medium">Reality Therapy 現實治療</span>
                </div>
                <p className="text-[#9A6116] text-sm italic">
                  關注焦點：不是症狀來源，而是人如何在當下位置中回應生命要求。
                </p>
              </div>

              {/* 3. 當下經驗與關係互動 */}
              <div className="bg-[#F2E480] p-8 rounded-3xl shadow-md border-l-8 border-[#B07F2C]">
                <h3 className="font-serif text-xl font-bold text-[#6B3A12] mb-4 flex items-center gap-2">
                  <UsersRound size={20} className="text-[#B07F2C]"/> 三｜以當下經驗與關係互動為工作場域
                </h3>
                <p className="text-[#8F622B] mb-4 font-light leading-relaxed">
                  這一群理論，將治療工作放在此時此刻，關注感受、互動與經驗如何在關係中展開。
                </p>
                <div className="flex gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-[#D6AD63] text-white rounded-full text-sm font-medium">Person-Centered 個人中心</span>
                  <span className="px-4 py-1.5 bg-[#D6AD63] text-white rounded-full text-sm font-medium">Gestalt Therapy 完形治療</span>
                </div>
                <p className="text-[#9A6116] text-sm italic">
                  工作場域：將治療關係本身視為主要工作場域，理解在互動中形成。
                </p>
              </div>

               {/* 4. 認知、行為與情緒連動 */}
              <div className="bg-[#E0C56A] p-8 rounded-3xl shadow-md border-l-8 border-[#9A6116]">
                <h3 className="font-serif text-xl font-bold text-[#6B3A12] mb-4 flex items-center gap-2">
                  <Activity size={20} className="text-[#9A6116]"/> 四｜以認知、行為與情緒連動為理解重心
                </h3>
                <p className="text-[#6B3A12] mb-4 font-light leading-relaxed">
                  這一群理論，刻意不以生命時間軸作為主架構，而是關注經驗系統內部如何彼此牽動。
                </p>
                <div className="flex gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-[#B07F2C] text-white rounded-full text-sm font-medium">CBT 認知行為</span>
                </div>
                <p className="text-[#6B3A12] text-sm italic">
                  聚焦焦點：聚焦於認知、行為與情緒之間的循環關係，工作重點在於經驗模式的調整。
                </p>
              </div>

              {/* 5. 社會位置、權力與語言 */}
              <div className="bg-[#D6AD63] p-8 rounded-3xl shadow-md border-l-8 border-[#6B3A12]">
                <h3 className="font-serif text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <MessagesSquare size={20} className="text-[#FFE4C4]"/> 五｜以社會位置、權力與語言為理解重心
                </h3>
                <p className="text-white mb-4 font-light leading-relaxed">
                  這一群理論，將心理困擾放在文化、性別、權力與語言結構中理解。
                </p>
                <div className="flex gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-[#9A6116] text-white rounded-full text-sm font-medium">Feminist Therapy 女性主義</span>
                  <span className="px-4 py-1.5 bg-[#9A6116] text-white rounded-full text-sm font-medium">Postmodern 後現代取向</span>
                </div>
                <p className="text-white text-sm italic">
                  關注焦點：不是個體內部，而是人如何被放置在社會與語言結構之中。
                </p>
              </div>

            </div>

            {/* 右側：圖片區塊 (佔 5 等份) */}
            <div className="lg:col-span-5 flex flex-col gap-10 sticky top-24">
               {/* i05: 概念尚未成形 (479x286) */}
              <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-[#E0C56A]">
                 <img 
                   src="https://cwjen.vercel.app/Photos/i05.png" 
                   alt="多段線條片段漂浮於畫面中，尚未連接，單一圓形位於邊緣，標示概念尚未成形。"
                   className="w-full h-auto object-cover mb-4"
                 />
                 <p className="text-center text-[#9A6116] font-serif italic text-sm">
                   Concepts in formation...
                 </p>
              </div>
               {/* i06: 概念化的暫時穩定 (297x292) */}
              <div className="bg-white p-6 rounded-3xl shadow-md border-2 border-[#C9A24A] w-4/5 self-end">
                 <img 
                   src="https://cwjen.vercel.app/Photos/i06.png" 
                   alt="線條被重新組織為開放的人形輪廓，內部留白，圓形移入其中，呈現概念化的暫時穩定。"
                   className="w-full h-auto object-cover mb-4"
                 />
                 <p className="text-center text-[#9A6116] font-serif italic text-sm">
                   Temporary stabilization.
                 </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CASE CONCEPTUALIZATION (i09 & i10) ================= */}
      <section className="py-24 px-6 relative bg-[#FFF7A8] overflow-hidden">
         {/* 背景色塊 */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#F2E480] -z-20"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-[#FFF18C] -z-20"></div>
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#E0C56A]/30 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="prose prose-lg leading-loose font-light text-[#8F622B] lg:pr-10">
            {/* Block 3 Content */}
            <div className="inline-block px-4 py-1.5 bg-[#D8B44F] text-white text-xs tracking-widest font-bold rounded-full mb-6">核心專業能力</div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#6B3A12] mb-10 leading-tight font-medium">
              個案概念化的形成
            </h2>
            
            <div className="flex gap-4 items-start mb-6">
              <PenTool size={24} className="text-[#C9A24A] mt-1 shrink-0" />
              <p className="m-0">個案概念化來自於治療歷程中累積的資料。這些資料包含來談問題的敘述、重要事件的經驗方式、情緒反應的型態，以及關係中反覆出現的互動樣式。</p>
            </div>
            <div className="flex gap-4 items-start mb-8">
              <Link size={24} className="text-[#B07F2C] mt-1 shrink-0" />
              <p className="m-0">治療師將這些素材組織起來，形成對個案目前狀態的理解。這種理解不是單一事實的拼接，而是一個對經驗如何被組織、如何持續運作的整體看法。</p>
            </div>

            <div className="bg-[#FFF7A8] p-8 rounded-2xl border-l-8 border-[#9A6116] shadow-sm">
              <p className="text-[#6B3A12] font-serif text-xl italic font-medium text-center">
               「在心理治療中，這樣的概念化能力，構成了治療師的核心專業能力。」
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
             {/* i09: 經驗被貼身感知 (578x460) */}
             <div className="relative rounded-3xl overflow-hidden border-4 border-[#D8B44F] shadow-md">
               <img 
                 src="https://cwjen.vercel.app/Photos/i09.png" 
                 alt="單一人物半身側向呈現，圓形貼近其輪廓，顯示經驗被貼身感知與承載。"
                 className="w-full h-auto object-cover"
               />
               <div className="absolute bottom-4 left-4 bg-[#FFF7A8]/90 px-3 py-1 rounded-md text-[#9A6116] text-xs font-bold">Experience Perceived</div>
            </div>
             {/* i10: 經驗被容納與展開 (491x423) */}
             <div className="relative rounded-3xl overflow-hidden border-4 border-[#C9A24A] shadow-md self-end w-4/5">
               <img 
                 src="https://cwjen.vercel.app/Photos/i10.png" 
                 alt="人物姿態較為開展，圓形與輪廓部分重疊，植物意象沿邊延伸，呈現經驗被容納與展開的狀態。"
                 className="w-full h-auto object-cover"
               />
               <div className="absolute bottom-4 right-4 bg-[#FFF18C]/90 px-3 py-1 rounded-md text-[#9A6116] text-xs font-bold">Experience Unfolding</div>
             </div>
          </div>

        </div>
      </section>

      {/* ================= RELATIONSHIP AS PATHWAY (i07 & i08) ================= */}
      <section className="py-24 px-6 relative bg-[#E0C56A]">
         {/* 背景裝飾 */}
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#FFF7A8 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 圖片 i07 & i08 (左側) */}
          <div className="flex flex-col gap-12 order-2 lg:order-1">
             {/* i07: 關係中的共同焦點 (503x283) */}
            <div className="relative rounded-2xl overflow-hidden border-8 border-[#FFF7A8] shadow-lg">
               <img 
                 src="https://cwjen.vercel.app/Photos/i07.png" 
                 alt="兩人相對而坐，距離適中且未接觸，淡色圓形位於其間，作為關係中的共同焦點。"
                 className="w-full h-auto object-cover"
               />
            </div>
             {/* i08: 關係中的變化 (482x303) */}
             <div className="relative rounded-2xl overflow-hidden border-8 border-[#FFF18C] shadow-lg self-end w-5/6">
               <img 
                 src="https://cwjen.vercel.app/Photos/i08.png" 
                 alt="其中一人的線條向前延伸，另一人保持穩定，植物意象出現在空白處，標示關係中的變化。"
                 className="w-full h-auto object-cover"
               />
             </div>
          </div>

          <div className="prose prose-lg leading-loose font-light text-[#6B3A12] order-1 lg:order-2 lg:pl-10">
            {/* Block 4 Content */}
            <h2 className="font-serif text-3xl text-[#FFF7A8] mb-8 flex items-center gap-3">
              <HeartHandshake size={28} className="text-[#FFF18C]"/>
              關係作為理解人的途徑
            </h2>
            
            <ul className="space-y-4 list-none pl-0 mb-8 text-[#FFF7A8]">
              <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-[#FFF18C] rounded-full"></span>有些取向將焦點放在人類的終極議題，關注生命的意義與存在處境。</li>
              <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-[#FFF18C] rounded-full"></span>有些取向關注早期關係、內在客體與心理結構的形成。</li>
              <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-[#FFF18C] rounded-full"></span>也有取向將工作放在當下關係之中，透過治療師與當事人的互動來理解人的經驗。</li>
            </ul>

            <div className="bg-[#FFF7A8] p-8 rounded-3xl shadow-md text-[#8F622B] leading-relaxed">
              <p className="font-medium mb-4">這些取向的共同點，在於都將治療關係視為理解人的重要途徑。</p>
              <p>
                人在關係中如何靠近、退縮、防衛、依附，會在治療情境中持續出現。治療師需要能夠聽懂這些表面事件之下，尚未被說出口、卻深刻影響行為與感受的經驗。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= UNDERSTANDING EXPERIENCE (i11 & i12) ================= */}
      <section className="py-24 px-6 relative bg-[#D6AD63] overflow-hidden">
        {/* 背景色塊拼接 */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[#C9A24A] -z-20 rounded-bl-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-full bg-[#B07F2C] -z-20 rounded-tr-[100px] opacity-80"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Block 5 Content */}
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-[#FFF7A8] mb-6 font-medium">
              <Eye size={32} className="inline-block mr-2 mb-1 text-[#FFF18C]"/>
              理解經驗本身的工作
            </h2>
            <p className="text-lg text-[#FFF18C] font-light max-w-3xl mx-auto leading-loose">
              在治療工作中，治療師需要能夠貼近個案的經驗，進入其感受與理解方式之中。這種理解並非停留在敘事層次，而是對經驗結構的掌握。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="bg-[#FFF7A8]/10 backdrop-blur-md p-8 rounded-3xl border border-[#FFF18C]/30 text-[#FFF7A8] leading-loose font-light">
              <p className="mb-6">
                治療師將專業訓練與臨床理解帶入關係之中，逐步形成對個案狀態的整體掌握。治療取向的選擇，往往與治療師對人的基本觀點密切相關。
              </p>
              <p className="font-medium text-[#FFF18C]">
                若相信人具有成長與發展的潛能，治療工作便會圍繞在接納、理解與支持個案內在經驗的展開上。
              </p>
            </div>
            
            {/* 圖片 i11 & i12 */}
            <div className="flex flex-col gap-10">
               {/* i11: 經驗在流動中 (492x345) */}
               <div className="relative rounded-3xl overflow-hidden border-4 border-[#FFF18C] shadow-lg bg-[#FFF7A8]/20">
                 <img 
                   src="https://cwjen.vercel.app/Photos/i11.png" 
                   alt="盛有液體的碗狀容器置於畫面中央，內部線條呈現層次起伏，指向被承載且仍在流動中的經驗狀態。"
                   className="w-full h-auto object-cover mix-blend-multiply"
                 />
                 <div className="absolute top-4 left-4 text-[#FFF7A8] font-serif italic">Experience in Flow</div>
              </div>
               {/* i12: 經驗被安置 (444x322) */}
               <div className="relative rounded-3xl overflow-hidden border-4 border-[#F2E480] shadow-lg self-end w-4/5 bg-[#FFF7A8]/20">
                 <img 
                   src="https://cwjen.vercel.app/Photos/i12.png" 
                   alt="容器內部趨於平穩，線條簡化且水面安定，呈現經驗暫時被收納與安置的狀態。"
                   className="w-full h-auto object-cover mix-blend-multiply"
                 />
                 <div className="absolute top-4 right-4 text-[#FFF7A8] font-serif italic">Experience Contained</div>
               </div>
            </div>
          </div>

          {/* Block 6 Content */}
          <div className="bg-[#6B3A12] p-12 rounded-[3rem] shadow-2xl border-4 border-[#9A6116] text-center max-w-4xl mx-auto relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#B07F2C] p-4 rounded-full border-4 border-[#9A6116]">
              <Fingerprint size={40} className="text-[#FFF7A8]" />
            </div>
            
            <h3 className="font-serif text-3xl text-[#FFF7A8] mb-8 mt-4">
              情緒作為治療的核心經驗
            </h3>
            <div className="prose prose-lg leading-loose font-light text-[#E0C56A] mx-auto">
              <p>
                在許多文化脈絡中，情緒經常被不信任。忍耐、壓抑、轉移注意力，成為人們習慣採取的因應方式。這些方式，曾經協助人避免心理痛苦，也形成了保護自己的盔甲。
              </p>
              <p className="text-[#FFF18C] font-medium text-xl">
                當這些防衛逐漸鬆動，底層往往是脆弱且曾經受傷的心理經驗。這些經驗，正是許多困擾的來源。
              </p>
              <p>
                心理治療的工作，包含讓這些痛苦得以被理解，讓深層的恐懼與創傷能被心智系統消化並重新整理。
              </p>
            </div>
            
            <div className="mt-10 p-6 bg-[#8F622B] rounded-2xl inline-block">
              <p className="text-[#FFF7A8] font-serif italic text-lg">
               「人在情緒層次上，理解自己為何喜愛、厭惡、依附與渴望。心理治療所處理的，正是這些感受經驗本身。」
              </p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}