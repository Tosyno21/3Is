"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsLinkedin, BsTiktok, BsTwitterX } from "react-icons/bs";

const teamMembers = [
  {
    name: "Emmanuel Uka",
    role: "Director, Brand Strategy & Operations",
    src: "/uka.jpg",
    alt: "Director",
    socials: {
      linkedin: "",
      instagram: "",
      twitter: "",
      tiktok: "",
    },
  },
  {
    name: "Nonso Iwuh",
    role: "Director, Project Development",
    src: "/precious.jpeg",
    alt: "Director",
    socials: {
      linkedin: "",
      instagram: "",
      twitter: "",
      tiktok: "",
    },
  },
  {
    name: "Nneka Chukwudi",
    role: "Brand Manager",
    src: "/lynda.jpg",
    alt: "Brand Manager",
    socials: {
      linkedin: "",
      instagram: "",
      twitter: "",
      tiktok: "",
    },
  },
];

export default function OurTeam() {
  return (
    <div className="section-custom">
      <div className="section-center">
        <div className="grid-main">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-md shadow-lg">
              <div className="relative w-full h-72 lg:h-84">
                <Image
                  src={member.src}
                  alt={member.alt}
                  fill
                  className="rounded-t-md object-cover object-top w-full h-full"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         25vw"
                  priority={index === 0}
                />
              </div>
              <div className="text-center p-8 space-y-2">
                <h5 className="font-semibold text-xl  xl:text-2xl">
                  {member.name}
                </h5>
                <p className="text-tittle text-md sm:text-lg lg:2xl">
                  {member.role}
                </p>
                {/* Socials */}
                <div className="flex items-center justify-center gap-8 mt-8">
                  <Link
                    href={member.socials.linkedin}
                    target="_blank"
                    aria-label="LinkedIn"
                    className="hover:text-accent-500"
                  >
                    <BsLinkedin className="hover:text-brand" size={22} />
                  </Link>
                  <Link
                    href={member.socials.instagram}
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <BsInstagram className="hover:text-brand" size={22} />
                  </Link>
                  <Link
                    href={member.socials.twitter}
                    target="_blank"
                    aria-label="Twitter"
                  >
                    <BsTwitterX className="hover:text-brand" size={22} />
                  </Link>
                  <Link
                    href={member.socials.tiktok}
                    target="_blank"
                    aria-label="TikTok"
                  >
                    <BsTiktok className="hover:text-brand" size={22} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
