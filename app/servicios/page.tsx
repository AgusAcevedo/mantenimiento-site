import { site } from "../data/site";

export default function ServiciosPage() {
  const services = site.services || [];
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6">Servicios</h1>
        <div className="space-y-6">
          {services.map((s, idx) => (
            <section key={s.id} className="bg-white border rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{s.title}</h2>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <a href="#contacto" className="text-blue-600 hover:underline">Solicitar presupuesto →</a>
              {idx < services.length - 1 && <div className="border-t mt-6 pt-6" />}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
