import type { Metadata } from 'next';
import { Suspense } from 'react';
import KocHistoryClient from './KocHistoryClient';

export const metadata: Metadata = {
  title: 'キングオブコント歴代完全データベース (2008-2025) | 順位・得点・参加組数',
  description: 'キングオブコントの2008年第1回大会から最新2025年の全参加組数、審査員、決勝進出者全員のプロフィール・得点を年別にまとめた究極のデータベースです。',
};

export default function KocHistoryPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center text-slate-400 font-bold">データを読み込み中...</div>}>
      <KocHistoryClient />
    </Suspense>
  );
}
