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
        <div className="flex flex-col md:flex-row w-full min-[736px]:w-90 md:w-3/4 gap-8 md:gap-10 lg:gap-16">
          <Card>
            <Card.Body className="flex items-center gap-4">
              <Card.Title className="text-center my-4 text-surface">
                Tratamiento de Datos <br />
                Personales
              </Card.Title>
              <Card.Image src="/manual.png" className="w-3/5 h-full" />
              <Button
                className={
                  "flex justify-center items-center md:w-1/2 border border-gray hover:bg-accent hover:border-transparent hover:text-white gap-4 my-2 transition delay-50 group"
                }
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Download
                    size={28}
                    className="stroke-accent group-hover:stroke-white transition delay-50"
                  />
                </div>
                <p className="text-sm lg:text-lg">Descargar PDF</p>
              </Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className="flex items-center gap-4">
              <Card.Title className="text-center my-4 text-surface">
                Políticas <br />
                Laborales
              </Card.Title>
              <Card.Image src="/pl1.jpg" className="w-3/5 h-full" />
              <Button
                className={
                  "flex justify-center items-center w-full md:w-1/2 border border-gray hover:bg-accent hover:border-transparent hover:text-white gap-4 my-2 transition delay-50 group"
                }
              >
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  <Download
                    size={28}
                    className="stroke-accent group-hover:stroke-white transition delay-50"
                  />
                </div>
                <p className="text-sm lg:text-lg">Descargar PDF</p>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}
