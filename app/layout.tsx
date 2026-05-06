import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CartProvider from "../components/CartProvider";
import LanguageProvider from "../components/LanguageProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atelier--kura.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Atelier Kūra — Vêtements en séries limitées",
    template: "%s — Atelier Kūra",
  },
  description:
    "Atelier Kūra conçoit des vêtements en séries limitées, pensés pour le mouvement, la retenue et la précision. Drop 01 disponible.",
  icons: {
    icon: "/brand/favicons/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Atelier Kūra",
    title: "Atelier Kūra — Vêtements en séries limitées",
    description:
      "Atelier Kūra conçoit des vêtements en séries limitées, pensés pour le mouvement, la retenue et la précision. Drop 01 disponible.",
    url: SITE_URL,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Atelier Kūra — Vêtements en séries limitées",
    description:
      "Atelier Kūra conçoit des vêtements en séries limitées, pensés pour le mouvement, la retenue et la précision. Drop 01 disponible.",
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

        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}