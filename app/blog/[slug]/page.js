import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, site, whatsappLink } from "@/data/site";
import { pageMetadata, breadcrumbJsonLd, absoluteUrl } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import Reveal from "@/components/Reveal";

const articleBodies = {
  "a-slow-travel-guide-to-smit-meghalaya": [
    ["Start by slowing down", "Smit rewards travellers who leave some room in the day. Instead of moving from one attraction to another, give yourself time to notice the landscape, talk to people and enjoy a meal without watching the clock."],
    ["Use a homestay as your base", "A local homestay can change the rhythm of a trip. You have someone nearby who knows the area, while your evenings can feel more personal than they would in a standard hotel."],
    ["Ask about local life", "Some of the most memorable travel moments come from simple conversations. Ask your host what people eat, what places they enjoy and what is happening locally during your visit."],
    ["Leave space for the unexpected", "The best village experiences are rarely the ones you can put into a checklist. Keep an afternoon free and let your host or your curiosity decide what happens next."]
  ],
  "what-to-expect-from-a-meghalaya-homestay": [
    ["It feels more personal", "A homestay is not trying to imitate a large hotel. The appeal is the personal connection, the quieter environment and the chance to see how people actually live."],
    ["Food becomes part of the experience", "Home-style meals are one of the easiest ways to understand a destination. At Iai-Neh, guests can ask about homemade local food and what is available during their stay."],
    ["Local help matters", "A good host can save you time and make unfamiliar places easier to navigate. Guests at Iai-Neh frequently mention the hosts’ helpful and friendly nature."],
    ["Bring curiosity", "The best reason to choose a homestay is the opportunity to experience a place rather than simply sleep there. Ask questions, try local food and take the slower option when you can."]
  ],
  "local-food-and-the-meghalaya-homestay-experience": [
    ["Food is a doorway into place", "When you travel, meals tell you things a guidebook cannot. Ingredients, cooking methods and the way food is shared can reveal a lot about local life."],
    ["Choose home-style when you can", "A homemade meal has a different rhythm from a restaurant meal. It is often simpler, more personal and connected to what the household actually enjoys eating."],
    ["Ask what is local", "If you are staying in Meghalaya, ask your host which dishes are local and what ingredients are commonly used. Curiosity can turn an ordinary dinner into one of the memories you take home."],
    ["Make meals part of your itinerary", "Instead of treating food as a gap between sightseeing stops, give yourself time to enjoy it. That slower approach fits naturally with a village homestay in Smit."]
  ]
};

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, image: post.image });
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const body = articleBodies[slug] || [];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };

  return <>
    <Breadcrumbs items={[{name:"Journal",path:"/blog"},{name:post.title,path:`/blog/${post.slug}`,current:true}]} />
    <article className="container-shell py-12">
      <Reveal>
        <p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">{post.category}</p>
        <h1 className="font-display mt-4 max-w-5xl text-5xl leading-[1.02] md:text-7xl">{post.title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d6a61]">{post.excerpt}</p>
        <p className="mt-4 text-xs text-[#7b867d]">Published {new Date(post.date).toLocaleDateString("en-IN", { year:"numeric", month:"long", day:"numeric" })}</p>
      </Reveal>
      <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-[2.5rem]">
        <Image src={post.image} alt={post.alt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="mx-auto mt-12 max-w-3xl">
        {body.map(([heading, text]) => <section key={heading} className="mb-10"><h2 className="font-display text-3xl md:text-4xl">{heading}</h2><p className="mt-4 text-base leading-8 text-[#59665d]">{text}</p></section>)}
        <div className="rounded-[2rem] bg-[#e9e2d4] p-7"><h2 className="font-display text-3xl">Planning a Smit stay?</h2><p className="mt-3 text-sm leading-7 text-[#5d6a61]">If you want a peaceful local base in Smit, ask Iai-Neh about your dates directly.</p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-[#1d3b2b] px-6 py-3.5 text-sm font-bold text-white">Ask about availability</a></div>
      </div>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(articleSchema)}} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"},{name:"Journal",path:"/blog"},{name:post.title,path:`/blog/${post.slug}`}]))}} />
  </>;
}
