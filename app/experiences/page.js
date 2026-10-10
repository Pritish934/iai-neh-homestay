import Image from "next/image";
import Link from "next/link";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";
import { whatsappLink } from "@/data/site";

export const metadata = pageMetadata({ title: "Smit Experiences & Local Guide", description: "Experience Smit, Meghalaya through local food, village life, Khasi culture and a slower way to travel.", path: "/experiences" });

const experiences = [
  ["Slow village mornings", "Leave the rushed itinerary behind and enjoy the quieter rhythm of Smit."],
  ["Local food", "Ask the host about homemade authentic local meals and what is available during your stay."],
  ["Khasi culture", "Use your stay as a chance to learn about local stories, traditions and everyday life."],
  ["Local guidance", "The hosts can help with practical information and suggestions around the area."]
];

export default function ExperiencesPage() {
  return <>
    <Breadcrumbs items={[{name:"Experience",path:"/experiences",current:true}]} />
    <section className="container-shell py-14">
      <Reveal><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Smit, Meghalaya</p><h1 className="font-display mt-3 max-w-4xl text-6xl leading-none">See Meghalaya at a slower pace.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-[#5d6a61]">Iai-Neh is a base for travellers who want more than a checklist of attractions.</p></Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {experiences.map(([title,text],i)=><Reveal key={title} delay={i*.05}><article className="rounded-4xl border border-black/10 bg-white/65 p-7"><span className="text-xs text-[#8d7046]">0{i+1}</span><h2 className="font-display mt-10 text-3xl">{title}</h2><p className="mt-3 text-sm leading-7 text-[#647067]">{text}</p></article></Reveal>)}
      </div>
    </section>
    <section className="container-shell pb-24"><div className="grid gap-7 md:grid-cols-[1.1fr_.9fr]"><div className="relative min-h-105 overflow-hidden rounded-[2.5rem]"><Image src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=82" alt="Lush green forest landscape in a peaceful destination" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover"/></div><div className="rounded-[2.5rem] bg-[#d9ccb4] p-8 md:p-10"><h2 className="font-display text-4xl">Want to experience it for yourself?</h2><p className="mt-4 text-sm leading-7 text-[#5e594e]">Message the host with your dates and ask what is happening around Smit during your visit.</p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex rounded-full bg-[#1d3b2b] px-6 py-3.5 text-sm font-bold text-white">Ask on WhatsApp</a><Link href="/location" className="ml-2 mt-7 inline-flex rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold">See location</Link></div></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"},{name:"Experience",path:"/experiences"}]))}} />
  </>;
}
