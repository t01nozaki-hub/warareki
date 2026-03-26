"use client";

import { useState, useEffect } from 'react';
import { scoresData, TournamentScores } from '@/data/scores';
import { Trophy, ChevronDown } from 'lucide-react';

export default function ScoreTable({ tournament }: { tournament: "M-1" | "KOC" | "R-1" }) {
  const filteredScores = scoresData
    .filter(s => s.tournament === tournament)
    .sort((a, b) => b.year - a.year);

  const [selectedYear, setSelectedYear] = useState<number>(0);

  // 初回レンダリング時、またはtournament変更時に最初の年をセット
  useEffect(() => {
    if (filteredScores.length > 0) {
      setSelectedYear(filteredScores[0].year);
    }
  }, [tournament]);

  if (filteredScores.length === 0) return null;

  const currentData = filteredScores.find(s => s.year === selectedYear) || filteredScores[0];
  if (!currentData) return null;

  return (
    <div className="w-full mt-16 border-t-2 border-accent/50 pt-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 flex items-center justify-center gap-3">
          <Trophy className="h-8 w-8 text-accent" />
          歴代大会 審査員採点表
        </h2>
        <p className="text-slate-400">1点の重みが運命を分ける。歴代のすべての得点内訳を特別公開。</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center bg-card p-4 rounded-2xl border border-border shadow-md mb-8">
        <label className="font-bold text-lg mb-2 sm:mb-0">大会年度を選択：</label>
        <div className="relative">
          <select 
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="appearance-none bg-background border border-border text-foreground font-bold py-3 pr-12 pl-4 rounded-xl focus:outline-none focus:border-accent hover:border-accent/50 transition-colors"
          >
            {filteredScores.map(score => (
              <option key={score.id} value={score.year}>{score.year}年 大会</option>
            ))}
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
        </div>
      </div>

      {/* PC・タブレット版： マトリクステーブル */}
      <div className="hidden md:block overflow-x-auto bg-card rounded-2xl border border-border shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-background/80 border-b border-border text-slate-300">
              <th className="p-4 font-bold whitespace-nowrap text-center">順位</th>
              <th className="p-4 font-bold min-w-[150px]">コンビ／芸名</th>
              <th className="p-4 font-bold text-center text-accent">合計得点</th>
              {currentData.judges.map((judge, idx) => (
                <th key={idx} className="p-4 font-bold text-center text-sm w-[80px]">
                  <div className="writing-vertical-rl transform rotate-180 mx-auto whitespace-nowrap truncate max-h-[100px]">{judge}</div>
                </th>
              ))}
              <th className="p-4 font-bold min-w-[100px]">備考</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {currentData.results.map((res) => (
              <tr key={res.name} className="hover:bg-background/40 transition-colors">
                <td className="p-4 text-center">
                  <span className={`inline-block w-8 h-8 leading-8 rounded-full font-bold ${
                    res.rank === 1 ? 'bg-yellow-500 text-black shadow-[0_0_10px_rgba(234,179,8,0.5)]' :
                    res.rank === 2 ? 'bg-slate-300 text-black' :
                    res.rank === 3 ? 'bg-amber-700 text-white' : 'bg-background border border-border'
                  }`}>
                    {res.rank}
                  </span>
                </td>
                <td className="p-4 font-bold text-lg">{res.name}</td>
                <td className="p-4 text-center font-black text-2xl text-accent">{res.totalScore}</td>
                {res.judgeScores.map((score, idx) => (
                  <td key={idx} className="p-4 text-center font-mono text-lg">{score}</td>
                ))}
                <td className="p-4 text-sm text-slate-400">{res.note || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* スマートフォン版： カード型UI */}
      <div className="md:hidden space-y-4">
        {currentData.results.map((res) => (
          <div key={res.name} className="bg-card border border-border p-5 rounded-2xl shadow-lg relative overflow-hidden">
            {res.rank <= 3 && (
              <div className="absolute -top-10 -right-10 w-32 h-32 opacity-10 blur-xl rounded-full" style={{
                backgroundColor: res.rank === 1 ? '#eab308' : res.rank === 2 ? '#cbd5e1' : '#b45309'
              }} />
            )}
            
            <div className="flex justify-between items-center mb-4 border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <span className={`inline-block w-8 h-8 leading-8 text-center rounded-full font-bold text-sm ${
                  res.rank === 1 ? 'bg-yellow-500 text-black' :
                  res.rank === 2 ? 'bg-slate-300 text-black' :
                  res.rank === 3 ? 'bg-amber-700 text-white' : 'bg-background border border-border'
                }`}>
                  {res.rank}
                </span>
                <span className="font-bold text-xl">{res.name}</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block -mb-1">合計点</span>
                <span className="font-black text-3xl text-accent">{res.totalScore}</span>
              </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mb-2">
              {currentData.judges.map((judge, idx) => (
                <div key={idx} className="bg-background border border-border/50 rounded-lg p-2 text-center flex flex-col justify-between">
                  <span className="text-[10px] text-slate-400 mb-1 leading-tight line-clamp-2">{judge}</span>
                  <span className="font-mono font-bold text-lg">{res.judgeScores[idx]}</span>
                </div>
              ))}
            </div>
            
            {res.note && (
              <div className="mt-3 text-xs text-slate-400 bg-background/50 px-3 py-2 rounded-md">
                {res.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
