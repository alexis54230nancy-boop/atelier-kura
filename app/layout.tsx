import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={`${inter.variable} font-sans antialiased bg-[#0b0b0c] text-[#f5f5f2]`}>
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0b0b0c]">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/brand/videos/petals-poster.jpg"
            className="h-full w-full object-cover opacity-20"
          >
            <source src="/brand/videos/petals.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/78" />
        </div>

        {children}
      </body>
    </html>
  );
}
