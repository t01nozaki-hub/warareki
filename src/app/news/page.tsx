import { Newspaper, ChevronRight, Clock } from "lucide-react";

const DUMMY_NEWS = [
  {
    id: 1,
    title: "【速報】M-1グランプリ2024 決勝進出者9組が決定！",
    date: "2024-12-05",
    category: "M-1",
    excerpt: "激戦の準決勝を勝ち抜き、見事決勝への切符を手にした9組の実力派漫才師たちが一挙公開。各コンビの過去の戦績と見どころを徹底解説します。",
  },
  {
    id: 2,
    title: "R-1グランプリ 芸歴制限撤廃でベテラン勢の逆襲が始まる",
    date: "2024-02-13",
    category: "R-1",
    excerpt: "今年から芸歴10年以内の制限が撤廃されたR-1グランプリ。ストイックにピン芸を極め続けた中堅・ベテラン芸人たちがどのような旋風を巻き起こすのか。",
  },
  {
    id: 3,
    title: "キングオブコント2024 エントリー開始。今年は審査方法に変化？",
    date: "2024-05-20",
    category: "KOC",
    excerpt: "日本一のコント師を決める戦いが今年も幕を開ける。エントリー開始と同時に発表された特別ルールや、注目の参加ユニットについて速報でお届けします。",
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
        {DUMMY_NEWS.map(news => (
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
        <p className="text-slate-400">
          ※実際の運用では、Google Search API等を定期実行し、お笑いナタリー等の最新ニュースを自動要約して反映する仕組みを導入予定です。
        </p>
      </div>
    </div>
  );
}
