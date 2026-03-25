"use client";

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { Champion } from '@/data/champions';

export function ChampionChart({ data }: { data: Champion[] }) {
  const chartData = data.map(c => ({
    name: c.name,
    age: c.ageAtWin,
    career: c.careerYears,
    tournament: c.tournament
  }));

  return (
    <div className="w-full h-[400px] bg-card p-6 rounded-2xl border border-border shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-center text-foreground">歴代王者の芸歴と優勝年齢の相関</h3>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis 
            type="number" 
            dataKey="career" 
            name="芸歴" 
            unit="年" 
            stroke="#94a3b8" 
            tick={{ fill: '#94a3b8' }} 
            domain={[0, 25]} 
          />
          <YAxis 
            type="number" 
            dataKey="age" 
            name="優勝時年齢" 
            unit="歳" 
            stroke="#94a3b8" 
            tick={{ fill: '#94a3b8' }} 
            domain={[20, 50]} 
          />
          <Tooltip 
            cursor={{ strokeDasharray: '3 3' }} 
            contentStyle={{ backgroundColor: 'var(--card)', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--foreground)' }} 
            itemStyle={{ color: 'var(--accent)' }}
          />
          <Scatter name="王者" data={chartData} fill="var(--accent)" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
