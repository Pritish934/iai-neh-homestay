import FAQ from "@/components/FAQ";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Frequently Asked Questions", description: "Frequently asked questions about staying at Iai-Neh Homestay in Smit, Meghalaya.", path: "/faq" });

export default function FAQPage() {
  return <>
    <Breadcrumbs items={[{name:"FAQ",path:"/faq",current:true}]} />
    <FAQ />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"},{name:"FAQ",path:"/faq"}]))}} />
  </>;
}
