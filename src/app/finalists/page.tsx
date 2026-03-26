import { Metadata } from 'next';
import { finalistsData, Finalist } from '@/data/finalists';
import { Trophy, Users, ShoppingCart, MessageCircle, PlaySquare, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '歴代ファイナリスト名鑑 | わられき（笑歴）',
  description: 'M-1グランプリ、キングオブコント、R-1グランプリの歴代ファイナリスト（決勝進出者）の現在の活動状況、SNSリンク、関連グッズを紹介します。',
};

export default function FinalistsDirectoryPage() {
  const m1Finalists = finalistsData.filter(f => f.tournament === 'M-1').sort((a,b) => b.year - a.year);
  const kocFinalists = finalistsData.filter(f => f.tournament === 'KOC').sort((a,b) => b.year - a.year);
  const r1Finalists = finalistsData.filter(f => f.tournament === 'R-1').sort((a,b) => b.year - a.year);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center justify-center gap-3">
          <Users className="h-10 w-10 text-accent" />
          全ファイナリスト名鑑
        </h1>
      </div>

      <FinalistSection title="M-1グランプリ 歴代ファイナリスト" finalists={m1Finalists} />
      <FinalistSection title="キングオブコント 歴代ファイナリスト" finalists={kocFinalists} />
      <FinalistSection title="R-1グランプリ 歴代ファイナリスト" finalists={r1Finalists} />
    </div>
  );
}

function FinalistSection({ title, finalists }: { title: string, finalists: Finalist[] }) {
  if (finalists.length === 0) return null;

  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-accent pb-4 flex items-center gap-3">
        <Trophy className="w-8 h-8 text-accent opacity-80" />
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {finalists.map((f: Finalist) => (
          <div key={f.id} className="bg-card border border-border p-6 rounded-2xl hover:border-accent/50 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[80px] -z-10 group-hover:scale-125 transition-transform" />
            
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold text-slate-800 bg-accent px-2 py-1 rounded inline-block mb-2">
                  {f.year}年 第{f.rank}位
                </span>
                <h3 className="text-2xl font-bold">{f.name}</h3>
              </div>
              {/* SNS Links */}
              <div className="flex gap-2 text-slate-400">
                {f.snsLinks?.x && (
                  <a href={f.snsLinks.x} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors bg-background p-2 rounded-full border border-border" title="X (Twitter) を見る">
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
            
            <div className="mb-6 flex-grow">
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
                  <div className="bg-accent text-slate-900 p-2 rounded-lg shrink-0">
                    <ShoppingCart className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm text-foreground group-hover/link:text-accent transition-colors line-clamp-2">
                    {f.affiliateProduct.title}
                  </span>
                  <ExternalLink className="w-4 h-4 ml-auto text-slate-500 shrink-0" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
