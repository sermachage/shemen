// app/layout.tsx
import type { ReactNode } from "react";
import "./styles.css";
import { Raleway } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Darasani Hub",
    template: "%s | Darasani Hub",
  },
  description:
    "Empowering businesses with strategic consulting and innovative solutions.",
  keywords: ["business consulting", "strategy", "Darasani Hub", "growth"],
  metadataBase: new URL("https://darasanihub.com"),
  alternates: {
    canonical: "https://darasanihub.com",
  },
  openGraph: {
    title: "Darasani Hub",
    description: "Strategic business consulting to power your growth.",
    url: "https://darasanihub.com",
    siteName: "Darasani Hub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Darasani Hub logo and slogan",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darasani Hub",
    description: "Your partner in business growth.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={raleway.className}>
      <head>
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Darasani Hub",
              url: "https://darasanihub.com",
              logo: "https://darasanihub.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/darasani-hub/",
              ],
            }),
          }}
        />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
