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
  Briefcase
} from 'lucide-react';

const Portfolio = () => {
  // --- Data & Content ---
  
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
      title: "首獎 (First Prize)",
      org: "臺灣諮商心理學會 年度優秀碩博士論文",
      type: "award"
    },
    {
      year: "16-19",
      title: "導師 Mentor / Instructor",
      org: "臺北醫學大學口腔衛生學系",
      type: "job"
    },
    {
      year: "16-18",
      title: "輔導委員 Advisory Supervisor",
      org: "教育部國民及學前教育署，台灣",
      type: "job"
    }
  ];

  const speechPsychology = [
    { year: "2025", title: "走進東歐研討會：學生研究投入的視野拓展與動機啟發", location: "清華大學教育心理與諮商學系" },
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
      "Jen, C.-W., & Hsu, Y.-K. (2025, November 15). Narrative inquiry for the transformation process of alexithymia tendency college students in group counseling based on interpersonal interaction orientation [Conference presentation]. Taiwan Counseling Association Annual Meeting, Taichung, Taiwan.",
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
      icon: <Brain className="w-5 h-5 text-blue-800" />,
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
      icon: <Anchor className="w-5 h-5 text-amber-700" />,
      items: [
        "Attachment-Oriented Individual Counseling – CPTSD Practice Workshop（依戀取向個別諮商－複雜性創傷療癒實務工作坊）",
        "Mentalization-Based Therapy (MBT) for Borderline Personality Disorder / Online Course（心智化治療 MBT 於邊緣性人格障礙之應用）"
      ]
    },
    {
      category: "Group Therapy",
      icon: <Users className="w-5 h-5 text-stone-600" />,
      items: [
        "Unstructured Group Counseling for College Students with Alexithymia（非結構團體諮商帶領－大學生述情障礙人際關係團體）",
        "Interpersonal/Family and Self Exploration Group Therapy – Second Edition（人際、家庭與自我關係探究團體－第二期）",
        "Interpersonal/Family and Self Exploration Group Therapy – First Edition（人際、家庭與自我關係探究團體－第一期）",
        "Practical Supervision in Unstructured Group Therapy（非結構團體諮商督導之實務）"
      ]
    },
    {
      category: "Other Approaches",
      icon: <Layers className="w-5 h-5 text-slate-600" />,
      items: [
        "Application of Gestalt Approach in Counseling / Online Course（心理諮商運用－完形取向）"
      ]
    }
  ];

  const skills = [
    "品牌策發展顧問", "品牌識別", "團隊營運優化", "專案管理", "平面設計", "醫療糾紛處理"
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-slate-800 selection:bg-amber-100">
      
      {/* --- Navigation --- */}
      <nav className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-serif font-bold tracking-wider text-slate-900">Wade Jen</div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#about" className="hover:text-blue-900 transition-colors">About</a>
              <a href="#home" className="hover:text-blue-900 transition-colors">Home</a>
              <div className="group relative cursor-pointer flex items-center gap-1 hover:text-blue-900">
                Eis Heauton <span className="text-xs">▼</span>
                <div className="absolute top-full left-0 mt-2 w-32 bg-white shadow-lg rounded-md py-2 hidden group-hover:block border border-stone-100">
                  <a href="#" className="block px-4 py-2 hover:bg-stone-50">合一</a>
                  <a href="#" className="block px-4 py-2 hover:bg-stone-50">自由</a>
                </div>
              </div>
              <div className="group relative cursor-pointer flex items-center gap-1 hover:text-blue-900">
                Psychotherapy <span className="text-xs">▼</span>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block border border-stone-100">
                  <a href="#" className="block px-4 py-2 hover:bg-stone-50">Person Centered</a>
                  <a href="#" className="block px-4 py-2 hover:bg-stone-50">Reality Therapy</a>
                  <a href="#" className="block px-4 py-2 hover:bg-stone-50">Group Therapy</a>
                </div>
              </div>
              <a href="#project" className="hover:text-blue-900 transition-colors flex items-center gap-1">Project <span className="text-xs">▶</span></a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* --- Hero Section: Profile + Education Only --- */}
        <section id="home" className="flex flex-col lg:flex-row gap-12 items-start mb-12">
          
          {/* Left: Photo & Title */}
          <div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-64 h-64 mb-8">
              <div className="absolute inset-0 rounded-full border-[1px] border-slate-200 translate-x-3 translate-y-3"></div>
              <div className="w-full h-full rounded-full overflow-hidden shadow-xl border-4 border-white relative z-10">
                <img 
                  src="/Photos/wade.png" 
                  alt="Jen Chi-Wei" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">任祈蔚 Jen Chi-Wei</h1>
            <div className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider mb-4 uppercase">
              Licensed Counseling Psychologist (Taiwan)
            </div>
            <div className="space-y-1 text-slate-600">
              <p className="font-medium">高考諮商心理師</p>
              <p className="text-sm leading-relaxed text-slate-500">
                Ph.D. Program in Clinical Psychology, <br/>National Taiwan University
              </p>
            </div>
          </div>

          {/* Right: Education Timeline ONLY */}
          <div className="lg:w-2/3 bg-white p-8 rounded-2xl shadow-sm border border-stone-100 h-full">
            <div className="flex items-center gap-3 mb-8 border-b border-stone-100 pb-4">
              <GraduationCap className="text-blue-900" size={24} />
              <h2 className="text-xl font-bold text-slate-800">Education</h2>
            </div>

            <div className="space-y-10 relative pl-2">
              {/* Vertical Line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-stone-200"></div>

              {educationData.map((item, index) => (
                <div key={index} className="relative pl-8 group">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 bg-blue-900"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{item.school}</h3>
                    <span className="text-sm font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                      {item.period}
                    </span>
                  </div>
                  
                  <h4 className="text-md text-slate-700 font-medium mb-1">{item.degree}</h4>
                  <p className="text-sm text-slate-500 font-light">{item.dept}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- New Split Section: Experience vs Skills --- */}
        <section className="mb-24 grid md:grid-cols-3 gap-8">
          
          {/* Left Block: Experience & Awards (Span 2) */}
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex items-center gap-3 mb-8 border-b border-stone-100 pb-4">
              <Award className="text-amber-600" size={24} />
              <h2 className="text-xl font-bold text-slate-800">Experience & Awards</h2>
            </div>
            
            <div className="space-y-8 relative pl-2">
               <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-stone-200"></div>
               {experienceData.map((item, index) => (
                <div key={index} className="relative pl-8 group">
                  <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-sm z-10 ${item.type === 'award' ? 'bg-amber-500' : 'bg-stone-500'}`}></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="text-lg font-bold text-slate-800">{item.title}</h3>
                    <span className="text-sm font-mono text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-md text-slate-600 font-medium">{item.org}</h4>
                </div>
               ))}
            </div>
          </div>

          {/* Right Block: Professional Skills (Span 1) */}
          <div className="md:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-stone-100 h-fit">
             <div className="flex items-center gap-3 mb-6 pb-2 border-b border-stone-100">
                <Palette className="text-slate-500" size={20}/> 
                <h2 className="text-lg font-bold text-slate-700">Professional Skills</h2>
             </div>
             
             <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((skill, i) => (
                  <span key={i} className="px-3 py-2 bg-stone-50 text-stone-600 rounded-lg text-sm border border-stone-100 hover:bg-stone-100 hover:border-stone-200 transition-colors">
                    {skill}
                  </span>
                ))}
             </div>
             
             <p className="text-xs text-slate-400 italic leading-relaxed">
               Specialized in cross-disciplinary integration: Brand consulting, Team operations, Project management, and Medical dispute resolution.
             </p>
          </div>

        </section>

        {/* --- About Me Section --- */}
        <section id="about" className="mb-24 grid md:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-stone-100">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
              <User className="text-amber-700" size={24}/> About Me
            </h2>
            <div className="space-y-6 text-slate-600 leading-loose text-justify">
              <p>
                多數的時候都在閱讀，讀哲學、讀心理學、宗教。世界的現象自覺看不懂，讀了很多書，來找對於世界的解答。因著工作，合作，認識了一些夥伴，在這些交流中彼此成長，也長成。
              </p>
              <p>
                有一些名謂或抬頭，不過那只是世界的一些指稱。其中倒也不代表，或意味著什麼。跨領域成就了背景的多元，思維上的多絮，不過終究為人，亦是常人，受五蘊之擾。
              </p>
              <p>
                研究的主軸是人類的情緒、團體治療、伴侶治療、經驗取向治療、與同理心。對心理治療與美學感到熱衷。
              </p>
            </div>
          </div>

          <div className="bg-[#EFECE8] p-10 rounded-2xl relative flex flex-col justify-center">
            <Quote className="absolute top-6 left-6 text-amber-900/10 w-16 h-16" />
            <div className="relative z-10 space-y-6">
              <p className="font-serif italic text-slate-700 text-lg leading-relaxed">
                "Most of the time, I read—philosophy, psychology, and religion. The more I observe the world, the more I find it difficult to fully comprehend; and so, through reading, I search for a way to make sense of it."
              </p>
              <p className="font-serif italic text-slate-700 text-lg leading-relaxed">
                "There are titles and names that the world assigns, but they are only signs, not essences. Interdisciplinary experiences have shaped a diverse background and a many-layered way of thinking. Yet, after all, I am simply human—an ordinary being, still entangled in the five aggregates of existence."
              </p>
              <p className="text-sm text-slate-600 border-t border-stone-300 pt-4 mt-4">
                My research centers on human emotion, group therapy, couple therapy, experiential approaches to psychotherapy, and empathy. I am deeply drawn to the dialogue between psychological healing and aesthetics.
              </p>
            </div>
          </div>
        </section>

        {/* --- Psychotherapy Training --- */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px bg-slate-200 flex-grow"></div>
            <Brain className="text-slate-400" size={20} />
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Psychotherapy Training</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {training.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-stone-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-stone-50">
                  {t.icon}
                  <h3 className="font-bold text-slate-700">{t.category}</h3>
                </div>
                <ul className="space-y-3">
                  {t.items.map((item, i) => (
                    <li key={i} className="text-sm text-slate-600 pl-3 border-l-2 border-stone-200 hover:border-blue-300 transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- Speaking Experience (Split) --- */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-10">
             <Mic className="text-slate-800" size={24} />
             <h2 className="text-2xl font-bold text-slate-800">Speaking Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Psychology */}
            <div>
              <h3 className="text-lg font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-900"></span>
                Psychology & Counseling
              </h3>
              <div className="space-y-6">
                {speechPsychology.map((s, i) => (
                  <div key={i} className="group">
                    <div className="flex items-baseline gap-4 mb-1">
                      <span className="text-lg font-bold text-slate-300 group-hover:text-blue-900 transition-colors">{s.year}</span>
                      <h4 className="font-bold text-slate-800">{s.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">{s.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dental & Brand */}
            <div>
              <h3 className="text-lg font-bold text-amber-800 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-800"></span>
                Dentistry & Management
              </h3>
              <div className="space-y-6">
                {speechDentistry.map((s, i) => (
                  <div key={i} className="group">
                    <div className="flex items-baseline gap-4 mb-1">
                      <span className="text-lg font-bold text-slate-300 group-hover:text-amber-800 transition-colors">{s.year}</span>
                      <h4 className="font-bold text-slate-800">{s.title}</h4>
                    </div>
                    <p className="text-sm text-slate-500 pl-14">{s.location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Academic Publications --- */}
        <section id="academic" className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-slate-800" size={24} />
            <h2 className="text-2xl font-bold text-slate-800">Academic Publications</h2>
          </div>

          <div className="mb-10">
            <h3 className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm font-bold tracking-wide mb-6 uppercase">
              Journal Articles
            </h3>
            <ul className="space-y-4">
              {publications.journals.map((pub, i) => (
                <li key={i} className="pl-8 -indent-8 text-slate-700 leading-relaxed text-justify text-sm md:text-base">
                  <FileText className="inline-block w-4 h-4 mr-2 text-slate-400" />
                  {pub}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded text-sm font-bold tracking-wide mb-6 uppercase">
              Conference Presentations
            </h3>
            <ul className="space-y-6">
              {publications.conferences.map((pub, i) => (
                <li key={i} className="pl-8 -indent-8 text-slate-700 leading-relaxed text-justify text-sm md:text-base">
                  <span className="inline-block w-2 h-2 rounded-full bg-stone-300 mr-4 mb-0.5"></span>
                  {pub}
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-stone-200 py-12 text-center text-slate-400 text-sm font-serif">
        <p>© 2026 Jen Chi-Wei. All rights reserved.</p>
        <p className="mt-2 text-xs">Designed with Morandi Aesthetic</p>
      </footer>

    </div>
  );
};

export default Portfolio;