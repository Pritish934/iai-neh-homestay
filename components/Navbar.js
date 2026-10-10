"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site, whatsappLink } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="container-shell pt-4">
        <nav className="flex items-center justify-between rounded-full border border-white/20 bg-[#18251dcc] px-4 py-3 text-white shadow-2xl shadow-black/10 backdrop-blur-xl md:px-6">
          <Link href="/" className="font-display text-lg tracking-wide" onClick={() => setOpen(false)}>
            Iai-Neh <span className="hidden text-white/55 sm:inline">Homestay</span>
          </Link>

          <div className="hidden items-center gap-6 text-sm md:flex">
            {site.nav.map(([label, href]) => (
              <Link key={href} href={href} className="text-white/75 transition hover:text-white">
                {label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f2e7cf] px-5 py-2.5 text-sm font-semibold text-[#18251d] transition hover:scale-[1.02]">
              Book on WhatsApp
            </a>
          </div>

          <button aria-label="Open navigation menu" onClick={() => setOpen(!open)} className="grid size-10 place-items-center rounded-full border border-white/20 md:hidden">
            <span className="text-lg">{open ? "×" : "☰"}</span>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 rounded-3xl border border-white/20 bg-[#18251df2] p-4 text-white shadow-xl backdrop-blur-xl md:hidden"
            >
              {site.nav.map(([label, href]) => (
                <Link key={href} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-white/80 hover:bg-white/10 hover:text-white">
                  {label}
                </Link>
              ))}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-2 block rounded-2xl bg-[#f2e7cf] px-4 py-3 text-center font-semibold text-[#18251d]">
                Book directly on WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
