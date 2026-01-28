import { site } from "../data/site";
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10" aria-labelledby="hero-heading">
      <div className="md:w-1/2">
        <h1 id="hero-heading" className="mb-4">
          <span className="text-3xl md:text-4xl font-semibold">{site.name}</span>
          <span className="ml-2 text-lg md:text-2xl font-normal text-gray-700">{site.tagline}</span>
        </h1>
        <h2 className="text-lg text-gray-600 mb-6 font-normal">Especialistas en instalaciones sanitarias, eléctricas, HVAC, sistemas contra incendios, grupos electrógenos y obra civil.
Diseño, proyecto y ejecución de instalaciones, más mantenimiento preventivo, correctivo y atención de urgencias 24/7.</h2>
        <div className="flex gap-3">
          <a href="#servicios" className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700">Nuestros servicios</a>
          <a href="#contacto" className="border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100">Solicitar presupuesto</a>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-lg p-6 shadow-lg">
          <div className="relative w-full h-56 rounded-md overflow-hidden">
            {/* Use explicit width/height + w-full h-full so Next/Image renders reliably on mobile */}
            <Image
              src="/meeting.jpg"
              alt="Equipo profesional de IAFA en reunión técnica planificando proyectos de mantenimiento y servicios integrales"
              width={1200}
              height={700}
              priority
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
