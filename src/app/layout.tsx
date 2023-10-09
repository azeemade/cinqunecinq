import { QueryContextProvider } from "@/context/query.contenxt";
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
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className + " px-8 sm:px-20 py-2"}>
        <QueryContextProvider>{children}</QueryContextProvider>
      </body>
    </html>
  );
}
