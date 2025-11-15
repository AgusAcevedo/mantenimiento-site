export default function Services({ items }: { items: { id: number; title: string; desc: string }[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section id="servicios" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((s) => (
            <article key={s.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="h-44 bg-gray-100 flex items-center justify-center text-gray-400">Imagen</div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
                <a className="text-sm text-blue-600 mt-4 inline-block hover:underline" href="#contacto">Más info →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
