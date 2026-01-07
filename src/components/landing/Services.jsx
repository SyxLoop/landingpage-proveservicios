import Card from "@components/globals/Card";
import { Fuel, Handshake, Droplets, ReceiptText, Circle } from "lucide-react";

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
    <section className="flex w-full justify-center items-center py-16 bg-accent/50">
      <div className="container mx-auto px-4 flex flex-col min-h-dvh justify-center items-center gap-14">
        <div className="flex flex-col justify-center items-center gap-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-surface font-bold">
            Nuestros Servicios
          </h2>
          <p className="w-3/4 text-center text-lg text-gray">
            Aceptamos todas las tarjetas de crédito y débito, incluyendo Visa y
            Mastercard.
          </p>
        </div>
        <div className="grid w-3/4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
