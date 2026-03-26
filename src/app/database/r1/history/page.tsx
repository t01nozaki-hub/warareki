import type { Metadata } from 'next';
import { Suspense } from 'react';
import R1HistoryClient from './R1HistoryClient';

export const metadata: Metadata = {
  title: 'R-1グランプリ歴代完全データベース (2002-2025) | 順位・得点・参加組数',
  description: 'R-1グランプリの2002年第1回大会から最新2025年の全参加組数、審査員、決勝進出者全員のプロフィール・得点を年別にまとめた究極のデータベースです。',
};

export default function R1HistoryPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center text-slate-400 font-bold">データを読み込み中...</div>}>
      <R1HistoryClient />
    </Suspense>
  );
}
