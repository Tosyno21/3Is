"use client";

import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function ServiceCardV2({
  title,
  description,
  imageUrl,
}: ServiceCardProps) {
  return (
    <section className="section bg-[#FEF1EA] pattern">
      <div className="section-center flex items-center flex-col md:flex-row gap-6 w-full h-auto md:h-72 lg:h-100">
        {/* Content Container */}
        <div className="flex-1 md:text-right">
          <h2 className="text-tittle tittle">{title}</h2>
          <p className="para mt-2 md:mt-4">{description}</p>
        </div>
        {/* Image Container */}
        <div className="relative w-full h-72 md:flex-1 md:h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-top rounded-lg"
            sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  25vw"
          />
        </div>
      </div>
    </section>
  );
}
