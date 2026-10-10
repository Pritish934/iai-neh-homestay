import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: "Iai-Neh Homestay | Peaceful Homestay in Smit, Meghalaya",
    template: "%s | Iai-Neh Homestay",
  },
  description: site.description,
  applicationName: site.name,
  category: "travel",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Iai-Neh Homestay | Smit, Meghalaya",
    description: site.description,
    url: site.siteUrl,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  verification: { google: "CrMYoTHG4XiaQx_s3E8ROw-PlpGxd3UWTk-Qjl2d5cc" },
};

export default function RootLayout({ children }) {
  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.name,
    description: site.description,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "The way to Chandara Park, Lum-Kynsai",
      addressLocality: "Smit",
      addressRegion: "Meghalaya",
      postalCode: "793015",
      addressCountry: "IN",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(site.rating),
      reviewCount: String(site.googleReviews),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.coordinates.lat,
      longitude: site.coordinates.lng,
    },
    url: site.siteUrl,
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
