'use client';

import React from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <div className="min-h-screen bg-[#FDFBFB] text-[#5D5D5D] font-serif selection:bg-[#EBCBCE]">
      {/* 導覽列 Navigation */}
      <nav className="flex justify-between items-center px-12 py-8 border-b border-[#D4A373]/20 bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-light tracking-[0.2em] text-[#D4A373]">WADE JEN</div>
        <div className="flex gap-8 text-sm tracking-widest uppercase text-[#8B8B8B]">
          <Link href="/" className="hover:text-[#D4A373] transition-colors">Home</Link>
          <Link href="/about" className="hover:text-[#D4A373] transition-colors">About</Link>
          <Link href="/psychotherapy" className="hover:text-[#D4A373] transition-colors">Psychotherapy</Link>
          <Link href="/project" className="hover:text-[#D4A373] transition-colors">Project</Link>
          <Link href="/academic" className="hover:text-[#D4A373] transition-colors">Academic</Link>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="mb-32 text-center">
          <span className="text-[#D4A373] tracking-[0.3em] text-sm uppercase mb-4 block">Person Centered Approach</span>
          <h1 className="text-6xl md:text-7xl font-light text-[#4A4A4A] mb-8 leading-tight">Carl Rogers</h1>
          <div className="w-24 h-[1px] bg-[#D4A373] mx-auto mb-12"></div>
          <p className="max-w-2xl mx-auto leading-relaxed text-lg text-[#7A7A7A] font-sans italic">
            「深入一個人內在的核心，將會發現存在著一個值得信任，積極正向的心靈。」
          </p>
        </section>

        {/* Introduction Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border border-[#D4A373]/30 rounded-full scale-95 group-hover:scale-100 transition-transform duration-700"></div>
            <div className="bg-[#EBCBCE]/40 aspect-square rounded-full flex items-center justify-center p-12 overflow-hidden">
               <div className="text-center">
                  <p className="text-[#D4A373] text-xl mb-4">一顆橡樹的種子</p>
                  <p className="text-sm leading-loose text-[#6D6D6D] font-sans">
                    只要有陽光、水分和養分，種子自然會長成一棵健康的大樹；<br/>
                    但如果環境裡充滿冷漠、批評、誤解或虛偽，它的成長就會被阻礙。
                  </p>
               </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl text-[#4A4A4A] font-light">心的成長</h2>
            <p className="leading-relaxed text-[#7A7A7A] font-sans">
              當我們身邊的人能夠真誠地對待我們、願意理解我們、接納我們原本的樣子，我們內在的潛能就會慢慢展開，成為自己能成為的樣子。
            </p>
            <div className="pt-4 border-t border-[#EBCBCE]">
               <p className="text-sm text-[#8B8B8B] leading-7 font-sans">
                Rogers 提出「個人中心」理論，強調人的主觀經驗與自我成長潛能，與 Maslow 共同推動「第三勢力心理學」。
               </p>
            </div>
          </div>
        </section>

        {/* Influences - The Lineage */}
        <section className="mb-32">
          <h2 className="text-center text-2xl tracking-[0.2em] text-[#D4A373] mb-16 uppercase">The Lineage of Influence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Otto Rank", desc: "認為心理治療應幫助人發揮創造力，學會接納獨特的自己。" },
              { name: "Alfred Adler", desc: "強調每個人都有自己的價值，在關係中找到成長意義。" },
              { name: "Martin Buber", desc: "「我—你」的互動關係，重視當下的相遇與主觀經驗。" },
              { name: "Abraham Maslow", desc: "需求層次理論，強調自我實現與正向的人本主義。" }
            ].map((item, index) => (
              <div key={index} className="p-8 border border-[#EBCBCE] hover:border-[#D4A373] transition-all bg-white/30 rounded-sm group">
                <h3 className="text-xl mb-3 text-[#4A4A4A] group-hover:text-[#D4A373] transition-colors">{item.name}</h3>
                <p className="text-sm text-[#8B8B8B] leading-6 font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Self Concept Section */}
        <section className="mb-32 bg-[#F5E6E8]/30 p-16 rounded-2xl border border-white">
          <h2 className="text-3xl font-light mb-12 text-center text-[#4A4A4A]">論自我 Self</h2>
          <div className="space-y-12 font-sans">
            <div className="flex flex-col md:flex-row gap-8">
               <div className="flex-1">
                  <h4 className="text-[#D4A373] mb-4 tracking-widest text-sm uppercase italic">Phenomenal Field</h4>
                  <p className="text-[#6D6D6D] leading-relaxed">每個人的經驗都是獨特的。人以自身所覺察的領域來界定現實世界，唯有親身經歷者能深切體驗其中的真實感受。</p>
               </div>
               <div className="flex-1">
                  <h4 className="text-[#D4A373] mb-4 tracking-widest text-sm uppercase italic">Self-Concept</h4>
                  <p className="text-[#6D6D6D] leading-relaxed">自我概念與環境密不可分。理解一個人的行為，必須從他的「內在參考架構」出發。</p>
               </div>
            </div>
          </div>
        </section>

        {/* 14 Learnings - Grid Layout */}
        <section className="mb-32">
          <h2 className="text-center text-3xl font-light mb-16 text-[#4A4A4A]">Rogers 的 14 項重要學習</h2>
          <div className="columns-1 md:columns-2 gap-8 space-y-8">
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
              "事實是友善的。",
              "生命在最美好的狀態下，是一個流動、改變而不固定的過程。"
            ].map((text, i) => (
              <div key={i} className="break-inside-avoid p-6 bg-white border-l-2 border-[#EBCBCE] shadow-sm">
                <p className="text-[#7A7A7A] leading-relaxed font-sans text-sm italic">"{text}"</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-[#EBCBCE] text-center">
        <p className="text-[#D4A373] tracking-[0.5em] text-xs uppercase mb-4">Becoming a Person</p>
        <p className="text-[#ADADAD] text-[10px] tracking-widest uppercase">
          COPYRIGHT ©2023, PARENTS AGAIN. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
};

export default Page;