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

export default function GroupTherapyPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F3] font-sans text-stone-700 selection:bg-teal-100 selection:text-teal-900">
      
      {/* --- Hero Section --- */}
      <section className="pt-36 pb-24 px-6 relative overflow-hidden">
        {/* 背景色塊 (靜態) */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-50/50 rounded-full blur-3xl -z-10 opacity-70 mix-blend-multiply"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-stone-200/60 rounded-full blur-3xl -z-10 opacity-60 mix-blend-multiply"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200/40 rounded-full mb-8 backdrop-blur-sm border border-stone-200/50">
            <Users size={18} className="text-teal-700" />
            <span className="text-xs font-bold tracking-widest text-stone-600 uppercase">Group Therapy</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-stone-800 leading-[1.2] mb-8 font-medium">
            團體諮商與心理治療<br />
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
          
          {/* Image: gp0.png - 圍坐成圈，支持氛圍 */}
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-stone-200 bg-white p-4">
             <img 
               src="/group-therapy/gp0.png" 
               alt="多位成人圍坐成圈進行團體對話，展現支持與互動氛圍" 
               className="w-full h-full object-contain"
             />
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-3xl text-stone-800 mb-4">團體治療的主要特點</h2>
            <p className="text-stone-500 font-light">為什麼我們需要「在一起」接受治療？</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-5 items-start p-6 rounded-2xl bg-[#F7F5F3]/50 border border-stone-100">
                <div className="p-3 bg-teal-100/50 rounded-xl text-teal-600 shrink-0"><Shield size={24}/></div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">一個安全、真實的互動空間</h3>
                  <p className="text-stone-600 leading-relaxed font-light">在治療師的引導下，每位成員都可以表達真實感受、歷程與困難，同時從他人身上看見「我並不孤單」，彼此理解、支持與陪伴。</p>
                </div>
              </div>
              <div className="flex gap-5 items-start p-6 rounded-2xl bg-[#F7F5F3]/50 border border-stone-100">
                <div className="p-3 bg-teal-100/50 rounded-xl text-teal-600 shrink-0"><Users size={24}/></div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">彼此學習與模仿的場域</h3>
                  <p className="text-stone-600 leading-relaxed font-light">我們總是在關係中學會自己是誰。團體中，你可以看到別人怎麼說出情緒、表達需要，進而學習新的應對方式與人際溝通策略。</p>
                </div>
              </div>
              <div className="flex gap-5 items-start p-6 rounded-2xl bg-[#F7F5F3]/50 border border-stone-100">
                <div className="p-3 bg-teal-100/50 rounded-xl text-teal-600 shrink-0"><Layers size={24}/></div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">多元議題都能適用</h3>
                  <p className="text-stone-600 leading-relaxed font-light">應用非常廣泛，從焦慮、憂鬱、創傷修復，到親密關係、自我探索、情緒調節、人際互動，皆有對應的團體形式。</p>
                </div>
              </div>
            </div>

            {/* Image: gp5.png - 放鬆姿態，共享空間 */}
            <div className="space-y-8">
               <div className="w-full rounded-3xl overflow-hidden shadow-sm border border-stone-100 bg-[#F7F5F3] p-6">
                  <img 
                    src="/group-therapy/gp5.png" 
                    alt="多位成員圍坐成圈，姿態放鬆，呈現團體聚集與共享空間的情境" 
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-center text-stone-500 text-sm mt-4 font-serif italic">支持性的團體歷程，帶來安定的力量</p>
               </div>
               
               <div className="flex gap-5 items-start p-6 rounded-2xl bg-[#F7F5F3]/50 border border-stone-100">
                <div className="p-3 bg-teal-100/50 rounded-xl text-teal-600 shrink-0"><Puzzle size={24}/></div>
                <div>
                  <h3 className="text-xl font-bold text-stone-800 mb-2">可以與個別治療互補</h3>
                  <p className="text-stone-600 leading-relaxed font-light">許多參與者會在進行個別治療的同時，也參加團體治療，以不同角度深化自我理解與改變歷程。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Comparison Table --- */}
      <section className="py-24 px-6 bg-[#F7F5F3] relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-stone-800 mb-16">團體治療與支持性團體的差異</h2>
          
          <div className="overflow-hidden rounded-3xl border border-stone-200/80 shadow-sm bg-white">
            <div className="grid grid-cols-3 bg-stone-100/80 p-5 text-stone-800 font-bold text-center border-b border-stone-200">
              <div className="col-span-1 text-left pl-6">項目</div>
              <div className="col-span-1 text-teal-800">團體治療 (Group Therapy)</div>
              <div className="col-span-1 text-stone-500">支持性／自助團體 (Support Group)</div>
            </div>
            
            <div className="divide-y divide-stone-100">
              <div className="grid grid-cols-3 p-6 items-center leading-relaxed">
                <div className="font-medium text-stone-700 flex items-center gap-3 pl-2"><ChevronDown size={18} className="text-teal-400 shrink-0"/>引導者</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-3 rounded-xl mx-4">由專業心理師帶領</div>
                <div className="text-center text-stone-600 font-light">無專業引導，常由成員自組</div>
              </div>
              <div className="grid grid-cols-3 p-6 items-center leading-relaxed">
                <div className="font-medium text-stone-700 flex items-center gap-3 pl-2"><ChevronDown size={18} className="text-teal-400 shrink-0"/>結構性</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-3 rounded-xl mx-4">有心理治療架構與目標</div>
                <div className="text-center text-stone-600 font-light">以經驗分享、支持為主</div>
              </div>
               <div className="grid grid-cols-3 p-6 items-center leading-relaxed">
                <div className="font-medium text-stone-700 flex items-center gap-3 pl-2"><ChevronDown size={18} className="text-teal-400 shrink-0"/>工作重點</div>
                <div className="text-center text-stone-800 font-medium bg-teal-50/50 py-3 rounded-xl mx-4">深入探索互動、促進改變</div>
                <div className="text-center text-stone-600 font-light">提供陪伴、舒緩孤單感</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Why it works (Block background) --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#F7F5F3] -z-20"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-8">為什麼團體治療能帶來改變？</h2>
            <p className="text-lg text-stone-600 leading-loose font-light max-w-3xl mx-auto">
              團體諮商與心理治療是一種深層的轉化歷程。它的影響來自<span className="text-teal-700 font-medium">關係中的真實接觸與互動經驗</span>。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
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
                  "來自多位成員的支持與被接納的經驗，看見不同觀點",
                  "提供一個安全的實驗場，勇敢嘗試過去不敢做的事"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 p-5 bg-white/70 rounded-2xl shadow-sm border border-stone-100">
                    <div className="w-8 h-8 rounded-full bg-teal-100/50 flex items-center justify-center text-teal-700 font-serif shrink-0 text-sm">{index + 1}</div>
                    <p className="text-stone-700 leading-relaxed pt-1 font-light">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/60 backdrop-blur-md p-10 rounded-[2.5rem] border border-stone-200/60 shadow-sm">
              <h3 className="font-serif text-2xl text-stone-800 mb-8">回應現代人的核心需求</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-bold text-teal-800 mb-2">一個可以被理解的空間</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">能夠安心表達，不被評價，也不是被教訓，而是被真正聽見。</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-teal-800 mb-2">練習人際互動與表達的場域</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">許多人難以說出真正的感受或設下界線，團體是練習關係的實驗場。</p>
                </div>
                 <div>
                  <h4 className="text-lg font-bold text-teal-800 mb-2">經濟與心理上可負擔的支持</h4>
                  <p className="text-stone-600 text-sm leading-relaxed font-light">相較個別治療，團體治療成本較低，也更容易持續參與。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Special Feature: Unstructured Group --- */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
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
            
            {/* Image: gp2.png - 深度交談，肢體前傾 */}
            <div>
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-stone-100 bg-[#F7F5F3] p-4">
                <img 
                  src="/group-therapy/gp2.png" 
                  alt="四人圍坐進行深度交談，肢體微微前傾，呈現投入與回應中的互動關係" 
                  className="w-full h-full object-contain"
                />
              </div>
               <p className="text-center text-stone-400 text-sm mt-6 font-serif italic">（象徵互動自然流動，專注於當下的關係）</p>
            </div>
          </div>

          {/* Core Value & Unmasking */}
          <div className="bg-[#F7F5F3]/60 p-12 rounded-[3rem] shadow-sm border border-stone-100 text-center max-w-4xl mx-auto">
             
             {/* Image: gp3.png - 空椅人臉，隱喻性 */}
             <div className="w-64 mx-auto mb-8 aspect-square rounded-full overflow-hidden border-4 border-white shadow-sm">
                <img 
                  src="/group-therapy/gp3.png" 
                  alt="一張空椅上出現人臉意象，象徵缺席、沉默或尚未被表述的主體位置" 
                  className="w-full h-full object-cover scale-110"
                />
             </div>
            
            <h3 className="font-serif text-3xl text-stone-800 mb-8">為什麼非結構團體這麼有力量？</h3>
            <p className="text-lg text-stone-600 leading-loose mb-12 max-w-3xl mx-auto font-light">
              在日常生活中，我們經常在角色與功能中行走，習慣戴著面具互動。但在非結構團體中，這些防衛可以被放下，讓真實的情緒流動，讓內在的需求被看見。<br/><br/>
              這是一個提醒你：<strong className="text-teal-700 font-medium">「你可以不一樣，你可以真實」</strong>的場域。
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 font-serif text-lg text-teal-800/80">
              <span className="px-6 py-3 bg-white rounded-full border border-stone-200">原來我一直是這樣靠近他人</span>
              <span className="px-6 py-3 bg-white rounded-full border border-stone-200">原來我很渴望被看見</span>
              <span className="px-6 py-3 bg-teal-50/50 rounded-full border border-teal-100 font-bold text-teal-800">原來，我可以改變</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Comparison Table 2: Structured vs Unstructured --- */}
      <section className="py-24 px-6 bg-white relative z-20 border-t border-stone-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl text-center text-stone-800 mb-16">非結構 vs 結構團體的比較</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* 非結構團體 Card */}
            <div className="bg-teal-50/40 rounded-[2.5rem] p-10 border border-teal-100/60 shadow-sm overflow-hidden relative">
              <h3 className="font-serif text-2xl text-teal-800 mb-8 text-center">非結構團體</h3>
              <ul className="space-y-5 text-stone-700 leading-relaxed font-light">
                <li className="flex gap-4"><span className="font-bold text-teal-700 shrink-0">主題來源：</span>當下互動自然浮現</li>
                <li className="flex gap-4"><span className="font-bold text-teal-700 shrink-0">進行方式：</span>開放性討論，自由互動</li>
                <li className="flex gap-4"><span className="font-bold text-teal-700 shrink-0">治療目標：</span>關係與自我覺察</li>
                <li className="flex gap-4"><span className="font-bold text-teal-700 shrink-0">治療師角色：</span>促進者、動力觀察者</li>
              </ul>
            </div>

             {/* 結構團體 Card */}
            <div className="bg-[#F7F5F3] rounded-[2.5rem] p-10 border border-stone-100 shadow-sm overflow-hidden relative flex flex-col">
              <h3 className="font-serif text-2xl text-stone-800 mb-8 text-center">結構團體</h3>
              
              {/* Image: gp1.png - 圓桌，結構性 */}
              <div className="w-full aspect-video rounded-xl overflow-hidden mb-8 border border-stone-200">
                 <img 
                   src="/group-therapy/gp1.png" 
                   alt="數人圍繞圓桌進行討論，聚焦於對話姿態與專注狀態" 
                   className="w-full h-full object-cover"
                 />
              </div>

              <ul className="space-y-5 text-stone-700 leading-relaxed font-light">
                <li className="flex gap-4"><span className="font-bold text-stone-600 shrink-0">主題來源：</span>治療師事先設定</li>
                <li className="flex gap-4"><span className="font-bold text-stone-600 shrink-0">進行方式：</span>明確流程與教學練習</li>
                <li className="flex gap-4"><span className="font-bold text-stone-600 shrink-0">治療目標：</span>技能學習、心理教育</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 px-6 text-center bg-stone-800 text-stone-200 relative overflow-hidden">
        {/* Image: gp6.png - 空圓桌，準備狀態 */}
        <div className="absolute inset-0 w-full h-full opacity-10">
           <img 
             src="/group-therapy/gp6.png" 
             alt="空圓桌周圍擺放數張椅子與杯子，象徵團體會談前的準備狀態" 
             className="w-full h-full object-cover"
           />
        </div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight font-medium text-stone-100">
            準備好在關係中探索自己了嗎？
          </h2>
          <p className="text-stone-300 text-lg mb-12 leading-loose font-light">
            如需安排團體體驗、初談諮詢或獲得最新團體開課資訊，<br/>歡迎與我們聯繫。
          </p>
          <button className="inline-flex items-center gap-3 px-10 py-4 bg-teal-700 text-white text-lg font-bold rounded-full overflow-hidden shadow-lg hover:bg-teal-600">
            <span>聯絡我們，開始探索</span>
            <ArrowRight size={20}/>
          </button>
        </div>
      </section>

    </main>
  );
}