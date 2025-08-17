import InfiniteScrollText from "@/components/InfiniteScrollText";
import Testimonials from "@/components/testimonials";
import React from "react";
import { Map } from "@/components/index";
import InnerHero from "@/components/innerHero";
import { Services_hero } from "@/public/images";

export default function page() {
  const mapCenter = { lat: 6.4663, lng: 3.6015 }; // Ajah
  return (
    <div>
      <h1>Services</h1>
      <InnerHero src={Services_hero} alt={"Services"} tittle={"Services"} />
      <InfiniteScrollText tittle1={"REAL STORIES"} tittle2={"REAL SUCCESS"} />
      <Testimonials />
      <Map center={mapCenter} zoom={15} height="500px" showMarker />
    </div>
  );
}
