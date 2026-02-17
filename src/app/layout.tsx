import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { SiteShell } from "@/components/layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "The Clinical Mystic",
  description:
    "A calm, forensic platform at the intersection of neuroscience, philosophy, emotional regulation, and systems design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${newsreader.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
