"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { site } from "../data/site";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNosotrosClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we're already on the home page, smooth-scroll to the #sobre element.
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("sobre");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // otherwise navigate to home with the hash
    e.preventDefault();
    router.push("/#sobre");
  };

  const handleTestimoniosClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById("testimonios");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    e.preventDefault();
    router.push("/#testimonios");
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">
          <Link href="/" className="hover:underline">{site.name}</Link>
        </div>

        <nav className="space-x-4 text-sm flex items-center">
          <Link href="/servicios" className="hover:underline">Servicios</Link>
          <Link href="/especializaciones" className="hover:underline">Nos especializamos en</Link>
          <a href="/#sobre" onClick={handleNosotrosClick} className="hover:underline">Nosotros</a>
          <a href="/#testimonios" onClick={handleTestimoniosClick} className="hover:underline">Testimonios</a>
          <a href="/#contacto" className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
