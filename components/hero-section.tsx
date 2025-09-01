"use client";
import Wrapper from "./layout/wrapper";
// import { Button } from "./ui/button";
import Typewriter from "typewriter-effect";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video */}
      <div className="inset-0 absolute">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/BKVid1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0"></div>
      </div>
      {/* End of Image */}
      {/* Image Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center bg-gradient-to-tr from-black/90 via-black/40 to-black/80">
        <Wrapper className="flex flex-col gap-6 text-center items-center w-full">
          {/* Hero Text */}
          <div className="bg-brand h-2 w-8"></div>
          <h4 className="px-4 font-bold text-white text-[44px] sm:text-[72px] md:text-[80px] lg:text-[100px] xl:text-[120px] uppercase leading-tight sm:leading-tight max-w-6xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Experimental Marketing Made")
                  .pauseFor(20000) // optional pause after
                  .deleteAll(10)
                  .start();
              }}
              options={{
                strings: ["Experimental Marketing Made"],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 100,
                cursor: "|",
              }}
            />
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            {/* <Button
              variant={"outline"}
              size={"lg"}
              className="px-12 py-6 tracking-wide text-lg text-white"
            >
              Book A Session
            </Button>
            <Button
              variant={"ghost"}
              size={"lg"}
              className="text-white hover:text-white hover:bg-white/20 tracking-wide px-12 py-6 text-lg"
            >
              See Our Works
            </Button> */}
          </div>
          {/* End of Hero Text */}
        </Wrapper>
      </div>
    </section>
  );
}
