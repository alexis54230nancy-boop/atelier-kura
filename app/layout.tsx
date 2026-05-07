import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import CartProvider from "../components/CartProvider";
import LanguageProvider from "../components/LanguageProvider";
import Cursor from "../components/Cursor";
import ScrollProgress from "../components/ScrollProgress";
import IntroScreen from "../components/IntroScreen";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const after = localFont({
  src: "../public/fonts/after-regular.otf",
  variable: "--font-after",
  display: "swap",
  weight: "400",
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
    apple: "/brand/favicons/apple-touch-icon.png",
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      fr: SITE_URL,
      en: SITE_URL,
      de: SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Atelier Kūra",
    title: "Atelier Kūra — Vêtements en séries limitées",
    description:
      "Atelier Kūra conçoit des vêtements en séries limitées, pensés pour le mouvement, la retenue et la précision. Drop 01 disponible.",
    url: SITE_URL,
    locale: "fr_FR",
    alternateLocale: ["en_US", "de_DE"],
    images: [{ url: `${SITE_URL}/brand/og-image.jpg`, width: 1200, height: 630, alt: "Atelier Kūra" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atelier Kūra — Vêtements en séries limitées",
    description:
      "Atelier Kūra conçoit des vêtements en séries limitées, pensés pour le mouvement, la retenue et la précision. Drop 01 disponible.",
    images: [`${SITE_URL}/brand/og-image.jpg`],
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
        className={`${inter.variable} ${after.variable} bg-[#0b0b0c] font-sans text-[#f5f5f2] antialiased`}
      >
        <div className="site-bg" />
        <div className="grain" />
        <IntroScreen />
        <ScrollProgress />
        <Cursor />

        <LanguageProvider>
          <CartProvider>{children}</CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
