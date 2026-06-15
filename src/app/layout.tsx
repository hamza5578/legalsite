import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FIRM_NAME, FIRM_TAGLINE } from "@/lib/constants";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
    weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
      default: `${FIRM_NAME} | Law Firm — Islamabad`,
          template: `%s | ${FIRM_NAME}`,
    },
    description: `${FIRM_NAME} — ${FIRM_TAGLINE}. A premier Pakistani law firm specializing in corporate law, civil litigation, criminal defense, family law, tax & revenue, and property matters.`,
    keywords: [
          "Pakistan law firm",
          "Islamabad lawyer",
          "corporate attorney Pakistan",
          "criminal defense lawyer",
          "family law Pakistan",
          "tax lawyer FBR",
          FIRM_NAME,
        ],
    openGraph: {
          type: "website",
          locale: "en_PK",
          title: `${FIRM_NAME} | Law Firm — Islamabad`,
          description: `${FIRM_TAGLINE}. Experienced legal counsel across Pakistan.`,
          siteName: FIRM_NAME,
    },
    robots: { index: true, follow: true },
    verification: {
          google: "ClikTpKMGWSymD38kXc8yJLwv-_DoqE4dSKG6_314-s",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
          <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
                  <body>
                          <Navbar />
                    {children}
                          <Footer />
                  </body>body>
          </html>html>
        );
}</body>
