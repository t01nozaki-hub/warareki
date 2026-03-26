import type { Metadata } from 'next';
import { Suspense } from 'react';
import M1HistoryClient from './M1HistoryClient';

export const metadata: Metadata = {
  title: 'M-1歴代完全データベース (2001-2025) | 順位・得点・参加組数',
  description: 'M-1グランプリの2001年第1回大会から最新2025年の全参加組数、審査員、決勝進出者全員のプロフィール・得点を年別にまとめた究極のデータベースです。',
};

export default function M1HistoryPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center text-slate-400 font-bold">データを読み込み中...</div>}>
      <M1HistoryClient />
    </Suspense>
  );
}
