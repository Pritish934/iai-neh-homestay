import Image from "next/image";
import { notFound } from "next/navigation";
import { rooms, site, whatsappLink } from "@/data/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";

export function generateStaticParams() { return rooms.map((room) => ({ slug: room.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return {};
  return pageMetadata({ title: room.name, description: room.description, path: `/rooms/${room.slug}`, image: room.image });
}

export default async function RoomPage({ params }) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) notFound();

  return <>
    <Breadcrumbs items={[{name:"Stay",path:"/rooms"},{name:room.name,path:`/rooms/${room.slug}`,current:true}]} />
    <section className="container-shell py-12">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <Reveal><div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem]"><Image src={room.image} alt={room.alt} fill priority sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /></div></Reveal>
        <Reveal delay={.1}><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Stay at Iai-Neh</p><h1 className="font-display mt-3 text-6xl leading-none">{room.name}</h1><p className="mt-6 text-base leading-8 text-[#5d6a61]">{room.description}</p><ul className="mt-7 grid gap-3 sm:grid-cols-2">{room.features.map((f)=><li key={f} className="rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm">✓ {f}</li>)}</ul><a href={whatsappLink(`Hi, I would like to book ${room.name}. Please share availability and stay details.`)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#1d3b2b] px-7 py-4 text-sm font-bold text-white">Ask about this stay on WhatsApp</a></Reveal>
      </div>
    </section>
    <section className="container-shell pb-24 pt-10"><div className="rounded-[2rem] bg-[#e9e2d4] p-8 md:p-10"><h2 className="font-display text-4xl">Direct booking, no complicated forms.</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-[#5d6a61]">Send your dates and number of guests on WhatsApp. The host can confirm availability and answer your questions directly.</p></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"},{name:"Stay",path:"/rooms"},{name:room.name,path:`/rooms/${room.slug}`}]))}} />
  </>;
}
