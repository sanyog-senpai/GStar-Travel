// Import Packages/Libs
import type { Metadata, Viewport } from "next";

// Import Fonts & Icons
import {
  Inter,
  Poppins,
  Roboto,
  Cormorant_Unicase,
  Great_Vibes,
} from "next/font/google";

// Import Components
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Import Global CSS
import "./globals.css";

// Font Declarations
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const cormorantUnicase = Cormorant_Unicase({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant-unicase",
  display: "swap",
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
  display: "swap",
});

export const fontVariables = [
  inter.variable,
  poppins.variable,
  roboto.variable,
  cormorantUnicase.variable,
  greatVibes.variable,
].join(" ");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// SEO Metadata
export const metadata: Metadata = {
  title: "Gstar Travels & Tours",
  description: "Gstar Travels Agency is a trusted name in the travel industry, offering seamless travel planning, personalized itineraries, and unforgettable adventures. With years of experience and a network of global partners, we ensure a hassle-free and memorable journey for every traveler.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fontVariables} h-full antialiased`}
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


