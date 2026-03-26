import { championsData, Champion } from "@/data/champions";
import { ExternalLink, Trophy, Tv } from "lucide-react";

export default function DatabasePage() {
  const m1 = championsData.filter(c => c.tournament === "M-1").sort((a,b) => b.year - a.year);
  const koc = championsData.filter(c => c.tournament === "KOC").sort((a,b) => b.year - a.year);
  const r1 = championsData.filter(c => c.tournament === "R-1").sort((a,b) => b.year - a.year);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 flex items-center justify-center md:justify-start gap-3">
          <Trophy className="h-10 w-10 text-accent" />
          歴代王者データベース
        </h1>
      </div>

      {/* 歴代完全データへのショートカット */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Link href="/database/m1/history" className="flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-yellow-600 text-slate-900 font-extrabold p-5 rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)]">
          <Trophy className="w-6 h-6" /> M-1 歴代完全データ
        </Link>
        <Link href="/database/koc/history" className="flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-yellow-600 text-slate-900 font-extrabold p-5 rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)]">
          <Trophy className="w-6 h-6" /> KOC 歴代完全データ
        </Link>
        <Link href="/database/r1/history" className="flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-yellow-600 text-slate-900 font-extrabold p-5 rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)]">
          <Trophy className="w-6 h-6" /> R-1 歴代完全データ
        </Link>
      </div>

      {/* 大会別一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {/* M-1 */}
        <section>
          <div className="mb-6 border-b-2 border-accent pb-3">
            <h2 className="text-3xl font-bold flex items-center justify-between">
              M-1グランプリ
              <span className="text-sm font-normal text-slate-400 bg-background px-2 py-1 rounded">VOD: Netflix, Lemino等</span>
            </h2>
          </div>
          <div className="space-y-6">
            {m1.map(c => <ChampionCard key={c.id} champion={c} />)}
          </div>
        </section>

        {/* KOC */}
        <section>
          <div className="mb-6 border-b-2 border-accent pb-3">
            <h2 className="text-3xl font-bold flex items-center justify-between">
              キングオブコント
              <span className="text-sm font-normal text-slate-400 bg-background px-2 py-1 rounded">VOD: U-NEXT等</span>
            </h2>
          </div>
          <div className="space-y-6">
            {koc.map(c => <ChampionCard key={c.id} champion={c} />)}
          </div>
        </section>

        {/* R-1 */}
        <section>
          <div className="mb-6 border-b-2 border-accent pb-3">
            <h2 className="text-3xl font-bold flex items-center justify-between">
              R-1グランプリ
              <span className="text-sm font-normal text-slate-400 bg-background px-2 py-1 rounded">VOD: U-NEXT等</span>
            </h2>
          </div>
          <div className="space-y-6">
            {r1.map(c => <ChampionCard key={c.id} champion={c} />)}
          </div>
        </section>
      </div>
    </div>
  );
}

function ChampionCard({ champion }: { champion: Champion }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-accent/40 transition-all duration-300 group shadow-lg hover:shadow-accent/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-accent font-mono font-bold font-sm bg-accent/10 px-2 py-1 rounded-md mb-2 inline-block">
            {champion.year}年
          </span>
          <h3 className="text-2xl font-bold tracking-tight">{champion.name}</h3>
        </div>
        {champion.score && (
          <div className="text-right">
            <span className="text-xs text-slate-400 block mb-1">決勝得点</span>
            <span className="font-bold font-mono text-xl text-accent">{champion.score}</span>
          </div>
        )}
      </div>
      
      <p className="text-slate-300 mb-5 text-sm leading-relaxed">{champion.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6 text-xs text-slate-400 font-medium tracking-wide">
        <span className="bg-background/80 px-2.5 py-1.5 rounded-md border border-border">優勝年齢: {champion.ageAtWin}歳</span>
        <span className="bg-background/80 px-2.5 py-1.5 rounded-md border border-border">結成/芸歴: {champion.careerYears}年</span>
      </div>
      
      <a 
        href={`https://www.youtube.com/results?search_query=${encodeURIComponent(champion.name + ' 公式チャンネル')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-[#ff0000]/10 text-[#ff0000] border border-[#ff0000]/30 font-bold py-3 px-4 rounded-lg hover:bg-[#ff0000]/20 transition-colors shadow-md hover:shadow-[#ff0000]/30"
      >
        <Tv className="w-5 h-5 flex-shrink-0" />
        YouTubeチャンネルを見る
        <ExternalLink className="w-4 h-4 ml-auto opacity-70 flex-shrink-0" />
      </a>
    </div>
  );
}
