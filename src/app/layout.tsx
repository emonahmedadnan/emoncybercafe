import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ইমন সাইবার ক্যাফে — ব্যবস্থাপনা",
  description:
    "চাকরির আবেদন, পাসপোর্ট, জন্ম নিবন্ধন, NID, ফটোকপি — সব ধরনের অনলাইন সেবার দোকান ব্যবস্থাপনা সিস্টেম",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="bn" className={hindSiliguri.variable}>
      <body className="font-sans bg-paper text-ink-950 antialiased">{children}</body>
    </html>
  );
}
