import Image from "next/image";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";

export const metadata = pageMetadata({ title: "Gallery", description: "A visual look at the Iai-Neh Homestay experience in Smit, Meghalaya.", path: "/gallery" });

const images = [
  ["https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1200&q=82", "Comfortable homestay interior prepared for guests"],
  ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=82", "Warm living space with natural textures"],
  ["https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=82", "Comfortable bedroom with soft natural light"],
  ["https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=82", "Relaxed interior with homely details"],
  ["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=82", "Bright guest room for a peaceful stay"],
  ["https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=82", "Mountain landscape representing Meghalaya travel"]
];

export default function GalleryPage() {
  return <>
    <Breadcrumbs items={[{name:"Gallery",path:"/gallery",current:true}]} />
    <section className="container-shell py-14">
      <Reveal><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Gallery</p><h1 className="font-display mt-3 text-6xl">A glimpse of the stay.</h1><p className="mt-5 max-w-2xl text-base leading-8 text-[#5d6a61]">These are temporary sample images. Replace them with the homestay’s real photography before launch.</p></Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map(([src,alt],i)=><Reveal key={src} delay={i*.03}><div className={`relative overflow-hidden rounded-[1.8rem] ${i===0||i===5?"aspect-[4/5]":"aspect-[4/3]"}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 hover:scale-105"/></div></Reveal>)}
      </div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"},{name:"Gallery",path:"/gallery"}]))}} />
  </>;
}
