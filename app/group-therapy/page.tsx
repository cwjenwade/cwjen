'use client';

import React from 'react';
import { 
  Users, 
  Clock, 
  Video, 
  Shield, 
  Layers, 
  Puzzle,
  MessageCircle,
  BookOpen,
  HeartPulse,
  HandHeart,
  ChevronDown,
  ArrowRight,
  Sparkles
} from 'lucide-react';

// --- 客製化抽象插圖組件 (Strict Line Art - Morandi Teal/Stone) ---

// 1. 英雄區塊：圍坐成圈與流動 (The Circle & Flow)
const IllustrationHeroCircle = () => (
  <svg viewBox="0 0 400 300" className="w-full max-w-[500px] mx-auto opacity-80" aria-hidden="true">
    <defs>
      <linearGradient id="tealStoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#78716c" stopOpacity="0.4" /> {/* stone-500 */}
        <stop offset="100%" stopColor="#0d9488" stopOpacity="0.6" /> {/* teal-600 (Muted) */}
      </linearGradient>
    </defs>
    {/* 抽象的人與連結 - 純線條 */}
    <g stroke="url(#tealStoneGradient)" strokeWidth="1.5" fill="none" strokeLinecap="round">
      {/* 外圍大圈 - 虛線 */}
      <circle cx="200" cy="150" r="90" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="8 4"/>
      
      {/* 流動連結線 */}
      <path d="M140,120 Q200,60 260,120 T380,150" className="animate-[pulse_6s_ease-in-out_infinite]" opacity="0.6" />
      <path d="M20,150 Q80,240 200,180 T320,180" className="animate-[pulse_7s_ease-in-out_infinite]" opacity="0.6"/>
      
      {/* 象徵成員的節點 - 空心圓 */}
      <circle cx="140" cy="120" r="6" stroke="#78716c"/>
      <circle cx="260" cy="120" r="6" stroke="#78716c"/>
      <circle cx="200" cy="230" r="6" stroke="#78716c"/>
      <circle cx="80" cy="180" r="6" stroke="#78716c"/>
      <circle cx="320" cy="180" r="6" stroke="#78716c"/>
      
      {/* 中心能量 - 線條波紋 */}
      <circle cx="200" cy="150" r="15" stroke="#0d9488" opacity="0.4" className="animate-ping"/>
      <circle cx="200" cy="150" r="25" stroke="#0d9488" opacity="0.2" />
    </g>
  </svg>
);

// 2. 多元支持：不同姿態靠近中心 (Diverse Support)
const IllustrationDiverseSupport = () => (
  <svg viewBox="0 0 300 200" className="w-full max-w-[300px] mx-auto" aria-hidden="true">
    <g stroke="#a8a29e" strokeWidth="1.5" fill="none"> {/* stone-400 */}
      <path d="M50,150 C50,100 100,100 150,100" strokeDasharray="4 4" />
      <path d="M250,50 C250,100 200,100 150,100" />
      {/* 主軸連結 - 加深色 */}
      <path d="M150,180 L150,100" strokeWidth="2" stroke="#78716c" /> 
      {/* 中心點 - 線條與極淡填充 */}
      <circle cx="150" cy="100" r="12" fill="#ccfbf1" fillOpacity="0.3" stroke="#0d9488"/>
      <path d="M100,50 Q150,20 200,50" opacity="0.4"/>
    </g>
  </svg>
);

// 3. 連結帶來改變 (Connection adds up)
const IllustrationConnectionChange = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full opacity-40 absolute top-0 left-0" aria-hidden="true">
    <g stroke="#99f6e4" strokeWidth="1" fill="none"> {/* teal-200 muted */}
      <circle cx="100" cy="100" r="40" opacity="0.4" strokeDasharray="4 2"/>
      <circle cx="100" cy="100" r="80" opacity="0.2" />
      <path d="M100,100 L170,50" opacity="0.3" />
      <path d="M100,100 L30,150" opacity="0.3" />
      <path d="M100,100 L150,170" opacity="0.3" />
      <path d="M100,100 L50,30" opacity="0.3" />
    </g>
  </svg>
);

// 4. 非結構團體：流動與相遇 (Unstructured Flow)
const IllustrationUnstructuredFlow = () => (
  <svg viewBox="0 0 400 200" className="w-full max-w-[400px] mx-auto" aria-hidden="true">
    <defs>
      <linearGradient id="tealFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#99f6e4" stopOpacity="0.4"/> {/* teal-200 */}
        <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.6"/> {/* teal-400 */}
        <stop offset="100%" stopColor="#0d9488" stopOpacity="0.4"/> {/* teal-600 */}
      </linearGradient>
    </defs>
    {/* 主流動線條 */}
    <path d="M50,100 C100,40 150,160 200,100 S300,40 350,100" stroke="url(#tealFlowGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" className="animate-[pulse_8s_ease-in-out_infinite]"/>
    {/* 次要流動線條 */}
    <path d="M50,130 C120,190 180,10 250,70 S380,150 350,110" stroke="#57534e" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 4"/>
    
    {/* 節點 - 空心或極淡填充 */}
    <circle cx="200" cy="100" r="8" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5"/>
    <circle cx="120" cy="60" r="4" fill="none" stroke="#78716c"/>
    <circle cx="280" cy="140" r="6" fill="#f7f5f3" stroke="#78716c"/>
  </svg>
);

// 5. 脫下面具 (Unmasking)
const IllustrationUnmask = () => (
  <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto mb-8" aria-hidden="true">
    <g strokeWidth="1.5" fill="none">
      {/* Mask - Stone Color, dashed */}
      <path d="M60,70 Q100,40 140,70 Q160,100 140,150 Q100,180 60,150 Q40,100 60,70 Z" stroke="#a8a29e" strokeDasharray="3 3" opacity="0.6" transform="translate(-15, -10)"/>
      
      {/* Real Face underneath - Teal Color, solid line */}
      <path d="M70,80 Q100,60 130,80 Q145,110 130,145 Q100,170 70,145 Q55,110 70,80 Z" stroke="#0d9488" strokeWidth="2"/>
      
      {/* Gentle Eyes - Line art */}
      <path d="M85,110 Q95,118 105,110" stroke="#0d9488" strokeLinecap="round"/>
      <path d="M125,110 Q135,118 145,110" stroke="#0d9488" strokeLinecap="round"/>
    </g>
  </svg>
);


// --- 主要頁面組件 ---
export default function GroupTherapyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F3] font-sans text-stone-700 selection:bg-teal-100 selection:text-teal-900">
      
      {/* --- Hero Section (Block background) --- */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden">
        {/* 背景色塊斑塊 (Morandi Blobs) */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-3xl -z-10 opacity-70 mix-blend-multiply"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-stone-200/60 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply"></div>
        <div className="absolute top-[20%] left-[15%] w-[300px] h-[300px] bg-stone-100/80 rounded-full blur-2xl -z-10 opacity-50"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200/40 rounded-full mb-8 backdrop-blur-sm border border-stone-200/50">
            <Users size={18} className="text-teal-700" />
            <span className="text-xs font-bold tracking-widest text-stone-600 uppercase">Group Therapy</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-800 leading-[1.2] mb-8 font-medium">
            團體治療介紹<br />
            <span className="text-teal-800/90 mt-3 block text-3xl md:text-5xl">讓改變，在連結中發生</span>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-20 relative z-10">
          <div className="prose prose-lg prose-stone leading-loose font-light">
            <p className="text-2xl font-serif text-stone-800 mb-8 leading-snug">
              團體不只是「很多人在一起的心理治療」，<br/>它是一個具有生命力與互動歷程的場域。
            </p>
            <p>
              團體治療是一種專業心理治療的形式，由一位或多位具備資格的心理師帶領，與一群參與者共同工作。在這樣的治療空間中，參與者通常帶著相似的困擾或人生課題，彼此分享經驗、傾聽故事、表達情緒、探索內在，同時學習建立更健康的人際關係。
            </p>
            <div className="my-8 pl-6 border-l-4 border-teal-700/30">
              <p className="text-stone-700 italic font-medium">
               在這裡，你會發現自己在人群中的樣貌，也看見他人是如何感受、理解與回應你。
              </p>
            </div>
          </div>
          <div className="relative">
             {/* 插圖：多人圍坐成圈 (Line Art) */}
            <IllustrationHeroCircle />
          </div>
        </div>

        {/* Logistics Banner */}
        <div className="max-w-4xl mx-auto mt-24 bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-sm border border-stone-200/60 flex flex-wrap justify-around gap-8 text-sm md:text-base relative z-10">
          <div className="flex items-center gap-3 text-stone-700 font-medium">
            <Users className="text-teal-600" size={22}/>
            <span>每團約 5-15 人 (小型約 4 人)</span>
          </div>
          <div className="flex items-center gap-3 text-stone-700 font-medium">
            <Clock className="text-teal-600" size={22}/>
            <span>每次會談約 1.5 - 2 小時</span>
          </div>
          <div className="flex items-center gap-3 text-stone-700 font-medium">
            <Video className="text-teal-600" size={22}/>
            <span>形式多元：面對面或線上進行</span>
          </div>
        </div>
      </section>

      {/* --- Core Features --- */}
      <section className="py-24 px-6 bg-white relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl text-stone-800 mb-4">團體治療的主要特點</h2>
            <p className="text-stone-500 font-light">為什麼我們需要「在一起」接受治療？</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex gap-5 items-start p-8 rounded-3xl bg-[#F7F5F3]/50 border border-stone-100 hover:border-teal-100/50 hover:shadow-md hover:shadow-teal-50/30 transition-all duration-300">
              <div className="p-3 bg-teal-100/50 rounded-xl text-teal-600 shrink-0"><Shield size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">一個安全、真實的互動空間</h3>
                <p className="text-stone-600 leading-relaxed font-light">在治療師的引導下，每位成員都可以表達真實感受、歷程與困難，同時從他人身上看見「我並不孤單」，彼此理解、支持與陪伴。</p>
              </div>
            </div>
             <div className="flex gap-5 items-start p-8 rounded-3xl bg-[#F7F5F3]/50 border border-stone-100 hover:border-teal-100/50 hover:shadow-md hover:shadow-teal-50/30 transition-all duration-300">
              <div className="p-3 bg-teal-100/50 rounded-xl text-teal-600 shrink-0"><Users size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">彼此學習與模仿的場域</h3>
                <p className="text-stone-600 leading-relaxed font-light">我們總是在關係中學會自己是誰。團體中，你可以看到別人怎麼說出情緒、表達需要，進而學習新的應對方式與人際溝通策略。</p>
              </div>
            </div>
             <div className="flex gap-5 items-start p-8 rounded-3xl bg-[#F7F5F3]/50 border border-stone-100 hover:border-teal-100/50 hover:shadow-md hover:shadow-teal-50/30 transition-all duration-300">
              <div className="p-3 bg-teal-100/50 rounded-xl text-teal-600 shrink-0"><Layers size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">多元議題都能適用</h3>
                <p className="text-stone-600 leading-relaxed font-light">應用非常廣泛，從焦慮、憂鬱、創傷修復，到親密關係、自我探索、情緒調節、人際互動，皆有對應的團體形式。</p>
              </div>
            </div>
             <div className="flex gap-5 items-start p-8 rounded-3xl bg-[#F7F5F3]/50 border border-stone-100 hover:border-teal-100/50 hover:shadow-md hover:shadow-teal-50/30 transition-all duration-300">
              <div className="p-3 bg-teal-100/50 rounded-xl text-teal-600 shrink-0"><Puzzle size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">可以與個別治療互補</h3>
                <p className="text-stone-600 leading-relaxed mb-6 font-light">許多參與者會在進行個別治療的同時，也參加團體治療，以不同角度深化自我理解與改變歷程。</p>
                {/* 插圖：多元支持 (Line Art) */}
                <IllustrationDiverseSupport />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Comparison Table 1: Therapy vs Support Group --- */}
      <section className="py-24 px-6 bg-[#F7F5F3] relative z-10">
        {/* 背景色塊 */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-3xl -z-10 opacity-50"></div>

        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-stone-800 mb-16">團體治療與支持性團體的差異</h2>
          
          <div className="overflow-hidden rounded-3xl border border-stone-200/80 shadow-sm bg-white/80 backdrop-blur-sm">
            <div className="grid grid-cols-3 bg-stone-100/80 p-5 text-stone-800 font-bold text-center border-b border-stone-200">
              <div className="col-span-1 text-left pl-6">項目</div>
              <div className="col-span-1 text-teal-800">團體治療 (Group Therapy)</div>
              <div className="col-span-1 text-stone-500">支持性／自助團體 (Support Group)</div>
            </div>
            
            <div className="divide-y divide-stone-100">
              <div className="grid grid-cols-3 p-6 items-center hover:bg-stone-50/50 transition-colors leading-relaxed">
                <div className="font-medium text-stone-700 flex items-center gap-3 pl-2"><ChevronDown size={18} className="text-teal-400 shrink-0"/>引導者</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-3 rounded-xl mx-4">由專業心理師帶領</div>
                <div className="text-center text-stone-600 font-light">無專業引導，常由成員自組</div>
              </div>
              <div className="grid grid-cols-3 p-6 items-center hover:bg-stone-50/50 transition-colors leading-relaxed">
                <div className="font-medium text-stone-700 flex items-center gap-3 pl-2"><ChevronDown size={18} className="text-teal-400 shrink-0"/>結構性</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-3 rounded-xl mx-4">有心理治療架構與目標</div>
                <div className="text-center text-stone-600 font-light">以經驗分享、支持為主</div>
              </div>
               <div className="grid grid-cols-3 p-6 items-center hover:bg-stone-50/50 transition-colors leading-relaxed">
                <div className="font-medium text-stone-700 flex items-center gap-3 pl-2"><ChevronDown size={18} className="text-teal-400 shrink-0"/>工作重點</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-3 rounded-xl mx-4">深入探索互動、促進改變</div>
                <div className="text-center text-stone-600 font-light">提供陪伴、舒緩孤單感</div>
              </div>
              <div className="grid grid-cols-3 p-6 items-center hover:bg-stone-50/50 transition-colors leading-relaxed">
                <div className="font-medium text-stone-700 flex items-center gap-3 pl-2"><ChevronDown size={18} className="text-teal-400 shrink-0"/>回應方式</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-3 rounded-xl mx-4">注重情緒歷程與互動覺察</div>
                <div className="text-center text-stone-600 font-light">分享經驗與實用建議為主</div>
              </div>
            </div>
          </div>
          <p className="text-center text-stone-500 text-sm mt-8 font-serif italic">（左側強調專業介入與深度改變，右側強調社群支持與經驗交流）</p>
        </div>
      </section>

      {/* --- Common Group Types --- */}
      <section className="py-24 px-6 bg-white relative z-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-stone-800 mb-20">常見的團體類型</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Type 1 */}
            <div className="group p-8 rounded-[2rem] bg-gradient-to-br from-teal-50 to-stone-50 border border-stone-100 text-center hover:shadow-lg hover:shadow-stone-200/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-stone-50">
                <MessageCircle size={32} className="text-teal-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-3">動力取向團體</h3>
              <p className="text-stone-600 leading-relaxed font-light text-sm">聚焦人際歷程，探索互動與情感反應。</p>
            </div>
            {/* Type 2 */}
            <div className="group p-8 rounded-[2rem] bg-gradient-to-br from-teal-50 to-stone-50 border border-stone-100 text-center hover:shadow-lg hover:shadow-stone-200/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-stone-50">
                <BookOpen size={32} className="text-teal-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-3">技能訓練團體</h3>
              <p className="text-stone-600 leading-relaxed font-light text-sm">教導具體技巧，如情緒調節、正念練習。</p>
            </div>
             {/* Type 3 */}
            <div className="group p-8 rounded-[2rem] bg-gradient-to-br from-teal-50 to-stone-50 border border-stone-100 text-center hover:shadow-lg hover:shadow-stone-200/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-stone-50">
                <HeartPulse size={32} className="text-teal-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-3">支持性／問題導向</h3>
              <p className="text-stone-600 leading-relaxed font-light text-sm">聚焦在特定困擾，如成癮、悲傷、失戀等。</p>
            </div>
             {/* Type 4 */}
            <div className="group p-8 rounded-[2rem] bg-gradient-to-br from-teal-50 to-stone-50 border border-stone-100 text-center hover:shadow-lg hover:shadow-stone-200/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-105 transition-transform border border-stone-50">
                <HandHeart size={32} className="text-teal-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-stone-800 mb-3">心理教育團體</h3>
              <p className="text-stone-600 leading-relaxed font-light text-sm">傳授心理知識與自我照顧方法。</p>
            </div>
          </div>
        </div>
      </section>

       {/* --- Why it works & Modern Needs (Block background) --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* 背景色塊 */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#F7F5F3] -z-20"></div>
        <div className="absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-teal-50/40 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] bg-stone-200/30 rounded-full blur-3xl -z-10"></div>
        
        {/* 背景插圖：連結帶來改變 (Line Art) */}
        <IllustrationConnectionChange />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">為什麼團體治療能帶來改變？</h2>
            <p className="text-lg text-stone-600 leading-loose font-light max-w-3xl mx-auto">
              研究與臨床經驗指出，團體治療不只是心理支持，更是一種深層的轉化歷程。它的影響來自<span className="text-teal-700 font-medium">關係中的真實接觸與互動經驗</span>。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column: Mechanisms */}
            <div>
              <h3 className="font-serif text-2xl text-stone-800 mb-8 flex items-center gap-3">
                <Sparkles className="text-teal-500" strokeWidth={1.5} />
                改變的核心機制
              </h3>
              <ul className="space-y-6">
                {[
                  "減少孤立感，感受到「我不是一個人」",
                  "在互動中學會新的關係模式與情緒表達方式",
                  "增進對自我的理解與覺察",
                  "來自多位成員的支持與回饋，看見不同觀點",
                  "提供一個安全的實驗場，勇敢嘗試過去不敢做的事"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 p-5 bg-white/70 rounded-2xl shadow-sm border border-stone-100 hover:bg-white transition-colors">
                    <div className="w-8 h-8 rounded-full bg-teal-100/50 flex items-center justify-center text-teal-700 font-serif shrink-0 text-sm">{index + 1}</div>
                    <p className="text-stone-700 leading-relaxed pt-1 font-light">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Modern Needs */}
            <div className="bg-white/60 backdrop-blur-md p-10 rounded-[2.5rem] border border-stone-200/60 shadow-sm">
              <h3 className="font-serif text-2xl text-stone-800 mb-8">回應現代人的核心需求</h3>
              <p className="text-stone-600 mb-10 leading-loose font-light">
                現代人的生活節奏快速、壓力沉重，人際關係也更為複雜。我們渴望支持，卻常感到猶豫。團體治療回應了這些渴望：
              </p>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-teal-800 mb-3">一個可以被理解的空間</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">能夠安心表達，不被評價，也不是被教訓，而是被真正聽見。</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-teal-800 mb-3">練習人際互動與表達的場域</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">許多人難以說出真正的感受或設下界線，團體是練習關係的實驗場。</p>
                </div>
                 <div>
                  <h4 className="text-lg font-bold text-teal-800 mb-3">經濟與心理上可負擔的支持</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">相較個別治療，團體治療成本較低，也更容易持續參與。</p>
                </div>
                 <div>
                  <h4 className="text-lg font-bold text-teal-800 mb-3">心理照顧的去污名與生活化</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">心理健康應該像健身、飲食一樣，成為日常自我照顧的一部分。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- (已刪除「如何讓心理團體更貼近人心？」章節) --- */}

      {/* --- Special Feature: Unstructured Group (Block Background) --- */}
      <section className="py-24 px-6 relative overflow-hidden">
         {/* 背景色塊 */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-stone-50 to-[#F7F5F3] -z-20"></div>
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-teal-50/30 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-stone-100/50 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 bg-teal-100/50 text-teal-700 text-xs tracking-widest font-bold rounded-full mb-6 border border-teal-100">特別介紹</div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-10 leading-tight font-medium">
            非結構團體<br/>
            <span className="text-3xl md:text-4xl text-teal-800/70 mt-2 block">(Unstructured Group)</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="prose prose-lg prose-stone leading-loose font-light">
              <p>
                非結構團體，也常被稱為「人際歷程團體」或「探索式團體」，是一種沒有明確主題或教學活動安排的開放式團體。焦點不在課程，而是在<strong className="text-teal-700 font-medium">當下彼此的情緒、互動與關係中</strong>。
              </p>
              <div className="my-10 pl-6 border-l-4 border-teal-300 italic text-stone-700 text-xl font-serif">
                <p>這種團體強調的是「與人真實相遇」，而不是「學到某個技巧」。</p>
              </div>
              <h4 className="text-lg font-bold text-stone-800 mb-6">進行方式：</h4>
              <ul className="marker:text-teal-400 space-y-3">
                <li>沒有固定議題，由成員自由分享感受或對他人的回應</li>
                <li>治療師不主導內容，而是促進互動、觀察動力、適時介入</li>
                <li>主題自然浮現，例如焦慮、疏離、親密的渴望</li>
                <li>沉默、對視、衝突、靠近、退縮，都被視為重要的訊號</li>
              </ul>
            </div>
            <div>
              {/* 插圖：非結構流動 (Line Art) */}
              <IllustrationUnstructuredFlow />
               <p className="text-center text-stone-400 text-sm mt-6 font-serif italic">（象徵互動自然流動，沒有固定路徑）</p>
            </div>
          </div>

          {/* Core Value & Unmasking */}
          <div className="bg-white/60 backdrop-blur-lg p-12 rounded-[3rem] shadow-sm border border-stone-100 text-center max-w-4xl mx-auto">
             {/* 插圖：脫下面具 (Line Art) */}
            <IllustrationUnmask />
            
            <h3 className="font-serif text-3xl text-stone-800 mb-8">為什麼非結構團體這麼有力量？</h3>
            <p className="text-lg text-stone-600 leading-loose mb-12 max-w-3xl mx-auto font-light">
              在日常生活中，我們經常在角色與功能中行走，習慣戴著面具互動。但在非結構團體中，這些防衛可以被放下，讓真實的情緒流動，讓內在的需求被看見。<br/><br/>
              這是一個提醒你：<strong className="text-teal-700 font-medium">「你可以不一樣，你可以真實」</strong>的場域。
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 font-serif text-lg text-teal-800/80">
              <span className="px-6 py-3 bg-[#F7F5F3] rounded-full border border-stone-200">原來我一直是這樣靠近他人</span>
              <span className="px-6 py-3 bg-[#F7F5F3] rounded-full border border-stone-200">原來我很渴望被看見</span>
              <span className="px-6 py-3 bg-teal-50/50 rounded-full border border-teal-100 font-bold text-teal-800">原來，我可以改變</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Comparison Table 2: Structured vs Unstructured --- */}
      <section className="py-24 px-6 bg-white relative z-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-stone-800 mb-16">非結構 vs 結構團體的比較</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 非結構團體 Card (Teal Theme) */}
            <div className="bg-teal-50/40 rounded-[2.5rem] p-10 border border-teal-100/60 shadow-sm overflow-hidden relative group transition-all hover:shadow-md">
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-100/40 rounded-full blur-3xl -z-10 group-hover:bg-teal-100/60 transition-colors"></div>
              <h3 className="font-serif text-2xl text-teal-800 mb-8 text-center">非結構團體</h3>
              <ul className="space-y-5 text-stone-700 leading-relaxed font-light">
                <li className="flex gap-4"><span className="font-bold text-teal-700 shrink-0">主題來源：</span>當下互動自然浮現</li>
                <li className="flex gap-4"><span className="font-bold text-teal-700 shrink-0">進行方式：</span>開放性討論，自由互動</li>
                <li className="flex gap-4"><span className="font-bold text-teal-700 shrink-0">治療目標：</span>關係與自我覺察</li>
                <li className="flex gap-4"><span className="font-bold text-teal-700 shrink-0">治療師角色：</span>促進者、動力觀察者</li>
                <li className="flex gap-4 mt-8 pt-8 border-t border-teal-200/30"><span className="font-bold text-teal-700 shrink-0">適合對象：</span>對探索自己與關係有興趣的人</li>
              </ul>
            </div>

             {/* 結構團體 Card (Stone Theme) */}
            <div className="bg-[#F7F5F3] rounded-[2.5rem] p-10 border border-stone-100 shadow-sm overflow-hidden relative group transition-all hover:shadow-md">
               <div className="absolute top-0 right-0 w-40 h-40 bg-stone-200/40 rounded-full blur-3xl -z-10 group-hover:bg-stone-200/60 transition-colors"></div>
              <h3 className="font-serif text-2xl text-stone-800 mb-8 text-center">結構團體</h3>
              <ul className="space-y-5 text-stone-700 leading-relaxed font-light">
                <li className="flex gap-4"><span className="font-bold text-stone-600 shrink-0">主題來源：</span>治療師事先設定</li>
                <li className="flex gap-4"><span className="font-bold text-stone-600 shrink-0">進行方式：</span>明確流程與教學練習</li>
                <li className="flex gap-4"><span className="font-bold text-stone-600 shrink-0">治療目標：</span>技能學習、心理教育</li>
                <li className="flex gap-4"><span className="font-bold text-stone-600 shrink-0">治療師角色：</span>引導者、教學者</li>
                 <li className="flex gap-4 mt-8 pt-8 border-t border-stone-200/50"><span className="font-bold text-stone-600 shrink-0">適合對象：</span>希望學會具體技巧的人</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section (Warm Dark Background) --- */}
      <section className="py-24 px-6 text-center bg-stone-800 text-stone-200 relative overflow-hidden">
        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] bg-stone-700/30 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight font-medium text-stone-100">
            準備好在關係中探索自己了嗎？
          </h2>
          <p className="text-stone-300 text-lg mb-12 leading-loose font-light">
            如需安排團體體驗、初談諮詢或獲得最新團體開課資訊，<br/>歡迎與我們聯繫。
          </p>
          <button className="group relative inline-flex items-center gap-3 px-10 py-4 bg-teal-700 text-white text-lg font-bold rounded-full overflow-hidden shadow-lg shadow-teal-900/20 hover:bg-teal-600 transition-all duration-300">
            <span className="relative z-10 tracking-wider">聯絡我們，開始探索</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>
      </section>

    </main>
  );
}