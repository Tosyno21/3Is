"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HiChevronLeft } from "react-icons/hi";

import BK1 from "@/public/projectimages/BK1.jpg";
import BK2 from "@/public/projectimages/BK2.jpg";
import BK3 from "@/public/projectimages/BK3.jpg";
import BK4 from "@/public/projectimages/BK4.jpg";
import BK5 from "@/public/projectimages/BK5.jpg";
import BK6 from "@/public/projectimages/BK6.jpg";
import VideoSlider from "@/components/VideoSlider";

const images = [BK1, BK2, BK3, BK4, BK5, BK6];

export default function page() {
  return (
    <section>
      <div className="relative w-full h-60">
        <Image
          src="/projectimages/BK2.jpg"
          alt="hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>
      {/* Section 1 */}
      <div className="section-custom">
        <div className="pt-2 pb-6 lg:pb-12 space-y-2 lg:space-y-4">
          {/* Back Button */}
          <div className="pb-6">
            <Button variant="back" href="/projects">
              <HiChevronLeft className="mr-2" size={20} /> Back to Projects
            </Button>
          </div>
          {/* Client */}
          <span className="flex gap-2 md:text-xl">
            <p className=" text-gray-600">CLIENT:</p>
            <h3 className="font-semibold text-tittle">BURGER KING NIGERIA</h3>
          </span>
          {/* Campaign */}
          <span className="flex gap-2 md:text-xl">
            <p className="text-gray-600">CAMPAIGN:</p>
            <h3 className="font-semibold text-tittle">MAKE IT YOUR WAY</h3>
          </span>
          {/* Location */}
          <span className="flex gap-2 md:text-xl">
            <p className="text-gray-600">LOCATION:</p>
            <h3 className="font-semibold text-tittle">
              121 BENIN SAPELE ROAD, SAPELE, BENIN CITY
            </h3>
          </span>
          {/* Timeline */}
          <span className="flex gap-2 md:text-xl">
            <p className="text-gray-600">TIMELINE:</p>
            <h3 className="font-semibold text-tittle">Q2 2025</h3>
          </span>
        </div>
        {/* Description */}
        <div className="mt-2 lg:mt-4">
          <h3 className="text-tittle font-semibold text-lg lg:text-2xl">
            BRAND MANAGEMENT CAMPAIGN
          </h3>
          <p className="mt-2 mb-4 text-gray-600 lg:text-lg">
            Burger King&apos;s Benin City outlet was experiencing a sharp
            decline in sales, primarily due to a widely circulated negative
            customer reviewthat questioned the taste and satisfaction level of
            their burgers. This significantly affected customer trust and
            retention, ultimatelyimpacting foot traffic and sales conversion at
            the outlet.As the marketing agency in charge, we were tasked with
            developing and executing a results-driven campaign to:
          </p>
          <ul className="space-y-4 text-gray-600 list-disc ml-6 lg:text-lg">
            <li>Rebuild trust in the Burger King brand</li>
            <li>Drive foot traffic to the Benin outlet</li>
            <li>Increase in-store sales</li>
            <li>Improve customer engagement and retention</li>
          </ul>
        </div>
      </div>
      {/* End of Section 1 */}
      {/* Section 2 */}
      <div className="section-custom bg-[#FEF1EA] pattern">
        <h3 className="mt-6 text-gray-800 font-semibold text-lg lg:text-2xl">
          STRATEGIES WE DEPLOYED
        </h3>
        <p className="mb-4 mt-2 lg:my-4 lg:text-lg">
          To address the challenge and meet campaign objectives, we deployed an
          integrated marketing strategy that leaned on authenticity, community
          engagement, and experiential storytelling.
        </p>
        <ul className="text-gray-700 space-y-4 list-decimal ml-6 lg:text-lg">
          <li>
            <span className="font-semibold">
              Customer-Centric Campaign Theme:
            </span>
            <span className="ml-2">
              We developed the “Make It Your Way” campaign, reinforcing Burger
              King’s global brand promise of customisation, allowing customers
              to tailor their mealsexactly how they want them. This positioned
              Burger King as a responsive and customer-first brand.
            </span>
          </li>
          <li>
            <span className="font-semibold">Influencer Marketing:</span>
            <span className="ml-2">
              We partnered with well-known local influencers and food
              enthusiasts to create buzz around the campaign. These influencers
              shared engaging, personalisedcontent around their Burger King
              experience, emphasizing the ability to add extra condiments like
              ketchup or mayonnaise at no extra cost—a key messagethat directly
              addressed past complaints.
            </span>
          </li>
          <li>
            <span className="font-semibold">
              Road Storms & Direct Consumer Engagement:
            </span>
            <span className="ml-2">
              Our team executed strategic road storms across high-footfall areas
              in Benin City. Branded reps and mascots interacted directly with
              potential customers,distributed branded materials, and directed
              them to the store.
            </span>
          </li>
          <li>
            <span className="font-semibold">Radio Hype Campaigns:</span>
            <span className="ml-2">
              We partnered with top radio stations and On-Air Personalities
              (OAPs) in Benin City to create dynamic, engaging radio hype
              scripts that emphasized the“Have It Your Way” messaging. The radio
              hypes helped reach broader audiences and lent a trusted voice to
              the campaign narrative
            </span>
          </li>
          <li>
            <span className="font-semibold">
              In-Store Activation - The Make It Your Way Challenge:
            </span>
            <span className="ml-2">
              We designed an experiential activation where customers who
              purchased a burger from the Benin outlet were given the
              opportunity to enter the Make It YourWay Challenge by submitting
              their receipt with contact details. Selected participants got to
              build their own burgers in-store for a chance to win a ₦300,000
              cash prize and other exciting gifts. The challenge was hosted by a
              popular Benin-based comedian, which added entertainment value and
              drew significant attention.
            </span>
          </li>
        </ul>
      </div>
      {/* End of Section 2 */}
      {/* Section 3 */}
      <div className="section-custom">
        <h1 className="mb-4 uppercase text-tittle font-semibold text-lg lg:text-2xl">
          PROJECT SHOTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group w-full aspect-square overflow-hidden rounded"
            >
              <Image
                src={image}
                alt={`Project image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                placeholder="blur"
                sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 50vw,
                   33vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
      {/* End of Section 3 */}
      {/* Section 4 */}
      <div className="">
        <h1 className="px-4 md:px-6 lg:px-8 mb-4 uppercase text-tittle font-semibold text-lg lg:text-2xl">
          PROJECT VIDEOS
        </h1>
        <VideoSlider />
      </div>
      {/* End of Section 4 */}
      {/* Section 5 */}
      <div className="section-custom">
        <div className="mt-2 lg:mt-4">
          <h3 className="text-tittle font-semibold text-lg lg:text-2xl">
            THE OUTCOME
          </h3>
          <p className="my-2 lg:my-4 text-gray-600 lg:text-lg">
            The Make It Your Way campaign delivered exceptional results within
            the first week of launch:
          </p>
          <ul className="space-y-4 text-gray-600 list-disc ml-6 lg:text-lg">
            <li>15% Increase in Sales at the Benin City outlet</li>
            <li>
              Significant Uptick in In-Store Foot Traffic and Brand Engagement
            </li>
            <li>
              Restored Brand Trust through visible customer-centric actions
            </li>
            <li>
              Projected Growth of up to 100% in sales over the next quarter,
              based on post-campaign trajectory and feedback.
            </li>
          </ul>
          <p className="my-8 text-gray-600 lg:text-lg">
            Through a mix of localised influencer marketing, experiential
            activation, direct engagement, and media hype, we successfully
            repositioned Burger King in Benin City as a responsive and
            customisable brand, where customers are truly empowered to “Have It
            Their Way.” The campaign not only reversed a negative brand
            perception but also created a blueprint for future community-driven
            activations across Nigeria.
          </p>
        </div>
      </div>
      {/* End of Section 5 */}
    </section>
  );
}
