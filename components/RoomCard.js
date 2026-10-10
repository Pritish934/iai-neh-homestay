import Image from "next/image";
import Link from "next/link";
import { whatsappLink } from "@/data/site";

export default function RoomCard({ room }) {
  return (
    <article className="group overflow-hidden rounded-4xl border border-black/10 bg-white">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={room.image}
          alt={room.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 md:p-7">
        <h3 className="font-display text-3xl">{room.name}</h3>
        <p className="mt-3 text-sm leading-7 text-[#5d6a61]">
          {room.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {room.features.map((feature) => (
            <span
              key={feature}
              className="rounded-full bg-[#f0eadf] px-3 py-1.5 text-xs text-[#536057]"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`/rooms/${room.slug}`}
            className="rounded-full border border-black/15 px-5 py-3 text-sm font-semibold"
          >
            View stay
          </Link>
          <a
            href={whatsappLink(
              `Hi, I would like to book ${room.name} at Iai-Neh Homestay. Please share availability and details.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#1d3b2b] px-5 py-3 text-sm font-semibold text-white"
          >
            Check availability
          </a>
        </div>
      </div>
    </article>
  );
}
