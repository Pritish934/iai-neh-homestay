import Link from "next/link";

export default function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-shell pt-28">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-[#526257]">
        <li><Link href="/" className="hover:underline">Home</Link></li>
        {items.map((item) => (
          <li key={item.path} className="flex items-center gap-2">
            <span>/</span>
            {item.current ? <span className="text-[#17231c]">{item.name}</span> : <Link href={item.path} className="hover:underline">{item.name}</Link>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
