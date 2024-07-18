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
    head: "E-Commerce Web Application",
    description:
      "Here is a Laravel E-commerce web application for a Online Store. This system has all functionalities that has in a online store such as products purchasing, make online payments.",
    href: "https://github.com/SahiruLakshan/Laravel_E-Commerce-site",
  },
  {
    img: "/img/company.jpg",
    head: "Sri Lanka Defence Research Centre's Website",
    description:
      "This is a Laravel Website.This Web's purpose is providing information on the latest researches and innovations in various industry.",
    href: "https://crd.lk",
  },
  {
    img: "/img/pms.jpg",
    head: "This Project Management System for Sri Lanka Defence Research Centre.",
    description:
      "This is a Laravel System.This System for managing projects and show current progress of their projects.",
    href: "https://github.com/SahiruLakshan/cdrd_pms",
  },
  {
    img: "/img/book.jpg",
    head: "Online Book Store",
    description:
      "This is a MERN Stack project as my first MERN Stack project. This book store has basic functinalities like adding, editing and deleting books.",
    href: "https://github.com/SahiruLakshan/MERN_Book_Store",
  },
  {
    img: "/img/bmi.jpg",
    head: "BMI Calculator",
    description:
      "This is a Flutter based BMI Calculator.When enter Weight and Height, show BMI Value and status of your BMI value.",
    href: "https://github.com/SahiruLakshan/bmi_calculator",
  },
  {
    img: "/img/bank.jpg",
    head: "Banking CLI Application",
    description:
      "This is a Python Command Line Interface Application. Functionalities are Deposit money, Withdraw money and check balance.",
    href: "https://nextjs.org/learn",
  },
];

const App = () => {
  return (
    <section id="Projects">
    <div>
      <div className="text-3xl font-bold text-center mb-12 text-white">PROJECTS</div>
      <div className="flex flex-wrap justify-center text-justify">
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
    </section>
  );
};

export default App;
