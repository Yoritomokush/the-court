import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "THE COURT - バドミントンポータル",
    template: "%s | THE COURT",
  },
  description: "試合速報、選手名鑑、ギア紹介、サークル検索、初心者ガイドなど、バドミントン競技のすべてを網羅した専門ポータルサイトです。",
  keywords: ["バドミントン", "Badminton", "選手名鑑", "バドミントンサークル", "バドミントン初心者", "桃田賢斗"],
  openGraph: {
    title: "THE COURT - バドミントンポータル",
    description: "バドミントンのすべてが集まる場所。世界と日本の「現在地」を把握する専門プラットフォーム。",
    url: "https://badminton-portal.jp", // Placeholder
    siteName: "THE COURT",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE COURT",
    description: "バドミントンのすべてが集まる場所。専門ポータルサイト「THE COURT」",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
