import Link from 'next/link';
import { Trophy, Tv, Users, ChevronRight, Sparkles } from 'lucide-react';

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

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-2xl z-10">
          <Link href="/database" className="w-full sm:w-2/3 md:w-1/2 group relative px-8 py-5 rounded-2xl bg-gradient-to-br from-accent to-yellow-600 text-slate-900 font-black text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(251,191,36,0.3)] hover:shadow-[0_0_60px_rgba(251,191,36,0.5)] flex items-center justify-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out skew-x-12" />
            <Trophy className="w-6 h-6" />
            歴代のデータベースへ
          </Link>
        </div>
      </section>

      {/* メインナビゲーションカード群 */}
      <section className="container mx-auto px-4 py-32 z-10 w-full max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-center tracking-tight">
          収録コンテンツ
        </h2>
        <div className="grid grid-cols-1 gap-8 max-w-lg mx-auto">
          <FeatureCard 
            title="歴代王者データベース"
            desc="M-1、KOC、R-1の全て。優勝ネタ、得点、キャッチコピーなど、王者に輝いた瞬間をデータで振り返ります。"
            icon={<Trophy className="w-10 h-10 text-accent" />}
            href="/database"
          />
        </div>
      </section>

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

function FeatureCard({ title, desc, icon, href }: { title: string, desc: string, icon: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="flex flex-col p-10 rounded-3xl bg-card/60 backdrop-blur-md border border-border/50 hover:border-accent/40 transition-all duration-500 hover:-translate-y-3 group shadow-2xl hover:shadow-[0_30px_60px_rgba(251,191,36,0.15)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150" />
      <div className="mb-8 p-5 bg-background/80 rounded-2xl inline-block w-fit text-accent shadow-inner border border-border/50 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:border-accent/30">
        {icon}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight z-10">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-lg mb-10 flex-1 z-10">{desc}</p>
      <div className="mt-auto flex items-center text-accent font-bold text-lg group-hover:text-accent-hover transition-colors z-10">
        詳しく見る <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform duration-300" />
      </div>
    </Link>
  );
}
