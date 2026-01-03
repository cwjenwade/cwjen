import React from 'react';
import { GraduationCap, BookOpen, Award, User, Mic, Brain, Wrench, Layers } from 'lucide-react';

const FullAcademicProfile = () => {
  // --- Data Definitions ---

  const educationData = [
    {
      id: 1,
      year: "2023 - Present",
      degree: "Ph.D. Program in Clinical Psychology",
      school: "National Taiwan University",
      dept: "國立臺灣大學心理學系暨研究所 臨床心理博士班研究",
      category: "psychology",
      align: "left"
    },
    {
      id: 2,
      year: "2018 - 2021",
      degree: "M.A. in Educational Psychology and Counseling",
      school: "National Tsing Hua University",
      dept: "國立清華大學 教育心理與諮商學系 碩士",
      category: "psychology",
      align: "left"
    },
    {
      id: 3,
      year: "2014 - 2018",
      degree: "B.S. in Oral Hygiene",
      school: "Kaohsiung Medical University",
      dept: "高雄醫學大學 口腔衛生學系 學士",
      category: "dentistry",
      align: "right"
    }
  ];

  const trainingData = [
    {
      category: "Emotionally Focused Therapy (EFT)",
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
      items: [
        "Attachment-Oriented Individual Counseling – CPTSD Practice Workshop（依戀取向個別諮商－複雜性創傷療癒實務工作坊）",
        "Mentalization-Based Therapy (MBT) for Borderline Personality Disorder / Online Course（心智化治療 MBT 於邊緣性人格障礙之應用）"
      ]
    },
    {
      category: "Group Therapy",
      items: [
        "Unstructured Group Counseling for College Students with Alexithymia（非結構團體諮商帶領－大學生述情障礙人際關係團體）",
        "Interpersonal/Family and Self Exploration Group Therapy – Second Edition（人際、家庭與自我關係探究團體－第二期）",
        "Interpersonal/Family and Self Exploration Group Therapy – First Edition（人際、家庭與自我關係探究團體－第一期）",
        "Practical Supervision in Unstructured Group Therapy（非結構團體諮商督導之實務）"
      ]
    },
    {
      category: "Other Approaches",
      items: [
        "Application of Gestalt Approach in Counseling / Online Course（心理諮商運用－完形取向）"
      ]
    }
  ];

  const speechData = [
    { year: "2025", title: "走進東歐研討會：學生研究投入的視野拓展與動機啟發", loc: "清華大學教育心理與諮商學系" },
    { year: "2023", title: "品牌從識別到信任—品牌經營與醫病關係", loc: "荷蘭愛齊股份有限公司台灣區" },
    { year: "2022", title: "共識、共創、共榮：診所品牌文化與團隊信任的再設計", loc: "唯芯聯盟牙醫診所" },
    { year: "2022", title: "傾聽的藝術：跨世代陪談與人文關懷的實踐哲學", loc: "老玩客陪談師訓練計畫" },
    { year: "2019", title: "未來診間的原型：專業分工與跨域整合的臨床革新", loc: "荷蘭愛齊股份有限公司台灣區" },
    { year: "2019", title: "數位牙科的臨界點：協作與臨床創新", loc: "OHI數位牙醫學院協會兩岸交流會議" },
    { year: "2018", title: "團隊為本的精準醫療：矯正門診中的協作實踐與臨床", loc: "荷蘭愛齊股份有限公司台灣區" },
    { year: "2017", title: "預防醫學中談齒顎矯正", loc: "高雄醫學大學口腔衛生學系" },
    { year: "2017", title: "健康溝通與臨床實踐：從教育到行動的專業養成", loc: "經國管理暨健康學院口腔衛生學系" },
    { year: "2015", title: "從技術到信任：矯正門診專業協作的臨床基礎與執行架構", loc: "荷蘭愛齊股份有限公司台灣區" }
  ];

  const publications = [
    {
      type: "Journal Article",
      items: [
        "任祈蔚（2025）。以依附為基礎的家族治療於青少年憂鬱與自殺介入之應用與本土化考量。輔導季刊，61(3)，33-49。"
      ]
    },
    {
      type: "Conference Presentations",
      items: [
        "Jen, C.-W., & Hsu, Y.-K. (2025, November 15). Narrative inquiry for the transformation process of alexithymia tendency college students in group counseling based on interpersonal interaction orientation [Conference presentation]. Taiwan Counseling Association Annual Meeting, Taichung, Taiwan.",
        "Jen, C. W. Hsu, Y. K. (2025, June 25-29). The Emotions and Emodiversity in Alexithymia. [Conference presentation] 56th International Annual Meeting of the Society for Psychotherapy Research (SPR). Krakow, Poland.",
        "Jen, C.-W., Hsu, Y. K., & Chuah, S. K. (2025, June 25-29). Defensiveness in Encounter Groups for Taiwanese Sexual Minority Males. [Conference presentation] 56th International Annual Meeting of the Society for Psychotherapy Research (SPR). Krakow, Poland.",
        "Jen, C. W. (2024, Nov 25-29). Integration of Group Counseling in Taiwan’s Learning Assistance Program: an Action Research Approach. [Poster presentation] 16th The Asian Conference on Education.",
        "Wu, H.-K., & Jen, C. W. (2024, November 22-23). Bridging tongues through the eyes of the young: Exploring English learning experiences among rural indigenous fourth graders in Taiwan [Conference presentation]. 2024 International Conference on Educational Innovation, Hsinchu, Taiwan.",
        "方敏琪、任祈蔚（2024年10月6日）。成年男性性少數於轉換階段的困境-非結構團體歷程研究〔海報發表〕2024 年台灣團體諮商與治療研究學會學會年會暨學術研討會。彰化，台灣。",
        "Jen, C. W., Su, C. C., & Hsu, Y. K. (2024, June 25-29). Preliminary exploration of the benefits for alexithymia tendency participants in a counseling group by short-term interpersonal psychodynamic approach. [Poster presentation] 55th International Annual Meeting of the Society for Psychotherapy Research (SPR). Ottawa, Canada."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* 1. Header Section */}
        <div className="flex flex-col md:flex-row items-center p-8 md:p-12 bg-white border-b border-slate-100">
          <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 relative mb-6 md:mb-0 md:mr-10">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-slate-50 shadow-lg">
              <img src="/api/placeholder/224/224" alt="Jen Chi-Wei" className="w-full h-full object-cover"/>
            </div>
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              任祈蔚 <span className="text-slate-600 font-medium">Jen Chi-Wei</span>
            </h1>
            <div className="inline-block bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-semibold tracking-wide mb-4">
              LICENSED COUNSELING PSYCHOLOGIST (TAIWAN)
            </div>
            <div className="space-y-1 text-slate-600 text-sm md:text-base">
               <p>高考諮商心理師</p>
               <p>Ph.D. Program in Clinical Psychology, National Taiwan University</p>
            </div>
          </div>
        </div>

        {/* 2. About Me Section */}
        <div className="p-8 md:p-12 bg-slate-50 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <User size={20} /> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-slate-700 leading-relaxed text-justify">
            <div>
              <p className="mb-4">
                多數的時候都在閱讀，讀哲學、讀心理學、宗教。世界的現象自覺看不懂，讀了很多書，來找對於世界的解答。因著工作，合作，認識了一些夥伴，在這些交流中彼此成長，也長成。
              </p>
              <p className="mb-4">
                有一些名謂或抬頭，不過那只是世界的一些指稱。其中倒也不代表，或意味著什麼。跨領域成就了背景的多元，思維上的多絮，不過終究為人，亦是常人，受五蘊之擾。
              </p>
              <p>
                研究的主軸是人類的情緒、團體治療、伴侶治療、經驗取向治療、與同理心。對心理治療與美學感到熱衷。
              </p>
            </div>
            <div className="font-serif italic text-slate-600 bg-white p-6 rounded shadow-sm border border-slate-100">
              <p className="mb-4">
                "Most of the time, I read—philosophy, psychology, and religion. The more I observe the world, the more I find it difficult to fully comprehend; and so, through reading, I search for a way to make sense of it."
              </p>
              <p className="mb-4">
                "There are titles and names that the world assigns, but they are only signs, not essences. Interdisciplinary experiences have shaped a diverse background and a many-layered way of thinking. Yet, after all, I am simply human—an ordinary being, still entangled in the five aggregates of existence."
              </p>
              <p>
                 My research centers on human emotion, group therapy, couple therapy, experiential approaches to psychotherapy, and empathy. I am deeply drawn to the dialogue between psychological healing and aesthetics.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Education Timeline (Dual Track) */}
        <div className="py-12 px-6 md:px-12 bg-white border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-10 text-center md:text-left">
            Education & Professional Background
          </h2>
          
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 transform -translate-x-1/2"></div>
            
            {/* Labels */}
            <div className="hidden md:flex justify-between w-full mb-8 text-xs font-bold tracking-widest text-slate-400 uppercase">
              <div className="w-1/2 text-center pr-8">Psychology</div>
              <div className="w-1/2 text-center pl-8">Dentistry / Oral Hygiene</div>
            </div>

            <div className="space-y-8 md:space-y-12">
              {educationData.map((item) => (
                <div key={item.id} className={`flex flex-col md:flex-row items-center ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`w-full md:w-1/2 p-4 ${item.align === 'right' ? 'md:pl-12 text-center md:text-left' : 'md:pr-12 text-center md:text-right'}`}>
                    <div className="mb-1 text-slate-500 text-sm font-medium">{item.year}</div>
                    <h3 className="text-lg font-bold text-slate-800">{item.school}</h3>
                    <h4 className="text-md text-slate-700 font-medium mb-1">{item.degree}</h4>
                    <p className="text-slate-500 text-sm">{item.dept}</p>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8 my-2 md:my-0 flex-shrink-0 z-10">
                    <div className={`w-4 h-4 rounded-full border-2 border-white shadow-sm ${item.category === 'psychology' ? 'bg-slate-800' : 'bg-slate-400'}`}></div>
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Clinical Training */}
        <div className="p-8 md:p-12 bg-slate-50 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
            <Brain size={20} /> Psychotherapy Training
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {trainingData.map((section, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                <h3 className="text-md font-bold text-slate-700 mb-3 border-b pb-2 border-slate-100">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((course, cIdx) => (
                    <li key={cIdx} className="text-sm text-slate-600 pl-3 border-l-2 border-slate-300">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Experience & Skills */}
        <div className="p-8 md:p-12 bg-white border-b border-slate-200">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Experience & Awards */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Award size={20} /> Experience & Awards
              </h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <span className="font-bold text-slate-800 w-12 flex-shrink-0">2025</span>
                  <div>
                    <h4 className="font-bold text-slate-700">首獎 (First Prize)</h4>
                    <p className="text-slate-600 text-sm">臺灣諮商心理學會 年度優秀碩博士論文</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-slate-800 w-12 flex-shrink-0">16-19</span>
                  <div>
                    <h4 className="font-bold text-slate-700">導師 Mentor / Instructor</h4>
                    <p className="text-slate-600 text-sm">臺北醫學大學口腔衛生學系</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-bold text-slate-800 w-12 flex-shrink-0">16-18</span>
                  <div>
                    <h4 className="font-bold text-slate-700">輔導委員 Advisory Supervisor</h4>
                    <p className="text-slate-600 text-sm">教育部國民及學前教育署，台灣</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Professional Skills */}
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Wrench size={20} /> Professional Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "品牌策發展顧問", "品牌識別", "團隊營運優化", 
                  "專案管理", "平面設計", "醫療糾紛處理"
                ].map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500 italic">
                Specialized in cross-disciplinary integration: Brand consulting, Team operations, Project management, and Medical dispute resolution.
              </p>
            </div>

          </div>
        </div>

        {/* 6. Speaking Experience */}
        <div className="p-8 md:p-12 bg-slate-50 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
            <Mic size={20} /> Speaking Experience
          </h2>
          <div className="space-y-4">
            {speechData.map((speech, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:gap-6 border-l-2 border-slate-300 pl-4 py-1">
                <span className="font-bold text-slate-800 w-16 flex-shrink-0">{speech.year}</span>
                <div>
                  <h4 className="font-semibold text-slate-700">{speech.title}</h4>
                  <p className="text-slate-500 text-sm">{speech.loc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7. Academic Publications */}
        <div className="p-8 md:p-12 bg-white">
          <h2 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-2">
            <BookOpen size={20} /> Academic Publications
          </h2>
          <div className="space-y-8">
            {publications.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">
                  {section.type}
                </h3>
                <ul className="space-y-4">
                  {section.items.map((pub, pIdx) => (
                    <li key={pIdx} className="pl-4 text-sm leading-relaxed text-slate-700 text-justify" style={{ textIndent: '-1em', marginLeft: '1em' }}>
                      {pub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FullAcademicProfile;