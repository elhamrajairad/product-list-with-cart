import MainLayout from "./components/MainLayout";
import type { Metadata } from 'next'

import "./globals.css";
export const metadata: Metadata = {
  title: "Front mentor | Product List With Cart"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
