"use client";
import { QueryContextProvider } from "@/context/query.contenxt";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { createUserSlice } from "./store/userSlice";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { Loader, Navbar } from "./components";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "515 cafe",
  description: "Cinqunecinq; The blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setUser = createUserSlice((state: any) => state.setUser);
  const addUser = () => {
    const newUser = {
      uuid: uuidv4(),
      name: "",
    };
    setUser(newUser);
  };

  useEffect(() => {
    console.log(uuidv4());
    // Generate and store the UUID when the app first loads
    addUser();
  }, [setUser]);

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className + " px-8 sm:px-20 py-2"}>
        <Suspense fallback={<p>Loading feed...</p>}>
          <nav>
            <Navbar />
          </nav>

          <QueryContextProvider>{children}</QueryContextProvider>
        </Suspense>
      </body>
    </html>
  );
}
