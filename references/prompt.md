# Context
Google Analytics (GA4) を導入します。
環境変数 `NEXT_PUBLIC_GA_ID` を使用して、SSG環境でも動作するように実装してください。

# Task
1. **GAコンポーネントの作成**:
   `src/components/GoogleAnalytics.tsx` を作成し、`next/script` を使用して gtag.js を読み込むクライアントコンポーネントを実装してください。IDが未設定の場合は何もレンダリングしないようにしてください。

2. **Root Layout への組み込み**:
   `src/app/layout.tsx`（または多言語対応している場合は `src/app/[lang]/layout.tsx`）の `<body>` 内に、作成した `GoogleAnalytics` コンポーネントを配置してください。

3. **型定義の確認**:
   `window.gtag` が TypeScript でエラーにならないよう、必要に応じて `src/types/gtag.d.ts` を作成するか、既存の型定義を調整してください。

4. **Git Push**:
   実装完了後、GitHub へ push してください。