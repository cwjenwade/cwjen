'use client';

import React, { useState } from 'react';
import { 
  HeartHandshake, 
  Sparkles, 
  Waves, 
  RefreshCw, 
  Anchor, 
  Fingerprint, 
  ChevronDown, 
  ChevronUp,
  MessageCircle
} from 'lucide-react';

// --- 自定義插圖組件 (SVG Line Art) ---

// 1. 逃避型：後退的線條 (The Withdrawal)
const IllustrationAvoidant = () => (
  <svg viewBox="0 0 200 150" className="w-full max-w-[240px] opacity-90 mx-auto" aria-hidden="true">
    <path d="M160,75 L40,75" stroke="#94a3b8" strokeWidth="2" strokeDasharray="6 4" />
    <path d="M40,75 L60,55" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <path d="M40,75 L60,95" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
    <circle cx="170" cy="75" r="15" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
    <path d="M120,40 Q100,20 80,40 T40,40" stroke="#cbd5e1" strokeWidth="1.5" fill="none" opacity="0.6" />
  </svg>
);

// 2. 焦慮型：纏繞向前的線條 (The Pursuit)
const IllustrationAnxious = () => (
  <svg viewBox="0 0 200 150" className="w-full max-w-[240px] opacity-90 mx-auto" aria-hidden="true">
    <path d="M30,75 C60,75 60,110 90,75 C120,40 120,110 150,75 L170,75" stroke="#fda4af" strokeWidth="2.5" fill="none" />
    <path d="M170,75 L150,60" stroke="#fda4af" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M170,75 L150,90" stroke="#fda4af" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="20" cy="75" r="8" fill="#ffe4e6" stroke="#fda4af" strokeWidth="2" />
    <path d="M100,75 Q120,20 140,75" stroke="#fecdd3" strokeWidth="1" fill="none" opacity="0.5" className="animate-pulse" />
  </svg>
);

// 3. 惡性循環：糾結的無窮迴圈 (The Cycle)
const IllustrationCycle = () => (
  <svg viewBox="0 0 300 150" className="w-full max-w-[320px] opacity-80" aria-hidden="true">
    <path 
      d="M80,75 C80,30 140,30 140,75 C140,120 200,120 200,75 C200,30 140,30 140,75 C140,120 80,120 80,75 Z" 
      stroke="#78716c" 
      strokeWidth="2" 
      fill="none" 
      className="animate-[dash_5s_linear_infinite]"
      strokeDasharray="10 5"
    />
    <circle cx="80" cy="75" r="4" fill="#ef4444" opacity="0.6" />
    <circle cx="200" cy="75" r="4" fill="#0d9488" opacity="0.6" />
  </svg>
);

// 4. 冰山下的孤獨 (Vulnerability)
const IllustrationIceberg = () => (
  <svg viewBox="0 0 200 120" className="w-full max-w-[200px] opacity-90 mx-auto" aria-hidden="true">
    <path d="M20,80 L60,40 L100,70 L140,30 L180,80" stroke="#57534e" strokeWidth="2" fill="none" />
    <path d="M20,90 Q100,110 180,90" stroke="#a8a29e" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
    <circle cx="100" cy="100" r="3" fill="#0d9488" />
  </svg>
);

// 5. 修復與連結 (Connection)
const IllustrationLove = () => (
  <svg viewBox="0 0 200 100" className="w-full max-w-[200px] opacity-90 mx-auto" aria-hidden="true">
    <path d="M40,50 C80,20 80,80 120,50" stroke="#0d9488" strokeWidth="2" fill="none" />
    <path d="M80,50 C120,80 120,20 160,50" stroke="#fb7185" strokeWidth="2" fill="none" />
    <circle cx="100" cy="50" r="40" stroke="#d6d3d1" strokeWidth="1" fill="none" opacity="0.3" />
  </svg>
);


export default function CoupleTherapyPage() {
  // FAQ Accordion State
  const [openQA, setOpenQA] = useState<number | null>(null);
  const toggleQA = (index: number) => {
    setOpenQA(openQA === index ? null : index);
  };

  const QA_LIST = [
    {
      q: "在伴侶治療中，治療師會如何工作？",
      a: "我們每次卡住的點都一樣，治療師還會要我們再談一次嗎？治療師不會只是重複討論事件本身，而是協助你們在治療現場中覺察：當同樣的互動再度發生時，彼此是如何被拉進那個熟悉的循環。工作的重點放在當下，而非一再回顧過去。"
    },
    {
      q: "如果其中一方其實已經很累，甚至不確定還想不想繼續，治療還能進行嗎？",
      a: "治療師會將「疲累」視為一項重要的關係訊號，而不是治療無效的指標。治療並不要求雙方一開始就做出關係承諾，而是先去理解彼此目前困在什麼樣的互動模式中。"
    },
    {
      q: "治療時，會不會被要求說出自己其實還沒準備好的情緒或想法？",
      a: "治療師會持續調整治療的節奏，確保情緒經驗能在可承受的範圍內被觸及。情感的表達深度與速度，會根據每個人的狀態而調整，而不是由治療方法預設。"
    },
    {
      q: "如果我們真正卡住的是現實問題或價值觀差異，治療師會怎麼處理？",
      a: "治療師會聚焦於這些議題如何影響彼此的情感連結，而不是急於解決問題本身。治療的目的是讓討論能在更穩定、安全的關係狀態中進行。"
    },
    {
      q: "會不會變成其中一方一直被檢討或被要求改變？",
      a: "治療師的工作單位是關係中的「互動模式」，而非個別的個性或立場。如果治療過程偏向某一方，治療師會主動將視角拉回到雙方的互動結構。"
    },
    {
      q: "如果一方比較會表達，另一方比較退縮，治療師會怎麼處理？",
      a: "治療師會同時照顧不同位置的需求。表達較多的一方會被協助放慢、調整步調；而退縮的一方則會在不被逼迫的情況下，逐漸建立起自己的表達空間。"
    },
    {
      q: "治療會不會讓衝突一開始反而更嚴重？",
      a: "治療師會以穩定互動為優先目標。如果衝突強度升高，會被視為需要立即調整介入方式的訊號，而非治療必經的過程。"
    },
    {
      q: "如果我們已經嘗試過很多方法，治療師還能做什麼不一樣的事？",
      a: "治療師不會重複既有的說服、協調或解決問題的策略，而是協助你們看見：這些努力是如何被既有的互動模式所抵銷。治療的切入點是互動的組織方式。"
    },
    {
      q: "治療的目標一定是讓關係變得更親密嗎？",
      a: "治療師關注的是關係在情緒層面是否變得更安全、更清晰。親密感會隨著互動的穩定自然產生，而不是被設定為必須達成的目標。"
    },
    {
      q: "如果最後我們發現無法繼續走下去，這段治療還有意義嗎？",
      a: "治療師的工作是陪伴伴侶在更少防衛、更少混亂的狀態下，理解彼此的立場與限制。這樣的理解，本身就是一種關係工作的完成。"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F7F5F3] font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* --- Hero Section --- */}
      <section className="pt-36 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-stone-200/40 rounded-full mb-8 backdrop-blur-sm border border-stone-200/50">
            <HeartHandshake size={16} className="text-teal-700" />
            <span className="text-xs font-bold tracking-widest text-stone-600 uppercase">Couple Therapy</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl text-stone-800 leading-[1.3] mb-8 font-medium">
            依附關係 × 情緒互動<br />
            <span className="text-teal-800/80 text-3xl md:text-5xl mt-2 block">伴侶治療的第一步</span>
          </h1>

          <p className="text-stone-600 text-lg md:text-xl font-light leading-loose max-w-2xl mx-auto mb-12">
            我們每個人處理親密關係的方式，其實都跟<strong>「依附」</strong>有關。<br className="hidden md:block"/>
            這不是某種標籤，而是我們在關係裡怎麼維持安全感、<br className="hidden md:block"/>
            怎麼面對距離與衝突的一套自動反應。
          </p>
        </div>
      </section>

      {/* --- 依附類型與互動 (Dual Cards) --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-stone-800 mb-6">依附位置不是好或壞，<br/>而是我們保護自己的方式</h2>
            <p className="text-stone-600 font-light leading-relaxed">
              只是在親密關係裡，兩個人帶著不同的方式靠近彼此，就可能出現互相誤解的模式。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* 1. 逃避型 */}
            <div className="bg-slate-50/60 p-10 rounded-3xl border border-slate-200/50 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 group">
              <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm group-hover:scale-105 transition-transform duration-500">
                <IllustrationAvoidant />
              </div>
              <h3 className="font-serif text-2xl text-slate-700 mb-2">逃避型</h3>
              <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">The Withdrawer</p>
              
              <div className="space-y-4 text-slate-600 leading-relaxed font-light text-justify">
                <p>
                  <strong className="text-slate-800 font-medium block mb-2">「我不是不在乎，只是不知道怎麼靠近」</strong>
                  有些人一遇到衝突，就會想暫停對話、拉開距離、先處理自己的情緒。他們可能看起來很冷靜，甚至顯得有點冷淡，好像不願意面對。
                </p>
                <p>
                  但其實，這是一種保護自己不被情緒淹沒的方式。透過保持距離，他們才能讓自己冷靜下來，回到可以運作的狀態。
                </p>
                <p className="pt-2 border-t border-slate-200 text-slate-700 font-medium italic">
                  不是不在乎，而是他們習慣了靠「退」來維持穩定。
                </p>
              </div>
            </div>

            {/* 2. 焦慮型 */}
            <div className="bg-rose-50/60 p-10 rounded-3xl border border-rose-100/50 hover:shadow-xl hover:shadow-rose-100/40 transition-all duration-500 group">
              <div className="mb-8 p-6 bg-white rounded-2xl shadow-sm group-hover:scale-105 transition-transform duration-500">
                <IllustrationAnxious />
              </div>
              <h3 className="font-serif text-2xl text-rose-800 mb-2">焦慮型</h3>
              <p className="text-xs font-bold tracking-widest text-rose-400 uppercase mb-6">The Pursuer</p>
              
              <div className="space-y-4 text-stone-600 leading-relaxed font-light text-justify">
                <p>
                  <strong className="text-rose-900 font-medium block mb-2">「我不是要控制你，我只是怕你不見」</strong>
                  也有些人對關係裡的冷淡特別敏感。只要對方沉默、語氣變了、慢一點回訊息，他們就會開始焦慮，忍不住想確認：「你是不是不愛我了？」「你是不是又在想逃？」
                </p>
                <p>
                  他們會提高互動強度，提出問題、要求對話、甚至表現出強烈的情緒。
                </p>
                <p className="pt-2 border-t border-rose-200 text-rose-800 font-medium italic">
                  不是太黏，也不是情緒太多，而是他們靠「靠近」來確認關係還在。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 惡性循環 (The Cycle) --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-stone-100 rounded-full blur-3xl -z-10"></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-stone-50 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 md:order-1">
              <div className="inline-block px-3 py-1 bg-red-50 text-red-800 text-xs tracking-widest font-bold rounded-md mb-4">THE NEGATIVE CYCLE</div>
              <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6 leading-tight">
                我們不是彼此的敵人<br/>是被互動拉走了
              </h2>
              <div className="prose prose-stone text-stone-600 leading-loose">
                <p>
                  當這兩種依附反應相遇，會發生什麼事？<br/>
                  在伴侶關係中，逃避型的人越退，焦慮型的人就越追。<br/>
                  一個需要空間，一個需要連結。
                </p>
                <blockquote className="border-l-4 border-stone-300 pl-4 italic text-stone-800 my-6 bg-stone-50/50 py-2 pr-2 rounded-r-lg">
                  一個覺得「你給我一點安靜好嗎」<br/>
                  一個覺得「你怎麼又不見了」
                </blockquote>
                <p>
                  這種互動不是誰對誰錯，而是兩個人都在用自己的方式努力保護關係。但當兩種策略碰在一起時，很容易讓彼此都感覺更孤單。當這樣的互動模式一再重複，我們就會進入一個「惡性循環」。
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-4 marker:text-teal-600">
                  <li>一方越來越激動，另一方越來越抽離</li>
                  <li>情緒越來越高，理解越來越少</li>
                  <li>爭吵、指責、冷戰、沉默……變成熟悉的劇本</li>
                </ul>
              </div>
            </div>

            <div className="order-1 md:order-2 flex flex-col items-center">
              <div className="relative p-10">
                <div className="absolute inset-0 bg-stone-100/50 rounded-full blur-xl"></div>
                <IllustrationCycle />
              </div>
              <p className="mt-8 text-center text-sm font-serif text-stone-500 italic max-w-xs">
                「看見那支令人痛苦的舞：焦慮的訊號 vs 迴避的訊號」
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 冰山下的情緒 (Anger is Bodyguard) --- */}
      <section className="py-24 px-6 bg-stone-800 text-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <IllustrationIceberg />
          <h2 className="font-serif text-3xl md:text-5xl mt-10 mb-6 text-stone-100">憤怒是悲傷的保鑣</h2>
          <div className="w-16 h-[1px] bg-teal-500/50 mx-auto mb-10"></div>
          
          <div className="text-lg font-light leading-loose space-y-6 text-stone-300 max-w-2xl mx-auto">
            <p>
              表面的憤怒，掩蓋了底層的孤獨。<br/>
              當我們在關係中感到不安全時，直接展現脆弱是危險的。
            </p>
            <p>
              因此，我們往往穿上盔甲。那些尖銳的話語、冷漠的背影，其實都是為了保護心裡那個受傷的小孩。
            </p>
            <div className="bg-stone-700/50 p-6 rounded-xl border border-stone-600/50 mt-8">
              <p className="text-teal-100 font-medium mb-3 flex items-center justify-center gap-2">
                <Fingerprint size={20} />
                核心任務
              </p>
              <p className="text-sm md:text-base text-stone-400">
                從「互貼標籤」（你就是自私、你就是情緒化）<br className="hidden md:block"/>
                轉向「情緒的解碼」（原來當我轉身離開時，你感覺到的是被拋棄）。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- EFT 治療的三個階段 --- */}
      <section className="py-24 px-6 bg-[#F7F5F3]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4">依附關係的修復地圖</h2>
            <p className="text-stone-500 font-light">EFT 治療歷程的三個階段</p>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
            
            {/* Stage 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-300 bg-white text-stone-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-serif font-bold">1</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-stone-100 rounded text-stone-600"><RefreshCw size={16}/></div>
                  <h3 className="font-bold text-stone-800">停下傷害 (De-escalation)</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  先讓傷害停止：終止惡性循環。治療初期，協助伴侶一起看清楚：我們是怎麼被循環帶著走的？我們在哪個點開始失去選擇？治療不是判案糾錯，而是讓我們三人能看見模式。當互動的張力下降了，關係才有可能穩定下來。
                </p>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-teal-200 bg-teal-50 text-teal-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-serif font-bold">2</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-teal-100 shadow-sm hover:shadow-md transition-all duration-300 ring-1 ring-teal-50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-teal-100 rounded text-teal-700"><Anchor size={16}/></div>
                  <h3 className="font-bold text-teal-900">重建連結 (Restructuring)</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  靠近彼此的內在：修復依附連結。當我們能暫時離開循環，治療師會陪伴彼此慢慢觸碰那些不容易被說出來的情緒：「其實我很怕你不要我了」、「我不是不愛你，我是不知道怎麼靠近你」。當這些真實的需要能夠被接住，一種新的情感經驗就此產生。
                </p>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-stone-300 bg-white text-stone-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <span className="font-serif font-bold">3</span>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-stone-100 rounded text-stone-600"><Sparkles size={16}/></div>
                  <h3 className="font-bold text-stone-800">穩固與整合 (Consolidation)</h3>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  當情感連結穩固後，我們才回頭處理生活中的實際衝突。這時你們不再是互鬥的敵人，而是能夠協商、互相支援的隊友。
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 結語 (Conclusion) --- */}
      <section className="py-24 px-6 text-center bg-teal-900/5">
        <div className="max-w-3xl mx-auto">
          <IllustrationLove />
          <h2 className="font-serif text-2xl md:text-3xl text-stone-800 mt-8 mb-6 leading-relaxed">
            親密關係裡的衝突，不是不愛了，<br/>
            而是我們在用不一樣的方式喊「我需要你」。
          </h2>
          <p className="text-stone-600 text-lg font-light leading-loose mb-8">
            當我們能夠看見彼此的需要，能夠用有建設性的方式表達情感與親密，<br/>
            靠近不再那麼危險。連結，也會慢慢修復。
          </p>
          <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm text-teal-700">
             <HeartHandshake size={24} />
          </div>
        </div>
      </section>

      {/* --- Q&A Section --- */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl text-stone-800 mb-4">常見問答</h2>
          <p className="text-stone-500 text-sm">關於伴侶治療的十個提問</p>
        </div>

        <div className="space-y-4">
          {QA_LIST.map((qa, index) => {
            const isOpen = openQA === index;
            return (
              <div 
                key={index} 
                className={`
                  border rounded-xl transition-all duration-300 overflow-hidden
                  ${isOpen ? 'bg-white border-teal-200 shadow-md' : 'bg-white/60 border-stone-200 hover:bg-white'}
                `}
              >
                <button 
                  onClick={() => toggleQA(index)}
                  className="w-full flex items-start justify-between p-5 text-left"
                >
                  <span className={`font-medium pr-4 ${isOpen ? 'text-teal-900' : 'text-stone-700'}`}>
                    <span className="inline-block w-6 text-teal-600/50 font-serif mr-2">Q.</span>
                    {qa.q}
                  </span>
                  <span className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-600' : 'text-stone-400'}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                
                <div 
                  className={`
                    transition-all duration-300 ease-in-out
                    ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="p-5 pt-0 pl-12 pr-8 text-stone-600 leading-relaxed font-light border-t border-dashed border-stone-100 mt-2">
                     {qa.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Footer Area --- */}
      <footer className="bg-stone-100 py-12 text-center border-t border-stone-200">
        <p className="font-serif text-stone-500 italic">"Love is a constant process of tuning in, connecting, missing and misreading cues, disconnecting, repairing, and finding deeper connection."</p>
        <p className="text-xs text-stone-400 mt-4 uppercase tracking-widest">— Dr. Sue Johnson</p>
      </footer>

    </main>
  );
}