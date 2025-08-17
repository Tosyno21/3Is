"use client";

import React from "react";
import Lottie from "lottie-react";
import worldMap from "../public/55390-map-world.json";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SocialProof() {
  return (
    <div className="relative py-10 sm:py-0">
      <Lottie
        animationData={worldMap}
        autoplay
        loop
        className="h-[280px] lg:h-[320px] opacity-50 w-full"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-16 md:gap-24">
          <AnimatedCounter end={24} label="Projects" colorClass="text-brand" />
          <AnimatedCounter
            end={1920}
            label="Satisfied Customers"
            colorClass="text-brand"
          />
          <AnimatedCounter end={5} label="Countries" colorClass="text-brand" />
        </div>
      </div>
    </div>
  );
}
