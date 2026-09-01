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
    "Kafwego is an exploration-stage copper-gold project in northwestern Zambia's Greater Lufilian Arc. Five priority targets have been defined; a 750 m RC proof-of-concept drilling programme is the next major technical step.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kafwego Project",
  },
  twitter: { card: "summary_large_image" },
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
