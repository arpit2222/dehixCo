import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dehix | Web3 Community & DAO Platform",
  description: "Building community for Web3 projects and creating content aimed at upskilling learners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased dark`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}