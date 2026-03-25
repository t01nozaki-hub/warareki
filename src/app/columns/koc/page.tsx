import { Trophy, Tv, CheckCircle } from 'lucide-react';

export default function KocColumnPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <span className="text-sky-400 font-bold border border-sky-400/30 bg-sky-400/10 px-3 py-1 rounded-full text-xs">キングオブコント 深掘りコラム</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
          緻密な世界の構築。<br/>KOCを制する「小道具の凄さ」と「2本目の逆転劇」
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          M-1が話術の極致であるならば、キングオブコント(KOC)は「世界観の構築力」が試される大会。
          歴代大会で審査員や観客を驚かせた「奇抜な小道具」と、順位がひっくり返る「恐怖の2本目」のドラマに迫ります。
        </p>
      </div>

      <div className="space-y-12">
        <section className="bg-card border border-border p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-sky-400 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            異常な熱量が注がれた「特大の小道具」
          </h2>
          <p className="text-slate-300 mb-4 leading-relaxed">
            コントの世界を一瞬で理解させる小道具。例えば、過去大会で圧倒的な存在感を放った「巨大な装置」や「精巧な手作り衣装」は、それ自体がオチへの強力なフリとして機能しました。
            小道具のセッティング時間が笑いの助走となり、幕が開いた瞬間のインパクトで勝負を決めるのはKOCならではの醍醐味です。
          </p>
          <div className="bg-background/50 p-4 rounded-xl border border-border">
            <p className="font-bold text-foreground mb-2">💡 伝説の小道具ネタを見るなら？</p>
            <p className="text-sm text-slate-400 mb-4">緻密なセット作りに定評のあるコント師たちの全編は、主にU-NEXTで独占配信されています。</p>
            <a href="YOUR_UNEXT_AFFILIATE_ID_KOC1" className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 text-sm">
              <Tv className="w-4 h-4" /> U-NEXTでキングオブコント過去大会を検索
            </a>
          </div>
        </section>

        <section className="bg-card border border-border p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-sky-400 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            波乱を呼ぶ「2本目のジンクス」と大逆転劇
          </h2>
          <p className="text-slate-300 mb-4 leading-relaxed">
            KOCの最大の特徴は、決勝進出者上位組による「2本目のネタ」の合計点で優勝が決まるシステム。
            1本目でトップ通過を果たしながら、2本目で別ベクトルのネタを用意できずに失速するコンビや、逆に2本目で爆発的な隠し玉を披露し大逆転優勝をかっさらうコンビ。
            この「1本目で世界観を見せつけ、2本目で裏切る」戦略性こそが、コント師たちの頭脳戦の真骨頂です。
          </p>
          <div className="bg-background/50 p-4 rounded-xl border border-border">
            <p className="font-bold text-foreground mb-2">💡 あの大逆転優勝をもう一度</p>
            <a href="YOUR_UNEXT_AFFILIATE_ID_KOC2" className="text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1 text-sm">
              <Tv className="w-4 h-4" /> フル視聴で2本目の衝撃を体験する
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
