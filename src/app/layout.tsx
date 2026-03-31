import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OXA Code",
  description: "نحول أفكارك إلى واقع رقمي مبهر",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
