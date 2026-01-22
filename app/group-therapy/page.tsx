'use client';

import React from 'react';
import { 
  Users, 
  Clock, 
  Video, 
  Shield, 
  ScanFace,
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

export default function GroupTherapyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F3] font-sans text-stone-700 selection:bg-teal-100 selection:text-teal-900">
      
      {/* ================= HERO SECTION (gp0.png) ================= */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[50%] h-[80%] bg-gradient-to-bl from-teal-50/80 to-transparent -z-10 rounded-bl-[100px]"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10 lg:pr-10">
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200/40 rounded-full mb-8 backdrop-blur-sm border border-stone-200/50">
              <Users size={18} className="text-teal-700" />
              <span className="text-xs font-bold tracking-widest text-stone-600 uppercase">Group Therapy</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-stone-800 leading-[1.2] mb-8 font-medium">
              團體諮商與心理治療<br />
              <span className="text-teal-800/90 mt-3 block text-3xl md:text-5xl">讓改變，在連結中發生</span>
            </h1>
            <div className="prose prose-lg prose-stone leading-loose font-light text-stone-600">
              <p className="text-xl font-serif text-stone-800 mb-6 leading-snug">
                團體不只是「很多人在一起的心理治療」，<br/>它是一個具有生命力與互動歷程的場域。
              </p>
              <p className="mb-6">
                團體治療是一種專業心理治療的形式，由一位或多位具備資格的心理師帶領，與一群參與者共同工作。在這樣的治療空間中，參與者通常帶著相似的困擾或人生課題，彼此分享經驗、傾聽故事、表達情緒、探索內在，同時學習建立更健康的人際關係。
              </p>
              <div className="pl-6 border-l-4 border-teal-700/30">
                <p className="text-stone-700 italic font-medium">
                 在這裡，你會發現自己在人群中的樣貌，也看見他人是如何感受、理解與回應你。
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-stone-200 border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-700">
               <img 
                 src="https://cwjen.vercel.app/Photos/gp0.png" 
                 alt="多位成人圍坐成圈進行團體對話"
                 className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-1000"
               />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-stone-200/50 rounded-full blur-xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100/50 rounded-full blur-xl -z-10"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-24">
          <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden flex flex-col md:flex-row">
             <div className="md:w-1/3 bg-stone-50 relative min-h-[250px] border-r border-stone-100">
                <img 
                  src="https://cwjen.vercel.app/Photos/gp6.png" 
                  alt="空圓桌周圍擺放數張椅子與杯子"
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
             <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <h3 className="font-serif text-xl text-stone-800 mb-6 flex items-center gap-2">
                  <Sparkles size={20} className="text-teal-600"/>
                  團體設置
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-stone-600">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-teal-700 shrink-0"><Users size={20}/></div>
                    <span className="font-medium">每團約 5-15 人<br/><span className="text-xs text-stone-400 font-normal">小型約 4 人</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-teal-700 shrink-0"><Clock size={20}/></div>
                    <span className="font-medium">每次會談<br/><span className="text-xs text-stone-400 font-normal">約 1.5 - 2 小時</span></span>
                  </div>
                  <div className="flex items-center gap-3 sm:col-span-2">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-teal-700 shrink-0"><Video size={20}/></div>
                    <span className="font-medium">形式多元：面對面或線上進行</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* ================= CORE FEATURES (gp5.png) ================= */}
      <section className="py-24 px-6 bg-white relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl text-stone-800 mb-4">團體治療的主要特點</h2>
            <p className="text-stone-500 font-light">為什麼我們需要「在一起」接受治療？</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col p-6 rounded-2xl bg-[#F7F5F3] border border-stone-100 hover:border-teal-200 transition-colors h-full">
                <div className="w-12 h-12 bg-white rounded-xl text-teal-600 flex items-center justify-center mb-4 shadow-sm"><Shield size={24}/></div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">安全、真實的空間</h3>
                <p className="text-stone-600 text-sm leading-relaxed font-light">在引導下表達真實感受，看見「我並不孤單」，彼此理解與陪伴。</p>
              </div>
               <div className="flex flex-col p-6 rounded-2xl bg-[#F7F5F3] border border-stone-100 hover:border-teal-200 transition-colors h-full">
                <div className="w-12 h-12 bg-white rounded-xl text-teal-600 flex items-center justify-center mb-4 shadow-sm"><Users size={24}/></div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">彼此學習的場域</h3>
                <p className="text-stone-600 text-sm leading-relaxed font-light">看見別人怎麼表達需要，進而學習新的應對方式與溝通策略。</p>
              </div>
               <div className="flex flex-col p-6 rounded-2xl bg-[#F7F5F3] border border-stone-100 hover:border-teal-200 transition-colors h-full">
                <div className="w-12 h-12 bg-white rounded-xl text-teal-600 flex items-center justify-center mb-4 shadow-sm"><Layers size={24}/></div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">多元議題適用</h3>
                <p className="text-stone-600 text-sm leading-relaxed font-light">從焦慮、憂鬱、創傷修復，到親密關係、自我探索皆適用。</p>
              </div>
               <div className="flex flex-col p-6 rounded-2xl bg-[#F7F5F3] border border-stone-100 hover:border-teal-200 transition-colors h-full">
                <div className="w-12 h-12 bg-white rounded-xl text-teal-600 flex items-center justify-center mb-4 shadow-sm"><Puzzle size={24}/></div>
                <h3 className="text-lg font-bold text-stone-800 mb-2">與個別治療互補</h3>
                <p className="text-stone-600 text-sm leading-relaxed font-light">許多人同時參與，以不同角度深化自我理解與改變歷程。</p>
              </div>
            </div>

            <div className="sticky top-24">
               <div className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-stone-100">
                  <img 
                    src="https://cwjen.vercel.app/Photos/gp5.png" 
                    alt="多位成員圍坐成圈，姿態放鬆" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-white/95 backdrop-blur-sm p-6 border-t border-stone-100">
                    <p className="font-serif text-stone-800 text-lg italic">
                      "Shared Space, Shared Growth"
                    </p>
                    <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Supportive Atmosphere</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHY IT WORKS (Warm Cream Style) ================= */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#FFF9F0]">
        
        {/* 背景裝飾：點點圓形 (Dots & Circles) */}
        {/* 1. 點狀紋理 */}
        <div 
          className="absolute inset-0 opacity-[0.25]"
          style={{ backgroundImage: 'radial-gradient(#D6CCC2 2px, transparent 2px)', backgroundSize: '32px 32px' }}
        ></div>
        
        {/* 2. 溫暖暈染圓形 */}
        <div className="absolute top-20 left-[-50px] w-80 h-80 bg-[#FFE4C4] rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
        <div className="absolute bottom-20 right-[-50px] w-96 h-96 bg-[#E6C9C5] rounded-full blur-3xl opacity-40 mix-blend-multiply"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#F0E6D2] rounded-full blur-2xl opacity-60 -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            {/* 標題顏色改為深暖棕色 */}
            <h2 className="font-serif text-3xl md:text-4xl text-[#5E4B45] mb-8 font-medium">
              為什麼團體治療能帶來改變？
            </h2>
            {/* 內文顏色改為暖灰色 */}
            <p className="text-lg text-[#8C857B] leading-loose font-light max-w-3xl mx-auto">
              團體諮商與心理治療是一種深層的轉化歷程。它的影響來自<span className="text-[#B58D76] font-bold">關係中的真實接觸與互動經驗</span>。
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left: Image (gp2.png) - 獨立顯示 */}
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-xl border-4 border-white/80">
               <img 
                 src="https://cwjen.vercel.app/Photos/gp2.png" 
                 alt="四人圍坐進行深度交談"
                 className="w-full h-full object-cover" 
               />
               {/* 圖片下方的說明文字條 - 改為淺色風格 */}
               <div className="bg-[#FFFDF9]/90 p-4 absolute bottom-0 w-full border-t border-[#EBE5D9] backdrop-blur-sm">
                 <p className="text-[#8C857B] text-xs font-serif italic text-center">
                   深度投入與回應中的互動關係
                 </p>
               </div>
            </div>

            {/* Right: Mechanisms & Needs */}
            <div className="order-1 lg:order-2 space-y-10">
              
              {/* 卡片：改變的核心機制 (改為白底暖框) */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-[#E6DCCF] shadow-[0_4px_20px_-4px_rgba(214,204,194,0.3)]">
                <h3 className="font-serif text-2xl text-[#5E4B45] mb-6 flex items-center gap-3">
                  <Sparkles className="text-[#D4A373]" strokeWidth={1.5} />
                  改變的核心機制
                </h3>
                <ul className="space-y-4">
                  {[
                    "減少孤立感，感受到「我不是一個人」",
                    "在互動中學會新的關係模式與情緒表達方式",
                    "增進對自我的理解與覺察",
                    "來自多位成員的支持與被接納的經驗",
                    "提供一個安全的實驗場，勇敢嘗試過去不敢做的事"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      {/* 序號圈圈 - 暖色系 */}
                      <div className="w-6 h-6 rounded-full bg-[#F5EBE0] text-[#8D7F71] flex items-center justify-center font-serif shrink-0 text-xs font-bold">{index + 1}</div>
                      <p className="text-[#8C857B] leading-relaxed pt-0.5 font-light">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 區塊：回應現代人需求 (改為深色側邊線) */}
              <div className="pl-6 border-l-4 border-[#D6CCC2]">
                <h4 className="text-lg font-bold text-[#A68A64] mb-2">回應現代人的核心需求</h4>
                <p className="text-[#8C857B] text-sm leading-relaxed font-light">
                  在快節奏的生活中，我們需要一個能夠安心表達、不被評價的空間。團體治療提供了一個經濟上可負擔，且能練習人際界線與真實互動的實驗場。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= COMPARISON TABLE ================= */}
      <section className="py-24 px-6 bg-[#F7F5F3] relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-stone-800 mb-16">團體治療 vs 支持性團體</h2>
          
          <div className="overflow-hidden rounded-3xl border border-stone-200/80 shadow-sm bg-white">
            <div className="grid grid-cols-3 bg-stone-100/50 p-5 text-stone-800 font-bold text-center border-b border-stone-200">
              <div className="col-span-1 text-left pl-6">項目</div>
              <div className="col-span-1 text-teal-800">團體治療 (Therapy)</div>
              <div className="col-span-1 text-stone-500">支持團體 (Support)</div>
            </div>
            
            <div className="divide-y divide-stone-100">
              <div className="grid grid-cols-3 p-6 items-center hover:bg-stone-50/50 transition-colors leading-relaxed">
                <div className="font-medium text-stone-700 pl-2">引導者</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-2 rounded-lg mx-2 text-sm">由專業心理師帶領</div>
                <div className="text-center text-stone-600 font-light text-sm">無專業引導，成員自組</div>
              </div>
              <div className="grid grid-cols-3 p-6 items-center hover:bg-stone-50/50 transition-colors leading-relaxed">
                <div className="font-medium text-stone-700 pl-2">結構性</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-2 rounded-lg mx-2 text-sm">有心理治療架構與目標</div>
                <div className="text-center text-stone-600 font-light text-sm">以經驗分享、支持為主</div>
              </div>
               <div className="grid grid-cols-3 p-6 items-center hover:bg-stone-50/50 transition-colors leading-relaxed">
                <div className="font-medium text-stone-700 pl-2">工作重點</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-2 rounded-lg mx-2 text-sm">深入探索互動、促進改變</div>
                <div className="text-center text-stone-600 font-light text-sm">提供陪伴、舒緩孤單感</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMMON TYPES ================= */}
      <section className="py-24 px-6 bg-white border-t border-stone-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-stone-800 mb-20">常見的團體類型</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageCircle, title: "動力取向團體", desc: "聚焦人際歷程，探索互動與情感反應。" },
              { icon: BookOpen, title: "技能訓練團體", desc: "教導具體技巧，如情緒調節、正念練習。" },
              { icon: HeartPulse, title: "支持性／問題導向", desc: "聚焦在特定困擾，如成癮、悲傷、失戀等。" },
              { icon: HandHeart, title: "心理教育團體", desc: "傳授心理知識與自我照顧方法。" }
            ].map((type, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-stone-50 border border-stone-100 text-center hover:bg-teal-50/30 transition-colors">
                <type.icon size={32} className="text-teal-600 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-bold text-stone-800 mb-2">{type.title}</h3>
                <p className="text-stone-600 font-light text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UNSTRUCTURED GROUP (gp1.png & gp3.png) ================= */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#F0FDF4]/30">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-block px-4 py-1.5 bg-teal-100/50 text-teal-700 text-xs tracking-widest font-bold rounded-full mb-6 border border-teal-100">特別介紹</div>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-10 leading-tight font-medium">
            非結構團體<br/>
            <span className="text-3xl md:text-4xl text-teal-800/70 mt-2 block font-normal">(Unstructured Group)</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="prose prose-lg prose-stone leading-loose font-light">
              <p>
                非結構團體，也常被稱為「人際歷程團體」或「探索式團體」，是一種沒有明確主題或教學活動安排的開放式團體。焦點不在課程，而是在<strong className="text-teal-700 font-medium">當下彼此的情緒、互動與關係中</strong>。
              </p>
              <div className="my-8 pl-6 border-l-4 border-teal-300 italic text-stone-700 text-xl font-serif">
                <p>這種團體強調的是「與人真實相遇」，而不是「學到某個技巧」。</p>
              </div>
              <ul className="space-y-2 list-disc pl-5 text-base">
                <li>沒有固定議題，由成員自由分享感受</li>
                <li>治療師不主導內容，而是促進互動、觀察動力</li>
                <li>主題自然浮現，例如焦慮、疏離、親密的渴望</li>
              </ul>
            </div>

            <div className="relative">
               <div className="p-4 bg-white border border-stone-200 rounded-lg shadow-sm rotate-2 hover:rotate-0 transition-transform duration-500">
                 <img 
                   src="https://cwjen.vercel.app/Photos/gp1.png" 
                   alt="數人圍繞圓桌進行討論" 
                   className="w-full h-auto grayscale-[20%] contrast-[1.1]"
                 />
                 <p className="text-center text-xs text-stone-400 mt-2 font-serif italic tracking-wide">
                   Focus on Interaction
                 </p>
               </div>
            </div>
          </div>

          <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-stone-200/50 border border-stone-100 text-center max-w-3xl mx-auto">
             <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-stone-50 shadow-inner bg-stone-100 relative">
                <img 
                  src="https://cwjen.vercel.app/Photos/gp3.png" 
                  alt="一張空椅上出現人臉意象" 
                  className="w-full h-full object-cover scale-125 translate-y-2 opacity-90"
                />
             </div>
            
            <h3 className="font-serif text-3xl text-stone-800 mb-6 flex justify-center items-center gap-2">
              <ScanFace className="text-teal-600" />
              為什麼非結構團體這麼有力量？
            </h3>
            <p className="text-lg text-stone-600 leading-loose mb-10 max-w-2xl mx-auto font-light">
              在日常生活中，我們經常在角色與功能中行走，習慣戴著面具互動。但在這裡，這些防衛可以被放下，讓真實的情緒流動。<br/>
              這是一個提醒你：<strong className="text-teal-700 font-medium">「你可以不一樣，你可以真實」</strong>的場域。
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 font-serif text-base text-teal-800/80">
              <span className="px-5 py-2 bg-[#F7F5F3] rounded-full border border-stone-200">原來我一直是這樣靠近他人</span>
              <span className="px-5 py-2 bg-teal-50/50 rounded-full border border-teal-100 font-bold text-teal-800">原來，我可以改變</span>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}