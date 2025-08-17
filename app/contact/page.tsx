import InnerHero from "@/components/innerHero";
import Testimonials from "@/components/testimonials";
import React from "react";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import Link from "next/link";
import ContactForm from "@/components/contactForm";
import { Contact_hero } from "@/public/images";
import { Map } from "@/components/index";
import InfiniteScrollText from "@/components/InfiniteScrollText";

export default function ContactPage() {
  const mapCenter = { lat: 6.4663, lng: 3.6015 }; // Ajah
  return (
    <div>
      <InnerHero src={Contact_hero} alt={"Contact_us"} tittle={"Contact Us"} />
      <section className="section">
        <div className="section-center flex flex-col justify-between items-center gap-8 lg:gap-20 md:flex-row md:items-start lg:justify-center lg:items-center">
          {/* left side */}
          <div className="space-y-8 md:w-1/2">
            <div>
              <h4 className="text-h5 font-semibold mb-4 lg:text-h4">
                Let’s talk.
              </h4>
              <p className="text-main text-sub lg:max-w-[500px] font-light">
                If you have any questions about the subscription or are not sure
                which plan is right for you, contact our team and let’s schedule
                a call.
              </p>
            </div>
            <div className="space-y-8">
              <p className="flex items-center gap-4 font-normal text-neutral-800 lg:text-lg">
                <HiPhone size={24} />
                +23490666666666
              </p>
              <p className="flex items-center gap-4 font-normal text-neutral-800 lg:text-lg">
                <HiEnvelope size={24} />
                <Link
                  target={"_blank"}
                  href={"mailto:hello@prestigeconsulting.com"}
                  className="cursor-pointer text-primary-500 underline"
                >
                  hello@3is.com
                </Link>
              </p>
              <p className="flex items-center gap-4 font-normal text-neutral-800 lg:text-lg">
                <HiLocationMarker size={24} />
                Lekki, Lagos
              </p>
            </div>
          </div>
          {/* end of left side */}
          {/* right side */}
          <ContactForm />
          {/* end of right side */}
        </div>
      </section>
      <InfiniteScrollText tittle1={"REAL STORIES"} tittle2={"REAL SUCCESS"} />
      <Testimonials />
      <Map center={mapCenter} zoom={15} height="500px" showMarker />
    </div>
  );
}
