import React from 'react';
import { BookOpen, Heart, Users, Star, Eye, Layers, Feather, Link, AlertCircle, Quote, Calendar, Clock, ArrowRight } from 'lucide-react';

const AcademicNewsletter = () => {
  // Theme: Warm Morandi / Literary Newsletter Style
  const theme = {
    bg: "bg-[#F9F8F6]",       // Page Background (Warm Oatmeal)
    paper: "bg-[#FFFFFF]",    // Card/Paper Background
    textMain: "text-[#4A4036]", // Main Text (Deep Warm Brown)
    textSec: "text-[#8C857B]",  // Secondary Text (Warm Grey)
    accentGold: "text-[#C5A059]", // Muted Gold (Highlights)
    accentBlue: "text-[#7A9CA5]", // Morandi Blue
    accentGreen: "bg-[#E9EDE0]",  // Sage Green Background (True Union)
    accentRed: "bg-[#F5EBE9]",    // Muted Clay Background (False Union)
    border: "border-[#E6E2DE]",
    highlight: "bg-[#FAEBD7]"     // Highlight marker effect
  };

  return (
    <div className={`min-h-screen ${theme.bg} font-sans py-12 px-4 sm:px-6`}>
      
      {/* Main Newsletter Container */}
      <article className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden border border-[#EBE5DE]">
        
        {/* Masthead / Header */}
        <header className="bg-[#FAF8F5] px-8 py-16 text-center border-b border-[#E6E2DE] relative">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-white shadow-sm border border-[#E6E2DE]">
              <Feather className="w-10 h-10 text-[#C5A059]" />
            </div>
          </div>
          <h1 className={`text-5xl font-serif font-bold tracking-wide ${theme.textMain} mb-3`}>
            合一
          </h1>
          <p className={`text-xl font-serif italic text-[#9C6644] mb-8`}>The Experience of Union</p>
          
          <div className="flex justify-center gap-8 text-xs font-medium tracking-widest text-[#9C8B7E] uppercase">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 2026 Research</span>
            <span className="flex items-center gap-2"><Layers className="w-4 h-4" /> Psychology & Philosophy</span>
          </div>
        </header>

        {/* Content Body */}
        <div className="px-6 md:px-20 py-16 space-y-24">

          {/* ================= SECTION 1: 最初的合一 ================= */}
          <section>
            <div className="flex items-center gap-4 mb-8">
               <span className="text-[#C5A059] font-serif text-4xl">01.</span>
               <h2 className={`text-3xl font-bold ${theme.textMain}`}>最初的合一</h2>
            </div>

            {/* Main Image H1 - Logic: Preserve Aspect Ratio with Container */}
            <figure className="w-full mb-10 group">
               <div className="relative w-full bg-[#FDFBF7] rounded-lg shadow-sm border border-[#E6E2DE] p-4 flex justify-center items-center min-h-[400px]">
                 <img 
                    src="/Photos/H1.png" 
                    alt="H1 - 最初的合一" 
                    className="max-h-[500px] w-auto max-w-full object-contain shadow-sm"
                 />
               </div>
               <figcaption className="text-center text-xs text-[#9C8B7E] mt-4 italic space-y-1">
                 <p>母與子：生命最初的共生連結</p>
                 <p className="opacity-75">Mother and Child: The First Union</p>
               </figcaption>
            </figure>

            {/* Chinese Text */}
            <div className={`prose max-w-none ${theme.textMain} text-lg leading-relaxed space-y-6 mb-10 text-justify`}>
              <p>
                當小寶寶還在媽媽肚子裡的時候，他和媽媽就像是一個人。他吃的東西、呼吸的空氣、長大的力量，全都來自媽媽。那時候，整個世界就是媽媽的肚子。媽媽和寶寶共用一個身體，也共用一個家。這是生命最最一開始的「合在一起」——人、媽媽、和自己，全部都變成一個整體。出生以後，寶寶離開媽媽的身體，開始用自己的方式呼吸、哭、吃東西。這時有一位心理學家叫 克萊恩（Klein），她觀察很多小嬰兒，發現一件有趣的事：
              </p>
              
              <div className="pl-6 border-l-4 border-[#C5A059] py-4 bg-[#FAF8F5] rounded-r-lg my-6">
                <p className="font-bold text-[#8C7B70] mb-2 text-lg">全能的幻想 (Omnipotent Fantasy)</p>
                <p className="italic text-[#5E5045]">寶寶常常以為自己有「全能的幻想」，意思是——他以為自己很有魔法。</p>
              </div>

              <p>
                只要一哭，媽媽就會馬上出現、給奶喝。寶寶覺得世界會聽他的話，好像自己是小小的神一樣。可是慢慢地，寶寶會發現事情不是這樣。媽媽有時候沒那麼快來，或是在做別的事。這時他開始懂得：「原來媽媽是一個客體（object），是和我不一樣的人。我是我，媽媽是媽媽。」
              </p>
              
              {/* Diagram Placeholder */}
              <div className="my-8 p-6 bg-[#F5F5F0] border border-dashed border-[#C5A059]/30 rounded-lg flex flex-col items-center justify-center gap-3 text-[#9C8B7E]">
                 <Layers className="w-8 h-8 opacity-40"/>
                 <span className="text-sm font-serif italic tracking-wide">[Diagram: The Separation-Individuation Process in Object Relations Theory]</span>
              </div>

              <p>
                 當他明白這件事時，心裡會有各種感覺：他可能生氣、覺得媽媽不好，也可能害怕、難過。這些情緒在心理學裡叫做<span className="bg-[#FAEBD7] px-2 py-0.5 rounded mx-1">「投射（projection）」</span>——就是把心裡的感覺丟到別人身上。
              </p>
              <p>
                雖然這樣的心情很複雜，但這正是人開始長大的過程。當寶寶發現自己和媽媽不同，他就慢慢進入所謂的「個體化（individuation）」——意思是，他開始變成一個有自己想法、自己感覺的人。
              </p>
            </div>

            {/* English Reference */}
            <div className="bg-[#F9F9F7] p-8 rounded-xl border border-[#EBEBEB] text-[#6B655F] font-serif leading-7 text-sm space-y-4">
              <div className="flex items-center gap-2 mb-4 text-[#C5A059] uppercase text-xs font-bold tracking-widest border-b border-[#E6E2DE] pb-2">
                <BookOpen className="w-4 h-4" /> English Reference
              </div>
              <p>
                When the baby is still inside the mother’s womb, he and his mother are like one single being... (Content preserved)
              </p>
              <p>
                After birth, the baby leaves his mother’s body... Melanie Klein observed... “omnipotent fantasy.”
              </p>
              <p>
                But gradually, the baby begins to realize... “Mother is an object, a person who is different from me...” In psychology, these feelings are called projection.
              </p>
              <p>
                Although these experiences are complicated, they mark the beginning of growth... individuation.
              </p>
            </div>
          </section>

          <hr className="border-t border-[#E6E2DE]" />

          {/* ================= SECTION 2: 追尋的合一 ================= */}
          <section>
             <div className="flex items-center gap-4 mb-8">
               <span className="text-[#C5A059] font-serif text-4xl">02.</span>
               <h2 className={`text-3xl font-bold ${theme.textMain}`}>追尋的合一</h2>
            </div>

            {/* Grid Layout - Logic: Enforce Aspect Ratio 4:3 for uniform cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {/* Card 1 */}
               <div className="group flex flex-col gap-3">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-sm relative bg-gray-100">
                     <img src="/Photos/H2.png" alt="H2" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition"></div>
                  </div>
                  <div className="text-center pt-2">
                     <p className="font-bold text-[#5E5045] text-lg font-serif">我與父原為一</p>
                     <p className="text-xs text-[#9C8B7E] font-serif italic mt-1">“I and the Father are one.”<br/>(約翰福音 10:30)</p>
                  </div>
               </div>
               {/* Card 2 */}
               <div className="group flex flex-col gap-3">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-sm relative bg-gray-100">
                     <img src="/Photos/H3.png" alt="H3" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition"></div>
                  </div>
                  <div className="text-center pt-2">
                     <p className="font-bold text-[#5E5045] text-lg font-serif">天地與我並生</p>
                     <p className="text-xs text-[#9C8B7E] font-serif italic mt-1">“All things and I are one.”<br/>(莊子)</p>
                  </div>
               </div>
               {/* Card 3 */}
               <div className="group flex flex-col gap-3">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-sm relative bg-gray-100">
                     <img src="/Photos/H4.png" alt="H4" className="w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition"></div>
                  </div>
                  <div className="text-center pt-2">
                     <p className="font-bold text-[#5E5045] text-lg font-serif">因緣所生</p>
                     <p className="text-xs text-[#9C8B7E] font-serif italic mt-1">“Dependent origination.”<br/>(Buddhism)</p>
                  </div>
               </div>
            </div>

            {/* Chinese Text */}
            <div className={`prose max-w-none ${theme.textMain} text-lg leading-relaxed space-y-6 mb-10 text-justify`}>
               <p>
                 有一種經驗，藏在人類很久很久的歷史裡，叫做「合一」。「合一」的意思是——我們覺得自己和別人、和世界、和整個宇宙，好像都能連在一起。這種感覺很特別，因為它讓我們覺得自己不是孤單的一個人。
               </p>
               <p>
                 從以前的原始部落開始，人們就一起生活、一起打獵、一起跳舞。那時候，「合一」是大家同心的樣子。到了現在的學校、社區、公司裡，我們也一樣要學著合作。當我們說「我們」的時候，其實心裡就在經驗一種「合一」。所以，「合一」有時是人和人一起的感覺。但有時候，「合一」也發生在兩個人之間。有一位心理學家叫 佛洛姆（Fromm），他研究「愛」。他說，真正的愛不是要把對方變成自己的一部分，而是兩個人都保留自己，但又能在心裡相遇。
               </p>
               <blockquote className="text-xl font-serif text-[#8C7B70] border-l-4 border-[#C5A059] pl-6 my-8 italic bg-[#FAF8F5] py-4 rounded-r-sm">
                 就像你有一顆星星，我也有一顆星星，當我們牽起手的時候，兩顆星星的光就會交錯在一起。這種「我和你在一起」的感覺，就是愛裡的「合一」。
               </blockquote>
               <p>
                 還有更深的一種「合一」，是人和整個世界的。在《聖經》裡，有一句話說「我和天父是一體的」；在中國古書《莊子》裡也有說「天地和我一起出生，萬物和我是一家人」。這些話都在告訴我們：人和大自然、天空、動物、花草，原本就是連在一起的。佛教裡也有一句很美的話：「我和所有生命本來就沒有差別。」意思是，世界上的一切生命都互相連結、互相幫助。
               </p>
               <p>
                 所以，「合一」不只是書裡的哲學，也不只是宗教的故事。它還是我們心裡很深的願望。當我們覺得世界紛亂、分別的時候，我們都在偷偷地找——那個讓自己、別人、和整個世界能再一次變成「一體」的地方。
               </p>
            </div>

            {/* English Reference */}
            <div className="bg-[#F9F9F7] p-8 rounded-xl border border-[#EBEBEB] text-[#6B655F] font-serif leading-7 text-sm space-y-4">
               <div className="flex items-center gap-2 mb-2 text-[#C5A059] uppercase text-xs font-bold tracking-widest border-b border-[#E6E2DE] pb-2">
                 <BookOpen className="w-4 h-4" /> English Reference
               </div>
               <p>There is an experience that has been hidden deep within human history for a very long time, and it is called oneness...</p>
               <p>Since the time of ancient tribes... Erich Fromm, who studied love...</p>
               <p>It’s like this: you have a star, and I have a star...</p>
               <p>There is also a deeper kind of oneness... “I and the Father are one.”... “All things and I are one family.”</p>
               <p>Therefore, union and oneness are not only ideas found in philosophy or religion...</p>
            </div>
          </section>

          <hr className="border-t border-[#E6E2DE]" />

          {/* ================= SECTION 3: 呼喚的合一 ================= */}
          <section>
             <div className="flex items-center gap-4 mb-8">
               <span className="text-[#C5A059] font-serif text-4xl">03.</span>
               <h2 className={`text-3xl font-bold ${theme.textMain}`}>呼喚的合一</h2>
            </div>

            <div className="space-y-16">
               
               {/* Anime 1: Spirited Away - Layout: Grid 12 cols for better alignment */}
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Image: Enforce 16:9 Aspect Ratio for Cinematic look */}
                  <div className="md:col-span-5 w-full">
                     <div className="w-full aspect-video rounded-lg shadow-md border border-[#EBEBEB] overflow-hidden">
                        <img src="/Photos/H5.png" alt="Spirited Away" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                     </div>
                  </div>
                  <div className="md:col-span-7 space-y-4">
                     <h3 className="text-xl font-bold text-[#5E5045] flex flex-wrap items-baseline gap-2">
                        千與千尋 (2001) <span className="text-sm font-normal text-[#9C8B7E] font-serif">Spirited Away</span>
                     </h3>
                     {/* Added Chinese Content */}
                     <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-3`}>
                        <p>
                           「合一」並非思維所能抵達之處，而是一種內心深處隱蔽的運動——它發生於潛意識之中，往往先於意識的覺察。
                        </p>
                        <p>
                           在《神隱少女》中，千尋進入了一個被剝奪名字的世界。當她成為「小千」時，為了生存，她與湯屋的體制形成了某種假性的融合（pseudo-union）。這是一種暫時性的自我消解，以適應強大的外部系統。然而，透過與白龍的相遇——一位理解並協助她找回自我的存在——她展現了成熟的愛之合一：這不是兩個人的相互消融，而是兩個完整個體在理解與尊重中的真實相遇。
                        </p>
                     </div>
                     {/* English Reference */}
                     <div className="text-[#6B655F] font-serif text-sm leading-relaxed space-y-2 bg-[#F7F7F5] p-4 rounded-lg border-l-2 border-[#C5A059]">
                        <p className="font-bold text-xs uppercase tracking-widest text-[#9C8B7E] mb-1">English Reference</p>
                        <p>There is a special kind of feeling called union... happening in the unconscious.</p>
                        <p>In Spirited Away, there is a girl named Chihiro... This is the mature union of love—not the merging of two people into one, but the meeting of two whole beings through understanding and respect.</p>
                     </div>
                  </div>
               </div>

               {/* Anime 2: Evangelion */}
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-5 w-full">
                     <div className="w-full aspect-video rounded-lg shadow-md border border-[#EBEBEB] overflow-hidden">
                        <img src="/Photos/H6.png" alt="Evangelion" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                     </div>
                  </div>
                  <div className="md:col-span-7 space-y-4">
                     <h3 className="text-xl font-bold text-[#5E5045] flex flex-wrap items-baseline gap-2">
                        新世紀福音戰士 (1995) <span className="text-sm font-normal text-[#9C8B7E] font-serif">Neon Genesis Evangelion</span>
                     </h3>
                     {/* Added Chinese Content */}
                     <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-3`}>
                        <p>
                           另一部動畫《新世紀福音戰士》中描繪的「人類補完計畫」，試圖將全人類的心靈融為一體，彷彿所有人的心都熔化在一起。這看似完美的統一，實則是一種合一的幻象（illusion of union）——一個不再有「你」與「我」之分的世界。
                        </p>
                        <p>
                           若無差異，便無距離；若無距離，便無從產生愛、渴望與成長。主角真嗣最終拒絕了此計畫，因為他意識到：儘管差異帶來痛苦，但唯有保有分離，真實的連結才成為可能。
                        </p>
                     </div>
                     {/* English Reference */}
                     <div className="text-[#6B655F] font-serif text-sm leading-relaxed space-y-2 bg-[#F7F7F5] p-4 rounded-lg border-l-2 border-[#C5A059]">
                        <p className="font-bold text-xs uppercase tracking-widest text-[#9C8B7E] mb-1">English Reference</p>
                        <p>Another animation, Neon Genesis Evangelion, tells the story of a boy named Shinji... illusion of union... In the end, Shinji chooses not to start that plan, because he realizes that although difference brings pain, only separation makes genuine union possible.</p>
                     </div>
                  </div>
               </div>

               {/* Anime 3: Princess Mononoke */}
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-5 w-full">
                     <div className="w-full aspect-video rounded-lg shadow-md border border-[#EBEBEB] overflow-hidden">
                        <img src="/Photos/H7.png" alt="Princess Mononoke" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                     </div>
                  </div>
                  <div className="md:col-span-7 space-y-4">
                     <h3 className="text-xl font-bold text-[#5E5045] flex flex-wrap items-baseline gap-2">
                        魔法公主 (1997) <span className="text-sm font-normal text-[#9C8B7E] font-serif">Princess Mononoke</span>
                     </h3>
                     {/* Added Chinese Content */}
                     <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-3`}>
                        <p>
                           在《魔法公主》中，小桑與山犬、森林精靈及山脈本身共生，生活在另一種形式的合一之中——人與自然的生命連結（living bond）。
                        </p>
                        <p>
                           她能聽見森林的聲音，與大地一同呼吸。這是一種創造性的、賦予生命的合一，一種既保留了連結，也尊重了彼此差異的關係。透過這些動畫，我們看見了合一的不同面貌：有些是虛假且吞噬性的，有些則是真實且肯定生命的。作為人類的成長，便在於學會分辨：哪一種「在一起」，能讓我們更接近真實的自己。
                        </p>
                     </div>
                     {/* English Reference */}
                     <div className="text-[#6B655F] font-serif text-sm leading-relaxed space-y-2 bg-[#F7F7F5] p-4 rounded-lg border-l-2 border-[#C5A059]">
                        <p className="font-bold text-xs uppercase tracking-widest text-[#9C8B7E] mb-1">English Reference</p>
                        <p>In Princess Mononoke, the girl San... lives in another form of union... To grow as human beings, we must learn to tell them apart...</p>
                     </div>
                  </div>
               </div>
            </div>
          </section>

          <hr className="border-t border-[#E6E2DE]" />

          {/* ================= SECTION 4: 真實與假性的合一 ================= */}
          <section>
             <div className="flex items-center gap-4 mb-8">
               <span className="text-[#C5A059] font-serif text-4xl">04.</span>
               <h2 className={`text-3xl font-bold ${theme.textMain}`}>真實與假性的合一</h2>
            </div>
            
            {/* Diagram Placeholder */}
            <div className="mb-10 p-6 bg-[#F5F5F0] border border-dashed border-[#C5A059]/30 rounded-lg flex flex-col items-center justify-center gap-3 text-[#9C8B7E]">
                <Layers className="w-8 h-8 opacity-40"/>
                <span className="text-sm font-serif italic tracking-wide">[Diagram: Symbiotic Union vs. Mature Love in Fromm's Theory]</span>
            </div>

            <div className="grid grid-cols-1 gap-12">
               
               {/* 4.1 TRUE UNION - Logic: Fixed height image for layout consistency */}
               <div className="rounded-2xl overflow-hidden border border-[#E0E5D5] bg-white shadow-sm">
                  <div className={`p-4 ${theme.accentGreen} flex items-center gap-3 border-b border-[#E0E5D5]`}>
                      <Heart className="w-5 h-5 text-[#606C38]" />
                      <h3 className="font-bold text-xl text-[#606C38]">真實合一 Union</h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                     {/* Image Container */}
                     <div className="md:w-5/12 min-h-[300px] relative bg-[#F7F9F4]">
                        <img src="/Photos/H8.png" alt="True Union" className="absolute inset-0 w-full h-full object-cover" />
                     </div>
                     <div className="md:w-7/12 p-8 space-y-6">
                        <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-4`}>
                           <p>
                              佛洛姆（Fromm）常常思考一個問題：「人怎麼樣，才能在愛裡面，真的和別人連結在一起？」
                              他說，真正的愛不是只想抓住別人，也不是讓自己消失。而是一種成熟的愛——這種愛有一種積極的力量。「積極」的意思是，它會讓人變得更勇敢、更溫柔，能走出孤單的地方。
                           </p>
                           <p>
                              在這種愛裡，我們可以跟別人靠近，但也不會失去自己。你還是「你」，我還是「我」，我們的心能在中間相遇，就像兩棵樹的枝葉，在風裡輕輕碰在一起。佛洛姆說，人不只是在愛裡能這樣，當我們努力工作、創造東西、或和世界做朋友的時候，我們也能感覺到一種「合在一起」的連結。那是一種心裡的溫度，它讓我們不再覺得自己是一個孤單的小點，而是整個世界裡的一部分。
                           </p>
                           <p className="text-xs text-[#9C8B7E]">（關於資本主義社會的變革讓人在工作向度的合一斷裂，我們之後會談）</p>
                        </div>
                        
                        {/* English Reference */}
                        <div className="text-sm font-serif text-[#6B655F] bg-[#F7F9F4] p-4 rounded border-l-2 border-[#606C38]">
                           <div className="flex items-center gap-2 mb-2 text-[#606C38] uppercase text-xs font-bold tracking-widest">
                             <BookOpen className="w-3 h-3" /> English Reference
                           </div>
                           <p className="mb-2">Erich Fromm... real love is neither the desire to possess someone nor the disappearance of oneself...</p>
                           <p className="mb-2">In this kind of love... You remain you, I remain me...</p>
                           <p className="mb-2">It is a quiet warmth of the heart...</p>
                           <p className="italic text-xs text-[#8C857B]">(As for how capitalist society has fragmented this sense of union...)</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* 4.2 FALSE UNION */}
               <div className="rounded-2xl overflow-hidden border border-[#EBDCD6] bg-white shadow-sm">
                  <div className={`p-4 ${theme.accentRed} flex items-center gap-3 border-b border-[#EBDCD6]`}>
                      <AlertCircle className="w-5 h-5 text-[#9A5034]" />
                      <h3 className="font-bold text-xl text-[#9A5034]">假性合一 Fusion</h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                     {/* Image Container */}
                     <div className="md:w-5/12 min-h-[300px] relative bg-[#FCF8F7]">
                        <img src="/Photos/H9.png" alt="False Union" className="absolute inset-0 w-full h-full object-cover" />
                     </div>
                     <div className="md:w-7/12 p-8 space-y-6">
                        <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-4`}>
                           <p>
                              有時候，人太害怕孤單，就會選擇一種「假性的合一」。意思是：看起來很親近，其實只是為了逃避自由和害怕孤獨。
                           </p>
                           <ul className="list-disc pl-5 space-y-2 text-[#5E5045]">
                              <li><span className="font-bold">順從權威</span>：有些人會聽話到完全不敢說不，讓別人替自己決定一切。他們以為這樣就安全了，其實只是失去了自己的聲音。</li>
                              <li><span className="font-bold">社會同化</span>：有些人會努力模仿別人，只想要和大家一樣。他們覺得「一樣」才安全，卻慢慢忘了「我是誰」。</li>
                              <li><span className="font-bold">佔有式的愛</span>：還有些人，會把「愛」誤會成「抓緊不放」。他們想要完全擁有對方，讓對方變成自己的一部分。看起來親密，其實是害怕被拋下。</li>
                           </ul>
                           <p>
                              佛洛姆說，這些看起來都像是「在一起」，但其實只是暫時麻醉的孤單。就像吃很多糖一樣——會讓人覺得開心一會兒，但心裡的空洞沒有真的消失。
                              所以，有些人就會不斷想要更多的東西：更多玩具、更多快樂、更刺激的事，可是越多，他們心裡越是荒蕪的像是一片沙漠。
                           </p>
                           <p className="text-xs text-[#9C8B7E]">（有關BDSM是如何成為一種假性合一的方式，我們之後會談）</p>
                        </div>
                        
                        {/* English Reference */}
                        <div className="text-sm font-serif text-[#6B655F] bg-[#FCF8F7] p-4 rounded border-l-2 border-[#9A5034]">
                           <div className="flex items-center gap-2 mb-2 text-[#9A5034] uppercase text-xs font-bold tracking-widest">
                             <BookOpen className="w-3 h-3" /> English Reference
                           </div>
                           <p className="mb-2">Sometimes, people are so afraid of being alone that they choose a kind of pseudo-union...</p>
                           <p className="mb-2">Submission to authority... Social conformity... Possessive love...</p>
                           <p className="mb-2">Fromm said that these forms of closeness are not true connection... like eating too much sugar...</p>
                           <p className="mb-2">That is why some people keep craving for more...</p>
                           <p className="italic text-xs text-[#8C857B]">(How certain practices, such as BDSM, can also function as a form of pseudo-union...)</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="bg-[#FAF8F5] py-16 text-center border-t border-[#E6E2DE]">
            <div className="mb-6">
                <Feather className="w-8 h-8 text-[#DDBEA9] mx-auto opacity-50" />
            </div>
            <p className="text-[#8D7F71] text-sm font-serif tracking-widest">© 2026 Academic Research Note. All rights reserved.</p>
        </footer>

      </article>
    </div>
  );
};

export default AcademicNewsletter;