import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sufyan Ajmal - Full-Stack Web Developer | Lahore",
  description:
    "Full-Stack Web Developer specializing in PHP, Laravel, React, Next.js & AI Solutions. Based in Lahore, Pakistan. 3+ years experience.",
  keywords: [
    "Full-Stack Developer",
    "Laravel",
    "React",
    "Next.js",
    "Lahore",
    "Pakistan",
    "Web Developer",
  ],
  authors: [{ name: "Sufyan Ajmal" }],
  openGraph: {
    title: "Sufyan Ajmal - Full-Stack Web Developer | Lahore",
    description:
      "Professional Full-Stack Web Developer. Laravel, React, Next.js, PHP, Node.js. Lahore, Pakistan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-surface-900 font-sans text-slate-200 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
