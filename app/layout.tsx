import type { Metadata } from "next";
import { JsonLd } from "react-schemaorg";
import { LocalBusiness } from "schema-dts";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

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
const GTM_ID = "GTM-W66RD5MX";

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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${GTM_ID}');
  `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
