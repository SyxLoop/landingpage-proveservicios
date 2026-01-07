import FlagIcon from "@/assets/flag-alt.svg";
import BinocularsIcon from "@/assets/binoculars.svg";

const infoMisionVision = [
  {
    title: "Misión",
    text: "Garantizar a nuestros clientes los mejores estándares de seguridad y calidad en los productos y servicios con una relación costo beneficio para nuestros clientes e inversionistas.",
    icon: FlagIcon,
    alt: "Icono de bandera representando la misión",
  },
  {
    title: "Visión",
    text: "Proyectarnos como el mejor distribuidor minorista de combustible por cumplir y satisfacer las necesidades y expectativas del mercado, manteniendo la excelencia en el servicio y la calidad de nuestros productos.",
    icon: BinocularsIcon,
    alt: "Icono de bandera representando la misión",
  },
];

const InfoBlock = ({ icon, alt, title, text }) => (
  <div className="flex flex-col w-full md:w-1/2 items-center text-center">
    <div className="mb-4 p-4 bg-accent/25 rounded-full inline-block">
      <img src={icon} alt={alt} className="w-12 h-12" />
    </div>
    <h3 className="text-2xl text-surface font-bold pb-4">{title}</h3>
    <p className="max-w-md text-lg text-gray leading-relaxed">{text}</p>
  </div>
);

export default function AboutUs() {
  return (
    <section className="flex w-full justify-center items-center py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col min-h-dvh justify-center items-center gap-16">
        <div className="flex flex-col items-center text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-surface mb-8 font-bold">
            Quienes Somos
          </h2>
          <p className="text-lg text-gray leading-relaxed text-justify md:text-center">
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
        <div className="flex flex-col md:flex-row w-full gap-12 md:gap-8 justify-center">
          {infoMisionVision.map((block, index) => (
            <InfoBlock key={index} {...block} />
          ))}
        </div>
      </div>
    </section>
  );
}
