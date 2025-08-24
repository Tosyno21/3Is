"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Marquee = () => {
  const images = [
    { id: "1", link: "/bole-logo.png" },
    { id: "2", link: "/burger.png" },
    { id: "3", link: "/heoht.jpg" },
    { id: "4", link: "/singleflow.jpg" },
    { id: "5", link: "/lagos.jpg" },
  ];

  const ImageRow = () => (
    <>
      {images.map((img) => (
        <div
          key={img.id}
          className="mx-12 flex items-center justify-center
                     w-[120px] h-[120px]
                     sm:w-[160px] sm:h-[160px]
                     md:w-[200px] md:h-[200px]"
        >
          <Image
            src={img.link}
            alt="marquee"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full overflow-hidden bg-background-dark py-20 lg:py-32">
      <motion.div
        className="flex w-max"
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        <ImageRow />
        <ImageRow />
      </motion.div>
    </div>
  );
};

export default Marquee;
