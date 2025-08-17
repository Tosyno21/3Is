"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { projectCard } from "@/constants/index";
import { Button } from "./ui/button";

export default function OurProjects() {
  return (
    <div className="section-custom">
      <div className="section-center">
        <div className="grid-main">
          {projectCard.map((project, index) => (
            <div key={index} className="rounded-md bg-white shadow-md">
              <Image
                src={project.src}
                alt={project.alt}
                width={600}
                height={300}
                quality={100}
                // placeholder={"blur"}
                // blurDataURL={process.src}
                className="object-cover rounded-t-md"
              />
              <Badge variant={"success"} size={"default"} className="mx-4 mt-4">
                {project.badgeText}
              </Badge>
              <div className="space-y-6 px-4 py-3 lg:py-4">
                <h5 className="uppercase font-semibold text-sub-heading text-primary-700">
                  {project.tittle}
                </h5>
                <div className="pb-4">
                  <Button>{project.buttonText}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
