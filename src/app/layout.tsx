import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "515 cafe",
  description: "Cinqunecinq; The blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/logo/cinqunecinq_logo.png"
          type="image/x-icon"
          sizes="16x16"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
