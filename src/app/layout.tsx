export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // html/body are rendered by [lang]/layout.tsx
  // suppressHydrationWarning prevents mismatch on lang attribute
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
