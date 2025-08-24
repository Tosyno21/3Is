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
import { Button } from "@/components/ui/button";
import { HiArrowUpRight } from "react-icons/hi2";
import ServiceCard from "@/components/ServiceCard";
import ServiceCardV2 from "@/components/ServiceCardV2";

export default function page() {
  const mapCenter = { lat: 6.4663, lng: 3.6015 }; // Ajah
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <SocialProof />
      <InfiniteScrollText tittle1={"ABOUT"} tittle2={"US"} />
      <AboutSection />
      <InfiniteScrollTextWhite tittle1={"FEATURED"} tittle2={"PROJECTS"} />
      <Projects />
      <InfiniteScrollText tittle1={"BRANDS"} tittle2={"WHO BELIEVE IN US"} />
      <Marquee />
      <InfiniteScrollTextWhite tittle1={"OUR"} tittle2={"SERVICES"} />
      <ServiceCard
        title={"EXPERIMENTAL MARKETING & ACTIVATION"}
        description={
          "We create immersive brand experiences that leave lasting impressions. From live events to interactive campaigns, our experiential strategies connect brands with audiences in memorable, meaningful ways, driving brand loyalty and positive impact on the bottom line"
        }
        imageUrl={"/precious.jpeg"}
      />
      <ServiceCardV2
        title={"DIGITAL MARKETING"}
        description={
          "We deploy creative and innovative digital marketing strategies that drive growth, customer acquisition, and brand visibility. By leveraging data-driven insights and cutting-edge tools, we create campaigns that resonate with audiences across multiple digital channels. From SEO to social media marketing and paid advertising, our approach ensures that each campaign aligns with your brand’s goals and delivers measurable results in customer engagement and acquisition."
        }
        imageUrl={"/precious.jpeg"}
      />
      <div className="py-12 lg:py-20 text-center">
        <Button size={"lg"} href={"/services"}>
          View All Services <HiArrowUpRight className="ml-4" />
        </Button>
      </div>
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
