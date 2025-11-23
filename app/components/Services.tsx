"use client";

import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

type Item = { id: number; title: string; desc: string; image?: string; link?: string; features?: Array<{ name: string; description: string; icon?: string }>; };

const defaultFeatures = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

// Map icon key names (strings stored in data) to actual icon components
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
};

export default function Services({ items }: { items: Item[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section id="servicios" className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Servicios</h2>
  <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
          {items.map((s) => (
            <article key={s.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="h-44 bg-gray-100 flex items-center justify-center text-gray-400">Imagen</div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
                <button
                  type="button"
                  data-modal-target={`default-modal-${s.id}`}
                  data-modal-toggle={`default-modal-${s.id}`}
                  className="text-sm text-blue-600 mt-4 inline-block hover:underline"
                >
                  Más info →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Render one Flowbite modal per service (static in DOM). Flowbite JS will toggle visibility. */}
      {items.map((s) => {
        return (
          <div
            key={`modal-${s.id}`}
            id={`default-modal-${s.id}`}
            tabIndex={-1}
            aria-hidden={true}
            className="hidden overflow-y-auto overflow-x-hidden fixed inset-0 z-50 w-full h-[calc(100%-1rem)] max-h-full"
          >
            {/* Backdrop: clicking it will hide the modal (Flowbite uses JS for this) */}
            <div className="fixed inset-0 bg-black/50" data-modal-hide={`default-modal-${s.id}`}></div>

            {/* Inner wrapper: align to top on small screens so header remains visible, center on larger screens */}
            <div className="flex items-start sm:items-center justify-center min-h-screen p-4">
              <div className="relative w-full max-w-4xl max-h-[calc(100vh-2rem)] overflow-auto z-50">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8 text-gray-900">
                  <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
                    <div>
                      <h3 className="text-base font-semibold text-indigo-600">{s.title}</h3>
                      <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">{s.title}</p>
                      <p className="mt-4 text-lg text-gray-700">{s.desc}</p>
                    </div>
                    <button type="button" className="text-gray-500 bg-transparent hover:bg-gray-100 hover:text-gray-700 rounded-md text-sm w-9 h-9 ms-auto inline-flex justify-center items-center" data-modal-hide={`default-modal-${s.id}`}>
                      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>

                  <div className="mt-8 w-full">
                    <dl className="grid w-full grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
                      {(s.features ?? []).length > 0 ? (
                        (s.features ?? []).map((feature) => {
                          const Icon = feature.icon ? iconMap[feature.icon] ?? CloudArrowUpIcon : CloudArrowUpIcon;
                          return (
                            <div key={feature.name} className="relative pl-16">
                              <dt className="text-base font-semibold text-gray-900">
                                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                  <Icon aria-hidden="true" className="h-6 w-6 text-white" />
                                </div>
                                {feature.name}
                              </dt>
                              <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                            </div>
                          );
                        })
                      ) : (
                        defaultFeatures.map((feature) => (
                          <div key={feature.name} className="relative pl-16">
                            <dt className="text-base font-semibold text-gray-900">
                              <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                              </div>
                              {feature.name}
                            </dt>
                            <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
                          </div>
                        ))
                      )}
                    </dl>
                    {/* Modal footer: simple close button */}
                    <div className="mt-6 pt-4 border-t border-gray-200 text-right">
                      <button
                        data-modal-hide={`default-modal-${s.id}`}
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  );
}
