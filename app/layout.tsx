// Import Packages/Libs
import type { Metadata, Viewport } from "next";

// Import Fonts & Icons
import { } from "next/font/google"
import { Geist, Geist_Mono, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";


// Import Components
import Navbar from "@/app/(website)/components/Navbar";
import Footer from "@/app/(website)/components/Footer";

// Import Global CSS
import "./globals.css";

// Font Declarations
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// SEO Metadata
export const metadata: Metadata = {
  title: "Gstar Travels Agency",
  description: "Gstar Travels Agency is a trusted name in the travel industry, offering seamless travel planning, personalized itineraries, and unforgettable adventures. With years of experience and a network of global partners, we ensure a hassle-free and memorable journey for every traveler.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


