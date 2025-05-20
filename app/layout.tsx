import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColorMemoir | Your Memories Deserve More Than a Scroll",
  description:
    "Turn your cherished photos into handcrafted abstract art using your photo's authentic colors. Join the waitlist to get your own visual memoir.",
  keywords: [
    "photo to art",
    "abstract photo art",
    "photo art generator",
    "custom photo art",
    "personalized art",
    "customized art",
    "custom art",
    "photo art",
    "art from photos",
    "memeory keepsake",
    "keepsake",
    "custom art generator",
    "memory artwork",
    "photo memory keepsake",
  ],
  openGraph: {
    title: "ColorMemoir | Turn Memories into Art",
    description:
      "Transform your photos into one-of-a-kind abstract pieces with real color data. Celebrate moments, not scroll past them.",
    url: "https://colormemoir.com", // 👈 replace with your actual URL
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "ColorMemoir preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ColorMemoir | Your Memories Deserve More Than a Scroll",
    description:
      "Every photo has a story. Turn it into beautiful abstract art with ColorMemoir.",
    images: ["/image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta property="og:image" content="/image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content="ColorMemoir - Waitlist"
      />
      <meta
        property="og:url"
        content="https://colormemoir.vercel.app/"
      />
      <meta name="twitter:image" content="/image.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={FigtreeFont.className}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
