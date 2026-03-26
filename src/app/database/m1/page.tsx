import type { Metadata } from 'next';
import { championsData, type Champion } from '@/data/champions';
import { finalistsData, type Finalist } from '@/data/finalists';
import { Trophy, Tv, ExternalLink, Users, ShoppingCart, MessageCircle, PlaySquare } from 'lucide-react';
import Link from 'next/link';
import ScoreTable from '@/components/features/ScoreTable';

export const metadata: Metadata = {
  title: 'M-1 歴代王者 一覧 | M-1 過去回 視聴方法',
  description: 'M-1グランプリ歴代王者の優勝ネタ、当時のキャッチコピー、そして過去回のフル動画視聴方法を網羅した完全データベースです。',
};

export default function M1DatabasePage() {
  const m1Champions = championsData
    .filter((c: Champion) => c.tournament === 'M-1')
    .sort((a: Champion, b: Champion) => a.year - b.year);
    
  const m1Finalists = finalistsData
    .filter((f: Finalist) => f.tournament === 'M-1')
    .sort((a: Finalist, b: Finalist) => b.year - a.year);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <Link href="/database" className="hover:text-accent transition-colors">データベース一覧</Link>
          <span>&gt;</span>
          <span className="text-foreground">M-1グランプリ 歴代王者 & ファイナリスト</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center gap-3">
          <Trophy className="h-10 w-10 text-accent" />
          M-1グランプリ 歴代王者＆伝説の回まとめ
        </h1>
        <p className="text-slate-400 max-w-3xl text-lg leading-relaxed mb-6">
          「笑ってはいけない」緊張感の中で生み出された数々のドラマ。各年の優勝ネタやキャッチコピーとともに、あの興奮を何度でも。
        </p>
        
        <div className="mb-4">
          <Link href="/database/m1/history" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-amber-500 text-slate-900 font-extrabold py-4 px-8 rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]">
            <Trophy className="w-6 h-6" />
            2001年〜2025年 歴代完全データベースを見る
          </Link>
        </div>
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
            {m1Champions.map((champ: Champion) => (
              <tr key={champ.id} className="hover:bg-background/40 transition-colors group">
                <td className="p-4 align-top">
                  <div className="font-mono text-accent font-bold">第{champ.year - 2000}回</div>
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
      
      {/* 決勝出場者（ファイナリスト）名鑑セクション */}
      <div className="mb-12 border-t-2 border-accent pt-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 flex items-center gap-3">
          <Users className="h-8 w-8 text-accent" />
          M-1グランプリ 歴代ファイナリスト名鑑
        </h2>
        <p className="text-slate-400 max-w-3xl text-lg leading-relaxed mb-10">
          王座には届かなかったものの、決勝の舞台で強烈なインパクトを残した伝説のファイナリストたち。
          彼らのその後の活躍や、関連グッズ情報をご紹介します。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {m1Finalists.map((f: Finalist) => (
            <div key={f.id} className="bg-card border border-border p-6 rounded-2xl hover:border-accent/50 transition-colors shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[80px] -z-10 group-hover:scale-125 transition-transform" />
              
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-xs font-bold text-slate-800 bg-accent px-2 py-1 rounded inline-block mb-2">
                    {f.year}年 決勝 第{f.rank}位
                  </span>
                  <h3 className="text-2xl font-bold">{f.name}</h3>
                </div>
                {/* SNS Links */}
                <div className="flex gap-2 text-slate-400">
                  {f.snsLinks?.x && (
                    <a href={f.snsLinks.x} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors bg-background p-2 rounded-full border border-border" title="X (Twitter) を見る">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  )}
                  {f.snsLinks?.youtube && (
                    <a href={f.snsLinks.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors bg-background p-2 rounded-full border border-border" title="YouTube を見る">
                      <PlaySquare className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-xs text-slate-500 font-bold tracking-wide uppercase block mb-1">現在の活動状況</span>
                <p className="text-slate-300 text-sm leading-relaxed">{f.currentActivity}</p>
              </div>
              
              {/* Affiliate Product */}
              {f.affiliateProduct && (
                <div className="mt-auto pt-4 border-t border-border/50">
                  <span className="text-xs text-slate-500 font-bold tracking-wide uppercase block mb-2">関連グッズ・書籍 (PR)</span>
                  <a 
                    href={f.affiliateProduct.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-background border border-border hover:border-accent hover:bg-accent/5 transition-all group/link"
                  >
                    <div className="bg-accent text-slate-900 p-2 rounded-lg">
                      <ShoppingCart className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-foreground group-hover/link:text-accent transition-colors">
                      {f.affiliateProduct.title}
                    </span>
                    <ExternalLink className="w-4 h-4 ml-auto text-slate-500" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <ScoreTable tournament="M-1" />

      <div className="mt-16 text-center p-6 bg-accent/5 border border-accent/20 rounded-xl">
        <p className="text-slate-300 text-sm">
          ※ YouTubeの検索結果や出場者の公式チャンネルの有無は時期により変動する場合があります。
        </p>
      </div>
    </div>
  );
}
