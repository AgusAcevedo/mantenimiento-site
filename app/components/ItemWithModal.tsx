"use client";

import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

export type Feature = { name: string; description: string; icon?: string };
export type Item = { id: number; title: string; desc: string; image?: string; features?: Feature[] };

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

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  FingerPrintIcon,
};

export default function ItemWithModal({ item, kind = 'item' }: { item: Item; kind?: string }) {
  const modalId = `modal-${kind}-${item.id}`;

  const openModalFallback = () => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('grid', 'place-items-center');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  };

  const closeModalFallback = () => {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('hidden');
    modal.classList.remove('grid', 'place-items-center');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  };

  return (
    <>
      <article className="bg-white border rounded-lg overflow-hidden shadow-sm">
        {item.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.title} className="w-full h-44 object-cover" />
        ) : (
          <div className="h-44 bg-gray-100 flex items-center justify-center text-gray-400">Imagen</div>
        )}
        <div className="p-6">
          <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
          <p className="text-sm text-gray-600">{item.desc}</p>
          <button
            type="button"
            data-modal-target={modalId}
            data-modal-toggle={modalId}
            className="text-sm text-blue-600 mt-4 inline-block hover:underline"
            onClick={openModalFallback}
          >
            Más info →
          </button>
        </div>
      </article>

      <div
        id={modalId}
        tabIndex={-1}
        aria-hidden={true}
        className="hidden overflow-y-auto overflow-x-hidden fixed inset-0 z-50 w-full h-[calc(100%-1rem)] max-h-full"
      >
        <div className="fixed inset-0 bg-black/50" data-modal-hide={modalId}></div>

        <div className="flex items-start sm:items-center justify-center min-h-screen p-4">
          <div className="relative w-full max-w-4xl max-h-[calc(100vh-2rem)] overflow-auto z-50">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 md:p-8 text-gray-900">
              <div className="flex items-start justify-between border-b border-gray-200 pb-4 md:pb-6">
                <div>
                  <h3 className="text-base font-semibold text-indigo-600">{item.title}</h3>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-900">{item.title}</p>
                  <p className="mt-4 text-lg text-gray-700">{item.desc}</p>
                </div>
                <button
                  type="button"
                  className="text-gray-500 bg-transparent hover:bg-gray-100 hover:text-gray-700 rounded-md text-sm w-9 h-9 ms-auto inline-flex justify-center items-center"
                  data-modal-hide={modalId}
                  onClick={closeModalFallback}
                >
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="mt-8 w-full">
                <dl className="grid w-full grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
                  {(item.features ?? []).length > 0 ? (
                    (item.features ?? []).map((feature) => {
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

                <div className="mt-6 pt-4 border-t border-gray-200 text-right">
                  <button
                    data-modal-hide={modalId}
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    onClick={closeModalFallback}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
