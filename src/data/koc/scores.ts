import { TournamentScores } from "../types";

export const kocScores: TournamentScores[] = [
  {
    id: "scores-koc-2021",
    tournament: "KOC",
    year: 2021,
    judges: ["松本人志", "飯塚悟志", "小峠英二", "秋山竜次", "山内健司"],
    results: [
      { rank: 1, name: "空気階段", totalScore: 960, judgeScores: [193, 192, 192, 192, 191], note: "1st:486, Final:474 歴代最高得点(当時)" },
      { rank: 2, name: "ザ・マミィ", totalScore: 926, judgeScores: [185, 187, 183, 186, 185], note: "1st:476, Final:450" },
      { rank: 3, name: "男性ブランコ", totalScore: 925, judgeScores: [186, 184, 186, 184, 185], note: "1st:472, Final:453" },
      { rank: 4, name: "ニッポンの社長", totalScore: 463, judgeScores: [94, 91, 92, 93, 93], note: "1stのみ" },
      { rank: 5, name: "マヂカルラブリー", totalScore: 455, judgeScores: [92, 89, 92, 92, 90] },
      { rank: 6, name: "うるとらブギーズ", totalScore: 453, judgeScores: [91, 90, 92, 90, 90] },
      { rank: 7, name: "蛙亭", totalScore: 452, judgeScores: [92, 89, 90, 90, 91] },
      { rank: 8, name: "そいつどいつ", totalScore: 451, judgeScores: [90, 89, 91, 89, 92] },
      { rank: 9, name: "ジェラードン", totalScore: 445, judgeScores: [89, 87, 88, 90, 91] },
      { rank: 10, name: "ニューヨーク", totalScore: 440, judgeScores: [88, 88, 87, 89, 88] }
    ]
  },
  {
    id: "scores-koc-2023",
    tournament: "KOC",
    year: 2023,
    judges: ["松本人志", "飯塚悟志", "小峠英二", "秋山竜次", "山内健司"],
    results: [
      { rank: 1, name: "サルゴリラ", totalScore: 964, judgeScores: [192, 193, 194, 193, 192], note: "1st:482, Final:482 歴代最高得点更新" },
      { rank: 2, name: "カゲヤマ", totalScore: 945, judgeScores: [188, 189, 187, 190, 191], note: "1st:469, Final:476" },
      { rank: 3, name: "ニッポンの社長", totalScore: 934, judgeScores: [185, 188, 185, 188, 188], note: "1st:468, Final:466" },
      { rank: 4, name: "ファイヤーサンダー", totalScore: 466, judgeScores: [93, 94, 93, 93, 93], note: "1stのみ" },
      { rank: 5, name: "や団", totalScore: 465, judgeScores: [93, 93, 92, 93, 94] },
      { rank: 6, name: "ジグザグジギー", totalScore: 464, judgeScores: [91, 93, 92, 94, 94] },
      { rank: 7, name: "ラブレターズ", totalScore: 464, judgeScores: [93, 93, 92, 93, 93] },
      { rank: 8, name: "蛙亭", totalScore: 463, judgeScores: [90, 93, 93, 93, 94] },
      { rank: 9, name: "隣人", totalScore: 460, judgeScores: [91, 91, 92, 93, 93] },
      { rank: 10, name: "ゼンモンキー", totalScore: 456, judgeScores: [90, 90, 91, 92, 93] }
    ]
  }
];
