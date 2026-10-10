import { faqs } from "@/data/site";

export default function FAQ() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <section className="py-20">
      <div className="container-shell grid gap-10 md:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d7046]">Questions</p>
          <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">Everything you need to know.</h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-[#5d6a61]">Still deciding? Send a WhatsApp message and ask the host directly.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group rounded-3xl border border-black/10 bg-white/60 p-5">
              <summary className="cursor-pointer list-none pr-8 text-base font-semibold marker:hidden">
                <span>{item.q}</span>
                <span className="float-right text-[#8d7046] transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#5d6a61]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
