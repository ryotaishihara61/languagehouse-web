# Context
パッケージを削除しましたが、以前の OpenNext 設定ファイルが残っているためビルドエラーが発生しています。

# Task
1. **不要なファイルの削除**:
   プロジェクトルートにある `open-next.config.ts` を削除してください。
2. **設定の確認**:
   `next.config.mjs` (または .js) を確認し、もし OpenNext 関連のラッパー（例: withOpenNext）が残っていれば、標準の構成に戻してください。
3. **ビルドの再試行**:
   ローカルで `npm run build` を実行し、今度こそエラーなしで完了することを確認してください。
4. **Git Push**:
   確認後、GitHub へ push してください。