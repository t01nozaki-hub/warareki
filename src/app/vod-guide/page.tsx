import { Tv, ExternalLink, PlayCircle, Star, Info } from "lucide-react";
import AdSpace from "@/components/features/AdSpace";

export default function VodGuidePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 flex items-center gap-3">
        <Tv className="h-10 w-10 text-accent" />
        お笑い賞レース VOD視聴ガイド
      </h1>
      <p className="text-slate-400 mb-12 text-lg">
        「あの伝説のネタをもう一度見たい」「歴代の名作コントから最新の漫才まで網羅したい」<br />
        当サイトで紹介しているキングオブコント、M-1、R-1の過去大会や関連番組を視聴できるおすすめの動画配信サービスをご紹介します。<br />
        <span className="text-sm">※多くのサービスが<strong className="text-accent relative">無料トライアル期間</strong>を設けています。期間内に解約すれば料金はかかりません。</span>
      </p>

      <div className="grid gap-12">
        {/* =========================================
            1. U-NEXT (KOC, R-1特化, 最強のお笑いラインナップ)
            ========================================= */}
        <VodCard 
          serviceName="U-NEXT (ユーネクスト)"
          target="キングオブコント / R-1グランプリ / ヨシモト動画"
          description={
            <>
              お笑い好きに<strong className="text-accent px-1">最もおすすめ</strong>なのがU-NEXTです。<br />
              キングオブコントの過去大会から最新大会まで豊富なラインナップを揃えているほか、R-1グランプリの過去大会も多数配信中。さらに、吉本興業の劇場ライブ（ルミネtheよしもと等）や、東京03などの単独ライブ映像も充実しています。<br />
              月額料金はやや高めですが、圧倒的なコンテンツ量と<strong>毎月付与されるポイント（1,200円分）</strong>で有料ライブのチケット購入などにも充てられます。
            </>
          }
          isRecommended
          bgColor="from-sky-900/40 to-card"
          accentColor="text-sky-400"
          highlights={["KOC・R-1過去大会が充実", "吉本の劇場ライブ配信多数", "31日間 無料トライアルあり"]}
          fallbackUrl="https://video.unext.jp/" // A8のコードがない場合のフォールバック
        />

        {/* =========================================
            2. Amazon Prime Video (もしもアフィリエイト連携)
            ========================================= */}
        <VodCard 
          serviceName="Amazon Prime Video"
          target="ドキュメンタル / M-1グランプリ過去大会"
          description={
            <>
              圧倒的な会員数とコスパを誇るAmazonプライム会員の特典として視聴できるVODサービスです。<br />
              松本人志企画の『HITOSHI MATSUMOTO Presents ドキュメンタル』や『フリーズ』など、Amazonオリジナルのお笑い番組が非常に高く評価されています。また、M-1グランプリの過去大会も多数配信されており、お笑い特化の視聴のみならず、普段のネットショッピング特典としても登録必須のサービスです。
            </>
          }
          bgColor="from-blue-900/40 to-slate-900"
          accentColor="text-blue-400"
          highlights={["ドキュメンタル等アマゾン独自配信", "M-1グランプリ過去大会網羅", "プライム会員特典とセットで月額600円"]}
          fallbackUrl="https://www.amazon.co.jp/Amazon-Video/b?node=2351649051&tag=hp0d-22"
        />

        {/* =========================================
            3. ABEMAプレミアム
            ========================================= */}
        <VodCard 
          serviceName="ABEMAプレミアム"
          target="M-1グランプリ / 千鳥・かまいたち等の番組"
          description={
            <>
              M-1グランプリの決勝・敗者復活戦の過去大会や、相席食堂などの人気バラエティが豊富。<br />
              また、『チャンスの時間』(千鳥)や『ぜにいたち』(かまいたち)など、地上波では放送できないABEMAならではの攻めたオリジナルバラエティ番組が無数に存在し、深夜番組のような濃厚なお笑いを楽しみたい方に最適です。
            </>
          }
          bgColor="from-emerald-900/40 to-card"
          accentColor="text-emerald-400"
          highlights={["M-1過去大会・敗者復活戦", "地上波NGの攻めたバラエティ", "2週間 無料トライアルあり"]}
          affiliateHtml={`<a href="https://px.a8.net/svt/ejp?a8mat=4AZS0X+DLZSEY+4EKC+639IP" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=260330145823&wid=002&eno=01&mid=s00000020550001023000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4AZS0X+DLZSEY+4EKC+639IP" alt="">`}
          fallbackUrl="https://abema.tv/about/premium"
        />

      </div>



    </div>
  );
}

// -------------------------------------------------------------
// UI Components
// -------------------------------------------------------------

function VodCard({ 
  serviceName, 
  target, 
  description, 
  affiliateHtml,
  fallbackUrl,
  bgColor, 
  accentColor,
  highlights,
  isRecommended = false 
}: { 
  serviceName: string;
  target: string;
  description: React.ReactNode;
  affiliateHtml?: string;
  fallbackUrl: string;
  bgColor: string; 
  accentColor: string;
  highlights: string[];
  isRecommended?: boolean;
}) {
  return (
    <div className={`relative bg-gradient-to-br ${bgColor} border border-border rounded-2xl p-6 md:p-8 overflow-hidden group hover:border-slate-500 transition-colors shadow-2xl flex flex-col md:flex-row gap-8`}>
      {isRecommended && (
        <div className="absolute top-4 right-4 bg-accent text-slate-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg z-10">
          <Star className="w-3 h-3 fill-slate-900" /> 当サイトイチオシ！
        </div>
      )}

      {/* 左側：説明エリア */}
      <div className="flex-1 w-full">
        <h2 className={`text-3xl font-extrabold mb-3 ${accentColor}`}>{serviceName}</h2>
        <div className="mb-4">
          <span className="text-slate-300 font-bold text-sm bg-background/60 border border-border/50 px-3 py-1.5 rounded-lg inline-flex items-center gap-2">
            主な配信 <span className="text-accent">{target}</span>
          </span>
        </div>
        
        <p className="text-slate-300 mb-6 leading-relaxed text-sm md:text-base">
          {description}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
          {highlights.map((highlight, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-slate-300 bg-background/20 px-3 py-2 rounded-lg">
              <span className={`w-2 h-2 rounded-full bg-current ${accentColor}`} />
              {highlight}
            </li>
          ))}
        </ul>

      </div>

      {/* 右側：アフィリエイト・ボタンエリア */}
      <div className="w-full md:w-64 flex-shrink-0 flex flex-col items-center justify-center bg-background/30 rounded-xl border border-white/5 p-4">
        {/* A8.netのバナー広告枠 */}
        {affiliateHtml && (
          <div className="w-full flex justify-center mb-6">
            <AdSpace htmlCode={affiliateHtml} label={`${serviceName} PR`} />
          </div>
        )}

        {/* テキストリンクによる誘導 (フォールバック) */}
        <div className="text-center w-full mt-auto">
          <p className="text-xs text-slate-400 mb-2">▼ 公式サイトはこちら ▼</p>
          <a 
            href={fallbackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full inline-flex items-center justify-center gap-2 font-bold py-3 px-4 rounded-xl shadow-lg transition-transform hover:scale-105
              bg-slate-800 text-white border border-slate-600 hover:bg-slate-700
            `}
          >
            <PlayCircle className="w-5 h-5" />
            {serviceName} を見る
            <ExternalLink className="w-3 h-3 ml-1 opacity-50" />
          </a>
        </div>
      </div>
    </div>
  );
}
