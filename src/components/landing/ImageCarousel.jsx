import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@components/globals/Button";

const images = [
  {
    src: "/carousel1.png",
    alt: "imagen uno",
  },
  {
    src: "/carousel2.png",
    alt: "imagen dos",
  },
  {
    src: "/carousel3.png",
    alt: "imagen tres",
  },
  {
    src: "/carousel4.png",
    alt: "imagen cuatro",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(
    () =>
      setCurrent((current) =>
        current === images.length - 1 ? 0 : current + 1
      ),
    []
  );

  const prev = useCallback(
    () =>
      setCurrent((current) =>
        current === 0 ? images.length - 1 : current - 1
      ),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="flex flex-col w-full min-h-dvh justify-center items-center py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-surface">
            Zona de Servicios
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Contamos con una zona de servicios a cargo de nuestros aliados:
            <br />
            Lavado de vehículos, servicentro
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <div className="relative aspect-2/1 overflow-hidden rounded-lg">
            <div
              className="flex h'full w'full transition-transform duration-700 ease-in-out will-change-transform"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {images.map((img, index) => (
                <div key={index} className="min-w-full h-full relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button
            text={<ChevronLeft size={32} className="stroke-white" />}
            className="opacity-0 group-hover:opacity-100 absolute left-4 top-1/2 -translate-y-1/2 transition-all bg-accent/25 hover:bg-accent/75 backdrop-blur-sm z-10"
            onClick={prev}
          />

          <Button
            text={<ChevronRight size={32} className="stroke-white" />}
            className="opacity-0 group-hover:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 transition-all bg-accent/25 hover:bg-accent/75 backdrop-blur-sm z-10"
            onClick={next}
          />

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? "bg-accent w-8" : "bg-gray/20"
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
