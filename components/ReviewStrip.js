import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function ReviewStrip() {
  return (
    <Reveal>
      <section className="border-y border-black/10 bg-white/55 py-8">
        <div className="container-shell grid gap-6 md:grid-cols-[auto_1fr_auto] md:items-center">
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl">{site.rating}</span>
            <div><div className="tracking-widest text-[#9a7948]">★★★★★</div><div className="text-xs text-[#68746c]">Google rating</div></div>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#536057]">Guests regularly highlight the peaceful setting, warm hosts, homely atmosphere and local food.</p>
          <a href="https://www.google.com/search?q=Iai-Neh+Homestay+Smit" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold underline underline-offset-4">Read {site.googleReviews} Google reviews</a>
        </div>
      </section>
    </Reveal>
  );
}
