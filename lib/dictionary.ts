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
+          `Arguments, blame, cold wars, silence… become the familiar script.`,
+        ],
+        imageAlt: `Interlaced lines knot at the center, symbolizing relational connection and emotional entanglement.`,
+        caption: `The entangled dance: How do we get stuck?`,
+      },
+      iceberg: {
+        title: `Anger is the guardian of sorrow.`,
+        paragraphs: [
+          `Surface anger masks deeper loneliness. When we feel unsafe in relationship, showing vulnerability directly can feel dangerous.`,
+          `So we put on armor. The sharp words and the cold back are ways to protect the wounded child within.`,
+        ],
+        coreTaskTitle: `Core task`,
+        coreTaskBody: `Shift from “labeling each other” (you are selfish; you are emotional) to “decoding emotion” (when I turned away, you felt abandoned).`,
+        imageAlt: `A mask and a cup placed side by side, pointing to the relationship between surface roles and inner states.`,
+      },
+      eftStages: {
+        heading: `A repair map for attachment relationships`,
+        subheading: `Three stages of the EFT process`,
+        stages: [
+          {
+            number: `01`,
+            title: `Stop the harm`,
+            subtitle: `De-escalation`,
+            body: `First, stop the harm by ending the negative cycle. Early in therapy, couples are helped to see: How are we being carried by the cycle? At what point do we lose choice? Therapy is not about judging right and wrong; it is about helping all three of us see the pattern. As tension decreases, the relationship can stabilize.`,
+            imageAlt: `Two cups positioned face to face, an image of dialogue on pause.`,
+          },
+          {
+            number: `02`,
+            title: `Rebuild connection`,
+            subtitle: `Restructuring`,
+            body: `Move toward each other’s inner world and repair attachment bonds. When we can step out of the cycle, the therapist accompanies partners to slowly touch the emotions that are hard to say aloud: “I am actually afraid you will leave me.” When these real needs are received, a new emotional experience emerges.`,
+            imageAlt: `Two people gaze at each other at close range, emphasizing emotional presence.`,
+          },
+          {
+            number: `03`,
+            title: `Stabilize and integrate`,
+            subtitle: `Consolidation`,
+            body: `After emotional connection is stabilized, we return to the practical conflicts of daily life. At this point you are no longer adversaries, but teammates who can negotiate and support each other.`,
+            imageAlt: `Two people sit and shake hands, pointing to relational connection and trust.`,
+          },
+        ],
+      },
+      closing: {
+        heading: {
+          line1: `Conflict in intimacy is not a sign of no love;`,
+          line2: `it is a different way of saying “I need you.”`,
+        },
+        body: `When we can see each other’s needs and express emotion and intimacy in constructive ways, closeness feels less dangerous. Connection can be repaired, little by little.`,
+        imageAlt: `Two people in conversation are surrounded by soft lines, symbolizing a protected space.`,
+      },
+      faqs: {
+        heading: `FAQs`,
+        subheading: `Ten questions about couple therapy`,
+        items: [
+          {
+            q: `In couple therapy, how does the therapist work? Will we be asked to discuss the same stuck points again?`,
+            a: `The therapist does not repeatedly revisit events themselves. Instead, they help you notice in the therapy room how you are pulled into the familiar cycle when the same interaction happens again. The focus is on the present, not on repeatedly reviewing the past.`,
+          },
+          {
+            q: `If one partner is already exhausted or unsure about continuing, can therapy still proceed?`,
+            a: `The therapist treats exhaustion as an important relational signal rather than evidence that therapy is ineffective. Therapy does not require a commitment to the relationship at the outset; it begins by understanding the interactional pattern you are currently stuck in.`,
+          },
+          {
+            q: `Will we be asked to share feelings or thoughts we are not ready to express?`,
+            a: `The therapist continually adjusts the pace to keep emotional experience within a tolerable range. The depth and speed of emotional expression are tailored to each person’s state, rather than predetermined by a method.`,
+          },
+          {
+            q: `If what we are truly stuck on is a practical issue or value differences, how will the therapist handle it?`,
+            a: `The therapist focuses on how those issues affect the emotional bond, rather than rushing to solve the problem itself. The aim is to allow discussion to occur within a more stable and safe relational state.`,
+          },
+          {
+            q: `Will it become a situation where one partner is constantly criticized or asked to change?`,
+            a: `The therapist’s unit of work is the relational interactional pattern, not an individual’s personality or stance. If the process tilts toward one side, the therapist actively brings the focus back to the structure of interaction between both partners.`,
+          },
+          {
+            q: `If one partner expresses more and the other withdraws, how will the therapist respond?`,
+            a: `The therapist attends to the needs of both positions. The more expressive partner is helped to slow down and adjust the pace, while the withdrawing partner is supported to gradually build space for expression without being forced.`,
+          },
+          {
+            q: `Can therapy make conflict feel more intense at the beginning?`,
+            a: `Stabilizing interaction is the priority. If conflict intensifies, it is treated as a signal to adjust the intervention immediately, not as a necessary phase of therapy.`,
+          },
+          {
+            q: `If we have already tried many approaches, what can the therapist do differently?`,
+            a: `The therapist does not repeat existing strategies of persuasion, coordination, or problem solving. Instead, they help you see how those efforts are canceled out by the established interactional pattern. The entry point is the organization of interaction.`,
+          },
+          {
+            q: `Is the goal of therapy always to become more intimate?`,
+            a: `The therapist focuses on whether the relationship feels emotionally safer and clearer. Intimacy naturally arises as interaction stabilizes, rather than being set as a required endpoint.`,
+          },
+          {
+            q: `If we ultimately find we cannot continue, does this therapy still have meaning?`,
+            a: ``,
+          },
+        ],
+      },
+    },
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
-    couple: {
-      title: '伴侶治療',
-      description: '伴侶工作。'
-    },
     group: {
       title: '團體治療',
       description: '團體過程與研究。'
     },
     project: {
       title: '專案計畫',
       description: '研究與社群計畫。'
     },
+    couple: {
+      title: `伴侶治療`,
+      hero: {
+        heading: [`依附關係 × 情緒互動`, `伴侶治療的第一步`],
+        intro: `我們每個人處理親密關係的方式，其實都跟「依附」有關。`,
+        imageAlt: `兩人相對而坐進行安靜對話，畫面聚焦於彼此注視與關係建立的初始狀態`,
+      },
+      attachmentStyles: {
+        heading: {
+          line1: `依附位置不是好或壞，`,
+          line2: `而是我們保護自己的方式`,
+        },
+        description: `只是在親密關係裡，兩個人帶著不同的方式靠近彼此，就可能出現互相誤解的模式。`,
+        withdrawer: {
+          title: `逃避型`,
+          subtitle: `The Withdrawer`,
+          quote: `我不是不在乎，只是不知道怎麼靠近`,
+          paragraphs: [
+            `有些人一遇到衝突，就會想暫停對話、拉開距離、先處理自己的情緒。他們可能看起來很冷靜，甚至顯得有點冷淡，好像不願意面對。`,
+            `但其實，這是一種保護自己不被情緒淹沒的方式。透過保持距離，他們才能讓自己冷靜下來，回到可以運作的狀態。`,
+          ],
+          highlight: `不是不在乎，而是他們習慣了靠「退」來維持穩定。`,
+          imageAlt: `單一人物低頭坐於桌前，呈現內省或退回自身的狀態`,
+        },
+        pursuer: {
+          title: `焦慮型`,
+          subtitle: `The Pursuer`,
+          quote: `我不是要控制你，我只是怕你不見`,
+          paragraphs: [
+            `也有些人對關係裡的冷淡特別敏感。只要對方沉默、語氣變了、慢一點回訊息，他們就會開始焦慮，忍不住想確認：「你是不是不愛我了？」「你是不是又在想逃？」`,
+            `他們會提高互動強度，提出問題、要求對話、甚至表現出強烈的情緒。`,
+          ],
+          highlight: `不是太黏，也不是情緒太多，而是他們靠「靠近」來確認關係還在。`,
+          imageAlt: `一方以手勢表達經驗，另一方傾聽，呈現語言流動中的互動`,
+        },
+      },
+      negativeCycle: {
+        label: `THE NEGATIVE CYCLE`,
+        heading: {
+          line1: `我們不是彼此的敵人`,
+          line2: `是被互動拉走了`,
+        },
+        intro: `當這兩種依附反應相遇，會發生什麼事？在伴侶關係中，逃避型的人越退，焦慮型的人就越追。一個需要空間，一個需要連結。`,
+        quote: {
+          line1: `一個覺得「你給我一點安靜好嗎」`,
+          line2: `一個覺得「你怎麼又不見了」`,
+        },
+        body: `這種互動不是誰對誰錯，而是兩個人都在用自己的方式努力保護關係。但當兩種策略碰在一起時，很容易讓彼此都感覺更孤單。當這樣的互動模式一再重複，我們就會進入一個「惡性循環」。`,
+        bullets: [
+          `一方越來越激動，另一方越來越抽離`,
+          `情緒越來越高，理解越來越少`,
+          `爭吵、指責、冷戰、沉默……變成熟悉的劇本`,
+        ],
+        imageAlt: `交織的線條在中央形成結節，象徵關係連結、情感糾纏`,
+        caption: `糾纏的舞步：我們是如何卡住的？`,
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
