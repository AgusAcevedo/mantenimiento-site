import { site } from "../data/site";

export default function Contact() {
  return (
  <section id="contacto" className="max-w-6xl mx-auto px-6 py-12 scroll-mt-12 sm:scroll-mt-16">
      <div className="bg-blue-600 text-white rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold">¿Listo para empezar?</h3>
          <p className="text-sm opacity-90">Contacta con nosotros para un presupuesto personalizado.</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-col items-stretch md:items-center gap-3">
          <div className="flex flex-col md:flex-row w-full md:w-auto gap-3">
            <a
              href={`mailto:${site.emails.ar}`}
              aria-label="Enviar correo Argentina"
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-700 hover:text-white transition-colors w-full md:w-auto text-center"
            >
              Enviar email AR
            </a>

            <a
              href={`mailto:${site.emails.cl}`}
              aria-label="Enviar correo Chile"
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-700 hover:text-white transition-colors w-full md:w-auto text-center"
            >
              Enviar email CL
            </a>

            {/* WhatsApp Argentina */}
            <a
              href={`https://wa.me/${site.phones.ar.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium flex items-center justify-center gap-2 transition-colors w-full md:w-auto text-center"
              aria-label="Contactar por WhatsApp Argentina"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.373 0 .01 5.373.01 12.001c0 2.11.55 4.164 1.6 5.97L0 24l6.26-1.64A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 21.6c-1.57 0-3.09-.42-4.38-1.2l-.31-.18-3.72.98.99-3.63-.2-.33A9.36 9.36 0 0 1 2.4 12C2.4 6.36 6.36 2.4 12 2.4c2.56 0 4.95.93 6.86 2.63A9.6 9.6 0 0 1 21.6 12c0 5.64-3.96 9.6-9.6 9.6z" />
                <path d="M17.54 14.14c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.18.28-.71.91-.87 1.1-.16.18-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.18 0-.48.07-.73.33-.26.26-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.91.14.18 1.96 3 4.75 4.2 3 1.3 3 0.87 3.53.82.54-.05 1.66-.68 1.9-1.34.24-.66.24-1.23.17-1.35-.07-.12-.26-.18-.54-.32z" />
              </svg>
              WhatsApp AR
            </a>

            {/* WhatsApp Chile */}
            <a
              href={`https://wa.me/${site.phones.cl.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium flex items-center justify-center gap-2 transition-colors w-full md:w-auto text-center"
              aria-label="Contactar por WhatsApp Chile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.91 11.91 0 0 0 12 0C5.373 0 .01 5.373.01 12.001c0 2.11.55 4.164 1.6 5.97L0 24l6.26-1.64A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.2-1.24-6.2-3.48-8.52zM12 21.6c-1.57 0-3.09-.42-4.38-1.2l-.31-.18-3.72.98.99-3.63-.2-.33A9.36 9.36 0 0 1 2.4 12C2.4 6.36 6.36 2.4 12 2.4c2.56 0 4.95.93 6.86 2.63A9.6 9.6 0 0 1 21.6 12c0 5.64-3.96 9.6-9.6 9.6z" />
                <path d="M17.54 14.14c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.18.28-.71.91-.87 1.1-.16.18-.32.21-.6.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.19-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.64-1.55-.88-2.12-.23-.55-.47-.48-.64-.49l-.55-.01c-.18 0-.48.07-.73.33-.26.26-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.91.14.18 1.96 3 4.75 4.2 3 1.3 3 0.87 3.53.82.54-.05 1.66-.68 1.9-1.34.24-.66.24-1.23.17-1.35-.07-.12-.26-.18-.54-.32z" />
              </svg>
              WhatsApp CL
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
