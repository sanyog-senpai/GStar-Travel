import HeroSection from "./sections/HeroSection";
import OfferSection from "./sections/OfferSection";
import Packages from "./sections/Packages";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OfferSection />
      <Packages />
      <WhyChooseUs />
    </>
  );
}