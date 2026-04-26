import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CartProvider from "../components/CartProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Atelier Kūra",
  description: "Luxury fashion house landing page",
  icons: {
    icon: "/brand/favicons/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} bg-[#0b0b0c] font-sans text-[#f5f5f2] antialiased`}
      >
        <div className="site-bg" />

        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
