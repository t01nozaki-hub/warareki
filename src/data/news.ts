export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: "M-1" | "KOC" | "R-1" | "その他";
  excerpt: string;
  thumbnailUrl: string; // アイキャッチ画像URL
  content: string; // 記事本文（HTML）
}

export const newsData: NewsArticle[] = [
  {
    slug: "column-m1-history-trends",
    title: "【特集】M-1歴代王者の系譜から読み解く、漫才シーンの「バチバチの進化」",
    date: "2026-04-02",
    category: "M-1",
    excerpt: "2001年から現在に至るまで、M-1はもはや「漫才の教科書」を超えて「芸人たちの生き様」を映し出す鏡。初代王者から最新のトレンドまで、お笑いオタク目線でアツく語り尽くします！",
    thumbnailUrl: "https://images.unsplash.com/photo-1549490349-8643361121d5?auto=format&fit=crop&q=80&w=800",
    content: `
      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">圧倒的テンポと手数！「しゃべくり漫才」が正義だった時代</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        2001年、中川家さんが初代王者に輝いてからというもの、M-1は年末の単なる特番どころか、<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">「全お笑いファンと芸人の人生を変える特大イベント」</strong>になりましたよね。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        初期のM-1を振り返ると、アンタッチャブルさんやフットボールアワーさんのように、とにかく手数とテンポで圧倒する「超合金みたいな硬派なしゃべくり漫才」がひとつの最強の最適解でした。4分間という異常なほどの短時間で、いかに客席の空気ごと飲み込み、笑いの波状攻撃を仕掛けられるか。あの時代のヒリヒリ感、今見てもマジで鳥肌が立ちます。
      </p>

      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">笑い飯がぶっ壊し、NON STYLEが研ぎ澄ませた「システム」</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        そこから時代が少し進むと、笑い飯さんが持ち込んだ「Wボケ」という概念がすべてをヒックリ返しましたよね。さらに、NON STYLEさんやチュートリアルさんのように、漫才の<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">「構造そのもの」を壮大な前振りにするシステム漫才</strong>が一世を風靡しました。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        ただ面白いだけじゃない。「え、今のってそういう伏線！？」みたいな、視聴者の「お笑い偏差値」をテストするような知的な構成が、マジで評価されるようになったんです。審査員の松本人志さんのコメントひとつ取っても、あのヒリヒリした空気感はたまらなかったですよね。
      </p>

      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">マヂカルラブリーが切り拓いた「これは漫才なのか」論争と現在地</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        そして記憶に新しいのが、マヂカルラブリーさんが引き起こした<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">『漫才か、漫才じゃないか論争』</strong>ですよね（笑）。あれ以降、錦鯉さんのような突き抜けた「超・人間力」の漫才から、令和ロマンさんのような「舞台の空気をハックする」超メタ的な漫才まで、マジで何でもありの【超・多様性の時代】に突入しました。
      </p>
    `
  },
  {
    slug: "column-koc-contrists-future",
    title: "【コラム】YouTubeとドラマを無双する「現代コント師」たちの最強の生存戦略",
    date: "2026-04-01",
    category: "KOC",
    excerpt: "今、一番芸能界を荒らしまくってるのって絶対「コント師」ですよね。キングオブコントを足がかりに、YouTubeもドラマもバラエティも全部制圧していく彼らのヤバすぎるポテンシャルについて考察します。",
    thumbnailUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800",
    content: `
      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">ただの芸人じゃない。「憑依型・天才役者」たちの祭典</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        キングオブコントって、2008年から始まったわけですが、マジで「日本のコント演劇」を一段上の次元に無理やり引き上げた神大会ですよね。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        東京03さんやシソンヌさん、バイきんぐさんといった歴代の王者たちを見れば一目瞭然です。彼らって「面白い」のは大前提として、<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">演技力がマジでエグい</strong>んですよ。漫才が「自分というキャラ」をぶつける競技だとすれば、コントは「別人に完全に憑依する」狂気の沙汰です。だからKOCで結果を残したコント師は、スッと大河ドラマや映画に出ても違和感ゼロで無双できるんですよね。
      </p>

      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">YouTubeという「コント師の最高の遊び場」</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        さらに最近の激アツなトレンドは、なんといっても<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">動画プラットフォームとコント師の相性の良さ</strong>です。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        チョコレートプラネットさんやジャルジャルさん、かまいたちさん......彼らのYouTubeチャンネル、毎日再生数エグくないですか？コントの設定や世界観って、テレビの数分じゃ収まりきらないんですよね。オリジナルのヤバいキャラクターを次々と生み出して、それを毎日発信できる現代の環境は、もはや「彼らのための時代」と言っても過言じゃありません。
      </p>

      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">たった一晩で人生がひっくり返る衝撃</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        KOCで優勝したり、トップ3に食い込んだファイナリストたちは、翌朝にはマネージャーの電話が鳴り止まなくなって人生が激変します。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        誰も知らなかった無名のコンビが、一夜にして全国区のスターへと駆け上がる瞬間。あのカタルシスこそが、賞レース最大の魔法であり、私たちがどうしてもコント師たちの生き様に熱狂してしまう理由なんだと思います。
      </p>
    `
  },
  {
    slug: "column-r1-pin-geinin-evolution",
    title: "【徹底考察】実は一番エグい？ R-1グランプリが生み出す「一人ぼっちの狂気」",
    date: "2026-03-30",
    category: "R-1",
    excerpt: "「ピン芸って漫才やコントに比べて地味じゃない？」なんて思ってる人がいたら、大間違いです。現代のR-1グランプリは、音楽とテクノロジーと強烈な個性がぶつかり合う、日本一ヤバいエンタメ空間になってます！",
    thumbnailUrl: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=800",
    content: `
      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">「誰も助けてくれない」舞台で爆発する究極の世界観</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        R-1グランプリは、日本で唯一の「ピン芸」の頂上決戦です。これ、よく芸人さんが言ってますけど、<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">「相方がいない舞台で客席のプレッシャーを一人で全被りする」</strong>って、マジで尋常じゃない精神力が必要らしいですよ。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        陣内智則さんやバカリズムさんが確立した「映像やフリップにツッコむ」IT時代の最先端スタイルから、だいたひかるさんのような毒のある等身大の語りまで、一人だからこそ誰にも邪魔されない「究極の狂気の世界観」が展開されるのがR-1の最大の魅力です。
      </p>

      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">モニターと音響を完璧に支配する「シン・ピン芸」</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        最近のR-1を見てて一番痺れるのは、<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">圧倒的なテクノロジーと音楽の融合</strong>です。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        ゆりやんレトリィバァさん、ZAZYさん、粗品さんなど、近年のファイナリストたちは単純なフリップの枠を完全に破壊しました。音響のタイミング、モニターの映像切り替え、そのすべてをミリ秒単位で完全に掌握して笑いを取る姿は、お笑いというより「一人でオーケストラを指揮してる」みたいな芸術性すら感じますよね。マジで今のR-1のレベルは高すぎます。
      </p>

      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">ひな壇での生き残りサバイバル</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        ピン芸人って、賞レースが終わった後の「ひな壇バラエティ」に出た時が一番しんどいと言われています。周りはコンビだらけの中で、たった一人でパスを受けてシュートを決めなきゃいけないからです。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        それでも、劇団ひとりさん、おいでやす小田さんなど、今のテレビ界に絶対に欠かせない『最強の一人芝居プレイヤー』たちは、この修羅場を乗り越えてきました。たった身一つで荒波に立ち向かうピン芸人の背中は、いつ見ても最高にカッコいいです。
      </p>
    `
  },
  {
    slug: "r1-2026-winner",
    title: "【速報】R-1グランプリ2026、今井らいぱちが大波乱をごぼう抜きして悲願の優勝！",
    date: "2026-03-22",
    category: "R-1",
    excerpt: "2026年のR-1グランプリは、過去最多6171人の超・激戦！その頂点に立ったのは、誰も予想しなかった「あの男」でした。今井らいぱちのヤバすぎる決勝ネタを振り返ります！",
    thumbnailUrl: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80&w=800",
    content: `
      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">史上最多6171人の頂点という「バケモノ」の称号</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        2026年3月21日、ついに生放送された「R-1グランプリ2026」！過去最多となる6171人ものピン芸人がエントリーした今大会ですが、見事第24代王者に輝いたのは……まさかの<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">今井らいぱち</strong>さんでした！
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        ファーストステージを圧倒的な熱量で突破したかと思いきや、ファイナルステージでぶっ込んできたのは誰もが度肝を抜かれた「絵描き歌」というフォーマットのネタ！会場の空気を一瞬で自分の色に染め上げて爆笑をかっさらう姿、テレビの前でひっくり返って笑ってしまいました（笑）。審査員からの圧倒的な支持も納得です。
      </p>

      <blockquote className="border-l-4 border-accent bg-accent/5 p-5 mx-2 rounded-r-lg my-10 text-slate-300 italic md:text-lg leading-relaxed font-serif">
        「長かったですが、諦めずにやり続けて本当によかったです。今日のためにすべてを懸けてきました。」（優勝直後の漢泣きコメント）
      </blockquote>

      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        この優勝をきっかけに、今井らいぱちさんのバラエティ番組での大暴れが始まるのは間違いありません！今後のテレビでの大活躍から絶対に目が離せませんね。
      </p>
    `
  },
  {
    slug: "m1-2025-takurou",
    title: "【M-1】M-1グランプリ2025王者は「たくろう」！新時代の『間』が日本中を完全掌握",
    date: "2025-12-22",
    category: "M-1",
    excerpt: "11,521組という前人未到のエントリー数を記録したM-1グランプリ2025。誰も思いつかなかった「新時代の間」で日本中を爆笑の渦に巻き込んだたくろうの優勝劇をお届けします。",
    thumbnailUrl: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=800",
    content: `
      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">前人未到、11,521組という「お笑いの飽和状態」</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        毎年「今年が一番ヤバい」と言われ続けるM-1グランプリですが、2025年大会はついにエントリー数が1万組の大台を軽く突破し、<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">「11,521組」</strong>というマジでえげつない史上最大の激戦となりました。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        そんなサバイバルを勝ち抜いて決勝の舞台に降り立った10組の中から、栄光のトロフィーをもぎ取ったのは「たくろう」のお二人でした！
      </p>
      
      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">赤木の「おどおど」と、きむらの「昭和感」が産む奇跡</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        赤木さんのあの極度におどおどした独自のボケと、きむらバンドさんの昭和の香りが漂いすぎる穏やかなツッコミ。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        漫才界の誰も足を踏み入れなかったこの<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">「新時代の一抹の間」</strong>から発生する笑いの連鎖は、マジで審査員も大絶賛でしたよね。最終決戦でも全くブレずにそのスタイルを貫き通し、結果的に会場のお客さんを完全に掌の上で転がしていました。
      </p>
    `
  },
  {
    slug: "koc-2025-longcoatdaddy",
    title: "【KOC】キングオブコント2025、ロングコートダディが悲願の第18代キングに君臨！",
    date: "2025-10-12",
    category: "KOC",
    excerpt: "常に賞レースの決勝に君臨しながら「あと一歩」だった天才たちが、ついに栄冠を手にした。ロングコートダディの圧倒的な世界観と演技力が爆発したKOC2025の裏側。",
    thumbnailUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=800",
    content: `
      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">天才たちがついに「コント日本一」の玉座を手にした夜</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        2025年10月11日。過去最多3449組がしのぎを削った「キングオブコント2025」の舞台で、ついに！ついに<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">ロングコートダディ</strong>が第18代王者の称号を手に入れました！
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        今までM-1グランプリの決勝でも、KOCの決勝でも、常に超・高評価を受けてきたロコディの二人。でもなぜか「あと一歩」で優勝に手が届かない悔しい思いをしてきました。その天才たちが、ついに文句なしのナンバーワンに輝いた瞬間、マジで泣きそうになりましたよね。
      </p>
      
      <h2 className="text-2xl md:text-3xl font-black text-accent border-b border-accent/30 pb-3 mt-14 mb-8">「ゆるくて哀愁MAX」な無敵の世界観</h2>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        ファーストステージ、そしてファイナルステージの2本とも、彼ら特有の<strong className="text-white font-black bg-accent/20 px-1.5 py-0.5 rounded border border-accent/30">「ゆるさの中に潜む哀愁、そして圧倒的なバカバカしさ」</strong>が完璧な形で発揮されていました。
      </p>
      <p className="text-slate-200 leading-[2.2] tracking-wide mb-8 md:text-lg">
        堂前さんの涼しい顔をして急所をえぐるようなボケ（時にツッコミ）と、兎さんのデカい体を存分に活かした「天然キャラ」の破壊力が完璧に噛み合って、他のコント師を完全に置き去りにするほどの爆笑の波を作りました。これからの活躍も本当に楽しみです。
      </p>
    `
  }
];


