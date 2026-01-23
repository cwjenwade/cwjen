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
  Sparkles
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
      icon: <Brain className="w-5 h-5 text-[#E3AEAE]" />,
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
      icon: <Anchor className="w-5 h-5 text-[#E7CBA7]" />,
      items: [
        "Attachment-Oriented Individual Counseling – CPTSD Practice Workshop（依戀取向個別諮商－複雜性創傷療癒實務工作坊）",
        "Mentalization-Based Therapy (MBT) for Borderline Personality Disorder / Online Course（心智化治療 MBT 於邊緣性人格障礙之應用）"
      ]
    },
    {
      category: "Group Therapy",
      icon: <Users className="w-5 h-5 text-[#CDC8D3]" />,
      items: [
        "Unstructured Group Counseling for College Students with Alexithymia（非結構團體諮商帶領－大學生述情障礙人際關係團體）",
        "Interpersonal/Family and Self Exploration Group Therapy – Second Edition（人際、家庭與自我關係探究團體－第二期）",
        "Interpersonal/Family and Self Exploration Group Therapy – First Edition（人際、家庭與自我關係探究團體－第一期）",
        "Practical Supervision in Unstructured Group Therapy（非結構團體諮商督導之實務）"
      ]
    },
    {
      category: "Other Approaches",
      icon: <Layers className="w-5 h-5 text-[#CCE2DC]" />,
      items: [
        "Application of Gestalt Approach in Counseling / Online Course（心理諮商運用－完形取向）"
      ]
    }
  ];

  const skills = [
    "品牌策發展顧問", "品牌識別", "團隊營運優化", "專案管理", "平面設計", "醫療糾紛處理"
  ];

  // --- Design Theme ---
  // Palette: #FFFDF6 (Bg), #CCE2DC (Green), #CDC8D3 (Purple), #E3AEAE (Pink), #E7CBA7 (Beige)
  
  return (
    <div className="font-sans bg-[#FFFDF6] text-[#4A464F] pb-24 overflow-x-hidden">
      
      {/* ================= HERO SECTION (Collage Style) ================= */}
      <section className="relative pt-20 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Background Decor Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CCE2DC] rounded-full opacity-30 -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E3AEAE] rounded-full opacity-20 -z-10 blur-3xl"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text & Info */}
          <div className="lg:col-span-5 relative z-10 space-y-8">
            <div>
              <div className="inline-block px-3 py-1 mb-4 border border-[#E7CBA7] rounded-full text-xs tracking-widest text-[#8C857B] bg-white">
                LICENSED COUNSELING PSYCHOLOGIST
              </div>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#4A464F] leading-tight mb-2">
                任祈蔚<br/>
                <span className="text-[#CDC8D3] text-4xl font-light">Jen Chi-Wei</span>
              </h1>
              <p className="text-[#8C857B] mt-4 font-light text-lg">
                Ph.D. Program in Clinical Psychology, <br/>National Taiwan University
              </p>
            </div>

            {/* Quote Block (Asymmetrical) */}
            <div className="relative p-8 bg-[#F8F6F4] border-l-4 border-[#E3AEAE] rounded-r-2xl">
              <Quote className="absolute top-4 left-4 w-6 h-6 text-[#E3AEAE] opacity-50" />
              <div className="relative z-10 space-y-4 pt-4">
                <p className="font-serif italic text-[#5C5552] leading-relaxed">
                  "Most of the time, I read—philosophy, psychology, and religion. The more I observe the world, the more I find it difficult to fully comprehend."
                </p>
                <p className="text-sm text-[#8C857B] leading-relaxed">
                  多數的時候都在閱讀，讀哲學、讀心理學、宗教。世界的現象自覺看不懂，讀了很多書，來找對於世界的解答。
                </p>
              </div>
            </div>
          </div>

          {/* Right: Portrait Collage */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
            {/* Geometric Backdrops */}
            <div className="absolute top-10 right-10 w-[300px] h-[400px] bg-[#CDC8D3] rounded-[40px] -z-10 rotate-3"></div>
            <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-[#E7CBA7] rounded-full -z-10 opacity-60"></div>
            
            {/* Main Image Container */}
            <div className="relative w-[325px] h-[400px] md:w-[400px] md:h-[500px] bg-white p-3 shadow-xl rounded-[20px] rotate-[-2deg]">
              <img 
                src="https://cwjen.vercel.app/Photos/wade.png" 
                alt="Jen Chi-Wei Portrait" 
                className="w-full h-full object-cover rounded-[12px] bg-[#F5F5F0]" // Added bg color to fill any transparency
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= EDUCATION & EXPERIENCE (Grid Layout) ================= */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column 1: Education (Green Theme) */}
          <div className="bg-[#CCE2DC]/30 p-8 rounded-[32px] border border-[#CCE2DC]">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-white rounded-full text-[#5C5552] shadow-sm"><GraduationCap size={20}/></div>
              <h2 className="text-xl font-bold text-[#4A464F]">Education</h2>
            </div>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-white/50">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-[#8FA39D]"></div>
                  <span className="text-xs font-bold text-[#8FA39D] tracking-wider block mb-1">{item.period}</span>
                  <h3 className="text-lg font-bold text-[#4A464F] leading-snug mb-1">{item.school}</h3>
                  <p className="text-sm text-[#5C5552] font-medium">{item.degree}</p>
                  <p className="text-xs text-[#8C857B] mt-1">{item.dept}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Experience & Awards (Lavender Theme) */}
          <div className="bg-[#CDC8D3]/20 p-8 rounded-[32px] border border-[#CDC8D3]">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-white rounded-full text-[#5C5552] shadow-sm"><Award size={20}/></div>
              <h2 className="text-xl font-bold text-[#4A464F]">Experience & Awards</h2>
            </div>

            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <div key={index} className="bg-white/60 p-5 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs px-2 py-1 rounded font-bold ${item.type === 'award' ? 'bg-[#E3AEAE]/20 text-[#AA7B81]' : 'bg-[#E7CBA7]/20 text-[#8C7B70]'}`}>
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#4A464F] mb-1">{item.title}</h3>
                  <p className="text-sm text-[#8C857B]">{item.org}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT ME (Split Layout with Beige) ================= */}
      <section id="about" className="mb-24 bg-[#E7CBA7]/10 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          
          <div className="md:col-span-4">
            <h2 className="text-3xl font-serif font-bold text-[#4A464F] mb-6 flex items-center gap-3">
              <User className="text-[#E7CBA7]" size={32}/> About Me
            </h2>
            <div className="w-16 h-1 bg-[#E7CBA7] mb-6"></div>
            <p className="text-[#8C857B] text-sm leading-relaxed">
              Research centers on human emotion, group therapy, couple therapy, experiential approaches to psychotherapy, and empathy. I am deeply drawn to the dialogue between psychological healing and aesthetics.
            </p>
          </div>

          <div className="md:col-span-8 space-y-6 text-[#5C5552] text-lg leading-loose font-light">
            <p>
              因著工作，合作，認識了一些夥伴，在這些交流中彼此成長，也長成。有一些名謂或抬頭，不過那只是世界的一些指稱。其中倒也不代表，或意味著什麼。
            </p>
            <p>
              跨領域成就了背景的多元，思維上的多絮，不過終究為人，亦是常人，受五蘊之擾。
            </p>
            <p className="font-medium text-[#4A464F]">
              研究的主軸是人類的情緒、團體治療、伴侶治療、經驗取向治療、與同理心。對心理治療與美學感到熱衷。
            </p>
          </div>

        </div>
      </section>

      {/* ================= TRAINING & SKILLS (Collage Cards) ================= */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-16">
          {skills.map((skill, i) => (
            <span key={i} className="px-4 py-2 bg-white border border-[#E3AEAE] text-[#5C5552] rounded-full text-sm shadow-sm hover:bg-[#E3AEAE] hover:text-white transition-colors cursor-default">
              {skill}
            </span>
          ))}
        </div>

        {/* Training Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="col-span-full mb-4 flex items-center gap-4">
             <div className="h-px bg-[#CDC8D3] flex-grow"></div>
             <h2 className="text-2xl font-serif text-[#4A464F]">Psychotherapy Training</h2>
             <div className="h-px bg-[#CDC8D3] flex-grow"></div>
          </div>

          {training.map((t, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-[24px] border border-[#F0F0F0] shadow-sm hover:border-[#E3AEAE]/50 transition-colors relative overflow-hidden">
              {/* Decorative Circle */}
              <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-[#FFFDF6] rounded-full border border-[#F5F5F0]"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="p-3 bg-[#FFFDF6] rounded-xl border border-[#F0F0F0]">{t.icon}</div>
                <h3 className="font-bold text-[#4A464F] text-lg">{t.category}</h3>
              </div>
              <ul className="space-y-4 relative z-10">
                {t.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[#5C5552] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E3AEAE] mt-2 shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SPEAKING EXPERIENCE (Timeline List) ================= */}
      <section className="bg-[#FFFDF6] py-20 border-t border-[#F0F0F0]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-16">
             <Mic className="text-[#E3AEAE]" size={28} />
             <h2 className="text-3xl font-serif text-[#4A464F]">Speaking Experience</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left: Psychology */}
            <div>
              <h3 className="text-lg font-bold text-[#4A464F] mb-8 pb-2 border-b-2 border-[#CCE2DC] inline-block">
                Psychology & Counseling
              </h3>
              <div className="space-y-8">
                {speechPsychology.map((s, i) => (
                  <div key={i} className="relative pl-6 border-l border-[#CCE2DC]">
                    <div className="absolute -left-[3px] top-2 w-1.5 h-1.5 bg-[#CCE2DC] rounded-full"></div>
                    <span className="text-sm font-bold text-[#8FA39D]">{s.year}</span>
                    <h4 className="font-medium text-[#5C5552] mt-1 mb-1">{s.title}</h4>
                    <p className="text-xs text-[#8C857B]">{s.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dentistry */}
            <div>
              <h3 className="text-lg font-bold text-[#4A464F] mb-8 pb-2 border-b-2 border-[#E7CBA7] inline-block">
                Dentistry & Management
              </h3>
              <div className="space-y-8">
                {speechDentistry.map((s, i) => (
                  <div key={i} className="relative pl-6 border-l border-[#E7CBA7]">
                    <div className="absolute -left-[3px] top-2 w-1.5 h-1.5 bg-[#E7CBA7] rounded-full"></div>
                    <span className="text-sm font-bold text-[#AA9B8A]">{s.year}</span>
                    <h4 className="font-medium text-[#5C5552] mt-1 mb-1">{s.title}</h4>
                    <p className="text-xs text-[#8C857B]">{s.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PUBLICATIONS (Simple Clean List) ================= */}
      <section className="bg-[#CCE2DC]/20 py-20 px-6">
        <div className="max-w-5xl mx-auto bg-white p-10 md:p-16 rounded-[40px] shadow-sm border border-[#CCE2DC]/50">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-2 bg-[#CCE2DC] rounded-lg text-[#5C5552]"><BookOpen size={24} /></div>
            <h2 className="text-2xl font-serif font-bold text-[#4A464F]">Academic Publications</h2>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm font-bold tracking-widest text-[#8FA39D] uppercase mb-6 flex items-center gap-2">
                <Sparkles size={14}/> Journal Articles
              </h3>
              <ul className="space-y-4">
                {publications.journals.map((pub, i) => (
                  <li key={i} className="text-[#5C5552] leading-relaxed text-sm pl-4 border-l-2 border-[#F0F0F0]">
                    {pub}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold tracking-widest text-[#8FA39D] uppercase mb-6 flex items-center gap-2">
                <Sparkles size={14}/> Conference Presentations
              </h3>
              <ul className="space-y-6">
                {publications.conferences.map((pub, i) => (
                  <li key={i} className="text-[#5C5552] leading-relaxed text-sm pl-4 border-l-2 border-[#F0F0F0]">
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