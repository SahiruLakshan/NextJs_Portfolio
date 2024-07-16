// components/Details.js or components/Details.tsx
import React from "react";
import { HeroHighlight } from "@/components/animations/HeroHighlight";
import { Spotlight } from "@/components/animations/Spotlight";
import { TypewriterEffectSmooth } from "@/components/animations/TypewriterEffect";
import Dotted from "@/components/animations/Dotted";

const Details = () => {
  const words = [
    { text: "FULL" },
    { text: "STACK" },
    { text: "WEB" },
    { text: "DEVELOPER" },
    { text: "&" },
    {
      text: "UI/UX DESIGNER",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <Dotted>
      <div className="flex justify-center items-center w-full h-screen font-bold">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="text-white pl-9 text-center">
          {/*for small screens*/}
          <div className="w-3/5 lg:w-1/5 mb-4 lg:mb-0 lg:hidden mx-auto">
            <img
              src="/img/user.jpg"
              alt="Your Image"
              className="rounded-full"
            />
          </div>

          <TypewriterEffectSmooth
            words={words}
            className="sm:text-xl lg:text-4xl sm:text-center"
          />
          <div className="text-white mt-5 sm:text-2xl lg:text-2xl pl-6 pr-10 text-center">
            Hi, I am Sahiru Lakshan from University of Colombo
          </div>
          <a href="cv/Sahiru Lakshan.pdf" download>
            <button className="inline-flex h-12 mt-3 animate-shimmer items-center justify-center rounded-md border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Download CV
            </button>
          </a>
        </div>

        <div className="w-1/5 pr-16">
          <img src="/img/user.jpg" alt="Your Image" className="rounded-full" />
        </div>
      </div>
    </Dotted>
  );
};

export default Details;
