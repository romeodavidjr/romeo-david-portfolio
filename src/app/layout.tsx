import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { siteConfig } from "@/data/portfolio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "sans-serif",
  ],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument",
  fallback: ["Georgia", "Times New Roman", "serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains",
  fallback: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
});

const pageTitle =
  "Romeo B. David Jr. | Senior Telecommunications Engineer & Automation";
const pageDescription =
  "Senior Telecommunications Engineer with 19+ years of experience in telecom operations, ATMS, Python automation, and data analytics. Based in Riyadh, KSA.";

export const metadata: Metadata = {
  title: {
    default: pageTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: pageDescription,
  keywords: [
    "Romeo B. David Jr",
    "Romeo David Jr",
    "Telecommunications Engineer",
    "Data Automation",
    "ATMS",
    "Python Automation",
    "Power BI",
    "Riyadh",
    "Telecom Portfolio",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: pageTitle,
    description: pageDescription,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans`}
    >
      <body
        className={`${inter.className} min-h-screen bg-bg font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
