"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-3xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center text-gradient">
        お問い合わせ
      </h1>
      <p className="text-center text-slate-400 mb-12">
        サイトに関するご意見・ご感想や、著作権等の問題がございましたらこちらからご連絡ください。
      </p>

      {isSuccess ? (
        <div className="bg-slate-800/50 border border-emerald-500/30 rounded-2xl p-8 md:p-12 text-center animate-in fade-in zoom-in duration-500">
          <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">
            送信が完了しました
          </h2>
          <p className="text-slate-400">
            お問い合わせありがとうございます。内容を確認し、必要に応じてご連絡させていただきます。
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="mt-8 px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full transition-colors"
          >
            戻る
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-slate-900 border border-border rounded-2xl p-6 md:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full bg-slate-800 border border-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="お笑い 太郎"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-slate-800 border border-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="taro@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-slate-300">
              件名 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              required
              className="w-full bg-slate-800 border border-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
              placeholder="サイトへのご意見"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">
              お問い合わせ内容 <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={6}
              className="w-full bg-slate-800 border border-border rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
              placeholder="ご自由にお書きください"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              isSubmitting
                ? "bg-slate-700 text-slate-400 cursor-not-allowed"
                : "bg-accent hover:bg-accent-light text-white hover:scale-[1.02] shadow-[0_0_20px_rgba(235,54,120,0.3)] hover:shadow-[0_0_30px_rgba(235,54,120,0.5)]"
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-slate-400 border-t-transparent rounded-full animate-spin" />
                <span>送信中...</span>
              </div>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>送信する</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
