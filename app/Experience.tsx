import React from "react";

import { workExperience } from "@/data";
import { Button } from "@/components/ui/MovingBorders";
import Dotted from "@/components/animations/Dotted";

const Experience = () => {
  const isSingleCard = workExperience.length === 1;

  return (
    <section id="Experience">
      <div className="py-20 sm:px-10 w-full">
        <h1 className="heading text-white text-center text-3xl font-bold">
          EXPERIENCE
        </h1>
        <Dotted>
          <div
            className={`w-full mt-12 grid ${
              isSingleCard
                ? "justify-center"
                : "lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 justify-items-center"
            } md:px-44`}
          >
            {workExperience.map((card) => (
              <Button
                key={card.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: "calc(1.75rem * 0.96)",
                  maxWidth: "550px",
                  width: "100%",
                }}
                className="flex-1 text-white dark:text-white border-neutral-200 dark:border-slate-800"
              >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                  <img
                    src={card.thumbnail}
                    alt={card.title}
                    className="lg:w-32 md:w-20 w-16"
                  />
                  <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </Button>
            ))}
          </div>
        </Dotted>
      </div>
    </section>
  );
};

export default Experience;
