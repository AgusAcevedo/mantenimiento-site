"use client";

import { Disclosure } from "@headlessui/react";
import { MenuIcon } from './icons/MenuIcon'
import { CloseIcon } from './icons/CloseIcon'
import Link from "next/link";
import Image from "next/image";
import { site } from '../data/site'
import type { MouseEvent } from "react";

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type NavigationItem = {
  name: string;
  href: string;
  onClick?: (e: MouseEvent) => void;
  className?: string;
};

export default function Header() {
  // Smooth-scroll helper for single-page navigation
  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // close mobile menu if open
    const btn = document.getElementById("main-menu-button");
    if (btn && btn.getAttribute("aria-expanded") === "true") btn.click();
  };

  const navigation: NavigationItem[] = [
    { name: "Servicios", href: "/#servicios", onClick: (e) => { e.preventDefault(); smoothScroll('servicios'); } },
    { name: "Nosotros", href: "/#sobre", onClick: (e) => { e.preventDefault(); smoothScroll('sobre'); } },
    { name: "Testimonios", href: "/#testimonios", onClick: (e) => { e.preventDefault(); smoothScroll('testimonios'); } },
    { name: "Nos especializamos en", href: "/#especializaciones", onClick: (e) => { e.preventDefault(); smoothScroll('especializaciones'); } },
    { name: "Contacto", href: "/#contacto", onClick: (e) => { e.preventDefault(); smoothScroll('contacto'); }, className: "bg-blue-600 text-white px-4 py-2 sm:px-5 sm:py-3 rounded hover:bg-blue-700" },
  ];

  return (
    <Disclosure as="nav" className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 sm:h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button
                  id="main-menu-button"
                  className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                >
                  <span className="sr-only">Open main menu</span>
                  <MenuIcon aria-hidden="true" className={classNames("block h-6 w-6", open ? "hidden" : "block")} />
                  <CloseIcon aria-hidden="true" className={classNames("h-6 w-6", open ? "block" : "hidden")} />
                </Disclosure.Button>
              </div>

              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      alt={`${site.name} logo`}
                      src="/logo_banner.png"
                      width={56}
                      height={56}
                      className="h-10 sm:h-14 w-auto"
                      priority
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block w-full">
                  <div className="flex items-center w-full">
                    <div className="flex space-x-4 items-center">
                      {navigation.filter((it) => it.name !== "Contacto").map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={item.onClick}
                          className={classNames(
                            item.className ?? "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                            "rounded-md px-4 py-2 sm:px-5 sm:py-3 text-sm sm:text-lg font-medium"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                          <div className="ml-auto">
                            {navigation.filter((it) => it.name === "Contacto").map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={item.onClick}
                                className={classNames(
                                  item.className ?? "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                                  "rounded-md px-3 py-2 text-sm font-medium"
                                )}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="div"
                >
                  <Link
                    href={item.href}
                    onClick={item.onClick}
                    className={classNames(
                      item.className ?? "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
                      "block rounded-md px-4 py-3 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
