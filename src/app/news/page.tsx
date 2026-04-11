"use client";

import { useState } from "react";
import Link from "next/link";
import { Newspaper, ChevronRight, ChevronLeft, Clock } from "lucide-react";
import { newsData } from "@/data/news";

const ITEMS_PER_PAGE = 6;

export default function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // ペジネーション計算
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE) || 1;
  const paginatedNews = newsData.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-extrabold mb-8 flex items-center gap-3 border-b-2 border-accent pb-4">
        <Newspaper className="h-8 w-8 text-accent" />
        最新ニュース・コラム
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginatedNews.map(news => (
          <Link href={`/news/${news.slug}`} key={news.slug} className="block group h-full">
            <article className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 h-full flex flex-col flex-1">
              
              {/* Thumbnail Image */}
              <div 
                className="w-full h-48 bg-slate-800 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${news.thumbnailUrl})` }}
              />

              <div className="p-6 flex flex-col flex-grow relative z-10 bg-card">
                <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                  <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-full border border-accent/20">
                    {news.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {news.date}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
                  {news.title}
                </h2>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center text-accent font-bold text-sm mt-auto">
                  記事の続きを読む <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-3 mt-12">
          <button
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="p-3 rounded-xl flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 border border-border shadow-sm text-slate-300"
            aria-label="前のページ"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all text-sm ${
                  currentPage === i + 1
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20 scale-110"
                    : "bg-background border border-border hover:bg-slate-800 hover:border-slate-500 text-slate-300"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="p-3 rounded-xl flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-800 border border-border shadow-sm text-slate-300"
            aria-label="次のページ"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="mt-16 text-center p-8 bg-background border border-border border-dashed rounded-xl">
        <p className="text-slate-400 text-sm">
          ※ ニュース情報は随時更新されます。賞レースの過去の記録はデータベース（歴代表ページ）からご確認ください。
        </p>
      </div>
    </div>
  );
}
