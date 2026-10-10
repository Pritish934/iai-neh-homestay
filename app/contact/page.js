import { site, whatsappLink } from "@/data/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";

export const metadata = pageMetadata({ title: "Contact & Direct Booking", description: "Contact Iai-Neh Homestay in Smit, Meghalaya and enquire about your stay directly on WhatsApp.", path: "/contact" });

export default function ContactPage() {
  return <>
    <Breadcrumbs items={[{name:"Contact",path:"/contact",current:true}]} />
    <section className="container-shell py-14">
      <Reveal><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Direct booking</p><h1 className="font-display mt-3 max-w-4xl text-6xl leading-none">Tell us when you’re coming.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-[#5d6a61]">There is no complicated booking form here. Message the host directly on WhatsApp to check availability and ask questions.</p></Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <a href={whatsappLink("Hi, I would like to check availability at Iai-Neh Homestay. My dates are: ")} target="_blank" rel="noopener noreferrer" className="rounded-[2rem] bg-[#1d3b2b] p-7 text-white transition hover:-translate-y-1"><p className="text-xs uppercase tracking-[.2em] text-white/50">Fastest</p><h2 className="font-display mt-10 text-3xl">WhatsApp</h2><p className="mt-3 text-sm text-white/60">Check dates, guests and stay details directly.</p></a>
        <a href={`tel:${site.phone.replace(/\s/g,"")}`} className="rounded-[2rem] border border-black/10 bg-white/70 p-7 transition hover:-translate-y-1"><p className="text-xs uppercase tracking-[.2em] text-[#8d7046]">Call</p><h2 className="font-display mt-10 text-3xl">+91 96125 29072</h2><p className="mt-3 text-sm text-[#657168]">Prefer a conversation? Call the host directly.</p></a>
        <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="rounded-[2rem] border border-black/10 bg-[#e9e2d4] p-7 transition hover:-translate-y-1"><p className="text-xs uppercase tracking-[.2em] text-[#8d7046]">Location</p><h2 className="font-display mt-10 text-3xl">Open Maps</h2><p className="mt-3 text-sm text-[#657168]">{site.address}</p></a>
      </div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"},{name:"Contact",path:"/contact"}]))}} />
  </>;
}
