import MainLayout from "./components/MainLayout";
import type { Metadata } from 'next'

import "./globals.css";
export const metadata: Metadata = {
  title: "Product List With Cart | Front mentor"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
