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
  title: "Shantanu | Professional Video Editor & Storyteller Portfolio",
  description: "Cinematic portfolio of Shantanu, featuring premium short-form clips, long-form documentary storytelling, and high-conversion brand advertisements.",
  keywords: ["video editor", "portfolio", "short-form editor", "documentary editing", "commercial editing", "premiere pro", "davinci resolve", "colorist"],
  authors: [{ name: "Shantanu" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased selection:bg-accent-violet/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
