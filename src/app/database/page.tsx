import { Trophy } from "lucide-react";
import Link from 'next/link';

export default function DatabasePage() {

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

    </div>
  );
}
