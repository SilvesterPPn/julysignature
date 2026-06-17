import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://julysignature.com"), 
  title: {
    default: "July Signature - Luxury Boutique Fashion",
    template: "%s | July Signature",
  },
  description: "Discover timeless elegance and luxury fashion at July Signature. Curated pieces for the discerning individual.",
  keywords: ["luxury boutique", "high-end fashion", "designer clothes", "July Signature", "premium fashion"],
  authors: [{ name: "July Signature" }],
  creator: "July Signature",
  publisher: "July Signature",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "July Signature",
    title: "July Signature - Luxury Boutique Fashion",
    description: "Discover timeless elegance and luxury fashion at July Signature. Curated pieces for the discerning individual.",
    images: [
      {
        url: "/images/home.jpg",
        width: 1200,
        height: 630,
        alt: "July Signature Boutique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "July Signature - Luxury Boutique Fashion",
    description: "Discover timeless elegance and luxury fashion at July Signature.",
    images: ["/images/home.jpg"],
  },
  alternates: {
    canonical: "/",
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
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
