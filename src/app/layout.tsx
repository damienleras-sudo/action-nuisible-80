import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Expert Nuisibles Somme (80)`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "nuisibles somme",
    "dératisation somme",
    "dératisation amiens",
    "désinsectisation somme 80",
    "punaises de lit amiens",
    "frelons somme",
    "taupier somme",
    "cafards amiens",
    "entreprise nuisibles 80",
    "lutte nuisibles professionnels restauration",
    "certibiocide somme",
    "action nuisible 80",
  ],
  authors: [{ name: "Action Nuisible 80 – Leo Libra" }],
  creator: "Action Nuisible 80",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Expert Lutte Nuisibles Somme`,
    description: SITE_DESCRIPTION,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Action Nuisible 80" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Expert Lutte Nuisibles Somme`,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
