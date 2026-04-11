export interface KocHistoricalYear {
  year: number;
  edition: number;
  entryCount: number;
  judges: string[];
  rules: string; // 大会ルールの解説
  blocks?: {
    name: string;
    results: {
      rank: number;
      name: string;
      score: number | string;
      isAdvanced: boolean;
    }[];
  }[];
  results: {
    rank: number;
    name: string;
    totalScore?: number | string;
    score1?: number; // 1st round score
    score2?: number; // 2nd round score
    profile: string;
    note?: string;
  }[];
}

export const kocHistoryData: KocHistoricalYear[] = [
  {
    year: 2008, edition: 1, entryCount: 3216,
    judges: ["準決勝進出者100名"],
    rules: "決勝進出8組をA・Bの2ブロックに分け、各ブロック1位が最終決戦に進出。1stステージは準決勝進出者100名による無記名投票（1人5点満点、計500点）。最終決戦はファイナリスト以外の6組による記名投票。本項の順位は便宜上、最終決戦進出→1stステージ得点順で表記。",
    blocks: [
      {
        name: "Aブロック",
        results: [
          { rank: 1, name: "バッファロー吾郎", score: 460, isAdvanced: true },
          { rank: 2, name: "ザ・ギース", score: 400, isAdvanced: false },
          { rank: 3, name: "天竺鼠", score: 388, isAdvanced: false },
          { rank: 4, name: "TKO", score: 368, isAdvanced: false }
        ]
      },
      {
        name: "Bブロック",
        results: [
          { rank: 1, name: "バナナマン", score: 482, isAdvanced: true },
          { rank: 2, name: "ロバート", score: 473, isAdvanced: false },
          { rank: 3, name: "チョコレートプラネット", score: 415, isAdvanced: false },
          { rank: 4, name: "2700", score: 327, isAdvanced: false }
        ]
      }
    ],
    results: [
      { rank: 1, name: "バッファロー吾郎", totalScore: "最終決戦 5票", profile: "初回大会の王者。Aブロックを460点で勝ち抜き、最終決戦では「オメガの男」のネタでバナナマンを5-2で下して優勝。" },
      { rank: 2, name: "バナナマン", totalScore: "最終決戦 2票", profile: "Bブロックを大会最高点482点で1位通過。「朝礼」などの完成されたコントを見せるも、最終決戦で敗れ準優勝。" },
      { rank: 3, name: "ロバート", totalScore: 473, profile: "Bブロック2位。後に悲願の優勝を果たすトリオが初回からその実力を見せつけた。" },
      { rank: 4, name: "チョコレートプラネット", totalScore: 415, profile: "Bブロック3位。結成わずか2年半での決勝進出。「ローマ兵」のネタ。" },
      { rank: 5, name: "ザ・ギース", totalScore: 400, profile: "Aブロック2位。「卒業生」のエレガントかつシュールなコント。" },
      { rank: 6, name: "天竺鼠", totalScore: 388, profile: "Aブロック3位。「食堂」のネタなど、独自の世界観で衝撃を与えた。" },
      { rank: 7, name: "TKO", totalScore: 368, profile: "Aブロック4位。「葬式」のネタ。松竹芸能の意地を見せた。" },
      { rank: 8, name: "2700", totalScore: 327, profile: "Aブロック4位。結成8ヶ月での決勝進出。独特のリズムネタ。" }
    ]
  },
  {
    year: 2009, edition: 2, entryCount: 2584,
    judges: ["準決勝進出者100名"],
    rules: "合計100名の芸人審査員（準決勝進出者）が1人10点満点（計1000点）で採点。決勝進出8組がそれぞれ2回ネタを披露し、その合計点（2000点満点）で順位を決定。",
    results: [
      { rank: 1, name: "東京03", score1: 835, score2: 953, totalScore: 1788, profile: "2本目のネタ「旅行」で953点という圧倒的な得点を叩き出し、逆転優勝。トリオコントの完成形を世に知らしめた。" },
      { rank: 2, name: "サンドウィッチマン", score1: 878, score2: 865, totalScore: 1743, profile: "M-1に続く二冠を目指すも一歩及ばず。1本目終了時点では首位に立つなど実力を見せた。" },
      { rank: 3, name: "しずる", score1: 820, score2: 831, totalScore: 1651, profile: "「冥土の土産」など甘酸っぱい青春コントで高い支持を得た。" },
      { rank: 4, name: "インパルス", score1: 812, score2: 823, totalScore: 1635, profile: "実力派として「取り調べ」などで熟練の技術を見せた。" },
      { rank: 5, name: "モンスターエンジン", score1: 767, score2: 859, totalScore: 1626, profile: "「神々の遊び」以外のコントでも高い演技力と発想力を証明。" },
      { rank: 6, name: "ロッチ", score1: 802, score2: 809, totalScore: 1611, profile: "「万引き」のコントで中岡のキャラクターがブレイクし人気を集めた。" },
      { rank: 7, name: "天竺鼠", score1: 752, score2: 798, totalScore: 1550, profile: "2年連続の決勝。独自の世界観は健在だった。" },
      { rank: 8, name: "ジャルジャル", score1: 734, score2: 805, totalScore: 1539, profile: "「しりとり」で独特のテンポを作り出すも得点は伸び悩んだ。" }
    ]
  },
  {
    year: 2010, edition: 3, entryCount: 3023,
    judges: ["準決勝進出者100名"],
    rules: "芸人審査員100名が1人10点満点で採点。8組が2ネタ披露し、合計2000点満点で競う（前年同様）。",
    results: [
      { rank: 1, name: "キングオブコメディ", score1: 908, score2: 928, totalScore: 1836, profile: "不条理な設定と高い演技力、今野のキャラクターが爆発。両ネタで900点超えを記録し完全優勝。" },
      { rank: 2, name: "ピース", score1: 827, score2: 942, totalScore: 1769, profile: "「化け物」のネタで2本目全組中トップの942点を獲得し、順位を大きく上げた。" },
      { rank: 3, name: "TKO", score1: 820, score2: 916, totalScore: 1736, profile: "「マジシャン」のネタ。3度目の決勝挑戦で過去最高の成績を残した。" },
      { rank: 4, name: "ジャルジャル", score1: 829, score2: 898, totalScore: 1727, profile: "2年連続。「おばはん」のネタで会場を沸かせた。" },
      { rank: 5, name: "ラバーガール", score1: 864, score2: 830, totalScore: 1694, profile: "淡々とした無表情での掛け合い。1本目終了時点では3位と躍進した。" },
      { rank: 6, name: "しずる", score1: 816, score2: 854, totalScore: 1670, profile: "2年連続。安定した演技力で高品質なコントを提供。" },
      { rank: 7, name: "ロッチ", score1: 826, score2: 781, totalScore: 1607, profile: "2年連続。中岡のキャラを活かしたコントで勝負。" },
      { rank: 8, name: "エレキコミック", score1: 727, score2: 775, totalScore: 1502, profile: "歴史あるコンビの念願の決勝。会場の盛り上がりに反し得点は伸びず。" }
    ]
  },
  {
    year: 2011, edition: 4, entryCount: 3026,
    judges: ["準決勝進出者100名"],
    rules: "芸人審査員100名が1人10点満点で採点。8組が2ネタ披露し、合計2000点満点で競う（継承）。",
    results: [
      { rank: 1, name: "ロバート", score1: 942, score2: 934, totalScore: 1876, profile: "「忍者」など圧倒的なキャラクターと秋山の狂気、トリオの掛け合いで会場を席巻。" },
      { rank: 2, name: "2700", score1: 884, score2: 925, totalScore: 1809, profile: "「右ひじ左ひじ交互に見て」のリズムネタで審査員の度肝を抜き、高い評価を獲得。" },
      { rank: 3, name: "モンスターエンジン", score1: 843, score2: 919, totalScore: 1762, profile: "演技力の高さを見せたコントで上位進出。2ndステージで大きくスコアを伸ばした。" },
      { rank: 4, name: "インパルス", score1: 819, score2: 877, totalScore: 1696, profile: "「取り調べ」など設定の妙を活かした実力派らしいコント。" },
      { rank: 5, name: "鬼ヶ島", score1: 854, score2: 825, totalScore: 1679, profile: "独特のカルト的な狂気を含むトリオコント。人力舎勢の層の厚さを見せた。" },
      { rank: 6, name: "TKO", score1: 751, score2: 883, totalScore: 1634, profile: "3度目の決勝出場。1stで最下位付近から2ndで驚異の粘りを見せた。" },
      { rank: 7, name: "ラブレターズ", score1: 790, score2: 798, totalScore: 1588, profile: "西岡中学校の校歌ネタで鮮烈デビュー。独特のメロディが会場に残った。" },
      { rank: 8, name: "トップリード", score1: 750, score2: 765, totalScore: 1515, profile: "確かな叙述トリックを活かした構成のコントを披露。" }
    ]
  },
  {
    year: 2012, edition: 5, entryCount: 2971,
    judges: ["準決勝進出者100名"],
    rules: "芸人審査員100名が1人10点満点で採点。8組が2ネタ披露し、合計2000点満点で競う（継承）。",
    results: [
      { rank: 1, name: "バイきんぐ", score1: 967, score2: 974, totalScore: 1941, profile: "「なんて日だ！」の爆発的なツッコミで、当時のKOC歴代最高得点を更新し圧倒的優勝。" },
      { rank: 2, name: "さらば青春の光", score1: 888, score2: 919, totalScore: 1807, profile: "無名の若手ながら「イタトン」など圧倒的な構成力のコントを見せ一気に注目を浴びた。" },
      { rank: 3, name: "かもめんたる", score1: 883, score2: 907, totalScore: 1790, profile: "狂気をはらんだ、知的で質の高いコントで審査員の高い支持を得た。" },
      { rank: 4, name: "しずる", score1: 913, score2: 875, totalScore: 1788, profile: "3度目の出場。1stステージでは913点で2位につける実力を見せた。" },
      { rank: 5, name: "うしろシティ", score1: 843, score2: 893, totalScore: 1736, profile: "スタイリッシュな設定と高い演技力で人気を集めた。" },
      { rank: 6, name: "夜ふかしの会", score1: 847, score2: 861, totalScore: 1708, profile: "5人組のコント劇団。多人数を活かした構成力で初の決勝舞台に。" },
      { rank: 7, name: "銀シャリ", score1: 854, score2: 832, totalScore: 1686, profile: "漫才の実力派がコントでも決勝進出。高い話術をコントにも昇華した。" },
      { rank: 8, name: "トップリード", score1: 811, score2: 783, totalScore: 1594, profile: "2年連続の決勝。複雑な構成のコントで勝負した。" }
    ]
  },
  {
    year: 2013, edition: 6, entryCount: 2988,
    judges: ["準決勝進出者100名"],
    rules: "芸人審査員100名が1人10点満点で採点。8組が2ネタ披露し、合計2000点満点で競う（継承）。",
    results: [
      { rank: 1, name: "かもめんたる", score1: 923, score2: 1002, totalScore: 1925, profile: "2本目のネタで審査員100名中92名が最高得点をつけるなど伝説的な爆発を見せ優勝。" },
      { rank: 2, name: "鬼ヶ島", score1: 904, score2: 997, totalScore: 1901, profile: "アイアム野田の狂気的なキャラクターを活かしたコントで優勝まであと一歩の準優勝。" },
      { rank: 3, name: "天竺鼠", score1: 879, score2: 948, totalScore: 1827, profile: "「寿司」のネタ。圧倒的なオリジナリティと川原の発想力で高得点を獲得。" },
      { rank: 4, name: "さらば青春の光", score1: 899, score2: 847, totalScore: 1746, profile: "1stステージを3位通過するも、2ndで順位を落としたが高い実力は健在。" },
      { rank: 5, name: "TKO", score1: 824, score2: 880, totalScore: 1704, profile: "4度目の出場。ベテランの意地を2ndステージで見せた。" },
      { rank: 6, name: "ジグザグジギー", score1: 825, score2: 819, totalScore: 1644, profile: "「狼男」の設定を活かした論理的なコントを披露。" },
      { rank: 7, name: "アルコ＆ピース", score1: 831, score2: 812, totalScore: 1643, profile: "「受精」のネタ。非常に独創的な視点のコントで会場に衝撃を与えた。" },
      { rank: 8, name: "うしろシティ", score1: 773, score2: 811, totalScore: 1584, profile: "2年連続出場。スタイリッシュな設定で勝負。" }
    ]
  },
  {
    year: 2014, edition: 7, entryCount: 2810,
    judges: ["準決勝敗退者100名"],
    rules: "1stステージはトーナメント形式の1対1対戦（計5試合）。準決勝敗退者100名が面白かった方に記名投票し、勝者5組がファイナルステージへ。ファイナルステージは暫定席（勝ち残り）方式で行われ、最終的に最も得票数の多い組が優勝。",
    blocks: [
      {
        name: "1対1対戦 (1stステージ)",
        results: [
          { rank: 1, name: "シソンヌ vs 巨匠", score: "54票 - 46票", isAdvanced: true },
          { rank: 2, name: "ラバーガール vs リンゴスター", score: "83票 - 17票", isAdvanced: true },
          { rank: 3, name: "バンビーノ vs さらば青春の光", score: "58票 - 42票", isAdvanced: true },
          { rank: 4, name: "犬の心 vs ラブレターズ", score: "93票 - 7票", isAdvanced: true },
          { rank: 5, name: "チョコレートプラネット vs アキナ", score: "80票 - 20票", isAdvanced: true }
        ]
      }
    ],
    results: [
      { rank: 1, name: "シソンヌ", totalScore: "最終決戦 74票", profile: "抜群の演技力と独自の設定でチョコレートプラネットを僅差で下し王者に。1対1形式から逆転した。" },
      { rank: 2, name: "チョコレートプラネット", totalScore: "最高得票時 80票", profile: "1stステージ最高得点を記録。「ポテト」のネタで強烈なインパクトを残した。" },
      { rank: 3, name: "ラバーガール", totalScore: "1st突破 83票", profile: "1stステージでリンゴスター相手に圧倒的な勝利を収めたが、最終的には3位。" },
      { rank: 4, name: "バンビーノ", totalScore: "1st突破 58票", profile: "「ダンソン」で社会現象になった。さらばとの熱戦を制してファイナルへ。" },
      { rank: 5, name: "犬の心", totalScore: "1st突破 93票", profile: "大ベテランがラブレターズを相手に大会最大級の得票差で勝利。" },
      { rank: 6, name: "巨匠", profile: "シソンヌに46対54と善戦するも1回戦敗退。" },
      { rank: 7, name: "さらば青春の光", profile: "バンビーノに敗退。3年連続の決勝進出も悔しい結果に。" },
      { rank: 8, name: "アキナ", profile: "チョコプラに敗退。「鳥」のコント。" },
      { rank: 9, name: "リンゴスター", profile: "ラバーガールに敗退。初出場トリオ。" },
      { rank: 10, name: "ラブレターズ", profile: "犬の心に不運にも大差で敗退。" }
    ]
  },
  {
    year: 2015, edition: 8, entryCount: 2455,
    judges: ["松本人志", "さまぁ〜ず", "バナナマン"],
    rules: "10組が1stステージを披露。審査員5名が各100点（計500点）で採点。上位5組がファイナルステージへ進出し、2ネタの合計点（1000点満点）で競う（審査員は以降2020年まで固定）。",
    results: [
      { rank: 1, name: "コロコロチキチキペッパーズ", score1: 468, score2: 465, totalScore: 933, profile: "「妖精」「卓球」と強烈なキャラと音楽の融合で初出場優勝。2ndの卓球ネタが決定打となった。" },
      { rank: 2, name: "バンビーノ", score1: 455, score2: 471, totalScore: 926, profile: "1st「マッサージ」から2ndで高い評価。実力派としての顔を見せた。" },
      { rank: 3, name: "ロッチ", score1: 478, score2: 429, totalScore: 907, profile: "1本目「試着室」で478点という当時の審査員採点最高得点を出すも、2ndで歴史的大失速、3位へ。" },
      { rank: 4, name: "ジャングルポケット", score1: 445, score2: 451, totalScore: 896, profile: "斉藤の熱演で初の決勝舞台で最終決戦まで生き残った。" },
      { rank: 5, name: "藤崎マーケット", score1: 451, score2: 442, totalScore: 893, profile: "漫才・リズムネタのイメージを払拭する本格コントで上位進出。" },
      { rank: 6, name: "アキナ", score1: 437, profile: "2nd進出ボーダーまであとわずか及ばず6位。" },
      { rank: 7, name: "ザ・ギース", score1: 428, profile: "シュールな設定を活かすも得点は伸びず。同率7位。" },
      { rank: 8, name: "巨匠", score1: 428, profile: "設定のオリジナリティで勝負。同率7位。" },
      { rank: 9, name: "うしろシティ", score1: 424, profile: "安定した構成も、審査員採点の厳しさに泣いた。" },
      { rank: 10, name: "さらば青春の光", score1: 419, profile: "期待されるもまさかの最下位に会場も騒然。" }
    ]
  },
  {
    year: 2016, edition: 9, entryCount: 2510,
    judges: ["松本人志", "さまぁ〜ず", "バナナマン"],
    rules: "10組が1stステージ。5名各100点の500点満点。上位5組がファイナルステージ進出、合計1000点満点で競う（継承）。",
    results: [
      { rank: 1, name: "ライス", score1: 466, score2: 470, totalScore: 936, profile: "「命乞い」での爆発、2ndでの安定感で優勝。結成13年目での大輪を咲かせた。" },
      { rank: 2, name: "ジャングルポケット", score1: 466, score2: 464, totalScore: 930, profile: "ライスと並ぶ1stステージ1位通過。最終的にわずか6点差で悲願を逃した。" },
      { rank: 3, name: "かまいたち", score1: 458, score2: 456, totalScore: 914, profile: "「監禁」など高度なロジカルコント。翌年の優勝への布石となる3位。" },
      { rank: 4, name: "タイムマシーン3号", score1: 445, score2: 448, totalScore: 893, profile: "漫才の実力者がコントでも最終決戦まで残る汎用性を見せた。" },
      { rank: 5, name: "かもめんたる", score1: 444, score2: 439, totalScore: 883, profile: "王者として復帰し最終決戦進出。独自の狂気を保ち続けた。" },
      { rank: 6, name: "しずる", score1: 443, profile: "5位のかもめんたるとわずか1点差で惜しくも2nd進出を逃す。" },
      { rank: 7, name: "だーりんず", score1: 431, profile: "「カツラ」のネタ。会場を沸かせるもおじさん悲哀が審査に響いたか。" },
      { rank: 8, name: "ななまがり", score1: 430, profile: "独創的な単語のシステムコントで爪痕を残した。" },
      { rank: 9, name: "ラブレターズ", score1: 424, profile: "野球拳のネタで激しく動くも得点は伸びず。" },
      { rank: 10, name: "ジグザグジギー", score1: 419, profile: "秀逸なシステムコントを披露するも最下位の結果。" }
    ]
  },
  {
    year: 2017, edition: 10, entryCount: 2477,
    judges: ["松本人志", "さまぁ〜ず", "バナナマン"],
    rules: "10組が1stステージ。5名各100点の500点満点。上位5組がファイナルステージ進出、合計1000点満点で競う（継承）。",
    results: [
      { rank: 1, name: "かまいたち", score1: 466, score2: 476, totalScore: 942, profile: "1st「告白」、2nd「ウエットスーツ」共に満点に近い評価。にゃんこスターを逆転し優勝。" },
      { rank: 2, name: "にゃんこスター", score1: 466, score2: 462, totalScore: 928, profile: "1stステージで「縄跳び」ネタ。史上最大級のインパクトで首位通過。社会現象となった。" },
      { rank: 3, name: "さらば青春の光", score1: 455, score2: 467, totalScore: 922, profile: "「居酒屋」などで圧倒的な構成力。優勝を狙える位置で安定の3位。" },
      { rank: 4, name: "ジャングルポケット", score1: 452, score2: 458, totalScore: 910, profile: "3年連続の最終決戦進出。もはやKOC決勝の常連に。" },
      { rank: 5, name: "アンガールズ", score1: 452, score2: 452, totalScore: 904, profile: "ベテランの意地. 1本目同率4位通過で最終決戦まで食らいついた。" },
      { rank: 6, name: "わらふぢなるお", score1: 434, profile: "初登場. 独特の間と突っ込みが評価されるも6位。" },
      { rank: 7, name: "アキナ", score1: 432, profile: "3度目の決勝舞台. ダークなコントで勝負した。" },
      { rank: 8, name: "ゾフィー", score1: 422, profile: "「お母さんの飯」の不謹謹ネタで松本から「面白いけど笑えない」と評された伝説の回。" },
      { rank: 9, name: "パーパー", score1: 421, profile: "男女の掛け合いが特徴的. 若さ故の勢いは見せた。" },
      { rank: 10, name: "GAG少年楽団", score1: 419, profile: "低い低い姿勢からのコントを披露するも見届ける結果に。" }
    ]
  },
  {
    year: 2018, edition: 11, entryCount: 2490,
    judges: ["松本人志", "さまぁ〜ず", "バナナマン"],
    rules: "10組が1stステージ. 5名各100点の500点満点. 上位3組のみがファイナルステージ進出へ短縮, 合計1000点満点で競う方式に移行。",
    results: [
      { rank: 1, name: "ハナコ", score1: 464, score2: 472, totalScore: 936, profile: "1本目3位通過から2本目の「犬」のネタで大爆発. 奇跡の逆転優勝を飾った。" },
      { rank: 2, name: "わらふぢなるお", score1: 468, score2: 454, totalScore: 922, profile: "1stステージを2位通過. システムを活かしたコントで最後まで優勝を争った。" },
      { rank: 3, name: "チョコレートプラネット", score1: 478, score2: 440, totalScore: 918, profile: "1本目「密室」で478点の最高得点1位通過. 優勝目前と思われたが2本目で失速。" },
      { rank: 4, name: "さらば青春の光", score1: 463, profile: "ファイナル進出まであと1点届かず涙を呑んだ。" },
      { rank: 5, name: "ロビンフット", score1: 462, profile: "SMAのベテラン. 巧みな会話劇で高評価を得た。" },
      { rank: 6, name: "ザ・ギース", score1: 458, profile: "シュールかつ知性派のネタで健闘. 同率6位。" },
      { rank: 7, name: "マヂカルラブリー", score1: 458, profile: "KOC初の決勝. 「傘」のコント. 同率6位。" },
      { rank: 8, name: "だーりんず", score1: 437, profile: "2年ぶりの出場. 同率8位。" },
      { rank: 9, name: "GAG", score1: 437, profile: "絶妙な心理描写を活かすも届かず. 同率8位。" },
      { rank: 10, name: "やさしいズ", score1: 419, profile: "トップバッターで世界観を見せるも得点は伸びず。" }
    ]
  },
  {
    year: 2019, edition: 12, entryCount: 2413,
    judges: ["松本人志", "さまぁ〜ず", "バナナマン"],
    rules: "10組が1stステージ. 5名各100点の500点満点. 上位3組がファイナルステージ進出, 合計1000点満点（継承）。",
    results: [
      { rank: 1, name: "どぶろっく", score1: 480, score2: 455, totalScore: 935, profile: "「大きなイチモツ」という衝撃的なテーマを至高の歌唱力で演じきり, 文句なしの優勝。" },
      { rank: 2, name: "うるとらブギーズ", score1: 462, score2: 463, totalScore: 925, profile: "1st, 2ndともに審査員からの評価が極めて高く, 実力派であることを証明。" },
      { rank: 3, name: "ジャルジャル", score1: 448, score2: 457, totalScore: 905, profile: "「空き巣」ネタ等, 長年の努力が実りついに最終決戦進出を果たす。" },
      { rank: 4, name: "GAG", score1: 457, profile: "3年連続. 順位変動でわずかにFinalに届かず4位。" },
      { rank: 5, name: "ゾフィー", score1: 452, profile: "腹話術人形で松本の評価を覆す笑い. しかし5位に。" },
      { rank: 6, name: "ネルソンズ", score1: 446, profile: "和田まんじゅうのキャラを活かすも同率6位。" },
      { rank: 7, name: "ビスケットブラザーズ", score1: 446, profile: "独自の奇妙な設定. 同率6位。" },
      { rank: 8, name: "かが屋", score1: 446, profile: "リアルな心理描写が光った. 同率6位。" },
      { rank: 9, name: "空気階段", score1: 438, profile: "強烈な狂気のコントも得点は伸び悩む. 同率9位。" },
      { rank: 10, name: "わらふぢなるお", score1: 438, profile: "不運の同率最下位となった実力派。" }
    ]
  },
  {
    year: 2020, edition: 13, entryCount: 1707,
    judges: ["松本人志", "さまぁ〜ず", "バナナマン"],
    rules: "10組が1stステージ. 5名各100点の500点満点. 上位3組がファイナルステージ進出, 合計1000点満点（継承）。",
    results: [
      { rank: 1, name: "ジャルジャル", score1: 477, score2: 464, totalScore: 941, profile: "結成17年目, 過去最多の決勝経験を経てついに完全優勝. 独自のシステムを極めた。" },
      { rank: 2, name: "ニューヨーク", score1: 463, score2: 461, totalScore: 924, profile: "「結婚式」から「ヤクザ」へと毒のあるコントで準優勝. 完全に波に乗った。" },
      { rank: 3, name: "空気階段", score1: 464, score2: 457, totalScore: 921, profile: "1stステージ2位通過と実力を示し. Finalステージでも独自の狂気を見せつけた。" },
      { rank: 4, name: "ザ・ギース", score1: 457, profile: "「ハープ」という小道具と超絶技能をコントに昇華。" },
      { rank: 5, name: "ニッポンの社長", score1: 454, profile: "「ケンタウロス」という強烈すぎる設定. 同率5位。" },
      { rank: 6, name: "ジャングルポケット", score1: 454, profile: "ベテランらしい高品質なコント. 同率5位。" },
      { rank: 7, name: "ロングコートダディ", score1: 446, profile: "「段ボール」に吸い込まれる独自の設定. 初出場7位。" },
      { rank: 8, name: "滝音", score1: 445, profile: "「ベイビーワード」を散りばめたコント. 同率8位。" },
      { rank: 9, name: "GAG", score1: 445, profile: "4年連続. フルートのネタ. 同率8位。" },
      { rank: 10, name: "うるとらブギーズ", score1: 440, profile: "前年2位からの失速に悔しさを滲ませる結果。" }
    ]
  },
  {
    year: 2021, edition: 14, entryCount: 3015,
    judges: ["松本人志", "飯塚悟志", "小峠英二", "秋山竜次", "山内健司"],
    rules: "審査員が大幅リニューアル. 各100点計500点. 1stステージの上位3組がファイナルに進出, 合計1000点満点で順位を決定。",
    results: [
      { rank: 1, name: "空気階段", score1: 486, score2: 474, totalScore: 960, profile: "1st「SM火事」で当時の審査員制歴代最高得点486点を叩き出し, 独走状態で優勝へ。" },
      { rank: 2, name: "ザ・マミィ", score1: 476, score2: 450, totalScore: 926, profile: "「おじさん」の設定で2位躍進. 審査員を感銘させる演技力を見せた。" },
      { rank: 3, name: "男性ブランコ", score1: 472, score2: 453, totalScore: 925, profile: "「レジ袋」等の独創的かつ美しいコント. 初等場で大きな爪痕を残した。" },
      { rank: 4, name: "ニッポンの社長", score1: 463, profile: "バッティングセンターのネタ. バイオレンスかつコミカル。" },
      { rank: 5, name: "ジェラードン", score1: 462, profile: "「角刈りの女の子」の特大インパクト. 会場を制圧した。" },
      { rank: 6, name: "そいつどいつ", score1: 456, profile: "「パック」の設定を活かした, 狂気混じりのコント。" },
      { rank: 7, name: "ニューヨーク", score1: 453, profile: "連続決勝進出も今回は一歩及ばず. 同率7位。" },
      { rank: 8, name: "蛙亭", score1: 453, profile: "「ホムンクルス」。イワクラの発想力が炸裂. 同率7位。" },
      { rank: 9, name: "うるとらブギーズ", score1: 448, profile: "高い技術を見せるも得点に結びつかず。" },
      { rank: 10, name: "マヂカルラブリー", score1: 445, profile: "M-1王者のプライドをかけてコントでも奮闘するも最下位。" }
    ]
  },
  {
    year: 2022, edition: 15, entryCount: 3018,
    judges: ["松本人志", "飯塚悟志", "小峠英二", "秋山竜次", "山内健司"],
    rules: "審査員は前年同様. 1stステージ上位3組がファイナルへ. 合計1000点満点（継承）。",
    results: [
      { rank: 1, name: "ビスケットブラザーズ", score1: 481, score2: 482, totalScore: 963, profile: "驚異的なパワーと異質な設定. 空気階段の最高点を塗り替え優勝を飾った。" },
      { rank: 2, name: "コットン", score1: 478, score2: 466, totalScore: 944, profile: "演技力、台本ともに最高レベル. 1stステージを盤石の2位で通過した。" },
      { rank: 3, name: "や団", score1: 470, score2: 473, totalScore: 943, profile: "「バーベキュー」など人間の醜さと狂気を笑いに変え. 初進出3位の大躍進。" },
      { rank: 4, name: "ネルソンズ", score1: 466, profile: "和田まんじゅうの顔芸とキャラの勝利. 4位と健闘。" },
      { rank: 5, name: "かが屋", score1: 463, profile: "日常生活を切り取った高い解像度のコントで復活の5位。" },
      { rank: 6, name: "最高の人間", score1: 462, profile: "ユニット初の決勝進出. 狂気に満ちたテーマパークネタ。" },
      { rank: 7, name: "ロングコートダディ", score1: 461, profile: "「料理」の設定を活かしたゆったりとした笑い。" },
      { rank: 8, name: "クロコップ", score1: 460, profile: "あっちむいてホイという単純明快な設定で爆笑を獲った。" },
      { rank: 9, name: "いぬ", score1: 459, profile: "禁断のキス芸. 審査員の評価が真っ二つに分かれた伝説。" },
      { rank: 10, name: "ニッポンの社長", score1: 455, profile: "エヴァ風の設定. 攻めの姿勢を貫くも一歩及ばず。" }
    ]
  },
  {
    year: 2023, edition: 16, entryCount: 3036,
    judges: ["松本人志", "飯塚悟志", "小峠英二", "秋山竜次", "山内健司"],
    rules: "審査員は不動. 1stステージ上位3組がファイナルへ. 合計1000点満点（継承）。",
    results: [
      { rank: 1, name: "サルゴリラ", score1: 482, score2: 482, totalScore: 964, profile: "「靴」「魚」という不可思議だが芯のあるコントで、歴代最高得点(964点)を叩き出し最年長優勝。" },
      { rank: 2, name: "カゲヤマ", score1: 469, score2: 476, totalScore: 945, profile: "「料亭」での衝撃ビジュアル、「検便」という最低な設定で爆笑を起こし2位。" },
      { rank: 3, name: "ニッポンの社長", score1: 468, score2: 466, totalScore: 934, profile: "4年連続決勝. 空港の銃撃戦という壮大な馬鹿馬鹿しさで3位獲得。" },
      { rank: 4, name: "ファイヤーサンダー", score1: 466, profile: "「モノマネ番組」の設定の緻密さ. 初進出で4位と実力を証明。" },
      { rank: 5, name: "や団", score1: 465, profile: "前年に続く決勝. 安定した演技力で5位。" },
      { rank: 6, name: "ジグザグジギー", score1: 464, profile: "長年の苦労人が久しぶりの決勝舞台で意地を見せた. 同率6位。" },
      { rank: 7, name: "ラブレターズ", score1: 464, profile: "不条理な設定を活かし復活. 同率6位。" },
      { rank: 8, name: "蛙亭", score1: 463, profile: "イワクラの突飛な発想が炸裂. 8位健闘。" },
      { rank: 9, name: "隣人", score1: 460, profile: "チンパンジーと落語という難解だが美しい世界観。" },
      { rank: 10, name: "ゼンモンキー", score1: 456, profile: "ワタナベの期待の若手が初の決勝. 最下位ながら希望を持たせた。" }
    ]
  },
  {
    year: 2024, edition: 17, entryCount: 3139,
    judges: ["飯塚悟志", "秋山竜次", "小峠英二", "山内健司", "じろう"],
    rules: "松本人志氏に代わり、第7代王者シソンヌのじろう氏が就任. 各100点計500点. 上位3組がファイナルの合計1000点満点制。",
    results: [
      { rank: 1, name: "ラブレターズ", score1: 475, score2: 472, totalScore: 947, profile: "ついに17代目王者に. どんぐりのネタ、釣りのネタで狂気と哀愁を詰め込み1点差の大逆転。" },
      { rank: 2, name: "ロングコートダディ", score1: 475, score2: 471, totalScore: 946, profile: "抜群のセンスを見せるも、わずか1点差に泣く. 極めて高い水準の2位。" },
      { rank: 3, name: "ファイヤーサンダー", score1: 476, score2: 469, totalScore: 945, profile: "1stステージ1位通過. 論理的な台本は今大会最高の評価を得た。" },
      { rank: 4, name: "や団", score1: 474, profile: "3年連続. 人質コントでの狂気. 審査員からの絶賛を受けるも及ばず4位。" },
      { rank: 5, name: "シティホテル3号室", score1: 471, profile: "初登場で「テレビ通販」の秀逸な構成. 1st5位と大健闘。" },
      { rank: 6, name: "ダンビラムーチョ", score1: 469, profile: "お笑いバカの精神が宿る「太鼓」のネタ. 会場を多幸感に包んだ。" },
      { rank: 7, name: "cacao", score1: 468, profile: "驚異的なテンポの「着替え」。初進出で7位入賞。" },
      { rank: 8, name: "ニッポンの社長", score1: 468, profile: "前人未到の5年連続決勝進出. 攻めの姿勢は崩さず。" },
      { rank: 9, name: "コットン", score1: 461, profile: "準優勝経験者. 今回は人形劇の設定が審査を分けた。" },
      { rank: 10, name: "隣人", score1: 458, profile: "2年連続のチンパンジー. 貫くスタイルを見せた。" }
    ]
  },
  {
    year: 2025, edition: 18, entryCount: 3449,
    judges: ["飯塚悟志", "小峠英二", "秋山竜次", "山内健司", "じろう"],
    rules: "審査員は前年同様. 1stステージ10組から上位3組がファイナルへ進出し、合計1000点満点で優勝を決定（継承）。",
    results: [
      { rank: 1, name: "ロングコートダディ", score1: 476, score2: 485, totalScore: 961, profile: "圧倒的センス. 2本目合計含めて異次元の評価を獲得し、悲願の完全優勝。" },
      { rank: 2, name: "や団", score1: 473, score2: 478, totalScore: 951, profile: "4年連続決勝. 悲哀と狂気を極めたコントでロコディに肉薄する2位。" },
      { rank: 3, name: "レインボー", score1: 464, score2: 471, totalScore: 935, profile: "「男女」にこだわった集大成. ファイナルで爆発し3位入賞。" },
      { rank: 4, name: "青色1号", score1: 458, profile: "初進出ながら設定の鋭さを評価されるも4位。" },
      { rank: 5, name: "ファイヤーサンダー", score1: 457, profile: "盤石の構成. 同率5位に終わるも実力を証明。" },
      { rank: 6, name: "しずる", score1: 457, profile: "なんと1st大会からの経験者が決勝復帰. 熟練の技術を見せた同率5位。" },
      { rank: 7, name: "トム・ブラウン", score1: 451, profile: "唯一無二の狂気. 会場は揺れたが得点は追いつかず。" },
      { rank: 8, name: "うるとらブギーズ", score1: 448, profile: "コント師としての意地. 高い構成理論を披露。" },
      { rank: 9, name: "元祖いちごちゃん", score1: 447, profile: "アングラな雰囲気で独自の笑いを追求. 悲願の決勝。" },
      { rank: 10, name: "ベルナルド", score1: 445, profile: "新星が決勝へ. 荒削りながらもパワーを見せた。" }
    ]
  }
];
