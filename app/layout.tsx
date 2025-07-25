import { TooltipProvider } from "@/components/ui/tooltip";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SafeHomeScan - AI-Powered Home Safety Assessment for Aging in Place",
  description:
    "Upload photos and get an AI-powered home safety assessment in minutes. Identify hidden fall risks and safety hazards before accidents happen. Perfect for aging in place safely.",
  keywords: [
    "SafeHomeScan",
    "Home Safety Assessment",
    "Aging in Place",
    "AI Safety Analysis",
    "Fall Prevention",
    "Home Safety Audit",
    "Senior Home Safety",
    "Home Hazard Detection",
    "Independent Living",
    "Home Safety Report",
  ],
  openGraph: {
    type: "website",
    siteName: "SafeHomeScan",
    locale: "en_US",
    url: "https://safehomescan.com",
    title: "SafeHomeScan - AI-Powered Home Safety Assessment for Aging in Place",
    description:
      "Upload photos and get an AI-powered home safety assessment in minutes. Identify hidden fall risks and safety hazards before accidents happen. Perfect for aging in place safely.",
    images: [
      {
        url: "/favicon-blue.svg",
        width: 512,
        height: 512,
        alt: "SafeHomeScan Logo",
      },
    ],
  },
  authors: [
    {
      name: "SafeHomeScan Team",
      url: "https://safehomescan.com",
    },
  ],
  creator: "SafeHomeScan",
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
