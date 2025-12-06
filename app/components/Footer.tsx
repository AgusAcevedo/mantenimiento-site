import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="text-sm text-gray-600">
          <h4 className="text-sm font-semibold mb-4 text-center">Operamos en:</h4>

          <div className="flex flex-col gap-4">
            {/* Compact two-column layout: use horizontal space on md+ and stack on small screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start max-w-3xl mx-auto">
              {/* Chile (first) */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 mt-1 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <div className="flex-1">
                  <div className="font-medium">Santiago, Chile</div>
                  <div className="mt-1 text-gray-600 text-sm space-y-1">
                    <div>
                      <span className="font-semibold">Tel (CL):</span>{' '}
                      <a className="hover:underline text-gray-700" href={`tel:${site.phones.cl.replace(/[^\\d+]/g, "")}`}>{site.phones.cl}</a>
                    </div>
                    <div>
                      <span className="font-semibold">Correo (CL):</span>{' '}
                      <a className="hover:underline text-gray-700" href={`mailto:${site.emails.cl}`}>{site.emails.cl}</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Argentina */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-500 mt-1 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <div className="flex-1">
                  <div className="font-medium">Buenos Aires, Argentina</div>
                  <div className="mt-1 text-gray-600 text-sm space-y-1">
                    <div>
                      <span className="font-semibold">Tel (AR):</span>{' '}
                      <a className="hover:underline text-gray-700" href={`tel:${site.phones.ar.replace(/[^\\d+]/g, "")}`}>{site.phones.ar}</a>
                    </div>
                    <div>
                      <span className="font-semibold">Correo (AR):</span>{' '}
                      <a className="hover:underline text-gray-700" href={`mailto:${site.emails.ar}`}>{site.emails.ar}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {site.name} — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
