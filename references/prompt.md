# Context
Cloudflare Pages のビルドで npm の依存関係競合 (ERESOLVE) が発生し続けています。
`@opennextjs/cloudflare` と `@cloudflare/next-on-pages` が異なる Next.js バージョンを要求しているのが原因です。

# Task
1. **不要なパッケージの削除**:
   `@opennextjs/cloudflare` および `@opennextjs/aws` をアンインストールしてください。これらは現在のビルドパイプラインには不要です。
2. **バージョンの固定**:
   `next` と `@next/third-parties` を、公式ツールがサポートする最新安定版である `15.5.2` に固定したままにしてください。
3. **クリーンインストール**:
   `package-lock.json` を更新し、`npm install` が正常に完了することを確認してください。
4. **Git Push**:
   修正完了後、GitHub (`ryotaishihara61/languagehouse-web`) へ push してください。