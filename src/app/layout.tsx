import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BlazinCode | Software · Design · Digital Products",
  description: "Blazincode designs and engineers high-quality digital products, websites and business software for ambitious companies across the UK and international markets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
