import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <span>© {new Date().getFullYear()} {site.name} — Plantilla</span>
        <span className="mt-2 md:mt-0">{site.address} · {site.phone} · <a href="#" className="hover:underline">Aviso legal</a></span>
      </div>
    </footer>
  );
}
