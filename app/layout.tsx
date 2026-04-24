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
        
        {/* 🎬 VIDEO BACKGROUND */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover scale-110 opacity-30"
          >
            <source src="/brand/videos/petals.mp4" type="video/mp4" />
          </video>

          {/* FILTRE PREMIUM */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
        </div>

        {children}

      </body>
    </html>
  );
}
