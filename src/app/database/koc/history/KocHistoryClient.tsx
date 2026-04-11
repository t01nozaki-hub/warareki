"use client";

import { useSearchParams } from 'next/navigation';
import { kocHistoryData } from '@/data/koc/history';
import { Trophy, Users, Star, Crown, Info, ListChecks, Swords } from 'lucide-react';
import Link from 'next/link';
import ContestantLink from '@/components/features/ContestantLink';
import YouTubeButton from '@/components/features/YouTubeButton';
import AdSpace from '@/components/features/AdSpace';
import { contestantsData } from '@/data/contestants';

export default function KocHistoryClient() {
  const searchParams = useSearchParams();
  const yearParam = searchParams.get('year');
  const defaultYear = 2025;
  const currentYear = yearParam ? parseInt(yearParam, 10) : defaultYear;
  
  const yearData = kocHistoryData.find(d => d.year === currentYear) || kocHistoryData[kocHistoryData.length - 1];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <Link href="/database" className="hover:text-accent transition-colors">データベース一覧</Link>
          <span>&gt;</span>
          <Link href="/database/koc" className="hover:text-accent transition-colors">キングオブコント トップ</Link>
          <span>&gt;</span>
          <span className="text-foreground">年度別 完全データ ({currentYear}年)</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold flex items-center gap-3">
          <Trophy className="h-8 w-8 md:h-10 md:w-10 text-accent" />
          キングオブコント 年度別完全データ
        </h1>
      </div>

      <div className="bg-card border border-border p-4 rounded-xl shadow-lg mb-10 overflow-x-auto">
        <div className="flex flex-nowrap gap-2 pb-2">
          {kocHistoryData.map((d) => (
            <Link 
              key={d.year} 
              href={`/database/koc/history?year=${d.year}`}
              className={`px-4 py-2 rounded-lg whitespace-nowrap font-bold transition-colors ${
                currentYear === d.year 
                  ? 'bg-accent text-slate-900 border-accent' 
                  : 'bg-background text-slate-400 border border-border hover:border-accent/50 hover:text-foreground'
              }`}
            >
              {d.year}年 (第{d.edition}回)
            </Link>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1 bg-gradient-to-br from-accent/10 to-background border border-accent/30 p-6 rounded-2xl h-fit">
          <div className="text-accent font-bold mb-2">第{yearData.edition}回 大会</div>
          <h2 className="text-4xl font-black mb-6">{yearData.year}年</h2>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-1 font-bold">
                <Users className="w-4 h-4" /> 参加組数 (エントリー)
              </div>
              <div className="text-3xl font-bold">{yearData.entryCount.toLocaleString()}<span className="text-lg font-normal text-slate-400 ml-1">組</span></div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-slate-400 text-sm mb-2 font-bold">
                <Star className="w-4 h-4" /> 決勝審査員 ({yearData.judges.length}名)
              </div>
              <div className="flex flex-wrap gap-2">
                {yearData.judges.map((judge, idx) => (
                  <span key={idx} className="bg-card border border-border px-3 py-1 rounded-full text-sm font-bold">
                    {judge}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* 大会ルールの解説 */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex items-center gap-2 text-accent font-bold mb-3">
              <ListChecks className="w-5 h-5" />
              大会形式・ルール
            </div>
            <div className="bg-background/50 p-4 rounded-xl border border-border text-xs leading-relaxed text-slate-300">
              {yearData.rules}
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          {/* ブロック別結果（存在する場合） */}
          {yearData.blocks && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2 border-b border-border pb-3">
                <Swords className="w-6 h-6 text-orange-500" />
                ブロック別・1stステージ結果
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {yearData.blocks.map((block) => (
                  <div key={block.name} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-slate-800 px-4 py-2 font-bold text-sm border-b border-border flex justify-between items-center">
                      {block.name}
                      <span className="text-[10px] text-slate-400 font-normal">1st Stage</span>
                    </div>
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-[10px] text-slate-500 uppercase border-b border-border/50">
                          <th className="px-4 py-2 font-medium">順位</th>
                          <th className="px-2 py-2 font-medium">コンビ名</th>
                          <th className="px-4 py-2 font-medium text-right">得点/結果</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/30">
                        {block.results.map((r) => (
                          <tr key={r.name} className={`group ${r.isAdvanced ? 'bg-accent/5' : ''}`}>
                            <td className="px-4 py-2 font-bold text-slate-400">{r.rank}</td>
                            <td className="px-2 py-2 font-bold group-hover:text-accent transition-colors">
                              {r.name}
                              {r.isAdvanced && <span className="ml-1 text-[10px] text-accent">★</span>}
                            </td>
                            <td className={`px-4 py-2 text-right font-mono ${r.isAdvanced ? 'text-accent' : 'text-slate-400'}`}>
                              {r.score}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b border-border pb-3">
              <Crown className="w-6 h-6 text-yellow-500" />
              決勝進出者 最終順位・プロフィール
            </h3>
            
            <div className="space-y-4">
              {yearData.results.map((res) => {
            const appearances = kocHistoryData
              .filter(d => d.year <= currentYear)
              .flatMap(d => d.results)
              .filter(r => r.name === res.name).length;

              return (
                <div key={res.name} className={`p-5 rounded-xl border flex flex-col sm:flex-row gap-4 relative overflow-hidden transition-colors ${
                  res.rank === 1 ? 'bg-yellow-500/10 border-yellow-500/50' :
                  'bg-card border-border hover:border-accent/40'
                }`}>
                  
                  <div className="flex-shrink-0 flex flex-col items-center justify-center sm:w-20">
                    <span className={`text-3xl font-black italic ${
                      res.rank === 1 ? 'text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]' :
                      'text-slate-500'
                    }`}>
                      {res.rank}<span className="text-base text-slate-400 ml-0.5">位</span>
                    </span>
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <ContestantLink name={res.name} className="text-xl sm:text-2xl font-bold" />
                      <YouTubeButton name={res.name} url={contestantsData[res.name]?.youtubeUrl} size="sm" />
                      {res.rank === 1 && <span className="text-xs bg-yellow-500 text-black px-2 py-0.5 rounded-full font-bold ml-2">優勝👑</span>}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {res.totalScore && (
                        <div className="flex flex-col gap-1">
                          <span className="text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md inline-block">
                            得点: {res.totalScore}{typeof res.totalScore === 'number' || !isNaN(Number(res.totalScore)) ? '点' : ''}
                          </span>
                          {res.score1 !== undefined && res.score2 !== undefined && (
                            <span className="text-[10px] text-slate-400 font-medium ml-1">
                              (1st: {res.score1} / Final: {res.score2})
                            </span>
                          )}
                        </div>
                      )}
                      <span className="text-xs font-bold text-slate-300 bg-slate-800 border border-slate-600 px-2.5 py-1 rounded-md h-fit">
                        決勝出場: {appearances}回目
                      </span>
                    </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-2">
                    {res.profile}
                  </p>
                  {res.note && (
                    <p className="text-xs text-slate-400 flex items-center gap-1 bg-background/50 inline-block px-2 py-1 rounded mt-1">
                      <Info className="w-3 h-3" /> {res.note}
                    </p>
                  )}
                </div>
              </div>
            );
              })}
            </div>
          </div>
          
          {/* Bottom Ad Space */}
          <AdSpace label="Advertisement" type="horizontal" className="mt-8" />
        </div>
      </div>
    </div>
  );
}
