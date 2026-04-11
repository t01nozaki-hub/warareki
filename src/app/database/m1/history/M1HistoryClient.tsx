"use client";

import { useSearchParams } from 'next/navigation';
import { m1HistoryData } from '@/data/m1/history';
import { Trophy, Users, Star, Crown, Info } from 'lucide-react';
import Link from 'next/link';
import ContestantLink from '@/components/features/ContestantLink';
import YouTubeButton from '@/components/features/YouTubeButton';
import AdSpace from '@/components/features/AdSpace';
import { contestantsData } from '@/data/contestants';

export default function M1HistoryClient() {
  const searchParams = useSearchParams();
  const yearParam = searchParams.get('year');
  const defaultYear = 2025;
  const currentYear = yearParam ? parseInt(yearParam, 10) : defaultYear;
  
  const yearData = m1HistoryData.find(d => d.year === currentYear) || m1HistoryData[0];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <Link href="/database" className="hover:text-accent transition-colors">データベース一覧</Link>
          <span>&gt;</span>
          <Link href="/database/m1" className="hover:text-accent transition-colors">M-1グランプリ トップ</Link>
          <span>&gt;</span>
          <span className="text-foreground">年度別 完全データ ({currentYear}年)</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold flex items-center gap-3">
          <Trophy className="h-8 w-8 md:h-10 md:w-10 text-accent" />
          M-1グランプリ 年度別完全データ
        </h1>
      </div>

      {/* 年度切り替えナビゲーション */}
      <div className="bg-card border border-border p-4 rounded-xl shadow-lg mb-10 overflow-x-auto">
        <div className="flex flex-nowrap gap-2 pb-2">
          {m1HistoryData.map((d) => (
            <Link 
              key={d.year} 
              href={`/database/m1/history?year=${d.year}`}
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

      {/* 現在選択中の年度の詳細 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* サマリー情報 */}
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
                {yearData.judges.map(judge => (
                  <span key={judge} className="bg-card border border-border px-3 py-1 rounded-full text-sm font-bold">
                    {judge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <AdSpace label="PR / おすすめコンテンツ" type="vertical" className="mt-6 h-auto sticky top-4" />
        </div>

        {/* 順位とプロフィールのリスト */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 border-b border-border pb-3">
            <Crown className="w-6 h-6 text-yellow-500" />
            決勝進出者 最終順位・プロフィール
          </h3>
          
          {yearData.results.map((res) => {
            const appearances = m1HistoryData
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
                      <span className="text-xs font-bold text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-md">
                        得点: {res.totalScore}{typeof res.totalScore === 'number' || !isNaN(Number(res.totalScore)) ? '点' : ''}
                      </span>
                    )}
                    <span className="text-xs font-bold text-slate-300 bg-slate-800 border border-slate-600 px-2.5 py-1 rounded-md">
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
          
          {/* Bottom Ad Space */}
          <AdSpace label="Advertisement" type="horizontal" className="mt-8" />
        </div>
      </div>
    </div>
  );
}
