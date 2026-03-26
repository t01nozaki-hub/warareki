import type { Metadata } from 'next';
import { championsData, type Champion } from '@/data/champions';
import { Trophy, Tv, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import ScoreTable from '@/components/features/ScoreTable';

export const metadata: Metadata = {
  title: 'R-1グランプリ 歴代王者一覧 | 過去回 視聴方法',
  description: 'R-1グランプリ歴代王者の優勝ネタ、当時のキャッチコピー、そして過去回のフル動画視聴方法を網羅した完全データベースです。',
};

export default function R1DatabasePage() {
  const r1Champions = championsData
    .filter((c: Champion) => c.tournament === 'R-1')
    .sort((a: Champion, b: Champion) => a.year - b.year);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <Link href="/database" className="hover:text-accent transition-colors">データベース一覧</Link>
          <span>&gt;</span>
          <span className="text-foreground">R-1グランプリ 歴代王者 & ファイナリスト</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center gap-3">
          <Trophy className="h-10 w-10 text-accent" />
          R-1グランプリ 歴代王者＆伝説のピン芸まとめ
        </h1>
        <p className="text-slate-400 max-w-3xl text-lg leading-relaxed mb-6">
          孤高の戦いを制し頂点に立ったピン芸の天才たち。フリップからギター、コントまで多様な形の笑いを記録しています。
        </p>

        <div className="mb-4">
          <Link href="/database/r1/history" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-amber-500 text-slate-900 font-extrabold py-4 px-8 rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]">
            <Trophy className="w-6 h-6" />
            2002年〜2025年 歴代完全データベースを見る
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto bg-card rounded-2xl border border-border shadow-xl mb-24">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-background/80 border-b border-border text-slate-300">
              <th className="p-4 font-bold whitespace-nowrap">回（年度）</th>
              <th className="p-4 font-bold whitespace-nowrap min-w-[150px]">優勝者</th>
              <th className="p-4 font-bold min-w-[200px]">決勝のキャッチコピー</th>
              <th className="p-4 font-bold min-w-[200px]">優勝ネタ・伝説のポイント</th>
              <th className="p-4 font-bold whitespace-nowrap min-w-[280px]">視聴リンク</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {r1Champions.map((champ: Champion) => (
              <tr key={champ.id} className="hover:bg-background/40 transition-colors group">
                <td className="p-4 align-top">
                  <div className="font-mono text-accent font-bold">第{champ.year - 2001}回</div>
                  <div className="text-xs text-slate-400">({champ.year})</div>
                </td>
                <td className="p-4 align-top">
                  <div className="text-xl font-bold">{champ.name}</div>
                  <div className="flex gap-2 mt-2 text-xs">
                    <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 border border-slate-700">年齢: {champ.ageAtWin}</span>
                    <span className="bg-slate-800 px-2 py-0.5 rounded text-slate-300 border border-slate-700">芸歴: {champ.careerYears}年</span>
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
                    <span className="text-xs text-slate-400 font-bold mb-1 flex items-center gap-1">▶️ 出場者のYouTubeを探す</span>
                    <a 
                      href={`https://www.youtube.com/results?search_query=${encodeURIComponent(champ.name + ' 公式チャンネル')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/30 font-bold py-3 px-4 rounded-xl hover:bg-[#ff0000]/20 transition-all hover:scale-105 shadow-md hover:shadow-[#ff0000]/20 text-sm whitespace-nowrap"
                    >
                      <Tv className="w-5 h-5 flex-shrink-0" />
                      YouTubeチャンネルを見る
                      <ExternalLink className="w-4 h-4 ml-1 opacity-70 flex-shrink-0" />
                    </a>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ScoreTable tournament="R-1" />

      <div className="mt-16 text-center p-6 bg-accent/5 border border-accent/20 rounded-xl">
        <p className="text-slate-300 text-sm">
          ※ YouTubeの検索結果や出場者の公式チャンネルの有無は時期により変動する場合があります。
        </p>
      </div>
    </div>
  );
}
