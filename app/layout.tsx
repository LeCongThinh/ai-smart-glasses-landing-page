import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VisionAI Smart Glasses | See Smarter. Live Better.",
  description:
    "Discover VisionAI smart glasses with real-time translation, AR navigation, hands-free AI assistance and all-day battery life.",
  keywords: ["AI smart glasses", "AR glasses", "wearable AI", "real-time translation"],
  applicationName: "VisionAI",
  authors: [{ name: "VisionAI" }],
  openGraph: {
    title: "VisionAI Smart Glasses",
    description: "Real-time intelligence, naturally in your field of view.",
    type: "website",
    siteName: "VisionAI",
    locale: "en_US",
    images: [{ url: "/glasses5.webp", width: 720, height: 456, alt: "VisionAI smart glasses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VisionAI Smart Glasses",
    description: "See smarter. Live better.",
    images: ["/glasses5.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
