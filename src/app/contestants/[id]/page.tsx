import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getContestant } from '@/data/contestants';
import { getAppearancesByName } from '@/lib/contestantUtils';
import YouTubeButton from '@/components/features/YouTubeButton';
import AdSpace from '@/components/features/AdSpace';
import { nameToId } from '@/lib/idUtils';
import { MapPin, Building2, Calendar, Trophy, Play, Share2, ArrowLeft, ShoppingCart } from 'lucide-react';

/**
 * ID から芸人名を取得するための全データ抽出（ビルド時実行）
 */
async function getAllNames() {
  const allNames = new Set<string>();
  
  const extractNames = (data: any[]) => {
    data.forEach(year => {
      const results = year.results || year.finalists;
      if (results) {
        results.forEach((r: any) => allNames.add(r.name));
      }
    });
  };

  const { m1HistoryData } = await import('@/data/m1/history');
  const { kocHistoryData } = await import('@/data/koc/history');
  const { r1HistoryData } = await import('@/data/r1/history');

  extractNames(m1HistoryData);
  extractNames(kocHistoryData);
  extractNames(r1HistoryData);

  return Array.from(allNames);
}

export async function generateStaticParams() {
  const allNames = await getAllNames();
  return allNames.map((name) => ({
    id: nameToId(name),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const allNames = await getAllNames();
  const name = allNames.find(n => nameToId(n) === id) || '芸人';
  
  return {
    title: `${name} プロフィール・戦績 | わられき（笑歴）`,
    description: `${name}のM-1・KOC・R-1での全戦績、プロフィール、YouTubeリンクを一挙公開。`,
  };
}

export default async function ContestantPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const allNames = await getAllNames();
  const name = allNames.find(n => nameToId(n) === id);

  if (!name) {
    return <div className="p-20 text-center font-bold">芸人情報が見つかりませんでした。 (ID: {id})</div>;
  }

  const contestant = getContestant(name);
  const appearances = getAppearancesByName(name);

  return (
    <div className="min-h-screen bg-background text-foreground bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.05),transparent)]">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Back Button */}
        <Link href="/database/m1/history" className="inline-flex items-center gap-2 text-slate-400 hover:text-accent transition-colors mb-8 font-bold group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          データベースに戻る
        </Link>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Card */}
          <div className="lg:col-span-8 bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-64 md:h-80 bg-slate-900">
              <Image 
                src="/contestants/placeholder.png" 
                alt={name}
                fill
                className="object-cover opacity-60"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-6 left-8">
                <h1 className="text-4xl md:text-6xl font-black mb-2 drop-shadow-lg">{name}</h1>
                <div className="flex flex-wrap gap-4 items-center">
                  {contestant.agency && (
                    <span className="flex items-center gap-1.5 text-slate-300 font-bold bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                      <Building2 className="w-4 h-4 text-accent" />
                      {contestant.agency}
                    </span>
                  )}
                  {appearances.length > 0 && (
                    <span className="flex items-center gap-1.5 text-accent font-bold bg-accent/10 backdrop-blur-md px-3 py-1 rounded-full text-sm border border-accent/20">
                      <Trophy className="w-4 h-4" />
                      決勝進出 {appearances.length} 回
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="prose prose-invert max-w-none mb-10">
                <p className="text-xl text-slate-300 leading-relaxed italic">
                  &quot;{contestant.description || appearances[0]?.profile || `${name}のお笑い賞レース挑戦の軌跡。圧倒的なパフォーマンスで人々の記憶に残る。`}&quot;
                </p>
              </div>

              <div className="space-y-6 mb-10 p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50">
                <h3 className="text-xl font-bold flex items-center gap-2 text-slate-200">
                  <Trophy className="w-5 h-5 text-accent" /> {name}の賞レースにおける軌跡と評価
                </h3>
                <div className="text-slate-300 space-y-4 leading-relaxed text-sm">
                  <p>
                    {name}は、日本のお笑い界において確かな足跡を残している注目の芸人です。
                    {contestant.agency && contestant.formedDate ? `${contestant.agency}に所属し、${contestant.formedDate}の結成以来、` : 
                     contestant.agency ? `${contestant.agency}に所属し、` : 
                     contestant.formedDate ? `${contestant.formedDate}の結成以来、` : ''}
                    彼らの持つ独自の笑いのスタイルは多くの観客と審査員を魅了し続けています。
                  </p>
                  <p>
                    特に賞レースにおける活躍は目覚ましく、これまでにM-1グランプリ、キングオブコント、R-1グランプリといった国内最高峰の舞台で合計{appearances.length}回の決勝進出（または本戦出場）を果たしています。
                    {appearances.length > 0 && `彼らの大会初出場である${appearances[appearances.length - 1].year}年の${appearances[appearances.length - 1].tournament}では、${appearances[appearances.length - 1].profile || 'その特異な才能の片鱗を見せつけ、多くの観客の記憶に刻まれました'}。`}
                    {appearances.length > 1 && `さらに、最高到達点である${appearances[0].year}年の${appearances[0].tournament}においては見事${appearances[0].rank}位という素晴らしい結果を残し、お笑い史にその名を深く刻み込みました。`}
                  </p>
                  <p>
                    {contestant.description || appearances[0]?.profile || 'その独自のスタイルと圧倒的な演技力、そして緻密に計算されたネタの構成力は、世代を超えて多くのファンに支持されています。'}
                    当サイト（わられき）における{name}のこれまでの戦績と歩みは、後進の芸人たちにとっての一つの指標として今後も語り継がれていくことでしょう。ぜひ各種動画サイトや公式配信などで実際のお笑いを体感し、その卓越された技術をご覧ください。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 text-slate-400">
                    <MapPin className="w-5 h-5" /> 基本情報
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-slate-500">出身地</span>
                      <span className="font-bold text-right">{contestant.hometown || "（情報なし）"}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-slate-500">所属事務所</span>
                      <span className="font-bold text-right">{contestant.agency || "（情報なし）"}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span className="text-slate-500">結成/芸歴</span>
                      <span className="font-bold text-right">{contestant.formedDate || "（情報なし）"}</span>
                    </div>
                  </div>

                  {/* メンバー情報 */}
                  {contestant.members && contestant.members.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-border/30">
                      <h4 className="text-sm font-bold text-slate-500 mb-3 flex items-center gap-2">
                        メンバー
                      </h4>
                      <ul className="space-y-2">
                        {contestant.members.map((m, idx) => (
                          <li key={idx} className="flex justify-between items-center text-sm bg-background/50 p-3 rounded-xl border border-border/20 shadow-sm">
                            <span className="font-bold text-slate-200">{m.name}</span>
                            <span className="text-slate-400 text-xs bg-black/20 px-2 py-1 rounded-md">{m.birthplace || "出身地不明"}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center gap-2 text-slate-400">
                    <Play className="w-5 h-5" /> リンク
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <YouTubeButton name={contestant.name} url={contestant.youtubeUrl} size="lg" />
                    {contestant.xUrl && (
                      <a href={contestant.xUrl} target="_blank" rel="noopener" className="p-3 rounded-full bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors">
                        <Share2 className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Records Sidebar (Stats Summary) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-accent/20 to-card border border-accent/30 p-6 rounded-3xl shadow-xl">
              <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-accent" />
                大会別 最高順位
              </h3>
              <div className="space-y-4">
                {["M-1", "KOC", "R-1"].map(tournament => {
                  const best = appearances
                    .filter(a => a.tournament === tournament)
                    .sort((a, b) => {
                      const rankA = typeof a.rank === 'number' ? a.rank : 999;
                      const rankB = typeof b.rank === 'number' ? b.rank : 999;
                      return rankA - rankB;
                    })[0];
                  
                  return (
                    <div key={tournament} className="flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border">
                      <span className="font-bold text-slate-400">{tournament}</span>
                      <span className={`text-xl font-black italic ${best?.rank === 1 ? 'text-yellow-500' : 'text-slate-200'}`}>
                        {best ? `${best.rank}位` : "---"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* アフィリエイト商品検索リンク */}
            <div className="bg-card border border-border p-6 rounded-3xl shadow-xl hover:border-accent/50 transition-colors group">
              <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-accent" />
                DVD / 関連グッズ
              </h3>
              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                {name}の単独ライブDVDや出演作品、出版本などを探すことができます。
              </p>
              
              <div className="space-y-3">
                {/* 楽天アフィリエイトボタン（直接生成） */}
                <a 
                  href={`https://hb.afl.rakuten.co.jp/ichiba/52bdfd4a.012fb354.52bdfd4b.e621ecdd/?pc=${encodeURIComponent('https://search.rakuten.co.jp/search/mall/' + encodeURIComponent(`${name} DVD`) + '/')}`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center w-full gap-2 bg-[#bf0000] hover:bg-[#990000] text-white font-bold py-3.5 px-4 rounded-xl transition-all hover:-translate-y-1 shadow-[0_4px_15px_rgba(191,0,0,0.3)] hover:shadow-[0_8px_20px_rgba(191,0,0,0.4)]"
                >
                  <span className="font-extrabold tracking-wide">楽天市場</span>で検索
                </a>
                
                {/* Amazon検索リンク（直接アソシエイト経由） */}
                <a 
                  href={`https://www.amazon.co.jp/s?k=${encodeURIComponent(`${name} DVD`)}&tag=hp0d-22`}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="flex items-center justify-center w-full gap-2 bg-slate-800 border border-slate-600 hover:border-[#ff9900] text-white font-bold py-3.5 px-4 rounded-xl transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_8px_20px_rgba(255,153,0,0.15)] group/az"
                >
                  <span className="font-extrabold text-[#ff9900] group-hover/az:scale-105 transition-transform">Amazon</span>で検索
                </a>
              </div>
            </div>

            {/* Sidebar Ad Space */}
            <AdSpace label="Advertisement / PR" type="vertical" className="mb-6" />
          </div>
        </div>

        {/* Appearance History Table */}
        <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl p-8 mb-12">
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <Calendar className="w-8 h-8 text-accent" />
            過去の大会成績
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-slate-400 text-sm border-b border-border">
                  <th className="pb-4 pr-4 font-bold">年度 (回数)</th>
                  <th className="pb-4 px-4 font-bold">大会名</th>
                  <th className="pb-4 px-4 font-bold">順位</th>
                  <th className="pb-4 px-4 font-bold">得点</th>
                  <th className="pb-4 pl-4 font-bold">当時の紹介文</th>
                </tr>
              </thead>
              <tbody>
                {appearances.length > 0 ? (
                  appearances.map((app, idx) => (
                    <tr key={`${app.tournament}-${app.year}`} className={`border-b border-border/50 group hover:bg-slate-800/30 transition-colors`}>
                      <td className="py-6 pr-4 whitespace-nowrap">
                        <div className="font-bold text-lg">{app.year}年</div>
                        <div className="text-xs text-slate-500">第{app.edition}回</div>
                      </td>
                      <td className="py-6 px-4">
                        <span className={`px-3 py-1 rounded-md text-xs font-black ${
                          app.tournament === 'M-1' ? 'bg-orange-500/10 text-orange-500' :
                          app.tournament === 'KOC' ? 'bg-red-500/10 text-red-500' :
                          'bg-blue-500/10 text-blue-500'
                        }`}>
                          {app.tournament}
                        </span>
                      </td>
                      <td className="py-6 px-4">
                        <div className={`text-2xl font-black italic ${app.rank === 1 ? 'text-yellow-500' : 'text-slate-300'}`}>
                          {app.rank}<span className="text-sm italic font-bold ml-0.5">位</span>
                        </div>
                      </td>
                      <td className="py-6 px-4">
                        <div className="font-bold text-slate-400">{app.totalScore || "---"}</div>
                      </td>
                      <td className="py-6 pl-4 min-w-[300px]">
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                          {app.profile}
                        </p>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-slate-500 font-bold">
                      戦績データが見つかりませんでした。
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Bottom Ad Space */}
          <div className="mt-12">
            <AdSpace label="PR / おすすめ情報" type="horizontal" />
          </div>
        </div>
      </div>
    </div>
  );
}
