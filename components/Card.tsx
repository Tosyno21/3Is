"use client";

import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  marginTop?: string; // Tailwind class like 'mt-4'
  marginTopPx?: number; // Optional pixel value
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  marginTop,
  marginTopPx,
}) => {
  const style =
    marginTopPx !== undefined ? { marginTop: `${marginTopPx}px` } : undefined;

  return (
    <div
      className={`shadow w-full rounded-lg bg-white  ${
        marginTopPx ? "" : marginTop
      }`}
      style={style}
    >
      <div className="relative w-full h-72 md:h-84">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-t-md object-cover object-top w-full h-full"
          sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         25vw"
        />
      </div>
      <div className="px-4 py-8 space-y-4">
        <h2 className="tittle text-tittle">{title}</h2>
        <p className="para">{description}</p>
      </div>
    </div>
  );
};

export default Card;
