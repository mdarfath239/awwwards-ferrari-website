import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ferrari F1 - Engineering Speed",
  description: "A cinematic scrollytelling experience inspired by Ferrari F1 engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#9e0e0e]" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased bg-[#9e0e0e] text-white min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
