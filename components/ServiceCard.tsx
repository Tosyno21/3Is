"use client";

import React from "react";
import Image from "next/image";

type ServiceCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

export default function ServiceCard({
  title,
  description,
  imageUrl,
}: ServiceCardProps) {
  return (
    <section className="section-custom">
      <div className="section-center flex items-center flex-col md:flex-row gap-6 w-full h-auto md:h-72 lg:h-120">
        {/* Image Container */}
        <div className="relative w-full h-72 md:flex-1 md:h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  25vw"
          />
        </div>

        {/* Content Container */}
        <div className="flex-1">
          <h2 className="text-tittle tittle">{title}</h2>
          <p className="para mt-2 md:mt-4">{description}</p>
        </div>
      </div>
    </section>
  );
}
