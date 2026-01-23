'use client';

import React from 'react';
import { 
  Quote, 
  ArrowRight,
  Sparkles,
  Flower,
  Leaf
} from 'lucide-react';

export default function IndexPage() {
  // Theme Colors
  // Base: #F8F8EC (Cream)
  // Accents: #A3BFA7 (Sage), #BAC680 (Olive), #79976B (Forest), #E2C351 (Mustard)
  
  return (
    <div className="min-h-screen bg-[#F8F8EC] font-sans text-[#3A4535] overflow-x-hidden selection:bg-[#E2C351] selection:text-white">

      {/* ================= HERO SECTION: 思想的存在 ================= */}
      <section className="relative pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#BAC680] rounded-full opacity-20 -z-10 mix-blend-multiply"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E2C351] rounded-full opacity-40 -z-10"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Area */}
          <div className="lg:col-span-5 relative z-10">
            <div className="mb-8 relative inline-block">
              <Quote className="w-8 h-8 text-[#E2C351] absolute -top-6 -left-6 opacity-60" />
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#2F3A29] leading-tight tracking-wide">
                這裡是為了提供<br/>
                <span className="text-[#79976B] border-b-4 border-[#E2C351]/50">能被人使用的思想</span><br/>
                而存在。
              </h1>
            </div>
            <div className="space-y-4 text-lg text-[#5C6155] font-light leading-loose">
              <p>一句話、一個觀點、一種看事情的方式。</p>
              <p>讓別人比較容易找到我，也比較容易理解我。</p>
            </div>
          </div>

          {/* Collage Area */}
          <div className="lg:col-span-7 relative h-[600px] w-full">
            {/* id02: 放射狀光源 (Energy Node) */}
            <div className="absolute top-0 right-4 w-[400px] z-10 p-2 bg-white shadow-lg rotate-2">
              <img 
                src="https://cwjen.vercel.app/Photos/Index/id02.png" 
                alt="放射狀光源自中心擴散" 
                className="w-full h-auto"
              />
            </div>
            
            {/* id05: 植物生長 (Growth) */}
            <div className="absolute bottom-10 left-10 w-[320px] z-20 p-2 bg-white shadow-xl -rotate-3 border-b-8 border-[#79976B]">
              <img 
                src="https://cwjen.vercel.app/Photos/Index/id05.png" 
                alt="植物枝葉斜向延伸" 
                className="w-full h-auto"
              />
            </div>

            {/* Decorative Block */}
            <div className="absolute bottom-0 right-20 w-48 h-64 bg-[#A3BFA7] opacity-50 -z-0 rounded-t-full"></div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: 心理治療的理解 ================= */}
      <section className="py-24 bg-[#A3BFA7]/10 border-t border-[#A3BFA7]/30">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Collage Images */}
          <div className="relative order-2 lg:order-1 h-[500px]">
             {/* id01: 行走 (Action) */}
             <div className="absolute top-0 left-0 w-[300px] z-10 shadow-md">
                <img 
                  src="https://cwjen.vercel.app/Photos/Index/id01.png" 
                  alt="單一人物向前行走" 
                  className="w-full h-auto"
                />
             </div>
             {/* id09: 觸及光源 (Awareness) */}
             <div className="absolute bottom-0 right-0 w-[320px] z-20 border-4 border-white shadow-xl">
                <img 
                  src="https://cwjen.vercel.app/Photos/Index/id09.png" 
                  alt="單一人物向上伸展並觸及光源" 
                  className="w-full h-auto"
                />
             </div>
             <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#E2C351] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-3xl font-serif font-bold text-[#79976B] flex items-center gap-3">
              <Sparkles className="w-6 h-6" /> 關於心理工作
            </h2>
            <div className="space-y-6 text-[#4A5245] text-lg leading-loose font-light">
              <p>這裡的文字，大多來自我對心理工作的理解。</p>
              <p className="pl-4 border-l-2 border-[#BAC680]">
                不是教學，也不是課程。<br/>
                而是關於人在心理治療與諮商中，實際經驗到的事情。
              </p>
              <p>
                如果你曾經好奇，心理治療到底在做什麼。<br/>
                治療師和你之間，究竟發生了什麼。<br/>
                那些談話、沉默、回憶與反思，是如何在你身上留下痕跡。
              </p>
              <p>這裡有一些書寫，試著靠近那些經驗，讓它們變得可理解。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: 團體治療 (3 Images) ================= */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-20 left-[-100px] w-[400px] h-[400px] bg-[#79976B] rounded-full opacity-10 -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Text */}
            <div className="lg:col-span-5 space-y-8 pt-10">
              <h2 className="text-3xl font-serif font-bold text-[#2F3A29] mb-6 relative inline-block">
                團體中的獨特經驗
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#BAC680]/40 -z-10"></span>
              </h2>
              <div className="space-y-6 text-[#5C6155] leading-loose">
                <p>
                  我也長期關注團體心理治療。<br/>
                  在台灣，團體治療並不容易被接受。<br/>
                  我們珍惜休息，也習慣把事情留在家裡。<br/>
                  家醜不外揚，說出口好像有點丟臉。
                </p>
                <p>
                  但這樣的文化，同時也形成了一些困境。<br/>
                  孤獨、缺乏被理解的經驗，關係停留在眼前，卻難以深化。
                </p>
                <div className="bg-white p-6 shadow-sm border-l-4 border-[#E2C351]">
                  <p className="font-medium text-[#3A4535]">
                    在團體中被接納，是一種很不一樣的經驗。<br/>
                    那和治療師的角色不同。
                  </p>
                </div>
                <p>
                  我曾聽過來訪者說，那只是因為你是治療師。<br/>
                  這句話反映的，往往是對人的不信任。<br/>
                  而團體所提供的，是來自他人的回應。<br/>
                  不是職責，而是人與人之間自然會發生的事。
                </p>
                <p>
                  那種被接住的經驗，能讓人重新感覺安全。<br/>
                  也讓對世界的信任慢慢回來。<br/>
                  這正是團體的獨特之處。<br/>
                  它常常帶來意想不到的收穫。<br/>
                  那些，是我在個別治療中看不到，卻在團體裡反覆遇見的。
                </p>
              </div>
            </div>

            {/* Right Collage (3 Images) */}
            <div className="lg:col-span-7 relative min-h-[800px]">
               {/* id11: 枝葉交織 (Boundary) */}
               <div className="absolute top-0 left-10 w-[380px] z-10 shadow-lg border-8 border-[#F8F8EC]">
                  <img src="https://cwjen.vercel.app/Photos/Index/id11.png" alt="弧形枝葉彼此交織" className="w-full h-auto"/>
               </div>

               {/* id06: 同步跳躍 (Resonance) */}
               <div className="absolute top-[280px] right-0 w-[400px] z-20 shadow-2xl rotate-2">
                  <img src="https://cwjen.vercel.app/Photos/Index/id06.png" alt="兩人同步跳躍於光暈前景" className="w-full h-auto"/>
               </div>

               {/* id10: 相互依靠 (Support) */}
               <div className="absolute bottom-0 left-20 w-[420px] z-30 border-t-8 border-[#A3BFA7] shadow-xl -rotate-2">
                  <img src="https://cwjen.vercel.app/Photos/Index/id10.png" alt="兩人相互依靠而坐" className="w-full h-auto bg-white"/>
               </div>
               
               {/* Geometric Fillers */}
               <div className="absolute top-40 right-20 w-32 h-32 bg-[#E2C351] rounded-full opacity-30 -z-10"></div>
               <div className="absolute bottom-40 left-0 w-48 h-64 bg-[#BAC680] opacity-30 -z-10"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: 多元觀點 (Perspective) ================= */}
      <section className="py-24 bg-[#E2C351]/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="relative">
             {/* id03: 對坐連線 (Relation) */}
             <div className="relative z-20 mb-[-40px] ml-10 w-[350px] shadow-lg">
                <img src="https://cwjen.vercel.app/Photos/Index/id03.png" alt="兩人對坐並以線條相連" className="w-full h-auto border-4 border-white"/>
             </div>
             {/* id12: 擁抱 (Intimacy) */}
             <div className="relative z-10 w-[300px] border-4 border-[#BAC680]">
                <img src="https://cwjen.vercel.app/Photos/Index/id12.png" alt="兩人相互擁抱" className="w-full h-auto"/>
             </div>
          </div>

          <div className="space-y-6 text-[#4A5245]">
            <h3 className="text-2xl font-serif font-bold text-[#79976B]">多元的觀點與實踐</h3>
            <p className="leading-loose">
              這個網站同時也嘗試提供多元的觀點。<br/>
              不是告訴你該怎麼想，而是邀請你換一個角度看事情。<br/>
              心理教育，在這裡比較像是一種思考的開放。<br/>
              讓問題不只剩下一條路，也不急著被解決。
            </p>
            <div className="p-6 bg-white rounded-lg shadow-sm border border-[#BAC680]/30">
              <p className="leading-relaxed">
                有些思想，也實際進入過不同的場域。<br/>
                那些被執行過的專案，是我如何把觀點帶進現實的痕跡。<br/>
                它們不是成果展示，而是實際工作的過程與留下來的東西。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: 邀請 (The Door) ================= */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center relative">
        <div className="w-full max-w-2xl mb-12 relative z-10">
           <h2 className="text-3xl font-serif font-bold text-[#2F3A29] mb-8">接下來，是一個邀請。</h2>
           <p className="text-xl text-[#5C6155] leading-relaxed">
             不是要你理解什麼。<br/>
             也不是要你學會什麼。<br/>
             而是停一下，回到你自己。<br/>
             如果你願意，可以慢慢讀下去。
           </p>
        </div>

        {/* id08: 門 (Transition) - Focal Point */}
        <div className="relative w-full max-w-[500px] mx-auto z-10 p-4 bg-white shadow-2xl">
           <img src="https://cwjen.vercel.app/Photos/Index/id08.png" alt="敞開的門通向林間小徑" className="w-full h-auto"/>
        </div>
        
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#A3BFA7] -z-10"></div>
      </section>

      {/* ================= SECTION 5: 提問與反思 (The Questions) ================= */}
      <section className="py-24 px-6 bg-[#79976B]/5">
        <div className="max-w-4xl mx-auto space-y-24">
          
          {/* Group 1: Self & Feeling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
             <div className="space-y-6 text-lg leading-loose text-[#3A4535]">
                <p>你怎麼看待自己。<br/>你怎麼看待事情。</p>
                <p>你和別人相處的經驗是什麼。<br/>和其他人在一起的時候，你心裡通常是什麼感覺。</p>
                <p>你會談論自己的心嗎。</p>
                <p>做決定的時候，你通常是怎麼做的。<br/>那個過程，你享受嗎。</p>
                <p className="text-[#79976B] font-medium">
                  它比較像纏在一起的毛線，<br/>
                  還是像站在山頂時的一陣清爽的微風。
                </p>
             </div>
             {/* id04: 躍起 (Release) */}
             <div className="relative p-2 bg-white shadow-md rotate-1">
                <img src="https://cwjen.vercel.app/Photos/Index/id04.png" alt="兩人同時躍起並向外伸展" className="w-full h-auto"/>
             </div>
          </div>

          {/* Group 2: Body & Relationships */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
             {/* id13: 花朵 (Nourishment) */}
             <div className="order-2 md:order-1 relative rounded-full overflow-hidden border-8 border-[#F8F8EC] shadow-xl w-[350px] h-[350px] mx-auto">
                <img src="https://cwjen.vercel.app/Photos/Index/id13.png" alt="花朵與枝葉圍繞圓形留白" className="w-full h-full object-cover scale-110"/>
             </div>
             
             <div className="order-1 md:order-2 space-y-6 text-lg leading-loose text-[#3A4535]">
                <p>你能感覺到自己嗎。<br/>你能感覺到身體正在發生的感覺嗎。</p>
                <p>通常你會做些什麼。</p>
                <p>你和媽媽的關係怎麼樣。<br/>你有兄弟姊妹嗎。</p>
                <p>你談過戀愛嗎。<br/>對你來說，愛是什麼。</p>
                <p>你有真正喜歡的事嗎。<br/>當你壓力很大的時候，你都怎麼辦。</p>
             </div>
          </div>

          {/* Group 3: Deep Dive & Conclusion */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
             <div className="space-y-6 text-lg leading-loose text-[#3A4535]">
                <p>你和自己的關係怎麼樣。<br/>你愛自己嗎。<br/>你有愛的人嗎。</p>
                <p>有沒有一些事情，你其實很想忘記，<br/>卻怎麼樣也忘不了。</p>
                <p>即使很多人告訴你放下，你還是放不下。<br/>聽起來，心裡好像埋了很多東西。</p>
                <p className="font-bold text-[#79976B]">那些是什麼。</p>
                <p>我們要把它打開嗎。<br/>我們能打開嗎。<br/>如果要開始，可以怎麼開始。</p>
                <p>它和你的信仰有關嗎。<br/>和你的身體有關嗎。</p>
                <p>它對你的人生造成了什麼影響。</p>
                <div className="pt-8 border-t border-[#BAC680]">
                  <p className="text-xl font-serif text-[#2F3A29]">
                    這些經驗，從哪裡來。<br/>
                    又要往哪裡去。
                  </p>
                </div>
             </div>

             {/* id14: 朝向光源 (Moving Forward) */}
             <div className="relative">
                <div className="absolute top-[-20px] right-[-20px] w-full h-full bg-[#A3BFA7] -z-10 rounded-tr-[50px]"></div>
                <img src="https://cwjen.vercel.app/Photos/Index/id14.png" alt="單一人物朝向光源行走" className="w-full h-auto shadow-lg rounded-tr-[50px]"/>
             </div>
          </div>

        </div>
      </section>

      {/* Decorative Footer Element */}
      <div className="h-4 w-full bg-gradient-to-r from-[#A3BFA7] via-[#E2C351] to-[#79976B]"></div>

    </div>
  );
}