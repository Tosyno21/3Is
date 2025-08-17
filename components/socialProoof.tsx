import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import worldMap from "../public/55390-map-world.json";

type CounterItemProps = {
  end: number;
  label: string;
  textColor: string;
};

const CounterItem = ({ end, label, textColor }: CounterItemProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="flex flex-col items-center">
      <h2 className={`text-6xl font-semibold ${textColor} lg:text-h2`}>
        {inView ? (
          <CountUp start={0} end={end} duration={2}>
            {({ countUpRef }) => <span ref={countUpRef} />}
          </CountUp>
        ) : (
          <span>0</span>
        )}
        <span>+</span>
      </h2>
      <p className="text-md font-light md:text-lg">{label}</p>
    </div>
  );
};

export default function SocialProof() {
  return (
    <div className="relative py-10 sm:py-0">
      <Lottie
        animationData={worldMap}
        autoplay
        loop
        className="h-[280px] lg:h-[320px] opacity-50 w-full"
      />
      <div className="section-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <div className="flex flex-col justify-center gap-8 items-center sm:flex-row sm:gap-16 md:gap-24">
          <CounterItem end={2400} label="Jobs" textColor="text-brand" />
          <CounterItem
            end={1920}
            label="Satisfied Customers"
            textColor="text-primary-500"
          />
          <CounterItem
            end={195}
            label="Countries"
            textColor="text-primary-500"
          />
        </div>
      </div>
    </div>
  );
}
