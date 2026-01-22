import React from 'react';
import { BookOpen, Heart, Users, Layers, Feather, AlertCircle, Calendar, ArrowRight, Quote } from 'lucide-react';

const AcademicNewsletter = () => {
  // Theme: Morandi Red Collage (Based on uploaded image)
  // 小红 (Soft Rouge): #E67762
  // 石榴裙 (Pomegranate): #B13B2E
  // 朱殷 (Muted Rust): #B93A26
  // 朱湛 (Deep Brick): #95302E
  // Background: Warm Oatmeal
  
  const theme = {
    bg: "bg-[#F9F8F6]",             // Page Background
    paper: "bg-[#FFFFFF]",          // Card Background
    textMain: "text-[#5E4B45]",     // Warm Dark Brown
    textSec: "text-[#9C8B85]",      // Muted Brown-Grey
    
    // The Red Palette
    primaryRed: "text-[#B13B2E]",   // 石榴裙 (Headings)
    softRedBg: "bg-[#F7EBE9]",      // Light Pink Background
    accentBorder: "border-[#E6C9C5]", // Soft Red Border
    tagBg: "bg-[#B93A26]",          // Tag Background
    
    // Accents
    gold: "text-[#C5A059]",
    divider: "border-[#E6DED9]",
  };

  return (
    <div className={`min-h-screen ${theme.bg} font-sans py-12 px-4 sm:px-6`}>
      
      {/* Article Container */}
      <article className="max-w-5xl mx-auto bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-xl overflow-hidden border border-[#EBE5DE]">
        
        {/* ================= HEADER: Red Collage Style ================= */}
        <header className="relative bg-[#FAF8F5] px-8 py-20 text-center border-b border-[#E6DED9] overflow-hidden">
          {/* Decorative Circles (Color Blocking) */}
          <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-[#E67762]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-64 h-64 bg-[#B13B2E]/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="p-4 rounded-full bg-white shadow-sm border border-[#E6C9C5] mb-6">
              <Feather className="w-10 h-10 text-[#B13B2E]" />
            </div>
            
            <h1 className="text-6xl font-serif font-bold tracking-wider text-[#95302E] mb-4">
              合一
            </h1>
            <p className="text-xl font-serif italic text-[#B93A26]/80 mb-10 tracking-wide">
              The Experience of Union
            </p>
            
            <div className="flex gap-6 text-xs font-bold tracking-[0.2em] text-[#9C8B85] uppercase">
              <span className="flex items-center gap-2 px-3 py-1 bg-[#F5F0EE] rounded-full">
                <Calendar className="w-3 h-3" /> 2026 Research
              </span>
              <span className="flex items-center gap-2 px-3 py-1 bg-[#F5F0EE] rounded-full">
                <Layers className="w-3 h-3" /> Psychology & Philosophy
              </span>
            </div>
          </div>
        </header>

        {/* ================= BODY CONTENT ================= */}
        <div className="px-6 md:px-24 py-20 space-y-28">

          {/* ---------------- SECTION 1: 最初的合一 ---------------- */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 border-b border-[#E6C9C5] pb-4">
               <span className="text-[#E67762] font-serif text-5xl font-bold opacity-40">01</span>
               <h2 className={`text-3xl font-bold ${theme.primaryRed}`}>最初的合一</h2>
            </div>

            {/* Layout: Image on top, framed */}
            <figure className="w-full mb-12">
               <div className="relative p-3 border border-[#E6C9C5] rounded-sm bg-[#FFFCFA]">
                 <div className="aspect-[16/9] w-full overflow-hidden bg-[#F5F5F0] relative">
                    {/* Placeholder for H1 */}
                    <img 
                      src="/Photos/H1.png" 
                      alt="Mother and Child" 
                      className="w-full h-full object-contain p-4"
                    />
                 </div>
                 <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-[#B13B2E]/5 -z-10 rounded-full blur-xl"></div>
               </div>
               <figcaption className="text-center text-xs text-[#9C8B85] mt-4 font-serif italic">
                 Mother and Child: The First Union
               </figcaption>
            </figure>

            {/* Content */}
            <div className={`${theme.textMain} text-lg leading-relaxed space-y-8 text-justify`}>
              <p>
                當小寶寶還在媽媽肚子裡的時候，他和媽媽就像是一個人。他吃的東西、呼吸的空氣、長大的力量，全都來自媽媽。那時候，整個世界就是媽媽的肚子。媽媽和寶寶共用一個身體，也共用一個家。這是生命最最一開始的「合在一起」——人、媽媽、和自己，全部都變成一個整體。出生以後，寶寶離開媽媽的身體，開始用自己的方式呼吸、哭、吃東西。這時有一位心理學家叫 克萊恩（Klein），她觀察很多小嬰兒，發現一件有趣的事：
              </p>
              
              <div className="flex gap-4 p-6 bg-[#FDF6F5] border-l-[3px] border-[#E67762] rounded-r-lg">
                <Quote className="w-6 h-6 text-[#E67762] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#B13B2E] mb-1">全能的幻想 (Omnipotent Fantasy)</h4>
                  <p className="text-sm italic text-[#5E4B45]">寶寶常常以為自己有「全能的幻想」，意思是——他以為自己很有魔法。</p>
                </div>
              </div>

              <p>
                只要一哭，媽媽就會馬上出現、給奶喝。寶寶覺得世界會聽他的話，好像自己是小小的神一樣。可是慢慢地，寶寶會發現事情不是這樣。媽媽有時候沒那麼快來，或是在做別的事。這時他開始懂得：「原來媽媽是一個客體（object），是和我不一樣的人。我是我，媽媽是媽媽。」
              </p>
              
              {/* Diagram Placeholder */}
              <div className="my-6 py-8 border border-dashed border-[#B93A26]/30 rounded-lg bg-[#FAF8F6] text-center">
                 <span className="text-sm text-[#9C8B85] font-serif italic">[Diagram: The Separation-Individuation Process in Object Relations Theory]</span>
              </div>

              <p>
                 當他明白這件事時，心裡會有各種感覺：他可能生氣、覺得媽媽不好，也可能害怕、難過。這些情緒在心理學裡叫做<span className="bg-[#FFE4E1] text-[#95302E] px-1.5 py-0.5 rounded mx-1 text-base">「投射（projection）」</span>——就是把心裡的感覺丟到別人身上。
              </p>
              <p>
                雖然這樣的心情很複雜，但這正是人開始長大的過程。當寶寶發現自己和媽媽不同，他就慢慢進入所謂的「個體化（individuation）」——意思是，他開始變成一個有自己想法、自己感覺的人。
              </p>
            </div>

            {/* English Reference Block */}
            <div className="mt-10 p-8 bg-[#F8F8F6] rounded-xl border border-[#EBE5DE] text-[#6B655F] font-serif text-sm leading-7">
               <div className="flex items-center gap-2 mb-4 text-[#B13B2E] uppercase text-xs font-bold tracking-widest border-b border-[#E6C9C5] pb-2 w-fit">
                 <BookOpen className="w-3 h-3" /> English Reference
               </div>
               <div className="space-y-4">
                 <p>When the baby is still inside the mother’s womb, he and his mother are like one single being. What he eats, the air he breathes, and the strength that helps him grow all come from his mother. At that time, his entire world is his mother’s womb. Mother and baby share one body and one home. This is the very first form of “being together”—the person, the mother, and the self are all part of one whole.</p>
                 <p>After birth, the baby leaves his mother’s body and begins to breathe, cry, and eat on his own. At this point, a psychologist named Melanie Klein observed many infants and discovered something interesting: babies often have what she called an “omnipotent fantasy.” This means they believe they have magical power—if they cry, the mother will instantly appear and feed them. The baby feels as if the world obeys his will, as though he were a tiny god.</p>
                 <p>But gradually, the baby begins to realize that things don’t always work that way. Sometimes the mother doesn’t come right away, or she is busy doing something else. Then he starts to understand: “Mother is an object, a person who is different from me. I am me, and mother is mother.” When this realization emerges, the baby experiences many emotions—anger, disappointment, fear, or sadness. In psychology, these feelings are called projection—putting one’s inner emotions onto someone else.</p>
                 <p>Although these experiences are complicated, they mark the beginning of growth. When the baby realizes he is separate from his mother, he gradually enters what is called individuation—the process of becoming a person with his own thoughts and feelings.</p>
               </div>
            </div>
          </section>

          {/* Divider */}
          <div className="flex items-center justify-center opacity-30">
            <div className="h-px bg-[#B13B2E] w-24"></div>
            <div className="mx-4 text-[#B13B2E]">❖</div>
            <div className="h-px bg-[#B13B2E] w-24"></div>
          </div>

          {/* ---------------- SECTION 2: 追尋的合一 ---------------- */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 border-b border-[#E6C9C5] pb-4">
               <span className="text-[#E67762] font-serif text-5xl font-bold opacity-40">02</span>
               <h2 className={`text-3xl font-bold ${theme.primaryRed}`}>追尋的合一</h2>
            </div>

            {/* Layout: 3 Cards Grid - Consistent Height */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
               {[
                 { src: "/Photos/H2.png", title: "我與父原為一", quote: "“I and the Father are one.”", sub: "(約翰福音 10:30)" },
                 { src: "/Photos/H3.png", title: "天地與我並生", quote: "“All things and I are one.”", sub: "(莊子)" },
                 { src: "/Photos/H4.png", title: "因緣所生", quote: "“Dependent origination.”", sub: "(Buddhism)" }
               ].map((card, idx) => (
                 <div key={idx} className="group flex flex-col bg-white border border-[#EBE5DE] rounded-lg p-3 hover:shadow-md transition-all duration-500">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-md bg-[#F5F5F0] relative mb-4">
                       <img src={card.src} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                       <div className="absolute inset-0 bg-[#95302E]/0 group-hover:bg-[#95302E]/5 transition-colors duration-500"></div>
                    </div>
                    <div className="text-center mt-auto">
                       <h3 className="font-bold text-[#5E4B45] text-lg font-serif mb-2">{card.title}</h3>
                       <p className="text-xs text-[#9C8B85] font-serif italic">{card.quote}</p>
                       <p className="text-xs text-[#9C8B85] font-serif">{card.sub}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* Content */}
            <div className={`${theme.textMain} text-lg leading-relaxed space-y-8 text-justify`}>
               <p>
                 有一種經驗，藏在人類很久很久的歷史裡，叫做「合一」。「合一」的意思是——我們覺得自己和別人、和世界、和整個宇宙，好像都能連在一起。這種感覺很特別，因為它讓我們覺得自己不是孤單的一個人。
               </p>
               <p>
                 從以前的原始部落開始，人們就一起生活、一起打獵、一起跳舞。那時候，「合一」是大家同心的樣子。到了現在的學校、社區、公司裡，我們也一樣要學著合作。當我們說「我們」的時候，其實心裡就在經驗一種「合一」。所以，「合一」有時是人和人一起的感覺。但有時候，「合一」也發生在兩個人之間。有一位心理學家叫 佛洛姆（Fromm），他研究「愛」。他說，真正的愛不是要把對方變成自己的一部分，而是兩個人都保留自己，但又能在心裡相遇。
               </p>
               
               <blockquote className="relative p-8 bg-[#FFF8F7] rounded-lg border-l-4 border-[#B13B2E]">
                 <span className="absolute top-4 left-4 text-4xl text-[#E67762] opacity-30 font-serif">“</span>
                 <p className="text-xl font-serif text-[#95302E] italic text-center z-10 relative">
                   就像你有一顆星星，我也有一顆星星，當我們牽起手的時候，兩顆星星的光就會交錯在一起。這種「我和你在一起」的感覺，就是愛裡的「合一」。
                 </p>
               </blockquote>

               <p>
                 還有更深的一種「合一」，是人和整個世界的。在《聖經》裡，有一句話說「我和天父是一體的」；在中國古書《莊子》裡也有說「天地和我一起出生，萬物和我是一家人」。這些話都在告訴我們：人和大自然、天空、動物、花草，原本就是連在一起的。佛教裡也有一句很美的話：「我和所有生命本來就沒有差別。」意思是，世界上的一切生命都互相連結、互相幫助。
               </p>
               <p>
                 所以，「合一」不只是書裡的哲學，也不只是宗教的故事。它還是我們心裡很深的願望。當我們覺得世界紛亂、分別的時候，我們都在偷偷地找——那個讓自己、別人、和整個世界能再一次變成「一體」的地方。
               </p>
            </div>

            {/* English Reference Block */}
            <div className="mt-10 p-8 bg-[#F8F8F6] rounded-xl border border-[#EBE5DE] text-[#6B655F] font-serif text-sm leading-7">
               <div className="flex items-center gap-2 mb-4 text-[#B13B2E] uppercase text-xs font-bold tracking-widest border-b border-[#E6C9C5] pb-2 w-fit">
                 <BookOpen className="w-3 h-3" /> English Reference
               </div>
               <div className="space-y-4">
                 <p>There is an experience that has been hidden deep within human history for a very long time, and it is called oneness. Oneness means that we feel as if we are connected—with other people, with the world, and with the entire universe. This feeling is very special because it makes us realize that we are not alone.</p>
                 <p>Since the time of ancient tribes, people have lived together, hunted together, and danced together. In those days, oneness was the image of many hearts beating as one. Today, in our schools, communities, and workplaces, we must still learn how to cooperate. Whenever we say “we,” we are already experiencing a kind of oneness. Sometimes, oneness is the feeling of being together with many people; at other times, it happens between just two. There was a psychologist named Erich Fromm, who studied love. He said that true love does not mean turning the other person into a part of ourselves, but that both people remain who they are—yet meet each other deeply in their hearts.</p>
                 <p>It’s like this: you have a star, and I have a star. When we hold hands, the light from our two stars begins to intertwine. That feeling of “you and I together” is the union of love—two whole beings meeting as one.</p>
                 <p>There is also a deeper kind of oneness—the oneness between human beings and the whole world. In the Bible, there is a verse that says, “I and the Father are one.” In the ancient Chinese classic Zhuangzi, it is written, “Heaven and earth were born together with me; all things and I are one family.” These words tell us that people, nature, the sky, animals, and plants are originally connected. In Buddhism, there is also a beautiful saying: “There is no real difference between myself and all living beings.” It means that all forms of life in this world are interlinked, supporting and helping one another.</p>
                 <p>Therefore, union and oneness are not only ideas found in philosophy or religion—they are also deep longings within the human heart. Whenever the world feels chaotic or divided, we are quietly searching for that place where ourselves, others, and the entire world can once again become one.</p>
               </div>
            </div>
          </section>

          {/* Divider */}
          <div className="flex items-center justify-center opacity-30">
            <div className="h-px bg-[#B13B2E] w-24"></div>
            <div className="mx-4 text-[#B13B2E]">❖</div>
            <div className="h-px bg-[#B13B2E] w-24"></div>
          </div>

          {/* ---------------- SECTION 3: 呼喚的合一 ---------------- */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 border-b border-[#E6C9C5] pb-4">
               <span className="text-[#E67762] font-serif text-5xl font-bold opacity-40">03</span>
               <h2 className={`text-3xl font-bold ${theme.primaryRed}`}>呼喚的合一</h2>
            </div>

            {/* Layout: Magazine Style Zig-Zag */}
            <div className="space-y-20">
               
               {/* Anime 1: Spirited Away (Left Img, Right Text) */}
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-5 w-full">
                     <div className="w-full aspect-[16/9] rounded-lg shadow-md border border-[#E6C9C5] overflow-hidden bg-[#F5F5F0]">
                        <img src="/Photos/H5.png" alt="Spirited Away" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                     </div>
                  </div>
                  <div className="md:col-span-7 space-y-4">
                     <h3 className="text-2xl font-bold text-[#95302E] flex flex-wrap items-baseline gap-2">
                        千與千尋 (2001) <span className="text-sm font-normal text-[#9C8B85] font-serif">Spirited Away</span>
                     </h3>
                     
                     {/* Chinese Translation Included */}
                     <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-3`}>
                        <p>
                           「合一」並非思維所能抵達之處，而是一種內心深處隱蔽的運動——它發生於潛意識之中，往往先於意識的覺察。
                        </p>
                        <p>
                           在《神隱少女》中，千尋進入了一個被剝奪名字的世界。當她成為「小千」時，為了生存，她與湯屋的體制形成了某種<span className="text-[#B93A26] font-bold">假性的融合（pseudo-union）</span>。這是一種暫時性的自我消解，以適應強大的外部系統。然而，透過與白龍的相遇——一位理解並協助她找回自我的存在——她展現了成熟的愛之合一：這不是兩個人的相互消融，而是兩個完整個體在理解與尊重中的真實相遇。
                        </p>
                     </div>

                     {/* English Reference */}
                     <div className="mt-4 p-4 bg-[#F9F8F6] rounded border-l-2 border-[#E67762] text-sm text-[#6B655F] font-serif">
                        <p className="mb-2">There is a special kind of feeling called union. It is not something we can simply think our way into; rather, it is a deep and hidden movement within the heart—something happening in the unconscious, before we are even aware of it.</p>
                        <p>In Spirited Away, there is a girl named Chihiro. She enters a strange world where the witch of the bathhouse, Yubaba, steals her name. From that moment on, she must stay and work hard to survive. When she becomes “the girl without a name,” she slowly begins to blend into the bathhouse world. This kind of pseudo-union is formed for survival—a temporary loss of self to adapt to a powerful system. Yet deep inside, Chihiro still remembers who she is. She meets Haku, a gentle and brave friend who understands her, helps her, and teaches her to trust herself again. This is the mature union of love—not the merging of two people into one, but the meeting of two whole beings through understanding and respect.</p>
                     </div>
                  </div>
               </div>

               {/* Anime 2: Evangelion (Right Img, Left Text - Visual flow) */}
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Text on Left for Desktop */}
                  <div className="md:col-span-7 order-2 md:order-1 space-y-4">
                     <h3 className="text-2xl font-bold text-[#95302E] flex flex-wrap items-baseline gap-2">
                        新世紀福音戰士 (1995) <span className="text-sm font-normal text-[#9C8B85] font-serif">Neon Genesis Evangelion</span>
                     </h3>

                     {/* Chinese Translation Included */}
                     <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-3`}>
                        <p>
                           另一部動畫《新世紀福音戰士》中描繪的「人類補完計畫」，試圖將全人類的心靈融為一體，彷彿所有人的心都熔化在一起。這看似完美的統一，實則是一種<span className="text-[#B93A26] font-bold">合一的幻象（illusion of union）</span>——一個不再有「你」與「我」之分的世界。
                        </p>
                        <p>
                           若無差異，便無距離；若無距離，便無從產生愛、渴望與成長。主角真嗣最終拒絕了此計畫，因為他意識到：儘管差異帶來痛苦，但唯有保有分離，真實的連結才成為可能。
                        </p>
                     </div>

                     {/* English Reference */}
                     <div className="mt-4 p-4 bg-[#F9F8F6] rounded border-l-2 border-[#E67762] text-sm text-[#6B655F] font-serif">
                        <p>Another animation, Neon Genesis Evangelion, tells the story of a boy named Shinji. In the series, there is a plan to make all humankind fuse into one vast mental network—as if everyone’s hearts were melted together. It seems like perfect unity, but it is actually the illusion of union—a world where there is no longer a “you” or an “I.” Without difference, there is no distance; and without distance, there can be no love, no longing, no growth. In the end, Shinji chooses not to start that plan, because he realizes that although difference brings pain, only separation makes genuine union possible.</p>
                     </div>
                  </div>
                  {/* Image on Right for Desktop */}
                  <div className="md:col-span-5 order-1 md:order-2 w-full">
                     <div className="w-full aspect-[16/9] rounded-lg shadow-md border border-[#E6C9C5] overflow-hidden bg-[#F5F5F0]">
                        <img src="/Photos/H6.png" alt="Evangelion" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                     </div>
                  </div>
               </div>

               {/* Anime 3: Princess Mononoke (Left Img, Right Text) */}
               <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-5 w-full">
                     <div className="w-full aspect-[16/9] rounded-lg shadow-md border border-[#E6C9C5] overflow-hidden bg-[#F5F5F0]">
                        <img src="/Photos/H7.png" alt="Princess Mononoke" className="w-full h-full object-cover hover:scale-105 transition duration-700" />
                     </div>
                  </div>
                  <div className="md:col-span-7 space-y-4">
                     <h3 className="text-2xl font-bold text-[#95302E] flex flex-wrap items-baseline gap-2">
                        魔法公主 (1997) <span className="text-sm font-normal text-[#9C8B85] font-serif">Princess Mononoke</span>
                     </h3>

                     {/* Chinese Translation Included */}
                     <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-3`}>
                        <p>
                           在《魔法公主》中，小桑與山犬、森林精靈及山脈本身共生，生活在另一種形式的合一之中——<span className="text-[#B93A26] font-bold">生命的連結（living bond）</span>。
                        </p>
                        <p>
                           她能聽見森林的聲音，與大地一同呼吸。這是一種創造性的、賦予生命的合一，一種既保留了連結，也尊重了彼此差異的關係。透過這些動畫，我們看見了合一的不同面貌：有些是虛假且吞噬性的，有些則是真實且肯定生命的。作為人類的成長，便在於學會分辨：哪一種「在一起」，能讓我們更接近真實的自己。
                        </p>
                     </div>

                     {/* English Reference */}
                     <div className="mt-4 p-4 bg-[#F9F8F6] rounded border-l-2 border-[#E67762] text-sm text-[#6B655F] font-serif">
                        <p className="mb-2">In Princess Mononoke, the girl San, together with the wolves, the forest spirits, and the mountain itself, lives in another form of union—the living bond between humans and nature. She can hear the voice of the forest and breathe together with the land. This is a creative, life-giving union—a relationship that preserves both connection and difference.</p>
                        <p>Through these animations, we can see many kinds of union: some false and devouring, others real and life-affirming. To grow as human beings, we must learn to tell them apart—to recognize which kind of “being together” allows us to come closer to our truest selves.</p>
                     </div>
                  </div>
               </div>
            </div>
          </section>

          {/* Divider */}
          <div className="flex items-center justify-center opacity-30">
            <div className="h-px bg-[#B13B2E] w-24"></div>
            <div className="mx-4 text-[#B13B2E]">❖</div>
            <div className="h-px bg-[#B13B2E] w-24"></div>
          </div>

          {/* ---------------- SECTION 4: 真實與假性的合一 ---------------- */}
          <section>
            <div className="flex items-baseline gap-4 mb-10 border-b border-[#E6C9C5] pb-4">
               <span className="text-[#E67762] font-serif text-5xl font-bold opacity-40">04</span>
               <h2 className={`text-3xl font-bold ${theme.primaryRed}`}>真實與假性的合一</h2>
            </div>
            
            {/* Diagram Placeholder */}
            <div className="mb-10 py-6 border border-dashed border-[#B93A26]/30 rounded-lg bg-[#FAF8F6] text-center">
                <span className="text-sm text-[#9C8B85] font-serif italic">[Diagram: Symbiotic Union vs. Mature Love in Fromm's Theory]</span>
            </div>

            <div className="grid grid-cols-1 gap-10">
               
               {/* 4.1 TRUE UNION - Fixed Height Layout */}
               <div className="rounded-xl overflow-hidden border border-[#E6C9C5] bg-[#FFFCFB] shadow-sm">
                  <div className="px-6 py-4 bg-[#F7EBE9] flex items-center gap-3 border-b border-[#E6C9C5]">
                      <Heart className="w-5 h-5 text-[#B13B2E]" />
                      <h3 className="font-bold text-xl text-[#B13B2E]">真實合一 Union</h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                     {/* Image Container with Fixed Aspect/Width */}
                     <div className="md:w-2/5 min-h-[320px] relative bg-[#F5F0EE] border-r border-[#F0E6E4]">
                        <img src="/Photos/H8.png" alt="True Union" className="absolute inset-0 w-full h-full object-cover" />
                     </div>
                     <div className="md:w-3/5 p-8 space-y-6">
                        <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-4`}>
                           <p>
                              佛洛姆（Fromm）常常思考一個問題：「人怎麼樣，才能在愛裡面，真的和別人連結在一起？」
                              他說，真正的愛不是只想抓住別人，也不是讓自己消失。而是一種成熟的愛——這種愛有一種積極的力量。「積極」的意思是，它會讓人變得更勇敢、更溫柔，能走出孤單的地方。
                           </p>
                           <p>
                              在這種愛裡，我們可以跟別人靠近，但也不會失去自己。你還是「你」，我還是「我」，我們的心能在中間相遇，就像兩棵樹的枝葉，在風裡輕輕碰在一起。佛洛姆說，人不只是在愛裡能這樣，當我們努力工作、創造東西、或和世界做朋友的時候，我們也能感覺到一種「合在一起」的連結。那是一種心裡的溫度，它讓我們不再覺得自己是一個孤單的小點，而是整個世界裡的一部分。
                           </p>
                           <p className="text-xs text-[#9C8B85]">（關於資本主義社會的變革讓人在工作向度的合一斷裂，我們之後會談）</p>
                        </div>
                        
                        {/* English Reference */}
                        <div className="text-sm font-serif text-[#6B655F] bg-[#F9F8F6] p-4 rounded border-l-2 border-[#C5A059]">
                           <div className="flex items-center gap-2 mb-2 text-[#C5A059] uppercase text-xs font-bold tracking-widest">
                             <BookOpen className="w-3 h-3" /> English Reference
                           </div>
                           <p className="mb-2">Erich Fromm, who often pondered a profound question: “How can human beings truly connect with one another through love?” He believed that real love is neither the desire to possess someone nor the disappearance of oneself. Rather, it is a mature form of love—a love that carries an active power. By “active,” Fromm meant a love that makes people braver, gentler, and more capable of stepping out from their loneliness.</p>
                           <p className="mb-2">In this kind of love, we can come close to others without losing ourselves. You remain you, I remain me, and our hearts meet in between—like the branches of two trees, softly touching in the wind. Fromm said that this union is not limited to love between people. When we work with dedication, create something with our hands, or build friendship with the world around us, we can also feel this living sense of union.</p>
                           <p className="mb-2">It is a quiet warmth of the heart—a feeling that we are no longer a lonely little point in the universe, but part of the living wholeness of the world itself.</p>
                           <p className="italic text-xs text-[#8C857B]">(As for how capitalist society has fragmented this sense of union in our relationship with work, we will discuss that later.)</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* 4.2 FALSE UNION */}
               <div className="rounded-xl overflow-hidden border border-[#E6DED9] bg-[#FFFCFB] shadow-sm">
                  <div className="px-6 py-4 bg-[#EEE5E2] flex items-center gap-3 border-b border-[#E6DED9]">
                      <AlertCircle className="w-5 h-5 text-[#95302E]" />
                      <h3 className="font-bold text-xl text-[#95302E]">假性合一 Fusion</h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row">
                     {/* Image Container */}
                     <div className="md:w-2/5 min-h-[320px] relative bg-[#EBE5E3] border-r border-[#E6DED9]">
                        <img src="/Photos/H9.png" alt="False Union" className="absolute inset-0 w-full h-full object-cover" />
                     </div>
                     <div className="md:w-3/5 p-8 space-y-6">
                        <div className={`${theme.textMain} text-lg leading-relaxed text-justify space-y-4`}>
                           <p>
                              有時候，人太害怕孤單，就會選擇一種「假性的合一」。意思是：看起來很親近，其實只是為了逃避自由和害怕孤獨。
                           </p>
                           <ul className="list-disc pl-5 space-y-2 text-[#5E4B45]">
                              <li><span className="font-bold text-[#B13B2E]">順從權威</span>：有些人會聽話到完全不敢說不，讓別人替自己決定一切。他們以為這樣就安全了，其實只是失去了自己的聲音。</li>
                              <li><span className="font-bold text-[#B13B2E]">社會同化</span>：有些人會努力模仿別人，只想要和大家一樣。他們覺得「一樣」才安全，卻慢慢忘了「我是誰」。</li>
                              <li><span className="font-bold text-[#B13B2E]">佔有式的愛</span>：還有些人，會把「愛」誤會成「抓緊不放」。他們想要完全擁有對方，讓對方變成自己的一部分。看起來親密，其實是害怕被拋下。</li>
                           </ul>
                           <p>
                              佛洛姆說，這些看起來都像是「在一起」，但其實只是暫時麻醉的孤單。就像吃很多糖一樣——會讓人覺得開心一會兒，但心裡的空洞沒有真的消失。
                              所以，有些人就會不斷想要更多的東西：更多玩具、更多快樂、更刺激的事，可是越多，他們心裡越是荒蕪的像是一片沙漠。
                           </p>
                           <p className="text-xs text-[#9C8B85]">（有關BDSM是如何成為一種假性合一的方式，我們之後會談）</p>
                        </div>
                        
                        {/* English Reference */}
                        <div className="text-sm font-serif text-[#6B655F] bg-[#F9F8F6] p-4 rounded border-l-2 border-[#95302E]">
                           <div className="flex items-center gap-2 mb-2 text-[#95302E] uppercase text-xs font-bold tracking-widest">
                             <BookOpen className="w-3 h-3" /> English Reference
                           </div>
                           <p className="mb-2">Sometimes, people are so afraid of being alone that they choose a kind of pseudo-union—a way of being “together” that only hides their fear of freedom and loneliness. It may look like closeness, but in truth, it is only an escape.</p>
                           <p className="mb-2">For example, some people obey others so completely that they no longer dare to say “no.” They let others make every decision for them. Fromm called this submission to authority. Such people believe obedience will keep them safe, but in doing so, they lose their own voice.</p>
                           <p className="mb-2">Others try hard to imitate everyone around them, wanting only to be the same as others. This is social conformity—the belief that sameness brings security. Yet, as they blend in, they slowly forget the question, “Who am I?”</p>
                           <p className="mb-2">Still others mistake possessive love for real love. They cling to the other person so tightly that they try to make the other a part of themselves. It may look intimate, but it is actually the fear of being left behind. Fromm said that these forms of closeness are not true connection; they are only temporary anesthesia for loneliness—like eating too much sugar: it feels sweet for a moment, but the emptiness inside never truly disappears.</p>
                           <p className="mb-2">That is why some people keep craving for more—more toys, more pleasure, more excitement—yet the more they gain, the more their inner world turns barren, like a vast and silent desert.</p>
                           <p className="italic text-xs text-[#8C857B]">(How certain practices, such as BDSM, can also function as a form of pseudo-union will be discussed later.)</p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </section>

        </div>

        {/* Footer */}
        <footer className="bg-[#FAF8F5] py-16 text-center border-t border-[#E6DED9]">
            <div className="mb-6">
                <Feather className="w-8 h-8 text-[#E67762] mx-auto opacity-50" />
            </div>
            <p className="text-[#9C8B85] text-sm font-serif tracking-widest">© 2026 Academic Research Note. All rights reserved.</p>
        </footer>

      </article>
    </div>
  );
};

export default AcademicNewsletter;