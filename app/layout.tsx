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
  title: "Tech Wordle",
  description:
    "A tech-themed version of Wordle featuring technology terms, programming concepts, and tech company names",
  keywords: ["wordle", "tech", "programming", "game", "puzzle", "coding"],
  openGraph: {
    title: "Tech Wordle",
    description: "Test your tech knowledge with this Wordle variant",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Wordle",
    description: "Test your tech knowledge with this Wordle variant",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#ffffff",
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
