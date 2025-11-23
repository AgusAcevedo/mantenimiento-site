"use client";

import { useEffect } from "react";
import "flowbite";

export default function FlowbiteInit() {
  useEffect(() => {
    // Fallback modal toggler: if Flowbite's own handlers aren't present
    // (or were initialized before SSR/DOM hydration), this ensures
    // buttons with data-modal-toggle / data-modal-hide still work.

    function showModal(id: string) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.remove("hidden");
      // ensure modal uses grid centering when visible
      modal.classList.add("grid", "place-items-center");
      // lock body scroll
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    }

    function hideModal(id: string) {
      const modal = document.getElementById(id);
      if (!modal) return;
      modal.classList.add("hidden");
      modal.classList.remove("grid", "place-items-center");
      // restore body scroll (simple: remove overflow styles)
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    function onDocClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const toggle = target.closest("[data-modal-toggle]") as HTMLElement | null;
      if (toggle) {
        const id = toggle.getAttribute("data-modal-toggle") || toggle.getAttribute("data-modal-target");
        if (id) {
          showModal(id);
        }
      }

      const hide = target.closest("[data-modal-hide]") as HTMLElement | null;
      if (hide) {
        const id = hide.getAttribute("data-modal-hide") || hide.getAttribute("data-modal-target");
        if (id) {
          hideModal(id);
        } else {
          // if element itself is inside modal, find nearest modal ancestor
          const modalAncestor = target.closest("[id^='default-modal-']") as HTMLElement | null;
          if (modalAncestor) hideModal(modalAncestor.id);
        }
      }
    }

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        // close all open modals
        document.querySelectorAll("[id^='default-modal-']").forEach((m) => {
          if (!(m as HTMLElement).classList.contains("hidden")) {
            (m as HTMLElement).classList.add("hidden");
          }
        });
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
      }
    }

    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);

    // Attach direct listeners to existing toggle elements (helps in some hydration scenarios)
    const toggles = Array.from(document.querySelectorAll("[data-modal-toggle]")) as HTMLElement[];
    const attached: Array<{ el: HTMLElement; handler: EventListener }> = [];
    toggles.forEach((t) => {
      const handler = (ev: Event) => {
        ev.preventDefault();
        const id = t.getAttribute("data-modal-toggle") || t.getAttribute("data-modal-target");
        if (id) showModal(id);
      };
      t.addEventListener("click", handler);
      attached.push({ el: t, handler });
    });

    // (no automatic hide on mount) rely on Flowbite or user interaction to open/close modals

    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
      attached.forEach(({ el, handler }) => el.removeEventListener("click", handler));
    };
  }, []);

  return null;
}
