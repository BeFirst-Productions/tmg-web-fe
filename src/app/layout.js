import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InnovativeChatbot from "@/components/chatbot/InnovativeChatbot";
import PageWrapper from "@/components/layout/PageWrapper";
import { BottomCTA } from "@/components/hero/BottomCta";
import Script from "next/script";
import { buildMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = buildMetadata({
  title: "Business Setup Company in Dubai, UAE | Company Formation UAE",
  description:
    "Start your business setup company in Dubai with TMG Global. Expert company formation in UAE Mainland, Freezone and Offshore. Get your Dubai business license today.",
  keywords: [
    "business setup company in dubai",
    "company setup uae",
    "dubai business license",
    "uae business formation",
    "tmg global",
    "start a business in dubai",
    "freezone setup",
    "mainland company setup",
  ],
  ogTitle: "Business Setup Company in Dubai, UAE | Company Formation UAE",
  ogDescription:
    "Start your business setup company in Dubai with TMG Global. Expert company formation in UAE Mainland, Freezone and Offshore. Get your Dubai business license today.",
  image: "/og-image.jpg",
  ogImageAlt: "Business setup company in Dubai, UAE",
  canonicalUrl: "https://tmgdubai.ae/",
  path: "/",
});

const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TMG Global Services LLC",
  alternateName: "Thameem Management Group Global LLC",
  url: "https://tmgdubai.ae",
  logo: "/assets/logo/TMG-Global-Services-LLC.png",
  description:
    "Start your business setup Company in Dubai with TMG Global. Expert company formation in UAE Mainland, Freezone and Offshore.",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "TMG Global Team",
  },
  slogan: "Best Business Setup Company in Dubai",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971545267777",
    contactType: "Customer Support",
    areaServed: "AE",
    availableLanguage: ["English", "Arabic"],
  },

  sameAs: [
    "https://www.facebook.com/tmgglobal",
    "https://www.linkedin.com/company/tmg-global",
    "https://twitter.com/TMGGlobal",
    "https://www.instagram.com/tmg.global",
  ],

  knowsAbout: [
    "best business setup company in dubai",
    "business setup services uae",
    "document clearing dubai",
    "company formation experts dubai",
    "uae business consultancy",
  ],
  areaServed: {
    "@type": "Place",
    name: "United Arab Emirates",
  },
};

const GTM = process.env.NEXT_PUBLIC_GTM_ID;
const GA = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

        {/* Organization Schema - using standard script for JSON-LD avoidance of next/script issues in head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(OrganizationSchema),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <PageWrapper>
          {children}
          <InnovativeChatbot heroSectionId="hero-section" />
          <BottomCTA />
        </PageWrapper>

        {/* Scripts moved out of head */}
        {GTM && (
          <Script id="gtm-init" strategy="lazyOnload">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM}');`}
          </Script>
        )}

        {/* Google Analytics */}
        {GA && (
          <Script
            async
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA}`}
          />
        )}
        {GA && (
          <Script id="google-analytics" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA}');
            `}
          </Script>
        )}

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

      </body>
    </html >
  );
}
