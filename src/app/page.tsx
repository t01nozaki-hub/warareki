import Link from 'next/link';
import { Trophy, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden">
      {/* ヒーローセクション背景エフェクト */}
      <div className="absolute top-0 w-full h-[120vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/30 via-background to-background -z-10" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      {/* ヒーローコンテンツ */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-4 w-full relative pt-20">
        <div className="animate-pulse mb-8 border border-accent/40 bg-accent/5 text-accent px-4 py-2 rounded-full font-bold text-sm tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
          <Sparkles className="w-4 h-4" />
          M-1 / KOC / R-1 COMPLETE DATABASE
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black tracking-tighter mb-8 leading-[1.1] drop-shadow-2xl flex flex-col items-center gap-2 md:gap-4">
          <span className="block whitespace-nowrap">笑いの歴史が、</span>
          <span className="block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-accent via-yellow-400 to-amber-700">
            ここに刻まれる。
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-16 max-w-3xl font-medium leading-relaxed drop-shadow-md">
          「わられき（笑歴）」は、日本最高峰の3大お笑い賞レースの歴代王者と全ファイナリスト、そして伝説のネタを網羅した究極のデータベースです。
        </p>



      {/* 新設：歴代完全データベース コールトゥアクション */}
      <section className="container mx-auto px-4 pb-32 z-10 w-full max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-tight drop-shadow-sm">
          大会別 歴代完全データ
        </h2>
        <p className="text-center text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
          第1回大会から最新大会まで、全出場者の得点、順位、プロフィールを年代別に網羅した究極のデータベースです。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/database/m1/history" className="bg-card border-2 border-border hover:border-accent/80 hover:-translate-y-2 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all text-center shadow-lg hover:shadow-accent/20">
            <Trophy className="w-10 h-10 text-slate-500 group-hover:text-accent transition-colors drop-shadow-sm" />
            <span className="font-extrabold text-2xl tracking-tight">M-1グランプリ<br/><span className="text-sm font-bold text-slate-400 block mt-2 tracking-widest bg-background/50 py-1 px-4 rounded-full border border-border/50">2001 - 2025</span></span>
          </Link>
          <Link href="/database/koc/history" className="bg-card border-2 border-border hover:border-accent/80 hover:-translate-y-2 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all text-center shadow-lg hover:shadow-accent/20">
            <Trophy className="w-10 h-10 text-slate-500 group-hover:text-accent transition-colors drop-shadow-sm" />
            <span className="font-extrabold text-2xl tracking-tight">キングオブコント<br/><span className="text-sm font-bold text-slate-400 block mt-2 tracking-widest bg-background/50 py-1 px-4 rounded-full border border-border/50">2008 - 2025</span></span>
          </Link>
          <Link href="/database/r1/history" className="bg-card border-2 border-border hover:border-accent/80 hover:-translate-y-2 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all text-center shadow-lg hover:shadow-accent/20">
            <Trophy className="w-10 h-10 text-slate-500 group-hover:text-accent transition-colors drop-shadow-sm" />
            <span className="font-extrabold text-2xl tracking-tight">R-1グランプリ<br/><span className="text-sm font-bold text-slate-400 block mt-2 tracking-widest bg-background/50 py-1 px-4 rounded-full border border-border/50">2002 - 2025</span></span>
          </Link>
        </div>
      </section>
    </div>
  );
}


