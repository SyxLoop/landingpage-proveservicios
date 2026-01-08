import { useState, useEffect } from "react";
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

  const next = () => {
    setCurrent((current + 1) % images.length);
  };

  const prev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-surface">
            Zona de Servicios
          </h2>
          <p className="text-lg text-gray max-w-2xl mx-auto">
            Contamos con una zona de servicios a cargo de nuestros aliados:
            Lavado de vehículos, servicentro
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-2/1 overflow-hidden rounded-lg">
            <img
              src={images[current].src || "/placeholder.svg"}
              alt={images[current].alt}
              className="w-full h-full object-cover"
            />
          </div>

          <Button
            text={<ChevronLeft size={40} />}
            className="opacity-0 md:opacity-100 absolute left-4 top-1/2 -translate-y-1/2 transition-all bg-accent/25 hover:bg-accent/75 backdrop-blur-sm"
            onClick={prev}
          />

          <Button
            text={<ChevronRight size={40} />}
            className="opacity-0 md:opacity-100 absolute right-4 top-1/2 -translate-y-1/2 transition-all bg-accent/25 hover:bg-accent/75 backdrop-blur-sm"
            onClick={next}
          />

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === current ? "bg-accent w-8" : "bg-gray"
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
