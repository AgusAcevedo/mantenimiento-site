import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contacto" className="max-w-6xl mx-auto px-6 py-12">
      <div className="bg-blue-600 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">¿Listo para empezar?</h3>
          <p className="text-sm opacity-90">Contacta con nosotros para un presupuesto personalizado.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <a href={`mailto:${site.email}`} className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium">Enviar email</a>
        </div>
      </div>
    </section>
  );
}
