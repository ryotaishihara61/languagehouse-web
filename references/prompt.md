# Context
Cloudflare Pages のビルドで npm の依存関係エラー (ERESOLVE) が発生しました。
@cloudflare/next-on-pages が Next.js 16.x に未対応なのが原因です。

# Task
1. **Next.js のダウングレード**:
   `next` および `@next/third-parties` のバージョンを `15.5.2` に変更してください。
2. **依存関係の更新**:
   `npm install` を実行して `package-lock.json` を適切に更新してください。
3. **ビルド確認**:
   ローカルで `npm run build` (next build && npx @cloudflare/next-on-pages) が正常に完了することを確認してください。
4. **Git Push**:
   修正が完了したら GitHub へ push してください。