export default function CoupletherapyPage() {
  return (
    <div className="bg-morandi-base text-morandi-dark font-sans leading-relaxed selection:bg-morandi-accent selection:text-white">
      <header className="fixed w-full bg-morandi-base/95 backdrop-blur-sm z-50 border-b border-morandi-light/60">
        <div className="max-w-4xl mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="font-serif text-xl tracking-widest text-morandi-dark font-bold">個人諮商與心理治療品牌</h1>
        </div>
      </header>

      <main className="pt-36 pb-20 px-6">
        
        <section className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-16">
            <span className="block text-xs font-bold tracking-[0.2em] text-morandi-accent uppercase mb-4">Emotionally Focused Therapy</span>
            <h2 className="font-serif text-4xl md:text-5xl text-morandi-dark leading-tight mb-8 font-medium">
              在愛裡，<br />我們練習重新牽起手
            </h2>
            <p className="text-morandi-muted max-w-2xl mx-auto text-lg font-light leading-loose">
              每一次的爭吵，其實都在問同一個問題：<br />
              「你還在乎我嗎？我對你來說重要嗎？」
            </p>
          </div>

          <div className="bg-white/60 p-10 md:p-14 rounded-lg border border-morandi-warm/30 shadow-soft">
            <h3 className="font-serif text-2xl text-morandi-dark mb-6 text-center">關於情緒取向伴侶治療 (EFT)</h3>
            <div className="prose prose-slate max-w-none text-morandi-muted font-light space-y-6 text-justify-inter-word">
              <p>
                這是一套由 Dr. Sue Johnson 發展出來，溫柔而有力量的治療方式。我們相信，成人的親密關係就像孩子需要父母一樣，我們終其一生都在尋找一份「安全感」。
              </p>
              <p>
                當我們覺得伴侶不理解自己、或是感覺被冷落時，那種恐慌會讓我們本能地想要保護自己——有些人會選擇<strong>「大聲抗議」</strong>（像是批評、指責），有些人則選擇<strong>「躲起來」</strong>（像是沈默、離開）。這些反應不是因為不愛了，反而是因為太渴望被接納、被重視。
              </p>
              <p>
                在 EFT 裡，我們不看表面上的吵架內容（誰沒洗碗、錢怎麼花），而是去看見這背後，兩個人心裡受傷的地方。
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative pl-8 border-l-[1px] border-morandi-accent">
                <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-morandi-accent rounded-full"></span>
                <h4 className="font-serif text-2xl text-morandi-dark mb-4">看見「跳不出的舞步」</h4>
                <p className="text-morandi-muted font-light mb-6">
                  很多伴侶常覺得無力：「為什麼我們老是為了小事吵架？而且每次吵的模式都一樣？」
                </p>
                <p className="text-morandi-muted font-light">
                  這就是我們說的<strong>「惡性循環」</strong>。也許是你越急著想溝通，他越覺得壓力大而想逃；他越逃，你就越生氣。EFT 會幫你們喊暫停，看清楚這場混亂的舞步是怎麼踩踏到彼此的痛點，而不是去怪罪任何一方。
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-morandi-light/30 flex items-center justify-center relative">
                <div className="absolute w-48 h-48 rounded-full border border-morandi-accent/40 animate-[spin_10s_linear_infinite]"></div>
                <div className="text-center">
                  <span className="block text-morandi-dark font-serif text-lg mb-1">追</span>
                  <span className="block text-morandi-accent text-xs tracking-wider">vs</span>
                  <span className="block text-morandi-dark font-serif text-lg mt-1">逃</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-24 bg-morandi-base">
          <h3 className="font-serif text-3xl text-center text-morandi-dark mb-16">我們將一起經歷的三個階段</h3>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row group">
              <div className="w-full md:w-32 flex-shrink-0 flex md:flex-col items-center justify-start md:justify-start mb-4 md:mb-0">
                <span className="text-4xl text-morandi-accent/40 font-serif group-hover:text-morandi-accent/80 transition-colors">01.</span>
                <span className="ml-4 md:ml-0 md:mt-2 text-xs tracking-widest uppercase text-morandi-muted">De-escalation</span>
              </div>
              <div className="flex-grow pb-8 border-b border-morandi-light/60">
                <h4 className="text-xl font-serif text-morandi-dark mb-3">停下傷害，看懂彼此</h4>
                <p className="text-morandi-muted font-light">
                  我們會先建立一個安全的空間，讓雙方都能冷靜下來。不再急著爭論誰對誰錯，而是練習辨認那些憤怒背後的孤單，或是冷漠背後的無助。我們要把「互相攻擊」變成「一起對抗惡性循環」。
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row group">
              <div className="w-full md:w-32 flex-shrink-0 flex md:flex-col items-center justify-start md:justify-start mb-4 md:mb-0">
                <span className="text-4xl text-morandi-accent/40 font-serif group-hover:text-morandi-accent/80 transition-colors">02.</span>
                <span className="ml-4 md:ml-0 md:mt-2 text-xs tracking-widest uppercase text-morandi-muted">Restructuring</span>
              </div>
              <div className="flex-grow pb-8 border-b border-morandi-light/60">
                <h4 className="text-xl font-serif text-morandi-dark mb-3">說出脆弱，重新連結</h4>
                <p className="text-morandi-muted font-light">
                  這是最動人的時刻。我們會引導你們說出心裡深層的渴望與害怕，讓對方聽見你真正的需要。當脆弱被溫柔地接住，舊傷口就有機會癒合，一種新的、充滿安全感的互動經驗就此產生。
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row group">
              <div className="w-full md:w-32 flex-shrink-0 flex md:flex-col items-center justify-start md:justify-start mb-4 md:mb-0">
                <span className="text-4xl text-morandi-accent/40 font-serif group-hover:text-morandi-accent/80 transition-colors">03.</span>
                <span className="ml-4 md:ml-0 md:mt-2 text-xs tracking-widest uppercase text-morandi-muted">Consolidation</span>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-serif text-morandi-dark mb-3">穩固關係，面對未來</h4>
                <p className="text-morandi-muted font-light">
                  當情感連結穩固了，我們再來談實際的問題（如生活習慣、溝通策略）。這時候你們已經不再是敵人，而是隊友。我們會鞏固這些新的互動方式，讓這份親密感能長久維持。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto bg-morandi-light/30 p-10 rounded-xl text-center mb-20">
          <div className="mb-8">
            <p className="text-morandi-dark font-serif text-xl italic mb-4">
              「我們修復的不只是衝突，而是愛的根基。」
            </p>
            <div className="w-16 h-[1px] bg-morandi-accent mx-auto"></div>
          </div>
          
          <div className="text-morandi-muted font-light text-sm leading-loose space-y-4">
            <p>
              EFT 是目前國際公認極具成效的伴侶治療模式，研究顯示大部分的伴侶都能因此改善關係，而且效果持久。
            </p>
            <p>
              在這個過程中，治療師不會擔任裁判，我們不會評斷誰對誰錯。我們是陪伴者，也是翻譯者，協助你們穿越情緒的迷霧，聽懂彼此心裡的呼喚，找到回家的路。
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-1 bg-white rounded-full text-xs text-morandi-muted border border-morandi-accent/20">感覺越來越疏遠</span>
            <span className="px-4 py-1 bg-white rounded-full text-xs text-morandi-muted border border-morandi-accent/20">長期爭吵不休</span>
            <span className="px-4 py-1 bg-white rounded-full text-xs text-morandi-muted border border-morandi-accent/20">信任關係破裂</span>
            <span className="px-4 py-1 bg-white rounded-full text-xs text-morandi-muted border border-morandi-accent/20">想找回親密感</span>
          </div>
        </section>

      </main>

      <footer className="bg-morandi-dark text-morandi-accent/70 py-12 text-center text-sm">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-serif tracking-widest mb-2 font-medium">個人諮商與心理治療品牌</p>
          <p className="opacity-60 text-xs font-light">Accompanying you through the journey of connection.</p>
        </div>
      </footer>
    </div>
  );
}