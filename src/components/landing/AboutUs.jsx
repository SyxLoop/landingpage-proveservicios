import FlagIcon from "../../assets/flag-alt.svg";
import BinocularsIcon from "../../assets/binoculars.svg";

export default function Hero() {
  return (
    <section className="flex w-full">
      <div className="flex flex-col h-full md:h-dvh place-items-center place-content-center py-12 md:py-0 gap-12">
        <div className="flex flex-col place-items-center place-content-center font-bold">
          <h2 className="text-3xl md:text-5xl text-surface mb-12">Quienes Somos</h2>
          <p className="w-3/4 text-left md:text-justify text-[18px] whitespace-normal text-gray font-medium">
            Una empresa dedicada a la distribución de combustibles y
            lubricantes, con procedimientos seguros y equipos de alta
            tecnología, con lo cual generamos seguridad y confianza en nuestros
            clientes y proveedores. Contamos con un grupo humano altamente
            calificado y eficiente que trabaja de manera permanente para
            garantizar a nuestros clientes los mejores estándares de seguridad y
            calidad en los productos y servicios con una relación costo
            beneficio para nuestros clientes e inversionistas. Propendemos por
            la protección y la conservación del Medio Ambiente, a través de la
            implementación y aplicación de las mejores prácticas ambientales.
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-16 md:gap-0">
          <div className="flex flex-col w-full  md:w-1/2 place-items-center">
            <img
              src={FlagIcon}
              className="w-20 mb-4 p-4 bg-accent/25 rounded-full"
            />
            <h2 className="text-2xl text-surface font-bold pb-4">Misión</h2>
            <p className="w-2/3 text-left text-[18px] text-gray whitespace-normal">
              Garantizar a nuestros clientes los mejores estándares de seguridad
              y calidad en los productos y servicios con una relación costo
              beneficio para nuestros clientes e inversionistas.
            </p>
          </div>

          <div className="flex flex-col w-full md:w-1/2 place-items-center">
            <img
              src={BinocularsIcon}
              className="w-20 mb-4 p-4 bg-accent/25 rounded-full"
            />
            <h2 className="text-2xl text-surface font-bold pb-4">Visión</h2>
            <p className="w-2/3 text-left text-[18px] text-gray whitespace-normal">
              Proyectarnos como el mejor distribuidor minorista de combustible
              por cumplir y satisfacer las necesidades y expectativas del
              mercado, manteniendo la excelencia en el servicio y la calidad de
              nuestros productos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
