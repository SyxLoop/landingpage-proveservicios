import Card from "@components/globals/Card";
import { Fuel, Handshake, Droplets, ReceiptText, Circle } from "lucide-react";

const servicesData = [
  {
    id: 1,
    icon: Fuel,
    title: "Venta de Combustible",
    description: "Alta calidad para su vehículo",
  },
  {
    id: 2,
    icon: Handshake,
    title: "Atención al Cliente",
    description: "Atención con personal calificado y comprometido",
  },
  {
    id: 3,
    icon: Droplets,
    title: "Aditivos y Lubricantes",
    description: "Suministro de aditivos y lubricantes para automóviles",
  },
  {
    id: 4,
    icon: ReceiptText,
    title: "Recibos Electronicos",
    description: "Contamos con tecnología INNOVA",
  },
  {
    id: 5,
    icon: Circle,
    title: "Puntos Colombia",
    description: "Reclama y redime tus puntos Colombia",
  },
];

export default function Services() {
  return (
    <section className="flex w-full justify-center items-center py-16 bg-accent/20">
      <div className="container mx-auto px-4 flex flex-col min-h-dvh justify-center items-center gap-16">
        <div className="flex flex-col justify-center items-center gap-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center text-surface font-bold">
            Nuestros Servicios
          </h2>
          <p className="w-3/4 text-center text-lg lg:text-xl text-gray">
            Aceptamos todas las tarjetas de crédito y débito, incluyendo Visa y
            Mastercard.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 w-full lg:w-3/4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="w-full min-[736px]:w-90 md:w-80 flex flex-col"
            >
              <Card>
                <Card.Body className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-accent/20`}
                  >
                    <service.icon size={32} className="stroke-accent" />
                  </div>
                  <Card.Title className="text-center text-surface/75">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-center text-gray">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
