import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "../components/ui/MagicButton";
import { socialMedia } from "@/data";
import Dotted from "@/components/animations/Dotted";

const Contact = () => {
  return (
    <section id="Contact">
    <Dotted>
      <footer className="w-full pt-20 pb-10" id="contact">
        {/* background grid */}
        <div className="flex flex-col items-center">
          <h1 className="heading lg:max-w-[45vw] text-white text-3xl font-bold">
            REACH OUT TO ME
          </h1>
          <a href="mailto:sahiru906@gmail.com">
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light lg:pl-10">
            Copyright © 2024 Sahiru Lakshan
          </p>

          <div className="flex items-center md:gap-3 gap-6 lg:pr-10">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </Dotted>
    </section>
  );
};

export default Contact;
