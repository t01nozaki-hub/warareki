export interface M1HistoricalYear {
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

export const m1HistoryData: M1HistoricalYear[] = [
  {
    year: 2001, edition: 1, entryCount: 1603,
    judges: ["島田紳助", "松本人志", "鴻上尚史", "西川きよし", "青島幸男", "秋元康", "春風亭小朝"],
    results: [
      { rank: 1, name: "中川家", totalScore: 829, profile: "吉本興業。初代王者。しゃべくり漫才の基本にして至高の兄弟漫才師。" },
      { rank: 2, name: "ハリガネロック", totalScore: 809, profile: "吉本興業。武闘派しゃべくり漫才で準優勝。現在は解散。" },
      { rank: 3, name: "アメリカザリガニ", totalScore: 796, profile: "松竹芸能。ハイトーンボイスのツッコミが特徴。" },
      { rank: 4, name: "ますだおかだ", totalScore: 770, profile: "松竹芸能。翌年の第2回大会で優勝を果たす。" },
      { rank: 5, name: "麒麟", totalScore: 741, profile: "無名ながら決勝に進出した「M-1ドリーム」の体現者第1号。" },
      { rank: 6, name: "フットボールアワー", totalScore: 726, profile: "のちの第3回王者。" },
      { rank: 7, name: "キングコング", totalScore: 707, profile: "結成わずか2年半で決勝進出を果たした超新星。" },
      { rank: 8, name: "チュートリアル", totalScore: 637, profile: "のちの第6回王者。当時は荒削りな妄想漫才だった。" },
      { rank: 9, name: "DonDokoDon", totalScore: 614, profile: "ぐっさんと平畠のコンビ。現在コンビ活動は休止中。" },
      { rank: 10, name: "おぎやはぎ", totalScore: 540, profile: "プロダクション人力舎。独特の東京テンポで異彩を放った。" }
    ]
  },
  {
    year: 2002, edition: 2, entryCount: 1756,
    judges: ["島田紳助", "松本人志", "立川談志", "中田カウス", "大竹まこと", "島田洋七", "ラサール石井"],
    results: [
      { rank: 1, name: "ますだおかだ", totalScore: 612, profile: "松竹からの刺客が雪辱を果たし2代目王者に。" },
      { rank: 2, name: "フットボールアワー", totalScore: 621, profile: "圧倒的ウケ量で1本目1位通過したものの、最終決戦で惜敗。" },
      { rank: 3, name: "笑い飯", totalScore: 567, profile: "Wボケという新スタイルを確立させ、ここから9年連続決勝の伝説が幕を開ける。" },
      { rank: 4, name: "おぎやはぎ", totalScore: 561, profile: "前年の低評価から一転、進化を見せつけた。" },
      { rank: 5, name: "ハリガネロック", totalScore: 545, profile: "2年連続の決勝進出。" },
      { rank: 6, name: "テツandトモ", totalScore: 539, profile: "「なんでだろう」で爆風を巻き起こしたが談志師匠からのお叱りも。" },
      { rank: 7, name: "スピードワゴン", totalScore: 535, profile: "甘い言葉の漫才スタイルでブレイクの契機に。" },
      { rank: 8, name: "ダイノジ", totalScore: 534, profile: "大分出身の同級生コンビ。テンポ良い掛け合いを見せた。" },
      { rank: 9, name: "アメリカザリガニ", totalScore: 525, profile: "2年連続の決勝進出。" }
    ]
  },
  {
    year: 2003, edition: 3, entryCount: 1906,
    judges: ["島田紳助", "松本人志", "南原清隆", "中田カウス", "大竹まこと", "島田洋七", "ラサール石井"],
    results: [
      { rank: 1, name: "フットボールアワー", totalScore: 663, profile: "3年連続決勝進出。顔面を使ったボヤキ漫才で念願の優勝。" },
      { rank: 2, name: "笑い飯", totalScore: 656, profile: "「奈良県立歴史民俗博物館」という歴史に残る名作ネタを披露。" },
      { rank: 3, name: "アンタッチャブル", totalScore: 616, profile: "敗者復活戦からの勝ち上がり。勢いそのままに大爆笑を起こす。" },
      { rank: 4, name: "2丁拳銃", totalScore: 608, profile: "ラストイヤーで初の決勝進出を果たし、安定感を見せた。" },
      { rank: 5, name: "りあるキッズ", totalScore: 601, profile: "当時の最年少決勝進出記録。若さを感じさせない達者な漫才。" },
      { rank: 6, name: "スピードワゴン", totalScore: 572, profile: "2年連続決勝。お馴染みのネタフォーマットを披露。" },
      { rank: 7, name: "アメリカザリガニ", totalScore: 564, profile: "3年連続決勝。" },
      { rank: 8, name: "麒麟", totalScore: 554, profile: "2001年以来、2回目の決勝進出。" },
      { rank: 9, name: "千鳥", totalScore: 552, profile: "初出場。「智弁和歌山」のネタで強烈なインパクトを残すも最下位。" }
    ]
  },
  {
    year: 2004, edition: 4, entryCount: 2617,
    judges: ["島田紳助", "南原清隆", "渡辺正行", "中田カウス", "大竹まこと", "春風亭小朝", "ラサール石井"],
    results: [
      { rank: 1, name: "アンタッチャブル", totalScore: 673, profile: "当時の歴代最高得点で完全優勝。山崎のボケと柴田のツッコミが神がかった。" },
      { rank: 2, name: "南海キャンディーズ", totalScore: 639, profile: "初出場で大番狂わせを起こし、全国区のスターに。" },
      { rank: 3, name: "麒麟", totalScore: 634, profile: "敗者復活から勝ち上がり、初の最終決戦へ進出。" },
      { rank: 4, name: "タカアンドトシ", totalScore: 615, profile: "「欧米か！」のフォーマットが完成された漫才。" },
      { rank: 5, name: "笑い飯", totalScore: 615, profile: "3年連続決勝進出。Wボケをさらに洗練させた。" },
      { rank: 6, name: "POISON GIRL BAND", totalScore: 603, profile: "独特のローテンポで異彩を放った。" },
      { rank: 7, name: "トータルテンボス", totalScore: 587, profile: "初出場。渋谷系チャラ男漫才。" },
      { rank: 8, name: "東京ダイナマイト", totalScore: 583, profile: "異色の風貌とテンポの漫才スタイル。" },
      { rank: 9, name: "千鳥", totalScore: 582, profile: "2年連続出場。" }
    ]
  },
  {
    year: 2005, edition: 5, entryCount: 3378,
    judges: ["島田紳助", "松本人志", "渡辺正行", "中田カウス", "大竹まこと", "島田洋七", "ラサール石井"],
    results: [
      { rank: 1, name: "ブラックマヨネーズ", totalScore: 659, profile: "お互いのコンプレックスをぶつけ合う喧嘩漫才の極致で完全制覇。" },
      { rank: 2, name: "笑い飯", totalScore: 633, profile: "4年連続決勝。最終決戦の大トリを務めた。" },
      { rank: 3, name: "麒麟", totalScore: 646, profile: "2年連続の最終決戦進出。" },
      { rank: 4, name: "品川庄司", totalScore: 626, profile: "結成10年目のラストイヤーで見事決勝へ。" },
      { rank: 5, name: "チュートリアル", totalScore: 622, profile: "「バーベキュー」のネタで本格覚醒の前兆を見せた。" },
      { rank: 6, name: "千鳥", totalScore: 607, profile: "3年連続決勝出場。" },
      { rank: 7, name: "タイムマシーン3号", totalScore: 571, profile: "初出場。軽快なテンポで沸かせた。" },
      { rank: 8, name: "アジアン", totalScore: 564, profile: "初の女性コンビファイナリスト。" },
      { rank: 9, name: "南海キャンディーズ", totalScore: 552, profile: "前年の勢いを維持できず。" }
    ]
  },
  {
    year: 2006, edition: 6, entryCount: 3922,
    judges: ["島田紳助", "松本人志", "南原清隆", "中田カウス", "大竹まこと", "島田洋七", "渡辺正行"],
    results: [
      { rank: 1, name: "チュートリアル", totalScore: 664, profile: "徳井の狂気的な妄想と福田のツッコミが爆発。M-1史上初の完全優勝（全員一致）を達成。" },
      { rank: 2, name: "フットボールアワー", totalScore: 640, profile: "過去の優勝経験コンビとして初のファイナリスト復帰劇。" },
      { rank: 3, name: "麒麟", totalScore: 627, profile: "3年連続最終決戦へ進出。" },
      { rank: 4, name: "笑い飯", totalScore: 626, profile: "5年連続出場。" },
      { rank: 5, name: "トータルテンボス", totalScore: 613, profile: "2度目の決勝出場。実力を見せつけた。" },
      { rank: 6, name: "ライセンス", totalScore: 609, profile: "敗者復活枠。ドラえもんのネタでウケる。" },
      { rank: 7, name: "ザ・プラン9", totalScore: 597, profile: "史上唯一の「5人組」でのM-1決勝進出。" },
      { rank: 8, name: "変ホ長調", totalScore: 576, profile: "史上初のアマチュア（フリー）決勝進出。" },
      { rank: 9, name: "POISON GIRL BAND", totalScore: 570, profile: "2度目の決勝進出。" }
    ]
  },
  {
    year: 2007, edition: 7, entryCount: 4239,
    judges: ["島田紳助", "松本人志", "上沼恵美子", "中田カウス", "大竹まこと", "オール巨人", "ラサール石井"],
    results: [
      { rank: 1, name: "サンドウィッチマン", totalScore: 651, profile: "史上初、敗者復活戦からの下剋上優勝。「ピザのデリバリー」で一躍国民的スターに。" },
      { rank: 2, name: "トータルテンボス", totalScore: 646, profile: "ラストイヤーで1位通過するも最終決戦で惜敗。" },
      { rank: 3, name: "キングコング", totalScore: 650, profile: "1本目で審査員から軒並み高評価を獲得。" },
      { rank: 4, name: "ハリセンボン", totalScore: 608, profile: "女性コンビとして初出場。" },
      { rank: 5, name: "笑い飯", totalScore: 604, profile: "6年連続。" },
      { rank: 6, name: "ザブングル", totalScore: 597, profile: "「カッチカチやぞ」のギャグも飛び出した。" },
      { rank: 7, name: "ダイアン", totalScore: 593, profile: "初出場。" },
      { rank: 8, name: "千鳥", totalScore: 580, profile: "4度目の出場。" },
      { rank: 9, name: "POISON GIRL BAND", totalScore: 577, profile: "3度目の出場。" }
    ]
  },
  {
    year: 2008, edition: 8, entryCount: 4489,
    judges: ["島田紳助", "松本人志", "上沼恵美子", "中田カウス", "大竹まこと", "オール巨人", "渡辺正行"],
    results: [
      { rank: 1, name: "NON STYLE", totalScore: 644, profile: "圧倒的な手数の多さとスピード感で王者に輝く。" },
      { rank: 2, name: "オードリー", totalScore: 649, profile: "敗者復活から進出し、ズレ漫才で爆笑をかっさらった最強の準優勝コンビ。" },
      { rank: 3, name: "ナイツ", totalScore: 640, profile: "ヤホー漫才で安定した実力を見せつけた。" },
      { rank: 4, name: "笑い飯", totalScore: 637, profile: "闘牛士のネタで健闘。7年連続。" },
      { rank: 5, name: "U字工事", totalScore: 623, profile: "栃木県訛りの地元愛漫才。" },
      { rank: 6, name: "ダイアン", totalScore: 619, profile: "2年連続。" },
      { rank: 7, name: "モンスターエンジン", totalScore: 614, profile: "神々の遊びでブレイク中の初出場。" },
      { rank: 8, name: "キングコング", totalScore: 612, profile: "前年の勢いに及ばず。" },
      { rank: 9, name: "ザ・パンチ", totalScore: 591, profile: "「砂漠でラクダに逃げられちゃえ」など独特のネガティブツッコミ。" }
    ]
  },
  {
    year: 2009, edition: 9, entryCount: 4629,
    judges: ["島田紳助", "松本人志", "上沼恵美子", "中田カウス", "東国原英夫", "オール巨人", "渡辺正行"],
    results: [
      { rank: 1, name: "パンクブーブー", totalScore: 651, profile: "審査員満票での完全優勝を達成。圧倒的な漫才地肩を証明した。" },
      { rank: 2, name: "笑い飯", totalScore: 668, profile: "「鳥人（とりじん）」で島田紳助から初の100点満点を獲得する伝説を残す。" },
      { rank: 3, name: "NON STYLE", totalScore: 641, profile: "敗者復活からの勝ち上がりで前年王者が意地を見せた。" },
      { rank: 4, name: "ナイツ", totalScore: 634, profile: "2年連続決勝。" },
      { rank: 5, name: "ハライチ", totalScore: 628, profile: "初の決勝。ノリボケ漫才スタイルで強烈な印象。" },
      { rank: 6, name: "東京ダイナマイト", totalScore: 614, profile: "5年ぶりの決勝復帰。" },
      { rank: 7, name: "モンスターエンジン", totalScore: 610, profile: "2年連続。" },
      { rank: 8, name: "南海キャンディーズ", totalScore: 607, profile: "久しぶりの決勝復帰。" },
      { rank: 9, name: "ハリセンボン", totalScore: 595, profile: "2度目の決勝。" }
    ]
  },
  {
    year: 2010, edition: 10, entryCount: 4835,
    judges: ["島田紳助", "松本人志", "南原清隆", "中田カウス", "大竹まこと", "宮迫博之", "渡辺正行"],
    results: [
      { rank: 1, name: "笑い飯", totalScore: 668, profile: "旧M-1（第1期）最後の大会で、9年連続決勝の末に執念の優勝。「サンタウロス」のネタで完結。" },
      { rank: 2, name: "スリムクラブ", totalScore: 644, profile: "圧倒的なローテンポ漫才で会場の空気を一変させた大ダークホース。" },
      { rank: 3, name: "パンクブーブー", totalScore: 668, profile: "敗者復活枠。前年王者が連覇に肉薄した。" },
      { rank: 4, name: "ピース", totalScore: 629, profile: "独特なワードセンスで同年のKOC準優勝からM-1決勝にも這い上がった。" },
      { rank: 5, name: "銀シャリ", totalScore: 627, profile: "古き良き上方しゃべくり漫才のニュースターとして初出場。" },
      { rank: 6, name: "ナイツ", totalScore: 626, profile: "3年連続決勝。" },
      { rank: 7, name: "ハライチ", totalScore: 620, profile: "2年連続。" },
      { rank: 8, name: "ジャルジャル", totalScore: 606, profile: "言葉遊び漫才で初出場。" },
      { rank: 9, name: "カナリア", totalScore: 592, profile: "ドレミの歌のネタを披露。" }
    ]
  },
  {
    year: 2015, edition: 11, entryCount: 3472,
    judges: ["中川家礼二", "増田英彦", "フット岩尾", "アンタ山崎", "ブラマヨ吉田", "チュート徳井", "ノンスタ石田", "パンク佐藤", "笑い飯哲夫"],
    results: [
      { rank: 1, name: "トレンディエンジェル", totalScore: 825, profile: "新生M-1最初の大会。敗者復活戦からのハゲネタ連発で大逆転優勝。" },
      { rank: 2, name: "銀シャリ", totalScore: 818, profile: "正統派漫才で貫禄の1位通過も最終決戦で破れる。" },
      { rank: 3, name: "ジャルジャル", totalScore: 834, profile: "「ことわざ」のズレを修正するシステム漫才で最高得点。" },
      { rank: 4, name: "タイムマシーン3号", totalScore: 816, profile: "言葉を太らせる漫才。" },
      { rank: 5, name: "スーパーマラドーナ", totalScore: 813, profile: "初出場。" },
      { rank: 6, name: "和牛", totalScore: 806, profile: "屁理屈漫才の片鱗を見せた初出場。" },
      { rank: 7, name: "メイプル超合金", totalScore: 796, profile: "トップバッターで強烈なキャラクターを残し大ブレイクの契機に。" },
      { rank: 8, name: "馬鹿よ貴方は", totalScore: 791, profile: "独特な間と狂気的なボケ。" },
      { rank: 9, name: "ハライチ", totalScore: 788, profile: "4度目の出場。" }
    ]
  },
  {
    year: 2016, edition: 12, entryCount: 3503,
    judges: ["オール巨人", "中川家礼二", "博多大吉", "松本人志", "上沼恵美子"],
    results: [
      { rank: 1, name: "銀シャリ", totalScore: 470, profile: "前年の雪辱を果たし「ドレミの歌」などの正統派漫才で王者に。" },
      { rank: 2, name: "和牛", totalScore: 469, profile: "敗者復活枠。「ドライブデート」の屁理屈漫才で覚醒。" },
      { rank: 3, name: "スーパーマラドーナ", totalScore: 459, profile: "エレベーターのネタで大爆笑を獲得。" },
      { rank: 4, name: "さらば青春の光", totalScore: 448, profile: "能や浄瑠璃を盛り込んだコント漫才。" },
      { rank: 5, name: "アキナ", totalScore: 446, profile: "トップバッターで高水準のネタを披露。" },
      { rank: 6, name: "ハライチ", totalScore: 446, profile: "RPGゲームを題材にした新ネタ。" },
      { rank: 7, name: "カミナリ", totalScore: 441, profile: "激しいどつきツッコミで鮮烈なデビュー。" },
      { rank: 8, name: "スリムクラブ", totalScore: 441, profile: "2010年以来の決勝。" },
      { rank: 9, name: "相席スタート", totalScore: 436, profile: "男女のリアルな掛け合い漫才。" }
    ]
  },
  {
    year: 2017, edition: 13, entryCount: 4094,
    judges: ["オール巨人", "中川家礼二", "博多大吉", "春風亭小朝", "松本人志", "上沼恵美子", "渡辺正行"],
    results: [
      { rank: 1, name: "とろサーモン", totalScore: 645, profile: "ラストイヤーの15年目にしてついに決勝初進出、そのまま悲願の優勝。" },
      { rank: 2, name: "和牛", totalScore: 653, profile: "2年連続準優勝。「ウェディングプランナー」で圧倒的完成度。" },
      { rank: 3, name: "ミキ", totalScore: 650, profile: "兄弟漫才のニュースターとして初進出で大健闘。" },
      { rank: 4, name: "かまいたち", totalScore: 640, profile: "KOC覇者として挑み、「USJ」のネタで確かな実力。" },
      { rank: 5, name: "スーパーマラドーナ", totalScore: 640, profile: "敗者復活枠からの出場。" },
      { rank: 6, name: "ジャルジャル", totalScore: 636, profile: "「ピンポンパンポンピーン」の超人漫才で松本から高評価。" },
      { rank: 7, name: "さや香", totalScore: 628, profile: "若手ながら初出場で熱血漫才を披露。" },
      { rank: 8, name: "ゆにばーす", totalScore: 626, profile: "トップバッターで会場を大いに盛り上げた。" },
      { rank: 9, name: "カミナリ", totalScore: 618, profile: "2年連続出場。" },
      { rank: 10, name: "マヂカルラブリー", totalScore: 607, profile: "上沼恵美子から「本気で怒り」を買った因縁の初出場年。" }
    ]
  },
  {
    year: 2018, edition: 14, entryCount: 4640,
    judges: ["オール巨人", "中川家礼二", "塙宣之", "立川志らく", "富澤たけし", "松本人志", "上沼恵美子"],
    results: [
      { rank: 1, name: "霜降り明星", totalScore: 662, profile: "M-1史上最年少の20代コンビで優勝。お笑い界第7世代の幕開けを告げた。" },
      { rank: 2, name: "和牛", totalScore: 656, profile: "3年連続の準優勝。「オレオレ詐欺」などで極まった漫才を見せた。" },
      { rank: 3, name: "ジャルジャル", totalScore: 648, profile: "「国名わけっこ」で完成された遊びを極めた。" },
      { rank: 4, name: "ミキ", totalScore: 638, profile: "敗者復活枠。" },
      { rank: 5, name: "かまいたち", totalScore: 636, profile: "「タイムマシン」のネタで爆笑。" },
      { rank: 6, name: "トム・ブラウン", totalScore: 633, profile: "「ナカジマックス」など狂気の合体漫才でトラウマ級の爪痕を残す。" },
      { rank: 7, name: "スーパーマラドーナ", totalScore: 632, profile: "ラストイヤー。" },
      { rank: 8, name: "ギャロップ", totalScore: 614, profile: "ラストイヤーで念願の初決勝。" },
      { rank: 9, name: "見取り図", totalScore: 606, profile: "初出場。" },
      { rank: 10, name: "ゆにばーす", totalScore: 594, profile: "2年連続。" }
    ]
  },
  {
    year: 2019, edition: 15, entryCount: 5040,
    judges: ["オール巨人", "中川家礼二", "塙宣之", "立川志らく", "富澤たけし", "松本人志", "上沼恵美子"],
    results: [
      { rank: 1, name: "ミルクボーイ", totalScore: 681, profile: "「コーンフレーク」のネタでM-1歴代最高得点(681点)を叩き出し伝説の完全優勝。" },
      { rank: 2, name: "かまいたち", totalScore: 660, profile: "「UFJ」のネタで松本から最高評価。大会歴代屈指のハイレベルな名勝負を演じた。" },
      { rank: 3, name: "ぺこぱ", totalScore: 654, profile: "「人を傷つけないツッコミ」で時代に旋風を巻き起こす。" },
      { rank: 4, name: "和牛", totalScore: 652, profile: "敗者復活戦から這い上がるも、一歩及ばず。" },
      { rank: 5, name: "見取り図", totalScore: 649, profile: "2年連続。関西の実力派。" },
      { rank: 6, name: "からし蓮根", totalScore: 639, profile: "熊本出身の超新星として初出場。" },
      { rank: 7, name: "オズワルド", totalScore: 638, profile: "東京しゃべくり漫才の新旗手として初出場。" },
      { rank: 8, name: "すゑひろがりず", totalScore: 637, profile: "伝統芸能和風変換漫才で会場を沸かせた。" },
      { rank: 9, name: "インディアンス", totalScore: 632, profile: "東西のボケマシーン。" },
      { rank: 10, name: "ニューヨーク", totalScore: 616, profile: "トップバッターで松本から「ツッコミが好きじゃない」といじられる結果に。" }
    ]
  },
  {
    year: 2020, edition: 16, entryCount: 5081,
    judges: ["オール巨人", "中川家礼二", "塙宣之", "立川志らく", "富澤たけし", "松本人志", "上沼恵美子"],
    results: [
      { rank: 1, name: "マヂカルラブリー", totalScore: 649, profile: "「吊り革」のネタで爆笑。2017年の最下位から完全復活し優勝。「これは漫才か？」論争を巻き起こした。" },
      { rank: 2, name: "おいでやすこが", totalScore: 658, profile: "ピン芸人同士の即席ユニットとして初の決勝進出＆準優勝の快挙。" },
      { rank: 3, name: "見取り図", totalScore: 648, profile: "3年連続出場でついに最終決戦に残る。" },
      { rank: 4, name: "錦鯉", totalScore: 643, profile: "最年長（長谷川49歳）での初決勝。" },
      { rank: 5, name: "ニューヨーク", totalScore: 642, profile: "前年の最下位から成長を見せ5位躍進。" },
      { rank: 6, name: "オズワルド", totalScore: 642, profile: "2年連続。" },
      { rank: 7, name: "インディアンス", totalScore: 625, profile: "敗者復活枠。" },
      { rank: 8, name: "アキナ", totalScore: 622, profile: "2016年以来の出場。" },
      { rank: 9, name: "ウエストランド", totalScore: 622, profile: "初出場。井口の愚痴漫才。" },
      { rank: 10, name: "東京ホテイソン", totalScore: 617, profile: "備中神楽を取り入れた独特のツッコミスタイルで初出場。" }
    ]
  },
  {
    year: 2021, edition: 17, entryCount: 6017,
    judges: ["オール巨人", "中川家礼二", "塙宣之", "立川志らく", "富澤たけし", "松本人志", "上沼恵美子"],
    results: [
      { rank: 1, name: "錦鯉", totalScore: 655, profile: "「猿の捕獲」で爆発し、M-1史上最年長（長谷川50歳）の王者誕生で日本中が涙した。" },
      { rank: 2, name: "オズワルド", totalScore: 665, profile: "1stラウンドで「友達」ネタを披露し最高得点通過するも優勝を逃す。" },
      { rank: 3, name: "インディアンス", totalScore: 655, profile: "圧倒的運動量とボケの手数で最終決戦進出。" },
      { rank: 4, name: "ロングコートダディ", totalScore: 649, profile: "「肉うどん」のネタで独自のゆるい空気を作り出し高評価。" },
      { rank: 5, name: "もも", totalScore: 645, profile: "顔をイジり合う『〇〇顔』フォーマットで初出場。" },
      { rank: 6, name: "真空ジェシカ", totalScore: 638, profile: "大喜利力の高い不条理漫才で初出場。" },
      { rank: 7, name: "ゆにばーす", totalScore: 638, profile: "ディベート漫才で3度目の出場。" },
      { rank: 8, name: "モグライダー", totalScore: 637, profile: "トップバッター。「美川憲一」のネタで会場を温めた。" },
      { rank: 9, name: "ハライチ", totalScore: 636, profile: "ラストイヤー敗者復活で執念の滑り込み。" },
      { rank: 10, name: "ランジャタイ", totalScore: 628, profile: "前代未聞のイリュージョン漫才で視聴者を混乱と爆笑に陥れた。" }
    ]
  },
  {
    year: 2022, edition: 18, entryCount: 7261,
    judges: ["山田邦子", "博多大吉", "塙宣之", "富澤たけし", "立川志らく", "松本人志", "中川家礼二"],
    results: [
      { rank: 1, name: "ウエストランド", totalScore: 659, profile: "「あるなしクイズ」に託けた社会やYouTuberへの悪口漫才で大爆笑を起こし優勝。毒舌の復権。" },
      { rank: 2, name: "さや香", totalScore: 667, profile: "「免許返納」のしゃべくり漫才で1stラウンド1位通過するも見事なまでの王道で散る。" },
      { rank: 3, name: "ロングコートダディ", totalScore: 660, profile: "「マラソン世界大会」で2度目の最終決戦へ。" },
      { rank: 4, name: "男性ブランコ", totalScore: 650, profile: "「音符運び」の独創的なコント漫才を開拓。" },
      { rank: 5, name: "真空ジェシカ", totalScore: 647, profile: "2年連続出場。" },
      { rank: 6, name: "ヨネダ2000", totalScore: 647, profile: "「餅つき」で唯一無二のリズムと混沌を生み出した20代女性コンビ初進出。" },
      { rank: 7, name: "オズワルド", totalScore: 639, profile: "敗者復活枠。4年連続。" },
      { rank: 8, name: "カベポスター", totalScore: 634, profile: "トップバッターでしっかりとした構成の「大声大会」漫才を披露。" },
      { rank: 9, name: "キュウ", totalScore: 620, profile: "極端にスローテンポな実験的漫才。" },
      { rank: 10, name: "ダイヤモンド", totalScore: 616, profile: "「農協の牛乳」などのワードフォーマット漫才。" }
    ]
  },
  {
    year: 2023, edition: 19, entryCount: 8540,
    judges: ["山田邦子", "博多大吉", "塙宣之", "富澤たけし", "松本人志", "中川家礼二", "海原ともこ"],
    results: [
      { rank: 1, name: "令和ロマン", totalScore: 648, profile: "トップバッターからの劇的優勝。「第1回の中川家以来」の偉業を達成する神童コンビ。" },
      { rank: 2, name: "ヤーレンズ", totalScore: 656, profile: "1stを2位通過。怒涛のボケ数と軽妙な掛け合いを見せつけた。" },
      { rank: 3, name: "さや香", totalScore: 659, profile: "1stを1位通過するも最終決戦での「見せ算」で0票に終わる伝説を残す。" },
      { rank: 4, name: "マユリカ", totalScore: 645, profile: "幼馴染コンビによるキモダチ漫才。" },
      { rank: 5, name: "真空ジェシカ", totalScore: 643, profile: "3年連続出場。" },
      { rank: 6, name: "カベポスター", totalScore: 635, profile: "2年連続。" },
      { rank: 7, name: "モグライダー", totalScore: 632, profile: "「錦野旦」のネタで再登場。" },
      { rank: 8, name: "ダンビラムーチョ", totalScore: 631, profile: "「天体観測」の熱唱漫才。" },
      { rank: 9, name: "シシガシラ", totalScore: 627, profile: "敗者復活枠。ハゲと歌を絡めた新鮮なネタ。" },
      { rank: 10, name: "くらげ", totalScore: 620, profile: "「わかんねぇけど」のフォーマット漫才。" }
    ]
  },
  {
    year: 2024, edition: 20, entryCount: 10330,
    judges: ["NON STYLE石田", "海原ともこ", "アンタッチャブル柴田", "笑い飯哲夫", "博多大吉", "ナイツ塙", "かまいたち山内", "中川家礼二", "オードリー若林"],
    results: [
      { rank: 1, name: "令和ロマン", totalScore: 850, profile: "史上初の審査員9人制。なんと「大会連覇」を達成する。まさにM-1の歴史を塗り替える絶対王者となった。" },
      { rank: 2, name: "バッテリィズ", totalScore: 861, profile: "1stラウンドをトップ通過し大番狂わせを予感させるも、最終決戦で破れる。" },
      { rank: 3, name: "真空ジェシカ", totalScore: 849, profile: "4年連続決勝。ついに最終決戦に進出し確固たる実力を見せつけた。" },
      { rank: 4, name: "エバース", totalScore: 848, profile: "初登場で高水準の掛け合いを見せ旋風を巻き起こす。" },
      { rank: 5, name: "ヤーレンズ", totalScore: 825, profile: "前年の準優勝に引き続いて安定の爆笑を起こす。" },
      { rank: 6, name: "トム・ブラウン", totalScore: 823, profile: "狂気の合体がさらに進化・難解になり会場をどよめかせた。" },
      { rank: 7, name: "マユリカ", totalScore: 820, profile: "2年連続決勝。" },
      { rank: 7, name: "ダイタク", totalScore: 820, profile: "双子ならではのシンクロ漫才で同率7位。" },
      { rank: 9, name: "ジョックロック", totalScore: 819, profile: "期待の超新星として初登場。" },
      { rank: 10, name: "ママタルト", totalScore: 812, profile: "「まーごめ」でお馴染み、巨体を使ったダイナミックなバカバカしさ。" }
    ]
  },
  {
    year: 2025, edition: 21, entryCount: 11521,
    judges: ["海原ともこ", "フットボールアワー後藤", "ミルクボーイ駒場", "アンタッチャブル柴田", "笑い飯哲夫", "博多大吉", "ナイツ塙", "かまいたち山内", "中川家礼二"],
    results: [
      { rank: 1, name: "たくろう", profile: "11,521組の頂点に立った第21代王者。赤木と木村の独特な掛け合いと間合いが真骨頂。" },
      { rank: 2, name: "ドンデコルテ", profile: "緻密で論理的な屁理屈漫才の極致で最終決戦に進出、惜しくも1票獲得に留まった。" },
      { rank: 3, name: "エバース", profile: "昨年に続き2度目の決勝で念願の最終決戦進出を果たし、王道漫才としての完成度を見せた。" },
      { rank: 4, name: "ヨネダ2000", profile: "2022年以来の決勝復帰。さらに常軌を逸したリズム芸で爆笑を獲得。" },
      { rank: 5, name: "豪快キャプテン", profile: "大声と勢いあふれる関西のハードパンチャー漫才で初進出。" },
      { rank: 6, name: "ヤーレンズ", profile: "3年連続決勝進出。変わらぬ手数の多さで会場を温めた。" },
      { rank: 7, name: "真空ジェシカ", profile: "5年連続出場。もはやM-1決勝の「顔」として安定した不条理を披露。" },
      { rank: 8, name: "めぞん", profile: "話題のコンビが若手らしくフレッシュかつドラマチックな漫才を展開。" },
      { rank: 9, name: "ママタルト", profile: "2年連続決勝。大鶴肥満の体格と檜原のツッコミの相性は健在。" },
      { rank: 10, name: "カナメストーン", profile: "悲願の敗者復活枠からの進出。親友コンビならではの密着度の高い漫才。" }
    ]
  }
];
