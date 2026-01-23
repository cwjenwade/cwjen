export const DICTIONARY = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      'eis-heauton': 'Eis-heauton',
      psychotherapy: 'Psychotherapy',
      couple: 'Couple Therapy',
      group: 'Group Therapy',
      project: 'Projects',
    },
    home: {
      title: 'Welcome to Wade Jen',
      description: 'Academic and professional resources on psychotherapy and counseling.',
      content: 'This site shares work on psychotherapy, counselling and related projects.',
    },
    about: { title: 'About Wade Jen', description: 'Professional background and academic work.' },
    psychotherapy: { title: 'Psychotherapy', description: 'Approaches and resources.' },
    couple: {
      title: 'Couple Therapy',
      description: 'Work with couples.',
      qa: [
        { q: 'How does the therapist work in couple therapy?', a: 'Therapists focus on present interactional patterns in the room rather than repeatedly rehashing past events.' },
        { q: 'Can therapy continue if one partner is exhausted or unsure?', a: 'Fatigue is treated as an important relational signal; therapy begins by understanding interactional patterns rather than requiring immediate commitment.' },
        { q: 'Will I be asked to share emotions I am not ready for?', a: 'Therapists adjust pacing so emotional experience is accessed within tolerable limits; depth and speed are tailored individually.' },
      ],
    },
    group: { title: 'Group Therapy', description: 'Group processes and research.' },
    project: { title: 'Projects', description: 'Research and community projects.' },
  },
  zh: {
    navigation: {
      home: '首頁',
      about: '關於',
      'eis-heauton': '思想起',
      psychotherapy: '心理治療',
      couple: '伴侶治療',
      group: '團體治療',
      project: '專案計畫',
    },
    home: {
      title: '歡迎來到 Wade Jen',
      description: '心理治療與諮商的學術與專業資源。',
      content: '本站分享心理治療、諮商與相關計畫工作。',
    },
    about: { title: '關於 Wade Jen', description: '專業背景與學術工作。' },
    psychotherapy: { title: '心理治療', description: '治療方法與資源。' },
    couple: {
      title: '伴侶治療',
      description: '伴侶工作。',
      qa: [
        { q: '在伴侶治療中，治療師會如何工作？', a: '治療師會協助你們在當下覺察互動模式，而不是重複回顧事件。' },
        { q: '如果其中一方累了還能繼續治療嗎？', a: '疲累被視為重要的關係訊號；治療先理解互動模式，而不是要求立刻承諾。' },
        { q: '會不會被要求說出尚未準備好的情緒？', a: '治療師會調整節奏，確保在可承受範圍內逐步觸及情緒。' },
      ],
    },
    group: { title: '團體治療', description: '團體過程與研究。' },
    project: { title: '專案計畫', description: '研究與社群計畫。' },
  },
} as const;

export type Dict = typeof DICTIONARY;
export type Locale = keyof Dict;
export const DICTIONARY = {
  en: {
    navigation: { home: 'Home', about: 'About', 'eis-heauton': 'Eis-heauton', psychotherapy: 'Psychotherapy', couple: 'Couple Therapy', group: 'Group Therapy', project: 'Projects' },
    home: { title: 'Welcome to Wade Jen', description: 'Academic and professional resources on psychotherapy and counseling.', content: 'This site shares work on psychotherapy, counselling and related projects.' },
    about: { title: 'About Wade Jen', description: 'Professional background and academic work.' },
    psychotherapy: { title: 'Psychotherapy', description: 'Approaches and resources.' },
    couple: { title: 'Couple Therapy', description: 'Work with couples.' },
    group: { title: 'Group Therapy', description: 'Group processes and research.' },
    project: { title: 'Projects', description: 'Research and community projects.' }
  },
  zh: {
    navigation: { home: '首頁', about: '關於', 'eis-heauton': '思想起', psychotherapy: '心理治療', couple: '伴侶治療', group: '團體治療', project: '專案計畫' },
    home: { title: '歡迎來到 Wade Jen', description: '心理治療與諮商的學術與專業資源。', content: '本站分享心理治療、諮商與相關計畫工作。' },
    about: { title: '關於 Wade Jen', description: '專業背景與學術工作。' },
    psychotherapy: { title: '心理治療', description: '治療方法與資源。' },
    couple: { title: '伴侶治療', description: '伴侶工作。' },
    group: { title: '團體治療', description: '團體過程與研究。' },
    project: { title: '專案計畫', description: '研究與社群計畫。' }
  }
} as const;

export type Dict = typeof DICTIONARY;
export type Locale = keyof Dict;
export const DICTIONARY = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      'eis-heauton': 'Eis-heauton',
      psychotherapy: 'Psychotherapy',
      couple: 'Couple Therapy',
      group: 'Group Therapy',
      project: 'Projects'
    },
    home: {
      title: 'Welcome to Wade Jen',
      description: 'Academic and professional resources on psychotherapy and counseling.',
      content: 'This site shares work on psychotherapy, counselling and related projects.'
    },
    about: {
      title: 'About Wade Jen',
      description: 'Professional background and academic work.',
    },
    'eis-heauton': {
      title: 'Eis-heauton',
      description: 'Thoughts and writings.'
    },
    psychotherapy: {
      title: 'Psychotherapy',
      description: 'Approaches and resources.'
    },
    couple: {
      title: 'Couple Therapy',
      description: 'Work with couples.'
    },
    group: {
      title: 'Group Therapy',
      description: 'Group processes and research.'
    },
    project: {
      title: 'Projects',
      description: 'Research and community projects.'
    },
  },
  zh: {
    navigation: {
      home: '首頁',
      about: '關於',
      'eis-heauton': '思想起',
      psychotherapy: '心理治療',
      couple: '伴侶治療',
      group: '團體治療',
      project: '專案計畫'
    },
    home: {
      title: '歡迎來到 Wade Jen',
      description: '心理治療與諮商的學術與專業資源。',
      content: '本站分享心理治療、諮商與相關計畫工作。'
    },
    about: {
      title: '關於 Wade Jen',
      description: '專業背景與學術工作。',
    },
    'eis-heauton': {
      title: '思想起',
      description: '思考與書寫。'
    },
    psychotherapy: {
      title: '心理治療',
      description: '治療方法與資源。'
    },
    couple: {
      title: '伴侶治療',
      description: '伴侶工作。'
    },
    group: {
      title: '團體治療',
      description: '團體過程與研究。'
    },
    project: {
      title: '專案計畫',
      description: '研究與社群計畫。'
    },
  },
} as const;

export type Dict = typeof DICTIONARY;
export type Locale = keyof Dict;
diff --git a/lib/dictionary.ts b/lib/dictionary.ts
index 381064e721a1df31d3e0a57a74d71bcabd04a0bf..923a16dab1af2a2bdccaf821f3d73123a7fa31ba 100644
--- a/lib/dictionary.ts
+++ b/lib/dictionary.ts
@@ -4,82 +4,370 @@ export const DICTIONARY = {
       home: 'Home',
       about: 'About',
       'eis-heauton': 'Eis-heauton',
       psychotherapy: 'Psychotherapy',
       couple: 'Couple Therapy',
       group: 'Group Therapy',
       project: 'Projects'
     },
     home: {
       title: 'Welcome to Wade Jen',
       description: 'Academic and professional resources on psychotherapy and counseling.',
       content: 'This site shares work on psychotherapy, counselling and related projects.'
     },
     about: {
       title: 'About Wade Jen',
       description: 'Professional background and academic work.',
     },
     'eis-heauton': {
       title: 'Eis-heauton',
       description: 'Thoughts and writings.'
     },
     psychotherapy: {
       title: 'Psychotherapy',
       description: 'Approaches and resources.'
     },
-    couple: {
-      title: 'Couple Therapy',
-      description: 'Work with couples.'
-    },
     group: {
       title: 'Group Therapy',
       description: 'Group processes and research.'
     },
     project: {
       title: 'Projects',
       description: 'Research and community projects.'
     },
+    couple: {
+      title: `Couple Therapy`,
+      hero: {
+        heading: [`Attachment × Emotional Interaction`, `The First Step in Couple Therapy`],
+        intro: `The way each of us navigates intimacy is deeply connected to attachment.`,
+        imageAlt: `Two people sit facing each other in a quiet dialogue, with the image focusing on their gaze and the initial formation of connection.`,
+      },
+      attachmentStyles: {
+        heading: {
+          line1: `Attachment positions are not good or bad,`,
+          line2: `they are ways we protect ourselves.`,
+        },
+        description: `In intimate relationships, when two people approach each other with different strategies, misunderstanding can easily emerge.`,
+        withdrawer: {
+          title: `Withdrawer`,
+          subtitle: `The Withdrawer`,
+          quote: `I do not care less; I just do not know how to move closer.`,
+          paragraphs: [
+            `When conflict arises, some people pause the conversation, create distance, and first regulate their own emotions. They may look calm, even distant, as if unwilling to face the issue.`,
+            `Yet this is often a way of protecting themselves from being overwhelmed. By keeping distance, they can settle down and return to a workable state.`,
+          ],
+          highlight: `It is not indifference; they are accustomed to stabilizing by stepping back.`,
+          imageAlt: `A single person sits with head lowered at a table, conveying introspection or withdrawal into self.`,
+        },
+        pursuer: {
+          title: `Pursuer`,
+          subtitle: `The Pursuer`,
+          quote: `I am not trying to control you; I am afraid of losing you.`,
+          paragraphs: [
+            `Others are acutely sensitive to emotional distance. If a partner goes silent, changes tone, or replies more slowly, anxiety rises and they feel compelled to ask, “Do you still love me?” “Are you trying to leave again?”`,
+            `They intensify engagement, pose questions, seek dialogue, and may express strong emotions.`,
+          ],
+          highlight: `It is not clinginess or too much emotion; they move closer to confirm that the relationship is still there.`,
+          imageAlt: `One partner gestures to express experience while the other listens, depicting interaction through flowing dialogue.`,
+        },
+      },
+      negativeCycle: {
+        label: `THE NEGATIVE CYCLE`,
+        heading: {
+          line1: `We are not each other’s enemy,`,
+          line2: `we are pulled by the interaction.`,
+        },
+        intro: `What happens when these two attachment responses meet? In couple relationships, the more the withdrawer retreats, the more the pursuer presses forward. One needs space; the other needs connection.`,
+        quote: {
+          line1: `One says, “Can you give me a little quiet?”`,
+          line2: `One says, “Why have you disappeared again?”`,
+        },
+        body: `This interaction is not about who is right or wrong; both partners are trying to protect the relationship in their own way. But when the strategies collide, both can feel more alone. When the pattern repeats, the relationship enters a “negative cycle.”`,
+        bullets: [
+          `One becomes more activated while the other becomes more distant.`,
+          `Emotions rise while understanding diminishes.`,
export const DICTIONARY = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      'eis-heauton': 'Eis-heauton',
      psychotherapy: 'Psychotherapy',
      couple: 'Couple Therapy',
      group: 'Group Therapy',
      project: 'Projects'
    },
    home: {
      title: 'Welcome to Wade Jen',
      description: 'Academic and professional resources on psychotherapy and counseling.',
      content: 'This site shares work on psychotherapy, counselling and related projects.'
    },
    about: {
      title: 'About Wade Jen',
      description: 'Professional background and academic work.',
    },
    'eis-heauton': {
      title: 'Eis-heauton',
      description: 'Thoughts and writings.'
    },
    psychotherapy: {
      title: 'Psychotherapy',
      description: 'Approaches and resources.'
    },
    couple: {
      title: 'Couple Therapy',
      description: 'Work with couples.',
      hero: {
        heading: ['Attachment × Emotional Interaction', 'The First Step in Couple Therapy'],
        intro: 'How we manage intimacy is shaped by attachment patterns — not labels, but ways we maintain safety and respond to distance and conflict.',
      },
      sections: {
        attachmentNoteTitle: 'Attachment is not good or bad',
        attachmentNoteBody: 'Different ways of approaching intimacy can create repeated misunderstandings in relationships.'
      },
      qa: [
        {
          q: 'How does the therapist work in couple therapy?',
          a: 'Therapists help couples notice interaction patterns as they occur in the room rather than repeatedly analyzing events; the focus is on the present interaction rather than rehashing the past.'
        },
        {
          q: 'Can therapy continue if one partner is exhausted or unsure?',
          a: 'Fatigue is treated as an important relational signal—not a failure. Therapy starts by understanding the interactional pattern rather than requiring immediate commitment.'
        },
        {
          q: 'Will I be asked to share emotions I am not ready for?',
          a: 'Therapists adjust pacing so emotional experience is accessed within tolerable limits. The depth and speed of expression are tailored to each person.'
        }
      ]
    },
    group: {
      title: 'Group Therapy',
      description: 'Group processes and research.'
    },
    project: {
      title: 'Projects',
      description: 'Research and community projects.'
    },
  },
  zh: {
    navigation: {
      home: '首頁',
      about: '關於',
      'eis-heauton': '思想起',
      psychotherapy: '心理治療',
      couple: '伴侶治療',
      group: '團體治療',
      project: '專案計畫'
    },
    home: {
      title: '歡迎來到 Wade Jen',
      description: '心理治療與諮商的學術與專業資源。',
      content: '本站分享心理治療、諮商與相關計畫工作。'
    },
    about: {
      title: '關於 Wade Jen',
      description: '專業背景與學術工作。',
    },
    'eis-heauton': {
      title: '思想起',
      description: '思考與書寫。'
    },
    psychotherapy: {
      title: '心理治療',
      description: '治療方法與資源。'
    },
    couple: {
      title: '伴侶治療',
      description: '伴侶工作。',
      hero: {
        heading: ['依附關係 × 情緒互動', '伴侶治療的第一步'],
        intro: '我們每個人處理親密關係的方式，其實都跟「依附」有關。這不是某種標籤，而是我們在關係裡怎麼維持安全感、怎麼面對距離與衝突的一套自動反應。',
      },
      sections: {
        attachmentNoteTitle: '依附位置不是好或壞',
        attachmentNoteBody: '只是在親密關係裡，兩個人帶著不同的方式靠近彼此，就可能出現互相誤解的模式。'
      },
      qa: [
        {
          q: '在伴侶治療中，治療師會如何工作？',
          a: '治療師會協助你們在當下覺察互動模式，而不是只是重複討論事件；工作的重點放在當下的互動，而非一次次回顧過去。'
        },
        {
          q: '如果其中一方其實已經很累，甚至不確定還想不想繼續，治療還能進行嗎？',
          a: '疲累被視為重要的關係訊號而非治療無效的指標；治療先理解互動模式，而不是要求立刻承諾。'
        },
        {
          q: '治療時，會不會被要求說出自己其實還沒準備好的情緒或想法？',
          a: '治療師會調整節奏，確保情緒在可承受範圍內被觸及；表達的深度與速度會依個別狀態調整。'
        }
      ]
    },
    group: {
      title: '團體治療',
      description: '團體過程與研究。'
    },
    project: {
      title: '專案計畫',
      description: '研究與社群計畫。'
    },
  },
} as const;

export type Dict = typeof DICTIONARY;
export type Locale = keyof Dict;
+      },
+      iceberg: {
+        title: `憤怒是悲傷的保鑣`,
+        paragraphs: [
+          `表面的憤怒，掩蓋了底層的孤獨。當我們在關係中感到不安全時，直接展現脆弱是危險的。`,
+          `因此，我們往往穿上盔甲。那些尖銳的話語、冷漠的背影，其實都是為了保護心裡那個受傷的小孩。`,
+        ],
+        coreTaskTitle: `核心任務`,
+        coreTaskBody: `從「互貼標籤」（你就是自私、你就是情緒化）轉向「情緒的解碼」（原來當我轉身離開時，你感覺到的是被拋棄）。`,
+        imageAlt: `面具與杯子並置，指向表層角色與內在狀態的關係`,
+      },
+      eftStages: {
+        heading: `依附關係的修復地圖`,
+        subheading: `EFT 治療歷程的三個階段`,
+        stages: [
+          {
+            number: `01`,
+            title: `停下傷害`,
+            subtitle: `De-escalation`,
+            body: `先讓傷害停止：終止惡性循環。治療初期，協助伴侶一起看清楚：我們是怎麼被循環帶著走的？我們在哪個點開始失去選擇？治療不是判案糾錯，而是讓我們三人能看見模式。當互動的張力下降了，關係才有可能穩定下來。`,
+            imageAlt: `兩個杯子相對而置，隱喻暫停中的對話`,
+          },
+          {
+            number: `02`,
+            title: `重建連結`,
+            subtitle: `Restructuring`,
+            body: `靠近彼此的內在：修復依附連結。當我們能暫時離開循環，治療師會陪伴彼此慢慢觸碰那些不容易被說出來的情緒：「其實我很怕你不要我了」。當這些真實的需要能夠被接住，一種新的情感經驗就此產生。`,
+            imageAlt: `兩人近距離凝視彼此，強調情感共在`,
+          },
+          {
+            number: `03`,
+            title: `穩固與整合`,
+            subtitle: `Consolidation`,
+            body: `當情感連結穩固後，我們才回頭處理生活中的實際衝突。這時你們不再是互鬥的敵人，而是能夠協商、互相支援的隊友。`,
+            imageAlt: `雙方握手而坐，畫面指向關係連結與信任`,
+          },
+        ],
+      },
+      closing: {
+        heading: {
+          line1: `親密關係裡的衝突，不是不愛了，`,
+          line2: `而是我們在用不一樣的方式喊「我需要你」。`,
+        },
+        body: `當我們能夠看見彼此的需要，能夠用有建設性的方式表達情感與親密，靠近不再那麼危險。連結，也會慢慢修復。`,
+        imageAlt: `兩人對談被柔和線條圍繞，象徵受保護的空間`,
+      },
+      faqs: {
+        heading: `常見問答`,
+        subheading: `關於伴侶治療的十個提問`,
+        items: [
+          {
+            q: `在伴侶治療中，治療師會如何工作？我們每次卡住的點都一樣，治療師還會要我們再談一次嗎？`,
+            a: `治療師不會只是重複討論事件本身，而是協助你們在治療現場中覺察：當同樣的互動再度發生時，彼此是如何被拉進那個熟悉的循環。工作的重點放在當下，而非一再回顧過去。`,
+          },
+          {
+            q: `如果其中一方其實已經很累，甚至不確定還想不想繼續，治療還能進行嗎？`,
+            a: `治療師會將「疲累」視為一項重要的關係訊號，而不是治療無效的指標。治療並不要求雙方一開始就做出關係承諾，而是先去理解彼此目前困在什麼樣的互動模式中。`,
+          },
+          {
+            q: `治療時，會不會被要求說出自己其實還沒準備好的情緒或想法？`,
+            a: `治療師會持續調整治療的節奏，確保情緒經驗能在可承受的範圍內被觸及。情感的表達深度與速度，會根據每個人的狀態而調整，而不是由治療方法預設。`,
+          },
+          {
+            q: `如果我們真正卡住的是現實問題或價值觀差異，治療師會怎麼處理？`,
+            a: `治療師會聚焦於這些議題如何影響彼此的情感連結，而不是急於解決問題本身。治療的目的是讓討論能在更穩定、安全的關係狀態中進行。`,
+          },
+          {
+            q: `會不會變成其中一方一直被檢討或被要求改變？`,
+            a: `治療師的工作單位是關係中的「互動模式」，而非個別的個性或立場。如果治療過程偏向某一方，治療師會主動將視角拉回到雙方的互動結構。`,
+          },
+          {
+            q: `如果一方比較會表達，另一方比較退縮，治療師會怎麼處理？`,
+            a: `治療師會同時照顧不同位置的需求。表達較多的一方會被協助放慢、調整步調；而退縮的一方則會在不被逼迫的情況下，逐漸建立起自己的表達空間。`,
+          },
+          {
+            q: `治療會不會讓衝突一開始反而更嚴重？`,
+            a: `治療師會以穩定互動為優先目標。如果衝突強度升高，會被視為需要立即調整介入方式的訊號，而非治療必經的過程。`,
+          },
+          {
+            q: `如果我們已經嘗試過很多方法，治療師還能做什麼不一樣的事？`,
+            a: `治療師不會重複既有的說服、協調或解決問題的策略，而是協助你們看見：這些努力是如何被既有的互動模式所抵銷。治療的切入點是互動的組織方式。`,
+          },
+          {
+            q: `治療的目標一定是讓關係變得更親密嗎？`,
+            a: `治療師關注的是關係在情緒層面是否變得更安全、更清晰。親密感會隨著互動的穩定自然產生，而不是被設定為必須達成的目標。`,
+          },
+          {
+            q: `如果最後我們發現無法繼續走下去，這段治療還有意義嗎？`,
+            a: ``,
+          },
+        ],
+      },
+    },
   },
 } as const;
 
 export type Dict = typeof DICTIONARY;
 export type Locale = keyof Dict;
