import InfiniteScrollText from "@/components/InfiniteScrollText";
import InnerHero from "@/components/innerHero";
import Testimonials from "@/components/testimonials";
import { Project_hero } from "@/public/images";
import { Map } from "@/components/index";

export default function ProjectsPage() {
  const mapCenter = { lat: 6.4663, lng: 3.6015 }; // Ajah
  return (
    <main>
      <InnerHero src={Project_hero} alt={"Projects"} tittle={"Projects"} />
      <InfiniteScrollText tittle1={"REAL STORIES"} tittle2={"REAL SUCCESS"} />
      <Testimonials />
      <Map center={mapCenter} zoom={15} height="500px" showMarker />
    </main>
  );
}
