import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kafwegoproject.com"),
  title: {
    default: "Kafwego Project | Copper-Gold Exploration in Zambia",
    template: "%s | Kafwego Project",
  },
  description:
    "Kafwego is a greenfield copper-gold exploration project in northwestern Zambia, positioned in the Greater Lufilian Arc and structured for disciplined, milestone-based partnership.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kafwego Project",
    images: ["/og-placeholder.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
