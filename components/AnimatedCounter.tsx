"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type AnimatedCounterProps = {
  end: number;
  label: string;
  colorClass?: string;
  duration?: number;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  label,
  colorClass = "text-primary",
  duration = 2,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <h2 className={`text-4xl lg:text-6xl font-bold ${colorClass}`}>
        {inView ? <CountUp end={end} duration={duration} /> : <span>0</span>}
        <span>+</span>
      </h2>
      <p className="mt-2 text-base md:text-lg text-gray-700">{label}</p>
    </div>
  );
};

export default AnimatedCounter;
