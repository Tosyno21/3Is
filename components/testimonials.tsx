import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonyCard } from "@/constants";

export default function Testimonials() {
  return (
    <div className="section-custom bg-background-dark">
      <div className="section-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center ">
          {testimonyCard.map((testimony, index) => (
            <div
              key={index}
              className="backdrop-blur-3xl bg-white/10 border border-white/20 shadow-md px-4 py-8 rounded-xl flex flex-col justify-between"
            >
              <p className="text-white font-light md:text-lg mb-8">
                {testimony.tittle}
              </p>
              <div className="flex gap-4 items-center">
                <Avatar>
                  <AvatarImage
                    src={testimony.src}
                    className="object-cover bg-bottom"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-[2px]">
                  <p className="text-gray-300 font-medium">{testimony.name}</p>
                  <p className="font-semibold text-brand">CEO, Flutterwave</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
