import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WorthSnap - AI-Powered Business Valuation Tool",
  description:
    "Don't overpay $50K+ on your first business purchase. Get professional AI-powered business valuations and avoid costly mistakes.",
  keywords: [
    "WorthSnap",
    "Business Valuation",
    "AI Business Valuation",
    "First Time Business Buyer",
    "Business Acquisition",
    "Business Analysis",
    "Online Business Valuation",
    "Business Worth Calculator",
    "Due Diligence",
    "Business Investment",
  ],
  openGraph: {
    type: "website",
    siteName: "WorthSnap",
    locale: "en_US",
    url: "https://worthsnap.com",
    title: "WorthSnap - AI-Powered Business Valuation Tool",
    description:
      "Don't overpay $50K+ on your first business purchase. Get professional AI-powered business valuations and avoid costly mistakes.",
    images: [
      {
        url: "/favicon-blue.svg",
        width: 512,
        height: 512,
        alt: "WorthSnap Logo",
      },
    ],
  },
  authors: [
    {
      name: "WorthSnap Team",
      url: "https://worthsnap.com",
    },
  ],
  creator: "WorthSnap",
  icons: [
    {
      rel: "icon",
      url: "/favicon-blue.svg",
      type: "image/svg+xml",
    },
    {
      rel: "icon",
      url: "/favicon-blue.svg",
      type: "image/svg+xml",
      sizes: "any",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon-blue.svg",
    },
  ],
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TooltipProvider>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
