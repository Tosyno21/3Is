import React from "react";
import { Button } from "./ui/button";
import ResponsiveVideo from "./ResponsiveVideo";

export default function AboutSection() {
  return (
    <div className="section-custom bg-background-dark">
      <div className="section-center flex flex-col items-center justify-center gap-16 lg:flex-row">
        {/* left side */}
        <div className="space-y-4 lg:space-y-8 w-fit">
          <h3 className="font-semibold text-white text-center uppercase text-2xl lg:text-right md:text-3xl">
            We cover diverse career paths, industries and management levels
          </h3>
          <p className="md:text-lg xl:text-xl leading-normal text-white text-center lg:text-right">
            Our consulting services and LinkedIn Masterclasses are tailored to
            support professionals at all hierarchical levels - fresh graduates,
            early to mid-career professionals, C-Suite executives and business
            entrepreneurs across various industries.
          </p>
          <div className="text-center pt-4 lg:text-right lg:pt-0">
            <Button size={"xl"}>See Our Story</Button>
          </div>
        </div>
        {/* end of left side */}
        {/* right side */}
        <ResponsiveVideo videoUrl="https://www.youtube.com/embed/19g66ezsKAg" />

        {/* <div className="relative w-full">
          <iframe
            src="https://www.youtube.com/embed/19g66ezsKAg"
            allowFullScreen
            title={"hero_video"}
            allow="autoplay;"
            className="absolute w-full rounded-lg shadow-lg"
          />
        </div> */}
        {/* end of right side */}
      </div>
    </div>
  );
}
