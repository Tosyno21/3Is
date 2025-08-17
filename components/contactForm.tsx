"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xeqwepbv");
  if (state.succeeded) {
    return (
      <p>Thanks for contacting us. We would respond to your request shortly</p>
    );
  }
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 w-full md:w-1/2 md:gap-6 lg:w-1/3"
      >
        <h4 className="text-xl lg:text-2xl font-semibold max-md:mt-6">
          Contact Form
        </h4>
        {/* name input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name here"
            className="rounded focus:outline-brand/50 p-2 placeholder:text-gray-300 placeholder:font-light border-[1.8px] border-gray-400"
          />
          <ValidationError prefix="name" field="text" errors={state.errors} />
        </div>
        {/* email input */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-heading font-normal">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address here"
            className="rounded focus:outline-brand/50 p-2 placeholder:text-gray-300 placeholder:font-light border-[1.8px] border-gray-400"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        {/* message input */}
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className="text-heading font-normal">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message here"
            className="rounded focus:outline-brand/50 p-2 placeholder:text-gray-300 placeholder:font-light border-[1.8px] border-gray-400 h-36"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="text-white font-semibold uppercase bg-brand py-3 rounded-md shadow-md hover:bg-brand-hover"
        >
          Submit
        </button>
      </form>
    </>
  );
}
