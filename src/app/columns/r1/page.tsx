import { User, Tv, CheckCircle } from 'lucide-react';

export default function R1ColumnPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <span className="text-pink-400 font-bold border border-pink-400/30 bg-pink-400/10 px-3 py-1 rounded-full text-xs">R-1グランプリ 深掘りコラム</span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
          ピン芸の最高峰。<br/>歴代王者たちの「その後」と「物議を醸した審査」
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          誰にも頼れない「ひとり芸」の頂点。芸歴制限の導入と撤廃に翻弄されながらも、己のスタイルを貫き通した孤独な天才たちの軌跡に迫ります。
        </p>
      </div>

      <div className="space-y-12">
        <section className="bg-card border border-border p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-pink-400 flex items-center gap-2">
            <User className="w-6 h-6" />
            人生が変わった瞬間。歴代ピン芸人のその後
          </h2>
          <p className="text-slate-300 mb-4 leading-relaxed">
            R-1の優勝は、漫才やコントとは異なる独自のスターダムへの入り口です。
            優勝を機に一気にフリップ芸のパイオニアとなった芸人や、裸芸を追求し続け海外進出まで果たした者など、王者の数だけドラマがあります。
          </p>
          <div className="bg-background/50 p-4 rounded-xl border border-border">
            <p className="font-bold text-foreground mb-2">💡 あのスター誕生の瞬間をもう一度</p>
            <a href="YOUR_UNEXT_AFFILIATE_ID_R1_1" className="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1 text-sm">
              <Tv className="w-4 h-4" /> U-NEXTでR-1グランプリの伝説の回を見る
            </a>
          </div>
        </section>

        <section className="bg-card border border-border p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-pink-400 flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            常に進化を求められる「審査基準」の変遷
          </h2>
          <p className="text-slate-300 mb-4 leading-relaxed">
            漫談、コント、フリップ芸、音ネタ…。多様なジャンルが入り乱れるからこそ、R-1の審査は常に困難を極め、時には物議を醸してきました。
            そして芸歴10年以内という制限の撤廃による、中堅・ベテラン大逆襲のドラマ。大会のあり方そのものが、審査員と芸人の魂のぶつかり合いです。
          </p>
          <div className="bg-background/50 p-4 rounded-xl border border-border">
            <p className="font-bold text-foreground mb-2">💡 激動のルール変更とベテランの意地</p>
            <a href="YOUR_UNEXT_AFFILIATE_ID_R1_2" className="text-pink-400 hover:text-pink-300 font-bold flex items-center gap-1 text-sm">
              <Tv className="w-4 h-4" /> 無料トライアルで制限撤廃の年の激闘をフル視聴
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
