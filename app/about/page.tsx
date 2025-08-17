import InfiniteScrollText from "@/components/InfiniteScrollText";
import Testimonials from "@/components/testimonials";
import { Map } from "@/components/index";
import InnerHero from "@/components/innerHero";
import { About_hero } from "@/public/images/index";

export default function AboutPage() {
  const mapCenter = { lat: 6.4663, lng: 3.6015 }; // Ajah

  return (
    <main>
      <InnerHero src={About_hero} alt={"About_us"} tittle={"About Us"} />
      <h1>About</h1>
      <InfiniteScrollText tittle1={"REAL STORIES"} tittle2={"REAL SUCCESS"} />
      <Testimonials />
      <Map center={mapCenter} zoom={15} height="500px" showMarker />
    </main>
  );
}
