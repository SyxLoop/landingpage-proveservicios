import Card from "@components/globals/Card";
import Button from "@components/globals/Button";
import { Download } from "lucide-react";

export default function CompanyPolicies() {
  return (
    <section className="flex w-full py-16 bg-accent/20">
      <div className="container mx-auto px-4 flex flex-col min-h-dvh justify-center items-center gap-16">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-surface">
          Conoce Nuestras Políticas
        </h2>
        <div className="flex flex-col md:flex-row w-full min-[736px]:w-90 md:w-3/4 gap-8 lg:gap-16">
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-surface">
                Tratamiento de Datos Personales
              </Card.Title>
              <Card.Image src="/"></Card.Image>
              <Button className="flex justify-center items-center gap-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Download size={28} className="stroke-accent" />
                </div>
                <p>Descargar PDF</p>
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-center text-surface">
                Politicas Laborales
              </Card.Title>
              <Card.Image src="/"></Card.Image>
              <Card.Footer>
                <Button>
                  <Download />
                  <p>Descargar PDF</p>
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
