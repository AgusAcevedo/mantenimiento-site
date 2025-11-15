import Link from "next/link";
import { site } from "../data/site";

export default function SpecializationsPage() {
  const items = site.specializations || [];
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6">Nos especializamos en</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <article key={it.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
              {it.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={it.image} alt={it.title} className="w-full h-36 object-cover" />
              ) : (
                <div className="h-36 bg-gray-100 flex items-center justify-center text-gray-400">Imagen</div>
              )}
              <div className="p-4">
                <h2 className="font-semibold mb-2">{it.title}</h2>
                <p className="text-sm text-gray-600 mb-3">{it.desc}</p>
                <Link href={`/specializations/${it.slug}`} className="text-sm text-blue-600 hover:underline">Ver más →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
