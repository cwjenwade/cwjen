'use client';

import React, { useState } from 'react';
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

// --- 客製化抽象插圖組件 (SVG Line Art) ---

// 1. 英雄區塊：圍坐成圈與流動 (The Circle & Flow)
const IllustrationHeroCircle = () => (
  <svg viewBox="0 0 400 300" className="w-full max-w-[500px] mx-auto opacity-90" aria-hidden="true">
    <defs>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#64748b" stopOpacity="0.4" /> {/* slate-500 */}
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.8" /> {/* sky-500 (Vibrant) */}
      </linearGradient>
    </defs>
    {/* 抽象的人與連結 */}
    <g stroke="url(#blueGradient)" strokeWidth="2" fill="none" strokeLinecap="round">
      <circle cx="200" cy="150" r="80" strokeOpacity="0.2" strokeWidth="1"/>
      <path d="M140,120 Q200,60 260,120 T380,150" className="animate-[pulse_4s_ease-in-out_infinite]" />
      <path d="M20,150 Q80,240 200,180 T380,150" className="animate-[pulse_5s_ease-in-out_infinite]" opacity="0.7"/>
      
      {/* 象徵成員的節點 */}
      <circle cx="140" cy="120" r="8" fill="#e2e8f0" stroke="#64748b"/>
      <circle cx="260" cy="120" r="8" fill="#e2e8f0" stroke="#64748b"/>
      <circle cx="200" cy="230" r="8" fill="#e2e8f0" stroke="#64748b"/>
      <circle cx="80" cy="180" r="8" fill="#e2e8f0" stroke="#64748b"/>
      <circle cx="320" cy="180" r="8" fill="#e2e8f0" stroke="#64748b"/>
      
      {/* 中心能量 */}
      <circle cx="200" cy="150" r="20" fill="url(#blueGradient)" opacity="0.3" className="animate-ping"/>
    </g>
  </svg>
);

// 2. 多元支持：不同姿態靠近中心 (Diverse Support)
const IllustrationDiverseSupport = () => (
  <svg viewBox="0 0 300 200" className="w-full max-w-[300px] mx-auto" aria-hidden="true">
    <g stroke="#94a3b8" strokeWidth="2" fill="none">
      <path d="M50,150 C50,100 100,100 150,100" strokeDasharray="4 4" />
      <path d="M250,50 C250,100 200,100 150,100" />
      <path d="M150,180 L150,100" strokeWidth="3" stroke="#64748b" />
      <circle cx="150" cy="100" r="15" fill="#bfdbfe" stroke="#3b82f6" opacity="0.8"/>
      <path d="M100,50 Q150,20 200,50" opacity="0.5"/>
    </g>
  </svg>
);

// 3. 連結帶來改變 (Connection adds up)
const IllustrationConnectionChange = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full opacity-60 absolute top-0 left-0" aria-hidden="true">
    <g stroke="#bae6fd" strokeWidth="1.5" fill="none">
      <circle cx="100" cy="100" r="40" opacity="0.5" />
      <circle cx="100" cy="100" r="70" opacity="0.3" />
      <path d="M100,100 L160,60" />
      <path d="M100,100 L40,140" />
      <path d="M100,100 L140,160" />
      <path d="M100,100 L60,40" />
    </g>
  </svg>
);

// 4. 非結構團體：流動與相遇 (Unstructured Flow)
const IllustrationUnstructuredFlow = () => (
  <svg viewBox="0 0 400 200" className="w-full max-w-[400px] mx-auto" aria-hidden="true">
    <defs>
      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a5f3fc" /> {/* cyan-200 */}
        <stop offset="50%" stopColor="#60a5fa" /> {/* blue-400 */}
        <stop offset="100%" stopColor="#818cf8" /> {/* indigo-400 */}
      </linearGradient>
    </defs>
    <path d="M50,100 C100,50 150,150 200,100 S300,50 350,100" stroke="url(#flowGradient)" strokeWidth="4" fill="none" strokeLinecap="round" className="animate-[pulse_6s_ease-in-out_infinite]"/>
    <path d="M50,120 C120,180 180,20 250,80 S380,140 350,100" stroke="url(#flowGradient)" strokeWidth="2" fill="none" opacity="0.5"/>
    <circle cx="200" cy="100" r="10" fill="#dbeafe"/>
    <circle cx="120" cy="70" r="5" fill="#bfdbfe"/>
    <circle cx="280" cy="130" r="8" fill="#bfdbfe"/>
  </svg>
);

// 5. 脫下面具 (Unmasking)
const IllustrationUnmask = () => (
  <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto mb-8" aria-hidden="true">
    <g stroke="#475569" strokeWidth="2" fill="none">
      {/* Mask */}
      <path d="M60,70 Q100,40 140,70 Q160,100 140,150 Q100,180 60,150 Q40,100 60,70 Z" fill="#f1f5f9" opacity="0.8" transform="translate(-10, -10)"/>
      {/* Real Face underneath */}
      <path d="M70,80 Q100,60 130,80 Q145,110 130,145 Q100,170 70,145 Q55,110 70,80 Z" stroke="#0ea5e9" strokeWidth="2.5"/>
      {/* Gentle Eyes */}
      <path d="M90,110 Q100,115 110,110" stroke="#0ea5e9" strokeLinecap="round"/>
      <path d="M90,110 Q100,115 110,110" stroke="#0ea5e9" strokeLinecap="round"/>
    </g>
  </svg>
);


// --- 主要頁面組件 ---
export default function GroupTherapyPage() {
  // FAQ/Accordion state for the "How to make it accessible" section
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const accessibilityPoints = [
    { title: "使用生活化、溫柔的語言", content: "例如：「一起練習說出自己」比「情緒管理小組」更親近。" },
    { title: "傳遞成長訊息", content: "強調「陪伴、成長、探索」的訊息，而非「問題修復」的概念。" },
    { title: "提供入門體驗", content: "提供體驗場次或簡短入門活動，讓初次參與者安心。" },
    { title: "日常心理照顧", content: "鼓勵將心理團體視為日常生活的一部分，而非「只有有問題的人才會參加」。" },
  ];

  return (
    <main className="min-h-screen bg-[#F4F7F9] font-sans text-slate-700 selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- Hero Section --- */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden bg-gradient-to-b from-slate-50 to-[#F4F7F9]">
        <div className="max-w-5xl mx-auto text-center">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 rounded-full mb-8 border border-blue-100">
            <Users size={18} className="text-blue-600" />
            <span className="text-xs font-bold tracking-widest text-blue-800 uppercase">Group Therapy</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-slate-800 leading-tight mb-8">
            團體治療介紹<br />
            <span className="text-blue-700/90 mt-2 block">讓改變，在連結中發生</span>
          </h1>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
          <div className="prose prose-lg prose-slate leading-relaxed">
            <p className="text-xl font-medium text-slate-800 mb-6">
              團體不只是「很多人在一起的心理治療」，<br/>它是一個具有生命力與互動歷程的場域。
            </p>
            <p>
              團體治療是一種專業心理治療的形式，由一位或多位具備資格的心理師帶領，與一群參與者共同工作。在這樣的治療空間中，參與者通常帶著相似的困擾或人生課題，彼此分享經驗、傾聽故事、表達情緒、探索內在，同時學習建立更健康的人際關係。
            </p>
            <p className="border-l-4 border-blue-300 pl-4 text-slate-600 italic">
              在這裡，你會發現自己在人群中的樣貌，也看見他人是如何感受、理解與回應你。
            </p>
          </div>
          <div className="relative">
             {/* 插圖：多人圍坐成圈 */}
            <IllustrationHeroCircle />
          </div>
        </div>

        {/* Logistics Banner */}
        <div className="max-w-4xl mx-auto mt-20 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap justify-around gap-6 text-sm md:text-base">
          <div className="flex items-center gap-3 text-slate-700">
            <Users className="text-blue-500" size={20}/>
            <span>每團約 5-15 人 (小型約 4 人)</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <Clock className="text-blue-500" size={20}/>
            <span>每次會談約 1.5 - 2 小時</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700">
            <Video className="text-blue-500" size={20}/>
            <span>形式多元：面對面或線上進行</span>
          </div>
        </div>
      </section>

      {/* --- Core Features --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl text-slate-800 mb-4">團體治療的主要特點</h2>
            <p className="text-slate-500">為什麼我們需要「在一起」接受治療？</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100/50 rounded-xl text-blue-600 shrink-0"><Shield size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">一個安全、真實的互動空間</h3>
                <p className="text-slate-600 leading-relaxed">在治療師的引導下，每位成員都可以表達真實感受、歷程與困難，同時從他人身上看見「我並不孤單」，彼此理解、支持與陪伴。</p>
              </div>
            </div>
             <div className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100/50 rounded-xl text-blue-600 shrink-0"><Mirror size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">彼此學習與模仿的場域</h3>
                <p className="text-slate-600 leading-relaxed">我們總是在關係中學會自己是誰。團體中，你可以看到別人怎麼說出情緒、表達需要，進而學習新的應對方式與人際溝通策略。</p>
              </div>
            </div>
             <div className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100/50 rounded-xl text-blue-600 shrink-0"><Layers size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">多元議題都能適用</h3>
                <p className="text-slate-600 leading-relaxed">應用非常廣泛，從焦慮、憂鬱、創傷修復，到親密關係、自我探索、情緒調節、人際互動，皆有對應的團體形式。</p>
              </div>
            </div>
             <div className="flex gap-5 items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="p-3 bg-blue-100/50 rounded-xl text-blue-600 shrink-0"><Puzzle size={24}/></div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">可以與個別治療互補</h3>
                <p className="text-slate-600 leading-relaxed mb-4">許多參與者會在進行個別治療的同時，也參加團體治療，以不同角度深化自我理解與改變歷程。</p>
                {/* 插圖：多元支持 */}
                <IllustrationDiverseSupport />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Comparison Table 1: Therapy vs Support Group --- */}
      <section className="py-24 px-6 bg-slate-100/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-slate-800 mb-12">團體治療與支持性團體的差異</h2>
          
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
            <div className="grid grid-cols-3 bg-slate-200/80 p-4 text-slate-800 font-bold text-center">
              <div className="col-span-1 text-left pl-4">項目</div>
              <div className="col-span-1 text-blue-800">團體治療 (Group Therapy)</div>
              <div className="col-span-1 text-slate-600">支持性／自助團體 (Support Group)</div>
            </div>
            
            <div className="divide-y divide-slate-100">
              <div className="grid grid-cols-3 p-5 items-center hover:bg-slate-50/50 transition-colors">
                <div className="font-medium text-slate-700 flex items-center gap-2"><ChevronDown size={16} className="text-blue-400"/>引導者</div>
                <div className="text-center text-slate-800 font-medium bg-blue-50/30 py-2 rounded-lg mx-2">由專業心理師帶領</div>
                <div className="text-center text-slate-600">無專業引導，常由成員自組</div>
              </div>
              <div className="grid grid-cols-3 p-5 items-center hover:bg-slate-50/50 transition-colors">
                <div className="font-medium text-slate-700 flex items-center gap-2"><ChevronDown size={16} className="text-blue-400"/>結構性</div>
                <div className="text-center text-slate-800 font-medium bg-blue-50/30 py-2 rounded-lg mx-2">有心理治療架構與目標</div>
                <div className="text-center text-slate-600">以經驗分享、支持為主</div>
              </div>
               <div className="grid grid-cols-3 p-5 items-center hover:bg-slate-50/50 transition-colors">
                <div className="font-medium text-slate-700 flex items-center gap-2"><ChevronDown size={16} className="text-blue-400"/>工作重點</div>
                <div className="text-center text-slate-800 font-medium bg-blue-50/30 py-2 rounded-lg mx-2">深入探索互動、促進改變</div>
                <div className="text-center text-slate-600">提供陪伴、舒緩孤單感</div>
              </div>
              <div className="grid grid-cols-3 p-5 items-center hover:bg-slate-50/50 transition-colors">
                <div className="font-medium text-slate-700 flex items-center gap-2"><ChevronDown size={16} className="text-blue-400"/>回應方式</div>
                <div className="text-center text-slate-800 font-medium bg-blue-50/30 py-2 rounded-lg mx-2">注重情緒歷程與互動覺察</div>
                <div className="text-center text-slate-600">分享經驗與實用建議為主</div>
              </div>
            </div>
          </div>
          <p className="text-center text-slate-500 text-sm mt-6 font-serif italic">（左側強調專業介入與深度改變，右側強調社群支持與經驗交流）</p>
        </div>
      </section>

      {/* --- Common Group Types --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-slate-800 mb-16">常見的團體類型</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Type 1 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/50 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageCircle size={36} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">動力取向團體</h3>
              <p className="text-slate-600 leading-relaxed">聚焦人際歷程，探索互動與情感反應。</p>
            </div>
            {/* Type 2 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/50 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen size={36} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">技能訓練團體</h3>
              <p className="text-slate-600 leading-relaxed">教導具體技巧，如情緒調節、正念練習。</p>
            </div>
             {/* Type 3 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/50 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartPulse size={36} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">支持性／問題導向</h3>
              <p className="text-slate-600 leading-relaxed">聚焦在特定困擾，如成癮、悲傷、失戀等。</p>
            </div>
             {/* Type 4 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100/50 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HandHeart size={36} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">心理教育團體</h3>
              <p className="text-slate-600 leading-relaxed">傳授心理知識與自我照顧方法。</p>
            </div>
          </div>
        </div>
      </section>

       {/* --- Why it works & Modern Needs --- */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#F4F7F9] to-blue-50 relative overflow-hidden">
        {/* 背景插圖：連結帶來改變 */}
        <IllustrationConnectionChange />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-800 mb-8">為什麼團體治療能帶來改變？</h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              研究與臨床經驗指出，團體治療不只是心理支持，更是一種深層的轉化歷程。它的影響來自<span className="text-blue-700 font-medium">關係中的真實接觸與互動經驗</span>。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column: Mechanisms */}
            <div>
              <h3 className="font-serif text-2xl text-slate-800 mb-8 flex items-center gap-3">
                <Sparkles className="text-blue-500" />
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
                  <li key={index} className="flex items-start gap-4 p-4 bg-white/80 rounded-xl shadow-sm border border-blue-100/50">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-serif shrink-0">{index + 1}</div>
                    <p className="text-slate-700 leading-relaxed pt-1">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Modern Needs */}
            <div className="bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-slate-200/80 shadow-sm">
              <h3 className="font-serif text-2xl text-slate-800 mb-6">回應現代人的核心需求</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                現代人的生活節奏快速、壓力沉重，人際關係也更為複雜。我們渴望支持，卻常感到猶豫。團體治療回應了這些渴望：
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-blue-800 mb-2">一個可以被理解的空間</h4>
                  <p className="text-slate-600 text-sm">能夠安心表達，不被評價，也不是被教訓，而是被真正聽見。</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-800 mb-2">練習人際互動與表達的場域</h4>
                  <p className="text-slate-600 text-sm">許多人難以說出真正的感受或設下界線，團體是練習關係的實驗場。</p>
                </div>
                 <div>
                  <h4 className="text-lg font-bold text-blue-800 mb-2">經濟與心理上可負擔的支持</h4>
                  <p className="text-slate-600 text-sm">相較個別治療，團體治療成本較低，也更容易持續參與。</p>
                </div>
                 <div>
                  <h4 className="text-lg font-bold text-blue-800 mb-2">心理照顧的去污名與生活化</h4>
                  <p className="text-slate-600 text-sm">心理健康應該像健身、飲食一樣，成為日常自我照顧的一部分。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Making it Accessible (Accordion Style) --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
           <h2 className="font-serif text-2xl text-slate-800 mb-10">如何讓心理團體更貼近人心？</h2>
           <div className="space-y-4 text-left">
            {accessibilityPoints.map((point, index) => {
              const isOpen = openAccordion === index;
              return (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 bg-slate-50/50 hover:bg-blue-50/30">
                  <button
                    onClick={() => setOpenAccordion(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 focus:outline-none"
                  >
                    <h3 className={`text-lg font-bold ${isOpen ? 'text-blue-800' : 'text-slate-700'}`}>
                      {point.title}
                    </h3>
                    <ChevronDown className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} size={20}/>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-100/50">
                      {point.content}
                    </p>
                  </div>
                </div>
              )
            })}
           </div>
        </div>
      </section>

      {/* --- Special Feature: Unstructured Group --- */}
      <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-slate-50 text-slate-800 relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 text-xs tracking-widest font-bold rounded-full mb-6">特別介紹</div>
          <h2 className="font-serif text-4xl md:text-5xl text-slate-900 mb-10 leading-tight">
            非結構團體<br/>
            <span className="text-3xl md:text-4xl text-indigo-800/80">(Unstructured Group)</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="prose prose-lg prose-slate leading-relaxed">
              <p>
                非結構團體，也常被稱為「人際歷程團體」或「探索式團體」，是一種沒有明確主題或教學活動安排的開放式團體。焦點不在課程，而是在<strong className="text-indigo-700">當下彼此的情緒、互動與關係中</strong>。
              </p>
              <p className="text-xl font-serif text-indigo-900 italic my-8 pl-6 border-l-4 border-indigo-300">
                這種團體強調的是「與人真實相遇」，而不是「學到某個技巧」。
              </p>
              <h4 className="text-lg font-bold text-slate-800 mb-4">進行方式：</h4>
              <ul className="marker:text-indigo-500">
                <li>沒有固定議題，由成員自由分享感受或對他人的回應</li>
                <li>治療師不主導內容，而是促進互動、觀察動力、適時介入</li>
                <li>主題自然浮現，例如焦慮、疏離、親密的渴望</li>
                <li>沉默、對視、衝突、靠近、退縮，都被視為重要的訊號</li>
              </ul>
            </div>
            <div>
              {/* 插圖：非結構流動 */}
              <IllustrationUnstructuredFlow />
               <p className="text-center text-slate-500 text-sm mt-4 font-serif italic">（象徵互動自然流動，沒有固定路徑）</p>
            </div>
          </div>

          {/* Core Value & Unmasking */}
          <div className="bg-white/70 backdrop-blur-lg p-12 rounded-[3rem] shadow-xl border border-indigo-100 text-center max-w-4xl mx-auto">
             {/* 插圖：脫下面具 */}
            <IllustrationUnmask />
            
            <h3 className="font-serif text-3xl text-slate-800 mb-8">為什麼非結構團體這麼有力量？</h3>
            <p className="text-lg text-slate-600 leading-loose mb-10 max-w-3xl mx-auto">
              在日常生活中，我們經常在角色與功能中行走，習慣戴著面具互動。但在非結構團體中，這些防衛可以被放下，讓真實的情緒流動，讓內在的需求被看見。<br/><br/>
              這是一個提醒你：<strong className="text-indigo-700">「你可以不一樣，你可以真實」</strong>的場域。
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 font-serif text-lg md:text-xl text-indigo-900/80">
              <span className="px-6 py-3 bg-indigo-50 rounded-full border border-indigo-100">原來我一直是這樣靠近他人</span>
              <span className="px-6 py-3 bg-indigo-50 rounded-full border border-indigo-100">原來我很渴望被看見</span>
              <span className="px-6 py-3 bg-indigo-50 rounded-full border border-indigo-100 font-bold">原來，我可以改變</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Comparison Table 2: Structured vs Unstructured --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-slate-800 mb-12">非結構 vs 結構團體的比較</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 非結構團體 Card */}
            <div className="bg-indigo-50/50 rounded-3xl p-8 border border-indigo-100 shadow-sm overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl -z-10 group-hover:bg-indigo-200/50 transition-colors"></div>
              <h3 className="font-serif text-2xl text-indigo-900 mb-6 text-center">非結構團體</h3>
              <ul className="space-y-4 text-slate-700 leading-relaxed">
                <li className="flex gap-3"><span className="font-bold text-indigo-700 shrink-0">主題來源：</span>當下互動自然浮現</li>
                <li className="flex gap-3"><span className="font-bold text-indigo-700 shrink-0">進行方式：</span>開放性討論，自由互動</li>
                <li className="flex gap-3"><span className="font-bold text-indigo-700 shrink-0">治療目標：</span>關係與自我覺察</li>
                <li className="flex gap-3"><span className="font-bold text-indigo-700 shrink-0">治療師角色：</span>促進者、動力觀察者</li>
                <li className="flex gap-3 mt-6 pt-6 border-t border-indigo-200/50"><span className="font-bold text-indigo-700 shrink-0">適合對象：</span>對探索自己與關係有興趣的人</li>
              </ul>
            </div>

             {/* 結構團體 Card */}
            <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 shadow-sm overflow-hidden relative group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/50 rounded-full blur-2xl -z-10 group-hover:bg-slate-300/50 transition-colors"></div>
              <h3 className="font-serif text-2xl text-slate-800 mb-6 text-center">結構團體</h3>
              <ul className="space-y-4 text-slate-700 leading-relaxed">
                <li className="flex gap-3"><span className="font-bold text-slate-600 shrink-0">主題來源：</span>治療師事先設定</li>
                <li className="flex gap-3"><span className="font-bold text-slate-600 shrink-0">進行方式：</span>明確流程與教學練習</li>
                <li className="flex gap-3"><span className="font-bold text-slate-600 shrink-0">治療目標：</span>技能學習、心理教育</li>
                <li className="flex gap-3"><span className="font-bold text-slate-600 shrink-0">治療師角色：</span>引導者、教學者</li>
                 <li className="flex gap-3 mt-6 pt-6 border-t border-slate-200/50"><span className="font-bold text-slate-600 shrink-0">適合對象：</span>希望學會具體技巧的人</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 px-6 text-center bg-blue-900 text-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight font-medium">
            準備好在關係中探索自己了嗎？
          </h2>
          <p className="text-blue-200 text-lg mb-12 leading-relaxed">
            如需安排團體體驗、初談諮詢或獲得最新團體開課資訊，<br/>歡迎與我們聯繫。
          </p>
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-400 text-blue-950 text-lg font-bold rounded-full overflow-hidden shadow-lg hover:shadow-blue-400/30 hover:bg-blue-300 transition-all duration-300">
            <span className="relative z-10">聯絡我們，開始探索</span>
            <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform"/>
            <div className="absolute inset-0 h-full w-0 bg-white transition-all duration-300 opacity-20 group-hover:w-full"></div>
          </button>
        </div>
      </section>

    </main>
  );
}