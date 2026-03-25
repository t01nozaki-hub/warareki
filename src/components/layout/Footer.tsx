import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16 py-8 md:py-12">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-2 md:items-start text-center md:text-left">
          <p className="text-lg font-bold">わられき（笑歴）</p>
          <p className="text-sm text-slate-400">お笑い3大賞レース（M-1、KOC、R-1）の歴史と伝説のネタを網羅するデータベース</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-slate-400">
          <Link href="/database" className="hover:text-accent transition-colors">歴代王者一覧</Link>
          <Link href="/vod-guide" className="hover:text-accent transition-colors">VOD視聴ガイド</Link>
          <Link href="/news" className="hover:text-accent transition-colors">最新ニュース</Link>
          <Link href="/privacy" className="hover:text-accent transition-colors">プライバシーポリシー</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">お問い合わせ</Link>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} わられき（笑歴） All rights reserved. (当サイトのリンクにはアフィリエイトリンクが含まれます)
      </div>
    </footer>
  );
}
