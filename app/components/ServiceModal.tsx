"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";

type Service = {
  id: number;
  title: string;
  desc?: string;
  image?: string;
  link?: string;
};

export default function ServiceModal({ service, onClose }: { service: Service | null; onClose: () => void }) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!service) return null;

  const modal = (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden={false}
  className="overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full"
    >
      {/* backdrop (clicking it closes the modal) */}
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />

      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-neutral-primary-soft border border-default rounded-base shadow-sm p-4 md:p-6">
          <div className="flex items-center justify-between border-b border-default pb-4 md:pb-5">
            <h3 className="text-lg font-medium text-heading">{service.title}</h3>
            <button
              type="button"
              className="text-body bg-transparent hover:bg-neutral-tertiary hover:text-heading rounded-base text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
              onClick={onClose}
            >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="space-y-4 md:space-y-6 py-4 md:py-6">
            <p className="leading-relaxed text-body">{service.desc}</p>
            <p className="leading-relaxed text-body">Más información sobre {service.title}.</p>
          </div>

          <div className="flex items-center border-t border-default space-x-4 pt-4 md:pt-5">
            <button data-modal-hide="default-modal" type="button" className="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={onClose}>
              Cerrar
            </button>
            <button data-modal-hide="default-modal" type="button" className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={() => { if (service.link) window.location.href = service.link; }}>
              Ir al servicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
