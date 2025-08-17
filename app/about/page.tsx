import InfiniteScrollText from "@/components/InfiniteScrollText";
import Testimonials from "@/components/testimonials";
import { Map } from "@/components/index";
import InnerHero from "@/components/innerHero";
import { About_hero } from "@/public/images/index";
import AboutSection from "@/components/AboutSection";
import OurTeam from "@/components/OurTeam";
import InfiniteScrollTextWhite from "@/components/InfiniteScrollTextWhite";

export default function AboutPage() {
  const mapCenter = { lat: 6.4663, lng: 3.6015 }; // Ajah

  return (
    <main>
      <InnerHero src={About_hero} alt={"About_us"} tittle={"About Us"} />
      <AboutSection />
      <InfiniteScrollTextWhite tittle1={"OUR UNSUNG"} tittle2={"HEROES"} />
      <OurTeam />
      <InfiniteScrollText tittle1={"REAL STORIES"} tittle2={"REAL SUCCESS"} />
      <Testimonials />
      <Map center={mapCenter} zoom={15} height="500px" showMarker />
    </main>
  );
}
