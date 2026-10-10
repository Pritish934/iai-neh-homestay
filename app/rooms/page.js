import { rooms, site } from "@/data/site";
import { pageMetadata, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import RoomCard from "@/components/RoomCard";
import Reveal from "@/components/Reveal";

export const metadata = pageMetadata({
  title: "Rooms & Stay",
  description: `Explore the comfortable stay options at ${site.name} in Smit, Meghalaya.`,
  path: "/rooms"
});

export default function RoomsPage() {
  const crumbs = [{ name: "Stay", path: "/rooms", current: true }];
  return <>
    <Breadcrumbs items={crumbs} />
    <section className="container-shell py-14">
      <Reveal><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Stay</p><h1 className="font-display mt-3 max-w-3xl text-6xl leading-none">Come for the quiet. Stay for the warmth.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-[#5d6a61]">Simple, comfortable accommodation with the personal feel of a local homestay. For availability and exact stay details, contact the host directly on WhatsApp.</p></Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">{rooms.map((room) => <RoomCard key={room.slug} room={room} />)}</div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"}, ...crumbs]))}} />
  </>;
}
