import { Tv, ExternalLink, PlayCircle } from "lucide-react";

export default function VodGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center gap-3">
        <Tv className="h-10 w-10 text-accent" />
        VOD動画視聴ガイド
      </h1>
      <p className="text-slate-400 mb-12 text-lg">
        「あの伝説のネタをもう一度見たい」<br />
        お笑い賞レースの過去大会や関連番組を視聴できるおすすめの動画配信サービス（VOD）をご紹介します。
      </p>

      <div className="grid gap-8">
        <VodCard 
          serviceName="Netflix"
          target="M-1グランプリ (過去大会)"
          description="M-1グランプリの過去大会が豊富に配信されています。中川家から最新王者まで、高画質で伝説の瞬間を振り返ることができます。"
          affiliateUrl="YOUR_NETFLIX_AFFILIATE_ID"
          bgColor="from-red-900/40 to-card"
          accentColor="text-red-500"
        />
        <VodCard 
          serviceName="U-NEXT"
          target="キングオブコント / R-1グランプリ"
          description="KOCとR-1の過去大会が多数ラインナップ。さらに、芸人の単独ライブ映像や関連バラエティ番組も充実しており、お笑い好きにはたまらないラインナップです。"
          affiliateUrl="YOUR_UNEXT_AFFILIATE_ID"
          bgColor="from-sky-900/40 to-card"
          accentColor="text-sky-400"
          isRecommended
        />
        <VodCard 
          serviceName="Lemino"
          target="M-1グランプリ / アナザーストーリー"
          description="M-1グランプリ本編だけでなく、舞台裏に密着した感動のドキュメンタリー「アナザーストーリー」などスピンオフコンテンツが豊富。"
          affiliateUrl="YOUR_LEMINO_AFFILIATE_ID"
          bgColor="from-pink-900/40 to-card"
          accentColor="text-pink-400"
        />
        <VodCard 
          serviceName="Amazon Prime Video"
          target="M-1グランプリ (一部) / 独自お笑い番組"
          description="一部のアマゾンプライムオリジナルお笑いコンテンツ(ドキュメンタル等)と併せて、歴代王者たちの最新の活躍を楽しむことができます。"
          affiliateUrl="YOUR_AMAZON_AFFILIATE_ID"
          bgColor="from-blue-900/40 to-card"
          accentColor="text-blue-400"
        />
      </div>    </div>
  );
}

function VodCard({ 
  serviceName, 
  target, 
  description, 
  affiliateUrl, 
  bgColor, 
  accentColor,
  isRecommended = false 
}: { 
  serviceName: string, 
  target: string, 
  description: string, 
  affiliateUrl: string, 
  bgColor: string, 
  accentColor: string,
  isRecommended?: boolean 
}) {
  return (
    <div className={`relative bg-gradient-to-br ${bgColor} border border-border rounded-2xl p-8 overflow-hidden group hover:border-slate-500 transition-colors`}>
      {isRecommended && (
        <div className="absolute top-4 right-4 bg-accent text-slate-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Star className="w-3 h-3 fill-slate-900" /> おすすめ
        </div>
      )}
      <h2 className={`text-3xl font-extrabold mb-2 ${accentColor}`}>{serviceName}</h2>
      <p className="text-slate-300 font-bold mb-4 text-sm bg-background/50 inline-block px-3 py-1 rounded-lg">
        主な配信: {target}
      </p>
      <p className="text-slate-400 mb-8 max-w-3xl leading-relaxed">
        {description}
      </p>
      <a 
        href={affiliateUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-bold py-3 px-8 rounded-xl hover:scale-105 transition-transform shadow-lg"
      >
        <PlayCircle className="w-5 h-5" />
        {serviceName} で視聴する
        <ExternalLink className="w-4 h-4 ml-2 opacity-50" />
      </a>
    </div>
  );
}

// need Star icon locally for the recommendation badge
function Star({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}
