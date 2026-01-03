import React from 'react';
import { BookOpen, Heart, Users, Star, Eye, Layers, Feather, Link, AlertCircle } from 'lucide-react';

const AcademicArticle = () => {
  // Color Palette Definitions (Morandi Style)
  const colors = {
    bg: "bg-[#F7F7F5]", // Warm White / Greyish
    card: "bg-[#FFFFFF]", // Pure White
    textPrimary: "text-[#5E5E5E]", // Dark Grey
    textSecondary: "text-[#8C8C8C]", // Light Grey
    accentBlue: "text-[#7A9CA5]", // Morandi Blue
    accentYellow: "text-[#C5A059]", // Muted Gold/Yellow
    accentBrown: "text-[#8C7B70]", // Muted Brown
    border: "border-[#E5E5E5]"
  };

  return (
    <div className={`min-h-screen ${colors.bg} font-sans py-12 px-4 sm:px-6 lg:px-8`}>
      {/* Expanded max-width for better screen utilization */}
      <article className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <header className="text-center space-y-4 border-b pb-8 border-[#D1D1D1]">
          <div className="flex justify-center mb-4">
            <Feather className={`w-12 h-12 ${colors.accentBlue}`} />
          </div>
          <h1 className={`text-4xl font-serif font-bold tracking-wider ${colors.textPrimary}`}>
            合一
          </h1>
          <p className={`text-xl font-serif italic ${colors.accentBrown}`}>Union</p>
        </header>

        {/* Section 1: 最初的合一 */}
        <section className={`${colors.card} p-8 rounded-lg shadow-sm space-y-8`}>
          <div className="flex items-center space-x-3 mb-6">
            <Layers className={`w-6 h-6 ${colors.accentBlue}`} />
            <h2 className={`text-2xl font-bold ${colors.textPrimary}`}>最初的合一</h2>
          </div>

          {/* Adjusted image container for better proportion and sizing */}
          <div className="relative w-full h-auto mb-8 rounded-lg overflow-hidden shadow-md flex justify-center">
            <img src="/Photos/H1.png" alt="H1 - 最初的合一" className="w-auto h-full object-cover max-h-[500px]" />
          </div>

          <div className={`prose max-w-none ${colors.textPrimary} leading-relaxed space-y-6`}>
            <p>
              當小寶寶還在媽媽肚子裡的時候，他和媽媽就像是一個人。他吃的東西、呼吸的空氣、長大的力量，全都來自媽媽。那時候，整個世界就是媽媽的肚子。媽媽和寶寶共用一個身體，也共用一個家。這是生命最最一開始的「合在一起」——人、媽媽、和自己，全部都變成一個整體。出生以後，寶寶離開媽媽的身體，開始用自己的方式呼吸、哭、吃東西。這時有一位心理學家叫 克萊恩（Klein），她觀察很多小嬰兒，發現一件有趣的事：
            </p>
            <blockquote className={`border-l-4 ${colors.accentYellow} pl-4 italic my-4`}>
              寶寶常常以為自己有「全能的幻想」，意思是——他以為自己很有魔法
            </blockquote>
            <p>
              只要一哭，媽媽就會馬上出現、給奶喝。寶寶覺得世界會聽他的話，好像自己是小小的神一樣。可是慢慢地，寶寶會發現事情不是這樣。媽媽有時候沒那麼快來，或是在做別的事。這時他開始懂得：「原來媽媽是一個客體（object），是和我不一樣的人。我是我，媽媽是媽媽。」當他明白這件事時，心裡會有各種感覺：他可能生氣、覺得媽媽不好，也可能害怕、難過。這些情緒在心理學裡叫做「投射（projection）」——就是把心裡的感覺丟到別人身上。
            </p>
            <p>
              雖然這樣的心情很複雜，但這正是人開始長大的過程。當寶寶發現自己和媽媽不同，他就慢慢進入所謂的「個體化（individuation）」——意思是，他開始變成一個有自己想法、自己感覺的人。
            </p>
            
            <hr className="border-t border-gray-100 my-6" />
            
            <div className={`text-sm ${colors.textSecondary} space-y-4 font-serif`}>
              <p>
                When the baby is still inside the mother’s womb, he and his mother are like one single being. What he eats, the air he breathes, and the strength that helps him grow all come from his mother. At that time, his entire world is his mother’s womb. Mother and baby share one body and one home. This is the very first form of “being together”—the person, the mother, and the self are all part of one whole.
              </p>
              <p>
                After birth, the baby leaves his mother’s body and begins to breathe, cry, and eat on his own. At this point, a psychologist named Melanie Klein observed many infants and discovered something interesting: babies often have what she called an “omnipotent fantasy.” This means they believe they have magical power—if they cry, the mother will instantly appear and feed them. The baby feels as if the world obeys his will, as though he were a tiny god.
              </p>
              <p>
                But gradually, the baby begins to realize that things don’t always work that way. Sometimes the mother doesn’t come right away, or she is busy doing something else. Then he starts to understand: “Mother is an object, a person who is different from me. I am me, and mother is mother.” When this realization emerges, the baby experiences many emotions—anger, disappointment, fear, or sadness. In psychology, these feelings are called projection—putting one’s inner emotions onto someone else.
              </p>
              <p>
                Although these experiences are complicated, they mark the beginning of growth. When the baby realizes he is separate from his mother, he gradually enters what is called individuation—the process of becoming a person with his own thoughts and feelings.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: 追尋的合一 */}
        <section className={`${colors.card} p-8 rounded-lg shadow-sm space-y-10`}>
          <div className="flex items-center space-x-3 mb-6">
            <Star className={`w-6 h-6 ${colors.accentYellow}`} />
            <h2 className={`text-2xl font-bold ${colors.textPrimary}`}>追尋的合一</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quote Card 1 */}
            <div className="space-y-3">
               <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img src="/Photos/H2.png" alt="H2 - John 10:30" className="object-cover w-full h-full" />
               </div>
               <p className={`text-sm font-medium ${colors.accentBrown} text-center`}>我與父原為一（約翰福音 10:30）<br/><span className="italic">“I and the Father are one.”</span></p>
            </div>
             {/* Quote Card 2 */}
            <div className="space-y-3">
               <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img src="/Photos/H3.png" alt="H3 - Zhuangzi" className="object-cover w-full h-full" />
               </div>
               <p className={`text-sm font-medium ${colors.accentBrown} text-center`}>天地與我並生，萬物與我為一 《莊子》<br/><span className="italic">“Heaven and earth were born together with me; and all things and I are one.”</span></p>
            </div>
             {/* Quote Card 3 */}
            <div className="space-y-3">
               <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                  <img src="/Photos/H4.png" alt="H4 - Buddhism" className="object-cover w-full h-full" />
               </div>
               <p className={`text-sm font-medium ${colors.accentBrown} text-center`}>一切眾生、萬法皆因緣所生<br/><span className="italic">“All sentient beings and all phenomena arise through dependent origination.”</span></p>
            </div>
          </div>

          <div className={`prose max-w-none ${colors.textPrimary} leading-relaxed space-y-6`}>
            <p>
              有一種經驗，藏在人類很久很久的歷史裡，叫做「合一」。「合一」的意思是——我們覺得自己和別人、和世界、和整個宇宙，好像都能連在一起。這種感覺很特別，因為它讓我們覺得自己不是孤單的一個人。
            </p>
            <p>
              從以前的原始部落開始，人們就一起生活、一起打獵、一起跳舞。那時候，「合一」是大家同心的樣子。到了現在的學校、社區、公司裡，我們也一樣要學著合作。當我們說「我們」的時候，其實心裡就在經驗一種「合一」。所以，「合一」有時是人和人一起的感覺。但有時候，「合一」也發生在兩個人之間。有一位心理學家叫 佛洛姆（Fromm），他研究「愛」。他說，真正的愛不是要把對方變成自己的一部分，而是兩個人都保留自己，但又能在心裡相遇。
            </p>
            <p className={`font-medium ${colors.accentBlue}`}>
              就像你有一顆星星，我也有一顆星星，當我們牽起手的時候，兩顆星星的光就會交錯在一起。這種「我和你在一起」的感覺，就是愛裡的「合一」。
            </p>
            <p>
              還有更深的一種「合一」，是人和整個世界的。在《聖經》裡，有一句話說「我和天父是一體的」；在中國古書《莊子》裡也有說「天地和我一起出生，萬物和我是一家人」。這些話都在告訴我們：人和大自然、天空、動物、花草，原本就是連在一起的。佛教裡也有一句很美的話：「我和所有生命本來就沒有差別。」意思是，世界上的一切生命都互相連結、互相幫助。
            </p>
            <p>
              所以，「合一」不只是書裡的哲學，也不只是宗教的故事。它還是我們心裡很深的願望。當我們覺得世界紛亂、分別的時候，我們都在偷偷地找——那個讓自己、別人、和整個世界能再一次變成「一體」的地方。
            </p>

             <hr className="border-t border-gray-100 my-6" />

            <div className={`text-sm ${colors.textSecondary} space-y-4 font-serif`}>
               <p>
                 There is an experience that has been hidden deep within human history for a very long time, and it is called oneness. Oneness means that we feel as if we are connected—with other people, with the world, and with the entire universe. This feeling is very special because it makes us realize that we are not alone.
               </p>
               <p>
                 Since the time of ancient tribes, people have lived together, hunted together, and danced together. In those days, oneness was the image of many hearts beating as one. Today, in our schools, communities, and workplaces, we must still learn how to cooperate. Whenever we say “we,” we are already experiencing a kind of oneness. Sometimes, oneness is the feeling of being together with many people; at other times, it happens between just two. There was a psychologist named Erich Fromm, who studied love. He said that true love does not mean turning the other person into a part of ourselves, but that both people remain who they are—yet meet each other deeply in their hearts.
               </p>
               <p>
                 It’s like this: you have a star, and I have a star. When we hold hands, the light from our two stars begins to intertwine. That feeling of “you and I together” is the union of love—two whole beings meeting as one.
               </p>
               <p>
                 There is also a deeper kind of oneness—the oneness between human beings and the whole world. In the Bible, there is a verse that says, “I and the Father are one.” In the ancient Chinese classic Zhuangzi, it is written, “Heaven and earth were born together with me; all things and I are one family.” These words tell us that people, nature, the sky, animals, and plants are originally connected. In Buddhism, there is also a beautiful saying: “There is no real difference between myself and all living beings.” It means that all forms of life in this world are interlinked, supporting and helping one another.
               </p>
               <p>
                 Therefore, union and oneness are not only ideas found in philosophy or religion—they are also deep longings within the human heart. Whenever the world feels chaotic or divided, we are quietly searching for that place where ourselves, others, and the entire world can once again become one.
               </p>
            </div>
          </div>
        </section>

        {/* Section 3: 呼喚的合一 (Anime) */}
        <section className={`${colors.card} p-8 rounded-lg shadow-sm space-y-8`}>
          <div className="flex items-center space-x-3 mb-6">
            <Eye className={`w-6 h-6 ${colors.accentBrown}`} />
            <h2 className={`text-2xl font-bold ${colors.textPrimary}`}>呼喚的合一</h2>
          </div>

          <div className="space-y-8">
            {/* Anime Item 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-100 pb-6">
                <div className="w-full md:w-1/3">
                    <img src="/Photos/H5.png" alt="H5 - Spirited Away" className="rounded-lg shadow-sm w-full" />
                </div>
                <div className="w-full md:w-2/3 space-y-2">
                    <h3 className={`text-lg font-bold ${colors.textPrimary}`}>千與千尋（2001）｜Spirited Away</h3>
                    <p className={`text-sm ${colors.textSecondary} leading-relaxed font-serif`}>
                         There is a special kind of feeling called union. It is not something we can simply think our way into; rather, it is a deep and hidden movement within the heart—something happening in the unconscious, before we are even aware of it.
                         In Spirited Away, there is a girl named Chihiro... (refer to full text for brevity in preview) ...This is the mature union of love—not the merging of two people into one, but the meeting of two whole beings through understanding and respect.
                    </p>
                </div>
            </div>

            {/* Anime Item 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-gray-100 pb-6">
                <div className="w-full md:w-1/3">
                    <img src="/Photos/H6.png" alt="H6 - Evangelion" className="rounded-lg shadow-sm w-full" />
                </div>
                <div className="w-full md:w-2/3 space-y-2">
                    <h3 className={`text-lg font-bold ${colors.textPrimary}`}>新世紀福音戰士（1995）｜Neon Genesis Evangelion</h3>
                    <p className={`text-sm ${colors.textSecondary} leading-relaxed font-serif`}>
                        Another animation, Neon Genesis Evangelion, tells the story of a boy named Shinji. In the series, there is a plan to make all humankind fuse into one vast mental network... In the end, Shinji chooses not to start that plan, because he realizes that although difference brings pain, only separation makes genuine union possible.
                    </p>
                </div>
            </div>

            {/* Anime Item 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3">
                    <img src="/Photos/H7.png" alt="H7 - Princess Mononoke" className="rounded-lg shadow-sm w-full" />
                </div>
                <div className="w-full md:w-2/3 space-y-2">
                    <h3 className={`text-lg font-bold ${colors.textPrimary}`}>魔法公主（1997）｜Princess Mononoke</h3>
                    <p className={`text-sm ${colors.textSecondary} leading-relaxed font-serif`}>
                        In Princess Mononoke, the girl San, together with the wolves, the forest spirits, and the mountain itself, lives in another form of union... Through these animations, we can see many kinds of union: some false and devouring, others real and life-affirming. To grow as human beings, we must learn to tell them apart—to recognize which kind of “being together” allows us to come closer to our truest selves.
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* Section 4: 真實與假性的合一 */}
        <section className="space-y-12">
            
            {/* True Union */}
            <div className={`${colors.card} p-8 rounded-lg shadow-sm border-l-4 ${colors.border} border-l-[#7A9CA5]`}>
                <div className="flex items-center space-x-3 mb-6">
                    <Heart className={`w-6 h-6 ${colors.accentBlue}`} />
                    <h2 className={`text-2xl font-bold ${colors.textPrimary}`}>真實合一 Union</h2>
                </div>
                
                <div className="mb-6 rounded-lg overflow-hidden shadow-sm">
                    <img src="/Photos/H8.png" alt="H8 - True Union" className="w-full object-cover max-h-80" />
                </div>

                <div className={`prose max-w-none ${colors.textPrimary} space-y-4`}>
                    <p>
                        佛洛姆（Fromm）常常思考一個問題：「人怎麼樣，才能在愛裡面，真的和別人連結在一起？」
                        他說，真正的愛不是只想抓住別人，也不是讓自己消失。而是一種成熟的愛——這種愛有一種積極的力量。「積極」的意思是，它會讓人變得更勇敢、更溫柔，能走出孤單的地方。
                    </p>
                    <p>
                        在這種愛裡，我們可以跟別人靠近，但也不會失去自己。你還是「你」，我還是「我」，我們的心能在中間相遇，就像兩棵樹的枝葉，在風裡輕輕碰在一起。佛洛姆說，人不只是在愛裡能這樣，當我們努力工作、創造東西、或和世界做朋友的時候，我們也能感覺到一種「合在一起」的連結。那是一種心裡的溫度，它讓我們不再覺得自己是一個孤單的小點，而是整個世界裡的一部分。
                    </p>
                    <p className={`text-xs ${colors.textSecondary}`}>（關於資本主義社會的變革讓人在工作向度的合一斷裂，我們之後會談）</p>

                    <hr className="border-t border-gray-100 my-4" />
                    
                    <div className={`text-sm ${colors.textSecondary} space-y-4 font-serif`}>
                        <p>
                            Erich Fromm, who often pondered a profound question: “How can human beings truly connect with one another through love?” He believed that real love is neither the desire to possess someone nor the disappearance of oneself. Rather, it is a mature form of love—a love that carries an active power. By “active,” Fromm meant a love that makes people braver, gentler, and more capable of stepping out from their loneliness.
                        </p>
                        <p>
                            In this kind of love, we can come close to others without losing ourselves. You remain you, I remain me, and our hearts meet in between—like the branches of two trees, softly touching in the wind. Fromm said that this union is not limited to love between people. When we work with dedication, create something with our hands, or build friendship with the world around us, we can also feel this living sense of union.
                        </p>
                        <p>
                            It is a quiet warmth of the heart—a feeling that we are no longer a lonely little point in the universe, but part of the living wholeness of the world itself.
                        </p>
                        <p className="italic text-xs">(As for how capitalist society has fragmented this sense of union in our relationship with work, we will discuss that later.)</p>
                    </div>
                </div>
            </div>

            {/* Pseudo Union */}
            <div className={`${colors.card} p-8 rounded-lg shadow-sm border-l-4 ${colors.border} border-l-[#8C7B70]`}>
                <div className="flex items-center space-x-3 mb-6">
                    <AlertCircle className={`w-6 h-6 ${colors.accentBrown}`} />
                    <h2 className={`text-2xl font-bold ${colors.textPrimary}`}>假性合一 Fusion</h2>
                </div>
                
                <div className="mb-6 rounded-lg overflow-hidden shadow-sm">
                    <img src="/Photos/H9.png" alt="H9 - Pseudo Union" className="w-full object-cover max-h-80" />
                </div>

                <div className={`prose max-w-none ${colors.textPrimary} space-y-4`}>
                    <p>
                        有時候，人太害怕孤單，就會選擇一種「假性的合一」。意思是：看起來很親近，其實只是為了逃避自由和害怕孤獨。
                        比方說——有些人會聽話到完全不敢說不，讓別人替自己決定一切。這叫「順從權威」。他們以為這樣就安全了，其實只是失去了自己的聲音。
                    </p>
                    <p>
                        有些人會努力模仿別人，只想要和大家一樣。這叫「社會同化」，他們覺得「一樣」才安全，卻慢慢忘了「我是誰」。
                    </p>
                    <p>
                        還有些人，會把「愛」誤會成「抓緊不放」。他們想要完全擁有對方，讓對方變成自己的一部分。這叫「佔有式的愛」，看起來親密，其實是害怕被拋下。佛洛姆說，這些看起來都像是「在一起」，但其實只是暫時麻醉的孤單。
                        就像吃很多糖一樣——會讓人覺得開心一會兒，但心裡的空洞沒有真的消失。
                        所以，有些人就會不斷想要更多的東西：更多玩具、更多快樂、更刺激的事，可是越多，他們心裡越是荒蕪的像是一片沙漠。
                    </p>
                    <p className={`text-xs ${colors.textSecondary}`}>（有關BDSM是如何成為一種假性合一的方式，我們之後會談）</p>

                    <hr className="border-t border-gray-100 my-4" />
                    
                    <div className={`text-sm ${colors.textSecondary} space-y-4 font-serif`}>
                        <p>
                            Sometimes, people are so afraid of being alone that they choose a kind of pseudo-union—a way of being “together” that only hides their fear of freedom and loneliness. It may look like closeness, but in truth, it is only an escape.
                        </p>
                        <p>
                            For example, some people obey others so completely that they no longer dare to say “no.” They let others make every decision for them. Fromm called this submission to authority. Such people believe obedience will keep them safe, but in doing so, they lose their own voice.
                        </p>
                        <p>
                             Others try hard to imitate everyone around them, wanting only to be the same as others. This is social conformity—the belief that sameness brings security. Yet, as they blend in, they slowly forget the question, “Who am I?”
                        </p>
                        <p>
                            Still others mistake possessive love for real love. They cling to the other person so tightly that they try to make the other a part of themselves. It may look intimate, but it is actually the fear of being left behind. Fromm said that these forms of closeness are not true connection; they are only temporary anesthesia for loneliness—like eating too much sugar: it feels sweet for a moment, but the emptiness inside never truly disappears.
                        </p>
                        <p>
                            That is why some people keep craving for more—more toys, more pleasure, more excitement—yet the more they gain, the more their inner world turns barren, like a vast and silent desert.
                        </p>
                        <p className="italic text-xs">(How certain practices, such as BDSM, can also function as a form of pseudo-union will be discussed later.)</p>
                    </div>
                </div>
            </div>

        </section>

        <footer className={`text-center py-8 ${colors.textSecondary} text-sm font-serif`}>
             <p>&copy; 2026 Academic Research Note. All rights reserved.</p>
        </footer>
      </article>
    </div>
  );
};

export default AcademicArticle;