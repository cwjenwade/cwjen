import React from 'react';
import Image from 'next/image';
// 引入同層目錄的圖片 (根據您的截圖)
import R01 from './R01.jpg';
import R02 from './R02.png';
import R03 from './R03.png';
import R04 from './R04.png';

// 引入精緻的圖示 (Lucide React)
import { 
  Quote, 
  Sprout, 
  Users, 
  Fingerprint, 
  HeartHandshake, 
  Compass, 
  Sparkles, 
  Feather, 
  Sun,
  BookOpen
} from 'lucide-react';

const PersonCenteredPage = () => {
  return (
    <div className="min-h-screen bg-[#FDFBFB] text-[#555555] font-serif selection:bg-[#EBCBCE] selection:text-[#4A4A4A]">
      {/* 頂部裝飾線：象徵金線與柔和的邊界 */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EBCBCE] via-[#D4A373] to-[#EBCBCE] z-50"></div>

      <main className="max-w-4xl mx-auto px-6 md:px-12 py-24">
        
        {/* Header / Intro Section */}
        <header className="mb-24 space-y-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
               <Sparkles size={16} className="text-[#D4A373]" />
               <h2 className="text-[#D4A373] tracking-[0.3em] text-sm uppercase">Psychotherapy</h2>
               <Sparkles size={16} className="text-[#D4A373]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-medium text-[#4A4A4A] tracking-wide mb-2">Person Centered Approach</h1>
            <div className="w-16 h-[1px] bg-[#D4A373] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8">
            {/* R01: Carl Rogers Image */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full border border-[#EBCBCE] p-3 bg-white shadow-[0_10px_30px_-10px_rgba(235,203,206,0.5)]">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F9F3F4]">
                  <Image 
                    src={R01} 
                    alt="Carl Rogers Portrait" 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    placeholder="blur"
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[#4A4A4A]">
                <Feather size={14} className="text-[#D4A373]" />
                <p className="text-lg font-medium tracking-widest">Carl Rogers</p>
              </div>
            </div>

            {/* Bio Text */}
            <div className="md:col-span-7 space-y-6 text-justify leading-loose font-light text-[#666]">
              <p>
                美國臨床心理學家、人本主義心理學的重要奠基者。他提出「個人中心」理論（Person-Centered Theory，又稱Client-Centered Therapy），強調人的主觀經驗與自我成長潛能，對心理治療、教育與人際關係影響深遠。
              </p>
              <p>
                Rogers 出生於美國伊利諾州，早期學習神學，後轉向心理學，並於哥倫比亞大學取得博士學位。20世紀中葉，他與 Abraham Maslow 共同推動「第三勢力心理學」（The Third Force），倡導以人為中心的成長觀。代表著作包括《On Becoming a Person》（1961）與《A Way of Being》（1980）。
              </p>
            </div>
          </div>
        </header>

        {/* Metaphor Section: Oak Seed */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* R02: Oak/Seed Image */}
            <div className="order-2 md:order-1 relative aspect-square bg-gradient-to-br from-[#FDFBFB] to-[#F5E6E8] rounded-full flex items-center justify-center border border-[#EBCBCE]/50 p-6 shadow-inner">
               <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                 <Image 
                    src={R02} 
                    alt="Oak Seedling Metaphor" 
                    fill 
                    className="object-cover"
                  />
               </div>
               {/* 裝飾性圖示 */}
               <div className="absolute -right-2 top-10 bg-white p-2 rounded-full border border-[#D4A373]/30 shadow-sm">
                 <Sprout size={20} className="text-[#D4A373]" />
               </div>
            </div>

            <div className="order-1 md:order-2 space-y-10">
              <div className="relative pl-8 border-l-2 border-[#D4A373]">
                <Sun size={24} className="absolute -left-[13px] -top-1 text-[#D4A373] bg-[#FDFBFB]" />
                <h3 className="text-2xl text-[#4A4A4A] mb-4 font-medium">一顆橡樹的種子</h3>
                <p className="leading-loose text-sm md:text-base text-[#666]">
                  只要有陽光、水分和養分，種子自然會長成一棵健康的大樹；但如果環境裡充滿冷漠、批評、誤解或虛偽，它的成長就會被阻礙。
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-[#EBCBCE]">
                <HeartHandshake size={24} className="absolute -left-[13px] -top-1 text-[#EBCBCE] bg-[#FDFBFB]" />
                <h3 className="text-2xl text-[#4A4A4A] mb-4 font-medium">心的成長也是</h3>
                <p className="leading-loose text-sm md:text-base text-[#666]">
                  當我們身邊的人能夠真誠地對待我們、願意理解我們、接納我們原本的樣子，我們內在的潛能就會慢慢展開，成為自己能成為的樣子。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Influences Section */}
        <section className="mb-24 bg-white p-12 shadow-[0_4px_30px_-15px_rgba(212,163,115,0.2)] border-t border-[#EBCBCE] rounded-sm">
          <div className="flex flex-col items-center mb-12">
            <Users size={32} className="text-[#D4A373] mb-4 opacity-80" />
            <h2 className="text-center text-2xl text-[#4A4A4A] tracking-widest">誰影響Rogers形成個人中心治療</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {[
              { name: "Otto Rank", text: "認為心理治療不應再只談本我、自我、超我，而是要幫助人發揮自己的創造力，學會接納獨特的自己，並勇於對生活負責。治療師不再是高高在上的專家，而是一個真誠、願意陪伴、沒有批判的助人者。" },
              { name: "Alfred Adler", text: "強調每個人都有自己的價值，而且要與他人建立良好的人際關係。他覺得人是整體的存在，透過創造力和責任感去成長。這種「關心別人、在關係中找到意義」的觀點，也影響了後來的 Rogers。" },
              { name: "Martin Buber", text: "認為真正的關係是一種「我—你」的互動，不是把別人當作工具，而是把他當作一個完整的人。Rogers 也受到這個觀點啟發，重視「當下的相遇」與「每個人主觀的生命經驗」。" },
              { name: "Abraham Maslow", text: "Maslow 把自我實現擴展成「需求層次理論」，強調除了基本需求之外，人也渴望愛、創造力，以及那種讓人感到深深滿足與感動的「高峰經驗」。這種看待人性的方式很正向，也被稱為「人本主義」。" }
            ].map((person, idx) => (
              <div key={idx} className="space-y-3 group">
                <h4 className="text-[#D4A373] font-bold text-lg border-b border-[#EBCBCE] pb-2 inline-flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#EBCBCE] rounded-full group-hover:bg-[#D4A373] transition-colors"></span>
                  {person.name}
                </h4>
                <p className="text-sm leading-8 text-[#666] text-justify">
                  {person.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Fully Functioning Person */}
        <section className="mb-24 text-center space-y-8 py-16 bg-gradient-to-b from-[#F5E6E8]/30 to-transparent rounded-lg border border-[#fff]">
          <div className="flex justify-center">
            <Compass size={40} strokeWidth={1} className="text-[#D4A373]" />
          </div>
          <h3 className="text-3xl text-[#4A4A4A] tracking-wider font-light">全然發揮的人</h3>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-[#666]">全然發揮的人沒有防衛，會開放新經驗而不刻意去控制他們。</p>
            <p className="text-[#D4A373] font-medium text-lg tracking-wide border-y border-[#D4A373]/30 py-4 inline-block px-8">
              「自我實現」朝向自我了解，自我成長，自主，自我決定邁進
            </p>
            <div className="flex justify-center gap-2 text-[#EBCBCE]">
              <span>✦</span><span>✦</span><span>✦</span>
            </div>
            <p className="italic text-[#555] font-light">深入一個人內在的核心，將會發現存在著一個值得信任，積極正向的心靈</p>
          </div>
        </section>

        {/* Theory of Self */}
        <section className="mb-24 space-y-12">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center gap-3 mb-4">
               <Fingerprint size={28} className="text-[#D4A373]" />
               <h2 className="text-3xl text-[#4A4A4A] font-light">Rogers對人性本質的看法 - 論自我 self</h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#EBCBCE] to-transparent mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-start">
             <div className="flex-1 space-y-6 text-justify leading-loose text-[#555]">
                <p>
                  Rogers 的現象邏輯論（phenomenological theory） 強調，每個人對外在世界與內在經驗的覺察皆不相同，而這些被覺察到的內容構成了個人的 現象場域（phenomenal field）。現象場域是個體理解世界與行為的核心基礎，也是主導人類經驗的內在座標。他的理論亦被稱為 自我理論（self-theory）。
                </p>
                <p>
                  每個人的 自我概念（self-concept） 都是在與環境互動的過程中逐漸形成的。自我（self）是人格結構中最核心的要素，具有組織性、創造性與適應性，並對個體的行為產生決定性的影響。自我包含主詞的「我（I）」與受詞的「我（me）」兩個面向。 人在與他人及世界的互動中，會逐步將這兩種經驗整合起來，形成具有獨特價值與意義的自我概念。這個整合歷程讓人能在不斷的經驗與關係中，發展出屬於自己的存在方式。
                </p>
             </div>
             
             {/* R03: Phenomenal Field Image */}
             <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] w-full border border-dashed border-[#D4A373] bg-white p-2 shadow-sm rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="relative w-full h-full bg-[#FDFBFB] overflow-hidden">
                     <Image 
                        src={R03} 
                        alt="Phenomenal Field Diagram" 
                        fill 
                        className="object-contain p-4"
                     />
                  </div>
                  <span className="absolute -bottom-8 right-0 text-xs text-[#D4A373] font-sans tracking-widest uppercase flex items-center gap-1">
                    <BookOpen size={12} />
                    Phenomenal Field
                  </span>
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
            <div className="bg-white p-8 border-t-2 border-[#EBCBCE] hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-[#D4A373] mb-4 font-bold tracking-wide flex items-center gap-2">
                <Sparkles size={16} /> 每個人的經驗都是獨特的
              </h4>
              <p className="text-sm leading-7 text-[#666] text-justify">
                人以自身所覺察的領域來界定 現實世界（reality），並以當下的 知覺（perception） 與環境互動。每段經驗對個體而言都具有獨一無二的意義，唯有親身經歷者能深切體驗其中的真實感受。沒有人能僅憑外在觀察完全理解他人的內心世界。
              </p>
            </div>
            
            <div className="bg-white p-8 border-t-2 border-[#D4A373] hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-[#D4A373] mb-4 font-bold tracking-wide flex items-center gap-2">
                <Sprout size={16} /> 自我概念的形成與環境密不可分
              </h4>
              <p className="text-sm leading-7 text-[#666] text-justify">
                個體對環境的反應，以及父母、朋友、教師的態度，都會影響自我概念的界定。一旦自我概念形成，便不易改變。然而，人在與環境的互動中，仍能逐漸發現自身的獨特性，並從他人的回饋與社會脈絡中發展出一個有組織、整合而一致的自我。若要理解一個人的行為，必須從他的 內在參考架構（internal frame of reference） 出發，去理解他如何知覺並詮釋世界。
              </p>
            </div>

            <div className="bg-white p-8 border-t-2 border-[#D4A373] hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-[#D4A373] mb-4 font-bold tracking-wide flex items-center gap-2">
                <Compass size={16} /> 每個人都具有追求自我實現的傾向
              </h4>
              <p className="text-sm leading-7 text-[#666] text-justify">
                所有有機體都有向成長與整合前進的自然動力，只要生命仍在，這股力量就不會消失。人渴望一個能促進發展的環境，並在其中不斷學習與成長。人的行為是 目標導向（goal-directed） 的，為了在所處的環境中滿足需求而展開；行為本身是對環境的回應，而覺察與需求的關係會影響行為的方向。
              </p>
            </div>

            <div className="bg-white p-8 border-t-2 border-[#EBCBCE] hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-[#D4A373] mb-4 font-bold tracking-wide flex items-center gap-2">
                <Feather size={16} /> 當人願意改變自己時，行為便有可能轉變
              </h4>
              <p className="text-sm leading-7 text-[#666] text-justify">
                即使在情緒低落或自我批評的時刻，人仍能透過覺察激發新的行為模式，使更健康的反應逐漸浮現。自信心深刻影響著個體解決問題的能力。 行為通常與自我概念一致：消極的行為往往反映出消極的自我概念；積極、樂觀的行為則源於整合且自信的自我概念。自我信任與問題解決能力息息相關。
              </p>
            </div>
          </div>
          
          <div className="bg-[#D4A373]/10 p-10 text-center italic text-[#5D5D5D] leading-relaxed relative rounded-sm">
            <Quote size={40} className="absolute top-4 left-4 text-[#D4A373]/20" />
            <span className="font-bold not-italic text-[#D4A373] block mb-2 text-lg">人性是可以被信任的。</span>
            只要環境真誠、安全並充滿接納與理解，每個人都會自然地朝向更整合、更具創造力與更真實的生命狀態發展。
            <Quote size={40} className="absolute bottom-4 right-4 text-[#D4A373]/20 rotate-180" />
          </div>
        </section>

        {/* Becoming Yourself */}
        <section className="mb-24">
          <h2 className="text-3xl text-[#4A4A4A] mb-8 font-light flex items-center gap-3">
             <span className="w-8 h-[1px] bg-[#4A4A4A]"></span>
             成為自己
          </h2>
          <div className="space-y-6 leading-loose text-justify text-[#555]">
            <p>人們有時會誤把他人的觀點當作自己的。</p>
            <p>
              每個經驗本有其獨特價值，而價值感原應由自己給予，但我們卻容易將他人賦予的評價內化為自身的看法，以為那就是「我」的感受。於是，生命中許多經驗的意義被外界的眼光所取代。也有些時候，我們會忽略與自我架構不相符的訊息。人在與環境互動時，往往只接納那些與自己概念一致的訊息，至於那些顯得陌生、不相關、甚至挑戰自我形象的內容，則會被否定或屏蔽。如此一來，自我不再是一個開放流動的系統，而變得封閉而僵化。
            </p>
            <p>
              帶來威脅感的訊息也常被拒絕。當別人批評自己「不好」或「沒有價值」時，本能的反應是防衛與否認。然而，如果這些訊息具有真實性，Rogers提醒我們應嘗試去面對它，誠實地審視其內容，並思考是否能將其整合進自我架構之中。
            </p>
            <p>
              當一個人遭遇這些瓶頸時，Rogers主張要採取一種開放的態度。學習去接受那些暫時與自我概念不一致的經驗，是擴展自我架構的重要一步。隨著自我愈加強健，人就能有能力去安排、管理自己的行為與反應。他也強調，應讓自己先充分體驗，再進行評價。Rogers相信自我具有統整的力量。自我是一個有組織、有整合能力的有機體，只要給予空間與信任，它便會自然發展成為整合而充滿生命力的整體。而這樣的歷程，也與他最深的信念相呼應：要能接受他人，必須先能誠實地接受自己。
            </p>

            <div className="py-8">
              <h3 className="text-xl text-[#4A4A4A] mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-[#EBCBCE]" />
                在勇於當自己的歷程中，Rogers提出了幾個關鍵的轉折。
              </h3>
              <p>
                人不需要被「必須」的指令所束縛。那些「應該」與「必須」往往讓我們努力成為他人期望的樣子，卻失去與自己內在有機體的連結。當我們為了滿足他人的期望而活，漸漸就忘了自己真正渴望的是什麼。唯有停止取悅他人，並願意為自己的方向負責，人才能重新聽見內在的聲音。Rogers在自己的生命中，也曾深刻體驗「不再假裝」的意義。他坦白地說：
              </p>
              
              <blockquote className="relative border-l-4 border-[#EBCBCE] pl-8 my-8 text-[#666] italic bg-[#FAFAFA] py-6 pr-4">
                「沒有人能愛我，即使他們喜歡我做的事；我其實是一個不可愛的人，只是在裝堅強。我發現自己最深的問題，是無法喜歡或愛自己。我們無法改變，也無法離開自己，直到我們徹底接受自己。那時改變幾乎會不知不覺地發生。」（Rogers, 1961）
              </blockquote>
              
              <p>從看見「不可愛的自己」、到深刻接納，再到坦然，這正是Rogers所說的「成為自己」的歷程。</p>
            </div>

            <div>
              <h3 className="text-xl text-[#4A4A4A] mb-4 flex items-center gap-2">
                <Sprout size={18} className="text-[#D4A373]" />
                成為自己，也意味著迎向每一個新的經驗。
              </h3>
              <p>
                並允許自己在變化中成長。Rogers認為人應該享受這個朝向複雜與整合的過程。當一個人能夠對自己誠實地開放時，他也會自然地學習接受他人。這樣的精神在Rogers後期推動的「會心團體」中體現得最為鮮明。該團體以提升生活的有效性與滿足感為目標，參與者踴躍。Rogers自我定位為「促進者」（facilitator），而非權威的指導者，並在開場時這樣說：
              </p>
              
              <blockquote className="relative border-l-4 border-[#D4A373] pl-8 my-8 text-[#666] italic bg-[#FDFBF9] py-6 pr-4">
                「好了，我們在這裡。我現在有點緊張，也不知道會發生什麼。這個團體會變成什麼樣子，端看我們自己。而我同時也感到興奮，渴望認識各位。」
              </blockquote>
              
              <p>於此體現了他對人性最深的信念——當人願意真誠地面對自己，生命便會自然朝向成長與整合。</p>
            </div>
          </div>
        </section>

        {/* Therapy Goals & Relationship */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Therapy Goals */}
           <div>
             <h2 className="text-2xl text-[#4A4A4A] mb-6 font-light border-b border-[#EBCBCE] pb-2 inline-flex items-center gap-3">
               <Compass size={22} className="text-[#EBCBCE]" />
               治療目標
             </h2>
             <div className="space-y-4 text-justify text-sm leading-7 text-[#666]">
               <p>
                 治療的目的是協助當事人建立完整的獨立性與整合能力。當一個人能更真實地面對自己，就能在面對問題時展現調適性，與困境共處而不被吞沒。在安全與接納的治療關係中，當事人需要揭下社會化過程中形成的面具，重新接觸真實的自我。當他開始信任自己、體驗更多的可能性時，就能開放地活出「真實的自我」（authentic self），並逐漸培養自我指導的態度（self-directed attitude），不再為取悅他人而活。
               </p>
               <p>
                 知覺越真實，行為越能調整。 當人的自我覺察增強，就更能面對現實、減少防衛。治療師的任務不是替個案設定目標，而是創造一個促進成長的情境，讓人在理解與關懷中恢復自我的正向能量，成為一個更能自我運作的完整個體。
               </p>
             </div>
           </div>

           {/* Therapy Relationship */}
           <div>
             <h2 className="text-2xl text-[#4A4A4A] mb-6 font-light border-b border-[#D4A373] pb-2 inline-flex items-center gap-3">
               <HeartHandshake size={22} className="text-[#D4A373]" />
               治療關係
             </h2>
             <div className="space-y-4 text-justify text-sm leading-7 text-[#666]">
               <p>
                 當治療者能提供一種真誠且獨特的關係，使當事人感受到自己有能力在這樣的關係中成長與改變時，個人的成長就會自然發生。
               </p>
               {/* R04: Therapy Relationship Image */}
               <div className="my-6 relative w-full h-48 rounded-sm overflow-hidden border border-[#D4A373]/30">
                 <Image 
                    src={R04} 
                    alt="Therapy Relationship Atmosphere" 
                    fill 
                    className="object-cover opacity-90 hover:opacity-100 transition-opacity"
                 />
               </div>
               <p>
                 這段關係的形成，必須建立在幾個基本條件之上。首先，兩個人之間必須有真實的心理接觸；其次，當事人正經驗著不一致（incongruence）或焦慮的狀態；同時，治療者在關係中能保持一致（congruence）與真誠（genuineness），讓當事人感受到其真實存在。
               </p>
               <p>
                 治療者需展現對當事人的無條件正向關懷（unconditional positive regard）， 並能深刻理解當事人的內在參考架構（internal frame of reference），努力以可被感受到的方式傳達這份理解。當這種同理性理解（empathic understanding）與無條件正向關懷被有效地傳遞時，治療關係便成為促進改變的核心力量。
               </p>
               <p>
                 治療者以接納的方式傾聽當事人的聲音，當事人也會學習接納並傾聽自己內在的聲音。 當他感受到治療者真心的關懷與理解，就會逐漸意識到自己的價值，並願意卸下防衛，放下虛假的面具。在這樣真誠的關係中，當事人得以真實地面對自己，開啟自我成長的契機。
               </p>
             </div>
           </div>
        </section>

        {/* 14 Learnings */}
        <section className="mb-24 py-20 bg-[#FDFBFB] relative overflow-hidden">
          {/* 背景裝飾 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#EBCBCE]/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4A373]/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="text-center mb-16">
            <Feather size={32} className="text-[#D4A373] mx-auto mb-4" />
            <h2 className="text-3xl text-[#4A4A4A] tracking-wide font-light">Rogers的14項重要學習</h2>
          </div>
          
          <div className="columns-1 md:columns-2 gap-12 space-y-8">
            {[
              "在我與他人的關係中，我發現假裝成不是自己的樣子，長遠來看並沒有幫助。",
              "當我能接納地傾聽自己、允許自己做自己時，我會更有效率。",
              "當我允許自己去理解另一個人時，那是極其有價值的。",
              "當我能敞開自己，讓他人向我表達他們的感受與內在世界時，這是非常充實的經驗。",
              "我發現，當我能夠接納另一個人時，那是極其有回報的經驗。",
              "我愈能開放地面對自己與他人的現實，就愈不會急著去「修正」或「改變」他人。",
              "我可以信任自己的經驗。",
              "他人的評價並不是我生命的指引。",
              "對我而言，經驗才是最高的權威。",
              "我喜歡在經驗中發現其中的秩序與意義。",
              "事實是友善的。",
              "最個人的，往往也是最普遍的。",
              "我的經驗告訴我，人具有基本的正向方向。",
              "生命在最美好的狀態下，是一個流動、改變而不固定的過程。"
            ].map((item, index) => (
              <div key={index} className="break-inside-avoid mb-6 flex gap-5 group hover:bg-white p-4 rounded-lg transition-colors duration-300">
                <span className="text-[#D4A373] font-serif italic text-xl font-bold opacity-60 group-hover:opacity-100">{index + 1}.</span>
                <p className="text-[#555] text-sm leading-relaxed group-hover:text-[#333]">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center pt-12 pb-8 border-t border-[#D4A373]/20">
           <p className="text-[#999] text-[10px] tracking-[0.3em] uppercase flex items-center justify-center gap-2">
             <span>©</span> 2023, PARENTS AGAIN. ALL RIGHTS RESERVED.
           </p>
        </footer>

      </main>
    </div>
  );
};

export default PersonCenteredPage;