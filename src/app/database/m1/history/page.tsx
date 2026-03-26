import type { Metadata } from 'next';
import { m1HistoryData } from '@/data/m1/history';
import { Trophy, Users, Star, Crown, MessageCircle, Info } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'M-1歴代完全データベース (2001-2025) | 順位・得点・参加組数',
  description: 'M-1グランプリの2001年第1回大会から最新2025年の全参加組数、審査員、決勝進出者全員のプロフィール・得点を年別にまとめた究極のデータベースです。',
};

export default async function M1HistoryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  // 初期値は最新年(2025)
  const defaultYear = 2025;
  const currentYear = resolvedParams?.year ? parseInt(resolvedParams.year as string, 10) : defaultYear;
  
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
        
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 flex items-center gap-3">
          <Trophy className="h-8 w-8 md:h-10 md:w-10 text-accent" />
          M-1グランプリ 年度別完全データ
        </h1>
        <p className="text-slate-400 max-w-3xl leading-relaxed">
          第1回（2001年）から最新大会までの参加組数、審査員一覧、そして全ファイナリストの得点とプロフィールを一覧できます。
        </p>
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
                res.rank === 2 ? 'bg-slate-300/10 border-slate-300/30' :
                res.rank === 3 ? 'bg-amber-700/10 border-amber-700/30' :
                'bg-card border-border hover:border-accent/40'
              }`}>
                
                <div className="flex-shrink-0 flex flex-col items-center justify-center sm:w-20">
                  <span className={`text-3xl font-black italic ${
                    res.rank === 1 ? 'text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]' :
                    res.rank === 2 ? 'text-slate-300' :
                    res.rank === 3 ? 'text-amber-700' :
                    'text-slate-500'
                  }`}>
                    {res.rank}<span className="text-base text-slate-400 ml-0.5">位</span>
                  </span>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h4 className="text-xl sm:text-2xl font-bold">{res.name}</h4>
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
        </div>
      </div>
    </div>
  );
}
