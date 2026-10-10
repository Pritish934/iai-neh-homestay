import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({
  title: "Thank You",
  description: "Thank you for contacting Iai-Neh Homestay.",
  path: "/thank-you",
  noindex: true
});
export default function ThankYouPage() {
  return <section className="container-shell min-h-[70vh] py-40"><h1 className="font-display text-6xl">Thank you.</h1><p className="mt-5 max-w-xl leading-8 text-[#5d6a61]">This page is intentionally not indexed by search engines. Return to the home page or continue your conversation with the host on WhatsApp.</p></section>;
}
