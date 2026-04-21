import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://kafwegoproject.com"),
  title: {
    default: "Kafwego Project | Copper-Gold Exploration Opportunity in Zambia",
    template: "%s | Kafwego Project",
  },
  description:
    "Kafwego is a greenfield copper-gold exploration project in northwestern Zambia, positioned in the Greater Lufilian Arc and structured for disciplined partnership.",
  openGraph: {
    images: ["/og-placeholder.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
