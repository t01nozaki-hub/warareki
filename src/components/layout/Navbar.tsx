import Link from "next/link";
import { Trophy, Tv, Newspaper, Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Trophy className="h-6 w-6 text-accent" />
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
            わられき（笑歴） <span className="text-sm font-normal text-slate-400">~お笑い賞レースデータベース~</span>
          </span>
          <span className="font-bold text-xl tracking-tight sm:hidden">わられき</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/database" className="transition-colors hover:text-accent flex items-center gap-2">
            <Trophy className="h-4 w-4" />
            <span className="hidden sm:inline">歴代王者</span>
          </Link>
          <Link href="/vod-guide" className="transition-colors hover:text-accent flex items-center gap-2">
            <Tv className="h-4 w-4" />
            <span className="hidden sm:inline">動画視聴ガイド</span>
          </Link>
          <Link href="/news" className="transition-colors hover:text-accent flex items-center gap-2">
            <Newspaper className="h-4 w-4" />
            <span className="hidden sm:inline">最新ニュース</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
