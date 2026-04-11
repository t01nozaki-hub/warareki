import Link from 'next/link';
import { nameToId } from '@/lib/idUtils';

interface ContestantLinkProps {
  name: string;
  className?: string;
}

export default function ContestantLink({ name, className = "" }: ContestantLinkProps) {
  // 名前から安全な英数字IDを生成
  const id = nameToId(name);
  
  return (
    <Link 
      href={`/contestants/${id}`}
      className={`font-bold hover:text-accent transition-colors underline-offset-4 hover:underline ${className}`}
    >
      {name}
    </Link>
  );
}
