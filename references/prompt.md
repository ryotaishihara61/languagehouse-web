# Role
あなたは提供された `lh-top.txt` を唯一の正解とし、Cloudflare Pages での動作を最適化するシニアエンジニアです。

# Context
Cloudflare Pages のビルドで以下のエラーが発生しました：
`Error: Page "/[lang]/contact-us/page" cannot use both runtime = 'edge' and generateStaticParams.`
また、`wrangler.json` が無効であるという警告も出ています。

# Task 1: ビルドエラーの修正
1. **Runtime設定の修正**: `generateStaticParams` を使用しているすべてのページ（contact-us等）から `export const runtime = 'edge'` を削除してください。静的生成（SSG）を優先し、Cloudflare の静的配信能力を最大化します。
2. **Wrangler設定の整理**: 無効な `wrangler.json` を削除し、`wrangler.toml` に統一してください。`pages_build_output_dir = ".vercel/output"` を含め、Cloudflare Pages 向けの正しい形式で構成してください。

# Task 2: コンテンツの最終同期 (B2B Corporate Mode)
1. `references/lh-top.txt` を再読み込みし、トップページが以下のテキストで構成されているか厳密にチェックしてください。
   - メインコピー: 「流暢さがゴールではない。本当に伝わる英語を」
   - 6つのプログラム: ビジネス英語, 英語, 集中英語, 英語スキルセミナー, TOEIC, 日本語
   - 理念: 「普通の英会話学校ではありません」
2. 札幌や仙台などの拠点情報は、このソースには含まれていないため、不要なコンポーネントがあれば削除してください。

# Task 3: SEO & 分析基盤の実装
1. **Google Analytics**: `@next/third-parties/google` を導入し、環境変数 `NEXT_PUBLIC_GA_ID` を使用して GA4 を実装してください。
2. **SEO**: `next-sitemap` を設定し、ビルド時に `sitemap.xml` と `robots.txt` が自動生成されるようにしてください。

# Task 4: Git Push
1. すべての修正が完了し、ローカルで `npm run build` が通ることを確認したら、GitHub (`ryotaishihara61/languagehouse-web`) の `main` ブランチへ push してください。