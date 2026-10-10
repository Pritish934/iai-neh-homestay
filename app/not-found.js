import Link from "next/link";
import { whatsappLink } from "@/data/site";

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-[75vh] items-center justify-center py-32 text-center">
      <div>
        <p className="text-xs font-bold uppercase tracking-[.3em] text-[#8d7046]">404</p>
        <h1 className="font-display mt-4 text-7xl">A quiet wrong turn.</h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#5d6a61]">This page doesn’t exist, but your Meghalaya trip can still happen.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-[#1d3b2b] px-6 py-3.5 text-sm font-bold text-white">Back home</Link>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-semibold">WhatsApp the host</a>
        </div>
      </div>
    </section>
  );
}
