@cloudflare/next-on-pages の導入: 開発依存関係としてインストールし、ビルド時にCloudflareのEdge Runtimeに対応した出力を生成できるように設定してください。

wrangler.toml の作成: 必要最低限の Pages 向け設定ファイルを作成してください。

Edge Runtime の指定: トップページなど主要なルートに export const runtime = 'edge' を追加し、Cloudflare Workers 上で爆速で動くようにしてください。

SEO関連ファイルの生成: sitemap.xml と robots.txt がビルド時に自動生成される仕組み（next-sitemapなど）を導入してください。

Git Push: 全て完了したら ryotaishihara61/languagehouse-web に commit して push してください。」