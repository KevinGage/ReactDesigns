import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nextjs Portfolio Examples",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
