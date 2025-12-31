import type { Metadata } from "next";
import { site } from './data/site'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FlowbiteInit from "./components/FlowbiteInit";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  metadataBase: new URL(site.url),
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: site.title,
    description: site.description,
    images: [`${site.url}/og-image.png`], // optional: add an OG image at /public/og-image.png
  },
  twitter: {
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": site.name,
              "telephone": site.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": site.address
              },
              "url": site.url,
                "logo": `${site.url}${site.logo}`,
              "sameAs": site.sameAs
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16 sm:pt-20 min-h-screen">{children}</main>
        <Footer />
        <FlowbiteInit />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
