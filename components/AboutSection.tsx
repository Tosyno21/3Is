import React from "react";
import { Button } from "./ui/button";
import ResponsiveVideo from "./ResponsiveVideo";

export default function AboutSection() {
  return (
    <div className="section-custom bg-background-dark">
      <div className="section-center flex flex-col items-center justify-center gap-16 lg:flex-row">
        {/* left side */}
        <div className="space-y-4 lg:space-y-6 w-fit">
          <h3 className="font-semibold text-white text-center uppercase text-xl sm:text-2xl lg:text-right">
            Who We Are
          </h3>
          <p className="font-light text-sm sm:text-base md:text-lg leading-normal text-white text-center lg:text-right">
            III, pronounced as 3Is, is an innovative, creative events and
            marketing agency. Our name, Image, Impression, and Inbound, reflect
            our mission to craft bold, compelling stories that connect brands
            with their audience and drive real results. We specialise in
            experiential marketing, event management, coordination, and
            production, delivering immersive brand experiences through seamless
            execution and standout storytelling. From experiential campaigns to
            digital marketing and media strategy, we create SPIEL&apos;s
            unconventional marketing ideas that inspire action, spark
            engagement, and move the bottom line. At 3Is, we don’t just market;
            we make your brand unforgettable. Let’s craft something
            unforgettable together.
          </p>
          <div className="text-center pt-4 lg:text-right lg:pt-0">
            <Button size={"xl"}>See More</Button>
          </div>
        </div>
        {/* end of left side */}
        {/* right side */}
        <ResponsiveVideo videoUrl="https://www.youtube.com/embed/19g66ezsKAg" />
        {/* end of right side */}
      </div>
    </div>
  );
}
