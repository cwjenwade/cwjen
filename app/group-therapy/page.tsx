export default function GroupTherapy() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="fixed w-full bg-stone-100/95 backdrop-blur-sm z-50 border-b border-stone-200/60 transition-all duration-300">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="font-serif text-xl tracking-widest text-stone-800 font-bold">個人諮商與心理治療品牌</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-sm font-medium text-stone-600 tracking-wide">
              <li><a href="#unstructured" className="hover:text-stone-800 transition-colors duration-300">非結構式團體</a></li>
              <li><a href="#structured" className="hover:text-stone-800 transition-colors duration-300">結構式團體</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-36 pb-20 px-6">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="block text-xs font-bold tracking-[0.2em] text-stone-500 uppercase mb-4">Our Approach</span>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-800 leading-tight mb-8 font-medium">
            溫暖的專業陪伴，<br />探索心靈的兩種路徑
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg font-light">
            結合存在主義的溫柔視野，為您提供「流動的探索」與「穩定的框架」兩種成長方式。
          </p>
        </div>

        {/* Section 1: Unstructured Group */}
        <section id="unstructured" className="max-w-4xl mx-auto mb-32 scroll-mt-36">
          <div className="border-l-[6px] border-stone-400/70 pl-6 mb-12">
            <h3 className="font-serif text-3xl text-stone-800 mb-2 font-medium">非結構式團體：在互動中遇見真實</h3>
            <p className="text-stone-600/80 font-medium tracking-wider">Flow & Connection</p>
          </div>

          <div className="max-w-none text-stone-600 space-y-8 font-light">
            <div>
              <p className="mb-6 text-lg">
                這是一種很特別的團體方式，深受存在心理治療大師 Irvin D. Yalom 的影響。我們相信，最有力量的改變，往往不是來自治療師教你「怎麼做」，而是來自團體裡成員與成員之間，最真實的互動。
              </p>
            </div>

            <div className="bg-stone-100/40 p-10 md:p-14 rounded-sm my-12 shadow-sm relative overflow-hidden">
              <span className="absolute top-4 left-6 text-6xl text-stone-300/40 font-serif">"</span>
              <blockquote className="font-serif text-xl md:text-2xl text-stone-800 text-center italic leading-loose relative z-10">
                「團體，就是每位成員人際世界的小型社會縮影。」
              </blockquote>
              <p className="text-center text-sm text-stone-500 mt-6 font-sans tracking-wider relative z-10">— Irvin D. Yalom</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <h4 className="font-serif text-xl text-stone-800 mb-5 pb-3 border-b border-stone-200">核心理念：此時此刻</h4>
                <p className="mb-6">
                  這種團體沒有預設好的主題或課程。我們把重點放在「此時此刻」——也就是現在大家聚在一起發生的事情。
                </p>
                <p className="mb-4">
                  在這樣自然的互動裡，我們更容易看見自己平常怎麼待人接物、遇到什麼困難，或是習慣怎麼保護自己。看見了，改變就有可能發生。
                </p>

                <h4 className="font-serif text-xl text-stone-800 mb-5 pb-3 border-b border-stone-200 mt-10">這能帶來什麼幫助？</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-stone-400/60 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-stone-800 font-medium">從人際互動中學習：</strong>透過自己在團體裡的分享、聽聽別人的回饋，會更深刻懂得自己在關係裡怎麼了。這種親身體驗，比光用聽的更有力量。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-stone-400/60 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-stone-800 font-medium">練習承接情緒：</strong>在互動當下，學習辨認、表達跟調節自己的感受（像是羞愧、生氣、或害怕被丟下）。好好處理這些情緒，是帶來深層改變的入口。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-stone-400/60 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span><strong className="text-stone-800 font-medium">放下武裝，真誠相待：</strong>因為團體夠安全、也持續一段時間，我們會比較敢慢慢放下平常的社交面具，用更真實的樣子跟別人接觸。</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-xl text-stone-800 mb-5 pb-3 border-b border-stone-200">團體裡的治療力量</h4>
                  <p className="mb-6">
                    我們常說團體裡有一種「凝聚力」，那就像是一張安全網。一份好的關係能帶來：
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <span className="text-stone-400 mr-3 mt-1">❖</span>
                      <span><strong className="text-stone-800 font-medium">安全感與歸屬感：</strong>讓你覺得被接納，敢稍微冒險一點，說出藏在心裡的話。</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-stone-400 mr-3 mt-1">❖</span>
                      <span><strong className="text-stone-800 font-medium">修復性的經驗：</strong>透過團體裡健康的互動，慢慢修補過去在關係裡受過的傷。</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-stone-100/50 p-8 rounded-lg border border-stone-300/20">
                  <h5 className="font-bold text-stone-800 mb-3 text-base tracking-wide flex items-center">
                    <span className="w-8 h-[1px] bg-stone-400 mr-3 inline-block"></span>
                    關於資源與效益
                  </h5>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    從資源的角度來看，團體治療能同時陪伴好幾位夥伴，讓更多人有機會獲得專業協助。而且，成員之間的互助與支持，也會讓大家更主動投入改變，減少對治療師的單向依賴，讓成長更有動力。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-4xl mx-auto my-24 flex items-center justify-center">
          <div className="w-24 h-[1px] bg-stone-300/40"></div>
          <div className="mx-4 text-stone-400/60 text-xl">✦</div>
          <div className="w-24 h-[1px] bg-stone-300/40"></div>
        </div>

        {/* Section 2: Structured Group */}
        <section id="structured" className="max-w-4xl mx-auto scroll-mt-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="border-l-[6px] border-stone-400/70 pl-6">
              <h3 className="font-serif text-3xl text-stone-800 mb-2 font-medium">結構式團體：有明確目標的旅程</h3>
              <p className="text-stone-600/80 font-medium tracking-wider">Structure & Focus</p>
            </div>
            <div className="mt-6 md:mt-0 text-stone-600 text-sm bg-stone-200/60 py-2 px-4 rounded-full inline-block self-start md:self-auto">
              <span className="text-stone-500 mr-2">●</span>適用方向：情緒調節、壓力管理、哀傷撫慰、自我照顧
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 border border-stone-300/30 p-8 rounded-md shadow-sm hover:shadow-md hover:border-stone-400/60 transition-all duration-500 group">
              <div className="text-stone-400/50 mb-4 text-3xl group-hover:text-stone-500/80 transition-colors">Ⅰ.</div>
              <h4 className="font-serif text-lg text-stone-800 mb-4 font-medium">目標清晰</h4>
              <p className="text-stone-600 text-[15px] leading-relaxed font-light">
                這種團體有清楚的方向。我們為了特定的需要聚在一起，比如學習調節情緒的技巧，或是增加對某個心理議題的認識。
              </p>
            </div>
            <div className="bg-white/80 border border-stone-300/30 p-8 rounded-md shadow-sm hover:shadow-md hover:border-stone-400/60 transition-all duration-500 group">
              <div className="text-stone-400/50 mb-4 text-3xl group-hover:text-stone-500/80 transition-colors">Ⅱ.</div>
              <h4 className="font-serif text-lg text-stone-800 mb-4 font-medium">流程穩定</h4>
              <p className="text-stone-600 text-[15px] leading-relaxed font-light">
                由帶領者規劃好一系列的單元。可能會透過角色扮演、書寫練習或小組討論來進行，也會有簡單的紀錄來看看大家的進步。
              </p>
            </div>
            <div className="bg-white/80 border border-stone-300/30 p-8 rounded-md shadow-sm hover:shadow-md hover:border-stone-400/60 transition-all duration-500 group">
              <div className="text-stone-400/50 mb-4 text-3xl group-hover:text-stone-500/80 transition-colors">Ⅲ.</div>
              <h4 className="font-serif text-lg text-stone-800 mb-4 font-medium">安心的框架</h4>
              <p className="text-stone-600 text-[15px] leading-relaxed font-light">
                明確的結構能降低剛開始的焦慮感。對於第一次參加團體，或比較擔心不知道要說什麼的人來說，這提供了很重要的安全感。
              </p>
            </div>
          </div>

          <p className="text-stone-600 text-center mt-12 font-light italic">
            無論是哪一種形式，我們都希望能提供一個溫暖、穩定的空間，陪伴您走一段認識自己的路。
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-800 text-stone-400/70 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <span className="inline-block w-12 h-[1px] bg-stone-500/30 mb-4"></span>
          </div>
          <p className="font-serif tracking-widest mb-3 text-stone-300 font-medium">個人諮商與心理治療品牌</p>
          <p className="opacity-80 text-xs font-light tracking-wider">Professional Counseling & Psychotherapy Practice</p>
          <p className="text-xs mt-8 opacity-50">&copy; 2024 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
