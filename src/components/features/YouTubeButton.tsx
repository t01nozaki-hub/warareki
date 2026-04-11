import { Play } from 'lucide-react';

interface YouTubeButtonProps {
  name: string;
  url?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function YouTubeButton({ name, url, size = 'md' }: YouTubeButtonProps) {
  const targetUrl = url || `https://www.youtube.com/results?search_query=${encodeURIComponent(name + ' お笑い ネタ')}`;
  const isSearch = !url;

  const sizeClass = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-3',
  }[size];

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
  }[size];

  return (
    <a
      href={targetUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${sizeClass} rounded-full bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000] hover:text-white transition-all duration-300 flex items-center justify-center group`}
      title={isSearch ? `${name}をYouTubeで検索` : "YouTube公式チャンネル"}
    >
      <Play size={iconSize} fill="currentColor" className="ml-0.5" />
    </a>
  );
}
