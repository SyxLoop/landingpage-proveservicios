import Card from "@components/globals/Card";
import { Fuel, Handshake, Droplets, ReceiptText,Circle } from "lucide-react";

const servicesData = [
  {
    id: 1,
    icon: <Fuel size={32} />,
    title: "Venta de Combustible",
    description: "Alta calidad para su vehículo",
  },
  {
    id: 2,
    icon: <Handshake size={32} />,
    title: "Atención al Cliente",
    description: "Atención con personal calificado y comprometido",
  },
  {
    id: 3,
    icon: <Droplets size={32} />,
    title: "Aditivos y Lubricantes",
    description: "Suministro de aditivos y lubricantes para automóviles",
  },
  {
    id: 4,
    icon: <ReceiptText size={32} />,
    title: "Recibos Electronicos",
    description: "Contamos con tecnología INNOVA",
  },
  {
    id: 5,
    icon: <Circle size={32} />,
    title: "Puntos Colombia",
    description: "Reclama y redime tus puntos Colombia",
  },
];

export default function Services() {
  return (
    <section className="flex w-full place-items-center place-content-center bg-accent/50">
      <div className="flex flex-col h-full lg:h-dvh place-items-center place-content-center my-18">
        <div className="flex flex-col place-items-center place-content-center gap-8 mb-8 lg:mb-12 font-bold">
          <h2 className="text-2xl md:text-4xl lg:text-5xl text-surface">
            Nuestros Servicios
          </h2>
          <p className="w-3/4 text-center text-lg whitespace-normal text-gray font-medium">
            Aceptamos todas las tarjetas de crédito y débito, incluyendo Visa y
            Mastercard.
          </p>
        </div>
        <div className="grid w-3/4 grid-cols-1 md:w-3/4 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {servicesData.map((service) => (
            <Card>
              <Card.Body>
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-accent/20`}
                >
                  {service.icon}
                </div>
                <Card.Title className="text-surface">
                  {service.title}
                </Card.Title>
                <Card.Text className="text-gray">
                  {service.description}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
