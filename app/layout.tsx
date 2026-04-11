import type { Metadata } from "next";
import { Space_Grotesk, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "NEXT — New Era Xceptional Talent | Energize Music",
    template: "%s | NEXT",
  },
  description:
    "Afrogospel talent competition and incubator by Energize Music. Discover artists, vote, and join the movement.",
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
      <body className="relative flex min-h-full flex-col bg-next-background text-next-text">
        <ParticleBackground />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
