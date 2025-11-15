export default function Testimonials({ items }: { items: { id: number; name: string; quote: string }[] }) {
  if (!items || items.length === 0) return null;
  return (
    <section id="testimonios" className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Testimonios</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t) => (
            <blockquote key={t.id} className="p-6 bg-white rounded-lg shadow-sm">
              <p className="text-gray-700 mb-3">“{t.quote}”</p>
              <footer className="text-sm text-gray-500">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
