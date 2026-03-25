import { PlayCircle, Tv, ExternalLink } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '伝説のネタ「コーンフレーク」「鳥人」 フル動画視聴方法まとめ',
  description: 'M-1グランプリで歴代最高得点や爆発的パラダイムシフトを起こした伝説のネタ（ミルクボーイ、笑い飯など）のフル視聴方法をご紹介します。',
};

export default function LegendaryNetaPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-16">
        <span className="text-accent font-bold text-sm tracking-widest border border-accent/30 bg-accent/10 px-4 py-1.5 rounded-full mb-4 inline-block">
          SPECIAL FEATURE
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          歴史を変えた<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-500">
            「伝説のネタ」 フル視聴ガイド
          </span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          賞レースの歴史において、点数だけでなく「漫才の概念」すら変えてしまった衝撃の瞬間。
          語り継がれる「あのネタ」をフル尺で体験するならVODがおすすめです。
        </p>
      </div>

      <div className="space-y-12">
        {/* コーンフレーク */}
        <section className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-red-900/40 to-card p-8 md:p-12 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-[100px] -z-10" />
            <span className="text-2xl font-mono text-accent font-bold mb-2 block">M-1グランプリ 2019</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">ミルクボーイ「コーンフレーク」</h2>
            <p className="text-slate-300 leading-relaxed max-w-2xl mb-8">
              歴代最高得点となる「681点」を叩き出し、審査員をうならせた完成度。おかんが忘れた朝ご飯の名前をめぐる「行ったり来たり漫才」の金字塔。
              「煩悩の塊」「栄養の五角形」などキラーフレーズの連発は必見です。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="YOUR_UNEXT_AFFILIATE_ID_MILK" target="_blank" className="inline-flex flex-1 items-center justify-center gap-2 bg-accent text-slate-900 font-bold py-4 px-6 rounded-xl hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20">
                <PlayCircle className="w-5 h-5" />
                （2019年）決勝戦を今すぐフル視聴
              </a>
              <a href="YOUR_NETFLIX_AFFILIATE_ID" target="_blank" className="inline-flex items-center justify-center gap-2 bg-background border border-border text-foreground font-bold py-4 px-6 rounded-xl hover:bg-slate-800 transition-colors">
                Netflixで探す <ExternalLink className="w-4 h-4 ml-1 opacity-50" />
              </a>
            </div>
          </div>
        </section>

        {/* 鳥人 */}
        <section className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-emerald-900/40 to-card p-8 md:p-12 relative">
            <span className="text-2xl font-mono text-emerald-400 font-bold mb-2 block">M-1グランプリ 2009</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">笑い飯「鳥人」</h2>
            <p className="text-slate-300 leading-relaxed max-w-2xl mb-8">
              島田紳助氏がついに「100点」を出した伝説のネタ。Wボケの究極進化系とも言える怒涛の展開と、「鳥人」という不可解な設定を力技で納得させる狂気。
              当時の会場のうねりを、ぜひ高画質で。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="YOUR_AMAZON_AFFILIATE_ID_WARA" target="_blank" className="inline-flex flex-1 items-center justify-center gap-2 bg-emerald-500 text-slate-900 font-bold py-4 px-6 rounded-xl hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">
                <PlayCircle className="w-5 h-5" />
                （2009年）決勝戦を今すぐフル視聴
              </a>
            </div>
          </div>
        </section>

        {/* チンチロリン (KOC) */}
        <section className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-sky-900/40 to-card p-8 md:p-12 relative">
            <span className="text-2xl font-mono text-sky-400 font-bold mb-2 block">キングオブコント 2021</span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">空気階段「メガトンパンチマンカフェ(火事)」</h2>
            <p className="text-slate-300 leading-relaxed max-w-2xl mb-8">
              コントの歴史に名を刻む圧倒的スコア。作り込まれた設定、予想を超える展開、そして爆発的なオチ。
              彼らの空気感と狂気が入り混じる至極のコントを、ぜひフルで。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="YOUR_UNEXT_AFFILIATE_ID_KUCKI" target="_blank" className="inline-flex flex-1 items-center justify-center gap-2 bg-sky-500 text-slate-900 font-bold py-4 px-6 rounded-xl hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20">
                <Tv className="w-5 h-5" />
                U-NEXTで全コントを独占フル視聴
                <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
