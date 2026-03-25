export type ScoreResult = {
  rank: number;
  name: string;
  totalScore: number;
  judgeScores: number[]; // 各審査員の点数 (judgesのインデックスに対応)
  note?: string; // 例: 「最終決戦 〇票」など
};

export type TournamentScores = {
  id: string;
  tournament: "M-1" | "KOC" | "R-1";
  year: number;
  judges: string[]; // 審査員の名前リスト（並び順は judgeScores と一致させる）
  results: ScoreResult[]; // 出場者の結果リスト（順位順）
};

// 代表的な数年分のダミー/実データを投入（拡張性を持たせた構造）
export const scoresData: TournamentScores[] = [
  {
    id: "scores-m1-2023",
    tournament: "M-1",
    year: 2023,
    judges: ["山田邦子", "博多大吉", "塙宣之", "富澤たけし", "松本人志", "礼二", "海原ともこ"],
    results: [
      { rank: 1, name: "令和ロマン", totalScore: 648, judgeScores: [92, 93, 93, 94, 91, 95, 90], note: "最終決戦: 4票で優勝" },
      { rank: 2, name: "ヤーレンズ", totalScore: 656, judgeScores: [93, 94, 95, 96, 92, 94, 92], note: "最終決戦: 3票" },
      { rank: 3, name: "さや香", totalScore: 659, judgeScores: [98, 95, 95, 95, 89, 93, 94], note: "最終決戦: 0票" },
      { rank: 4, name: "マユリカ", totalScore: 645, judgeScores: [92, 91, 93, 92, 90, 93, 94] },
      { rank: 5, name: "真空ジェシカ", totalScore: 643, judgeScores: [90, 92, 94, 93, 92, 91, 91] },
      { rank: 6, name: "カベポスター", totalScore: 635, judgeScores: [94, 89, 90, 91, 89, 90, 92] },
      { rank: 7, name: "モグライダー", totalScore: 632, judgeScores: [87, 89, 92, 90, 91, 92, 91] },
      { rank: 8, name: "ダンビラムーチョ", totalScore: 631, judgeScores: [89, 90, 90, 92, 88, 91, 91] },
      { rank: 9, name: "シシガシラ", totalScore: 627, judgeScores: [87, 88, 89, 90, 92, 91, 90] },
      { rank: 10, name: "くらげ", totalScore: 620, judgeScores: [88, 89, 87, 88, 89, 88, 91] },
    ]
  },
  {
    id: "scores-m1-2019",
    tournament: "M-1",
    year: 2019,
    judges: ["オール巨人", "中川家 礼二", "塙宣之", "立川志らく", "富澤たけし", "松本人志", "上沼恵美子"],
    results: [
      { rank: 1, name: "ミルクボーイ", totalScore: 681, judgeScores: [97, 96, 99, 97, 97, 97, 98], note: "歴代最高得点記録" },
      { rank: 2, name: "かまいたち", totalScore: 660, judgeScores: [93, 94, 95, 95, 93, 95, 95] },
      { rank: 3, name: "ぺこぱ", totalScore: 654, judgeScores: [94, 92, 94, 91, 94, 93, 96] },
      { rank: 4, name: "和牛", totalScore: 652, judgeScores: [92, 96, 96, 96, 91, 92, 89] },
      { rank: 5, name: "見取り図", totalScore: 649, judgeScores: [94, 90, 92, 94, 91, 94, 94] },
      { rank: 6, name: "からし蓮根", totalScore: 639, judgeScores: [93, 93, 90, 89, 90, 90, 94] },
      { rank: 7, name: "オズワルド", totalScore: 638, judgeScores: [87, 91, 89, 90, 92, 90, 99] },
      { rank: 8, name: "すゑひろがりず", totalScore: 637, judgeScores: [92, 91, 89, 90, 90, 93, 92] },
      { rank: 9, name: "インディアンス", totalScore: 632, judgeScores: [92, 89, 89, 87, 90, 88, 97] },
      { rank: 10, name: "ニューヨーク", totalScore: 616, judgeScores: [87, 88, 88, 90, 88, 82, 93] },
    ]
  }
];
