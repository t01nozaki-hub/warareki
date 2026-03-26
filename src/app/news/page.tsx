import { Newspaper, ChevronRight, Clock } from "lucide-react";

const LATEST_NEWS = [
  {
    id: 1,
    title: "【最新・R-1】R-1グランプリ2026、今井らいぱちが悲願の優勝！",
    date: "2026-03-22",
    category: "R-1",
    excerpt: "2026年3月21日に決勝戦が放送された「R-1グランプリ2026」にて、今井らいぱちが見事第24代王者に輝戴冠。過去最多6171人の激戦を勝ち抜き、ファイナルステージの「絵描き歌」ネタで栄冠を手にしました。",
  },
  {
    id: 2,
    title: "【M-1】M-1グランプリ2025王者は「たくろう」！過去最多11,521組の頂点へ",
    date: "2025-12-22",
    category: "M-1",
    excerpt: "2025年12月21日に生放送されたM-1グランプリ2025決勝戦にて、たくろうが見事優勝を果たしました。エントリー数は過去最多となる11,521組を記録し、2026年2月からはスペシャルツアーも開催中です。",
  },
  {
    id: 3,
    title: "【KOC】キングオブコント2025、ロングコートダディが第18代キングに！",
    date: "2025-10-12",
    category: "KOC",
    excerpt: "2025年10月11日に行われたキングオブコント2025決勝で、ロングコートダディが優勝。過去最多3449組がエントリーした今大会は、ハイレベルな激戦が繰り広げられました。",
  }
];

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8 flex items-center gap-3 border-b-2 border-accent pb-4">
        <Newspaper className="h-8 w-8 text-accent" />
        最新の賞レース速報・トレンド
      </h1>
      
      <div className="space-y-8">
        {LATEST_NEWS.map(news => (
          <article key={news.id} className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors group cursor-pointer shadow-sm hover:shadow-md">
            <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
              <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-full border border-accent/20">
                {news.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {news.date}
              </span>
            </div>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
              {news.title}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              {news.excerpt}
            </p>
            <div className="flex items-center text-accent font-bold text-sm">
              記事の続きを読む <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center p-8 bg-background border border-border border-dashed rounded-xl">
        <p className="text-slate-400 text-sm">
          ※ ニュース情報は随時更新されます。各大会の詳細はデータベース（歴代王者一覧）からもご確認いただけます。
        </p>
      </div>
    </div>
  );
}
