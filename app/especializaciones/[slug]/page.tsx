import { notFound } from "next/navigation";
import { site } from "../../data/site";

type Props = { params: { slug: string } };

export default function EspecializacionDetalle({ params }: Props) {
  const slug = params.slug;
  const item = site.specializations.find((s) => s.slug === slug);
  if (!item) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.title} className="w-full h-64 object-cover rounded-md mb-6" />
        ) : (
          <div className="w-full h-64 bg-gray-100 rounded-md mb-6 flex items-center justify-center text-gray-400">Imagen</div>
        )}

        <p className="text-gray-700 mb-6">{item.desc}</p>

        <section className="bg-gray-50 border rounded p-4">
          <h2 className="font-semibold mb-2">Más sobre {item.title}</h2>
          <p className="text-sm text-gray-600">Aquí podés añadir información detallada sobre cómo trabajamos con {item.title}, casos de éxito, procesos, y un CTA para solicitar presupuesto o contactar.</p>
          <div className="mt-4">
            <a href="#contacto" className="inline-block bg-blue-600 text-white px-4 py-2 rounded">Solicitar presupuesto</a>
          </div>
        </section>
      </div>
    </main>
  );
}
