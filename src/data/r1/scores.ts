import { TournamentScores } from "../types";

export const r1Scores: TournamentScores[] = [
  {
    id: "scores-r1-2024",
    tournament: "R-1",
    year: 2024,
    judges: ["陣内智則", "バカリズム", "小籔千豊", "野田クリスタル", "ハリウッドザコシショウ"],
    results: [
      { rank: 1, name: "街裏ぴんく", totalScore: 471, judgeScores: [94, 94, 95, 96, 92], note: "最終決戦: 3票" },
      { rank: 2, name: "吉住", totalScore: 470, judgeScores: [93, 93, 95, 95, 94], note: "最終決戦: 2票" },
      { rank: 3, name: "ルシファー吉岡", totalScore: 475, judgeScores: [96, 95, 93, 97, 94], note: "最終決戦: 0票 (1st最高得点)" },
      { rank: 4, name: "真輝志", totalScore: 458, judgeScores: [92, 91, 91, 92, 92] },
      { rank: 5, name: "どくさいスイッチ企画", totalScore: 458, judgeScores: [92, 90, 93, 92, 91] },
      { rank: 6, name: "サツマカワRPG", totalScore: 457, judgeScores: [90, 89, 90, 92, 96] },
      { rank: 7, name: "寺田寛明", totalScore: 455, judgeScores: [90, 92, 89, 92, 92] },
      { rank: 8, name: "お抹茶", totalScore: 450, judgeScores: [89, 87, 88, 93, 93] },
      { rank: 9, name: "kento fukaya", totalScore: 447, judgeScores: [89, 89, 88, 89, 92] }
    ]
  }
];
