# Context
Cloudflare のビルド環境変数が SSG (Static Export) に反映されません。
Next.js の仕様に従い、リポジトリ内の `.env` ファイルを使用して ID を固定します。

# Task
1. プロジェクトルートに `.env` というファイルを新規作成し、以下を記述してください。
   NEXT_PUBLIC_GA_ID=G-KG1H4FCHPR
2. .gitignore を確認し、もし `.env` が除外されている場合は、このファイルだけはコミットできるよう調整するか、一時的に除外を解除してください。
3. `src/app/[lang]/layout.tsx` で `process.env.NEXT_PUBLIC_GA_ID` が正しく使われていることを再確認してください。
4. GitHub へ push してください。