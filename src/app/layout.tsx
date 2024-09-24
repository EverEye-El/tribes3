import type { Metadata } from "next";
import ThirdwebProviderV5 from "@/app/providers/ThirdwebProviderV5";
import ThirdwebProviderV4 from "@/app/providers/ThirdwebProviderV4"

import { client } from "@/app/client";

import localFont from "next/font/local";
import "@/app/styles/globals.css";
import Home from "./page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    template: "%s | tribes",
    default: "tribes",
  },
  description: "Web3 social platform",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThirdwebProviderV4>
        <ThirdwebProviderV5>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
            {children}
          </body>
        </ThirdwebProviderV5>
      </ThirdwebProviderV4>
    </html>
    
  );
}