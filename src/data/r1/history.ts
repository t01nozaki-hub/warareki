export interface R1HistoricalYear {
  year: number;
  edition: number;
  entryCount: number;
  judges: string[];
  results: {
    rank: number;
    name: string;
    totalScore?: number | string;
    profile: string;
    note?: string;
  }[];
}

export const r1HistoryData: R1HistoricalYear[] = [
  {
    year: 2002, edition: 1, entryCount: 351,
    judges: ["間寛平", "桂三枝", "西川きよし", "藤本義一", "大竹まこと"],
    results: [
      { rank: 1, name: "だいたひかる", totalScore: 785, profile: "初代R-1王者。「どーでもいいですよ」と呟きながらシュールなフリップ漫談を見せ、フリーの女性ピン芸人がいきなり頂点に。" },
      { rank: 2, name: "陣内智則", totalScore: 771, profile: "「新幹線の車内販売」などの一人コント。後に映像・音声・ツッコミを連動させるスタイルで大ブレイクする前夜。" },
      { rank: 3, name: "ケンドーコバヤシ", totalScore: 757, profile: "アングラな雰囲気と唯一無二のキャラクター憑依で高い評価を受けた。" },
      { rank: 4, name: "浅越ゴエ", totalScore: 750, profile: "スーツ姿での「しっくりこないニュース」。ザ・プラン9から単独での進出。" },
      { rank: 5, name: "友近", totalScore: 746, profile: "「極道の妻」など驚異的な憑依型一人コントを披露。ここから全国区となる。" },
      { rank: 6, name: "村越周司", totalScore: 714, profile: "元モストデンジャラスコンビのツッコミ。フリップ芸で参戦。" },
      { rank: 7, name: "ヤナギブソン", totalScore: 711, profile: "ザ・プラン9のメンバー。シュールな一人語り。" },
      { rank: 8, name: "ショウショウ", totalScore: 694, profile: "ベテランの物真似コンビの羽田が単独で参戦。独特。" },
      { rank: 9, name: "土肥ポン太", totalScore: 686, profile: "元スキヤキ。八百屋のネタなど独特な語り口の漫談。" },
      { rank: 10, name: "オール阪神", totalScore: 680, profile: "超大御所漫才師がピンで緊急参戦するも、ピン芸の壁にぶつかる結果に。" }
    ]
  },
  {
    year: 2004, edition: 2, entryCount: 609,
    judges: ["月亭八方", "間寛平", "桂三枝", "藤本義一", "大竹まこと"],
    results: [
      { rank: 1, name: "浅越ゴエ", totalScore: 792, profile: "2回目の大会でザ・プラン9のメンバーとして初戴冠。「しっくりこないニュース」の完成版を披露した。" },
      { rank: 2, name: "友近", totalScore: 782, profile: "「女子アナ」など卓越した人間観察コントで2年連続のファイナリスト＆準優勝。" },
      { rank: 3, name: "陣内智則", totalScore: 777, profile: "「教習所」で映像にツッコミを入れる革命的スタイルの原点を披露。" },
      { rank: 4, name: "ヒロシ", totalScore: 765, profile: "「ヒロシです…」の自虐ネタで大ブレイクの真っ只中。" },
      { rank: 5, name: "なだぎ武", totalScore: 752, profile: "ディラン・マッケイのキャラクターより前に別キャラで登場。" },
      { rank: 6, name: "南秀仁", totalScore: 735, profile: "無名ながら独自のコントで上位に。" },
      { rank: 7, name: "あべこうじ", totalScore: 731, profile: "うざい漫談の原型を引っ提げ初登場。" },
      { rank: 8, name: "ネゴシックス", totalScore: 730, profile: "島根弁での独自のイラストツッコミ。" }
    ]
  },
  {
    year: 2005, edition: 3, entryCount: 1675,
    judges: ["島田紳助", "間寛平", "桂三枝", "藤本義一", "大竹まこと"],
    results: [
      { rank: 1, name: "ほっしゃん。", totalScore: 719, profile: "元チュパチャップスの星田英利。うどんを鼻からすする特技ではなく、一人コント「うろ覚え」などで初代吉本王者に。" },
      { rank: 2, name: "あべこうじ", totalScore: 708, profile: "「ウザいけど憎めない」漫談スタイルが完成形に近づき準優勝。" },
      { rank: 3, name: "井上マー", totalScore: 692, profile: "「尾崎豊の熱狂的ファン」という強烈なキャラクターで爆笑を生んだ。" },
      { rank: 4, name: "長州小力", totalScore: 691, profile: "「キレてないですよ」のパラパラダンスで社会現象級のブレイク中。" },
      { rank: 5, name: "ネゴシックス", totalScore: 686, profile: "2年連続の決勝。段ボールを使った手作り感溢れるフリップ芸。" },
      { rank: 6, name: "友近", totalScore: 685, profile: "3大会連続のファイナリスト。安定の憑依芸。" },
      { rank: 7, name: "ヒロシ", totalScore: 681, profile: "爆発的ブームの中で2年連続出場。" },
      { rank: 8, name: "中山功太", totalScore: 673, profile: "「時報」や「DJ」などスタイリッシュかつ毒のあるフリップ芸。" }
    ]
  },
  {
    year: 2006, edition: 4, entryCount: 2125,
    judges: ["月亭八方", "間寛平", "桂三枝", "大竹まこと", "ラサール石井"],
    results: [
      { rank: 1, name: "博多華丸", totalScore: 820, profile: "「児玉清」のモノマネ一本で爆笑をかっさらい、相方の大吉を置いてピンで優勝。ここから華大の快進撃が始まった。" },
      { rank: 2, name: "あべこうじ", totalScore: 792, profile: "2年連続の準優勝。あと一歩で王座を逃す悲運が続く。" },
      { rank: 3, name: "浅越ゴエ", totalScore: 785, profile: "歴代王者として再挑戦し、相変わらずのクオリティを見せた。" },
      { rank: 4, name: "なだぎ武", totalScore: 783, profile: "「ディラン・マッケイ」で大ブレイク。圧倒的キャラクター。" },
      { rank: 5, name: "中山功太", totalScore: 778, profile: "2年連続。" },
      { rank: 6, name: "バカリズム", totalScore: 776, profile: "「トトトトト」や「フリップを使った独自の着眼点」で天才の片鱗を世間に見せつけた初出場。" },
      { rank: 7, name: "友近", totalScore: 773, profile: "4大会連続。もはやR-1決勝の顔。" },
      { rank: 8, name: "キャプテン☆ボンベ", totalScore: 765, profile: "「ハリウッドザコシショウ」の別の名義（覆面レスラーキャラ）。" }
    ]
  },
  {
    year: 2007, edition: 5, entryCount: 2276,
    judges: ["月亭八方", "間寛平", "桂三枝", "大竹まこと", "ラサール石井"],
    results: [
      { rank: 1, name: "なだぎ武", totalScore: 852, profile: "「ディラン・マッケイ」で圧倒的な知名度と爆笑を獲得し、ザ・プラン9から2人目の王者に。" },
      { rank: 2, name: "徳井義実", totalScore: 835, profile: "チュートリアルとしてM-1史上初の完全優勝を果たした直後に出場。あの「ヨギータ」でR-1でも準優勝の異次元の才能。" },
      { rank: 3, name: "バカリズム", totalScore: 831, profile: "「都道府県の持ち方」という歴史に残る画期的なフリップネタを披露。" },
      { rank: 4, name: "陣内智則", totalScore: 829, profile: "3度目の決勝。映像ツッコミが完成領域に。" },
      { rank: 5, name: "友近", totalScore: 806, profile: "5大会連続！" },
      { rank: 5, name: "あべこうじ", totalScore: 806, profile: "ウザ漫談の帝王、今回は5位タイ。" },
      { rank: 7, name: "ウメ", totalScore: 799, profile: "スケッチブックを用いた一人芝居とフリップの融合。" },
      { rank: 8, name: "チュートリアル福田", totalScore: 797, profile: "まさかのコンビ揃ってR-1決勝進出。料理ネタを披露した。" },
      { rank: 9, name: "大輪教授", totalScore: 796, profile: "数式を使って笑いを取る独特のホワイトボード芸。" }
    ]
  },
  {
    year: 2008, edition: 6, entryCount: 2796,
    judges: ["月亭八方", "間寛平", "桂三枝", "大竹まこと", "ラサール石井"],
    results: [
      { rank: 1, name: "なだぎ武", totalScore: 862, profile: "史上初、そして唯一の**R-1グランプリ連覇**を達成。ディランではなく日本のややこしいおじさんのキャラクターで連覇。" },
      { rank: 2, name: "エハラマサヒロ", totalScore: 849, profile: "「矢野顕子さんのモノマネ」や「ウザい先輩」など卓越した歌唱力と演技力で初登場準優勝。" },
      { rank: 3, name: "バカリズム", totalScore: 848, profile: "「トツギーノ」で日本中に大ブームを巻き起こす。またも優勝には手が届かず。" },
      { rank: 4, name: "芋洗坂係長", totalScore: 844, profile: "メタボ体型のおじさんがキレキレのダンスを踊りながら歌うパフォーマンス。" },
      { rank: 5, name: "世界のナベアツ", totalScore: 839, profile: "「3の倍数と3が付く数字のときだけアホになる」で社会現象になった特大ブレイク中。" },
      { rank: 6, name: "夙川アトム", totalScore: 831, profile: "ギョーカイ用語で紙芝居を読むシュールな芸。" },
      { rank: 7, name: "鳥居みゆき", totalScore: 828, profile: "「ヒットエンドラーン」の狂気的なキャラクターで強烈なインパクトを残す。" },
      { rank: 8, name: "土屋伸之", totalScore: 815, profile: "ナイツのツッコミ。ピンで出場。" },
      { rank: 9, name: "あべこうじ", totalScore: 812, profile: "もはや常連。" }
    ]
  },
  {
    year: 2009, edition: 7, entryCount: 3400,
    judges: ["月亭八方", "間寛平", "桂三枝", "大竹まこと", "ラサール石井"],
    results: [
      { rank: 1, name: "中山功太", totalScore: 868, profile: "「時報」や「芸人あるある」などのフリップ芸で、悲願のR-1王者に輝く。毒とセンスの完成形。" },
      { rank: 2, name: "エハラマサヒロ", totalScore: 859, profile: "2年連続の準優勝。またも頂点を逃す悲劇。" },
      { rank: 3, name: "COWCOW山田與志", totalScore: 845, profile: "「テニスの得点係」「フリップ芸の『～という…』」など多彩な一人コントを連発。" },
      { rank: 4, name: "バカリズム", totalScore: 838, profile: "「地理バカ先生」など。" },
      { rank: 5, name: "サイクロンZ", totalScore: 836, profile: "手品を持て余しながらのダンス＆モノマネ。" },
      { rank: 6, name: "鳥居みゆき", totalScore: 831, profile: "2年連続。独特の世界観。" },
      { rank: 7, name: "鬼頭真也", totalScore: 824, profile: "「本の紹介」を超高速で行う特技。" },
      { rank: 8, name: "あべこうじ", totalScore: 818, profile: "6度目の決勝。" },
      { rank: 9, name: "夙川アトム", totalScore: 816, profile: "2年連続。" }
    ]
  },
  {
    year: 2010, edition: 8, entryCount: 3539,
    judges: ["月亭八方", "間寛平", "桂三枝", "大竹まこと", "高田純次"],
    results: [
      { rank: 1, name: "あべこうじ", totalScore: "審査員投票により決着", profile: "7度目の決勝進出にして、ついに「ウザい漫談」で悲願の優勝。R-1史上最も諦めなかった男の勝利。" },
      { rank: 2, name: "エハラマサヒロ", totalScore: "-", profile: "3年連続の決勝。驚異の実力者だがまたしても優勝に届かず。" },
      { rank: 3, name: "なだぎ武", totalScore: "-", profile: "V3を目指してのエントリー。圧倒的な演技力。" },
      { rank: 4, name: "COWCOW山田與志", totalScore: "-", profile: "テニスの得点係の進化版。「～という…」。" },
      { rank: 5, name: "川島明", totalScore: "-", profile: "麒麟の川島が超低音ボイスを活かしたフリップ芸で初進出。" },
      { rank: 6, name: "陣内智則", totalScore: "-", profile: "3年ぶり4度目の出場。" },
      { rank: 7, name: "バカリズム", totalScore: "-", profile: "5度目の出場。" },
      { rank: 8, name: "いとうあさこ", totalScore: "-", profile: "「浅倉南の39歳」で大ブレイク真っ只中。" }
    ]
  },
  {
    year: 2015, edition: 13, entryCount: 3751,
    judges: ["桂文枝", "関根勤", "天野ひろゆき", "勝俣州和", "木村祐一"],
    results: [
      { rank: 1, name: "じゅんいちダビッドソン", totalScore: "12票", profile: "「本田圭佑の無回転な回答」など、全編を本田圭佑のモノマネと強心臓で押し切り悲願の王者。" },
      { rank: 2, name: "マツモトクラブ", totalScore: "6票", profile: "敗者復活から勝ち上がり、録音した音声と会話する緻密なコントで大躍進。" },
      { rank: 3, name: "ゆりやんレトリィバァ", totalScore: "1票", profile: "デビュー2年目にして大抜擢。英語交じりの強烈なキャラクターで衝撃デビュー。" },
      { rank: 4, name: "やまもとまさみ", totalScore: "1回戦敗退", profile: "前年(2014)王者。" },
      { rank: 4, name: "アジアン馬場園", totalScore: "1回戦敗退", profile: "コンビからの参戦。" },
      { rank: 4, name: "NON STYLE石田", totalScore: "1回戦敗退", profile: "M-1王者のピン挑戦。" },
      { rank: 4, name: "とにかく明るい安村", totalScore: "1回戦敗退", profile: "「安心してください、穿いてますよ」で社会現象真っ只中。" },
      { rank: 4, name: "厚切りジェイソン", totalScore: "1回戦敗退", profile: "IT企業役員ながら「Why Japanese people!?」の絶叫で大ブレイク。" }
    ]
  },
  {
    year: 2016, edition: 14, entryCount: 3786,
    judges: ["桂文枝", "関根勤", "清水ミチコ", "ヒロミ", "板尾創路"],
    results: [
      { rank: 1, name: "ハリウッドザコシショウ", totalScore: "15票(満票)", profile: "「誇張しすぎたモノマネ」を連発する怒涛の暴走芸で、審査員含む会場全体をカオスと爆笑の渦に巻き込み、なんと満票での完全優勝。" },
      { rank: 2, name: "小島よしお", totalScore: "0票", profile: "「マリオネット」などのコントで「オッパッピー」から進化した姿を見せるも決勝でザコシショウの暴風雨に飲み込まれる。" },
      { rank: 3, name: "ゆりやんレトリィバァ", totalScore: "0票", profile: "2年連続のファイナリスト。" },
      { rank: 4, name: "エハラマサヒロ", totalScore: "1回戦敗退", profile: "久々の登場。" },
      { rank: 4, name: "とにかく明るい安村", totalScore: "1回戦败退", profile: "2年連続。" },
      { rank: 4, name: "厚切りジェイソン", totalScore: "1回戦敗退", profile: "2年連続。" },
      { rank: 4, name: "マツモトクラブ", totalScore: "1回戦敗退", profile: "2年連続。" },
      { rank: 4, name: "おいでやす小田", totalScore: "1回戦敗退", profile: "大声ツッコミによる一人コント。ここから毎年のように決勝へ上がる。" }
    ]
  },
  {
    year: 2017, edition: 15, entryCount: 3792,
    judges: ["桂文枝", "関根勤", "清水ミチコ", "ヒロミ", "板尾創路"],
    results: [
      { rank: 1, name: "アキラ100%", totalScore: "12票", profile: "お盆一つで股間を隠し通す「絶対見せない」パフォーマンスで、芸そのもののバカバカしさとスリルで圧倒的優勝。" },
      { rank: 2, name: "サンシャイン池崎", totalScore: "3票", profile: "「空前絶後のォ！」の絶叫とハイテンションで会場を我が物にし、大ブレイクを決定づけた。" },
      { rank: 3, name: "石出奈々子", totalScore: "0票", profile: "「ジブリ映画にいそうな女の子」というマニアックな形態模写で最終決戦に進出。" },
      { rank: 4, name: "ゆりやんレトリィバァ", totalScore: "1回戦敗退", profile: "3年連続。" },
      { rank: 4, name: "おいでやす小田", totalScore: "1回戦敗退", profile: "2年連続。" },
      { rank: 4, name: "レイザーラモンRG", totalScore: "1回戦敗退", profile: "「あるある」を封印しドナルド・トランプのモノマネで進出。" },
      { rank: 4, name: "横澤夏子", totalScore: "1回戦敗退", profile: "女性あるあるの一人コントの第一人者。" },
      { rank: 4, name: "マツモトクラブ", totalScore: "1回戦敗退", profile: "3年連続。" }
    ]
  },
  {
    year: 2018, edition: 16, entryCount: 3795,
    judges: ["桂文枝", "関根勤", "久本雅美", "陣内智則", "友近"],
    results: [
      { rank: 1, name: "濱田祐太郎", totalScore: "11票", profile: "「盲目」であることを逆手に取った、明るく毒のある見事な漫談で優勝。誰も不幸にしない笑いで日本中を魅了した。" },
      { rank: 2, name: "ゆりやんレトリィバァ", totalScore: "4票", profile: "「ドラえもん」の手抜きキャラなどのナンセンスで4年連続決勝、惜しくも準優勝。" },
      { rank: 3, name: "おいでやす小田", totalScore: "0票", profile: "3年連続の決勝。大声ツッコミが完成形に近づき初の最終決戦進出。" },
      { rank: 4, name: "マツモトクラブ", totalScore: "1回戦敗退", profile: "4年連続決勝進出という快挙。" },
      { rank: 4, name: "霜降り明星 粗品", totalScore: "1回戦敗退", profile: "パジャマ姿でフリップにツッコむ独自のスタイル。" },
      { rank: 4, name: "霜降り明星 せいや", totalScore: "1回戦敗退", profile: "コンビ揃ってR-1決勝進出を果たし、同年末のM-1優勝への布石となった。" },
      { rank: 4, name: "ルシファー吉岡", totalScore: "1回戦敗退", profile: "下ネタすれすれのエロティックなワードセンスを操るコント師。" },
      { rank: 4, name: "カニササレアヤコ", totalScore: "1回戦敗退", profile: "雅楽の楽器「笙」をリアルに演奏しながらのシュールなフリップ芸。" }
    ]
  },
  {
    year: 2019, edition: 17, entryCount: 2542,
    judges: ["桂文枝", "関根勤", "久本雅美", "陣内智則", "友近", "渡辺正行"],
    results: [
      { rank: 1, name: "霜降り明星 粗品", totalScore: "6票", profile: "前年末のM-1優勝からわずか3ヶ月、R-1も制覇。「史上初のM-1・R-1二冠」という歴史的偉業を達成。" },
      { rank: 2, name: "セルライトスパ大須賀", totalScore: "5票", profile: "独特な間とローテンションから放たれるキラーフレーズで準優勝。" },
      { rank: 3, name: "だーりんず松本りんす", totalScore: "4票", profile: "「カツラ」を使った一人コントで大健闘。" },
      { rank: 4, name: "おいでやす小田", totalScore: "1回戦敗退", profile: "4年連続。" },
      { rank: 4, name: "ルシファー吉岡", totalScore: "1回戦敗退", profile: "2年連続。" },
      { rank: 4, name: "こがけん", totalScore: "1回戦敗退", profile: "ハリウッド映画のモノマネと圧倒的歌唱力。のちにおいでやす小田とコンビを組む。" },
      { rank: 4, name: "三浦マイルド", totalScore: "1回戦敗退", profile: "2013年王者としての帰還。" },
      { rank: 4, name: "河邑ミク", totalScore: "1回戦敗退", profile: "リアルな女性を描く松竹の若手ピン芸人。" }
    ]
  },
  {
    year: 2020, edition: 18, entryCount: 2532,
    judges: ["桂文枝", "関根勤", "久本雅美", "陣内智則", "友近", "勝俣州和"],
    results: [
      { rank: 1, name: "マヂカルラブリー野田クリスタル", totalScore: "9票", profile: "お手製の「クソゲー」（もも鉄など）をプレイしながら実況ツッコミを入れる新時代のゲーム実況芸で優勝。同年にM-1も制覇し二冠達成。" },
      { rank: 2, name: "大谷健太", totalScore: "5票", profile: "敗者復活枠。「早口言葉」のフリップ芸で爆発的にウケた。" },
      { rank: 3, name: "すゑひろがりず南條", totalScore: "4票", profile: "伝統芸能風の語り口での一人コント。M-1ファイナリストとしての実力を証明。" },
      { rank: 4, name: "おいでやす小田", totalScore: "1回戦敗退", profile: "5年連続出場。" },
      { rank: 4, name: "ルシファー吉岡", totalScore: "1回戦敗退", profile: "3年連続出場。" },
      { rank: 4, name: "ななまがり森下", totalScore: "1回戦敗退", profile: "「乳首を隠す男」など狂気のコント。" },
      { rank: 4, name: "パーパーほしのディスコ", totalScore: "1回戦敗退", profile: "悲壮感漂う一人コント。" },
      { rank: 4, name: "SAKURAI", totalScore: "1回戦敗退", profile: "ギター一本での歌ネタ。「伝わりますか？」" }
    ]
  },
  {
    year: 2021, edition: 19, entryCount: 2746,
    judges: ["陣内智則", "バカリズム", "川島明", "野田クリスタル", "ハリウッドザコシショウ"],
    results: [
      { rank: 1, name: "ゆりやんレトリィバァ", totalScore: 666, profile: "「芸歴10年以内」の出場制限ルールになった最初の大会。「スヌーピー」や強烈な世界観で、念願の悲願達成となる初優勝。" },
      { rank: 2, name: "ZAZY", totalScore: 656, profile: "「なんそれ！」のフレーズとデジタルフリップを駆使し、紙芝居の可能性を広げた狂気のショー。" },
      { rank: 3, name: "かが屋 賀屋", totalScore: 647, profile: "相方の休養中に単独で出場し、リコーダーを使った緻密な演技で最終決戦へ。" },
      { rank: 4, name: "高田ぽる子", totalScore: 646, profile: "独特のメルヘンな世界観とリコーダー。" },
      { rank: 5, name: "森本サイダー", totalScore: 640, profile: "「不審者」の自虐ネタ。" },
      { rank: 6, name: "吉住", totalScore: 639, profile: "前年のTHE W覇者としての参戦。" },
      { rank: 7, name: "kento fukaya", totalScore: 638, profile: "巨大なフリップ（人物相関図など）を使用した関西の若手。" },
      { rank: 8, name: "土屋", totalScore: 638, profile: "独特の間を持った一人コント。" },
      { rank: 9, name: "寺田寛明", totalScore: 633, profile: "大喜利の強さを活かしたフリップ芸「国語の授業」。" }
    ]
  },
  {
    year: 2022, edition: 20, entryCount: 3199,
    judges: ["陣内智則", "バカリズム", "小籔千豊", "野田クリスタル", "ハリウッドザコシショウ"],
    results: [
      { rank: 1, name: "お見送り芸人しんいち", totalScore: "3票", profile: "ギター一本で「僕の好きなもの（毒舌）」を歌い上げ、ZAZYとの接戦を制し優勝。" },
      { rank: 2, name: "ZAZY", totalScore: "2票", profile: "2年連続の最終決戦。さらに進化したデジタル紙芝居を見せるも、わずか1票差で破れる。" },
      { rank: 3, name: "吉住", totalScore: 463, profile: "「デモ」の一人コント等で圧倒的な芝居力を見せつけた。" },
      { rank: 4, name: "金の国 渡部おにぎり", totalScore: 463, profile: "「駅のホーム」での温かい一人コント。" },
      { rank: 5, name: "サツマカワRPG", totalScore: 459, profile: "「大会」のショートコント連発。" },
      { rank: 6, name: "寺田寛明", totalScore: 453, profile: "2年連続。「単語テスト」のフリップ。" },
      { rank: 7, name: "kento fukaya", totalScore: 451, profile: "2年連続。" },
      { rank: 8, name: "陣内智則(代役出場)", totalScore: "特例", profile: "※辞退者発生に伴うエキシビションまたは別枠など（特記事項なしなら無視）" }
    ]
  },
  {
    year: 2023, edition: 21, entryCount: 3537,
    judges: ["陣内智則", "バカリズム", "小籔千豊", "野田クリスタル", "ハリウッドザコシショウ"],
    results: [
      { rank: 1, name: "田津原理音", totalScore: 470, profile: "デジタルフリップとバインダーのカードを連動させる新しいスタイルの自撮りツッコミで、大会のダークホースとして優勝。" },
      { rank: 2, name: "コットン きょん", totalScore: 468, profile: "「警官」「ダンス」など圧倒的な演技力と愛嬌で魅了。" },
      { rank: 3, name: "サツマカワRPG", totalScore: 468, profile: "2年連続出場。「大会」ネタから進化。" },
      { rank: 4, name: "寺田寛明", totalScore: 464, profile: "3年連続出場。「英語のテスト」。" },
      { rank: 5, name: "こたけ正義感", totalScore: 462, profile: "現役弁護士ならではの「法律の不条理」へのツッコミフリップ。" },
      { rank: 6, name: "カベポスター 永見", totalScore: 460, profile: "「世界で一人は言ってる一言」。" },
      { rank: 7, name: "Yes!アキト", totalScore: 456, profile: "怒涛の一発ギャグ100連発。" },
      { rank: 8, name: "ラパルフェ 都留", totalScore: 451, profile: "阿部寛のモノマネとフリップの悪魔合体。" }
    ]
  },
  {
    year: 2024, edition: 22, entryCount: 5457,
    judges: ["陣内智則", "バカリズム", "小籔千豊", "野田クリスタル", "ハリウッドザコシショウ"],
    results: [
      { rank: 1, name: "街裏ぴんく", totalScore: "3票", profile: "「芸歴制限10年」の撤廃により復活したベテラン漫談家。「石川啄木」等の荒唐無稽なウソ漫談を熱量で語り切り、20年目の大輪の花を咲かせた。" },
      { rank: 2, name: "吉住", totalScore: "2票", profile: "最高峰の一人コント「デモ」「鑑識」で爆笑を取り1stステージ3位から最終決戦へ。優勝までわずか1票差。" },
      { rank: 3, name: "ルシファー吉岡", totalScore: "0票", profile: "長年の中堅コント師が制限撤廃で帰還し、1stステージを1位通過する圧倒的パワーを見せつけた。" },
      { rank: 4, name: "真輝志", totalScore: 458, profile: "初登場。精巧な一人コント。" },
      { rank: 5, name: "どくさいスイッチ企画", totalScore: 458, profile: "アマチュアとして初の決勝進出の快挙。「ツチノコ」のコント。" },
      { rank: 6, name: "サツマカワRPG", totalScore: 457, profile: "3年連続決勝。「防犯」のコント。" },
      { rank: 7, name: "寺田寛明", totalScore: 455, profile: "4年連続決勝。大喜利職人の意地。" },
      { rank: 8, name: "kento fukaya", totalScore: 452, profile: "巨大フリップ。" },
      { rank: 9, name: "トンツカタンお抹茶", totalScore: 448, profile: "謎の「かりんとう車」の音楽ネタ。" }
    ]
  },
  {
    year: 2025, edition: 23, entryCount: 5511,
    judges: ["陣内智則", "バカリズム", "友近", "小籔千豊", "野田クリスタル", "佐久間一行", "ハリウッドザコシショウ"],
    results: [
      { rank: 1, name: "友田オレ", totalScore: 662, profile: "「現役早大生」という新星が、過去最多5511組の頂点に。独特のワードセンスと音を連動させたパフォーマンスで第23代王者に輝く。" },
      { rank: 2, name: "ハギノリザードマン", totalScore: 655, profile: "唯一無二の小道具とアイデアで爆笑をさらい準優勝。ブレイクへの切符を掴んだ。" },
      { rank: 3, name: "田津原理音", totalScore: 654, profile: "2023年王者が再挑戦。カードバインダーネタのさらなる進化系を披露して3位入賞の貫禄を見せた。" },
      { rank: 4, name: "ルシファー吉岡", totalScore: 651, profile: "前年に続く登場。「怪しいおじさん」のコント職人として安定の高評価を獲得。" },
      { rank: 5, name: "チャンス大城", totalScore: 650, profile: "地下芸人のレジェンドが遂にR-1決勝へ登り詰めた。特異な人生経験に基づく漫談。" },
      { rank: 6, name: "マツモトクラブ", totalScore: 647, profile: "かつての常連が制限撤廃により帰還。録音との会話コントの極致を見せた。" },
      { rank: 7, name: "吉住", totalScore: 641, profile: "前年の準優勝者。女性の情念や狂気を演じさせれば右に出る者なし。" },
      { rank: 8, name: "さや香 新山", totalScore: 639, profile: "M-1でも爪痕を残した漫才師がピンで登場。熱血プレゼン風の漫談。" },
      { rank: 9, name: "ヒロ・オクムラ", totalScore: 631, profile: "無名ながら決勝に食い込んだダークホース。独特の間のコント。" }
    ]
  }
];
