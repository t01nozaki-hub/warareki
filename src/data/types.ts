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
  catchphrase?: string;
  winningNeta?: string;
};

export type Finalist = {
  id: string;
  tournament: "M-1" | "KOC" | "R-1";
  year: number;
  name: string;
  rank: number | string;
  currentActivity: string;
  snsLinks?: {
    x?: string;
    youtube?: string;
  };
  affiliateProduct?: {
    title: string;
    url: string;
  };
};

export type ScoreResult = {
  rank: number;
  name: string;
  totalScore: number;
  judgeScores: number[]; // 各審査員の点数 (judgesのインデックスに対応)
  note?: string; // 例: 「最終決戦 〇票」など
};

export type Contestant = {
  name: string;
  hometown?: string;
  agency?: string;
  formedDate?: string;
  members?: {
    name: string;
    birthplace?: string;
  }[];
  youtubeUrl?: string;
  xUrl?: string;
  officialSite?: string;
  image?: string;
  description?: string;
};

export type TournamentScores = {
  id: string;
  tournament: "M-1" | "KOC" | "R-1";
  year: number;
  judges: string[]; // 審査員の名前リスト（並び順は judgeScores と一致させる）
  results: ScoreResult[]; // 出場者の結果リスト（順位順）
};
