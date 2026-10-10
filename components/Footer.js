import Link from "next/link";
import { site, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#142119] py-14 text-white">
      <div className="container-shell grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <p className="font-display text-3xl">Iai-Neh</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">{site.tagline}. A quiet stay in Smit, Meghalaya with warm local hospitality.</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-[#f2e7cf] px-5 py-3 text-sm font-semibold text-[#18251d]">WhatsApp the host</a>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-white/40">Explore</p>
          <div className="space-y-3 text-sm text-white/70">
            {site.nav.slice(1).map(([label, href]) => <Link key={href} href={href} className="block hover:text-white">{label}</Link>)}
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[.2em] text-white/40">Find us</p>
          <p className="text-sm leading-6 text-white/65">{site.address}</p>
          <a className="mt-3 block text-sm text-white/80 underline underline-offset-4" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a className="mt-3 block text-sm text-white/80 underline underline-offset-4" href={site.mapUrl} target="_blank" rel="noopener noreferrer">Open Google Maps</a>
        </div>
      </div>
      <div className="container-shell mt-12 border-t border-white/10 pt-5 text-xs text-white/40">© {new Date().getFullYear()} Iai-Neh Homestay. All rights reserved.</div>
    </footer>
  );
}
