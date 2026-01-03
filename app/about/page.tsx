import React from 'react';
import Image from 'next/image';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Mic, 
  Brain, 
  Users, 
  Leaf, 
  Globe, 
  Heart,
  Palette
} from 'lucide-react';

// 假設圖片位於同一層目錄，若在 public 資料夾請改用字串路徑 "/wade.png"
import profileImage from './wade.png';

export default function AboutWade() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#5C5552] font-sans selection:bg-[#D4E0E8] selection:text-[#3A4A3A]">
      
      {/* Navigation (模擬頂部選單) */}
      <nav className="py-6 px-8 flex justify-center space-x-8 text-sm font-medium text-[#8D7B68] opacity-70 tracking-widest uppercase border-b border-[#E0E0E0] mb-12">
        {['Home', 'About', 'Eis Heauton', 'Psychotherapy', 'Group therapy', 'Project', 'Academic'].map((item) => (
          <span key={item} className="cursor-pointer hover:text-[#5C5552] transition-colors">{item}</span>
        ))}
      </nav>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-20">

        {/* --- Profile Header: 個人檔案與學歷 --- */}
        <section className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* 左側照片 */}
          <div className="relative group shrink-0">
            <div className="absolute inset-0 bg-[#D4E0E8] rounded-full translate-x-2 translate-y-2 -z-10"></div>
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src={profileImage} 
                alt="Wade Jen" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* 右側資訊 */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div>
              <h1 className="text-4xl font-bold text-[#8D7B68] mb-2 tracking-tight">任祈蔚 Jen Chi-Wei</h1>
              <span className="inline-block px-3 py-1 bg-[#D4E0E8] text-[#5A6B7C] text-xs font-bold tracking-wider rounded-full uppercase">
                Licensed Counseling Psychologist (Taiwan)
              </span>
            </div>

            <div className="space-y-3">
              <EducationItem 
                zh="國立臺灣大學心理學系暨研究所 臨床心理博士班研究" 
                en="Ph.D. Program in Clinical Psychology, Department of Psychology, National Taiwan University" 
              />
              <EducationItem 
                zh="國立清華大學 教育心理與諮商學系 碩士" 
                en="M.A. in Educational Psychology and Counseling, National Tsing Hua University" 
              />
              <EducationItem 
                zh="高雄醫學大學 口腔衛生學系 學士" 
                en="B.S. in Oral Hygiene, Kaohsiung Medical University" 
              />
              <div className="flex items-center justify-center md:justify-start gap-2 text-[#8D7B68]">
                <Award size={18} />
                <span className="font-medium">高考諮商心理師</span>
              </div>
            </div>
          </div>
        </section>

        {/* --- About Me: 關於我 --- */}
        <section className="relative">
          <div className="absolute top-0 left-0 w-16 h-1 bg-[#E8D595] mb-4"></div>
          <h2 className="text-2xl font-bold text-[#8D7B68] mb-8 mt-6 flex items-center gap-2">
            <BookOpen className="text-[#E8D595]" /> About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 leading-relaxed text-[#5C5552]">
            {/* 中文區塊 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#F0F0F0]">
              <p className="mb-4">
                多數的時候都在閱讀，讀哲學、讀心理學、宗教。世界的現象自覺看不懂，讀了很多書，來找對於世界的解答。因著工作，合作，認識了一些夥伴，在這些交流中彼此成長，也長成。
              </p>
              <p className="mb-4">
                有一些名謂或抬頭，不過那只是世界的一些指稱。其中倒也不代表，或意味著什麼。跨領域成就了背景的多元，思維上的多絮，不過終究為人，亦是常人，受五蘊之擾。
              </p>
              <p className="font-medium text-[#8D7B68]">
                研究的主軸是人類的情緒、團體治療、伴侶治療、經驗取向治療、與同理心。對心理治療與美學感到熱衷。
              </p>
            </div>

            {/* 英文區塊 */}
            <div className="p-8 rounded-[2rem] bg-[#D4E0E8] bg-opacity-20 border border-[#D4E0E8]">
              <p className="mb-4 italic opacity-90">
                Most of the time, I read—philosophy, psychology, and religion. The more I observe the world, the more I find it difficult to fully comprehend; and so, through reading, I search for a way to make sense of it.
              </p>
              <p className="mb-4 italic opacity-90">
                Work and collaboration have brought companions into my life. Through these encounters, we have learned and grown together—each becoming who we are through the presence of one another. There are titles and names that the world assigns, but they are only signs, not essences. Interdisciplinary experiences have shaped a diverse background and a many-layered way of thinking. Yet, after all, I am simply human—an ordinary being, still entangled in the five aggregates of existence.
              </p>
              <p className="font-medium text-[#6B8594]">
                My research centers on human emotion, group therapy, couple therapy, experiential approaches to psychotherapy, and empathy. I am deeply drawn to the dialogue between psychological healing and aesthetics, where understanding and beauty meet in the living experience of being human.
              </p>
            </div>
          </div>
        </section>

        {/* --- Experience & Skills: 經驗與技能 --- */}
        <section>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* 左側：技能與特殊經驗 */}
            <div className="md:col-span-1 space-y-8">
              {/* Award */}
              <div className="bg-[#FFFDF5] p-6 rounded-2xl border border-[#E8D595] shadow-sm relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-[#E8D595] opacity-10">
                   <Award size={100} />
                </div>
                <h3 className="text-lg font-bold text-[#8C7A56] mb-3 flex items-center gap-2">
                   <Award size={20} /> Honors
                </h3>
                <div className="text-sm">
                  <span className="font-bold block text-[#8D7B68]">2025</span>
                  臺灣諮商心理學會 年度優秀碩博士論文 首獎
                </div>
              </div>

              {/* Work Skills */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#F0F0F0]">
                <h3 className="text-lg font-bold text-[#8D7B68] mb-4 flex items-center gap-2">
                  <Briefcase size={20} className="text-[#D4E0E8]" /> 一些工作的技能
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "品牌策發展顧問", "品牌識別", "團隊營運優化", 
                    "專案管理", "平面設計", "醫糾處理"
                  ].map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-[#F2F4F6] text-[#5C5552] text-xs rounded-full border border-[#E0E0E0]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Other Experience */}
              <div className="space-y-4 pl-2">
                <h3 className="text-lg font-bold text-[#8D7B68] flex items-center gap-2">
                  <Users size={20} className="text-[#D4E0E8]" /> 經歷 Mentor
                </h3>
                <ul className="space-y-3 text-sm border-l-2 border-[#D4E0E8] pl-4">
                   <li>
                     <span className="font-bold text-[#8D7B68] block">2016–2019</span>
                     導師 Mentor / Instructor｜臺北醫學大學口腔衛生學系
                   </li>
                   <li>
                     <span className="font-bold text-[#8D7B68] block">2016–2018</span>
                     輔導委員 Advisory Supervisor｜教育部國民及學前教育署，台灣
                   </li>
                </ul>
              </div>
            </div>

            {/* 右側：演講經歷 (Timeline Style) */}
            <div className="md:col-span-2 bg-white p-8 rounded-[2rem] shadow-sm border border-[#F0F0F0]">
               <h3 className="text-xl font-bold text-[#8D7B68] mb-6 flex items-center gap-2">
                 <Mic className="text-[#E8D595]" /> 一些演講經歷
               </h3>
               
               <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#D4E0E8] before:to-transparent">
                  <SpeechItem year="2025" title="走進東歐研討會：學生研究投入的視野拓展與動機啟發" org="清華大學教育心理與諮商學系" />
                  <SpeechItem year="2023" title="品牌從識別到信任—品牌經營與醫病關係" org="荷蘭愛齊股份有限公司台灣區" />
                  <SpeechItem year="2022" title="共識、共創、共榮：診所品牌文化與團隊信任的再設計" org="唯芯聯盟牙醫診所" />
                  <SpeechItem year="2022" title="傾聽的藝術：跨世代陪談與人文關懷的實踐哲學" org="老玩客陪談師訓練計畫" />
                  <SpeechItem year="2019" title="未來診間的原型：專業分工與跨域整合的臨床革新" org="荷蘭愛齊股份有限公司台灣區" />
                  <SpeechItem year="2019" title="數位牙科的臨界點：協作與臨床創新" org="OHI數位牙醫學院協會兩岸交流會議" />
                  <SpeechItem year="2018" title="團隊為本的精準醫療：矯正門診中的協作實踐與臨床" org="荷蘭愛齊股份有限公司台灣區" />
                  <SpeechItem year="2017" title="預防醫學中談齒顎矯正" org="高雄醫學大學口腔衛生學系" />
                  <SpeechItem year="2017" title="健康溝通與臨床實踐：從教育到行動的專業養成" org="經國管理暨健康學院口腔衛生學系" />
                  <SpeechItem year="2015" title="從技術到信任：矯正門診專業協作的臨床基礎與執行架構" org="荷蘭愛齊股份有限公司台灣區" />
               </div>
            </div>
          </div>
        </section>

        {/* --- Training: 心理治療訓練 --- */}
        <section className="bg-[#D4E0E8] bg-opacity-10 rounded-[2.5rem] p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#8D7B68] mb-2 flex items-center justify-center gap-2">
              <Brain className="text-[#8D7B68]" /> 專業訓練 Experience & Training
            </h2>
            <p className="text-[#8D7B68] opacity-60">一些心理治療的訓練</p>
          </div>

          <div className="space-y-8">
            {/* EFT Section */}
            <TrainingCategory icon={<Heart size={20} />} title="情緒焦點治療 (EFT)" color="text-[#D4A373]">
               <TrainingItem title="Emotionally Focused Couples Therapy (EFCT) – Advanced Training Course" subtitle="情緒焦點治療－EFCT 伴侶治療三階課程" />
               <TrainingItem title="Emotionally Focused Couples Therapy (EFCT) – Intermediate Training Course" subtitle="情緒焦點治療－EFCT 伴侶治療二階課程" />
               <TrainingItem title="Emotionally Focused Individual Therapy (EFIT) – Case Study and Depression" subtitle="情緒焦點治療－EFIT 案例研討與專題課程" />
               <TrainingItem title="Emotionally Focused Individual Therapy (EFIT) – Theoretical and Practical Skills" subtitle="情緒焦點治療－EFIT 理論技巧課" />
               <TrainingItem title="Emotionally Focused Therapy (EFIT/EFCT) – Introductory Course" subtitle="情緒焦點治療－EFIT/EFCT 初階課程" />
               <TrainingItem title="Emotion-Focused Therapy in Couples Counseling / Online Course" subtitle="情緒焦點治療於伴侶諮商之應用－線上課程" />
            </TrainingCategory>

            {/* Attachment & Mentalization Section */}
            <TrainingCategory icon={<Globe size={20} />} title="依附與心智化取向" color="text-[#6B8594]">
               <TrainingItem title="Attachment-Oriented Individual Counseling – CPTSD Practice Workshop" subtitle="依戀取向個別諮商－複雜性創傷療癒實務工作坊" />
               <TrainingItem title="Mentalization-Based Therapy (MBT) for Borderline Personality Disorder / Online Course" subtitle="心智化治療 MBT 於邊緣性人格障礙之應用" />
            </TrainingCategory>

            {/* Group Therapy Section */}
            <TrainingCategory icon={<Users size={20} />} title="團體諮商與探索性團體" color="text-[#8A9A5B]">
               <TrainingItem title="Unstructured Group Counseling for College Students with Alexithymia" subtitle="非結構團體諮商帶領－大學生述情障礙人際關係團體" />
               <TrainingItem title="Interpersonal/Family and Self Exploration Group Therapy – Second Edition" subtitle="人際、家庭與自我關係探究團體－第二期" />
               <TrainingItem title="Interpersonal/Family and Self Exploration Group Therapy – First Edition" subtitle="人際、家庭與自我關係探究團體－第一期" />
               <TrainingItem title="Practical Supervision in Unstructured Group Therapy" subtitle="非結構團體諮商督導之實務" />
            </TrainingCategory>

             {/* Other Section */}
             <TrainingCategory icon={<Palette size={20} />} title="其他整合取向課程" color="text-[#A89F91]">
               <TrainingItem title="Application of Gestalt Approach in Counseling / Online Course" subtitle="心理諮商運用－完形取向" />
            </TrainingCategory>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#EAEAEA] py-8 text-center">
         <p className="text-[#8D7B68] text-xs font-medium tracking-widest uppercase">
            COPYRIGHT ©2023, PARENTS AGAIN. ALL RIGHTS RESERVED.
         </p>
      </footer>

    </div>
  );
}

// --- Sub Components ---

function EducationItem({ zh, en }: { zh: string, en: string }) {
  return (
    <div className="flex items-start gap-3">
      <GraduationCap size={20} className="text-[#D4E0E8] mt-1 shrink-0" />
      <div>
        <h4 className="text-[#5C5552] font-medium leading-tight">{zh}</h4>
        <p className="text-[#9CA3AF] text-sm mt-0.5">{en}</p>
      </div>
    </div>
  );
}

function SpeechItem({ year, title, org }: { year: string, title: string, org: string }) {
  return (
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      {/* Icon Dot */}
      <div className="flex items-center justify-center w-4 h-4 rounded-full border border-white bg-[#E8D595] shadow absolute left-0 md:left-1/2 -translate-x-1.5 md:-translate-x-2 shrink-0 z-10"></div>
      
      {/* Content */}
      <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-2.5rem)] pl-4 md:pl-0 md:px-6">
        <div className="flex flex-col md:group-odd:items-end md:group-odd:text-right">
           <span className="font-bold text-[#D4A373] text-sm mb-1 font-mono tracking-widest">{year}</span>
           <h4 className="font-bold text-[#5C5552] text-md leading-snug mb-1">{title}</h4>
           <p className="text-xs text-[#9CA3AF] uppercase tracking-wide">{org}</p>
        </div>
      </div>
    </div>
  );
}

function TrainingCategory({ icon, title, children, color }: { icon: any, title: string, children: any, color: string }) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-white">
      <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 ${color}`}>
        {icon} {title}
      </h3>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
        {children}
      </div>
    </div>
  );
}

function TrainingItem({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="relative pl-4 border-l-2 border-[#F0F0F0] hover:border-[#E8D595] transition-colors">
      <h5 className="text-[#5C5552] font-medium text-sm leading-tight mb-1">{title}</h5>
      <p className="text-[#9CA3AF] text-xs">{subtitle}</p>
    </div>
  );
}