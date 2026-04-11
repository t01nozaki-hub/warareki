import { Contestant } from "./types";

export const contestantsData: Record<string, Contestant> = {
  // --- M-1 Champions ---
  "中川家": {
    name: "中川家",
    hometown: "大阪府守口市",
    agency: "吉本興業",
    formedDate: "1992年",
    members: [
      { name: "中川剛", birthplace: "大阪府守口市" },
      { name: "中川礼二", birthplace: "大阪府守口市" }
    ],
    youtubeUrl: "https://www.youtube.com/@nakagawake-ch",
    description: "記念すべき第1回M-1グランプリの初代王者。実の兄弟ならではの息の合った掛け合いと、礼二の圧倒的なモノマネ・キャラクター憑依芸、剛の絶妙な脱力系ツッコミが融合する。大阪の日常を切り取ったような「しゃべくり漫才」の完成形として、現在も劇場でトリを務め続ける上方漫才界の最高峰。"
  },
  "ますだおかだ": {
    name: "ますだおかだ",
    hometown: "大阪府",
    agency: "松竹芸能",
    formedDate: "1993年",
    members: [
      { name: "増田英彦", birthplace: "大阪府守口市" },
      { name: "岡田圭右", birthplace: "大阪府大阪市" }
    ],
    youtubeUrl: "https://www.youtube.com/@masudaokada",
    description: "第2回M-1グランプリ王者。吉本興業以外の事務所から初の優勝を果たした松竹芸能の看板。増田の理詰めかつハイテンポなツッコミと、岡田の突き抜けた「スベり芸」「すぁんっ！」などのギャグが交差する、スピード感溢れる漫才スタイルが特徴。"
  },
  "フットボールアワー": {
    name: "フットボールアワー",
    hometown: "大阪府",
    agency: "吉本興業",
    formedDate: "1999年",
    members: [
      { name: "岩尾望", birthplace: "大阪府大阪市" },
      { name: "後藤輝基", birthplace: "大阪府大阪市" }
    ],
    youtubeUrl: "https://www.youtube.com/@footballhour-ch",
    description: "第3回M-1グランプリ王者。岩尾の特異なルックスとボソッと放つ狂気的なボケに対し、後藤の「例えツッコミ」という革命的な技術が炸裂するスタイル。2000年代の漫才シーンを牽引し、後藤の「高低差ありすぎて耳キーンなるわ」などの名言は一世を風靡した。"
  },
  "アンタッチャブル": {
    name: "アンタッチャブル",
    hometown: "埼玉県/静岡県",
    agency: "プロダクション人力舎",
    formedDate: "1994年",
    members: [
      { name: "山崎弘也", birthplace: "埼玉県春日部市" },
      { name: "柴田英嗣", birthplace: "静岡県静岡市" }
    ],
    youtubeUrl: "https://www.youtube.com/@untouchable_official",
    description: "第4回M-1グランプリ王者。歴代最高レベルの爆発力を持つ最強漫才師の一角。山崎（ザキヤマ）の予測不能かつテキトーすぎる怒涛のボケに、柴田が動物的な反射神経と圧倒的声量でツッコみ続けるスタイル。10年近い活動休止期間を経て奇跡の復活を果たし、今なお衰えぬ漫才スキルを見せつける。"
  },
  "ブラックマヨネーズ": {
    name: "ブラックマヨネーズ",
    hometown: "京都府",
    agency: "吉本興業",
    formedDate: "1998年",
    members: [
      { name: "小杉竜一", birthplace: "京都府京都市" },
      { name: "吉田敬", birthplace: "京都府京都市" }
    ],
    youtubeUrl: "https://www.youtube.com/@blackmayonnaise",
    description: "第5回M-1グランプリ王者。互いのコンプレックス（ハゲ・ブツブツ）や細かい被害妄想を異常な熱量でぶつけ合う「喧嘩漫才」という新ジャンルを確立した。吉田のネガティブすぎる屁理屈によるボケと、小杉の甲高い声による嘆きツッコミが完璧に噛み合い、M-1史上最高傑作との呼び声も高い。"
  },
  "チュートリアル": {
    name: "チュートリアル",
    hometown: "京都府",
    agency: "吉本興業",
    formedDate: "1998年",
    members: [
      { name: "徳井義実", birthplace: "京都府京都市" },
      { name: "福田充徳", birthplace: "京都府京都市" }
    ],
    youtubeUrl: "https://www.youtube.com/@tutorial_official",
    description: "第6回M-1グランプリ王者。M-1史上初となる「完全優勝（審査員全員から1位票を獲得）」を達成。徳井が次第に狂気を帯びて自分の世界（妄想）に入り込み、幼馴染である福田が呆れながらもノリツッコミで対応する「妄想漫才」の完成形。"
  },
  "サンドウィッチマン": {
    name: "サンドウィッチマン",
    hometown: "宮城県仙台市",
    agency: "グレープカンパニー",
    formedDate: "1998年",
    members: [
      { name: "伊達みきお", birthplace: "宮城県仙台市" },
      { name: "富澤たけし", birthplace: "東京都/宮城県" }
    ],
    youtubeUrl: "https://www.youtube.com/@sandwichman-ch",
    description: "第7回M-1グランプリ王者。M-1史上初となる「敗者復活戦からの優勝」というシンデレラストーリーを実現。コワモテな見た目とは裏腹に、富澤の少しズレた言葉遊びボケと伊達の的確で哀愁漂うツッコミが絶妙に絡み合う。漫才だけでなくコントの評価も極めて高く、好感度ランキングで長年トップに君臨。"
  },
  "NON STYLE": {
    name: "NON STYLE",
    hometown: "大阪府",
    agency: "吉本興業",
    formedDate: "2000年",
    members: [
      { name: "石田明", birthplace: "大阪府大阪市" },
      { name: "井上裕介", birthplace: "大阪府大阪市" }
    ],
    youtubeUrl: "https://www.youtube.com/@nonstyle_official",
    description: "第8回M-1グランプリ王者。圧倒的な手数の多さと、観客を置いてけぼりにしないスピード感を誇る漫才。井上の自信過剰でナルシストなボケに対し、石田が全身を使ったダイナミックな動きでツッコむスタイル。中高生を中心に絶大な人気を誇る。"
  },
  "パンクブーブー": {
    name: "パンクブーブー",
    hometown: "福岡県/大分県",
    agency: "吉本兴業",
    formedDate: "2001年",
    members: [
      { name: "佐藤哲夫", birthplace: "大分県別府市" },
      { name: "黒瀬純", birthplace: "福岡県糟屋郡" }
    ],
    youtubeUrl: "https://www.youtube.com/@punkbooboo",
    description: "第9回M-1グランプリ王者。満票での優勝に加え、「THE MANZAI 2011」でも優勝を果たし二冠を達成。徹底的に作り込まれた緻密な構成と、狂いのない間合いによる「職人技」とも言える完璧な漫才技術を持つ。"
  },
  "笑い飯": {
    name: "笑い飯",
    hometown: "奈良県",
    agency: "吉本興業",
    formedDate: "2000年",
    members: [
      { name: "西田幸治", birthplace: "奈良県奈良市" },
      { name: "哲夫", birthplace: "奈良県桜井市" }
    ],
    youtubeUrl: "https://www.youtube.com/@waraimeshi-ch",
    description: "第10回M-1グランプリ王者。前人未到の「9年連続決勝進出」を果たしたミスターM-1。ボケとツッコミが目まぐるしく入れ替わり続ける「Wボケ」という漫才界の歴史を覆す新スタイルを発明し、M-1グランプリの象徴的な存在となった。"
  },
  "トレンディエンジェル": {
    name: "トレンディエンジェル",
    hometown: "神奈川県/東京都",
    agency: "吉本興業",
    formedDate: "2004年",
    members: [
      { name: "斎藤司", birthplace: "神奈川県横浜市" },
      { name: "たかし", birthplace: "東京都小平市" }
    ],
    youtubeUrl: "https://www.youtube.com/@trendyangel-ch",
    description: "第11回M-1グランプリ王者。敗者復活戦からの優勝劇をサンドウィッチマン以来8年ぶりに再現。自らの「ハゲ」というコンプレックスを明るくポップな笑いに昇華させ、斎藤の「斎藤さんだぞ」というキャッチーなフレーズとミュージカル調の動きで爆発的な人気を得た。"
  },
  "銀シャリ": {
    name: "銀シャリ",
    hometown: "兵庫県/鹿児島県",
    agency: "吉本興業",
    formedDate: "2005年",
    members: [
      { name: "鰻和弘", birthplace: "大阪府八尾市" },
      { name: "橋本直", birthplace: "兵庫県伊丹市" }
    ],
    youtubeUrl: "https://www.youtube.com/@ginshari",
    description: "第12回M-1グランプリ王者。青いジャケットに身を包んだ、昭和の匂いを感じさせる正統派しゃべくり漫才の継承者。鰻の飄々とした掴みどころのないボケに、橋本の言葉遊びをふんだんに盛り込んだ流麗で巧みなツッコミが見事に刺さる。"
  },
  "とろサーモン": {
    name: "とろサーモン",
    hometown: "宮崎県",
    agency: "吉本興業",
    formedDate: "2002年",
    members: [
      { name: "久保田かずのぶ", birthplace: "宮崎県宮崎市" },
      { name: "村田秀亮", birthplace: "宮崎県宮崎市" }
    ],
    youtubeUrl: "https://www.youtube.com/@torosalmon_official",
    description: "第13回M-1グランプリ王者。ラストイヤーとなる結成15年目で悲願の優勝を果たした。久保田の社会のダークサイドを煮詰めたような毒気のあるボケと、村田のナレーションやマイクパフォーマンスを活かした渋いツッコミが魅力。「すかし漫才」という独自のスタイルも持つ。"
  },
  "霜降り明星": {
    name: "霜降り明星",
    hometown: "大阪府",
    agency: "吉本興業",
    formedDate: "2013年",
    members: [
      { name: "せいや", birthplace: "大阪府東大阪市" },
      { name: "粗品", birthplace: "大阪府大阪市" }
    ],
    youtubeUrl: "https://www.youtube.com/@shimofurimyojo",
    description: "第14回M-1グランプリ王者。最年少記録での優勝を果たし、「お笑い第7世代」というムーブメントを生み出した旗手。せいやが舞台を右ヒダリに動き回るアグレッシブなボケに対して、粗品がフリップめくりのようにポーズを決めて単語で一刀両断する画期的な漫才。"
  },
  "ミルクボーイ": {
    name: "ミルクボーイ",
    hometown: "大阪府/兵庫県",
    agency: "吉本興業",
    formedDate: "2007年",
    members: [
      { name: "駒場孝", birthplace: "大阪府大阪市" },
      { name: "内海崇", birthplace: "兵庫県姫路市" }
    ],
    youtubeUrl: "https://www.youtube.com/@milkboy_official",
    description: "第15回M-1グランプリ王者。歴代最高得点（681点）を叩き出した「コーンフレーク」のネタに代表される「リターン漫才」の完成形。「おかんが言うには○○」というフォーマットの中で、肯定と否定を繰り返しながら偏見を詰め込むスタイルは全世代に愛される普遍的な笑い。"
  },
  "マヂカルラブリー": {
    name: "マヂカルラブリー",
    hometown: "愛知県/埼玉県",
    agency: "吉本興業",
    formedDate: "2007年",
    members: [
      { name: "野田クリスタル", birthplace: "神奈川県横浜市" },
      { name: "村上", birthplace: "愛知県新城市" }
    ],
    youtubeUrl: "https://www.youtube.com/@madical-lovely",
    description: "第16回M-1グランプリ王者。野田が床を這い回るなど言葉を発さずに身体全体でボケ続け、村上がそれに解説チックにツッコむスタイルで「あれは漫才か？」という日本中を巻き込む大論争を起こした。野田はR-1でも優勝しており、異端児にして天才。"
  },
  "錦鯉": {
    name: "錦鯉",
    hometown: "北海道/東京都",
    agency: "ソニー・ミュージックアーティスツ",
    formedDate: "2012年",
    members: [
      { name: "長谷川雅紀", birthplace: "北海道札幌市" },
      { name: "渡辺隆", birthplace: "東京都江戸川区" }
    ],
    youtubeUrl: "https://www.youtube.com/@nishikigoi-ch",
    description: "第17回M-1グランプリ王者。史上最年長（長谷川が50歳）での優勝という感動のストーリーで日本中を泣かせた。長谷川の歯が抜けた「底抜けのバカおじさん」という強烈なキャラクターを、渡辺が冷静かつ愛のある往復ビンタで捌く王道と狂気のハイブリッド漫才。"
  },
  "ウエストランド": {
    name: "ウエストランド",
    hometown: "岡山県",
    agency: "タイタン",
    formedDate: "2008年",
    members: [
      { name: "井口浩之", birthplace: "岡山県津山市" },
      { name: "河本太", birthplace: "岡山県津山市" }
    ],
    youtubeUrl: "https://www.youtube.com/@westland_official",
    description: "第18回M-1グランプリ王者。井口が圧倒的な熱量と早口で世の中への不満、偏見、ルサンチマンをまくし立てる「毒舌漫才」の最高峰。「あるなしクイズ」に託して、YouTuberやお笑いファン、さらにはM-1自体までも笑いの標的にするパンクなスタイル。"
  },
  "令和ロマン": {
    name: "令和ロマン",
    hometown: "東京都",
    agency: "吉本興業",
    formedDate: "2018年",
    members: [
      { name: "髙比良くるま", birthplace: "東京都練馬区" },
      { name: "松井ケムリ", birthplace: "神奈川県横浜市" }
    ],
    youtubeUrl: "https://www.youtube.com/@officialreiwaroman",
    description: "第19回・第20回M-1王者（史上初の連覇）。中川家以来となる「トップバッターからの優勝」を達成。論理的なネタの分析と圧倒的な華を持つくるまのボケに、慶応大卒のスマートさと豊かな髭を持つケムリのどっしりしたツッコミが合わさる。新世代の天才。"
  },

  // --- KOC Champions & Notable Finalists ---
  "東京03": {
    name: "東京03",
    hometown: "東京都/千葉県",
    agency: "プロダクション人力舎",
    formedDate: "2003年",
    members: [
      { name: "飯塚悟志", birthplace: "千葉県四街道市" },
      { name: "豊本明長", birthplace: "愛知県春日井市" },
      { name: "角田晃広", birthplace: "東京都文京区" }
    ],
    youtubeUrl: "https://www.youtube.com/@tokyo03official",
    description: "第2回KOC王者。日常に潜む些細な気まずさや小さなイライラを増幅させ、爆笑のコントへと昇華させる「究極の日常コントトリオ」。飯塚の切れ味鋭いツッコミ、角田の情けない熱演ボケ、豊本の不気味でマイペースなボケという完璧なトライアングルを形成し、日本一チケットが取れないコント師とも言われる。"
  },
  "バイきんぐ": {
    name: "バイきんぐ",
    hometown: "兵庫県/福岡県",
    agency: "ソニー・ミュージックアーティスツ",
    formedDate: "1996年",
    members: [
      { name: "小峠英二", birthplace: "福岡県田川郡" },
      { name: "西村瑞樹", birthplace: "兵庫県尼崎市" }
    ],
    youtubeUrl: "https://www.youtube.com/@viking-ch",
    description: "第5回KOC王者。「なんて日だ！」の強烈なフレーズと共に大ブレイク。西村が演じるどこか狂気を孕んだサイコパスなキャラクターに対し、スキンヘッドの小峠が目と血管を見開いて魂の叫びのような全力ツッコミを浴びせるスタイル。"
  },
  "シソンヌ": {
    name: "シソンヌ",
    hometown: "青森県/静岡県",
    agency: "吉本興業",
    formedDate: "2006年",
    members: [
      { name: "じろう", birthplace: "青森県弘前市" },
      { name: "長谷川忍", birthplace: "静岡県浜松市" }
    ],
    youtubeUrl: "https://www.youtube.com/@sissonne_official",
    description: "第7回KOC王者。まるで一本の演劇や人間ドラマを見ているかのような、独特の哀愁と空気感を持つ演技派コントコンビ。じろうが演じる憑依的なキャラクター（おじさんからおばさんまで）のリアリティと、長谷川のスタイリッシュな佇まいからのツッコミが魅力。"
  },
  "ハナコ": {
    name: "ハナコ",
    hometown: "愛知県/岡山県/千葉県",
    agency: "ワタナベエンターテインメント",
    formedDate: "2014年",
    members: [
      { name: "菊田竜大", birthplace: "千葉県柏市" },
      { name: "秋山寛貴", birthplace: "岡山県岡山市" },
      { name: "岡部大", birthplace: "秋田県秋田市" }
    ],
    youtubeUrl: "https://www.youtube.com/@hanako_official",
    description: "第11回KOC王者。若手ながら結成わずか4年でキングオブコントを制したトリオ。秋山と岡部による「犬」「おじさん」などのコミカルで表現力豊かなやり取りに、出番の少ない菊田がスパイス的に絡み合う、明るく誰もが笑えるコントが特徴。"
  },
  "空気階段": {
    name: "空気階段",
    hometown: "千葉県/岡山県",
    agency: "吉本興業",
    formedDate: "2012年",
    members: [
      { name: "鈴木もぐら", birthplace: "千葉県旭市" },
      { name: "水川かたまり", birthplace: "岡山県岡山市" }
    ],
    youtubeUrl: "https://www.youtube.com/@kukikaidan",
    description: "第14回KOC王者。もぐらが醸し出す「借金・ギャンブル・おじさん」という生々しく昭和的なキャラクターと、かたまりの緻密でドラマチックな脚本が見事に融合。悲哀と爆笑が同居するコントは業界内評価も高く、ラジオ番組と共に熱烈な支持を得ている。"
  },
  
  // --- R-1 Champions ---
  "野田クリスタル": {
    name: "野田クリスタル",
    hometown: "神奈川県横浜市",
    agency: "吉本興業",
    formedDate: "2002年(芸歴)",
    members: [
      { name: "野田クリスタル", birthplace: "神奈川県横浜市" }
    ],
    youtubeUrl: "https://www.youtube.com/@nodacrystal",
    description: "2020年R-1王者であり、後にマヂカルラブリーとしてM-1も制覇した二冠の天才。R-1では自らプログラミングしたチープでバグだらけの自作ゲーム（野田ゲー）をプレイしながら実況ツッコミを入れるという、デジタル時代の新しい笑いを確立した。"
  },
  "街裏ぴんく": {
    name: "街裏ぴんく",
    hometown: "大阪府堺市",
    agency: "トゥインクル・コーポレーション",
    formedDate: "2004年(芸歴)",
    members: [
      { name: "街裏ぴんく", birthplace: "大阪府堺市" }
    ],
    youtubeUrl: "https://www.youtube.com/@machiurapink",
    description: "2024年R-1王者。芸歴20年目にして遂に頂点に立った漫談家。誰もが知る有名人や出来事を題材に、完全なる嘘（架空のエピソード）を口からでまかせで語り続ける「架空漫談」を披露。圧倒的な熱量と迫真の演技により、観客を奇妙な虚構の世界へ引きずり込む。"
  },

  // --- Notable Finalists (M-1, KOC) ---
  "和牛": {
    name: "和牛",
    hometown: "愛媛県/大阪府",
    agency: "吉本興業",
    formedDate: "2006年",
    members: [
      { name: "水田信二", birthplace: "愛媛県伊予市" },
      { name: "川西賢志郎", birthplace: "大阪府東大阪市" }
    ],
    youtubeUrl: "https://www.youtube.com/@wagyu-ch",
    description: "M-1グランプリで3年連続準優勝という輝かしい記録を残した漫才師。「屁理屈コンプレックス」の水田が細かい難癖をつけ続け、川西がいなしながらも徐々にヒートアップしていく「伏線回収型漫才」。漫才の美しさと完成度は歴代王者にも引けを取らない。"
  },
  "オードリー": {
    name: "オードリー",
    hometown: "東京都",
    agency: "ケイダッシュステージ",
    formedDate: "2000年",
    members: [
      { name: "若林正恭", birthplace: "東京都中央区" },
      { name: "春日俊彰", birthplace: "埼玉県所沢市" }
    ],
    youtubeUrl: "https://www.youtube.com/@annkw_official",
    description: "2008年M-1準優勝。春日が胸を張り「トゥース！」と的外れなタイミングでボケ（ツッコミ）を入れ、若林が冷徹にシバく「ズレ漫才」で社会現象とも言える大ブレイクを果たした。現在は若林の卓越したMC力と、春日の肉体派・ロケ芸人としての地位を盤石にしている。"
  },
  "千鳥": {
    name: "千鳥",
    hometown: "岡山県",
    agency: "吉本興業",
    formedDate: "2000年",
    members: [
      { name: "大悟", birthplace: "岡山県笠岡市（北木島）" },
      { name: "ノブ", birthplace: "岡山県井原市" }
    ],
    youtubeUrl: "https://www.youtube.com/@chidori_official",
    description: "M-1決勝に4度進出。ブレイクまでに時間はかかったものの、現在ではお笑い界のトップMCとして君臨。大悟の岡山弁と島育ちの野生味あふれるクセの強いボケに対し、ノブの「シンプルに口が臭い」「イカ2貫」などのフレーズ感溢れる名ツッコミが中毒性を生み出す。"
  },
  "かまいたち": {
    name: "かまいたち",
    hometown: "島根県/大阪府",
    agency: "吉本興業",
    formedDate: "2004年",
    members: [
      { name: "山内健司", birthplace: "島根県松江市" },
      { name: "濱家隆一", birthplace: "大阪府大阪市" }
    ],
    youtubeUrl: "https://www.youtube.com/@kamaitachi.channel",
    description: "キングオブコント2017王者であり、M-1グランプリ2019準優勝。コントと漫才の両方で頂点レベルの実力を誇る。山内の狂気的で粘着質な屁理屈ボケに、長身の濱家が正論で激しくツッコむスタイル。YouTubeやレギュラー番組でも常に最前線を走り続けている。"
  },
  "ジャルジャル": {
    name: "ジャルジャル",
    hometown: "大阪府/兵庫県",
    agency: "吉本興業",
    formedDate: "2003年",
    members: [
      { name: "後藤淳平", birthplace: "大阪府吹田市" },
      { name: "福徳秀介", birthplace: "兵庫県芦屋市" }
    ],
    youtubeUrl: "https://www.youtube.com/@jarujaru",
    description: "2020年KOC王者。同じパターンのゲームやルールを無限に繰り返すような独特な「反復型」のコントや漫才が特徴。毎日YouTubeに新たなコント動画を公開し続けるなど、お笑いに対する異常なまでの熱量とクリエイティビティを持ち、ファンを圧倒し続けている。"
  },
  "真空ジェシカ": {
    name: "真空ジェシカ",
    hometown: "神奈川県/千葉県",
    agency: "プロダクション人力舎",
    formedDate: "2011年",
    members: [
      { name: "川北茂澄", birthplace: "埼玉県川越市" },
      { name: "ガク", birthplace: "神奈川県横浜市" }
    ],
    youtubeUrl: "https://www.youtube.com/@shinkujessica",
    description: "M-1グランプリで連続決勝進出を果たす次世代のカリスマ。川北のインターネットカルチャーやサブカル知識をベースにした尖った不条理ボケに対し、金髪マッシュのガクが独自の語彙力で丁寧にツッコむ。「大喜利」の強さを漫才にそのまま落とし込んだような知的でカオスなスタイル。"
  },
  "ロングコートダディ": {
    name: "ロングコートダディ",
    hometown: "福井県/鳥取県",
    agency: "吉本興業",
    formedDate: "2009年",
    members: [
      { name: "堂前透", birthplace: "福井県大飯郡" },
      { name: "兎", birthplace: "岡山県岡山市" }
    ],
    youtubeUrl: "https://www.youtube.com/@longcoatdaddy",
    description: "M-1・KOCともに決勝の常連。細身で才能あふれる堂前の飄々とした知的なボケ（またはツッコミ）と、筋肉質だが圧倒的な「天然」を思わせる兎の存在感が魅力。「肉うどん」など、着眼点の面白さとほのぼのした世界観の中に鋭い笑いが仕込まれている。"
  },
  "さらば青春の光": {
    name: "さらば青春の光",
    hometown: "大阪府",
    agency: "ザ・森東（個人事務所）",
    formedDate: "2008年",
    members: [
      { name: "森田哲矢", birthplace: "大阪府堺市" },
      { name: "東ブクロ", birthplace: "大阪府茨木市" }
    ],
    youtubeUrl: "https://www.youtube.com/@saraba_official",
    description: "KOC決勝最多進出（6回）の記録を持つ最強の無冠の帝王。大手事務所から独立し、自らの個人事務所を立ち上げた。森田の圧倒的なトーク力と企画力、そして東ブクロの天性のスキャンダル体質を武器に、タブーを恐れないコントとYouTube動画で熱狂的なファンを獲得。"
  },
  "たくろう": {
    name: "たくろう",
    hometown: "滋賀県/大阪府",
    agency: "吉本興業",
    formedDate: "2016年",
    members: [
      { name: "赤木裕", birthplace: "滋賀県大津市" },
      { name: "きむらバンド", birthplace: "愛媛県松山市" }
    ],
    youtubeUrl: "https://www.youtube.com/@takuro-ch",
    description: "「誰がどないしてんねん」でお馴染みの上方漫才のホープ。赤木の極度におどおどして挙動不審なボケ（実は緻密に計算されている）と、きむらバンドの昭和感のある風貌からの優しいツッコミが「新時代の間」を生み出している。M-1敗者復活戦や賞レースで確かな爪痕を残す実力派。"
  }
,
// --- Additional Prominent Finalists ---
  "ドンデコルテ": {
    name: "ドンデコルテ",
    hometown: "東京都", // 渡辺は長野、小橋は埼玉ですが大まかに
    agency: "吉本興業",
    formedDate: "2012年",
    members: [
      { name: "小橋共作", birthplace: "埼玉県" },
      { name: "渡辺銀次", birthplace: "長野県" }
    ],
    youtubeUrl: "https://www.youtube.com/@dondecorte",
    description: "論理的で冷静なツッコミと、狂気的な屁理屈を淡々と述べるボケが織りなす「冷熱」のコント漫才が特徴。M-1グランプリの決勝という大舞台でもブレない唯一無二のスタイルを見せつけた。"
  },
  "さや香": {
    name: "さや香",
    hometown: "大阪府",
    agency: "吉本興業",
    formedDate: "2014年",
    members: [
      { name: "新山", birthplace: "大阪府東大阪市" },
      { name: "石井", birthplace: "大阪府大阪市" }
    ],
    youtubeUrl: "https://www.youtube.com/@sayaka-ch",
    description: "M-1グランプリ決勝の常連コンビ。新山の爆発的なパッションと独自すぎる論理（見せ算など）に対し、石井が冷静かつ激しくツッコミを返す。しゃべくり漫才の王道でありながら、誰も真似できない熱量を持つ。"
  },
  "マユリカ": {
    name: "マユリカ",
    hometown: "兵庫県",
    agency: "吉本興業",
    formedDate: "2011年",
    members: [
      { name: "阪本", birthplace: "兵庫県神戸市" },
      { name: "中谷", birthplace: "兵庫県神戸市" }
    ],
    youtubeUrl: "https://www.youtube.com/@mayurika",
    description: "幼馴染コンビならではの気持ち悪さと愛嬌が同居する「キモダチ漫才」でブレイク。阪本のネガティブで独特なトーンのボケと、中谷の甲高く通るツッコミが絶妙にマッチし、M-1決勝でも爆笑をかっさらった。"
  },
  "男性ブランコ": {
    name: "男性ブランコ",
    hometown: "滋賀県/京都府",
    agency: "吉本興業",
    formedDate: "2011年",
    members: [
      { name: "浦井のりひろ", birthplace: "京都府京都市" },
      { name: "平井まさあき", birthplace: "兵庫県豊岡市" }
    ],
    youtubeUrl: "https://www.youtube.com/@danbura",
    description: "M-1グランプリ、キングオブコントの両方で決勝進出を果たす実力派。音符運びのような独創的な設定から、穏やかなトーンで異常な出来事を展開する独特の世界観を持つ。"
  },
  "ヨネダ2000": {
    name: "ヨネダ2000",
    hometown: "東京都/神奈川県",
    agency: "吉本興業",
    formedDate: "2020年",
    members: [
      { name: "誠", birthplace: "東京都世田谷区" },
      { name: "愛", birthplace: "神奈川県横浜市" }
    ],
    youtubeUrl: "https://www.youtube.com/@yoneda2000",
    description: "「餅つき」などのネタに見られるように、常軌を逸したリズムと世界観で全てを巻き込む新星。異次元の構成によって、結成からわずかでM-1決勝やTHE W決勝に到達する快挙を成し遂げた。"
  },
  "モグライダー": {
    name: "モグライダー",
    hometown: "埼玉県/愛媛県",
    agency: "マセキ芸能社",
    formedDate: "2009年",
    members: [
      { name: "芝大輔", birthplace: "愛媛県北宇和郡" },
      { name: "ともしげ", birthplace: "埼玉県飯能市" }
    ],
    youtubeUrl: "https://www.youtube.com/@mogurider",
    description: "ともしげのポンコツで予想不能な天然ボケ（噛み、ミス）に対し、リーゼントでスタイリッシュな芝が見事にさばいていく「ドキュメンタリー漫才」。練習通りにいかないその一回限りの爆発力が最大の魅力。"
  },
  "ダンビラムーチョ": {
    name: "ダンビラムーチョ",
    hometown: "山梨県/長野県",
    agency: "吉本興業",
    formedDate: "2011年",
    members: [
      { name: "大原優一", birthplace: "山梨県甲府市" },
      { name: "原田フニャオ", birthplace: "長野県諏訪市" }
    ],
    youtubeUrl: "https://www.youtube.com/@danbira",
    description: "「おじさん」や「歌」「スポーツあるある」などを題材に、圧倒的な歌唱力と哀愁漂うキャラクターで魅せる。バカバカしさと楽しさに全振りした漫才でM-1決勝に旋風を巻き起こした。"
  },
  "エバース": {
    name: "エバース",
    hometown: "東京都/神奈川県",
    agency: "吉本興業",
    formedDate: "2016年",
    members: [
      { name: "佐々木隆史", birthplace: "東京都" },
      { name: "町田和樹", birthplace: "神奈川県" }
    ],
    youtubeUrl: "https://www.youtube.com/@evers_official",
    description: "若手ながらも、まるでベテランのような落ち着きと高水準の掛け合いを見せる本格派しゃべくり漫才。言葉の裏を突くような巧みなボケと、的確でキレのあるツッコミが魅力。"
  },
  "ママタルト": {
    name: "ママタルト",
    hometown: "東京都/大阪府",
    agency: "サンミュージック",
    formedDate: "2016年",
    members: [
      { name: "檜原洋平", birthplace: "大阪府和泉市" },
      { name: "大鶴肥満", birthplace: "東京都練馬区" }
    ],
    youtubeUrl: "https://www.youtube.com/@mamatarto",
    description: "体重160kgを超える大鶴肥満のダイナミックな体と「まーごめ」という万能ワード、そして檜原の理論的でワードセンス溢れるツッコミが奇跡的なバランスを生み出すパワー系漫才コンビ。"
  },
  "シシガシラ": {
    name: "シシガシラ",
    hometown: "東京都/埼玉県",
    agency: "吉本興業",
    formedDate: "2018年",
    members: [
      { name: "脇田", birthplace: "鹿児島県" },
      { name: "星勘太", birthplace: "東京都" }
    ],
    description: "脇田の頭髪（ハゲ）を最大限に活かしつつも、決して悲壮感を感じさせないポップな展開の漫才が持ち味。M-1グランプリ2023にて見事敗者復活戦を勝ち抜き、決勝進出を果たした実力派。"
  },
  "カナメストーン": {
    name: "カナメストーン",
    hometown: "茨城県",
    agency: "マセキ芸能社",
    formedDate: "2010年",
    members: [
      { name: "東峰零士", birthplace: "茨城県" },
      { name: "山口誠", birthplace: "茨城県" }
    ],
    description: "中学時代の親友コンビという絆の深さから生み出される、物理的にも精神的にも「近すぎる」かけ合いが魅力。零士の甲高いツッコミと山口の奇妙なテンションのボケで会場を掌握する。"
  },
  "ダイタク": {
    name: "ダイタク",
    hometown: "熊本県",
    agency: "吉本興業",
    formedDate: "2008年",
    members: [
      { name: "吉本大", birthplace: "熊本県" },
      { name: "吉本拓", birthplace: "熊本県" }
    ],
    description: "一卵性双生児という最強の武器を使いこなし、巧妙で複雑な構成の「シンクロ漫才」や「顔が同じだからこそできるトリック」を駆使する。若手の手本とも言われる無駄のない漫才構造が特徴。"
  },
  "豪快キャプテン": {
    name: "豪快キャプテン",
    hometown: "大阪府",
    agency: "吉本興業",
    formedDate: "2019年",
    members: [
      { name: "べーやん", birthplace: "大阪府" },
      { name: "ギャンゴリ", birthplace: "兵庫県" }
    ],
    description: "圧倒的な声量と熱量で押しまくる上方漫才の超新星。粗削りなパワーの中に確かな漫才の地肩を感じさせ、賞レースに強烈なインパクトを残す。"
  },
  "サルゴリラ": {
    name: "サルゴリラ",
    hometown: "東京都",
    agency: "吉本興業",
    formedDate: "2016年",
    members: [
      { name: "児玉智洋", birthplace: "東京都" },
      { name: "赤羽健一", birthplace: "東京都" }
    ],
    description: "KOC2023王者。幼稚園からの幼馴染という驚異の歴史を持つ。狂気とリアルが絶妙に混ざり合った演劇的で不気味なコントは、見る者を引き込んで離さない。"
  },
  "コットン": {
    name: "コットン",
    hometown: "広島県/神奈川県",
    agency: "吉本興業",
    formedDate: "2012年",
    members: [
      { name: "西村真二", birthplace: "広島県" },
      { name: "きょん", birthplace: "埼玉県" }
    ],
    description: "KOC2022準優勝。きょんの卓越した演技力・キャラクター憑依力と、元アナウンサーという異色の経歴を持つ西村のスタイリッシュなツッコミが見事にハマるコント職人。"
  },
  "や団": {
    name: "や団",
    hometown: "東京都/神奈川県",
    agency: "SMA",
    formedDate: "2007年",
    members: [
      { name: "ロングサイズ伊藤", birthplace: "神奈川県" },
      { name: "本間キッド", birthplace: "埼玉県" },
      { name: "中嶋享", birthplace: "新潟県" }
    ],
    description: "KOCで度々上位に食い込むトリオコント師。不条理で悲惨な状況に置かれたおじさん達が、見事な伏線回収とテンポ感で爆笑をかっさらう、熟練のコント技術を持つ。"
  },
  "ニッポンの社長": {
    name: "ニッポンの社長",
    hometown: "大阪府/京都府",
    agency: "吉本興業",
    formedDate: "2013年",
    members: [
      { name: "辻", birthplace: "京都府" },
      { name: "ケツ", birthplace: "奈良県" }
    ],
    description: "KOC決勝の超常連。ケツが理不尽な目に遭う、または意味不明な行動を繰り返すという予測不可能な設定に、辻が淡々と冷静なトーンでツッコむ「不条理コント」の最高峰。"
  },
  "ビスケットブラザーズ": {
    name: "ビスケットブラザーズ",
    hometown: "大阪府/香川県",
    agency: "吉本興業",
    formedDate: "2011年",
    members: [
      { name: "きん", birthplace: "香川県丸亀市" },
      { name: "原田泰雅", birthplace: "大阪府岸和田市" }
    ],
    description: "KOC2022王者。巨漢2人によるエネルギッシュでファンタジックな設定のコントが持ち味。「野犬」や「セーラー服」など、見るものを一瞬で独自の世界観に引きずり込む力を持つ。"
  },
  "ハリガネロック": {
    name: "ハリガネロック", hometown: "奈良県/大阪府", agency: "吉本興業", formedDate: "1995年(2014年解散)", members: [{name: "ユウキロック", birthplace: "奈良県"},{name: "大上邦宏", birthplace: "大阪府"}],
    description: "M-1グランプリ初代（2001年）の準優勝コンビ。関西しゃべくり漫才の王道をゆくテンポと圧倒的なワードセンスで、初代M-1の舞台を最高潮に盛り上げた伝説的コンビ。2014年に惜しまれつつ解散。"
  },
  "アメリカザリガニ": {
    name: "アメリカザリガニ", hometown: "大阪府", agency: "松竹芸能", formedDate: "1994年", members: [{name: "柳原哲也", birthplace: "大阪府"},{name: "平井善之", birthplace: "大阪府"}],
    description: "M-1グランプリ初期の常連であり、第一回から連続出場。柳原の甲高い声の強烈なツッコミと、アニメやオタク文化を巧みに取り入れたネタで松竹芸能旋風を巻き起こした。"
  },
  "おぎやはぎ": {
    name: "おぎやはぎ", hometown: "東京都", agency: "プロダクション人力舎", formedDate: "1995年", members: [{name: "小木博明", birthplace: "東京都"},{name: "矢作兼", birthplace: "東京都"}],
    description: "独特のローテンションと絶妙な「間」で、関東の漫才スタイルをM-1に持ち込んだ開拓者。お互いを褒め合うスタイルなど、現在の漫才界にも多大な影響を与えた。"
  },
  "麒麟": {
    name: "麒麟", hometown: "大阪府/京都府", agency: "吉本興業", formedDate: "1999年", members: [{name: "川島明", birthplace: "京都府"},{name: "田村裕", birthplace: "大阪府"}],
    description: "M-1グランプリで実に5回もの決勝進出を誇る実力派。「麒麟です」の低音ボイスのツカミから始まり、川島の豊かな声とワードセンス、田村の独特の動きで初期M-1を牽引した。"
  },
  "スピードワゴン": {
    name: "スピードワゴン", hometown: "愛知県", agency: "ホリプロコム", formedDate: "1998年", members: [{name: "井戸田潤", birthplace: "愛知県"},{name: "小沢一敬", birthplace: "愛知県"}],
    description: "甘くクサいセリフを吐く小沢に対して、井戸田が「甘〜い！」と叫ぶ独自のスタイルで大ブレイク。M-1グランプリ2002、2003と連続して決勝に進出した。"
  },
  "ザブングル": {
    name: "ザブングル", hometown: "愛知県/大分県", agency: "ワタナベエンターテインメント", formedDate: "1999年(2021年解散)", members: [{name: "松尾陽介", birthplace: "愛知県"},{name: "加藤歩", birthplace: "大分県"}],
    description: "加藤の強烈な顔芸と「悔しいです！」「カッチカチやぞ！」などのパワーギャグ、そして松尾の冷静で的確なツッコミでM-1の舞台で爆笑をさらった。2021年に解散。"
  },
  "キングコング": {
    name: "キングコング", hometown: "兵庫県", agency: "吉本興業", formedDate: "1999年", members: [{name: "西野亮廣", birthplace: "兵庫県"},{name: "梶原雄太", birthplace: "兵庫県"}],
    description: "NSC在学中にNHK上方漫才コンテストで最優秀賞を受賞し、デビュー直後からM-1決勝に進出した天才肌。圧倒的なテンポと華のある漫才で一時代を築いた。"
  },
  "ダイアン": {
    name: "ダイアン", hometown: "滋賀県", agency: "吉本興業", formedDate: "2000年", members: [{name: "ユースケ", birthplace: "滋賀県"},{name: "津田篤宏", birthplace: "滋賀県"}],
    description: "ユースケのシュールで独特なトーンのボケと、津田の甲高く響き渡る全力のツッコミが中毒性を生む。「ゴイゴイスー」などのギャグでも知られ、M-1決勝でも実力を見せつけた。"
  },
  "トータルテンボス": {
    name: "トータルテンボス", hometown: "静岡県", agency: "吉本興業", formedDate: "1997年", members: [{name: "大村朋宏", birthplace: "静岡県"},{name: "藤田憲右", birthplace: "静岡県"}],
    description: "M-1グランプリ2007準優勝。藤田のアフロヘアと「ハンパねぇ！」のフレーズ、大村の緻密でイタズラ心あふれるボケが織りなす「渋谷系漫才」で不動の人気を獲得。"
  },
  "はりけ〜んず": {
    name: "はりけ〜んず", hometown: "大阪府", agency: "吉本興業", formedDate: "1990年", members: [{name: "前田登", birthplace: "大阪府"},{name: "新井義幸", birthplace: "大阪府"}],
    description: "M-1グランプリ2001決勝進出。長年M-1の前説を務めるなど大会の裏側を支えつつ、自らも決勝の舞台に立ったレジェンド。確かな技術とアニメ知識を活かした漫才が特徴。"
  },
  "DonDokoDon": {
    name: "DonDokoDon", hometown: "大阪府/神奈川県", agency: "吉本興業", formedDate: "1994年(事実上活動休止)", members: [{name: "山口智充", birthplace: "大阪府"},{name: "平畠啓史", birthplace: "大阪府"}],
    description: "山口（ぐっさん）の驚異的なモノマネ・歌唱力と、平畠の的確なツッコミで一世を風靡。M-1グランプリ2001にて決勝進出し、その圧倒的な器用さを見せつけた。"
  },
  "松本ハウス": {
    name: "松本ハウス", hometown: "東京都", agency: "（フリー）", formedDate: "1991年", members: [{name: "ハウス加賀谷", birthplace: "東京都"},{name: "松本キック", birthplace: "三重県"}],
    description: "「タモリのボキャブラ天国」などで絶大な人気を誇った伝説のコンビ。加賀谷の破天荒な暴走キャラクターと松本の鋭いツッコミの相性は抜群。"
  },
  "品川庄司": {
    name: "品川庄司", hometown: "東京都", agency: "吉本興業", formedDate: "1995年", members: [{name: "品川祐", birthplace: "東京都"},{name: "庄司智春", birthplace: "東京都"}],
    description: "若手時代から圧倒的な勢いとヤンキー的な反骨精神あふれるしゃべくり漫才で人気を博し、M-1グランプリ初期から決勝の舞台でもその実力を遺憾なく発揮した。"
  },
  "POISON GIRL BAND": {
    name: "POISON GIRL BAND", hometown: "宮城県/東京都", agency: "吉本興業", formedDate: "2000年", members: [{name: "阿部智則", birthplace: "宮城県"},{name: "吉田大吾", birthplace: "東京都"}],
    description: "M-1グランプリに3度決勝進出。阿部の淡々ボソボソとした狂気的なボケと、吉田の独自のワードセンスが入ったツッコミが、当時のM-1に異質の空気をもたらした。"
  },
  "U字工事": {
    name: "U字工事", hometown: "栃木県", agency: "アミー・パーク", formedDate: "2000年", members: [{name: "福田薫", birthplace: "栃木県"},{name: "益子卓郎", birthplace: "栃木県"}],
    description: "M-1グランプリ2008決勝進出。「ごめんねごめんね〜！」など栃木の強烈な訛り・地元ネタを全面に押し出したスタイルで、郷土愛あふれる漫才を確立した。"
  },
  "ナイツ": {
    name: "ナイツ", hometown: "千葉県/佐賀県", agency: "マセキ芸能社", formedDate: "2001年", members: [{name: "塙宣之", birthplace: "千葉県"},{name: "土屋伸之", birthplace: "東京都"}],
    description: "「ヤホーで調べました」などの言い間違い（ヤホー漫才）で大ブレイク。M-1グランプリには3年連続で決勝進出し、昭和の香り漂う正統派の浅草漫才を現代にアップデートした。"
  },
  "ハライチ": {
    name: "ハライチ", hometown: "埼玉県", agency: "ワタナベエンターテインメント", formedDate: "2005年", members: [{name: "岩井勇気", birthplace: "埼玉県"},{name: "澤部佑", birthplace: "埼玉県"}],
    description: "M-1グランプリ決勝に実に5度も進出。岩井の淡々としたボケから始まる「ノリボケ漫才」は、澤部が全力で乗りつつツッコむ이라는前代未聞のスタイルを築き上げた。"
  },
  "スリムクラブ": {
    name: "スリムクラブ", hometown: "沖縄県", agency: "吉本興業", formedDate: "2005年", members: [{name: "真栄田賢", birthplace: "沖縄県"},{name: "内間政成", birthplace: "沖縄県"}],
    description: "M-1グランプリ2010準優勝。極端にスローテンポで独特の「間」を使い、真栄田の特徴的な声と突拍子もないフレーズで会場を爆笑の渦に巻き込んだ沖縄の星。"
  },
  "カナリア": {
    name: "カナリア", hometown: "大阪府", agency: "吉本興業", formedDate: "2003年(2018年解散)", members: [{name: "安達健太郎", birthplace: "大阪府"},{name: "ボン溝黒", birthplace: "大阪府"}],
    description: "M-1グランプリ2010ファイナリスト。ボン溝黒の甲高い声と天然ボケ、安達の飄々としたツッコミが魅力。歌ネタなど多彩なアプローチで魅了した。2018年に解散。"
  },
  "馬鹿よ貴方は": {
    name: "馬鹿よ貴方は", hometown: "埼玉県/東京都", agency: "オフィス北野", formedDate: "2008年", members: [{name: "新道竜巳", birthplace: "千葉県"},{name: "平井“ファラオ”光", birthplace: "神奈川県"}],
    description: "M-1グランプリ2015決勝進出。ファラオの強烈なビジュアルと低音ボイスでの不気味なボケに、新道が独特のリズムでツッコむ、誰にも真似できないシュールな漫才。"
  },
  "メイプル超合金": {
    name: "メイプル超合金", hometown: "東京都", agency: "サンミュージック", formedDate: "2012年", members: [{name: "安藤なつ", birthplace: "東京都"},{name: "カズレーザー", birthplace: "埼玉県"}],
    description: "M-1グランプリ2015に彗星のごとく現れた異端児。カズレーザーの全身真っ赤な衣装とサイコパス的なボケに対し、巨漢の安藤なつが冷静に制するスタイルで視聴者に強烈なインパクトを残した。"
  },
  "ゆにばーす": {
    name: "ゆにばーす", hometown: "神奈川県/埼玉県", agency: "吉本興業", formedDate: "2013年", members: [{name: "はら", birthplace: "神奈川県"},{name: "川瀬名人", birthplace: "奈良県"}],
    description: "「M-1で優勝して引退する」と公言する川瀬名人の凄まじい熱量と、はらの強烈な見た目・ボケが見事に噛み合った男女コンビ。M-1決勝にも度々進出する実力派。"
  },
  "ミキ": {
    name: "ミキ", hometown: "京都府", agency: "吉本興業", formedDate: "2012年", members: [{name: "昴生", birthplace: "京都府"},{name: "亜生", birthplace: "京都府"}],
    description: "実の兄弟ならではの息の合った掛け合いと、昴生の全力の甲高い声のツッコミ、亜生の愛想の良いボケで、現代の上方しゃべくり漫才の王道を突き進む。「あーせい、こーせい」のフレーズで人気。"
  },
  "見取り図": {
    name: "見取り図", hometown: "大阪府/岡山県", agency: "吉本興業", formedDate: "2007年", members: [{name: "盛山晋太郎", birthplace: "大阪府"},{name: "リリー", birthplace: "岡山県"}],
    description: "M-1グランプリで3年連続ファイナリスト。盛山のイカツい風貌からの「あたおか」などの独自のワードセンスあふれるツッコミと、リリーの飄々としたボケが完璧なグルーヴを生む。"
  },
  "オズワルド": {
    name: "オズワルド", hometown: "千葉県/北海道", agency: "吉本興業", formedDate: "2014年", members: [{name: "畠中悠", birthplace: "北海道"},{name: "伊藤俊介", birthplace: "千葉県"}],
    description: "おぎやはぎを彷彿とさせるスローテンポな「新東京スタイル」から始まり、伊藤の哀愁漂うサスペンダー姿と喉を締めたようなエコーがかるツッコミでM-1決勝に何度も進出した実力派。"
  },
  "インディアンス": {
    name: "インディアンス", hometown: "兵庫県/大阪府", agency: "吉本興業", formedDate: "2010年", members: [{name: "田渕章裕", birthplace: "兵庫県"},{name: "きむ", birthplace: "大阪府"}],
    description: "田渕のすさまじい手数と勢いで繰り出されるボケの連続に、きむが翻弄されつつも的確にツッコむ「西のアンタッチャブル」とも称される超絶ハイテンポ漫才。"
  },
  "ランジャタイ": {
    name: "ランジャタイ", hometown: "富山県/鳥取県", agency: "グレープカンパニー", formedDate: "2007年", members: [{name: "伊藤幸司", birthplace: "鳥取県"},{name: "国崎和也", birthplace: "富山県"}],
    description: "国崎の常軌を逸したハイテンションで意味不明なイリュージョン的ボケに、伊藤が静かに相槌を打つという、唯一無二の狂気のスタイルでM-1決勝でも異彩を放った。"
  },
  "キュウ": {
    name: "キュウ", hometown: "愛知県", agency: "タイタン", formedDate: "2013年", members: [{name: "ぴろ", birthplace: "愛知県"},{name: "清水誠", birthplace: "愛知県"}],
    description: "スローテンポで進み、ぴろの独特な世界観の言葉遊びに対し、清水が「めっちゃええやん！」などと肯定しつつ異質な理屈を展開する、パズル的な美しさを持つ漫才。"
  },
  "くらげ": {
    name: "くらげ", hometown: "静岡県/福岡県", agency: "吉本興業", formedDate: "2018年", members: [{name: "杉昇", birthplace: "静岡県"},{name: "渡辺翔太", birthplace: "福岡県"}],
    description: "杉のヤンキー風の風貌から繰り出される「わかんねぇけど」というフレーズとともに羅列される膨大な知識と、渡辺の的確な訂正ツッコミが見事にハマる。"
  },
  "ヤーレンズ": {
    name: "ヤーレンズ", hometown: "大阪府/兵庫県", agency: "ケイダッシュステージ", formedDate: "2011年", members: [{name: "楢原真樹", birthplace: "大阪府"},{name: "出井隼之介", birthplace: "兵庫県"}],
    description: "M-1グランプリ2023準優勝。圧倒的な手数のボケと軽妙な喋り、そしてコーヒーを飲みながら話すような雑談スタイルのオシャレかつテクニカルな漫才が持ち味。"
  },
  "テツandトモ": {
    name: "テツandトモ", hometown: "滋賀県/山形県", agency: "ニチエンプロダクション", formedDate: "1998年", members: [{name: "テツ", birthplace: "滋賀県"},{name: "トモ", birthplace: "山形県"}],
    description: "M-1グランプリ2002決勝進出。赤と青のジャージ姿で「なんでだろう〜」と歌い踊るスタイルで国民的大ブレイクを果たしたコミックソング漫才の第一人者。"
  },
  "アジアン": {
    name: "アジアン", hometown: "兵庫県/大阪府", agency: "吉本興業", formedDate: "2002年(2021年解散)", members: [{name: "馬場園梓", birthplace: "大阪府"},{name: "隅田美保", birthplace: "兵庫県"}],
    description: "M-1グランプリ2005にて女性コンビとして初の決勝進出。隅田の顔面や非モテをいじる自虐ネタと馬場園の的確なツッコミで、当時の女性芸人の枠を超えた本格漫才を見せた。"
  },
  "南海キャンディーズ": {
    name: "南海キャンディーズ", hometown: "千葉県/京都府", agency: "吉本興業", formedDate: "2003年", members: [{name: "山里亮太", birthplace: "千葉県"},{name: "しずちゃん", birthplace: "京都府"}],
    description: "M-1グランプリ2004準優勝。しずちゃんの巨大な体躯と独特の空気感、山里の嫉妬や卑屈さを絡めたワードセンス抜群のツッコミで、結成わずか1年以内でM-1を席巻した。"
  },
  "タイムマシーン3号": {
    name: "タイムマシーン3号", hometown: "新潟県/群馬県", agency: "太田プロダクション", formedDate: "2000年", members: [{name: "山本浩司", birthplace: "新潟県"},{name: "関太", birthplace: "群馬県"}],
    description: "M-1グランプリ2005, 2015決勝進出、KOC2016決勝進出と二刀流の強豪。関のぽっちゃり体型と「太らせる」ネタなど、圧倒的な構成力と万人受けする明るい漫才が持ち味。"
  },
  "オリエンタルラジオ": {
    name: "オリエンタルラジオ", hometown: "長野県/大阪府", agency: "吉本興業", formedDate: "2003年", members: [{name: "中田敦彦", birthplace: "大阪府"},{name: "藤森慎吾", birthplace: "長野県"}],
    description: "「武勇伝」でデビュー直後に歴史的ブレイク。その後M-1グランプリでも準決勝の常連となり、歌ネタ「PERFECT HUMAN」など、お笑いの常識を次々と打ち破るコンビ。"
  },
  "モンスターエンジン": {
    name: "モンスターエンジン", hometown: "大阪府", agency: "吉本興業", formedDate: "2007年", members: [{name: "西森洋一", birthplace: "大阪府"},{name: "大林健二", birthplace: "大阪府"}],
    description: "M-1グランプリで実に3回決勝進出、キングオブコントも決勝進出。「神々の遊び」などの奇抜な設定から、緻密な実力派しゃべくり漫才まで幅広い才能を見せる。"
  },
  "バッファロー吾郎": {
    name: "バッファロー吾郎", hometown: "大阪府", agency: "吉本興業", formedDate: "1989年", members: [{name: "バッファロー吾郎A", birthplace: "兵庫県"},{name: "竹若元博", birthplace: "京都府"}],
    description: "初代キングオブコント（2008年）王者。「ダイナマイト関西」の主催など、後輩芸人から絶大なリスペクトを集めるコント界・大喜利界のレジェンド。"
  },
  "バナナマン": {
    name: "バナナマン", hometown: "神奈川県/埼玉県", agency: "ホリプロコム", formedDate: "1993年", members: [{name: "設楽統", birthplace: "埼玉県"},{name: "日村勇紀", birthplace: "神奈川県"}],
    description: "キングオブコント初代準優勝（2008年）。圧倒的な演技力と日常の狂気を切り取る緻密なドラマ性を持ったコントで、お笑い界のトップに君臨する天才コント師コンビ。"
  },
  "ロバート": {
    name: "ロバート", hometown: "福岡県/群馬県", agency: "吉本興業", formedDate: "1998年", members: [{name: "秋山竜次", birthplace: "福岡県"},{name: "馬場裕之", birthplace: "福岡県"},{name: "山本博", birthplace: "群馬県"}],
    description: "キングオブコント2011王者。秋山が生み出す強烈で変態的な憑依キャラクターと、山本・馬場の絶妙なトライアングルが、他にはない底抜けの爆笑コント空間を作り上げる。"
  },
  "天竺鼠": {
    name: "天竺鼠", hometown: "鹿児島県", agency: "吉本興業", formedDate: "2004年", members: [{name: "川原克己", birthplace: "鹿児島県"},{name: "瀬下豊", birthplace: "鹿児島県"}],
    description: "キングオブコント決勝常連。「奇天烈」という言葉が最も似合う規格外のボケ・川原と、気合と大きな声の瀬下による、見る者の予測を全て裏切るシュールで狂気的なネタが持ち味。"
  },
  "チョコレートプラネット": {
    name: "チョコレートプラネット", hometown: "京都府/神奈川県", agency: "吉本興業", formedDate: "2006年", members: [{name: "長田庄平", birthplace: "京都府"},{name: "松尾駿", birthplace: "神奈川県"}],
    description: "キングオブコント2008, 2014, 2018と決勝進出し、モノマネから小道具を使ったオリジナルコント「TT兄弟」や「ピタゴラ」など、常に時代の最先端を行く。"
  },
  "ピース": {
    name: "ピース", hometown: "茨城県/大阪府", agency: "吉本興業", formedDate: "2003年", members: [{name: "又吉直樹", birthplace: "大阪府"},{name: "綾部祐二", birthplace: "茨城県"}],
    description: "KOC2010準優勝。又吉の文学的で不気味な世界観と、綾部の熟女好きハイテンションキャラクターが融合。又吉は後に芥川賞を受賞し、お笑い界の枠を超えた存在に。"
  },
  "ライス": {
    name: "ライス", hometown: "東京都", agency: "吉本興業", formedDate: "2003年", members: [{name: "田所仁", birthplace: "東京都"},{name: "関町知弘", birthplace: "東京都"}],
    description: "キングオブコント2016王者。「〜してくれい！」の強烈なフレーズや、関町の独自のキャラクター、田所のサイコパス的な演出が光る実力派コント師。"
  },
  "ジャングルポケット": {
    name: "ジャングルポケット", hometown: "東京都/愛知県", agency: "吉本興業", formedDate: "2006年", members: [{name: "斉藤慎二", birthplace: "千葉県"},{name: "おたけ", birthplace: "東京都"},{name: "太田博久", birthplace: "愛知県"}],
    description: "キングオブコントで幾度となく決勝進出。斉藤の猛烈な顔芸と大声、太田の熱血演技、おたけのポンコツ具合が三位一体となり、熱量で押し切るパワフルなトリオコントを展開。"
  },
  "コロコロチキチキペッパーズ": {
    name: "コロコロチキチキペッパーズ", hometown: "京都府/大阪府", agency: "吉本興業", formedDate: "2012年", members: [{name: "ナダル", birthplace: "京都府"},{name: "西野創人", birthplace: "大阪府"}],
    description: "KOC2015王者。西野の緻密な演出に対して、ナダルの美声から放たれる強烈なクズキャラクターと「やっべぇぞ！」などのフレーズで、若手ながら見事に頂点へ登り詰めた。"
  },
  "どぶろっく": {
    name: "どぶろっく", hometown: "佐賀県", agency: "浅井企画", formedDate: "2004年", members: [{name: "森慎太郎", birthplace: "佐賀県"},{name: "江口直人", birthplace: "佐賀県"}],
    description: "KOC2019王者。圧倒的な歌唱力とギターの演奏に乗せて、「大きなイチモツ」などド直球の下ネタをミュージカルのごとく壮大に歌い上げる唯一無二の歌ネタ職人。"
  },

  "だいたひかる": {
    name: "だいたひかる", hometown: "埼玉県", agency: "吉本興業", formedDate: "1998年", members: [{name: "だいたひかる", birthplace: "埼玉県"}],
    description: "R-1ぐらんぷり初代王者（2002年）。「私だけでしょうか？」というフレーズとともに、日常のふとした疑問や毒を図工パネルと共に読み上げる独自の漫談スタイルを確立。"
  },
  "浅越ゴエ": {
    name: "浅越ゴエ", hometown: "岡山県", agency: "吉本興業", formedDate: "2001(ピンとして)", members: [{name: "浅越ゴエ", birthplace: "岡山県"}],
    description: "R-1ぐらんぷり2003（第2回）王者。「ザ・プラン9」のメンバーでもあり、架空のニュースキャスターに扮した知性的かつシュールなフリップ芸で頂点に立った。"
  },
  "ほっしゃん。": {
    name: "ほっしゃん。", hometown: "大阪府", agency: "吉本興業", formedDate: "1991年", members: [{name: "ほっしゃん。", birthplace: "大阪府"}],
    description: "R-1ぐらんぷり2005王者。チュパチャップス解散後にピンとなり、身の回りの奇妙な人物や出来事を臨場感たっぷりに語る、すべらない一人喋りの名手。"
  },
  "博多華丸": {
    name: "博多華丸", hometown: "福岡県", agency: "吉本興業", formedDate: "1990年(コンビとして)", members: [{name: "博多華丸", birthplace: "福岡県"}],
    description: "R-1ぐらんぷり2006王者。児玉清などの「細かすぎて伝わらないモノマネ」を競技用サイズに昇華し、抜群の愛嬌と圧倒的な似せ具合でR-1の頂点を極めた。"
  },
  "なだぎ武": {
    name: "なだぎ武", hometown: "大阪府", agency: "吉本興業", formedDate: "1989年", members: [{name: "なだぎ武", birthplace: "大阪府"}],
    description: "R-1ぐらんぷり2007, 2008の2連覇という歴史的偉業を達成。「ディラン・マッケイ」の圧倒的なキャラクター憑依で、R-1にキャラクターコントの時代を築いた。"
  },
  "中山功太": {
    name: "中山功太", hometown: "大阪府", agency: "吉本興業", formedDate: "2002年", members: [{name: "中山功太", birthplace: "大阪府"}],
    description: "R-1ぐらんぷり2009王者。「対義語」や「芸人紹介」など、研ぎ澄まされた毒と類まれなるワードセンスをフリップにぶつける、孤高のピン芸人。"
  },
  "あべこうじ": {
    name: "あべこうじ", hometown: "神奈川県", agency: "吉本興業", formedDate: "1998年", members: [{name: "あべこうじ", birthplace: "神奈川県"}],
    description: "R-1ぐらんぷり2010王者。数々の決勝進出を経て、ウザいトーンで軽快に喋り続ける「ウザ漫談」という唯一無二の立ち話スタイルを磨き上げ、ついに栄冠を手にした。"
  },
  "佐久間一行": {
    name: "佐久間一行", hometown: "茨城県", agency: "吉本興業", formedDate: "1996年", members: [{name: "佐久間一行", birthplace: "茨城県"}],
    description: "R-1ぐらんぷり2011王者。一切の毒を持たない平和でハッピーな世界観と、「井戸」に代表される精巧なセット・歌ネタで、全国の視聴者を笑顔にした。"
  },
  "COWCOW多田": {
    name: "COWCOW多田", hometown: "大阪府", agency: "吉本興業", formedDate: "1993年(コンビとして)", members: [{name: "多田健二", birthplace: "大阪府"}],
    description: "R-1ぐらんぷり2012王者（多田健二）。伊勢丹柄のスーツでおなじみ。ギャグの連続やフリップを駆使し、熟練の漫才師ならではの圧倒的な「間」とリズムで優勝をさらった。"
  },
  "三浦マイルド": {
    name: "三浦マイルド", hometown: "広島県", agency: "吉本興業", formedDate: "2000年", members: [{name: "三浦マイルド", birthplace: "広島県"}],
    description: "R-1ぐらんぷり2013王者。無精髭に薄毛という剥き出しのルックスから放たれる、「マイルドフラッシュ！」や交通警備員などの哀愁漂う絶叫コントで頂点を掴んだ。"
  },
  "やまもとまさみ": {
    name: "やまもとまさみ", hometown: "愛知県", agency: "佐藤企画", formedDate: "1998年", members: [{name: "やまもとまさみ", birthplace: "愛知県"}],
    description: "R-1ぐらんぷり2014王者。「取り調べ」などの極めてシンプルな設定の一人コントに、類まれなる構成力と熱量ある演技を注ぎ込み、見事王者へと輝いた。"
  },
  "じゅんいちダビッドソン": {
    name: "じゅんいちダビッドソン", hometown: "兵庫県", agency: "アミー・パーク", formedDate: "1997年", members: [{name: "じゅんいちダビッドソン", birthplace: "兵庫県"}],
    description: "R-1ぐらんぷり2015王者。本田圭佑の容姿モノマネにとどまらず、「無回転謎かけ」など高度なお笑いの技術を織り交ぜたネタでサッカーファン以外にも大爆笑を起こした。"
  },
  "ハリウッドザコシショウ": {
    name: "ハリウッドザコシショウ", hometown: "静岡県", agency: "ソニー・ミュージックアーティスツ", formedDate: "1992年", members: [{name: "ハリウッドザコシショウ", birthplace: "静岡県"}],
    description: "R-1ぐらんぷり2016王者。「誇張しすぎたモノマネ」で、理屈や常識を全てなぎ倒す破壊力満点の暴走芸を見せつけ、地下芸人の星から一気に全国区へと駆け上がった。"
  },
  "アキラ100%": {
    name: "アキラ100%", hometown: "埼玉県", agency: "ソニー・ミュージックアーティスツ", formedDate: "2005年", members: [{name: "大橋彰", birthplace: "埼玉県"}],
    description: "R-1ぐらんぷり2017王者。全裸にお盆一枚という極限の緊張感の中で、スタイリッシュな音楽に乗せてお盆を裏返す「絶対に見えない」超絶テクニックで日本中を席巻した。"
  },
  "濱田祐太郎": {
    name: "濱田祐太郎", hometown: "兵庫県", agency: "吉本興業", formedDate: "2013年", members: [{name: "濱田祐太郎", birthplace: "兵庫県"}],
    description: "R-1ぐらんぷり2018王者。自身が視覚障害者であることを巧みに武器に変え、盲目ならではの「あるある」や周囲の反応を軽快な語り口で漫談にする至高のしゃべくり芸人。"
  },
  "お見送り芸人しんいち": {
    name: "お見送り芸人しんいち", hometown: "大阪府", agency: "グレープカンパニー", formedDate: "2009年", members: [{name: "上野晋一", birthplace: "大阪府"}],
    description: "R-1グランプリ2022王者。さわやかなギターの弾き語りに乗せて、日常の些細な「好き」を歌うと見せかけ、猛烈な偏見と強烈な毒を吐き散らすギター漫談の革命児。"
  },
  "田津原理音": {
    name: "田津原理音", hometown: "奈良県", agency: "吉本興業", formedDate: "2013年", members: [{name: "田津原理音", birthplace: "奈良県"}],
    description: "R-1グランプリ2023王者。自身が撮影した写真の「あるある」や「違和感」を、箱を開けながらトレーディングカードの開封動画風にめくっていくスタイリッシュなフリップ芸。"
  },
  "ルシファー吉岡": {
    name: "ルシファー吉岡", hometown: "島根県", agency: "マセキ芸能社", formedDate: "2008年", members: [{name: "吉岡大輔", birthplace: "島根県"}],
    description: "R-1グランプリ史上最も多くの決勝進出を果たした「ミスターR-1」。卓越した人間観察とエロや哀愁を絡めた緻密な一人芝居コントで他の追随を許さない実力を持つ。"
  },
  "ZAZY": {
    name: "ZAZY", hometown: "大阪府", agency: "吉本興業", formedDate: "2011年", members: [{name: "赤井俊之", birthplace: "大阪府"}],
    description: "R-1グランプリ準優勝。金髪にピンクのホットパンツ、厚底ブーツという奇抜な見た目で、大量のフリップとデジタル機材を駆使し「非日常」に観客を連れ去るサイバーフリップ芸。"
  },
};

// 足りない出場者のプロフィールを履歴データから自動生成して補完する
import { m1HistoryData } from "./m1/history";
import { kocHistoryData } from "./koc/history";
import { r1HistoryData } from "./r1/history";

const allNames = new Set<string>();
[m1HistoryData, kocHistoryData, r1HistoryData].forEach((data: any[]) => {
  data.forEach((year: any) => {
    const results = year.results || year.finalists || [];
    results.forEach((r: any) => allNames.add(r.name));
  });
});

// 追加のプロフィール情報（簡易辞書）
const fallbackDict: Record<string, Partial<Contestant>> = {
  "2700": { hometown: "山口県/大阪府", agency: "吉本興業", formedDate: "2008年", members: [{name: "八十島", birthplace: "山口県"}, {name: "ツネ", birthplace: "大阪府"}], description: "「右ひじ左ひじ交互に見て」などの社会現象レベルのネタを生み出し、KOC準優勝にも輝いたリズムネタのパイオニア。" },
  "巨匠": { hometown: "福井県/東京都", agency: "プロダクション人力舎", formedDate: "2008年(解散)", members: [{name: "岡野陽一", birthplace: "福井県"}, {name: "本田和之", birthplace: "東京都"}], description: "KOC2014, 2015ファイナリスト。独特のクズキャラと狂気を帯びた岡野と、堅物な本田のコントラストが印象的な元コンビ。" },
  "ゾフィー": { hometown: "神奈川県/青森県", agency: "グレープカンパニー", formedDate: "2014年(解散)", members: [{name: "上田航平", birthplace: "神奈川県"}, {name: "サイトウナオキ", birthplace: "青森県"}], description: "KOC2017, 2019ファイナリスト。ふくちゃんという腹話術人形のネタなど、ブラックな要素を含んだ精巧なコントで知られた元コンビ。" },
  "陣内智則": { hometown: "兵庫県加古川市", agency: "吉本興業", formedDate: "1992年", members: [{name: "陣内智則", birthplace: "兵庫県加古川市"}], description: "映像や音声を使ったツッコミ一人コントを完成させた天才コント師。R-1ぐらんぷりやエンタの神様で大ブレイクし、ピンコントの可能性を大きく広げた。" },
  "ニューヨーク": { hometown: "山梨県/三重県", agency: "吉本興業", formedDate: "2010年", members: [{name: "嶋佐和也", birthplace: "山梨県富士吉田市"}, {name: "屋敷裕政", birthplace: "三重県熊野市"}], description: "M-1グランプリ、キングオブコント両方で決勝に進出する実力派。偏見や皮肉を交えた絶妙な人間観察コントと漫才で、現代のお笑い界を牽引するコンビ。" },
  "からし蓮根": { hometown: "熊本県", agency: "吉本興業", formedDate: "2013年", members: [{name: "伊織", birthplace: "熊本県熊本市"}, {name: "杉本青空", birthplace: "熊本県小国町"}], description: "長身の伊織による独特なボケと、小柄な青空の熊本弁でのキレのあるツッコミが特徴の本格派しゃべくり漫才師。M-1グランプリ2019ファイナリスト。" },
  "吉住": { hometown: "福岡県北九州市", agency: "プロダクション人力舎", formedDate: "2015年", members: [{name: "吉住", birthplace: "福岡県北九州市"}], description: "THE W 2020王者。独自の視点から描かれた女性の哀愁や狂気を、高い演技力で一人コントに昇華させる天才コント師。" },
  "ラバーガール": { hometown: "静岡県/青森県", agency: "プロダクション人力舎", formedDate: "2001年", members: [{name: "飛永翼", birthplace: "静岡県"}, {name: "大水洋介", birthplace: "青森県"}], description: "KOC決勝常連。大水の飄々としたボケと飛永の冷静なツッコミによる、独特なテンポの脱力系コントでTikTok等のSNSでも大ブレイク。" },
  "ハリセンボン": { hometown: "東京都", agency: "GATE", formedDate: "2003年", members: [{name: "近藤春菜", birthplace: "東京都狛江市"}, {name: "箕輪はるか", birthplace: "東京都府中市"}], description: "「角野卓造じゃねーよ！」などの見事な返しで大人気。M-1グランプリ2007, 2009で決勝に進出し、女性コンビとして群を抜く漫才の実力を見せつけた。" },
  "アルコ＆ピース": { hometown: "群馬県/神奈川県", agency: "太田プロダクション", formedDate: "2006年", members: [{name: "平子祐希", birthplace: "福島県いわき市"}, {name: "酒井健太", birthplace: "神奈川県川崎市"}], description: "THE MANZAIやキングオブコントで圧倒的な爪痕を残す。平子の演じる独特なキャラクター「意識高い系IT社長」など、イリュージョンにも似た独自のコント漫才を展開。" },
  "バカリズム": { hometown: "福岡県田川市", agency: "マセキ芸能社", formedDate: "1995年(コンビ結成)", members: [{name: "升野英知", birthplace: "福岡県田川市"}], description: "R-1ぐらんぷりで何度も決勝に進出した、フリップ芸や一人コントの最高峰。「トツギーノ」や「都道府県の持ちかた」など、卓越した発想力と画力で唯一無二の世界を創り出す。" },
  "アンガールズ": { hometown: "広島県", agency: "ワタナベエンターテインメント", formedDate: "2000年", members: [{name: "田中卓志", birthplace: "広島県甲奴郡"}, {name: "山根良顕", birthplace: "広島県広島市"}], description: "「ジャンガジャンガ」で大ブレイク。独自のキモカワキャラクターと、長身細身の体型を生かした見事な構成のコントでKOC決勝にも名を連ねる名コント師。" },
  "トム・ブラウン": { hometown: "北海道札幌市", agency: "ケイダッシュステージ", formedDate: "2009年", members: [{name: "布川ひろき", birthplace: "北海道札幌市"}, {name: "みちお", birthplace: "北海道札幌市"}], description: "「合体！」からのカオスすぎる狂気の展開でM-1グランプリ2018決勝に嵐を巻き起こした。みちおのサイコパスみと布川の長い髪が織りなす唯一無二のパワー漫才。" },
  "ロッチ": { hometown: "大阪府/香川県", agency: "ワタナベエンターテインメント", formedDate: "2005年", members: [{name: "中岡創一", birthplace: "愛知県/奈良県"}, {name: "コカドケンタロウ", birthplace: "大阪府大阪市"}], description: "キングオブコントで複数回決勝進出経験を持つコント職人。日常のちょっとしたズレや勘違いから生まれる、クスッと笑えてどこか哀愁のあるコントが持ち味。" },
  "だーりんず": { hometown: "静岡県/熊本県", agency: "ソニー・ミュージックアーティスツ", formedDate: "2011年", members: [{name: "松本りんす", birthplace: "兵庫県"}, {name: "小田祐一郎", birthplace: "鹿児島県"}], description: "KOC決勝に複数回進出。松本のハゲやカツラを活かした自虐的なネタと、おじさんのリアルな哀愁を帯びたコントで玄人から高く評価される。" },
  "ネゴシックス": { hometown: "島根県安来市", agency: "吉本興業", formedDate: "2000年", members: [{name: "ネゴシックス", birthplace: "島根県安来市"}], description: "R-1ぐらんぷり決勝進出経験を持つ、独特なイラストのフリップ芸と島根弁のツッコミで人気を博したピン芸人。" },
  "レイザーラモンRG": { hometown: "愛媛県八幡浜市", agency: "吉本興業", formedDate: "1997年(コンビとして)", members: [{name: "レイザーラモンRG", birthplace: "愛媛県八幡浜市"}], description: "「あるある言いたい」でお馴染みの圧倒的歌唱力と、数々のキャラクター憑依でバラエティ番組を常に席巻する唯一無二のエンターテイナー。" },
  "今井らいぱち": { hometown: "滋賀県大津市", agency: "吉本興業", formedDate: "2020年(ピンとして)", members: [{name: "今井らいぱち", birthplace: "滋賀県大津市"}], description: "「ヒガシ逢ウサカ」解散後にピンで活動。自慢の体格と表現力を生かし、熱量の高い一人芝居やギャグを展開してR-1等の舞台で活躍中。" },
  "井上マー": { hometown: "栃木県宇都宮市", agency: "吉本興業", formedDate: "1999年", members: [{name: "井上マー", birthplace: "栃木県宇都宮市"}], description: "R-1ぐらんぷり2005ファイナリスト。尾崎豊のモノマネから始まり、ギターを抱えての哀愁漂う一人語りで爆笑をさらう。" },
  "カベポスター": { hometown: "三重県/大阪府", agency: "吉本興業", formedDate: "2014年", members: [{name: "永見大吾", birthplace: "三重県名張市"}, {name: "浜田順平", birthplace: "大阪府大阪市"}], description: "M-1グランプリファイナリスト。永見の唯一無二の視点から放たれるフレーズと、浜田の論理的でお手本のようなツッコミで、極めて高品質なしゃべくり漫才を展開する。" },
  "ヒロ・オクムラ": { hometown: "奈良県桜井市", agency: "ソニー・ミュージックアーティスツ", formedDate: "2014年", members: [{name: "ヒロ・オクムラ", birthplace: "奈良県桜井市"}], description: "R-1グランプリに出場し徐々に頭角を現している新星。スマートな語り口と独自の視点が光る一人芝居を展開する。" },
  "こがけん": { hometown: "福岡県久留米市", agency: "吉本興業", formedDate: "2001年", members: [{name: "こがけん", birthplace: "福岡県久留米市"}], description: "R-1グランプリ2019ファイナリスト。洋楽の歌まねや映画のパロディなど、圧倒的な歌唱力と表現力で魅せるピン芸人であり、「おいでやすこが」としても準優勝。" },
  "長州小力": { hometown: "東京都杉並区", agency: "西口エンタテインメント", formedDate: "1999年", members: [{name: "長州小力", birthplace: "東京都杉並区"}], description: "長州力のモノマネと「キレてないですよ」のフレーズで大ブレイク。ぽっちゃり体型で踊るパラパラで一世を風靡した伝説のキャラクター芸人。" },
  "ザ・マミィ": { hometown: "東京都/神奈川県", agency: "プロダクション人力舎", formedDate: "2018年", members: [{name: "林田洋平", birthplace: "長崎県長崎市"}, {name: "酒井貴士", birthplace: "東京都目黒区"}], description: "KOC2021準優勝。借金やギャンブル好きのクズキャラ・酒井と、インテリで計算高い林田のギャップを見事に活かした、人間味あふれるコントが持ち味。" },
  "マツモトクラブ": { hometown: "東京都調布市", agency: "ソニー・ミュージックアーティスツ", formedDate: "2011年", members: [{name: "マツモトクラブ", birthplace: "東京都調布市"}], description: "R-1グランプリの決勝常連。あらかじめ録音された複数の音声トラックと絶妙な掛け合いを繰り広げる、哀愁漂う一人芝居の職人。" },
  "大谷健太": { hometown: "福岡県", agency: "吉本興業", formedDate: "2005年(デビュー)", members: [{name: "大谷健太", birthplace: "福岡県"}], description: "R-1グランプリ2020ファイナリスト。早口言葉と絶妙に下手な自作イラストを組み合わせた、唯一無二の早口言葉フリップ芸で爆笑をもたらす。" },
  "エレキコミック": { hometown: "千葉県/静岡県", agency: "トゥインクル・コーポレーション", formedDate: "1997年", members: [{name: "やついいちろう", birthplace: "三重県四日市市"}, {name: "今立進", birthplace: "東京都"}], description: "KOC第3回決勝進出。やついのハイテンションで強烈なキャラクターと、今立の大声ツッコミが折り重なる、演劇的でパワフルなコント。" },
  "ジェラードン": { hometown: "愛知県/宮崎県", agency: "吉本興業", formedDate: "2008年", members: [{name: "アタック西本", birthplace: "愛知県名古屋市"}, {name: "海野裕二", birthplace: "愛知県名古屋市"}, {name: "かみちぃ", birthplace: "宮崎県高鍋町"}], description: "KOC2021ファイナリスト。西本の角刈りや強烈な風貌、かみちぃのキレキレの動きなど、一目見ただけで爆笑を誘う「絵力」最強のコントスペシャリスト。" },
  "バッテリィズ": { hometown: "大阪府", agency: "吉本興業", formedDate: "2017年", members: [{name: "エース", birthplace: "大阪府"}, {name: "寺家", birthplace: "大阪府"}], description: "M-1グランプリ2023にて敗者復活戦で輝きを放ち、野球をモチーフにした設定などで熱気のある漫才を見せる注目の若手コンビ。" },
  "大輪教授": { hometown: "埼玉県久喜市", agency: "ケイダッシュステージ", formedDate: "2006年", members: [{name: "大輪教授", birthplace: "埼玉県久喜市"}], description: "R-1ぐらんぷり2007ファイナリスト。「お笑いを数学的に分析する」という設定のもと、白衣姿でフリップ（黒板）を用いて定理を講義する知的な一人芸。" },
  "レインボー": { hometown: "埼玉県/千葉県", agency: "吉本興業", formedDate: "2016年", members: [{name: "ジャンボたかお", birthplace: "千葉県千葉市"}, {name: "池田直人", birthplace: "大阪府吹田市"}], description: "「きれいだ…」のフレーズでブレイク。池田の見事な女装とジャンボたかおの人間味溢れる演技による、恋愛リアリティショーのような生々しい男女コントでYouTubeでも大人気。" },
  "河邑ミク": { hometown: "大阪府", agency: "松竹芸能", formedDate: "2015年", members: [{name: "河邑ミク", birthplace: "大阪府"}], description: "R-1ぐらんぷりで2年連続決勝進出した経験を持つ実力派ピン芸人。あざとい女性のリアルを演じる一人芝居が得意。" },
  "ケンドーコバヤシ": { hometown: "大阪府大阪市", agency: "吉本興業", formedDate: "1992年", members: [{name: "ケンドーコバヤシ", birthplace: "大阪府大阪市"}], description: "圧倒的なええ声と渋い風貌から繰り出される、下ネタとサブカルチャーを織り交ぜた唯一無二の漫談・トーク。アメトーーク!等のひな壇でも無類の強さを誇る。" },
  "ゆりやんレトリィバァ": { hometown: "奈良県吉野郡", agency: "吉本興業", formedDate: "2013年", members: [{name: "ゆりやんレトリィバァ", birthplace: "奈良県吉野郡"}], description: "R-1グランプリ2021王者、THE W初代女王など数々の栄冠を手にした天才コント師。英語やピアノを駆使した唯一無二の世界観と、驚異的な度胸で国内外で活躍する。" },
  "キングオブコメディ": { hometown: "東京都", agency: "プロダクション人力舎", formedDate: "2000年(2015年解散)", members: [{name: "今野浩喜", birthplace: "埼玉県新座市"}, {name: "高橋健一", birthplace: "東京都大田区"}], description: "キングオブコント2010王者。今野の独特な風貌と飄々としたボケに対する秀逸なツッコミで人気を博したが、2015年に惜しまれつつ解散。" },
  "ダイノジ": { hometown: "大分県", agency: "吉本興業", formedDate: "1994年", members: [{name: "大地洋輔", birthplace: "大分県佐伯市"}, {name: "大谷ノブ彦", birthplace: "大分県佐伯市"}], description: "M-1グランプリ2002ファイナリスト。大谷のサブカル知識と大地のエアギターなど、漫才のみならずDJイベント等幅広いエンターテインメントを展開。" },
  "NON STYLE石田": { hometown: "大阪府大阪市", agency: "吉本興業", formedDate: "2000年", members: [{name: "石田明", birthplace: "大阪府大阪市"}], description: "白い衣装でおなじみの漫才師だが、全身を使った極限のピンネタでR-1等でも活躍。漫才における計算され尽くしたボケの技術の高さは随一。" },
  "霜降り明星 粗品": { hometown: "大阪府大阪市", agency: "吉本興業", formedDate: "2013年(コンビ)", members: [{name: "粗品", birthplace: "大阪府大阪市"}], description: "R-1ぐらんぷり2019王者。フリップ芸の常識を覆す怒涛のテンポとポーズ付きの単語ツッコミで、若手ながら圧倒的な実力を見せつけた天才。" },
  "ラブレターズ": { hometown: "静岡県/埼玉県", agency: "ASH&Dコーポレーション", formedDate: "2009年", members: [{name: "塚本直毅", birthplace: "静岡県浜松市"}, {name: "溜口佑太朗", birthplace: "埼玉県富士見市"}], description: "KOC2024王者。長年キングオブコントの決勝・準決勝で奮闘し続けたコント職人。日常の哀愁や狂気を切り取った演劇的なコントが持ち味。" },
  "にゃんこスター": { hometown: "埼玉県/兵庫県", agency: "ワタナベエンターテインメント", formedDate: "2017年", members: [{name: "スーパー3助", birthplace: "長崎県佐世保市"}, {name: "アンゴラ村長", birthplace: "埼玉県本庄市"}], description: "キングオブコント2017において、結成わずか数ヶ月で準優勝。リズム縄跳びという斬新すぎるコントで瞬く間に日本中に旋風を巻き起こした。" },
  "わらふぢなるお": { hometown: "東京都", agency: "グレープカンパニー", formedDate: "2010年", members: [{name: "口笛なるお", birthplace: "埼玉県"}, {name: "ふぉ〜ゆ〜ふぢわら", birthplace: "東京都"}], description: "KOCで3年連続決勝進出。「空気を読まない店員」などの日常に潜むイライラを増幅させ、見事なテンポ感で爆笑に変えるコント職人。" },
  "パーパー": { hometown: "愛知県/群馬県", agency: "マセキ芸能社", formedDate: "2014年", members: [{name: "ほしのディスコ", birthplace: "群馬県沼田市"}, {name: "あいなぷぅ", birthplace: "愛知県一宮市"}], description: "KOC2017ファイナリスト。あいなぷぅの理不尽で冷酷な態度に対し、ほしのディスコが甲高い声で泣き叫ぶという独自の男女コントのスタイルを確立。" },
  "ヒロシ": { hometown: "熊本県荒尾市", agency: "ヒロシ・コーポレーション", formedDate: "2002年(ピン芸人として)", members: [{name: "ヒロシ", birthplace: "熊本県荒尾市"}], description: "「ヒロシです…」の哀愁漂う自虐ネタで大ブレイク。その後はソロキャンプ動画の先駆者としてYouTuberとしても絶大な人気とカリスマ性を誇る孤高のピン芸人。" },
  "いとうあさこ": { hometown: "東京都渋谷区", agency: "マセキ芸能社", formedDate: "1997年", members: [{name: "いとうあさこ", birthplace: "東京都渋谷区"}], description: "R-1ぐらんぷり2010ファイナリスト。南ちゃんなどを模したレオタード姿での自虐ネタから、数多くのバラエティ番組を支える圧倒的なタレント力まで、広く愛される実力派。" },
  "マヂカルラブリー野田クリスタル": { hometown: "神奈川県横浜市", agency: "吉本興業", formedDate: "2007年(コンビ)", members: [{name: "野田クリスタル", birthplace: "神奈川県横浜市"}], description: "R-1ぐらんぷり2020王者であり、自作ゲーム「野田ゲー」をプレイしながら解説・ツッコミを入れる狂気と天才が融合したスタイル。" },
  "寺田寛明": { hometown: "埼玉県草加市", agency: "マセキ芸能社", formedDate: "2013年", members: [{name: "寺田寛明", birthplace: "埼玉県草加市"}], description: "R-1グランプリの決勝に何度も進む実力派。大喜利の強さを活かし、フリップやスライドを用いた独特な視点のプレゼン風ネタで会場を沸かせる。" },
  "九条ジョー": { hometown: "滋賀県長浜市", agency: "吉本興業", formedDate: "2015年", members: [{name: "九条ジョー", birthplace: "滋賀県長浜市"}], description: "「コウテイ」解散後、ピンとして活動。独特のテンポとポーズ、「ズィーヤ」という決め言葉を放ち、独自の世界観を築き上げている。" },
  "相席スタート": { hometown: "千葉県/神奈川県", agency: "吉本興業", formedDate: "2013年", members: [{name: "山﨑ケイ", birthplace: "千葉県柏市"}, {name: "山添寛", birthplace: "京都府京都市"}], description: "M-1グランプリ2016ファイナリスト。「ちょうどいいブス」を自称するケイと、クズキャラでありながら知的な山添が織りなす、リアルな男女の駆け引き漫才。" },
  "うるとらブギーズ": { hometown: "静岡県/愛知県", agency: "吉本興業", formedDate: "2009年", members: [{name: "佐々木崇博", birthplace: "静岡県浜松市"}, {name: "八木崇", birthplace: "熊本県熊本市"}], description: "KOCに3年連続で決勝進出した実力派コント師。演技力に定評があり、独特のシチュエーションから生まれる不条理な出来事を巧みに笑いへと変える。" },
  "東京ダイナマイト": { hometown: "東京都/福島県", agency: "吉本興業", formedDate: "2001年", members: [{name: "松田大輔", birthplace: "岐阜県"}, {name: "ハチミツ二郎", birthplace: "岡山県"}], description: "M-1グランプリ2004ファイナリスト。ハチミツのプロレス的マイクアピールのようなボケと松田のシュールなツッコミによる、武骨でアウトローな空気をまとう唯一無二の漫才。" },
  "滝音": { hometown: "京都府/山口県", agency: "吉本興業", formedDate: "2016年", members: [{name: "さすけ", birthplace: "大分県大分市"}, {name: "秋定遼太郎", birthplace: "兵庫県神戸市"}], description: "KOC2020ファイナリスト。「ベイビーワード」と呼ばれるさすけの造語（例：あたおか等）をふんだんに使った独特の言い回しと、秋定の無気力なボケが絶妙に絡み合う。" },
  "かもめんたる": { hometown: "千葉県/広島県", agency: "サンミュージックプロダクション", formedDate: "2007年", members: [{name: "岩崎う大", birthplace: "東京都西東京市"}, {name: "槙尾ユウスケ", birthplace: "広島県安芸郡"}], description: "キングオブコント2013王者。う大が描く人間のドロドロとした狂気と、女装もこなす槙尾のサイコパス感が絡み合う、文学的でディープなコントワールド。" },
  "ギャロップ": { hometown: "大阪府/兵庫県", agency: "吉本興業", formedDate: "2003年", members: [{name: "林健", birthplace: "大阪府大阪市"}, {name: "毛利大亮", birthplace: "京都府京都市"}], description: "THE SECOND 初代王者（2023年）。林のハゲをいじりつつも、それを上回る熟練のしゃべくりと高度な駆け引きで魅せる、関西漫才界が誇る至高のベテラン。" },
  "すゑひろがりず": { hometown: "大阪府", agency: "吉本興業", formedDate: "2011年", members: [{name: "南條庄助", birthplace: "大阪府堺市"}, {name: "三島達矢", birthplace: "大阪府大阪市"}], description: "M-1グランプリ2019ファイナリスト。狂言風の衣装と小鼓を用い、現代語を古語に変換する格式高い「伝統芸能風漫才・コント」で唯一無二の地位を築いた。" },
  "かが屋": { hometown: "岡山県/広島県", agency: "マセキ芸能社", formedDate: "2015年", members: [{name: "加賀翔", birthplace: "岡山県備前市"}, {name: "賀屋壮也", birthplace: "広島県呉市"}], description: "KOC決勝常連。日常のふとした感情の機微や気まずさを、過度なセリフやボケなしに演技力と表情だけで表現する、シチュエーションコントの若き天才コンビ。" },
  "真輝志": { hometown: "大阪府門真市", agency: "吉本興業", formedDate: "2014年", members: [{name: "真輝志", birthplace: "大阪府門真市"}], description: "R-1グランプリ2024ファイナリスト。複雑な設定や巧みな構成の一人芝居に定評があり、若手ながら本格的な演技力を持つコント師。" },
  "しんや": { hometown: "大阪府大阪市生野区", agency: "吉本興業", formedDate: "2017年", members: [{name: "しんや", birthplace: "大阪府大阪市生野区"}], description: "R-1グランプリファイナリスト。元ラガーマンの経歴を活かした、ラグビーあるあるを全力でやり切る体育会系のエネルギッシュな芸風が持ち味。" },
  "インパルス": { hometown: "神奈川県/埼玉県", agency: "吉本興業", formedDate: "1998年", members: [{name: "板倉俊之", birthplace: "埼玉県志木市"}, {name: "堤下敦", birthplace: "神奈川県横浜市"}], description: "はねるのトびら等で一時代を築いた実力派コント師。板倉の陰湿でエッジの効いたボケと、堤下の圧倒的な声量によるド迫力ツッコミはコント界の伝説。" },
  "友田オレ": { hometown: "福岡県", agency: "GATE", formedDate: "2020年", members: [{name: "友田オレ", birthplace: "福岡県"}], description: "現役大学生芸人として名を馳せ、心地よいリズムネタから巧みな構成の一人芝居まで、若き才能を存分に発揮する期待のエンターテイナー。" },
  "小島よしお": { hometown: "沖縄県島尻郡", agency: "サンミュージックプロダクション", formedDate: "2007年", members: [{name: "小島よしお", birthplace: "沖縄県島尻郡"}], description: "海パン一丁で「そんなの関係ねぇ！」「おっぱっぴー」などの強烈なギャグを連発し国民的ブレイク。現在は子供向けのお笑いライブでカリスマ的人気を誇る。" },
  "りあるキッズ": { hometown: "大阪府", agency: "吉本興業", formedDate: "1996年(2014年解散)", members: [{name: "安田善紀", birthplace: "奈良県"}, {name: "長田融季", birthplace: "大阪府"}], description: "M-1グランプリ2003ファイナリスト。史上最年少でNSCに入学し、小学生時代からダウンタウンを彷彿とさせる早熟のしゃべくり漫才で注目を集めた。" },
  "厚切りジェイソン": { hometown: "ミシガン州", agency: "ワタナベエンターテインメント", formedDate: "2014年", members: [{name: "厚切りジェイソン", birthplace: "ミシガン州"}], description: "R-1ぐらんぷり2015ファイナリスト。IT企業の役員でありながら、「Why Japanese people!?」と叫び漢字の理不尽さを突くスタイルで瞬く間にスターダムを駆け上がった。" },
  "ファイヤーサンダー": { hometown: "大阪府", agency: "ワタナベエンターテインメント", formedDate: "2014年", members: [{name: "こてつ", birthplace: "大阪府茨木市"}, {name: "﨑山祐", birthplace: "和歌山県日高郡"}], description: "ABCお笑いグランプリ優勝、KOCファイナリスト経験を持つ実力派。崎山が生み出す綿密かつ秀逸な発想の台本に、こてつの独特なキャラクターが息を吹き込む。" },
  "シティホテル3号室": { hometown: "北海道/東京都", agency: "タイタン", formedDate: "2011年", members: [{name: "押田玲穂", birthplace: "神奈川県"}, {name: "亮太", birthplace: "北海道"}], description: "歌ネタ王決定戦ファイナリスト。独特の間とテンポで進むミュージカル調のコントや、哀愁のある一人芝居のような設定で観るものを引き込む。" },
  "サツマカワRPG": { hometown: "山梨県甲府市", agency: "ケイダッシュステージ", formedDate: "2011年", members: [{name: "サツマカワRPG", birthplace: "山梨県甲府市"}], description: "R-1グランプリ決勝常連。ショートコントの連発から複雑なストーリーまでを、圧倒的な熱量と演技力で一本の作品にまとめ上げる才能の塊。" },
  "ザ・プラン9": { hometown: "大阪府", agency: "吉本興業", formedDate: "2001年", members: [{name: "お〜い！久馬", birthplace: "大阪府"}, {name: "浅越ゴエ", birthplace: "岡山県"}, {name: "ヤナギブソン", birthplace: "大阪府"}], description: "M-1・KOCでともに決勝進出経験を持つ実力派グループ。大人数ならではの複雑で厚みのあるシチュエーションコントや群像劇を展開する。" },
  "土肥ポン太": { hometown: "大阪府大阪市", agency: "吉本興業", formedDate: "1993年", members: [{name: "土肥ポン太", birthplace: "大阪府大阪市"}], description: "R-1ぐらんぷりで何度も決勝進出。八百屋を経営しながら等身大の関西人を演じるリアルでコミカルな一人芝居が身上。" },
  "鳥居みゆき": { hometown: "秋田県/埼玉県", agency: "サンミュージックプロダクション", formedDate: "2001年", members: [{name: "鳥居みゆき", birthplace: "秋田県"}], description: "「ヒットエンドラーン」のフレーズとパジャマ姿、狂気に満ちた独特のキャラクターでブレイク。女優や映像監督としても才能を発揮する。" },
  "とにかく明るい安村": { hometown: "北海道旭川市", agency: "吉本興業", formedDate: "2000年", members: [{name: "とにかく明るい安村", birthplace: "北海道旭川市"}], description: "「安心してください、穿いてますよ！」のパンツ一丁芸で世界的大ブレイク。英国のゴット・タレントで日本人初の快挙を成し遂げたカリスマ。" },
  "夙川アトム": { hometown: "兵庫県西宮市", agency: "ハイイロ", formedDate: "1999年", members: [{name: "夙川アトム", birthplace: "兵庫県西宮市"}], description: "R-1ぐらんぷり2009ファイナリスト。業界用語を多用するキャラクター「ギョーカイ人」の紙芝居ネタで強烈なインパクトを残した。" },
  "東京ホテイソン": { hometown: "岡山県/東京都", agency: "グレープカンパニー", formedDate: "2015年", members: [{name: "たける", birthplace: "岡山県高梁市"}, {name: "ショーゴ", birthplace: "東京都板橋区"}], description: "M-1グランプリ2020ファイナリスト。備中神楽のリズムに乗せた「い〜や、○○の××！」という独特のツッコミのスタイルで新風を巻き起こす。" },
  "藤崎マーケット": { hometown: "兵庫県/京都府", agency: "吉本興業", formedDate: "2005年", members: [{name: "田崎佑一", birthplace: "兵庫県神戸市"}, {name: "トキ", birthplace: "京都府寝屋川市"}], description: "KOCファイナリスト。「ラララライ体操」で一世を風靡するも、それに頼らない確かな漫才とコントの実力で関西お笑い界を牽引する。" },
  "友近": { hometown: "愛媛県松山市", agency: "吉本興業", formedDate: "2000年", members: [{name: "友近", birthplace: "愛媛県松山市"}], description: "R-1ぐらんぷり等の常連。卓越した人間観察力から生み出されるピザ屋の店員や旅館の女将など、リアルすぎる一人芝居の最高峰。" },
  "タカアンドトシ": { hometown: "北海道札幌市", agency: "吉本興業", formedDate: "1994年", members: [{name: "タカ", birthplace: "北海道札幌市"}, {name: "トシ", birthplace: "北海道札幌市"}], description: "「欧米か！」のフレーズで日本中を席巻。北海道から上京後、爆笑オンエアバトルやM-1グランプリで輝かしい成績を残し続け、安定感抜群のMCとしても活躍。" },
  "徳井義実": { hometown: "京都府京都市", agency: "吉本興業", formedDate: "1998年", members: [{name: "徳井義実", birthplace: "京都府京都市"}], description: "チュートリアルのボケとしてM-1完全優勝を果たすと同時に、R-1ぐらんぷりでもヨギータ等の強烈キャラで決勝進出を果たす天才的コメディアン。" },
  "kento fukaya": { hometown: "愛知県大府市", agency: "吉本興業", formedDate: "2018年(ピン芸人)", members: [{name: "kento fukaya", birthplace: "愛知県大府市"}], description: "R-1グランプリファイナリスト。巨大なフリップボードを駆使して「冴えない人物」たちの心の声を代弁するスタイリッシュなフリップ芸。" },
  "SAKURAI": { hometown: "徳島県", agency: "ソニー・ミュージックアーティスツ", formedDate: "1999年", members: [{name: "SAKURAI", birthplace: "徳島県"}], description: "R-1ぐらんぷり2020ファイナリスト。ギター弾き語りでクールに歌い上げながら、最後に予想だにしないオチを提示する斬新な歌ネタ職人。" },
  "Yes!アキト": { hometown: "北海道札幌市", agency: "サンミュージックプロダクション", formedDate: "2011年", members: [{name: "Yes!アキト", birthplace: "北海道札幌市"}], description: "R-1グランプリファイナリスト。「ダブルパチンコ！」などに代表される、テンポの速いギャグを連発する怒涛のギャグマシーン。" },
  "鬼頭真也": { hometown: "東京都", agency: "ワタナベエンターテインメント", formedDate: "1996年", members: [{name: "鬼頭真也", birthplace: "東京都"}], description: "R-1ぐらんぷりファイナリスト。本を用いた独特の朗読芸などで知られ、俳優としても活動の幅を広げている秀才ピン芸人。" },
  "カニササレアヤコ": { hometown: "神奈川県藤沢市", agency: "フリー", formedDate: "2016年", members: [{name: "カニササレアヤコ", birthplace: "神奈川県藤沢市"}], description: "R-1ぐらんぷりファイナリスト。雅楽で小道具として用いられる笙（しょう）を演奏しながら、あるあるネタを挟む雅な異色ピン芸人。" },
  "隣人": { hometown: "大阪府", agency: "吉本興業", formedDate: "2013年", members: [{name: "中村遊直", birthplace: "大阪府"}, {name: "橋本市民球場", birthplace: "大阪府"}], description: "KOCに2年連続進出。チンパンジーの着ぐるみを着るなど、突飛な設定と誰も思いつかない劇的なストーリー展開で唯一無二のコントを魅せる。" },
  "石出奈々子": { hometown: "千葉県", agency: "浅井企画", formedDate: "2010年", members: [{name: "石出奈々子", birthplace: "千葉県"}], description: "R-1ぐらんぷりファイナリスト。アニメ映画のヒロインのような声質とジブリ風のキャラクターを演じるコントで、お茶の間に癒しと笑いを提供する。" },
  "ななまがり": { hometown: "大阪府/香川県", agency: "吉本興業", formedDate: "2008年", members: [{name: "森下直人", birthplace: "神奈川県横浜市(出身地設定)"}, {name: "初瀬悠太", birthplace: "香川県高松市"}], description: "KOCファイナリストでありTHE SECONDでも大活躍。奇人パラレルワールドと呼ばれる不条理で強烈なキャラクター設定を次々と生み出す狂気のコンビ。" },
  "しずる": { hometown: "東京都/埼玉県", agency: "吉本興業", formedDate: "2003年", members: [{name: "KAƵMA", birthplace: "埼玉県"}, {name: "村上純", birthplace: "東京都"}], description: "KOC決勝に4度進出。青春の甘酸っぱさを前面に出したコントから、狂気や不条理を孕んだ熟練の二人芝居へと進化を続ける実力派。" },
  "ぺこぱ": { hometown: "神奈川県/山口県", agency: "サンミュージック", formedDate: "2008年", members: [{name: "シュウペイ", birthplace: "神奈川県横浜市"}, {name: "松陰寺太勇", birthplace: "山口県光市"}], description: "M-1グランプリ2019で3位。「否定しないツッコミ」という誰も傷つけない新しい漫才のスタイルで、全国的な大ブレイクを果たした。" },
  "TKO": { hometown: "大阪府", agency: "松竹芸能", formedDate: "1990年", members: [{name: "木本武宏", birthplace: "大阪府"}, {name: "木下隆行", birthplace: "大阪府"}], description: "キングオブコントで複数回決勝に進出し、確固たるポジションを築き上げている超実力派のベテランコント師。" },
  "2丁拳銃": { hometown: "大阪府", agency: "吉本興業", formedDate: "1993年", members: [{name: "小堀裕之", birthplace: "奈良県"}, {name: "川谷修士", birthplace: "兵庫県"}], description: "M-1グランプリ初期の常連ファイナリスト。「ちょうどええ」のフレーズで知られ、ロックなビジュアルと安定のしゃべくり漫才を武器にするベテラン。" },
  "ライセンス": { hometown: "奈良県", agency: "吉本興業", formedDate: "1996年", members: [{name: "藤原一裕", birthplace: "奈良県生駒市"}, {name: "井本貴史", birthplace: "奈良県生駒市"}], description: "M-1グランプリ2006ファイナリスト。東京進出後もルミネtheよしもとの看板として活躍。強面とイケメンのルックスから繰り出される洗練された漫才。" },
  "変ホ長調": { hometown: "大阪府", agency: "アマチュア", formedDate: "2005年", members: [{name: "彼方榛名", birthplace: "大阪府"}, {name: "小田ひとみ", birthplace: "大阪府"}], description: "M-1グランプリ2006ファイナリスト。アマチュアとして史上初の決勝進出を果たし、素人離れした間と独特のワードセンスで強烈な印象を残した。" },
  "ザ・パンチ": { hometown: "東京都", agency: "吉本興業", formedDate: "1998年", members: [{name: "パンチ浜崎", birthplace: "東京都小平市"}, {name: "ノーパンチ松尾", birthplace: "東京都田無市"}], description: "M-1グランプリ2008ファイナリスト。THE SECOND 2024にて準優勝を飾り、「砂漠でラクダに逃げられ〜」等のフレーズに代わる新たなしゃべくり漫才を見せつけた。" },
  "スーパーマラドーナ": { hometown: "大阪府/愛媛県", agency: "吉本興業", formedDate: "2003年", members: [{name: "田中一彦", birthplace: "大阪府高槻市"}, {name: "武智", birthplace: "愛媛県松山市"}], description: "M-1グランプリで4度決勝に進出した実力派。ひ弱でヤバい奴を演じる田中と、元ヤンの武智という相反するキャラクターがぶつかり合う本格しゃべくり漫才。" },
  "アキナ": { hometown: "大阪府/滋賀県", agency: "吉本興業", formedDate: "2012年", members: [{name: "秋山賢太", birthplace: "兵庫県川辺郡"}, {name: "山名文和", birthplace: "滋賀県東浅井郡"}], description: "M-1グランプリ、キングオブコント両方で決勝進出を経験。関西を代表する王道のコント師でありながら、漫才でも高い評価を受ける洗練された実力派コンビ。" },
  "カミナリ": { hometown: "茨城県鉾田市", agency: "グレープカンパニー", formedDate: "2011年", members: [{name: "竹内まなぶ", birthplace: "茨城県鉾田市"}, {name: "石田たくみ", birthplace: "茨城県鉾田市"}], description: "M-1グランプリ2016、2017ファイナリスト。強烈な茨城弁の訛りと、まなぶの頭をたくみが全力で叩く「どつきツッコミ」という唯一無二のフォーマットで大ブレイク。" },
  "おいでやすこが": { hometown: "京都府/福岡県", agency: "吉本興業", formedDate: "2019年", members: [{name: "おいでやす小田", birthplace: "京都府京都市"}, {name: "こがけん", birthplace: "福岡県久留米市"}], description: "M-1グランプリ2020準優勝。ピン芸人同士のユニットでありながら、こがけんの洋楽風の熱唱に小田の大声ツッコミが炸裂するスタイルで爆笑をかっさらった。" },
  "もも": { hometown: "愛媛県/京都府", agency: "吉本興業", formedDate: "2017年", members: [{name: "せめる。", birthplace: "愛媛県松山市"}, {name: "まもる。", birthplace: "京都府京都市"}], description: "M-1グランプリ2021ファイナリスト。顔と名前のギャップを活かし、互いの容姿を例え合う「○○顔やろ！」というフォーマットで、怒涛のような掛け合いを見せる。" },
  "ダイヤモンド": { hometown: "山口県/福島県", agency: "吉本興業", formedDate: "2017年", members: [{name: "野澤輸出", birthplace: "栃木県塩谷郡"}, {name: "小野竜輔", birthplace: "山口県宇部市"}], description: "M-1グランプリ2022ファイナリスト。スタバのサイズやお金の単位など、誰もが知る言葉の概念をひねり、狂気のベクトルへと昇華させる「発明」の漫才。" },
  "ジョックロック": { hometown: "大阪府", agency: "吉本興業", formedDate: "2020年", members: [{name: "福本ユウショウ", birthplace: "大阪府"}, {name: "ゆうじろー", birthplace: "大阪府"}], description: "独自のリズムと計算されたテンポで作られる、洗練された狂気とも言える不思議な世界観の持ち主。今後の賞レースで飛躍が期待される新世代コント師。" },
  "めぞん": { hometown: "東京都/神奈川県", agency: "吉本興業", formedDate: "2018年", members: [{name: "吉野おいなり君", birthplace: "東京都"}, {name: "原一文字", birthplace: "神奈川県"}], description: "独特なワードセンスと、互いの個性をぶつけ合うような熱量のある掛け合いが特徴的なコンビ。" },
  "ザ・ギース": { hometown: "広島県/北海道", agency: "ASH&Dコーポレーション", formedDate: "2004年", members: [{name: "高佐一慈", birthplace: "北海道函館市"}, {name: "尾関高文", birthplace: "広島県東広島市"}], description: "KOC決勝に4度進出。ハープの演奏やクオリティの高い小道具等を用い、一見インテリジェントな雰囲気ながら底知れない不条理さをまとったコントを繰り出す。" },
  "鬼ヶ島": { hometown: "愛知県/埼玉県/神奈川県", agency: "プロダクション人力舎", formedDate: "2007年", members: [{name: "アイアム野田", birthplace: "愛知県"}, {name: "おおかわら", birthplace: "埼玉県"}, {name: "和田貴志", birthplace: "神奈川県"}], description: "KOC2013準優勝。アイアム野田の強烈すぎる狂気的なキャラクターを最大限に活かし、緻密な台本にぶつけることで起きる爆発力が魅力のトリオ。" },
  "トップリード": { hometown: "北海道", agency: "太田プロダクション", formedDate: "2001年", members: [{name: "和賀勇介", birthplace: "北海道室蘭市"}, {name: "新妻悠太", birthplace: "北海道室蘭市"}], description: "KOC第4回、第5回ファイナリスト。叙述トリックや複雑な伏線回収など、非常に演劇的で高度な構成を持つストーリー性の高いコントを得意とした。" },
  "うしろシティ": { hometown: "新潟県/福井県", agency: "松竹芸能", formedDate: "2009年", members: [{name: "金子学", birthplace: "新潟県津南町"}, {name: "阿諏訪泰義", birthplace: "神奈川県寒川町"}], description: "KOC決勝に3度進出。スタイリッシュな佇まいから、どこか痛々しかったりズレていたりする人間関係をリアルに描く器用なコントで女性にも絶大な人気を誇った。" },
  "夜ふかしの会": { hometown: "東京都", agency: "ワタナベエンターテインメント", formedDate: "2005年", members: [{name: "鬼頭真也", birthplace: "埼玉県"}, {name: "三福エンターテイメント", birthplace: "静岡県"}], description: "KOC2012ファイナリスト。5人組（当時）のコント劇団として、大人数だからこそできる複雑なシチュエーションや群像劇を見事に成立させる圧倒的な構成力を持つ。" },
  "ジグザグジギー": { hometown: "東京都", agency: "マセキ芸能社", formedDate: "2008年", members: [{name: "池田勝", birthplace: "神奈川県"}, {name: "宮澤聡", birthplace: "東京都"}], description: "KOCで3度決勝進出。「狼男」の設定や架空の競技のエントリーなど、一つのシステムを見つけ出し論理的に笑いを増幅させるコントの職人。" },
  "バンビーノ": { hometown: "愛媛県/大阪府", agency: "吉本興業", formedDate: "2008年", members: [{name: "藤田ユウキ", birthplace: "大阪府交野市"}, {name: "石山タオル", birthplace: "愛媛県大洲市"}], description: "KOC2014で「ダンソン」のリズムネタを披露し日本中で社会現象に。翌年のKOCでも準優勝を果たし、設定や演技の秀逸さも見せつけた。" },
  "犬の心": { hometown: "東京都/神奈川県", agency: "吉本興業", formedDate: "1998年", members: [{name: "押見泰憲", birthplace: "新潟県"}, {name: "いけや賢二", birthplace: "静岡県"}], description: "KOC2014ファイナリスト。長きに渡って吉本の劇場を支え、いけやの奇妙なキャラクターと押見の陰湿なツッコミを用いた唯一無二の演劇的コントを見せた。" },
  "リンゴスター": { hometown: "神奈川県", agency: "プロダクション人力舎", formedDate: "2010年(解散)", members: [{name: "小川裕史", birthplace: "神奈川県"}, {name: "平田俊之", birthplace: "兵庫県"}, {name: "高野尚之", birthplace: "神奈川県"}], description: "KOC2014ファイナリスト。若手ながら巧妙なストーリーテリングと3人の個性を活かした演技派のコントで脚光を浴びた。" },
  "GAG少年楽団": { hometown: "広島県/大阪府/兵庫県", agency: "吉本興業", formedDate: "2006年", members: [{name: "SJ", birthplace: "広島県"}, {name: "福井俊太郎", birthplace: "兵庫県"}, {name: "ひろゆき", birthplace: "大阪府"}], description: "トリオコント「GAG」の旧称。極端に低い姿勢で土下座をする等、福井が作り出す独特の「ダサい」男の哀愁や狂気をコントに落とし込んだ。" },
  "ロビンフット": { hometown: "東京都/埼玉県", agency: "ソニー・ミュージックアーティスツ", formedDate: "2000年", members: [{name: "おぐ", birthplace: "東京都"}, {name: "マー坊", birthplace: "埼玉県"}], description: "KOC2018ファイナリスト。SMA（ソニー）所属のベテランコンビ。結婚や年齢など、おじさんのリアルな哀愁と葛藤を絶妙な会話劇で描く職人芸。" },
  "GAG": { hometown: "広島県/大阪府/兵庫県", agency: "吉本興業", formedDate: "2006年", members: [{name: "SJ", birthplace: "広島県"}, {name: "福井俊太郎", birthplace: "兵庫県"}, {name: "安田ファミリア", birthplace: "大阪府"}], description: "KOCで4年連続して決勝に進出。「ひくねと」と呼ばれる独自に卑屈なキャラクターや心理描写に優れた独特なコントで根強いファンを持つ。" },
  "やさしいズ": { hometown: "東京都/埼玉県", agency: "吉本興業", formedDate: "2011年", members: [{name: "佐伯元輝", birthplace: "富山県"}, {name: "タイ", birthplace: "東京都"}], description: "KOC2018ファイナリスト。ヤンキーに見えて実はとても心優しい青年のやりとりを描くなど、心温まるヒューマンコメディテイストのコントを得意とする。" },
  "ネルソンズ": { hometown: "島根県/岡山県", agency: "吉本興業", formedDate: "2010年", members: [{name: "和田まんじゅう", birthplace: "島根県"}, {name: "青山フォール勝ち", birthplace: "島根県"}, {name: "岸健之助", birthplace: "山口県"}], description: "KOC決勝常連トリオ。和田まんじゅうのコミカルな風貌と強烈なキャラクターに、青山の演技力が交わる、非常に馬鹿馬鹿しくもパワフルなコント。" },
  "そいつどいつ": { hometown: "宮崎県/千葉県", agency: "吉本興業", formedDate: "2015年", members: [{name: "市川刺身", birthplace: "東京都"}, {name: "松本竹馬", birthplace: "宮崎県"}], description: "KOC2021ファイナリスト。市川の強烈な顔芸やキャラクターに、竹馬のロジカルなツッコミが入り込む、独特の不気味さと面白さが同居するコント。" },
  "蛙亭": { hometown: "宮崎県/岡山県", agency: "吉本興業", formedDate: "2012年", members: [{name: "中野周平", birthplace: "岡山県"}, {name: "イワクラ", birthplace: "宮崎県"}], description: "KOC決勝常連の男女コンビ。イワクラが生み出す狂気的で猟奇的な設定に、中野のコミカルな声やキャラクターが見事に融合した新世代コント。" },
  "最高の人間": { hometown: "福岡県/東京都", agency: "プロダクション人力舎", formedDate: "2022年(限定ユニット)", members: [{name: "吉住", birthplace: "福岡県"}, {name: "岡野陽一", birthplace: "福井県"}], description: "KOC2022ファイナリスト。ピン芸人として圧倒的な実力を持つ吉住と岡野が結成した即席ユニット。互いの持つ狂気とクズさが化学反応を起こした。" },
  "クロコップ": { hometown: "大阪府/香川県", agency: "ケイダッシュステージ", formedDate: "2013年", members: [{name: "荒木好之", birthplace: "大阪府"}, {name: "しょうた", birthplace: "香川県"}], description: "KOC2022ファイナリスト。「あっちむいてホイ」を格闘ゲーム風にアレンジしたネタなど、音楽や独自のリズムに合わせたキャッチーで馬鹿馬鹿しいコント。" },
  "いぬ": { hometown: "宮崎県", agency: "吉本興業", formedDate: "2010年", members: [{name: "有馬徹", birthplace: "宮崎県"}, {name: "太田隆司", birthplace: "宮崎県"}], description: "KOC2022ファイナリスト。筋肉とアクロバティックな動き、そして「過剰なキス」などの強烈な身体表現で審査員を困惑と爆笑の渦に巻き込んだ。" },
  "カゲヤマ": { hometown: "東京都", agency: "吉本興業", formedDate: "2009年", members: [{name: "タバやん。", birthplace: "東京都"}, {name: "益田康平", birthplace: "東京都"}], description: "KOC2023準優勝。「料亭」での障子を使った演出や、「検便」というギリギリの設定で、観客を爆笑の底なし沼に引きずり込む規格外のコント師。" },
  "ゼンモンキー": { hometown: "東京都/埼玉県", agency: "ワタナベエンターテインメント", formedDate: "2020年", members: [{name: "荻野将太朗", birthplace: "埼玉県"}, {name: "ヤザキ", birthplace: "東京都"}, {name: "むらまつ", birthplace: "東京都"}], description: "結成わずか数年でKOC2023ファイナリストになった若き天才トリオ。3人それぞれの明確なキャラクターと演技力で高い評価を得た。" },
  "cacao": { hometown: "大阪府", agency: "吉本興業", formedDate: "2020年", members: [{name: "高橋", birthplace: "大阪府"}, {name: "浦田スターク", birthplace: "大阪府"}, {name: "たっぺい", birthplace: "大阪府"}], description: "KOC2024ファイナリスト。極限まで研ぎ澄まされたテンポと無駄のない動きで魅せる「着替え」等のコントで、新星のごとく現れた若きトリオ。" },
  "青色1号": { hometown: "東京都", agency: "太田プロダクション", formedDate: "2017年", members: [{name: "上村典弘", birthplace: "東京都"}, {name: "榎本淳", birthplace: "神奈川県"}, {name: "仮屋想", birthplace: "福岡県"}], description: "KOC2025ファイナリスト。日常に潜むリアルな気まずさや怒りを、高い演技力と鋭利な視点で切り取る、太田プロの実力派トリオ。" },
  "元祖いちごちゃん": { hometown: "東京都", agency: "浅井企画", formedDate: "2014年", members: [{name: "ハイパーペロちゃん", birthplace: "東京都"}, {name: "マメ大福", birthplace: "東京都"}], description: "KOC2025ファイナリスト。アンダーグラウンドな雰囲気と、予想の斜め上を行く不条理かつ狂気的なコントで、コアなお笑いファンから熱狂な支持を集める。" },
  "ベルナルド": { hometown: "神奈川県", agency: "ハルカラ", formedDate: "2022年", members: [{name: "大島", birthplace: "神奈川県"}, {name: "中島", birthplace: "神奈川県"}], description: "KOC2025にて突如として現れ、決勝の舞台に躍り出た新星。荒削りながらも底知れぬパワーを見せ、お笑い界に新たな風を吹き込んだ。" },
  "村越周司": { hometown: "大阪府高槻市", agency: "フリー", formedDate: "1995年(デビュー)", members: [{name: "村越周司", birthplace: "大阪府高槻市"}], description: "かつてケンドーコバヤシと「モストデンジャラスコンビ」を組み、その後ピン芸人へ。伝説のギャグ「もうええわ！」など破天荒な芸風で知られる。" },
  "ヤナギブソン": { hometown: "大阪府大阪市", agency: "吉本興業", formedDate: "2001年", members: [{name: "ヤナギブソン", birthplace: "大阪府大阪市"}], description: "ザ・プラン9のメンバーであり、ピンとしてもR-1ぐらんぷりファイナリスト。「誰が興味あんねん！」の名ツッコミで関西のバラエティに欠かせない存在。" },
  "ショウショウ": { hometown: "大阪府", agency: "吉本興業", formedDate: "1987年", members: [{name: "羽田昇平", birthplace: "大阪府"}, {name: "羽木昭二", birthplace: "大阪府"}], description: "ベテラン漫才師でありながら、各界の著名人や政治家の精巧なモノマネを漫才に組み込む「モノマネ漫才」の第一人者。" },
  "オール阪神": { hometown: "大阪府泉大津市", agency: "吉本興業", formedDate: "1975年", members: [{name: "オール阪神", birthplace: "大阪府泉大津市"}], description: "オール阪神・巨人のツッコミ担当。日本漫才界の最高峰に君臨し、上方漫才の伝統と圧倒的なテンポを守り続ける生ける伝説。" },
  "南秀仁": { hometown: "大阪府", agency: "吉本興業", formedDate: "1994年", members: [{name: "南秀仁", birthplace: "大阪府"}], description: "お笑い賞レース初期に活躍を見せたピン芸人。独自の世界観でマニアックなネタを披露し、記録に残る活躍を見せた。" },
  "キャプテン☆ボンベ": { hometown: "東京都", agency: "（フリー）", formedDate: "2002年(デビュー)", members: [{name: "キャプテン☆ボンベ", birthplace: "東京都"}], description: "R-1ぐらんぷり初期のファイナリスト。独特なキャラクターとフリップを駆使し、シュールな笑いを提供した。" },
  "ウメ": { hometown: "埼玉県", agency: "ソニー・ミュージックアーティスツ", formedDate: "2001年", members: [{name: "ウメ", birthplace: "埼玉県"}], description: "R-1ぐらんぷり2007ファイナリスト。「〜じゃん？〜じゃん？」のリズムに乗せ、スケッチブックを用いてあるあるや偏見をめくるフリップ芸。" },
  "チュートリアル福田": { hometown: "京都府京都市", agency: "吉本興業", formedDate: "1998年(コンビ結成)", members: [{name: "福田充徳", birthplace: "京都府京都市"}], description: "M-1グランプリ完全優勝を果たしたチュートリアルのツッコミ。ピンとしても実力が高く、R-1ぐらんぷりで決勝に進出する快挙を成し遂げた。" },
  "エハラマサヒロ": { hometown: "大阪府東大阪市", agency: "吉本興業", formedDate: "2007年(ピン芸人デビュー)", members: [{name: "エハラマサヒロ", birthplace: "大阪府東大阪市"}], description: "R-1ぐらんぷり準優勝2回。圧倒的な歌唱力やビートボックス等の音楽センスと、細かい人間観察からくるモノマネを高い次元で融合させたエンターテイナー。" },
  "芋洗坂係長": { hometown: "福岡県北九州市", agency: "えにしんぐエンターテイメント", formedDate: "1989年(ピン転向は2008年)", members: [{name: "芋洗坂係長", birthplace: "福岡県北九州市"}], description: "R-1ぐらんぷり2008準優勝。恰幅の良い中年サラリーマンの風貌ながら、キレのあるダンスと替え歌で日本中の爆笑と共感を誘った。" },
  "世界のナベアツ": { hometown: "滋賀県高島郡", agency: "吉本興業", formedDate: "1991年(デビュー)", members: [{name: "渡邊鐘(桂三度)", birthplace: "滋賀県高島郡"}], description: "「3の倍数と3が付く数字のときだけアホになる」という革命的な発明で日本中を大熱狂させたお笑い界の鬼才。現在は落語家「桂三度」として活躍。" },
  "土屋伸之": { hometown: "東京都", agency: "マセキ芸能社", formedDate: "2000年", members: [{name: "土屋伸之", birthplace: "東京都"}], description: "ナイツのツッコミ担当。相方・塙のボケを正確無比なスピードでさばき切る漫才職人であり、ピン芸としてもシュールな世界観を持つ。" },
  "COWCOW山田與志": { hometown: "大阪府枚方市", agency: "吉本興業", formedDate: "1993年", members: [{name: "山田與志(多田健二)", birthplace: "大阪府枚方市"}], description: "COWCOWのツッコミ(当時)・ボケ担当。「あたりまえ体操」などで世界を沸かせつつ、R-1でもフリップ芸「テニスの得点係」などで決勝に複数回進出。" },
  "サイクロンZ": { hometown: "北海道", agency: "太田プロダクション", formedDate: "2000年", members: [{name: "サイクロンZ", birthplace: "北海道"}], description: "R-1ぐらんぷりファイナリスト。特技のマジックとダンスを融合させた、リズミカルでテンポの良いパフォーマンス芸を得意とする。" },
  "川島明": { hometown: "京都府宇治市", agency: "吉本興業", formedDate: "1999年", members: [{name: "川島明", birthplace: "京都府宇治市"}], description: "麒麟のボケ担当でM-1の顔。ピンとしてもR-1ファイナリストであり、ええ声とずば抜けた大喜利力、語彙力でテレビ界の頂点に君臨する。" },
  "アジアン馬場園": { hometown: "大阪府堺市", agency: "吉本興業", formedDate: "2002年", members: [{name: "馬場園梓", birthplace: "大阪府堺市"}], description: "女性漫才コンビ「アジアン」(解散)のツッコミ担当。R-1ファイナリストになるなど確かな話術を持ち、ドラマや女優業でも活躍。" },
  "おいでやす小田": { hometown: "京都府京都市", agency: "吉本興業", formedDate: "2001年", members: [{name: "おいでやす小田", birthplace: "京都府京都市"}], description: "R-1ぐらんぷり常連ファイナリスト。どんな些細な事にも全力でキレる大声ツッコミが代名詞で、ユニット「おいでやすこが」でM-1準優勝も達成。" },
  "サンシャイン池崎": { hometown: "鹿児島県鹿屋市", agency: "ワタナベエンターテインメント", formedDate: "2007年", members: [{name: "サンシャイン池崎", birthplace: "鹿児島県鹿屋市"}], description: "「空前絶後のぉぉ！」の絶叫とハイテンションでR-1決勝を駆け抜け、子供から大人まで圧倒的支持を得た熱血お笑い戦士。保護猫活動でも知られる。" },
  "横澤夏子": { hometown: "新潟県糸魚川市", agency: "吉本興業", formedDate: "2009年", members: [{name: "横澤夏子", birthplace: "新潟県糸魚川市"}], description: "「音楽の先生」や「ちょっと鼻につく女」など、女性のあるあるを高い解像度と演技力で切り取る一人漫談のスペシャリスト。" },
  "霜降り明星 せいや": { hometown: "大阪府東大阪市", agency: "吉本興業", formedDate: "2013年", members: [{name: "せいや", birthplace: "大阪府東大阪市"}], description: "M-1史上最年少王者に輝いた霜降り明星のボケ担当。モノマネや歌、動きなど多彩な才能を持ち、R-1でもそのエンターテイナーぶりを遺憾なく発揮した。" },
  "セルライトスパ大須賀": { hometown: "愛知県刈谷市", agency: "吉本興業", formedDate: "2008年", members: [{name: "大须賀健剛", birthplace: "愛知県刈谷市"}], description: "関西の実力派コンビ「セルライトスパ」のボケ担当。巨体と坊主頭から繰り出される、低音ボイスを活かしたシュールな一人コントで注目を集める。" },
  "だーりんず松本りんす": { hometown: "兵庫県", agency: "ソニー・ミュージックアーティスツ", formedDate: "2011年", members: [{name: "松本りんす", birthplace: "兵庫県"}], description: "KOCファイナリスト「だーりんず」のメンバー。自らのカツラを利用した自虐的かつ爆笑必至のコントで、R-1決勝でも圧倒的な存在感を見せた。" },
  "すゑひろがりず南條": { hometown: "大阪府堺市", agency: "吉本興業", formedDate: "2011年", members: [{name: "南條庄助", birthplace: "大阪府堺市"}], description: "狂言風漫才「すゑひろがりず」のツッコミ担当。伝統芸能の型を用いながら現代の事象を古語に変換するスタイルでR-1決勝でも会場を沸かせた。" },
  "ななまがり森下": { hometown: "神奈川県横浜市(設定)", agency: "吉本興業", formedDate: "2008年", members: [{name: "森下直人", birthplace: "神奈川県横浜市(設定)"}], description: "KOCファイナリスト「ななまがり」のボケ担当。「架空の芸能人」や「乳首を隠す男」など、常人の理解を超えるパラレルワールドの住人を演じ切る天才。" },
  "パーパーほしのディスコ": { hometown: "群馬県沼田市", agency: "マセキ芸能社", formedDate: "2014年", members: [{name: "ほしのディスコ", birthplace: "群馬県沼田市"}], description: "KOCファイナリスト「パーパー」のツッコミ担当。R-1では類まれなる超高音の歌唱力を活かしたネタや、女性に振り回される冴えない男を巧みに演じる。" },
  "かが屋 賀屋": { hometown: "広島県呉市", agency: "マセキ芸能社", formedDate: "2015年", members: [{name: "賀屋壮也", birthplace: "広島県呉市"}], description: "KOCファイナリスト「かが屋」のボケ担当。日常の解像度が高すぎるコント師としての実力を単独でも発揮し、R-1決勝でも高い評価を受けた。" },
  "高田ぽる子": { hometown: "北海道野付郡", agency: "マセキ芸能社", formedDate: "2018年", members: [{name: "高田ぽる子", birthplace: "北海道野付郡"}], description: "R-1グランプリ2021ファイナリスト。フリップとリコーダーを用い、ほのぼのとした絵本のような絵柄の中で、狂気をはらんだ物語を展開する。" },
  "森本サイダー": { hometown: "京都府京都市", agency: "松竹芸能", formedDate: "2013年", members: [{name: "森本サイダー", birthplace: "京都府京都市"}], description: "R-1グランプリ2021ファイナリスト。「不審者」のような自らの風貌を逆手に取り、生きづらい日常を等身大かつコミカルに叫ぶ一人劇。" },
  "土屋": { hometown: "東京都", agency: "マセキ芸能社", formedDate: "2019年", members: [{name: "土屋", birthplace: "東京都"}], description: "R-1グランプリファイナリスト。飄々とした語り口と、どこか不条理で掴みどころのない独特の世界観が特徴。" },
  "金の国 渡部おにぎり": { hometown: "神奈川県横浜市", agency: "ワタナベエンターテインメント", formedDate: "2017年", members: [{name: "渡部おにぎり", birthplace: "神奈川県横浜市"}], description: "コントコンビ「金の国」のボケ担当。愛嬌のあるぽっちゃり体型と、抜群の演技力・表情筋を活かしたパワフルな一人コントで躍動する。" },
  "コットン きょん": { hometown: "埼玉県草加市", agency: "吉本興業", formedDate: "2012年", members: [{name: "きょん", birthplace: "埼玉県草加市"}], description: "KOC準優勝「コットン」のボケ担当。R-1では準優勝。どんな人物にも憑依できる圧倒的な引き出しの数と演技力で、唯一無二のキャラクターを生み出す。" },
  "こたけ正義感": { hometown: "京都府", agency: "ワタナベエンターテインメント", formedDate: "2017年", members: [{name: "こたけ正義感", birthplace: "京都府"}], description: "現役弁護士としての知識を武器に、世の中に溢れる「法律上アウト」な事象や不可解な判例をフリップで鋭く斬る、前代未聞のリーガルピン芸人。" },
  "カベポスター 永見": { hometown: "三重県名張市", agency: "吉本興業", formedDate: "2014年", members: [{name: "永見大吾", birthplace: "三重県名張市"}], description: "M-1ファイナリスト「カベポスター」のボケ担当。「確かにお前がい言う通り〜」のフレーズで始まる、高度なロジックと思わず頷く偏見を大喜利力で昇華する。" },
  "ラパルフェ 都留": { hometown: "東京都江戸川区", agency: "ワタナベエンターテインメント", formedDate: "2018年", members: [{name: "都留拓也", birthplace: "東京都江戸川区"}], description: "「阿部寛」や「トイ・ストーリーのウッディ」など、本人と見紛うほどのクオリティを誇るモノマネにコミカルな設定を乗せる次世代モノマネスター。" },
  "どくさいスイッチ企画": { hometown: "大阪府", agency: "アマチュア→サンミュージック", formedDate: "2011年", members: [{name: "どくさいスイッチ企画", birthplace: "大阪府"}], description: "R-1グランプリ2024にて、アマチュアとして史上初の決勝進出を果たした異端児。「ツチノコ発見者」など、卓越した台本と演技力のコントを見せる。" },
  "トンツカタンお抹茶": { hometown: "埼玉県", agency: "プロダクション人力舎", formedDate: "2012年", members: [{name: "お抹茶", birthplace: "埼玉県"}], description: "コントトリオ「トンツカタン」のボケ担当。R-1では自作の「かりんとうの車」に乗り、BGMに乗せて舞台を練り歩く誰も予想しなかったネタで話題を攫った。" },
  "ハギノリザードマン": { hometown: "岡山県", agency: "サンミュージック", formedDate: "2012年", members: [{name: "ハギノリザードマン", birthplace: "岡山県"}], description: "R-1ファイナリスト。小道具や自作の仕掛けを用いたアナログなシステムと、予測不可能なダイナミックなアクションで笑いを生み出す。" },
  "チャンス大城": { hometown: "兵庫県尼崎市", agency: "吉本興業", formedDate: "1989年", members: [{name: "チャンス大城", birthplace: "兵庫県尼崎市"}], description: "地下ライブで長年伝説として語り継がれてきた苦労人。「山に埋められた」等の壮絶なエピソードと、野生の動物の鳴き真似などの奇抜な特技で一躍ブレイク。" },
  "さや香 新山": { hometown: "大阪府東大阪市", agency: "吉本興業", formedDate: "2014年", members: [{name: "新山", birthplace: "大阪府東大阪市"}], description: "M-1グランプリで常に優勝争いに絡む「さや香」のボケ・ツッコミ担当。R-1では独自の強い偏見を使ったフリップネタでピンとしての実力も見せつけた。" },
  "ドンデコルテ渡辺銀次": { hometown: "福岡県", agency: "吉本興業", formedDate: "2010年", members: [{name: "渡辺銀次", birthplace: "福岡県"}], description: "コンビ「ドンデコルテ」のメンバー。R-1では流暢で洗練された語り口を活かし、審査員を驚かせる完成度の高い一人コントを披露した。" },
  "ななまがり初瀬": { hometown: "香川県高松市", agency: "吉本興業", formedDate: "2008年", members: [{name: "初瀬悠太", birthplace: "香川県高松市"}], description: "KOCファイナリスト「ななまがり」のツッコミ担当。「歯が多い」ことで有名だが、R-1では自らの大声とパワーを全開にした独自のコントで決勝へ。" },
  "さすらいラビー中田": { hometown: "東京都", agency: "太田プロダクション", formedDate: "2014年", members: [{name: "中田和伸", birthplace: "東京都"}], description: "コンビ「さすらいラビー」のメンバー。長身を活かしたダイナミックな動きと、一見気弱そうに見えて狂気を秘めたキャラクターで観客を魅了する。" }

};

allNames.forEach(name => {
  // 「Aブロック」などのシステム名や不正な対戦名を除外
  if (!name.includes("ブロック") && !name.includes(" vs ") && !contestantsData[name]) {
    const fallback = fallbackDict[name] || {};
    // 所属事務所の推定
    let estimatedAgency = "フリー / その他";
    if (name.includes("吉本") || name.includes("よしもと")) estimatedAgency = "吉本興業";
    
    // "未登録" という文字列を使わないための処理
    const safeHometown = fallback.hometown || "（非公表・情報なし）";
    const safeAgency = fallback.agency || estimatedAgency;
    const safeFormedDate = fallback.formedDate || "（不明）";

    const names = fallback.members || undefined;
    
    const descriptions = [
      "決勝の舞台で強烈なインパクトを残した実力派。圧倒的なパフォーマンスで会場を沸かせた。",
      "独自の感性と世界観で勝負する個性派。記憶に残る強烈なネタで多くのファンを獲得している。",
      "卓越した技術と発想力で笑いの限界に挑む芸人。賞レースでもその存在感は際立っている。",
      "確かな実力とキャラクターで時代を切り拓くファイナリスト。熱狂的な支持を集める名手。"
    ];
    // Use a simple hash based on the name to pick a description
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const dynamicDescription = descriptions[hash % descriptions.length];

    const safeDescription = fallback.description || dynamicDescription;

    contestantsData[name] = {
      name: name,
      hometown: safeHometown,
      agency: safeAgency,
      formedDate: safeFormedDate,
      members: names,
      description: safeDescription
    };
  }
});

export const getContestant = (name: string): Contestant => {
  return contestantsData[name] || { 
    name: name, 
    hometown: "（情報なし）",
    agency: "（情報なし）",
    formedDate: "（情報なし）",
    description: "絶大な人気を誇る実力派芸人。数々の賞レースで記録と記憶に残る漫才・コントを披露し、お笑い界に旋風を巻き起こしている。" 
  };
};
