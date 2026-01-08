import Carousel from "@components/globals/Carousel";

const carouselImages = [
  "../../../carousel1.png",
  "../,,/../carousel2.png",
  "../../../carousel3.png",
  "../../../carousel4.png",
];

export default function ImageCarousel() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 flex flex-col min-h-dvh justify-center items-center gap-14">
        <div className="text-center mb-8">
          <p className="text-2xl text-gray leading-relaxed text-justify md:text-center">
            Contamos con una zona de servicios a cargo de nuestros aliados:{" "}
            <br />
            Lavado de vehículos, Servicentro
          </p>
        </div>
        <div className="flex w-full h-full justify-center items-center">
          <Carousel autoSlide={true} autoSlideInterval={4000}>
            {carouselImages.map((image, index) => {
              <img
                key={index}
                src={image}
                alt={`image-${index}`}
                className="min-w-full h-auto object-cover"
              />;
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
