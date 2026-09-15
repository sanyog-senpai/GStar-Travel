import HeroSection from "./sections/hero-section";
import { CustomItinerary } from "./sections/custom-itinerary";
import { Packages } from "./sections/packages";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Packages />
      <CustomItinerary />
    </>
  );
}