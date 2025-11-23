"use client";

import React from 'react';
import ItemWithModal, { Item } from './ItemWithModal';
export default function Services({ items }: { items: Item[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section id="servicios" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Servicios</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {items.map((s) => (
            <ItemWithModal key={s.id} item={s} kind="service" />
          ))}
        </div>
      </div>
    </section>
  );
}
