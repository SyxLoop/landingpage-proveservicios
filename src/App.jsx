import Hero from "./components/landing/Hero";
import AboutUs from "./components/landing/AboutUs";
import Services from "./components/landing/Services";
import ImageCarousel from "./components/landing/ImageCarousel";
import CompanyPolicies from "./components/landing/CompanyPolicies";

export default function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ImageCarousel />
      <CompanyPolicies />
    </>
  );
}
