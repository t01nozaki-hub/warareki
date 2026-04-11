interface AdSpaceProps {
  label?: string;
  className?: string;
  type?: 'horizontal' | 'vertical' | 'square';
  // A8.netやGoogle AdSense等のHTMLタグ（リンクと画像セットなど）をそのまま流し込むプロパティ
  htmlCode?: string;
}

export default function AdSpace({ 
  label = "Advertisement", 
  className = "", 
  type = "horizontal",
  htmlCode 
}: AdSpaceProps) {
  const heightClass = {
    horizontal: 'min-h-[96px] md:min-h-[128px]', // h-24 -> min-h
    vertical: 'min-h-[400px]',
    square: 'aspect-square min-h-[250px]',
  }[type];

  // htmlCodeが渡された場合は、広告コードの中身を直接表示する
  if (htmlCode) {
    return (
      <div className={`w-full flex justify-center items-center my-4 overflow-hidden ${className}`}>
        <div 
          className="[&>a>img]:max-w-full [&>a>img]:h-auto relative" // A8等のimgタグをレスポンシブに
          dangerouslySetInnerHTML={{ __html: htmlCode }} 
        />
      </div>
    );
  }

  // Google AdSense 広告（デフォルト表示）
  return (
    <div className={`w-full flex flex-col items-center overflow-hidden my-4 ${className}`}>
      <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1 w-full text-center">
        {label}
      </div>
      <div className={`w-full flex justify-center bg-transparent ${heightClass}`}>
        <ins className="adsbygoogle"
             style={{ display: 'block', minWidth: '100%' }}
             data-ad-client="ca-pub-4556999763350192"
             data-ad-slot="1234567890" /* TODO: 本番用の正しいad-slotに書き換えてください */
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
        <script
           dangerouslySetInnerHTML={{
             __html: "(adsbygoogle = window.adsbygoogle || []).push({});",
           }}
        />
      </div>
    </div>
  );
}
