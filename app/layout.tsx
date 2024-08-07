import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/layout/header'
import Footer from '@/app/layout/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  
  title: "Pest Control",
  description: "Pest Control Ecom Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header/>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
