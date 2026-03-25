import { Check, X, Tv, ExternalLink, ThumbsUp } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'U-NEXT vs Amazon Prime 徹底比較 | お笑い賞レースを見るならどっち？',
  description: 'M-1グランプリ、キングオブコント、R-1グランプリなどの歴代大会をお得に視聴するためのVOD徹底比較。料金やコンテンツ量を解説します。',
};

export default function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center leading-tight">
        「U-NEXT」と「Amazon Prime」<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-600">
          お笑い賞レースを見るならどっちがお得？
        </span>
      </h1>
      
      <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
        「あの年のM-1をもう一度見たい」「キングオブコントの過去大会を一気見したい」
        そんなお笑いファンに向けて、代表的な動画配信サービス(VOD)2社を徹底比較しました。
      </p>

      <div className="overflow-x-auto bg-card rounded-2xl border border-border shadow-xl mb-16">
        <table className="w-full text-center border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-background/80 border-b border-border">
              <th className="p-4 md:p-6 w-1/3"></th>
              <th className="p-4 md:p-6 w-1/3 border-l border-border">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-sky-400 mb-1">U-NEXT</span>
                  <span className="text-xs bg-accent text-slate-900 px-2 py-0.5 rounded font-bold">お笑いファン推奨</span>
                </div>
              </th>
              <th className="p-4 md:p-6 w-1/3 border-l border-border">
                <div className="flex flex-col items-center">
                  <span className="text-2xl font-black text-blue-400 mb-2">Amazon Prime</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="p-4 font-bold text-slate-300 text-left">月額料金(税込)</td>
              <td className="p-4 font-mono text-lg border-l border-border">2,189円<br/><span className="text-xs text-slate-500">※毎月1200pt付与</span></td>
              <td className="p-4 font-mono text-lg border-l border-border">600円</td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-300 text-left">M-1グランプリ配信</td>
              <td className="p-4 border-l border-border">
                <Check className="w-6 h-6 text-green-500 mx-auto mb-1" />
                <span className="text-xs">一部大会・関連番組</span>
              </td>
              <td className="p-4 border-l border-border">
                <Check className="w-6 h-6 text-green-500 mx-auto mb-1" />
                <span className="text-xs">一部大会</span>
              </td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-300 text-left">キングオブコント配信</td>
              <td className="p-4 border-l border-border bg-sky-900/20">
                <Check className="w-6 h-6 text-green-500 mx-auto mb-1" />
                <span className="text-xs font-bold text-sky-200">過去大会網羅（独占見放題あり）</span>
              </td>
              <td className="p-4 border-l border-border">
                <X className="w-6 h-6 text-red-500 mx-auto" />
              </td>
            </tr>
            <tr>
              <td className="p-4 font-bold text-slate-300 text-left">芸人の単独ライブ映像</td>
              <td className="p-4 border-l border-border bg-sky-900/20">
                <Check className="w-6 h-6 text-green-500 mx-auto mb-1" />
                <span className="text-xs font-bold text-sky-200">圧倒的多数配信</span>
              </td>
              <td className="p-4 border-l border-border">
                <span className="text-slate-400">△ (一部のみ)</span>
              </td>
            </tr>
            <tr className="bg-background/30">
              <td className="p-4 font-bold text-left">総評</td>
              <td className="p-4 border-l border-border">
                <p className="text-sm text-slate-300 mb-4">お笑いライブやKOC・R-1を幅広く見たいなら絶対U-NEXT。</p>
                <a href="YOUR_UNEXT_AFFILIATE_ID" target="_blank" className="bg-sky-500 text-background font-bold px-4 py-2 rounded-lg hover:bg-sky-400 transition-colors inline-block w-full">
                  31日間無料体験
                </a>
              </td>
              <td className="p-4 border-l border-border">
                <p className="text-sm text-slate-300 mb-4">とにかく安く、M-1や独占番組を楽しみたいライト層向け。</p>
                <a href="YOUR_AMAZON_AFFILIATE_ID" target="_blank" className="bg-blue-500 text-background font-bold px-4 py-2 rounded-lg hover:bg-blue-400 transition-colors inline-block w-full">
                  30日間無料体験
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ThumbsUp className="w-6 h-6 text-accent" />
          結論：お笑いマニアなら「U-NEXT」一択！
        </h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          M-1グランプリだけでなく、キングオブコントやR-1グランプリの過去大会、さらには東京03や空気階段といった実力派コント師の単独ライブ映像まで網羅しているのがU-NEXTの強みです。<br />
          月額料金は高めですが、付与されるポイントを使って最新映画等も楽しめます。まずは無料トライアルで、伝説のネタを存分に味わってみましょう。
        </p>
        <div className="text-center">
          <a href="YOUR_UNEXT_AFFILIATE_ID" target="_blank" className="inline-flex items-center justify-center gap-2 bg-accent text-slate-900 font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform shadow-lg shadow-accent/20 text-lg">
            <Tv className="w-5 h-5" />
            U-NEXTで伝説のコント・漫才をフル視聴する
            <ExternalLink className="w-5 h-5 ml-2 opacity-50" />
          </a>
        </div>
      </div>
    </div>
  );
}
