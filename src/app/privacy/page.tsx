import { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | わられき（笑歴）",
  description: "わられき（笑歴）のプライバシーポリシーについて",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center text-gradient">
        プライバシーポリシー
      </h1>

      <div className="space-y-12 text-slate-300 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-border pb-2">
            1. 個人情報の利用目的
          </h2>
          <p>
            当サイトでは、お問い合わせの際、名前やメールアドレス等の個人情報を入力いただく場合がございます。
            取得した個人情報は、お問い合わせに対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、これらの目的以外では利用いたしません。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-border pb-2">
            2. アクセス解析ツールについて
          </h2>
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を利用しています。このGoogle Analyticsはトラフィックデータの収集のためにクッキー（Cookie）を使用しております。トラフィックデータは匿名で収集されており、個人を特定するものではありません。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-border pb-2">
            3. 広告の配信について
          </h2>
          <p>
            わられき（笑歴）は、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。
          </p>
          <p>
            また、当サイトでは第三者配信の広告サービス（Googleアドセンス、もしもアフィリエイト、A8.net、楽天アフィリエイト等）を利用しています。このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報 「Cookie」(氏名、住所、メール アドレス、電話番号は含まれません) を使用することがあります。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-border pb-2">
            4. 免責事項
          </h2>
          <p>
            当サイトからのリンクやバナーなどで移動したサイトで提供される情報、サービス等について一切の責任を負いません。
            また当サイトのコンテンツ・情報について、できる限り正確な情報を提供するように努めておりますが、正確性や安全性を保証するものではありません。情報が古くなっていることもございます。
            当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-border pb-2">
            5. 著作権・肖像権
          </h2>
          <p>
            当サイトで掲載している文章や画像などにつきましては、無断転載することを禁止します。
            当サイトは著作権や肖像権の侵害を目的としたものではありません。著作権や肖像権に関して問題がございましたら、お問い合わせフォームよりご連絡ください。迅速に対応いたします。
          </p>
        </section>
        
        <div className="pt-8 text-sm text-slate-500 text-right">
          <p>制定日：2026年3月25日</p>
        </div>
      </div>
    </div>
  );
}
