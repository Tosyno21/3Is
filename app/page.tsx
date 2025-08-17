"use client";
import HeroSection from "@/components/hero-section";
import Marquee from "@/components/marquee";
import React from "react";
import FAQ from "@/components/faq";
import Testimonials from "@/components/testimonials";
import InfiniteScrollText from "@/components/InfiniteScrollText";
import SocialProof from "@/components/socialProoof";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/Projects";
import InfiniteScrollTextWhite from "@/components/InfiniteScrollTextWhite";
import { Map } from "@/components/index";

export default function page() {
  const mapCenter = { lat: 6.4663, lng: 3.6015 }; // Ajah
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <SocialProof />
      <InfiniteScrollText tittle1={"ABOUT"} tittle2={"US"} />
      <AboutSection />
      <InfiniteScrollText tittle1={"BRANDS"} tittle2={"WHO BELIEVE IN US"} />
      <Marquee />
      <InfiniteScrollTextWhite tittle1={"FEATURED"} tittle2={"PROJECTS"} />
      <Projects />
      {/* <Map /> */}
      <Map center={mapCenter} zoom={15} height="500px" showMarker />
      <InfiniteScrollText tittle1={"REAL STORIES"} tittle2={"REAL SUCCESS"} />
      <Testimonials />
      <InfiniteScrollTextWhite
        tittle1={"FREQUENTLY ASKED"}
        tittle2={"QUESTIONS"}
      />
      <FAQ />
    </main>
  );
}
