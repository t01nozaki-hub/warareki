import { ExternalLink } from "lucide-react";

export default function ContactPage() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScjNLIanNr96vdlnmrFRHPEHd4VUkGRJ8v_nn72hjHhsGg22g/viewform?usp=publish-editor";

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gradient">
        お問い合わせ
      </h1>
      <p className="text-center text-slate-400 mb-12">
        サイトに関するご意見・ご感想や、著作権等の問題がございましたらこちらからご連絡ください。
      </p>

      <div className="bg-slate-900 border border-border rounded-2xl p-8 md:p-12 text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Googleフォームからのお問い合わせ</h2>
          <p className="text-slate-400">
            お問い合わせは専用のGoogleフォームにて受け付けております。<br />
            下記のボタンよりフォームを開き、必要事項をご記入の上送信してください。
          </p>
        </div>

        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(235,54,120,0.3)] hover:shadow-[0_0_30px_rgba(235,54,120,0.5)]"
        >
          <span>お問い合わせフォームを開く</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
