import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { newsData } from "@/data/news";
import AdSpace from "@/components/features/AdSpace";

// Static export のために必須の関数
export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = newsData.find(n => n.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8 flex gap-4">
        <Link 
          href="/news" 
          className="flex items-center text-slate-400 hover:text-white transition-colors gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          ニュース一覧へ戻る
        </Link>
      </div>

      <article className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
        {/* アイキャッチ画像 */}
        <div 
          className="w-full h-64 md:h-96 bg-slate-800 bg-cover bg-center border-b border-border/50 relative"
          style={{ backgroundImage: `url(${article.thumbnailUrl})` }}
        >
          {/* 黒のグラデーションオーバーレイ（テキストを読みやすくするため） */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <div className="flex items-center gap-3 text-sm text-slate-300 md:font-semibold mb-4 drop-shadow-md">
              <span className="bg-accent/80 text-white px-3 py-1 rounded-full border border-accent">
                {article.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-accent" />
                {article.date}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white leading-tight drop-shadow-lg tracking-wide">
              {article.title}
            </h1>
          </div>
        </div>

        {/* 記事本文とサイドバーのグリッドレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 p-6 md:p-10">
          
          <div className="lg:col-span-3 space-y-10">
            {/* 記事の内容（リッチテキスト） */}
            <div 
              className="w-full"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <div className="border-t border-border pt-8 mt-12 flex justify-between items-center">
              <span className="text-slate-400 font-bold border border-slate-700 rounded-lg px-4 py-2 hover:bg-slate-800 transition-colors cursor-pointer flex items-center gap-2">
                <Share2 className="w-4 h-4" /> 記事をシェアする
              </span>
            </div>
            
            {/* 下部広告スペース */}
            <AdSpace label="Advertisement" className="mt-8" />
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <AdSpace type="vertical" label="PR" className="sticky top-24" />
          </aside>
          
        </div>
      </article>
    </div>
  );
}
