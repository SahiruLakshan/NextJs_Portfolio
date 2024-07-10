import React from "react";
import { GlareCard } from "./animations/GlareCard";
import { PinContainer } from "./animations/PinContainer";

const Card = ({
  img,
  head,
  description,
  href,
}: {
  img: string;
  head: string;
  description: string;
  href: string;
}) => {
  return (
    <PinContainer title={head} href={href}>
      <GlareCard className="flex flex-col items-start py-8 px-6 justify-center mx-auto">
        <img src={img} className="rounded-2xl" alt="" />
        <p className="font-bold text-white text-lg mt-2">{head}</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          {description}
        </p>
      </GlareCard>
    </PinContainer>
  );
};

const cardData = [
  {
    img: "/img/ecommerce.jpg",
    head: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    href: "https://nextjs.org/learn",
  },
  {
    img: "/img/ecommerce.jpg",
    head: "Innovative tech startups to watch",
    description:
      "These startups are disrupting the tech industry with innovative solutions and cutting-edge technology.",
    href: "https://google.com",
  },
  {
    img: "/img/ecommerce.jpg",
    head: "AI advancements in 2022",
    description:
      "Exploring the latest advancements in artificial intelligence and their potential impacts on various industries.",
    href: "https://nextjs.org/learn",
  },
  {
    img: "/img/ecommerce.jpg",
    head: "Blockchain technology trends",
    description:
      "An overview of the latest trends in blockchain technology and their applications in different sectors.",
    href: "https://nextjs.org/learn",
  },
  {
    img: "/img/ecommerce.jpg",
    head: "Cybersecurity challenges in 2022",
    description:
      "The most pressing cybersecurity challenges faced by organizations and strategies to mitigate them.",
    href: "https://nextjs.org/learn",
  },
  {
    img: "/img/ecommerce.jpg",
    head: "The future of quantum computing",
    description:
      "Insights into the future of quantum computing and its potential to revolutionize various fields.",
    href: "https://nextjs.org/learn",
  },
];

const App = () => {
  return (
    <div>
      <div className="text-4xl font-bold text-center mb-12">PROJECTS</div>
      <div className="flex flex-wrap justify-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 p-2 flex flex-wrap mt-5 mb-24 items-center ml-1 justify-center"
          >
            <Card
              img={card.img}
              head={card.head}
              description={card.description}
              href={card.href}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
