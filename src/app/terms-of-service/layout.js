
import { buildMetadata } from "@/lib/seo";

const seo = {
  metaTitle: "terms of service | tmg global uae",
  metaDescription:
    "read the official terms of service of tmg global, covering service usage, payments, client responsibilities, liability limits, and legal guidelines for uae business services.",
  keywords: [
    "tmg global terms of service",
    "uae business setup terms",
    "dubai company formation policy",
    "service agreement uae",
    "pro services terms dubai",
    "business consultancy terms uae",
    "client responsibilities uae",
    "payment terms uae services",
  ],
  ogTitle:
    "tmg global terms of service | uae business setup & consultancy policies",
  ogDescription:
    "review the terms of service outlining tmg global’s business setup policies, client duties, payment terms, and service conditions in the united arab emirates.",
  ogImage: "/assets/logo/TMG-Global-Services-LLC.png",
  ogImageAlt:
    "tmg global services llc terms and conditions for uae business setup and consultancy",
  canonicalUrl: "https://tmgdubai.ae/terms-of-service/",
};

export const metadata = buildMetadata({
  title: seo.metaTitle,
  description: seo.metaDescription,
  keywords: seo.keywords,
  image: seo.ogImage,
  ogTitle: seo.ogTitle,
  ogDescription: seo.ogDescription,
  ogImageAlt: seo.ogImageAlt,
  canonicalUrl: seo.canonicalUrl,
  path: "/terms-of-service",

  robots: { index: true, follow: true },
});


const TermsSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "TMG Global LLC",
  "alternateName": "Thameem Management Group Global LLC",
  "logo": "https://tmgdubai.ae/assets/logo/TMG-Global-Services-LLC.png",
  "url": "https://tmgdubai.ae/terms-of-service",
  "telephone": "+971545267777",
  "email": "info@tmgdubai.ae",
  "description":
    "read the official terms of service of tmg global llc — covering service usage, payment terms, client responsibilities, liability limits, and uae business regulations.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Al Twar Centre, Al Barsha Mall, Madina Mall, Al Garhoud",
    "addressLocality": "Dubai",
    "addressRegion": "Dubai",
    "postalCode": "00000",
    "addressCountry": "AE",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 25.276987,
    "longitude": 55.296249,
  },
  "areaServed": {
    "@type": "Place",
    "name": "Dubai, United Arab Emirates",
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "sameAs": [
    "https://www.facebook.com/tmgdubai",
    "https://www.instagram.com/tmgglobaluae",
    "https://www.linkedin.com/company/tmgglobaluae",
  ],
};

export default function TermsLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TermsSchema) }}
      />

      {children}
    </>
  );
}
