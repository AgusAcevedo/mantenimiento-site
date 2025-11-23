"use client";

import { site } from "../data/site";
import ItemWithModal, { Item } from "./ItemWithModal";

export default function Specializations() {
  const items = site.specializations || [];

  if (items.length === 0) return null;

  return (
    <section id="especializaciones" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Nos especializamos en</h2>

        {/* Responsive auto-fit grid like Services */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {items.map((it) => (
            <ItemWithModal key={it.id} item={it as Item} kind="spec" />
          ))}
        </div>
      </div>
    </section>
  );
}
