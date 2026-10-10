import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { site, whatsappLink } from "@/data/site";

export const metadata = pageMetadata({ title: "About Iai-Neh Homestay", description: "Discover the warm, local and peaceful homestay experience at Iai-Neh Homestay in Smit, Meghalaya.", path: "/about" });

export default function AboutPage() {
  return <>
    <Breadcrumbs items={[{name:"About",path:"/about",current:true}]} />
    <section className="container-shell py-14">
      <Reveal><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Our story</p><h1 className="font-display mt-3 max-w-4xl text-6xl leading-none">The kind of stay you remember because of the people.</h1></Reveal>
      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <Reveal><p className="text-lg leading-9 text-[#536057]">Iai-Neh Homestay is a peaceful village stay in Smit, Meghalaya. The experience is intentionally personal: a comfortable place to sleep, home-style food, local stories and a host who is happy to help you understand the area.</p></Reveal>
        <Reveal delay={.1}><p className="text-lg leading-9 text-[#536057]">Rather than trying to feel like a large hotel, Iai-Neh keeps the charm of a homestay at the centre. Guests have praised the warm atmosphere, helpful hosts and overall service in their Google reviews.</p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#1d3b2b] px-6 py-3.5 text-sm font-bold text-white">Talk to the host</a></Reveal>
      </div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"},{name:"About",path:"/about"}]))}} />
  </>;
}
