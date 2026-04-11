import { m1HistoryData } from "@/data/m1/history";
import { kocHistoryData } from "@/data/koc/history";
import { r1HistoryData } from "@/data/r1/history";

export type Appearance = {
  tournament: "M-1" | "KOC" | "R-1";
  year: number;
  edition?: number;
  rank: number | string;
  totalScore?: number | string;
  profile: string;
  note?: string;
};

/**
 * 芸人名に一致するすべての大会出場記録を取得する
 */
export function getAppearancesByName(name: string): Appearance[] {
  const result: Appearance[] = [];

  // M-1
  m1HistoryData.forEach(yearData => {
    const match = yearData.results.find(r => r.name === name);
    if (match) {
      result.push({
        tournament: "M-1",
        year: yearData.year,
        edition: yearData.edition,
        rank: match.rank,
        totalScore: match.totalScore,
        profile: match.profile,
        note: match.note
      });
    }
  });

  // KOC
  kocHistoryData.forEach(yearData => {
    // kocHistoryData の構造を確認する必要があるが、一旦 m1 と同様と仮定
    // 実際には kocHistoryData[].finalists かもしれない
    // @ts-ignore
    const finalists = yearData.finalists || yearData.results;
    if (finalists) {
      const match = finalists.find((r: any) => r.name === name);
      if (match) {
        result.push({
          tournament: "KOC",
          year: yearData.year,
          edition: yearData.edition,
          rank: match.rank,
          totalScore: match.totalScore,
          profile: match.profile || match.description,
          note: match.note
        });
      }
    }
  });

  // R-1
  r1HistoryData.forEach(yearData => {
    // @ts-ignore
    const finalists = yearData.finalists || yearData.results;
    if (finalists) {
      const match = finalists.find((r: any) => r.name === name);
      if (match) {
        result.push({
          tournament: "R-1",
          year: yearData.year,
          edition: yearData.edition,
          rank: match.rank,
          totalScore: match.totalScore,
          profile: match.profile || match.description,
          note: match.note
        });
      }
    }
  });

  // 年の降順でソート
  return result.sort((a, b) => b.year - a.year);
}
