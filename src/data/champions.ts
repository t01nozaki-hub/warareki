export type Champion = {
  id: string;
  tournament: "M-1" | "KOC" | "R-1";
  year: number;
  name: string;
  ageAtWin: number;
  careerYears: number;
  score?: number;
  videoUrl: string; // VOD affiliate link placeholder
  description: string;
  // フェーズ2 追加項目
  catchphrase?: string;
  winningNeta?: string;
};

export const championsData: Champion[] = [
  // --- M-1 Mocks (指定された新データ) ---
  {
    id: "m1-2001",
    tournament: "M-1",
    year: 2001,
    name: "中川家",
    ageAtWin: 31,
    careerYears: 9,
    score: 829,
    videoUrl: "YOUR_NETFLIX_AFFILIATE_ID_2001",
    description: "記念すべき初代。一般審査員の戸惑い。",
    catchphrase: "笑いの神、降臨。",
    winningNeta: "オカンと犬 / 教習所"
  },
  {
    id: "m1-2004",
    tournament: "M-1",
    year: 2004,
    name: "アンタッチャブル",
    ageAtWin: 29,
    careerYears: 10,
    score: 673,
    videoUrl: "YOUR_AMAZON_AFFILIATE_ID_2004",
    description: "史上最強のテンションとボケ数。",
    catchphrase: "妥協なき爆笑の嵐。",
    winningNeta: "プロポーズ / 娘さんを下さい"
  },
  {
    id: "m1-2019",
    tournament: "M-1",
    year: 2019,
    name: "ミルクボーイ",
    ageAtWin: 33,
    careerYears: 12,
    score: 681,
    videoUrl: "YOUR_UNEXT_AFFILIATE_ID_2019",
    description: "史上最高得点(681点)を叩き出し、日本中を爆笑の渦に。",
    catchphrase: "令和の漫才王。",
    winningNeta: "コーンフレーク / もなか"
  },
  {
    id: "m1-2023",
    tournament: "M-1",
    year: 2023,
    name: "令和ロマン",
    ageAtWin: 29,
    careerYears: 5,
    score: 659,
    videoUrl: "YOUR_LEMINO_AFFILIATE_ID_2023",
    description: "中川家以来のトップバッターからの完全優勝。",
    catchphrase: "予測不能の天才。",
    winningNeta: "少女漫画 / 吉野家"
  },
  // --- KOC Mocks ---
  {
    id: "koc-2008",
    tournament: "KOC",
    year: 2008,
    name: "バッファロー吾郎",
    ageAtWin: 38,
    careerYears: 19,
    videoUrl: "YOUR_VOD_AFFILIATE_LINK_KOC_2008",
    description: "記念すべき初代コント王者。芸人審査により決定された。",
  },
  {
    id: "koc-2021",
    tournament: "KOC",
    year: 2021,
    name: "空気階段",
    ageAtWin: 31,
    careerYears: 9,
    score: 960,
    videoUrl: "YOUR_VOD_AFFILIATE_LINK_KOC_2021",
    description: "歴代最高得点(486+474=960点)で圧勝。",
  },
  // --- R-1 Mocks ---
  {
    id: "r1-2002",
    tournament: "R-1",
    year: 2002,
    name: "だいたひかる",
    ageAtWin: 27,
    careerYears: 4,
    videoUrl: "YOUR_VOD_AFFILIATE_LINK_R1_2002",
    description: "初代ひとり芸日本一。",
  },
  {
    id: "r1-2024",
    tournament: "R-1",
    year: 2024,
    name: "街裏ぴんく",
    ageAtWin: 39,
    careerYears: 20,
    videoUrl: "YOUR_VOD_AFFILIATE_LINK_R1_2024",
    description: "芸歴制限撤廃の初年度、芸歴20年目のベテランが優勝。",
  }
];
