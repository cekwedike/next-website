import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";
import { PageTransition } from "@/components/PageTransition";
import { InitialLoader } from "@/components/InitialLoader";
import { BackToTop } from "@/components/BackToTop";
import { LaunchNoticeBar } from "@/components/LaunchNoticeBar";
import {
  defaultDescription,
  ogImageUrl,
  seoKeywords,
  siteUrl,
} from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#FF0055" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "NEXT: New Era Xceptional Talent | Afrogospel Competition Africa",
    template: "%s | NEXT by Energize Music",
  },
  description: defaultDescription,
  keywords: [...seoKeywords],
  applicationName: "NEXT by Energize Music",
  manifest: "/manifest.json",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NEXT by Energize Music",
    title:
      "NEXT: New Era Xceptional Talent | Afrogospel Competition Africa",
    description: defaultDescription,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Crowd at a live concert with stage lights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@EnergizeMusic",
    creator: "@EnergizeMusic",
    title:
      "NEXT: New Era Xceptional Talent | Afrogospel Competition Africa",
    description: defaultDescription,
    images: [ogImageUrl],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${bebasNeue.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-hidden bg-next-background text-next-text">
        <InitialLoader />
        <ParticleBackground />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Navbar />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <BackToTop />
        <LaunchNoticeBar />
      </body>
    </html>
  );
}
