"use client";

import React from 'react';
import ItemWithModal from './ItemWithModal';
import type { Item } from '../data/site';

export default function Services({ items }: { items: Item[] }) {
  if (!items || items.length === 0) return null;

  return (
  <section id="servicios" className="bg-white py-12 scroll-mt-12 sm:scroll-mt-16" aria-labelledby="servicios-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="servicios-heading" className="text-2xl font-semibold mb-6">Servicios</h2>
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <ItemWithModal key={s.id} item={s} kind="service" />
          ))}
        </div>
      </div>
    </section>
  );
}
