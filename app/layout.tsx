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
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'mantenimiento preventivo',
    'mantenimiento correctivo',
    'mantenimiento edificios',
    'instalaciones sanitarias',
    'instalaciones eléctricas',
    'HVAC',
    'aire acondicionado',
    'sistemas contra incendios',
    'grupos electrógenos',
    'obra civil',
    'emergencias 24/7',
    'mantenimiento integral',
    'servicios técnicos',
    'Argentina',
    'Chile',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  metadataBase: new URL(site.url),
  alternates: {
    canonical: '/',
    languages: {
      'es-AR': '/es-ar',
      'es-CL': '/es-cl',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    alternateLocale: ['es_CL'],
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: `${site.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [`${site.url}/og-image.png`],
    creator: '@iafacorp',
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verifications like Bing, Yandex when available
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" dir="ltr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": site.name,
              "description": site.description,
              "image": `${site.url}${site.logo}`,
              "telephone": site.phone,
              "email": site.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": site.address,
                "addressLocality": "Buenos Aires",
                "addressRegion": "CABA",
                "postalCode": "C1000",
                "addressCountry": "AR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -34.6037,
                "longitude": -58.3816
              },
              "url": site.url,
              "logo": `${site.url}${site.logo}`,
              "sameAs": site.sameAs,
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Mantenimiento",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mantenimiento de Instalaciones Edilicias",
                      "description": "Servicio integral de mantenimiento preventivo y correctivo para edificios"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Sistemas Críticos y Seguridad Operativa",
                      "description": "Mantenimiento de sistemas de incendio, grupos electrógenos y sistemas críticos"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Obras, Reformas y Remodelaciones",
                      "description": "Soluciones de obra civil y terminación"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Atención de Emergencias 24/7",
                      "description": "Respuesta inmediata ante fallas críticas"
                    }
                  }
                ]
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Buenos Aires"
                },
                {
                  "@type": "Country",
                  "name": "Argentina"
                },
                {
                  "@type": "Country",
                  "name": "Chile"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              }
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
