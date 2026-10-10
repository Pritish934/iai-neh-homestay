import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import ReviewStrip from "@/components/ReviewStrip";
import RoomCard from "@/components/RoomCard";
import BlogCard from "@/components/BlogCard";
import FAQ from "@/components/FAQ";
import { amenities, posts, rooms, site, whatsappLink } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-[#18251d] text-white">
        <Image src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=84" alt="Misty green mountain landscape representing a peaceful Meghalaya stay" fill priority sizes="100vw" className="object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1711]/50 via-[#102016]/30 to-[#122019]" />
        <div className="relative z-10 container-shell flex min-h-[760px] items-end pb-20 pt-36 md:pb-28">
          <div className="max-w-4xl">
            <Reveal>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur">
                <span className="text-[#e1c58f]">★★★★★</span> {site.rating} · {site.googleReviews} Google reviews
              </div>
              <h1 className="font-display text-balance text-5xl leading-[.95] md:text-7xl lg:text-[6.6rem]">Stay closer to the <i className="text-[#ddc594]">real</i> Meghalaya.</h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 md:text-lg">A peaceful homestay in Smit where warm local hospitality, homemade food and a slower village rhythm come together.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={whatsappLink("Hi, I would like to book a stay at Iai-Neh Homestay. Please share availability and details.")} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f2e7cf] px-6 py-3.5 text-sm font-bold text-[#18251d] transition hover:-translate-y-0.5">Book directly on WhatsApp</a>
                <Link href="/rooms" className="rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-semibold backdrop-blur transition hover:bg-white/15">Explore the stay</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ReviewStrip />

      <section className="py-24">
        <div className="container-shell grid gap-14 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Why Iai-Neh</p>
            <h2 className="font-display mt-3 text-5xl leading-tight md:text-6xl">A homestay should feel like more than a room.</h2>
          </Reveal>
          <Reveal delay={.1}>
            <p className="max-w-2xl text-base leading-8 text-[#59665d]">Iai-Neh is about the things that are difficult to capture in a hotel listing: a welcoming host, local stories, home-style food and the calm of a village stay in Smit.</p>
          </Reveal>
        </div>
        <div className="container-shell mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, i) => (
            <Reveal key={item.title} delay={i * .04}>
              <div className="h-full rounded-[1.8rem] border border-black/10 bg-white/60 p-7">
                <div className="text-2xl text-[#8d7046]">{item.icon}</div>
                <h3 className="mt-8 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#657168]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#e9e2d4] py-24">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Stay with us</p><h2 className="font-display mt-3 text-5xl">A comfortable base for Smit.</h2></div>
            <Link href="/rooms" className="text-sm font-semibold underline underline-offset-4">See all stay details →</Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">{rooms.map((room) => <RoomCard key={room.slug} room={room} />)}</div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-shell grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
              <Image src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=82" alt="Green mountain landscape near a peaceful village destination" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={.1}>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">The Smit experience</p>
            <h2 className="font-display mt-3 text-5xl leading-tight md:text-6xl">Come for the stay. Leave knowing the place.</h2>
            <p className="mt-6 text-base leading-8 text-[#59665d]">Smit gives you a chance to slow down and experience Meghalaya beyond the standard tourist circuit. Spend time with local people, eat home-style food and use the homestay as your base for discovering the surrounding area.</p>
            <Link href="/experiences" className="mt-8 inline-block rounded-full bg-[#1d3b2b] px-6 py-3.5 text-sm font-semibold text-white">Explore Smit →</Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#142119] py-24 text-white">
        <div className="container-shell grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.25em] text-[#d1b477]">From our guests</p><h2 className="font-display mt-3 text-5xl">The details people remember.</h2></div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["“Homely atmosphere”", "Guests appreciate the warmth and helpfulness of the host."],
              ["“Great service”", "Reviews repeatedly mention the friendly service and welcoming place."],
              ["“Good options to eat nearby”", "The location makes it easy to find food while staying local."]
            ].map(([q, a]) => <div key={q} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-6"><p className="font-display text-2xl">{q}</p><p className="mt-4 text-sm leading-7 text-white/55">{a}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-shell">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Travel journal</p><h2 className="font-display mt-3 text-5xl">Useful notes for your Meghalaya trip.</h2></div><Link href="/blog" className="text-sm font-semibold underline underline-offset-4">Read all articles →</Link></div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
        </div>
      </section>

      <FAQ />

      <section className="pb-24">
        <div className="container-shell overflow-hidden rounded-[2.5rem] bg-[#d9ccb4] px-7 py-16 text-center md:px-12">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#6d583a]">Direct booking</p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-5xl leading-tight md:text-6xl">Ready for a slower Meghalaya stay?</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#5e594e]">Skip complicated booking forms. Message the host directly on WhatsApp and ask about your dates.</p>
          <a href={whatsappLink("Hi, I would like to enquire about booking Iai-Neh Homestay. My dates are: ")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#1d3b2b] px-7 py-4 text-sm font-bold text-white">Message the host on WhatsApp</a>
        </div>
      </section>
    </>
  );
}
