export default function About() {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sobre la empresa</h2>
          <p className="text-gray-600 mb-3">Somos una empresa dedicada al mantenimiento integral de instalaciones edilicias, brindando soluciones confiables en sistemas sanitarios, eléctricos, climatización, obra civil y atención de emergencias. Trabajamos con enfoque preventivo, respuesta rápida y un alto estándar de calidad para garantizar espacios seguros y plenamente funcionales.</p>
          <h3 className="text-lg font-medium mb-2">Nuestros pilares</h3>
          <ul className="text-gray-600 list-disc list-inside space-y-1">
            <li>Experiencia en el sector</li>
            <li>Equipo certificado</li>
            <li>Compromiso con la calidad</li>
            <li>Respuesta rápida 24/7</li>
            <li>Servicio adaptable para hogares, comercios y grandes instalaciones</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-white rounded-lg p-6 shadow-lg">
          <img src="/logo_banner.png" alt="Reunión de trabajo" className="w-full h-56 object-cover rounded-md" />
        </div>
      </div>
    </section>
  );
}
