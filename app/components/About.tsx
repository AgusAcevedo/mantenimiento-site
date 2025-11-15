export default function About() {
  return (
    <section id="sobre" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Sobre la empresa</h2>
          <p className="text-gray-600 mb-3">Texto de ejemplo sobre la empresa. Aquí puedes agregar la historia, misión y valores. Usa este bloque para reemplazar con información real más adelante.</p>
          <ul className="text-gray-600 list-disc list-inside space-y-1">
            <li>Experiencia en el sector</li>
            <li>Equipo certificado</li>
            <li>Compromiso con la calidad</li>
          </ul>
        </div>
        <div>
          <div className="h-48 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">Placeholder imagen</div>
        </div>
      </div>
    </section>
  );
}
