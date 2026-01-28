"use client";

import { site } from "../data/site";
import ItemWithModal from "./ItemWithModal";
import type { Item } from "../data/site";

export default function Specializations({ items = site.specializations }: { items?: Item[] }) {
  const list = items || [];

  if (list.length === 0) return null;

  return (
  <section id="especializaciones" className="py-12 bg-gray-50 scroll-mt-12 sm:scroll-mt-16" aria-labelledby="especializaciones-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="especializaciones-heading" className="text-2xl font-semibold mb-6">Nos especializamos en</h2>

        {/* Responsive auto-fit grid like Services */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {list.map((it) => (
            <ItemWithModal key={it.id} item={it as Item} kind="spec" />
          ))}
        </div>
      </div>
    </section>
  );
}
