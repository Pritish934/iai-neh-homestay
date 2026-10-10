import { whatsappLink } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book Iai-Neh Homestay on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#1f8f52] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1"
    >
      <span className="grid size-7 place-items-center rounded-full bg-white/15">↗</span>
      <span className="hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
}
