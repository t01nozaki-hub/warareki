import { TournamentScores, ScoreResult } from "./types";
import { m1Scores } from "./m1";
import { kocScores } from "./koc";
import { r1Scores } from "./r1";

export type { TournamentScores, ScoreResult };

export const scoresData: TournamentScores[] = [
  ...m1Scores,
  ...kocScores,
  ...r1Scores
];
