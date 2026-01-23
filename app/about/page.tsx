'use client';

import React from 'react';
import { 
  BookOpen, 
  Award, 
  User, 
  Mic, 
  Brain, 
  Layers, 
  GraduationCap, 
  Quote, 
  FileText,
  Anchor,
  Users,
  Palette,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  // --- Data Content (Unchanged) ---
  const educationData = [
    {
      period: "2025 - Present",
      school: "National Taiwan University",
      degree: "Ph.D. Program in Clinical Psychology",
      dept: "國立臺灣大學心理學系暨研究所 臨床心理博士班研究",
    },
    {
      period: "2022 - 2025",
      school: "National Tsing Hua University",
      degree: "M.A. in Educational Psychology and Counseling",
      dept: "國立清華大學 教育心理與諮商學系 碩士",
    },
    {
      period: "2012 - 2014",
      school: "Kaohsiung Medical University",
      degree: "B.S. in Oral Hygiene",
      dept: "高雄醫學大學 口腔衛生學系 學士",
    }
  ];

  const experienceData = [
    {
      year: "2025",
      title: "年度首獎 (First Prize)",
      org: "臺灣諮商心理學會 年度優秀碩博士論文",
      type: "award"
    },
    {
      year: "2024",
      title: "培育跨領域教育領袖計畫 獲獎人",
      org: "國立清華大學竹師教育學院",
      type: "honor"
    },
    {
      year: "2023, 2024",
      title: "徐道寧教授數學人文關懷獎學金 獲獎人",
      org: "國立清華大學",
      type: "honor"
    },
  ];

  const speechPsychology = [
    { year: "2026", title: "當工作觸發我們的依附：非營利組織的職場心理健康", location: "台灣公益社會實踐協會" },
    { year: "2025", title: "走進東歐研討會：學生研究投入的視野拓展與動機啟發", location: "清華大學教育心理與諮商學系" },
    { year: "2024", title: "童年情感忽視；暖心熊抱團體圖書會", location: "陽明交通大學諮商中心" },
    { year: "2024", title: "舒心熊熊-流體熊藝術創作療癒工作坊", location: "陽明交通大學諮商中心" },
    { year: "2022", title: "傾聽的藝術：跨世代陪談與人文關懷的實踐哲學", location: "老玩客陪談師訓練計畫" }
  ];

  const speechDentistry = [
    { year: "2023", title: "品牌從識別到信任—品牌經營與醫病關係", location: "荷蘭愛齊股份有限公司台灣區" },
    { year: "2022", title: "共識、共創、共榮：診所品牌文化與團隊信任的再設計", location: "唯芯聯盟牙醫診所" },
    { year: "2019", title: "未來診間的原型：專業分工與跨域整合的臨床革新", location: "荷蘭愛齊股份有限公司台灣區" },
    { year: "2019", title: "數位牙科的臨界點：協作與臨床創新", location: "OHI數位牙醫學院協會兩岸交流會議" },
    { year: "2018", title: "團隊為本的精準醫療：矯正門診中的協作實踐與臨床", location: "荷蘭愛齊股份有限公司台灣區" },
    { year: "2017", title: "預防醫學中談齒顎矯正", location: "高雄醫學大學口腔衛生學系" },
    { year: "2017", title: "健康溝通與臨床實踐：從教育到行動的專業養成", location: "經國管理暨健康學院口腔衛生學系" },
    { year: "2015", title: "從技術到信任：矯正門診專業協作的臨床基礎與執行架構", location: "荷蘭愛齊股份有限公司台灣區" }
  ];

  const publications = {
    journals: [
      "任祈蔚（2025）。以依附為基礎的家族治療於青少年憂鬱與自殺介入之應用與本土化考量。輔導季刊，61(3)，33-49。"
    ],
    conferences: [
      "Jen, C.-W., & Hsu, Y. K. (2025, November 15). Narrative inquiry for the transformation process of alexithymia tendency college students in group counseling based on interpersonal interaction orientation [Conference presentation]. Taiwan Counseling Association Annual Meeting, Taichung, Taiwan.",
      "Jen, C. W. Hsu, Y. K. (2025, June 25-29). The Emotions and Emodiversity in Alexithymia. [Conference presentation] 56th International Annual Meeting of the Society for Psychotherapy Research (SPR). Krakow, Poland.",
      "Jen, C.-W., Hsu, Y. K., & Chuah, S. K. (2025, June 25-29). Defensiveness in Encounter Groups for Taiwanese Sexual Minority Males. [Conference presentation] 56th International Annual Meeting of the Society for Psychotherapy Research (SPR). Krakow, Poland.",
      "Jen, C. W. (2024, Nov 25-29). Integration of Group Counseling in Taiwan’s Learning Assistance Program: an Action Research Approach. [Poster presentation] 16th The Asian Conference on Education.",
      "Wu, H.-K., & Jen, C. W. (2024, November 22-23). Bridging tongues through the eyes of the young: Exploring English learning experiences among rural indigenous fourth graders in Taiwan [Conference presentation]. 2024 International Conference on Educational Innovation, Hsinchu, Taiwan.",
      "方敏琪、任祈蔚（2024年10月6日）。成年男性性少數於轉換階段的困境-非結構團體歷程研究〔海報發表〕2024 年台灣團體諮商與治療研究學會學會年會暨學術研討會。彰化，台灣。",
      "Jen, C. W., Su, C. C., & Hsu, Y. K. (2024, June 25-29). Preliminary exploration of the benefits for alexithymia tendency participants in a counseling group by short-term interpersonal psychodynamic approach. [Poster presentation] 55th International Annual Meeting of the Society for Psychotherapy Research (SPR). Ottawa, Canada."
    ]
  };

  const training = [
    {
      category: "Emotionally Focused Therapy (EFT)",
      icon: <Brain className="w-5 h-5 text-[#6D7A3F]" />,
      items: [
        "Emotionally Focused Couples Therapy (EFCT) – Advanced Training Course（情緒焦點治療－EFCT 伴侶治療三階課程）",
        "Emotionally Focused Couples Therapy (EFCT) – Intermediate Training Course（情緒焦點治療－EFCT 伴侶治療二階課程）",
        "Emotionally Focused Individual Therapy (EFIT) – Case Study and Depression（情緒焦點治療－EFIT 案例研討與專題課程）",
        "Emotionally Focused Individual Therapy (EFIT) – Theoretical and Practical Skills（情緒焦點治療－EFIT 理論技巧課）",
        "Emotionally Focused Therapy (EFIT/EFCT) – Introductory Course（情緒焦點治療－EFIT/EFCT 初階課程）",
        "Emotion-Focused Therapy in Couples Counseling / Online Course（情緒焦點治療於伴侶諮商之應用－線上課程）"
      ]
    },
    {
      category: "Attachment & Mentalization",
      icon: <Anchor className="w-5 h-5 text-[#D8944F]" />,
      items: [
        "Attachment-Oriented Individual Counseling – CPTSD Practice Workshop（依戀取向個別諮商－複雜性創傷療癒實務工作坊）",
        "Mentalization-Based Therapy (MBT) for Borderline Personality Disorder / Online Course（心智化治療 MBT 於邊緣性人格障礙之應用）"
      ]
    },
    {
      category: "Group Therapy",
      icon: <Users className="w-5 h-5 text-[#6D7A3F]" />,
      items: [
        "Unstructured Group Counseling for College Students with Alexithymia（非結構團體諮商帶領－大學生述情障礙人際關係團體）",
        "Interpersonal/Family and Self Exploration Group Therapy – Second Edition（人際、家庭與自我關係探究團體－第二期）",
        "Interpersonal/Family and Self Exploration Group Therapy – First Edition（人際、家庭與自我關係探究團體－第一期）",
        "Practical Supervision in Unstructured Group Therapy（非結構團體諮商督導之實務）"
      ]
    },
    {
      category: "Other Approaches",
      icon: <Layers className="w-5 h-5 text-[#8CBD9A]" />,
      items: [
        "Application of Gestalt Approach in Counseling / Online Course（心理諮商運用－完形取向）"
      ]
    }
  ];

  const skills = [
    "品牌策發展顧問", "品牌識別", "團隊營運優化", "專案管理", "平面設計", "醫療糾紛處理"
  ];

  return (
    <div className="font-sans bg-[#FEFCF3] text-[#4A4D3E] pb-24 overflow-x-hidden">
      
      {/* ================= HERO SECTION (Geometric Collage) ================= */}
      <section className="relative pt-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text & Info - Redesigned Layout */}
          <div className="lg:col-span-6 relative z-10">
            <div className="space-y-10">
              {/* Name & Title Block */}
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#CDB07B] rounded-full opacity-20 -z-10"></div>
                <div className="inline-block px-4 py-1.5 mb-6 border border-[#6D7A3F] bg-white rounded-full text-xs tracking-[0.15em] text-[#6D7A3F] font-bold uppercase shadow-sm">
                  Licensed Counseling Psychologist
                </div>
                <h1 className="text-7xl md:text-8xl font-serif font-bold text-[#2C3325] leading-none tracking-tight mb-2">
                  任祈蔚
                </h1>
                <span className="text-[#6D7A3F] text-4xl md:text-5xl italic font-serif opacity-80 block ml-2">
                  Jen Chi-Wei
                </span>
              </div>

              {/* Education Block */}
              <div className="pl-6 border-l-4 border-[#D8944F]">
                <p className="text-[#5C6150] font-serif text-xl leading-relaxed">
                  <span className="font-bold text-[#2C3325] block text-2xl mb-1">Ph.D. Program in Clinical Psychology</span>
                  National Taiwan University
                </p>
              </div>

              {/* Quote Block - Redesigned */}
              <div className="bg-white p-8 rounded-2xl shadow-[8px_8px_0_#B5D1AE] border border-[#E0E0D5] relative mt-8">
                <Quote className="absolute -top-4 -right-4 w-10 h-10 text-[#D8944F] bg-[#FEFCF3] p-1 rounded-full border border-[#D8944F]" />
                <p className="font-serif italic text-[#4A4D3E] text-lg leading-loose mb-6">
                  "Most of the time, I read—philosophy, psychology, and religion. The more I observe the world, the more I find it difficult to fully comprehend."
                </p>
                <div className="w-full h-px bg-[#D4E8D6] mb-6"></div>
                <p className="text-base text-[#6D7A3F] leading-relaxed tracking-wide font-medium">
                  多數的時候都在閱讀，讀哲學、讀心理學、宗教。世界的現象自覺看不懂，讀了很多書，來找對於世界的解答。
                </p>
              </div>
            </div>
          </div>

          {/* Right: Portrait Collage (Circular + Geometric Blocks) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-[450px] h-[550px] flex items-center justify-center">
                {/* Layer 1: Back Rectangle (Mustard) */}
                <div className="absolute top-0 right-10 w-[280px] h-[350px] bg-[#CDB07B] -z-20 opacity-80"></div>
                
                {/* Layer 2: Middle Rectangle (Green) */}
                <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-[#B5D1AE] -z-10 opacity-60"></div>
                
                {/* Layer 3: Accent Circle (Orange) */}
                <div className="absolute top-10 left-[-30px] w-32 h-32 bg-[#D8944F] rounded-full -z-10 opacity-90"></div>

                {/* Main Image - Circular with Border - ENLARGED */}
                <div className="relative w-[420px] h-[420px] rounded-full border-[10px] border-white shadow-2xl overflow-hidden bg-white">
                  <img 
                    src="https://cwjen.vercel.app/Photos/wade.png" 
                    alt="Jen Chi-Wei Portrait" 
                    className="w-full h-full object-cover scale-110 translate-y-4"
                  />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ME (Split Layout) ================= */}
      <section id="about" className="py-24 bg-[#D4E8D6]/20 border-y border-[#D4E8D6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-16 items-start">
          
          <div className="md:col-span-4 sticky top-10">
            <h2 className="text-4xl font-serif font-bold text-[#2C3325] mb-6 flex items-center gap-3">
              <User className="text-[#D8944F]" size={36}/> 關於我<br/>
            </h2>
            <span className="text-xl font-sans font-normal text-[#6D7A3F] block mb-8">About Me</span>
            <div className="w-20 h-1.5 bg-[#D8944F] mb-8"></div>
            <p className="text-[#5C6150] text-base leading-loose font-serif">
              Research centers on human emotion, group therapy, couple therapy, experiential approaches to psychotherapy, and empathy. I am deeply drawn to the dialogue between psychological healing and aesthetics.
            </p>
          </div>

          <div className="md:col-span-8 space-y-10 text-[#4A503D] text-xl leading-loose font-serif tracking-wide">
            <p>
              因著工作，合作，認識了一些夥伴，在這些交流中彼此成長，也長成。有一些名謂或抬頭，不過那只是世界的一些指稱。其中倒也不代表，或意味著什麼。
            </p>
            <p className="bg-white p-8 rounded-tr-3xl rounded-bl-3xl shadow-sm border-l-8 border-[#6D7A3F]">
              跨領域成就了背景的多元，思維上的多絮，不過終究為人，亦是常人，受五蘊之擾。
            </p>
            <p className="font-bold text-[#2C3325]">
              研究的主軸是人類的情緒、團體治療、伴侶治療、經驗取向治療、與同理心。對心理治療與美學感到熱衷。
            </p>
          </div>

        </div>
      </section>

      {/* ================= EDUCATION & EXPERIENCE (Large Type) ================= */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto my-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Column 1: Education */}
          <div>
            <div className="flex items-end gap-4 mb-12 border-b-2 border-[#CDB07B] pb-4">
              <GraduationCap size={40} className="text-[#CDB07B]"/>
              <h2 className="text-4xl font-serif font-bold text-[#2C3325]">
                學歷背景 <span className="text-2xl font-sans font-light text-[#8CBD9A] ml-2">Education</span>
              </h2>
            </div>
            
            <div className="space-y-16">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-[#CDB07B]/50">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#CDB07B] rounded-full"></div>
                  <span className="text-sm font-bold text-[#D8944F] tracking-widest block mb-2 font-sans uppercase bg-[#FEFCF3] inline-block pr-2">{item.period}</span>
                  <h3 className="text-2xl font-serif font-bold text-[#2C3325] leading-snug mb-2">{item.school}</h3>
                  <p className="text-xl text-[#4A503D] font-medium">{item.degree}</p>
                  <p className="text-lg text-[#5C6150] mt-2">{item.dept}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Experience & Awards */}
          <div>
            <div className="flex items-end gap-4 mb-12 border-b-2 border-[#6D7A3F] pb-4">
              <Award size={40} className="text-[#6D7A3F]"/>
              <h2 className="text-4xl font-serif font-bold text-[#2C3325]">
                經歷與獎項 <span className="text-2xl font-sans font-light text-[#8CBD9A] ml-2">Experience</span>
              </h2>
            </div>

            <div className="space-y-10">
              {experienceData.map((item, index) => (
                <div key={index} className="group bg-white p-8 border border-[#E0E0D5] shadow-[6px_6px_0_#B5D1AE] hover:shadow-[6px_6px_0_#6D7A3F] transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold tracking-wide ${item.type === 'award' ? 'bg-[#D8944F] text-white' : 'bg-[#6D7A3F] text-white'}`}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2C3325] mb-2 font-serif">{item.title}</h3>
                  <p className="text-lg text-[#5C6150]">{item.org}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= TRAINING & SKILLS (Cards) ================= */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        
        <div className="flex items-center gap-6 mb-16 justify-center">
           <div className="h-[1px] bg-[#6D7A3F] w-24"></div>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C3325] text-center">
             心理治療訓練 <br/><span className="text-xl font-sans font-light text-[#5C6150] block mt-2">Psychotherapy Training</span>
           </h2>
           <div className="h-[1px] bg-[#6D7A3F] w-24"></div>
        </div>

        {/* Training Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {training.map((t, idx) => (
            <div key={idx} className="bg-white p-10 border-t-8 border-[#6D7A3F] shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#FEFCF3] rounded-lg border border-[#D4E8D6]">{t.icon}</div>
                <h3 className="font-bold text-[#2C3325] text-2xl font-serif">{t.category}</h3>
              </div>
              <ul className="space-y-6">
                {t.items.map((item, i) => (
                  <li key={i} className="flex gap-4 text-lg text-[#5C6150] leading-relaxed border-b border-[#F0F0F0] pb-4 last:border-0 last:pb-0">
                    <span className="w-2 h-2 rounded-full bg-[#CDB07B] mt-2.5 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-[#D8944F]/10 p-12 rounded-3xl border border-[#D8944F]/30 text-center">
           <h3 className="text-2xl font-serif font-bold text-[#D8944F] mb-10 flex items-center justify-center gap-3">
             <Palette size={28}/> 專業技能 Professional Skills
           </h3>
           <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, i) => (
              <span key={i} className="px-8 py-3 bg-white text-[#4A503D] text-lg font-medium tracking-wide shadow-sm border border-[#E0E0D5]">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SPEAKING EXPERIENCE (Timeline List) ================= */}
      <section className="bg-white py-24 border-y border-[#D4E8D6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-20">
             <Mic className="text-[#D8944F]" size={32} />
             <h2 className="text-4xl font-serif font-bold text-[#2C3325]">
               演講經歷 <span className="text-2xl font-sans font-light text-[#5C6150] ml-2">Speaking Experience</span>
             </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Left: Psychology */}
            <div>
              <h3 className="text-2xl font-bold text-[#6D7A3F] mb-10 pb-4 border-b-4 border-[#6D7A3F] inline-block font-serif">
                Psychology & Counseling
              </h3>
              <div className="space-y-12">
                {speechPsychology.map((s, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-[#D4E8D6]">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#6D7A3F] rounded-full"></div>
                    <span className="text-sm font-bold text-[#CDB07B] font-sans block mb-1">{s.year}</span>
                    <h4 className="font-bold text-[#2C3325] mb-2 text-xl font-serif leading-snug">{s.title}</h4>
                    <p className="text-base text-[#5C6150] bg-[#FEFCF3] px-3 py-1 inline-block border border-[#E0E0D5]">{s.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dentistry */}
            <div>
              <h3 className="text-2xl font-bold text-[#D8944F] mb-10 pb-4 border-b-4 border-[#D8944F] inline-block font-serif">
                Dentistry & Management
              </h3>
              <div className="space-y-12">
                {speechDentistry.map((s, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-[#E7CBA7]">
                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-[#D8944F] rounded-full"></div>
                    <span className="text-sm font-bold text-[#CDB07B] font-sans block mb-1">{s.year}</span>
                    <h4 className="font-bold text-[#2C3325] mb-2 text-xl font-serif leading-snug">{s.title}</h4>
                    <p className="text-base text-[#5C6150] bg-[#FEFCF3] px-3 py-1 inline-block border border-[#E0E0D5]">{s.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PUBLICATIONS (Simple Clean List) ================= */}
      <section className="bg-[#CDB07B]/10 py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#FEFCF3] p-10 md:p-20 shadow-xl border border-[#D4E8D6]">
          <div className="flex items-center gap-4 mb-16 border-b border-[#E0E0D5] pb-8">
            <BookOpen className="text-[#6D7A3F]" size={32} />
            <h2 className="text-4xl font-serif font-bold text-[#2C3325]">
              學術著作 <span className="text-2xl font-sans font-light text-[#5C6150] ml-2">Academic Publications</span>
            </h2>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-lg font-bold tracking-widest text-[#D8944F] uppercase mb-8 flex items-center gap-3 font-serif">
                <Sparkles size={20}/> Journal Articles
              </h3>
              <ul className="space-y-6">
                {publications.journals.map((pub, i) => (
                  <li key={i} className="text-[#4A503D] leading-loose text-lg pl-6 border-l-4 border-[#CDB07B] font-serif">
                    {pub}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-widest text-[#D8944F] uppercase mb-8 flex items-center gap-3 font-serif">
                <Sparkles size={20}/> Conference Presentations
              </h3>
              <ul className="space-y-8">
                {publications.conferences.map((pub, i) => (
                  <li key={i} className="text-[#4A503D] leading-loose text-lg pl-6 border-l-4 border-[#B5D1AE] font-serif">
                    {pub}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}