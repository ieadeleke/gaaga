import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactPopup from "@/components/ContactPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: undefined,
  title: {
    default: "Gaaga — Creators. Brands. Investment.",
    template: "%s | Gaaga",
  },
  description:
    "Gaaga is a venture studio that manages creators, powers brand partnerships, and invests in Africa's next generation of digital talent.",
  applicationName: "Gaaga",
  keywords: [
    "Gaaga",
    "creators",
    "brand partnerships",
    "Africa",
    "talent management",
    "venture studio",
    "content",
    "campaigns",
  ],
  openGraph: {
    title: "Gaaga — Creators. Brands. Investment.",
    description:
      "Manage creators, run campaigns with authentic reach, and invest in the next generation of digital talent.",
    url: "/",
    siteName: "Gaaga",
    images: [
      {
        url: "/stream.svg",
        width: 1200,
        height: 630,
        alt: "Gaaga",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaaga — Creators. Brands. Investment.",
    description:
      "Manage creators, run campaigns with authentic reach, and invest in the next generation of digital talent.",
    images: ["/stream.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
        <ContactPopup />
      </body>
    </html>
  );
}
