import type { Metadata } from "next";
//import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Satoshi } from "@/lib/fonts";
import { Reddit } from "@/lib/fonts";

//const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={Reddit.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
