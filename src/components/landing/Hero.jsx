import Button from "@components/globals/Button.jsx";
import heroImage from "@/assets/proveservicios.jpg";

export default function Hero() {
  return (
    <section className="relative flex w-full h-dvh">
      <div className="absolute inset-0 z-0 bg-black">
        <img
          src={heroImage}
          alt="Auto servicio"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative flex flex-col h-full w-full place-items-center place-content-center gap-8">
        <h1 className="text-white text-5xl md:text-6xl text-center leading-tight">
          Proveedora de Servicios <br />
          <span className="text-white text-3xl md:text-5xl">
            para Automotores S.A
          </span>
        </h1>
        <h2 className="text-white text-lg md:text-2xl">
          Trabajo y servicio de la mejor{" "}
          <span className="text-accent text-2xl md:text-3xl font-bold">
            Calidad
          </span>
        </h2>
        <Button
          text={"Contáctanos"}
          className="border-2 border-white text-white hover:bg-accent hover:border-transparent transition delay-50"
        />
      </div>
    </section>
  );
}
