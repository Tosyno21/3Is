import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Badge } from "./ui/badge";

type ImageProps = {
  src: StaticImageData;
  alt: string;
  tittle: string;
};

export default function InnerHero({ src, alt, tittle }: ImageProps) {
  return (
    <div className="relative">
      <div className="overlay"></div>
      <Image
        src={src}
        alt={alt}
        placeholder={"blur"}
        priority
        quality={100}
        className="object-cover h-[60vh] w-full object-center"
      />
      <div className="section-center px-4 lg:px-8 xl:px-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Badge variant={"success"} size={"lg"}>
            {tittle}
          </Badge>
        </div>
      </div>
    </div>
  );
}
