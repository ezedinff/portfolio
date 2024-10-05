import type { Metadata } from "next";
import { JsonLd } from "react-schemaorg";
import { LocalBusiness } from "schema-dts";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import GA4Analytics, { GA4_MEASUREMENT_ID } from "@/components/GA4Analytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TechPro Support | Expert Tech Support for Professionals",
  description:
    "Get instant, personalized tech solutions via secure screen sharing. Book your free 15-minute consultation and unlock your tech potential today!",
  keywords:
    "tech support, IT consulting, screen sharing, expert tech help, software troubleshooting",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techpro.ezedinfedlu.com",
    siteName: "TechPro Support",
    title: "TechPro Support | Expert Tech Solutions",
    description:
      "Unlock your tech potential with expert support. Get instant solutions via secure screen sharing.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/19648503?v=4",
        width: 1200,
        height: 630,
        alt: "TechPro Support - Expert Tech Solutions",
      },
    ],
  },
  twitter: {
    title: "TechPro Support | Expert Tech Solutions",
    description:
      "Unlock your tech potential with expert support. Get instant solutions via secure screen sharing.",
    site: "@ezedinff",
    card: "summary_large_image",
    creator: "@ezedinff",
    images: ["https://avatars.githubusercontent.com/u/19648503?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://techpro.ezedinfedlu.com/" />
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GA4Analytics />
        <JsonLd<LocalBusiness>
          item={{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "TechPro Support",
            description:
              "Expert tech support for professionals via secure screen sharing.",
            url: "https://www.techprosupport.com",
            telephone: "+46761463164",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Lindholmsgatan 1",
              addressLocality: "Lindholmen",
              addressRegion: "Gotheland",
              postalCode: "430 33",
              addressCountry: "Sweden",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 37.7749,
              longitude: -122.4194,
            },
            sameAs: [
              "https://www.facebook.com/ezedinff",
              "https://www.twitter.com/ezedinff",
              "https://www.linkedin.com/in/ezedinff",
            ],
          }}
        />
        <Header
          isMenuOpen={false}
          setIsMenuOpen={() => {}}
          title="TechPro Support"
          hideMenu
        />
        <main>{children}</main>
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
