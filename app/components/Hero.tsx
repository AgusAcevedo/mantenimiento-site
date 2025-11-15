import { site } from "../data/site";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{site.tagline}</h1>
        <p className="text-lg text-gray-600 mb-6">Plantilla de presentación para empresa — reemplaza estos textos con tu contenido real.</p>
        <div className="flex gap-3">
          <a href="#servicios" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">Nuestros servicios</a>
          <a href="#contacto" className="border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100">Solicitar presupuesto</a>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-lg p-6 shadow-lg">
          <div className="h-56 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">Placeholder imagen</div>
          <p className="text-sm text-gray-500 mt-3">Imagen representativa del servicio o equipo.</p>
        </div>
      </div>
    </section>
  );
}
