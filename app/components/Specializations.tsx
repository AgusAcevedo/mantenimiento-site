import { site } from "../data/site";

export default function Specializations() {
  const items = site.specializations || [];
  if (items.length === 0) return null;

  return (
    <section id="especializaciones" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Nos especializamos en</h2>
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
                <h3 className="font-semibold mb-2">{it.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{it.desc}</p>
                <a href={it.link ?? "#"} className="text-sm text-blue-600 hover:underline">Más info →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
