import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//headのメタデータをここで定義＆出力してる。
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Hiromasa's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="p-4 bg-gray-100 flex gap-9 font-bold">
          <Link href="/" className="transition-colors duration-300 hover:text-red-500">HOME</Link>
          <Link href="/profile" className="transition-colors duration-300 hover:text-red-500">PROFILE</Link>
          <Link href="/works" className="transition-colors duration-300 hover:text-red-500">WORKS</Link>
          <Link href="/contacts" className="transition-colors duration-300 hover:text-red-500">CONTACTS</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
