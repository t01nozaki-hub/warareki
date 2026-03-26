import type { Metadata } from 'next';
import { championsData, type Champion } from '@/data/champions';
import { finalistsData, type Finalist } from '@/data/finalists';
import { Trophy, Tv, ExternalLink, Users } from 'lucide-react';
import Link from 'next/link';
import ScoreTable from '@/components/features/ScoreTable';

export const metadata: Metadata = {
  title: 'キングオブコント(KOC) 歴代王者一覧 | 過去回 視聴方法',
  description: 'キングオブコント歴代王者の優勝ネタ、当時のキャッチコピー、そして過去回のフル動画視聴方法を網羅した完全データベースです。',
};

export default function KocDatabasePage() {
  const kocChampions = championsData
    .filter((c: Champion) => c.tournament === 'KOC')
    .sort((a: Champion, b: Champion) => a.year - b.year);
    
  const kocFinalists = finalistsData
    .filter((f: Finalist) => f.tournament === 'KOC')
    .sort((a: Finalist, b: Finalist) => b.year - a.year);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <Link href="/database" className="hover:text-accent transition-colors">データベース一覧</Link>
          <span>&gt;</span>
          <span className="text-foreground">キングオブコント 歴代王者 & ファイナリスト</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center gap-3">
          <Trophy className="h-10 w-10 text-accent" />
          キングオブコント 歴代王者＆伝説のコントまとめ
        </h1>
        <p className="text-slate-400 max-w-3xl text-lg leading-relaxed mb-6">
          真のコント日本一を決める戦い。劇的な逆転劇や、歴史に名を刻んだ伝説のキャラクターたちを振り返ります。
        </p>
      </div>

      <div className="overflow-x-auto bg-card rounded-2xl border border-border shadow-xl mb-24">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-background/80 border-b border-border text-slate-300">
              <th className="p-4 font-bold whitespace-nowrap">回（年度）</th>
              <th className="p-4 font-bold whitespace-nowrap min-w-[150px]">優勝コンビ</th>
              <th className="p-4 font-bold min-w-[200px]">決勝のキャッチコピー</th>
              <th className="p-4 font-bold min-w-[200px]">優勝ネタ・伝説のポイント</th>
              <th className="p-4 font-bold whitespace-nowrap min-w-[280px]">視聴リンク</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {kocChampions.map((champ: Champion) => (
              <tr key={champ.id} className="hover:bg-background/40 transition-colors group">
                <td className="p-4 align-top">
                  <div className="font-mono text-accent font-bold">第{champ.year - 2007}回</div>
                  <div className="text-xs text-slate-400">({champ.year})</div>
                </td>
                <td className="p-4 align-top">
                  <div className="text-xl font-bold">{champ.name}</div>
                  <div className="flex gap-2 mt-2 text-xs">
                    <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 border border-slate-700">年齢: {champ.ageAtWin}</span>
                    <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 border border-slate-700">結成: {champ.careerYears}年</span>
                  </div>
                </td>
                <td className="p-4 align-top text-slate-300 italic">
                  &quot;{champ.catchphrase || '（データなし）'}&quot;
                </td>
                <td className="p-4 align-top">
                  <div className="font-bold text-foreground mb-1">
                    ネタ: {champ.winningNeta || '不明'}
                  </div>
                  <div className="text-sm text-slate-400 leading-relaxed">
                    {champ.description}
                  </div>
                </td>
                <td className="p-4 align-top min-w-[280px]">
                  <div className="flex flex-col gap-2">
                    <span className="text-xs text-accent font-bold mb-1">🔥 今すぐこの年の決勝戦をフル視聴する</span>
                    <a 
                      href={champ.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-accent text-slate-900 font-bold py-3 px-4 rounded-xl hover:bg-accent-hover transition-all hover:scale-105 shadow-md hover:shadow-accent/40 text-sm whitespace-nowrap"
                    >
                      <Tv className="w-5 h-5 flex-shrink-0" />
                      詳細を見る / 視聴する
                      <ExternalLink className="w-4 h-4 ml-1 opacity-70 flex-shrink-0" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mb-12 border-t-2 border-accent pt-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
          <Users className="h-8 w-8 text-accent" />
          キングオブコント 歴代ファイナリスト名鑑
        </h2>
        <p className="text-slate-400 max-w-3xl text-lg leading-relaxed mb-10">
          惜しくも優勝を逃したものの、強烈な記憶を焼き付けたコント師たちの軌跡。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {kocFinalists.map((f: Finalist) => (
            <div key={f.id} className="bg-card border border-border p-6 rounded-2xl hover:border-accent/50 transition-colors shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[80px] -z-10 group-hover:scale-125 transition-transform" />
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-slate-800 bg-accent px-2 py-1 rounded inline-block mb-2">
                    {f.year}年 決勝 第{f.rank}位
                  </span>
                  <h3 className="text-2xl font-bold">{f.name}</h3>
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-xs text-slate-500 font-bold tracking-wide uppercase block mb-1">現在の活動状況</span>
                <p className="text-slate-300 text-sm leading-relaxed">{f.currentActivity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ScoreTable tournament="KOC" />

      <div className="mt-16 text-center p-6 bg-accent/5 border border-accent/20 rounded-xl">
        <p className="text-slate-300 text-sm">
          ※ 配信サービス(VOD)の配信状況は変更される場合があります。リンク先(U-NEXT, Lemino, Netflix等)で最新情報をご確認ください。
        </p>
      </div>
    </div>
  );
}
