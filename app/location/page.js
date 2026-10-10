import { site, whatsappLink } from "@/data/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";

export const metadata = pageMetadata({ title: "Location & Directions", description: "Find Iai-Neh Homestay on the way to Chandara Park, Lum-Kynsai, Smit, Meghalaya.", path: "/location" });

export default function LocationPage() {
  return <>
    <Breadcrumbs items={[{name:"Location",path:"/location",current:true}]} />
    <section className="container-shell py-14">
      <Reveal><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Find us</p><h1 className="font-display mt-3 max-w-4xl text-6xl leading-none">A quiet stay in Smit, Meghalaya.</h1></Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-[.8fr_1.2fr]">
        <div className="rounded-[2rem] border border-black/10 bg-white/70 p-7">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#8d7046]">Address</p>
          <p className="mt-4 text-lg leading-8">{site.address}</p>
          <p className="mt-7 text-xs font-bold uppercase tracking-[.2em] text-[#8d7046]">Phone</p>
          <a href={`tel:${site.phone.replace(/\s/g,"")}`} className="mt-3 block text-lg underline underline-offset-4">{site.phone}</a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#1d3b2b] px-5 py-3 text-sm font-bold text-white">Open Google Maps</a>
            <a href={whatsappLink("Hi, I need directions to Iai-Neh Homestay.")} target="_blank" rel="noopener noreferrer" className="rounded-full border border-black/15 px-5 py-3 text-sm font-semibold">Ask for directions</a>
          </div>
        </div>
        <div className="min-h-[420px] overflow-hidden rounded-[2rem] border border-black/10 bg-[#d9ccb4]">
          <iframe title="Map showing Iai-Neh Homestay in Smit, Meghalaya" src="https://www.google.com/maps?q=Iai-Neh%20Homestay%2C%20Smit%2C%20Meghalaya&output=embed" className="h-full min-h-[420px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"},{name:"Location",path:"/location"}]))}} />
  </>;
}
