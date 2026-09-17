import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { fontHeading, fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "electrician",
    "Vaughan electrician",
    "Toronto electrician",
    "panel upgrade",
    "EV charger installation",
    "pot lights",
  ],
  icons: {
    icon: `${siteConfig.url}/favicon.ico`,
    apple: `${siteConfig.url}/images/logo.png`,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  image: `${siteConfig.url}/images/logo.png`,
  areaServed: siteConfig.serviceAreaCities,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          type="application/ld+json"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        <a
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
          href="#main-content"
        >
          Skip to content
        </a>
        <Providers>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16" id="main-content">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
