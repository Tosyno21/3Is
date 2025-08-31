"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projectCardInner } from "@/constants/index";
import { Button } from "./ui/button";

export default function ProjectsInner() {
  return (
    <section className="section">
      <div className="section-center">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectCardInner.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-md overflow-hidden flex flex-col h-full"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-80">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={90}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={project.src}
                />
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <Badge
                  variant="success"
                  size="default"
                  className="mb-2 md:mb-4 w-fit"
                >
                  {project.badgeText}
                </Badge>

                <h5 className="text-lg font-semibold uppercase text-primary-700 mb-2">
                  {project.tittle}
                </h5>
                <p className="text-gray-600">{project.sub}</p>

                <div className="mt-auto py-2 text-right">
                  <Button href={project.link}>View Project</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
