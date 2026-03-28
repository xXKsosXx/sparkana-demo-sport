import type { Metadata } from "next";
import { Bebas_Neue, Oswald, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-headline",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GARD COMBAT CLUB \u00b7 MMA & Combat Sports \u00b7 Uz\u00e8s",
  description:
    "Club de MMA, Boxe, Grappling et Muay Tha\u00ef \u00e0 Uz\u00e8s dans le Gard. Rejoignez l'\u00e9lite du combat depuis 2014.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`dark ${bebasNeue.variable} ${oswald.variable} ${inter.variable}`}
    >
      <body className="bg-noir font-sans text-texte antialiased">
        {children}
      </body>
    </html>
  );
}
