import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-4xl border border-black/10 bg-white">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-[#8d7046]">
            {post.category}
          </p>
          <h3 className="font-display mt-3 text-2xl leading-tight">
            {post.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#647067]">
            {post.excerpt}
          </p>
          <span className="mt-5 inline-block text-sm font-semibold underline underline-offset-4">
            Read journal
          </span>
        </div>
      </Link>
    </article>
  );
}
