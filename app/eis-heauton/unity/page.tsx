import React from 'react';
import { BookOpen, Heart, Users, Star, Eye, Layers, Feather, Link, AlertCircle, Quote, Calendar, Clock } from 'lucide-react';

const AcademicNewsletter = () => {
  // Warm Morandi & Newsletter Palette
  const theme = {
    bg: "bg-[#FDFBF7]", // 溫暖的米色背景 (Oatmeal)
    paper: "bg-[#FFFFFF]", // 純白紙張
    textMain: "text-[#4A4238]", // 深暖棕色字體 (Dark Warm Brown)
    textLight: "text-[#8C857B]", // 淺暖灰 (Light Warm Grey)
    primary: "text-[#B08968]", // 摩卡色/淺棕 (Mocha)
    accentWarm: "bg-[#E6CCB2]/30", // 溫暖的淺褐強調色背景
    accentGreen: "bg-[#DDE5B6]/30", // 鼠尾草綠強調色 (Sage) for True Union
    accentRed: "bg-[#E8D1C5]/40", // 陶土紅強調色 (Terracotta) for False Union
    highlight: "bg-[#FFE5D9]", // 螢光筆效果 (Soft Peach)
    border: "border-[#E6E2DE]"
  };

  return (
    <div className={`min-h-screen ${theme.bg} font-sans py-8 px-4 sm:px-6`}>
      {/* Newsletter Container - mimic a high-quality email/blog structure */}
      <article className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-[#EBE5DE]">
        
        {/* Masthead / Header */}
        <header className="bg-[#FAF8F5] px-8 py-12 text-center border-b border-[#E6E2DE] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#DDBEA9] via-[#CB997E] to-[#A5A58D]"></div>
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white shadow-sm">
              <Feather className="w-10 h-10 text-[#CB997E]" />
            </div>
          </div>
          <h1 className={`text-4xl md:text-5xl font-serif font-bold tracking-wide ${theme.textMain} mb-2`}>
            合一
          </h1>
          <p className={`text-xl font-serif italic text-[#9C6644] mb-6`}>The Experience of Union</p>
          
          <div className="flex justify-center gap-6 text-xs md:text-sm font-medium tracking-wider text-[#9C8B7E] uppercase">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 2025 Research Note</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Theory & Analysis</span>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="px-6 md:px-16 py-12 space-y-16">

          {/* Section 1: 最初的合一 */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 mb-6">
               <div className="h-px w-8 bg-[#CB997E]"></div>
               <h2 className={`text-2xl font-bold tracking-tight ${theme.textMain}`}>最初的合一 <span className="text-lg font-normal text-[#9C8B7E] ml-2">Primal Union</span></h2>
            </div>

            {/* Image Layout: Centered, controlled height, distinct caption style */}
            <figure className="w-full flex flex-col items-center my-8">
               <div className="p-2 bg-white border border-[#E6E2DE] shadow-sm rounded-lg">
                 <img 
                    src="/Photos/H1.png" 
                    alt="H1 - 最初的合一" 
                    className="max-h-[500px] w-auto object-contain rounded"
                 />
               </div>
            </figure>

            <div className={`prose max-w-none ${theme.textMain} leading-8 text-lg`}>
              <p>
                當小寶寶還在媽媽肚子裡的時候，他和媽媽就像是一個人。他吃的東西、呼吸的空氣、長大的力量，全都來自媽媽。那時候，整個世界就是媽媽的肚子。媽媽和寶寶共用一個身體，也共用一個家。這是生命最最一開始的「合在一起」——人、媽媽、和自己，全部都變成一個整體。出生以後，寶寶離開媽媽的身體，開始用自己的方式呼吸、哭、吃東西。這時有一位心理學家叫 克萊恩（Klein），她觀察很多小嬰兒，發現一件有趣的事：
              </p>
              
              {/* Highlight Box UI */}
              <div className={`my-8 p-6 ${theme.accentWarm} rounded-r-xl border-l-4 border-[#CB997E]`}>
                <p className="font-bold text-[#7F5539] text-xl mb-2">全能的幻想 (Omnipotent Fantasy)</p>
                <p className="italic">
                  寶寶常常以為自己有「全能的幻想」，意思是——他以為自己很有魔法。
                </p>
              </div>

              <p>
                只要一哭，媽媽就會馬上出現、給奶喝。寶寶覺得世界會聽他的話，好像自己是小小的神一樣。可是慢慢地，寶寶會發現事情不是這樣。媽媽有時候沒那麼快來，或是在做別的事。這時他開始懂得：「原來媽媽是一個客體（object），是和我不一樣的人。我是我，媽媽是媽媽。」當他明白這件事時，心裡會有各種感覺：他可能生氣、覺得媽媽不好，也可能害怕、難過。這些情緒在心理學裡叫做<span className={`${theme.highlight} px-1 rounded mx-1`}>「投射（projection）」</span>——就是把心裡的感覺丟到別人身上。
              </p>
              <p>
                雖然這樣的心情很複雜，但這正是人開始長大的過程。當寶寶發現自己和媽媽不同，他就慢慢進入所謂的「個體化（individuation）」——意思是，他開始變成一個有自己想法、自己感覺的人。
              </p>
            </div>

            {/* English Translation Block - Styled as a subtle footer for the section */}
            <div className="mt-8 pt-6 border-t border-dashed border-[#D7CCC8] text-[#8D7F71] text-sm font-serif leading-relaxed bg-[#FAF9F6] p-6 rounded-lg">
               <p className="mb-4">When the baby is still inside the mother’s womb, he and his mother are like one single being... (Original Text Preserved)</p>
               <p className="mb-4">After birth, the baby leaves his mother’s body... Melanie Klein observed... babies often have what she called an “omnipotent fantasy.”...</p>
               <p className="mb-4">But gradually... “Mother is an object, a person who is different from me...” In psychology, these feelings are called projection...</p>
               <p>Although these experiences are complicated... he gradually enters what is called individuation...</p>
            </div>
          </section>

          {/* Section 2: 追尋的合一 (Card Grid Layout) */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px w-8 bg-[#C5A059]"></div>
               <h2 className={`text-2xl font-bold tracking-tight ${theme.textMain}`}>追尋的合一 <span className="text-lg font-normal text-[#9C8B7E] ml-2">The Quest</span></h2>
            </div>

            <div className={`prose max-w-none ${theme.textMain} leading-8 text-lg mb-8`}>
               <p>
                 有一種經驗，藏在人類很久很久的歷史裡，叫做「合一」。這種感覺很特別，因為它讓我們覺得自己不是孤單的一個人。從以前的原始部落到現代社會，我們都在尋找這種連結。
               </p>
            </div>

            {/* Grid for Quotes - Visual Interest */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { img: "/Photos/H2.png", text: "我與父原為一", sub: "約翰福音 10:30", eng: "I and the Father are one." },
                 { img: "/Photos/H3.png", text: "天地與我並生，萬物與我為一", sub: "莊子", eng: "Heaven and earth were born together with me..." },
                 { img: "/Photos/H4.png", text: "一切眾生、萬法皆因緣所生", sub: "Buddhism", eng: "All sentient beings arise through dependent origination." }
               ].map((item, idx) => (
                 <div key={idx} className="group cursor-default">
                    <div className="overflow-hidden rounded-lg shadow-sm mb-3">
                       <img src={item.img} alt={`Quote ${idx}`} className="w-full h-48 object-cover transition transform group-hover:scale-105 duration-700" />
                    </div>
                    <div className="text-center space-y-1">
                       <p className="font-serif font-bold text-[#6B4F3F]">{item.text}</p>
                       <p className="text-xs text-[#9C8B7E] uppercase tracking-widest">{item.sub}</p>
                       <p className="text-xs text-[#B0A69D] italic mt-2 px-2">{item.eng}</p>
                    </div>
                 </div>
               ))}
            </div>

            <div className={`prose max-w-none ${theme.textMain} leading-8 text-lg mt-8`}>
               <p>
                 心理學家 佛洛姆（Fromm）說，真正的愛不是要把對方變成自己的一部分，而是兩個人都保留自己，但又能在心裡相遇。
                 <span className="block mt-4 pl-4 border-l-2 border-[#C5A059] text-[#8C7B70] italic font-serif text-xl">
                   「就像你有一顆星星，我也有一顆星星，當我們牽起手的時候，兩顆星星的光就會交錯在一起。」
                 </span>
               </p>
               <p>
                 還有更深的一種「合一」，是人和整個世界的... 佛教裡也有一句很美的話：「我和所有生命本來就沒有差別。」
                 所以，「合一」不只是書裡的哲學... 它還是我們心裡很深的願望。
               </p>
            </div>

            {/* English Block */}
            <div className="mt-6 pt-6 border-t border-dashed border-[#D7CCC8] text-[#8D7F71] text-sm font-serif leading-relaxed bg-[#FAF9F6] p-6 rounded-lg">
                <p>There is an experience that has been hidden deep within human history... (Original English Text Preserved)...</p>
            </div>
          </section>

          {/* Section 3: 呼喚的合一 (Magazine/List Style) */}
          <section className="space-y-8 bg-white">
            <div className="flex items-center gap-4 mb-8">
               <div className="h-px w-8 bg-[#6B705C]"></div>
               <h2 className={`text-2xl font-bold tracking-tight ${theme.textMain}`}>呼喚的合一 <span className="text-lg font-normal text-[#9C8B7E] ml-2">Animation & Union</span></h2>
            </div>

            <div className="space-y-12">
               {/* Item 1 */}
               <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-5/12 shrink-0">
                     <img src="/Photos/H5.png" alt="Spirited Away" className="rounded shadow-md w-full hover:shadow-lg transition duration-300" />
                  </div>
                  <div className="space-y-3">
                     <div className="flex items-baseline gap-3">
                        <span className="text-[#A5A58D] font-bold text-xs uppercase tracking-wider">01</span>
                        <h3 className="text-xl font-bold text-[#4A4238]">千與千尋 (2001)</h3>
                     </div>
                     <p className="text-[#6D6358] leading-relaxed">
                        Spirited Away. There is a special kind of feeling called union... Chihiro meets Haku, a gentle and brave friend... This is the mature union of love—not the merging of two people into one, but the meeting of two whole beings through understanding and respect.
                     </p>
                  </div>
               </div>

               {/* Item 2 */}
               <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-5/12 shrink-0">
                     <img src="/Photos/H6.png" alt="Evangelion" className="rounded shadow-md w-full hover:shadow-lg transition duration-300" />
                  </div>
                  <div className="space-y-3">
                     <div className="flex items-baseline gap-3">
                        <span className="text-[#A5A58D] font-bold text-xs uppercase tracking-wider">02</span>
                        <h3 className="text-xl font-bold text-[#4A4238]">新世紀福音戰士 (1995)</h3>
                     </div>
                     <p className="text-[#6D6358] leading-relaxed">
                        Neon Genesis Evangelion. Shinji chooses not to start that plan, because he realizes that although difference brings pain, only separation makes genuine union possible.
                     </p>
                  </div>
               </div>

               {/* Item 3 */}
               <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-5/12 shrink-0">
                     <img src="/Photos/H7.png" alt="Princess Mononoke" className="rounded shadow-md w-full hover:shadow-lg transition duration-300" />
                  </div>
                  <div className="space-y-3">
                     <div className="flex items-baseline gap-3">
                        <span className="text-[#A5A58D] font-bold text-xs uppercase tracking-wider">03</span>
                        <h3 className="text-xl font-bold text-[#4A4238]">魔法公主 (1997)</h3>
                     </div>
                     <p className="text-[#6D6358] leading-relaxed">
                        Princess Mononoke. San lives in another form of union—the living bond between humans and nature. This is a creative, life-giving union.
                     </p>
                  </div>
               </div>
            </div>
          </section>

          {/* Section 4: Comparison (Split Cards) */}
          <section className="space-y-8">
             <div className="flex items-center gap-4 mb-4">
               <div className="h-px w-8 bg-[#4A4238]"></div>
               <h2 className={`text-2xl font-bold tracking-tight ${theme.textMain}`}>真實與假性 <span className="text-lg font-normal text-[#9C8B7E] ml-2">Union vs. Fusion</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* TRUE UNION - Green/Growth Theme */}
               <div className={`rounded-xl overflow-hidden border border-[#E6E2DE] ${theme.accentGreen} bg-opacity-20`}>
                  <div className="h-48 overflow-hidden">
                     <img src="/Photos/H8.png" alt="True Union" className="w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="p-8 space-y-4">
                     <div className="flex items-center gap-2 text-[#606C38]">
                        <Heart className="w-5 h-5" />
                        <h3 className="font-bold text-xl">真實合一 Union</h3>
                     </div>
                     <p className="text-[#4A4238] leading-relaxed">
                        佛洛姆說，真正的愛不是只想抓住別人。它有一種積極的力量。在這種愛裡，我們可以跟別人靠近，但也不會失去自己。<br/>
                        <span className="block mt-2 font-medium text-[#606C38]">「你還是你，我還是我，我們的心在中間相遇。」</span>
                     </p>
                     <div className="pt-4 text-xs text-[#6D6358] font-serif border-t border-[#A3B18A]/30">
                        Erich Fromm: "Love that makes people braver, gentler, and more capable of stepping out from their loneliness."
                     </div>
                  </div>
               </div>

               {/* FALSE UNION - Red/Warning Theme */}
               <div className={`rounded-xl overflow-hidden border border-[#E6E2DE] ${theme.accentRed} bg-opacity-20`}>
                  <div className="h-48 overflow-hidden">
                     <img src="/Photos/H9.png" alt="False Union" className="w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="p-8 space-y-4">
                     <div className="flex items-center gap-2 text-[#9A5034]">
                        <AlertCircle className="w-5 h-5" />
                        <h3 className="font-bold text-xl">假性合一 Fusion</h3>
                     </div>
                     <p className="text-[#4A4238] leading-relaxed">
                        人太害怕孤單，選擇「假性的合一」。看起來親近，其實是逃避自由。<br/>
                        <span className="block mt-2 font-medium text-[#9A5034]">「順從權威、社會同化、佔有式的愛。」</span>
                        就像吃糖一樣，暫時開心，但心裡的空洞沒有消失。
                     </p>
                     <div className="pt-4 text-xs text-[#6D6358] font-serif border-t border-[#CB997E]/30">
                         Pseudo-union is only temporary anesthesia for loneliness.
                     </div>
                  </div>
               </div>
            </div>

            {/* Note */}
            <p className="text-center text-xs text-[#9C8B7E] italic mt-8">
               （關於資本主義與工作、以及 BDSM 與假性合一的討論，我們之後會談）
            </p>
          </section>

        </div>

        {/* Footer */}
        <footer className="bg-[#FAF8F5] py-12 text-center border-t border-[#E6E2DE]">
            <Feather className="w-6 h-6 text-[#DDBEA9] mx-auto mb-4" />
            <p className="text-[#8D7F71] text-sm font-serif">© 2026 Academic Research Note. All rights reserved.</p>
        </footer>

      </article>
    </div>
  );
};

export default AcademicNewsletter;