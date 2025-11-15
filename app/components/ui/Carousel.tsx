"use client";

import { useEffect, useRef, useState } from "react";

type Item = {
  id: number | string;
  title: string;
  desc?: string;
  image?: string | null;
  link?: string;
};

// Full-width infinite carousel using tripled items technique.
// - tripled array: [items, items, items]
// - start at middle copy index = items.length
// - on transition end, if index out of middle bounds, reset index to middle equivalent without animation
export default function Carousel({ items, ariaLabel = "Carousel" }: { items: Item[]; ariaLabel?: string }) {
  const m = items.length;
  if (m === 0) return null;
  const tripled = Array.from({ length: 3 * m }).map((_, i) => items[i % m]);

  const [index, setIndex] = useState<number>(m); // current absolute index in tripled
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [shift, setShift] = useState(0);

  // compute card shift (width + gap) dynamically
  useEffect(() => {
    const compute = () => {
      const card = cardRef.current || trackRef.current?.querySelector<HTMLDivElement>("[data-carousel-item]");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const style = getComputedStyle(card);
      const marginRight = parseFloat(style.marginRight || "0");
      setShift(Math.round(rect.width + marginRight));
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [items]);

  // transform value
  const transformX = -index * shift;

  // move to next
  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => prev - 1);
  };

  // handle transition end: if index outside middle copy, wrap
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onEnd = () => {
      setIsAnimating(false);
      if (index >= 2 * m) {
        // moved into third copy; reset to middle equivalent
        const newIndex = index - m;
        // reset transform without visible jump
        track.style.transition = "none";
        track.style.transform = `translateX(-${newIndex * shift}px)`;
        // force reflow
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        track.offsetHeight;
        setIndex(newIndex);
        track.style.transition = "transform 300ms ease";
      } else if (index < m) {
        const newIndex = index + m;
        track.style.transition = "none";
        track.style.transform = `translateX(-${newIndex * shift}px)`;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        track.offsetHeight;
        setIndex(newIndex);
        track.style.transition = "transform 300ms ease";
      }
    };

    track.addEventListener("transitionend", onEnd);
    return () => track.removeEventListener("transitionend", onEnd);
  }, [index, m, shift]);

  // apply transform via style on track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = isAnimating ? "transform 300ms ease" : "none";
    track.style.transform = `translateX(${transformX}px)`;
  }, [transformX, isAnimating]);

  // render
  return (
    <div className="relative w-full">
      <button
        aria-label="Anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md"
        onClick={prev}
        disabled={isAnimating}
      >
        ‹
      </button>

      <div className="w-full overflow-hidden">
        <div ref={trackRef} className="flex items-stretch gap-4 will-change-transform" style={{ transform: `translateX(${transformX}px)` }}>
          {tripled.map((it, idx) => (
            <div
              data-carousel-item
              key={idx}
              ref={idx === m ? cardRef : undefined}
              className="shrink-0 flex-0 w-[300px] md:w-[340px] lg:w-[380px] bg-white rounded-lg border shadow-sm"
            >
              {it.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={it.image} alt={it.title} className="w-full h-40 object-cover rounded-t-lg" />
              ) : (
                <div className="w-full h-40 bg-gray-100 rounded-t-lg flex items-center justify-center text-gray-400">Imagen</div>
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{it.title}</h3>
                {it.desc && <p className="text-sm text-gray-600 mb-4">{it.desc}</p>}
                <a href={it.link ?? "#"} className="inline-block text-sm text-blue-600 hover:underline">Más info →</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="Siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md"
        onClick={next}
        disabled={isAnimating}
      >
        ›
      </button>
    </div>
  );
}
