"use client";
import React from "react";
import { StickyScroll } from "../components/ui/StickeyScroll";
import Image from "next/image";

const content = [
  {
    title: "Problem Solving",
    description:
      "With a solid foundation in programming, I am adept at using various languages and frameworks to create scalable and efficient software solutions. I excel in breaking down complex problems and implementing effective solutions using algorithms and data structures. My strong analytical skills ensure efficient debugging and software reliability. By staying updated with industry trends, I continuously enhance my skills to contribute to innovative projects.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/problem.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Creativity",
    description:
      "I possess a keen eye for designing user interfaces that are both seamless and visually appealing. This involves a strong understanding of design principles, attention to detail, and a commitment to ensuring that the user experience is intuitive and engaging. By carefully selecting colors, typography, and layout elements.My design approach focuses on harmonizing visual elements to enhance usability while delivering a polished and cohesive look across all platforms.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/creativity.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Team Collaboration",
    description:
      "I thrive in team environments, effectively collaborating with colleagues to achieve shared goals. My approach involves clear communication, active listening, and constructive feedback, which helps in aligning team efforts and driving projects forward. By leveraging each team member's strengths and fostering a supportive atmosphere, I contribute to a productive and cohesive work environment, ensuring that collectively meet deadlines and exceed expectations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/img/team.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="lg:px-52 pb-32 items-center justify-center sm:">
      <StickyScroll content={content} />
    </div>
  );
}
