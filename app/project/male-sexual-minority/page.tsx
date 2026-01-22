import React from 'react';

// 色彩定義 (直接寫入 Class 以確保顯示):
// 背景米白: #FAF9F6
// 深暖棕灰: #5E5448
// 柔和中灰: #8C857B
// 藕灰點綴: #B5A89F
// 淺暖灰底: #EBE8E4
// 暖卡其色: #D6CFC7

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#5E5448] font-sans leading-relaxed selection:bg-[#B5A89F] selection:text-white">
      
      {/* ------------------- Hero Section ------------------- */}
      <header className="relative pt-32 pb-24 px-6 border-b border-[#EBE8E4] overflow-hidden">
        {/* 背景光暈裝飾 */}
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#D6CFC7]/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-72 h-72 bg-[#B5A89F]/10 rounded-full blur-2xl -z-10"></div>

        <div className="max-w-4xl mx-auto text-center">
          <span className="block text-sm font-bold tracking-[0.2em] text-[#8C857B] uppercase mb-6">
            Men's Encounter Group Project
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-[#5E5448] leading-tight mb-8 font-medium">
            在陽剛的盔甲之下，<br />
            找回真實的連結
          </h1>
          <p className="text-[#8C857B] max-w-2xl mx-auto text-xl font-light leading-normal">
            這是一個專為性少數男性設計的會心團體計畫。<br />
            我們探索的不只是性傾向，更是關於「生而為人」的完整樣貌。
          </p>
        </div>
      </header>

      <main>
        
        {/* ------------------- 核心議題：男性氣概與防衛 ------------------- */}
        <section className="py-24 px-6 bg-[#FAF9F6]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-[#5E5448] mb-6 font-medium">
                我們共同面對的隱形重擔
              </h2>
              <div className="w-16 h-[1px] bg-[#B5A89F] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* 議題一：陽剛的束縛 */}
              <div className="bg-[#FFFFFF] border border-[#EBE8E4] p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(94,84,72,0.05)]">
                <h3 className="font-serif text-xl text-[#5E5448] mb-4 flex items-center">
                  <span className="w-2 h-2 bg-[#B5A89F] rounded-full mr-3"></span>
                  男性的社會腳本：只能堅強
                </h3>
                <p className="text-[#8C857B] font-light text-justify leading-loose">
                  社會文化教導男性必須獨立、自主、追求成就，並且習慣「否定脆弱」。對於性少數男性而言，這是一層雙重的枷鎖。我們一方面要應對主流文化的期待—像個男人（Manly），不能流淚、不能依賴；另一方面，我們可能因為陰柔氣質或性傾向，被視為不夠格的男性。為了生存，許多人學會了切斷感受，將真實的自己隱藏在冷酷或完美的武裝之後。
                </p>
              </div>

              {/* 議題二：羞恥與偽裝 */}
              <div className="bg-[#FFFFFF] border border-[#EBE8E4] p-8 rounded-xl shadow-[0_4px_20px_-4px_rgba(94,84,72,0.05)]">
                <h3 className="font-serif text-xl text-[#5E5448] mb-4 flex items-center">
                  <span className="w-2 h-2 bg-[#B5A89F] rounded-full mr-3"></span>
                  深層的羞恥感 (Gay Shame)
                </h3>
                <p className="text-[#8C857B] font-light text-justify leading-loose">
                  不同於單純的愧疚，羞恥感是一種「覺得自己不對、不夠好」的深層恐懼。成長過程中的污名（Stigma）內化後，讓我們隨時都在監控自己：有沒有露餡？會不會被拒絕？這種長期的警覺狀態，讓我們即使身處人群，仍感到與世隔絕。我們透過過度努力、或在族群內互相評價（例如排斥年長者、陰柔者）來防衛這份羞恥，卻離真實的親密越來越遠。
                </p>
              </div>
            </div>

            {/* 防衛機制圖解概念 */}
            <div className="mt-12 bg-[#EBE8E4]/50 p-10 rounded-2xl">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl mb-2 text-[#B5A89F]">🛡️</div>
                  <h4 className="font-serif text-lg text-[#5E5448] mb-2">分裂 (Splitting)</h4>
                  <p className="text-sm text-[#8C857B]">
                    為了保護自己不受傷，我們潛意識地將「渴望愛的自己」與「外在表現的自己」切斷，形成心理上的斷裂。
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2 text-[#B5A89F]">🎭</div>
                  <h4 className="font-serif text-lg text-[#5E5448] mb-2">偽裝 (Masking)</h4>
                  <p className="text-sm text-[#8C857B]">
                    熟練地戴上社會期待的面具。雖然安全，但面具戴久了，連我們自己都忘了面具下的臉孔是什麼樣子。
                  </p>
                </div>
                <div>
                  <div className="text-3xl mb-2 text-[#B5A89F]">🏝️</div>
                  <h4 className="font-serif text-lg text-[#5E5448] mb-2">孤立 (Isolation)</h4>
                  <p className="text-sm text-[#8C857B]">
                    這不是獨處，而是一種「無法連結」的痛苦。即使在關係中，仍感覺對方愛的只是你的面具，而非真實的你。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------- 我們的介入：4E 模式 ------------------- */}
        <section className="py-24 px-6 bg-[#FFFFFF]">
          <div className="max-w-5xl mx-auto">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#5E5448] mb-4 font-medium">
                    專案介入核心：4E 模式
                  </h2>
                  <p className="text-[#8C857B] font-light">
                    結合心理學與社會學視野的團體實踐
                  </p>
                </div>
                <div className="text-sm bg-[#FAF9F6] border border-[#EBE8E4] px-4 py-2 rounded-full text-[#8C857B] mt-4 md:mt-0">
                  Ref: Ciao's 4E Model Encounter Group
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Empathize */}
              <div className="group p-6 bg-[#FAF9F6] border-t-4 border-[#B5A89F] hover:shadow-md transition-all duration-300">
                <span className="text-5xl font-serif text-[#EBE8E4] group-hover:text-[#B5A89F] transition-colors">01</span>
                <h3 className="font-serif text-xl text-[#5E5448] mt-4 mb-3">共情 (Empathize)</h3>
                <p className="text-sm text-[#8C857B] leading-relaxed">
                  這不只是諮商技術，而是一種「治療性的存在」。在團體中，我們創造一個能被「深深理解」的空間，讓那些因污名而隱藏的經驗被看見、被接納。
                </p>
              </div>

              {/* Enlighten */}
              <div className="group p-6 bg-[#FAF9F6] border-t-4 border-[#D6CFC7] hover:shadow-md transition-all duration-300">
                <span className="text-5xl font-serif text-[#EBE8E4] group-hover:text-[#D6CFC7] transition-colors">02</span>
                <h3 className="font-serif text-xl text-[#5E5448] mt-4 mb-3">啟迪 (Enlighten)</h3>
                <p className="text-sm text-[#8C857B] leading-relaxed">
                  引入社會學視角，看見個人的痛苦往往源自社會結構與性別框架。我們不再只責怪自己，而是理解這是環境對性少數的結構性影響。
                </p>
              </div>

              {/* Empower */}
              <div className="group p-6 bg-[#FAF9F6] border-t-4 border-[#8C857B] hover:shadow-md transition-all duration-300">
                <span className="text-5xl font-serif text-[#EBE8E4] group-hover:text-[#8C857B] transition-colors">03</span>
                <h3 className="font-serif text-xl text-[#5E5448] mt-4 mb-3">賦能 (Empower)</h3>
                <p className="text-sm text-[#8C857B] leading-relaxed">
                  找回對生活的掌控感。增強內在韌性，發展出健康的因應策略，不再被動承受社會壓力，而是主動定義自己的價值。
                </p>
              </div>

              {/* Encounter */}
              <div className="group p-6 bg-[#FAF9F6] border-t-4 border-[#5E5448] hover:shadow-md transition-all duration-300">
                <span className="text-5xl font-serif text-[#EBE8E4] group-hover:text-[#5E5448] transition-colors">04</span>
                <h3 className="font-serif text-xl text-[#5E5448] mt-4 mb-3">會心 (Encounter)</h3>
                <p className="text-sm text-[#8C857B] leading-relaxed">
                  這是最關鍵的時刻。在「此時此刻」的互動中，練習卸下防衛，用真實的自己與他人相遇。修復過往的人際斷裂，體驗「我不需要偽裝也能被愛」。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------- 成效與轉變 (Impact) ------------------- */}
        <section className="py-24 px-6 bg-[#EBE8E4]/30">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
               <div className="relative">
                 {/* 裝飾框線 */}
                 <div className="absolute top-4 left-4 w-full h-full border-2 border-[#D6CFC7] rounded-lg -z-10"></div>
                 <div className="bg-[#5E5448] p-8 rounded-lg text-[#FAF9F6]">
                   <h3 className="font-serif text-2xl mb-6 leading-relaxed">
                     「孤單的解藥不是人群，<br/>而是真實的連結。」
                   </h3>
                   <p className="font-light text-sm opacity-80 leading-loose">
                     許多成員帶著焦慮而來，害怕展露真實會帶來拒絕。但在團體歷程中，我們見證了防衛的融化。
                   </p>
                   <p className="font-light text-sm opacity-80 leading-loose mt-4">
                     當一個人願意說出那些帶著羞愧的故事，而團體穩穩地接住了他——那一刻，普同感（Universality）發生了。我們發現：「原來，我不孤單。」
                   </p>
                 </div>
               </div>
            </div>
            
            <div className="md:w-1/2 space-y-8">
               <div className="flex items-start">
                 <div className="bg-[#B5A89F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">✓</div>
                 <div>
                   <h4 className="font-bold text-[#5E5448] mb-1">從焦慮到安在</h4>
                   <p className="text-sm text-[#8C857B]">減少對他人評價的過度敏感，學會在人際中安頓自己。</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <div className="bg-[#B5A89F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">✓</div>
                 <div>
                   <h4 className="font-bold text-[#5E5448] mb-1">修復情感表達 (Alexithymia)</h4>
                   <p className="text-sm text-[#8C857B]">重新連結被切斷的情緒，找回辨識與表達感受的能力。</p>
                 </div>
               </div>
               <div className="flex items-start">
                 <div className="bg-[#B5A89F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1 mr-4">✓</div>
                 <div>
                   <h4 className="font-bold text-[#5E5448] mb-1">建立支持系統</h4>
                   <p className="text-sm text-[#8C857B]">在團體外也能延續這份真實，建立有意義的人際網絡。</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

      </main>

      {/* ------------------- Footer ------------------- */}
      <footer className="bg-[#5E5448] text-[#D6CFC7]/70 py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <span className="inline-block w-12 h-[1px] bg-[#B5A89F]/40 mb-4"></span>
          </div>
          <h2 className="font-serif text-2xl text-[#EBE8E4] mb-6 font-medium tracking-wider">
            性少數男性會心團體計畫
          </h2>
          <p className="opacity-80 text-sm font-light tracking-wider leading-loose mb-8">
            一個關於愛、接納與真實存在的空間。<br />
            A space for love, acceptance, and authentic being.
          </p>
          <div className="text-xs mt-12 opacity-40 font-mono">
            &copy; 2025 Men's Encounter Group Project. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}