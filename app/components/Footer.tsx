import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <div className="md:w-1/2">
            <h4 className="text-sm font-semibold mb-2">Operamos en:</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span>Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span>Santiago, Chile</span>
              </li>
            </ul>
          </div>

          <div className=" mt-4 md:mt-0 flex flex-col items-start text-left text-gray-600 md:pl-6 lg:pl-8">
            <span><span className="font-semibold ">Tel (AR):</span> <a className="hover:underline text-gray-700" href={`tel:${site.phones.ar.replace(/[^\d+]/g, "")}`}>{site.phones.ar}</a></span>
            <span><span className="font-semibold ">Tel (CL):</span> <a className="hover:underline text-gray-700" href={`tel:${site.phones.cl.replace(/[^\d+]/g, "")}`}>{site.phones.cl}</a></span>
            <span className="mt-1"><span className="font-semibold ">Correo:</span> {site.email}</span>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {site.name} — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
