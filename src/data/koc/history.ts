export interface KocHistoricalYear {
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

export const kocHistoryData: KocHistoricalYear[] = [
  {
    year: 2008, edition: 1, entryCount: 3216,
    judges: ["出場芸人（準決勝敗退者）による記名投票という特殊ルール"],
    results: [
      { rank: 1, name: "バッファロー吾郎", totalScore: "5票", profile: "初回大会の王者。Aリーグを勝ち抜き、長年のキャリアと「オメガの男」などのネタで優勝。" },
      { rank: 2, name: "バナナマン", totalScore: "2票", profile: "Bリーグ勝者。「朝礼」などの完成されたコントを見せるも、芸人審査員からの票が伸びず準優勝。" },
      { rank: 3, name: "ロバート", totalScore: 473, profile: "「トゥトゥトゥサークル」で会場を盛り上げた。Aリーグ2位。" },
      { rank: 4, name: "天竺鼠", totalScore: 461, profile: "「食堂」のネタなど、独自の世界観で衝撃を与えたAリーグ3位。" },
      { rank: 5, name: "TKO", totalScore: 457, profile: "「葬式」のネタ。Bリーグ2位で意地を見せた。" },
      { rank: 6, name: "チョコレートプラネット", totalScore: 432, profile: "結成わずかで決勝進出。Bリーグ3位。" },
      { rank: 7, name: "ザ・ギース", totalScore: 400, profile: "「卒業生」のエレガントなコント。Bリーグ4位。" },
      { rank: 8, name: "2700", totalScore: 327, profile: "結成8ヶ月。独特のリズムネタ。Aリーグ4位。" }
    ]
  },
  {
    year: 2009, edition: 2, entryCount: 2584,
    judges: ["芸人審査員100人（準決勝進出者）"],
    results: [
      { rank: 1, name: "東京03", totalScore: 1838, profile: "日常の微妙な人間関係を切り取る「コンビニ」や「旅行」のネタで圧倒的な大差をつけ完全優勝。" },
      { rank: 2, name: "サンドウィッチマン", totalScore: 1743, profile: "M-1との2冠を目指し「ハンバーガーショップ」「美容室」のネタで健闘。" },
      { rank: 3, name: "しずる", totalScore: 1651, profile: "「冥土の土産」の青春コントで爪痕を残す。" },
      { rank: 4, name: "インパルス", totalScore: 1635, profile: "「取り調べ」で熟練の技術を見せた。" },
      { rank: 5, name: "モンスターエンジン", totalScore: 1626, profile: "「神々の遊び」以外のコントでも実力を見せつけた。" },
      { rank: 6, name: "ロッチ", totalScore: 1611, profile: "「万引き」のコントで中岡のキャラクターがブレイク。" },
      { rank: 7, name: "天竺鼠", totalScore: 1550, profile: "2年連続の決勝。" },
      { rank: 8, name: "ジャルジャル", totalScore: 1539, profile: "「しりとり」で独特のテンポを作り出す。" }
    ]
  },
  {
    year: 2010, edition: 3, entryCount: 3023,
    judges: ["芸人審査員100人（準決勝進出者）"],
    results: [
      { rank: 1, name: "キングオブコメディ", totalScore: 1836, profile: "「誘拐」「教習所」で今野のキャラクターと高橋のボヤキツッコミがいかんなく発揮され優勝。" },
      { rank: 2, name: "ピース", totalScore: 1769, profile: "「男爵と化け物」など独特の世界観でM-1・KOCダブルファイナリストの原動力に。" },
      { rank: 3, name: "TKO", totalScore: 1736, profile: "2回目の決勝。「ディナーショー」での熟練の演技。" },
      { rank: 4, name: "ジャルジャル", totalScore: 1727, profile: "2年連続。「おばはん」ネタ。" },
      { rank: 5, name: "ラバーガール", totalScore: 1694, profile: "淡々とした無表情での掛け合いコント。" },
      { rank: 6, name: "しずる", totalScore: 1670, profile: "2年連続出場。" },
      { rank: 7, name: "ロッチ", totalScore: 1607, profile: "2年連続出場。" },
      { rank: 8, name: "エレキコミック", totalScore: 1502, profile: "歴史あるコンビの念願の決勝。" }
    ]
  },
  {
    year: 2011, edition: 4, entryCount: 3026,
    judges: ["芸人審査員100人（準決勝進出者）"],
    results: [
      { rank: 1, name: "ロバート", totalScore: 1876, profile: "「忍者ショー」「自動車修理工場」など秋山の特異なキャラが大爆発。圧倒的な面白さで優勝。" },
      { rank: 2, name: "2700", totalScore: 1809, profile: "「右ひじ左ひじ交互に見て」で日本中にリズムネタ旋風を巻き起こす。" },
      { rank: 3, name: "モンスターエンジン", totalScore: 1762, profile: "初の最終決戦進出。" },
      { rank: 4, name: "インパルス", totalScore: 1696, profile: "2年ぶり2度目の決勝。" },
      { rank: 5, name: "鬼ヶ島", totalScore: 1679, profile: "独特のカルト的な狂気を含むトリオコント。" },
      { rank: 6, name: "TKO", totalScore: 1634, profile: "3度目の決勝出場。" },
      { rank: 7, name: "ラブレターズ", totalScore: 1588, profile: "西岡中学校の校歌ネタで鮮烈デビューの初出場。" },
      { rank: 8, name: "トップリード", totalScore: 1515, profile: "実力派コント師が念願の決勝。" }
    ]
  },
  {
    year: 2012, edition: 5, entryCount: 2971,
    judges: ["芸人審査員100人（準決勝進出者）"],
    results: [
      { rank: 1, name: "バイきんぐ", totalScore: 1941, profile: "「なんて日だ！」の強烈なツッコミで小峠が覚醒。歴代最高得点(1941)という圧倒的スコアで優勝。" },
      { rank: 2, name: "さらば青春の光", totalScore: 1807, profile: "「ぼったくりバー」などの秀逸な設定でここから史上最多決勝進出記録が幕を開ける。" },
      { rank: 3, name: "かもめんたる", totalScore: 1790, profile: "狂気を孕んだ世界観で初出場。" },
      { rank: 4, name: "しずる", totalScore: 1788, profile: "3度目の出場。" },
      { rank: 5, name: "うしろシティ", totalScore: 1736, profile: "スマートな構成のコント。" },
      { rank: 6, name: "夜ふかしの会", totalScore: 1708, profile: "5人組のコント劇団。" },
      { rank: 7, name: "銀シャリ", totalScore: 1686, profile: "漫才師ながらコントでも決勝進出の快挙。" },
      { rank: 8, name: "トップリード", totalScore: 1594, profile: "2年連続出場。" }
    ]
  },
  {
    year: 2013, edition: 6, entryCount: 2988,
    judges: ["芸人審査員100人（準決勝進出者）"],
    results: [
      { rank: 1, name: "かもめんたる", totalScore: 1925, profile: "「言葉の路上販売」「白い靴下」など、岩崎う大の狂気的な脚本と槙尾の怪演が光り優勝。" },
      { rank: 2, name: "鬼ヶ島", totalScore: 1901, profile: "「フィギュア」などで彼ららしいファンタジーと狂乱のコントを見せた。" },
      { rank: 3, name: "天竺鼠", totalScore: 1827, profile: "「寿司」のネタなど強烈なナンセンス。" },
      { rank: 4, name: "さらば青春の光", totalScore: 1746, profile: "2年連続。個人事務所を立ち上げ激動の中で出場。" },
      { rank: 5, name: "TKO", totalScore: 1704, profile: "4度目の出場。" },
      { rank: 6, name: "ジグザグジギー", totalScore: 1644, profile: "初出場。「狼男」などのシステムコント。" },
      { rank: 7, name: "アルコ＆ピース", totalScore: 1643, profile: "「受精」のネタで強烈なインパクト。" },
      { rank: 8, name: "うしろシティ", totalScore: 1584, profile: "2年連続出場。" }
    ]
  },
  {
    year: 2014, edition: 7, entryCount: 2810,
    judges: ["芸人審査員100人（準決勝敗退者）"],
    results: [
      { rank: 1, name: "シソンヌ", totalScore: "74票", profile: "1対1の対戦形式だった大会で、「ラーメン屋」「タクシー」の圧倒的な演技力と人間描写で優勝。" },
      { rank: 2, name: "チョコレートプラネット", totalScore: "27票", profile: "「ポテトチップス」などを披露するも、同期シソンヌとの直接対決で破れる。" },
      { rank: 3, name: "バンビーノ", totalScore: "1戦目敗退", profile: "「ダンソン」で社会現象になった初出場。" },
      { rank: 3, name: "犬の心", totalScore: "1戦目敗退", profile: "結成17年目、悲願の決勝進出。" },
      { rank: 3, name: "ラバーガール", totalScore: "1戦目敗退", profile: "4年ぶり2回目の決勝。" },
      { rank: 3, name: "巨匠", totalScore: "1戦目敗退", profile: "おじさんを作るおじさんという強烈な設定。" },
      { rank: 3, name: "アキナ", totalScore: "1戦目敗退", profile: "「鳥」などの不穏なコント。" },
      { rank: 3, name: "さらば青春の光", totalScore: "1戦目敗退", profile: "3年連続出場。" },
      { rank: 3, name: "リンゴスター", totalScore: "1戦目敗退", profile: "人力舎の若手トリオ。初出場。" },
      { rank: 3, name: "ラブレターズ", totalScore: "1戦目敗退", profile: "3年ぶりの出場。" }
    ]
  },
  {
    year: 2015, edition: 8, entryCount: 2455,
    judges: ["松本人志", "さまぁ〜ず（大竹・三村）", "バナナマン（設楽・日村）"],
    results: [
      { rank: 1, name: "コロコロチキチキペッパーズ", totalScore: 933, profile: "「妖精」「卓球」など、奇抜な設定と声、音楽を見事に融合させて初出場で優勝。" },
      { rank: 2, name: "バンビーノ", totalScore: 926, profile: "ダンソンの呪縛を抜け、コント師としての実力を証明し2位躍進。" },
      { rank: 3, name: "ロッチ", totalScore: 907, profile: "1本目の「試着室」で大会最高得点を記録し完全優勝の風格を見せるも、2本目で失速する伝説。" },
      { rank: 4, name: "ジャングルポケット", totalScore: 896, profile: "斉藤の熱量高い演技で初出場。最終決戦進出。" },
      { rank: 5, name: "藤崎マーケット", totalScore: 893, profile: "ラララライから一転、本格コントで決勝に進出。" },
      { rank: 6, name: "アキナ", totalScore: 437, profile: "2年連続。" },
      { rank: 7, name: "ザ・ギース", totalScore: 428, profile: "第1回大会以来の復活。" },
      { rank: 8, name: "巨匠", totalScore: 428, profile: "2年連続。" },
      { rank: 9, name: "うしろシティ", totalScore: 424, profile: "3度目の出場。" },
      { rank: 10, name: "さらば青春の光", totalScore: 419, profile: "4年連続決勝進出するもまさかの最下位。" }
    ]
  },
  {
    year: 2016, edition: 9, entryCount: 2510,
    judges: ["松本人志", "さまぁ〜ず（大竹・三村）", "バナナマン（設楽・日村）"],
    results: [
      { rank: 1, name: "ライス", totalScore: 936, profile: "「命乞い（勘弁してくれ〜い）」で大爆笑を獲得。結成13年目でついに日の目を浴び優勝。" },
      { rank: 2, name: "ジャングルポケット", totalScore: 930, profile: "2年連続の最終決戦進出も、わずか6点差で惜敗。" },
      { rank: 3, name: "かまいたち", totalScore: 914, profile: "「監禁」などのコントで関東にも実力を轟かせた。" },
      { rank: 4, name: "タイムマシーン3号", totalScore: 893, profile: "漫才の実力者がKOCでも最終決戦へ。" },
      { rank: 5, name: "かもめんたる", totalScore: 883, profile: "王者としての帰還。" },
      { rank: 6, name: "しずる", totalScore: 443, profile: "4年ぶりの出場。" },
      { rank: 7, name: "だーりんず", totalScore: 431, profile: "SMAのおじさんコンビが念願の決勝。" },
      { rank: 8, name: "ななまがり", totalScore: 430, profile: "「ナスD落とし」で初出場。" },
      { rank: 9, name: "ラブレターズ", totalScore: 424, profile: "「野球拳」で会場を揺らした。" },
      { rank: 10, name: "ジグザグジギー", totalScore: 419, profile: "2度目の決勝。" }
    ]
  },
  {
    year: 2017, edition: 10, entryCount: 2477,
    judges: ["松本人志", "さまぁ〜ず（大竹・三村）", "バナナマン（設楽・日村）"],
    results: [
      { rank: 1, name: "かまいたち", totalScore: 942, profile: "「告白の練習」「ウエットスーツ」で見事なロジックと狂気を見せ完全優勝。後にM-1でも伝説を作る。" },
      { rank: 2, name: "にゃんこスター", totalScore: 928, profile: "「縄跳び」の特大リズムネタで史上最大の下剋上を起こし日本中を巻き込む。" },
      { rank: 3, name: "さらば青春の光", totalScore: 922, profile: "「居酒屋」などで確かな力量を見せ、悲願の優勝まであと一歩。" },
      { rank: 4, name: "ジャングルポケット", totalScore: 910, profile: "3年連続決勝、またも最終決戦へ。" },
      { rank: 5, name: "アンガールズ", totalScore: 904, profile: "ベテランの意地を見せ初出場ながら最終決戦へ。" },
      { rank: 6, name: "わらふぢなるお", totalScore: 434, profile: "初出場。" },
      { rank: 7, name: "アキナ", totalScore: 432, profile: "3度目の出場。" },
      { rank: 8, name: "ゾフィー", totalScore: 422, profile: "初登場。「母さんのメシ」で物議を醸す。" },
      { rank: 9, name: "パーパー", totalScore: 421, profile: "マセキの若手男女コンビ初出場。" },
      { rank: 10, name: "GAG少年楽団", totalScore: 419, profile: "大阪の実力派トリオが念願の初決勝。" }
    ]
  },
  {
    year: 2018, edition: 11, entryCount: 2490,
    judges: ["松本人志", "さまぁ〜ず（大竹・三村）", "バナナマン（設楽・日村）"],
    results: [
      { rank: 1, name: "ハナコ", totalScore: 936, profile: "結成4年目の若きトリオが「犬」のネタ等で圧倒的な表現力を見せ、お笑い第7世代ブームの火付け役に。" },
      { rank: 2, name: "わらふぢなるお", totalScore: 922, profile: "「空沼からの質問」などで独自のシステムコントを開花。" },
      { rank: 3, name: "チョコレートプラネット", totalScore: 918, profile: "「密室」で1本目最高得点通過するも、2本目の「大工」でまさかの失速。" },
      { rank: 4, name: "さらば青春の光", totalScore: 463, profile: "前人未到の6度目にして「ラストイヤー」を宣言して挑んだ大会。" },
      { rank: 5, name: "ロビンフット", totalScore: 462, profile: "SMAのベテランコンビ。初登場にして高度な掛け合いを見せた。" },
      { rank: 6, name: "ザ・ギース", totalScore: 458, profile: "サイコメトラーのネタ。" },
      { rank: 6, name: "マヂカルラブリー", totalScore: 458, profile: "「傘」の狂気コント。M-1でもKOCでもファイナリストに。" },
      { rank: 8, name: "だーりんず", totalScore: 437, profile: "2年ぶりの出場。" },
      { rank: 8, name: "GAG", totalScore: 437, profile: "前行っていた「少年楽団」を外し2年連続。" },
      { rank: 10, name: "やさしいズ", totalScore: 419, profile: "トップバッターでヤンキーと優しい人のコント。" }
    ]
  },
  {
    year: 2019, edition: 12, entryCount: 2413,
    judges: ["松本人志", "さまぁ〜ず（大竹・三村）", "バナナマン（設楽・日村）"],
    results: [
      { rank: 1, name: "どぶろっく", totalScore: 935, profile: "「大きなイチモツをください」という前代未聞のミュージカルコントで日本中を爆笑の渦に巻き込み圧倒的優勝。" },
      { rank: 2, name: "うるとらブギーズ", totalScore: 925, profile: "「催眠術」「実況」など緻密な演技力でダークホースから準優勝へ躍進。" },
      { rank: 3, name: "ジャルジャル", totalScore: 905, profile: "「空き巣」ネタで念願の最終決戦進出を果たす。" },
      { rank: 4, name: "GAG", totalScore: 457, profile: "3年連続。「幼馴染」コント。" },
      { rank: 5, name: "ゾフィー", totalScore: 452, profile: "「腹話術人形のふくちゃん」。" },
      { rank: 6, name: "ネルソンズ", totalScore: 446, profile: "初出場。和田まんじゅうのキャラクターと高い演技力。" },
      { rank: 7, name: "ビスケットブラザーズ", totalScore: 446, profile: "初出場。「野犬」の世界観。" },
      { rank: 8, name: "かが屋", totalScore: 446, profile: "「花束」のリアルすぎる日常コントで天才の片鱗を見せた。" },
      { rank: 9, name: "空気階段", totalScore: 438, profile: "借金とタクシーの強烈なコントで初登場。" },
      { rank: 10, name: "わらふぢなるお", totalScore: 438, profile: "3年連続出場。" }
    ]
  },
  {
    year: 2020, edition: 13, entryCount: 1707,
    judges: ["松本人志", "さまぁ〜ず（大竹・三村）", "バナナマン（設楽・日村）"],
    results: [
      { rank: 1, name: "ジャルジャル", totalScore: 941, profile: "「野次ワクチン」「空き巣」といったシステムコントの極致を見せ、結成17年にして悲願の完全優勝。" },
      { rank: 2, name: "ニューヨーク", totalScore: 924, profile: "「結婚式」「ヤクザ」の偏見に満ちたコントで準優勝。M-1に続いて完全に流れを掴む。" },
      { rank: 3, name: "空気階段", totalScore: 921, profile: "「霊媒師」「定時制高校」で人間味溢れる狂気を演じ最終決戦進出。" },
      { rank: 4, name: "ザ・ギース", totalScore: 457, profile: "「ハープ」を使用した大ネタで健闘。" },
      { rank: 5, name: "ニッポンの社長", totalScore: 454, profile: "「ケンタウロス」という強烈な設定と思い切りの良さで初登場。" },
      { rank: 6, name: "ジャングルポケット", totalScore: 454, profile: "ベテランの安定感を見せた。" },
      { rank: 7, name: "ロングコートダディ", totalScore: 446, profile: "初出場。「段ボール引き」の独自の世界。" },
      { rank: 8, name: "滝音", totalScore: 445, profile: "「大食い」ネタで独自のワードセンス(ベイビーワード)を披露。" },
      { rank: 9, name: "GAG", totalScore: 445, profile: "4年連続出場。「フルート」ネタ。" },
      { rank: 10, name: "うるとらブギーズ", totalScore: 440, profile: "2年連続。陶芸家のネタ。" }
    ]
  },
  {
    year: 2021, edition: 14, entryCount: 3015,
    judges: ["松本人志", "飯塚悟志", "小峠英二", "秋山竜次", "山内健司"],
    results: [
      { rank: 1, name: "空気階段", totalScore: 960, profile: "1st「SMクラブの火事」で歴代最高点486点を叩き出し、2ndの「メガトンパンチマンカフェ」で歴代最高合計点(960点)の伝説的優勝。" },
      { rank: 2, name: "ザ・マミィ", totalScore: 926, profile: "おじさんとミュージカルのコントで初進出にして準優勝。" },
      { rank: 3, name: "男性ブランコ", totalScore: 925, profile: "「ボトルメール」「レジ袋」の独創的かつ上品な世界観で一気にブレイク。" },
      { rank: 4, name: "ニッポンの社長", totalScore: 463, profile: "「バッティングセンター」で強烈なインパクト。2年連続。" },
      { rank: 5, name: "ジェラードン", totalScore: 462, profile: "「角刈りの転校生」。初登場で会場を沸かせる。" },
      { rank: 6, name: "そいつどいつ", totalScore: 456, profile: "「パック」の設定。" },
      { rank: 7, name: "ニューヨーク", totalScore: 453, profile: "「ウェディングプランナー」。2年連続。" },
      { rank: 8, name: "蛙亭", totalScore: 453, profile: "「ホムンクルス」。イワクラの奇抜な発想力。" },
      { rank: 9, name: "うるとらブギーズ", totalScore: 448, profile: "3年連続出場。「アナウンサー」ネタ。" },
      { rank: 10, name: "マヂカルラブリー", totalScore: 445, profile: "「こっくりさん」。M-1王者の帰還。" }
    ]
  },
  {
    year: 2022, edition: 15, entryCount: 3018,
    judges: ["松本人志", "飯塚悟志", "小峠英二", "秋山竜次", "山内健司"],
    results: [
      { rank: 1, name: "ビスケットブラザーズ", totalScore: 963, profile: "「野犬」「女性との出会い」という異質でパワフルな世界観で、空気階段の最高得点を塗り替える963点で完全優勝。" },
      { rank: 2, name: "コットン", totalScore: 944, profile: "「浮気」「タバコ」など、見事な演技力とドラマティックな展開で王道コントの頂点に肉薄した。" },
      { rank: 3, name: "や団", totalScore: 943, profile: "狂気をはらんだ「バーベキュー」「雨」のコントでSMA所属の職人トリオが才能を開花。" },
      { rank: 4, name: "ネルソンズ", totalScore: 466, profile: "「結婚式」での和田まんじゅうの奮闘。" },
      { rank: 5, name: "かが屋", totalScore: 463, profile: "復活のコント。SMクラブの設定。" },
      { rank: 6, name: "最高の人間", totalScore: 462, profile: "吉住と岡野陽一の即席ユニット。テーマパークのネタ。" },
      { rank: 7, name: "ロングコートダディ", totalScore: 461, profile: "「料理人」のコント。" },
      { rank: 8, name: "クロコップ", totalScore: 460, profile: "「あっちむいてホイ」の独自ゲームで大爆笑を起こした初登場。" },
      { rank: 9, name: "いぬ", totalScore: 459, profile: "キスを取り入れたフィジカルコント。" },
      { rank: 10, name: "ニッポンの社長", totalScore: 455, profile: "「エヴァンゲリオン風」のネタで攻めの姿勢。3年連続。" }
    ]
  },
  {
    year: 2023, edition: 16, entryCount: 3036,
    judges: ["松本人志", "飯塚悟志", "小峠英二", "秋山竜次", "山内健司"],
    results: [
      { rank: 1, name: "サルゴリラ", totalScore: 964, profile: "「マジック」「魚」という不可思議だが芯のあるコントで、最年長＆歴代最高得点(964点)を叩き出し優勝。パンサー結成以前からの苦労人がついに報われた。" },
      { rank: 2, name: "カゲヤマ", totalScore: 945, profile: "「料亭の襖」の衝撃的な見せ方と「検便」での狂気で、大会のダークホースとして会場を完全に支配した。" },
      { rank: 3, name: "ニッポンの社長", totalScore: 934, profile: "4年連続決勝でついに最終決戦進出。「空港の銃撃戦」などバカバカしさを極めた。" },
      { rank: 4, name: "ファイヤーサンダー", totalScore: 466, profile: "「モノマネ番組」の設定の緻密さで初進出ながら審査員から絶賛。" },
      { rank: 5, name: "や団", totalScore: 465, profile: "2年連続。「休憩中のバイト」のリアルな演技。" },
      { rank: 6, name: "ジグザグジギー", totalScore: 464, profile: "大喜利大会議のネタで独自色。7年ぶりの出場。" },
      { rank: 7, name: "ラブレターズ", totalScore: 464, profile: "隣人トラブルのネタ。7年ぶり。" },
      { rank: 8, name: "蛙亭", totalScore: 463, profile: "「寿司」のネタ。2年ぶり。" },
      { rank: 9, name: "隣人", totalScore: 460, profile: "「チンパンジーに落語」という難解だが美しい設定で初出場。" },
      { rank: 10, name: "ゼンモンキー", totalScore: 456, profile: "実力派若手トリオが初出場。" }
    ]
  },
  {
    year: 2024, edition: 17, entryCount: 3139,
    judges: ["飯塚悟志", "秋山竜次", "小峠英二", "山内健司", "じろう"],
    results: [
      { rank: 1, name: "ラブレターズ", totalScore: 947, profile: "過去4度の決勝経験、長年の苦労を経て「どんぐり」「釣り」など狂気と哀愁の詰まった不条理コントで見事17代目王者に輝く。" },
      { rank: 2, name: "ロングコートダディ", totalScore: 946, profile: "「花屋」「古代遺跡」など圧倒的センスを見せつけ1点差の準優勝。M-1/KOC双方の実力者。" },
      { rank: 3, name: "ファイヤーサンダー", totalScore: 945, profile: "「毒舌散歩」「野球」の精巧な伏線と裏切りで1stラウンドを1位通過するもわずかに運が及ばず。" },
      { rank: 4, name: "や団", totalScore: 474, profile: "3年連続決勝出場。狂気の人質コントで貫禄を見せた。" },
      { rank: 5, name: "シティホテル3号室", totalScore: 471, profile: "初出場。「テレビ通販」の巧みな構成力で高得点を獲得。" },
      { rank: 6, name: "ダンビラムーチョ", totalScore: 469, profile: "「四発太鼓」の独特のリズムとバカらしさで初進出ながら会場を沸かせる。" },
      { rank: 7, name: "ニッポンの社長", totalScore: 468, profile: "前人未到の5年連続決勝進出。「声のでかい野球部」など強烈な力技を見せた。" },
      { rank: 7, name: "cacao", totalScore: 468, profile: "驚異的なスピード感の「部活の着替え」コントで初登場にして鮮烈なインパクトを残す。同率7位。" },
      { rank: 9, name: "コットン", totalScore: 461, profile: "2年ぶりの出場。「人形劇」での演技力と演出力を見せつけた。" },
      { rank: 10, name: "隣人", totalScore: 458, profile: "「チンパンジー」の着ぐるみコントで2年連続の決勝舞台を飾った。" }
    ]
  },
  {
    year: 2025, edition: 18, entryCount: 3449,
    judges: ["飯塚悟志", "小峠英二", "秋山竜次", "山内健司", "じろう"],
    results: [
      { rank: 1, name: "ロングコートダディ", totalScore: "1位 (詳細不明)", profile: "前年の1点差での悔敗をバネに、1st/2ndともに1位の圧倒的な成績で悲願の第18代キング完全制覇を成し遂げた。" },
      { rank: 2, name: "や団", totalScore: "2位", profile: "1stラウンド2位（473点）。SMAが誇るコント職人が4年連続の決勝舞台でも至高の狂気を演じ切り準優勝。" },
      { rank: 3, name: "レインボー", totalScore: "3位", profile: "1stラウンド3位（464点）。男女のリアルな恋愛や日常を描き続けてきたコント師が念願の決勝＆最終決戦進出を果たした。" },
      { rank: 4, name: "青色1号", totalScore: 458, profile: "太田プロの実力派トリオがついに初登場。熱量高い演技と構成力で4位に食い込む。" },
      { rank: 5, name: "ファイヤーサンダー", totalScore: 457, profile: "3年連続出場。切れ味鋭い設定は今年も健在だったが惜しくも同率5位に留まる。" },
      { rank: 5, name: "しずる", totalScore: 457, profile: "なんと2016年以来、9年ぶりの決勝復帰。熟練のコント師の凄みを見せつけた同率5位。" },
      { rank: 7, name: "トム・ブラウン", totalScore: 451, profile: "M-1・KOCダブルファイナリストの称号を獲得。狂気度100%のコントは健在。" },
      { rank: 8, name: "うるとらブギーズ", totalScore: 448, profile: "2021年以来の決勝復帰。吉本コント師の職人芸で8位健闘。" },
      { rank: 9, name: "元祖いちごちゃん", totalScore: 447, profile: "オフィス北野出身の猟奇的かつアングラな空気を持つベテランが初進出の快挙。" },
      { rank: 10, name: "ベルナルド", totalScore: 445, profile: "無名ながらも激戦を勝ち抜き初出場を果たし、大きな爪痕を残した。" }
    ]
  }
];
