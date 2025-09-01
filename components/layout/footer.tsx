import React from "react";
import Link from "next/link";
import { footerLinks } from "../../constants";
import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsYoutube,
  BsTiktok,
} from "react-icons/bs";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import Image from "next/image";
import { Whitelogo } from "@/public/images";

export default function Footer() {
  return (
    <div className="bg-main pt-16 px-4 md:px-6 lg:px-8 lg:pt-20">
      <div className="container mx-auto flex flex-col gap-16 lg:gap-20 xl:gap-24">
        {/* top */}
        <div className="flex flex-col gap-16 justify-between items-start lg:flex-row">
          <div className="space-y-10 uppercase font-medium">
            <Image
              src={Whitelogo}
              alt={"white_logo"}
              className="w-12 lg:w-16"
            />
            <div className="flex flex-col gap-6">
              <p className="text-white flex items-center gap-4">
                <HiLocationMarker size={24} />
                99 Opebi Road, Valley View Plaza, Ikeja, Lagos
              </p>
              <p className="text-white flex items-center gap-4">
                <HiPhone size={24} />
                +234-7065213348, +234-7059114973
              </p>
              <Link
                href={"mailto:uka.iinbound@gmail.com"}
                className="text-white flex items-center gap-4"
              >
                <HiEnvelope size={24} />
                uka.iinbound@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex uppercase justify-between items-start gap-12 xs:gap-20 sm:gap-36 lg:gap-12">
            {footerLinks.map((link, index) => (
              <div key={index}>
                <h4 className="mb-6 text-white font-semibold">{link.tittle}</h4>
                <ul>
                  {link.links.map((item, index) => (
                    <li
                      key={index}
                      className={`${
                        index !== link.links.length - 1 ? "mb-4" : "mb-0"
                      } cursor-pointer`}
                    >
                      <Link
                        href={item.url}
                        className="flex flex-col text-neutral-100 font-light hover:text-brand hover:underline transition duration-500 ease-in"
                      >
                        {item.tittle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* end of top */}
        {/* bottom */}
        <div className="flex flex-col justify-between items-center gap-4 border-t-[.2px] border-white/20 text-white py-10 sm:py-8 lg:flex-row mb-2">
          <p className="text-white text-center font-medium uppercase">
            &copy; <span>{new Date().getFullYear()}</span> - 3Is Inc. All Rights
            Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href={""} target="_blank" className="hover:text-accent-500">
              <BsFacebook className="hover:text-brand" size={24} />
            </Link>
            <Link href={""} target="_blank" className="hover:text-accent-500">
              <BsLinkedin className="hover:text-brand" size={24} />
            </Link>
            <Link href={""} target="_blank">
              <BsInstagram className="hover:text-brand" size={24} />
            </Link>
            <Link href={""} target="_blank">
              <BsYoutube className="hover:text-brand" size={24} />
            </Link>
            <Link href={""} target="_blank">
              <BsTiktok className="hover:text-brand" size={24} />
            </Link>
          </div>
        </div>
        {/* end of bottom */}
      </div>
    </div>
  );
}
