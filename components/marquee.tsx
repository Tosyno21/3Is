"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Marquee = () => {
  const images = [
    { id: "1", link: "/01.svg" },
    { id: "2", link: "/02.svg" },
    { id: "3", link: "/03.svg" },
    { id: "4", link: "/04.svg" },
    // { id: "5", link: "/05.svg" },
    // { id: "6", link: "/06.svg" },
    // { id: "7", link: "/07.svg" },
    // { id: "8", link: "/08.svg" },
    // { id: "9", link: "/09.svg" },
    // { id: "10", link: "/10.svg" },
    // { id: "11", link: "/11.svg" },
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
            className="object-contain w-full h-full"
          />
        </div>
      ))}
    </>
  );

  return (
    <div className="w-full overflow-hidden bg-background-dark py-0">
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
