import { posts } from "@/data/site";
import { pageMetadata, breadcrumbJsonLd } from "@/lib/seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import Reveal from "@/components/Reveal";

export const metadata = pageMetadata({ title: "Meghalaya Travel Journal", description: "Practical travel notes about Smit, Meghalaya, local food, homestays and slow travel.", path: "/blog" });

export default function BlogPage() {
  return <>
    <Breadcrumbs items={[{name:"Journal",path:"/blog",current:true}]} />
    <section className="container-shell py-14">
      <Reveal><p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Journal</p><h1 className="font-display mt-3 max-w-4xl text-6xl leading-none">Useful stories for your Meghalaya trip.</h1><p className="mt-6 max-w-2xl text-base leading-8 text-[#5d6a61]">Original, experience-led articles designed to answer the questions travellers actually ask before visiting Smit and Meghalaya.</p></Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">{posts.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
    </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumbJsonLd([{name:"Home",path:"/"},{name:"Journal",path:"/blog"}]))}} />
  </>;
}
