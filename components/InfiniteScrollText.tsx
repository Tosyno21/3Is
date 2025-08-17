"use client";

import { motion } from "framer-motion";
import { FaStarOfLife } from "react-icons/fa";

type HeadingProps = {
  tittle1: string;
  tittle2: string;
};

export default function InfiniteScrollText({ tittle1, tittle2 }: HeadingProps) {
  const RepeatingText = () => (
    <div className="flex items-center gap-12 text-[100px] sm:text-[120px] sm:text-[200px]font-bold whitespace-nowrap shrink-0">
      {tittle1}
      <span
        style={{
          WebkitTextStroke: "2px #f3752b",
          color: "transparent",
        }}
      >
        {tittle2}
      </span>
      <FaStarOfLife className="shape-animation mr-12" />
    </div>
  );

  return (
    <div className="overflow-hidden w-full bg-background-dark text-white">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }} // Only scroll halfway, because content is doubled
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        <RepeatingText />
        <RepeatingText />
      </motion.div>
    </div>
  );
}
