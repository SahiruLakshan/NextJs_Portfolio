// import React from 'react';
// import javascript from "/img/javascript.png";
// import nextjs from "/img/nextjs.png";
// import graphql from "/img/graphql.png";
// import github from "/img/github.png";
// import tailwind from "/img/tailwind.png";
// import express from "/img/express.png";
// import laravel from "/img/laravel.png";
// import flutter from "/img/flutter.png";
// import mongo from "/img/mongo.png";
// import sql from "/img/sql.png";
// import firebase from "/img/firebase.png";
// import bootstrap from "/img/bootstrap.png";
// import postman from "/img/postman.png";
// import figma from "/img/figma.png";
// import xd from "/img/xd.png";
// import nodejs from ;

interface Tech {
  id: number;
  img: string;
  title: string;
  style: string;
}

const Technologies: React.FC = () => {
  const techs: Tech[] = [
    {
      id: 1,
      img: "/img/lara.png",
      title: "Laravel",
      style: "shadow-red-600",
    },
    {
      id: 2,
      img: "/img/nextjs.png",
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 3,
      img: "/img/react.png",
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      img: "/img/nodejs.png",
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 5,
      img: "/img/express.png",
      title: "Express Js",
      style: "shadow-cyan-500",
    },
    {
      id: 6,
      img: "/img/spring.png",
      title: "Spring Boot",
      style: "shadow-green-400",
    },
    {
      id: 7,
      img: "/img/tailwind.png",
      title: "TailwindCSS",
      style: "shadow-pink-500",
    },
    {
      id: 8,
      img: "/img/bootstrap.png",
      title: "Bootstrap",
      style: "shadow-blue-400",
    },
    {
      id: 9,
      img: "/img/css.png",
      title: "CSS",
      style: "shadow-blue-200",
    },
    {
      id: 10,
      img: "/img/html.png",
      title: "HTML",
      style: "shadow-orange-400",
    },
    {
      id: 11,
      img: "/img/php.png",
      title: "PHP",
      style: "shadow-blue-300",
    },
    {
      id: 12,
      img: "/img/js.png",
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 13,
      img: "/img/mysql.png",
      title: "MySQL",
      style: "shadow-gray-600",
    },
    {
      id: 14,
      img: "/img/postgre.png",
      title: "PotgreSQL",
      style: "shadow-gray-600",
    },
    {
      id: 15,
      img: "/img/mongo.png",
      title: "MongoDB",
      style: "shadow-green-300",
    },
    {
      id: 16,
      img: "/img/postman.png",
      title: "Postman",
      style: "shadow-red-400",
    },
    {
      id: 17,
      img: "/img/github.png",
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 18,
      img: "/img/figma.png",
      title: "Figma",
      style: "shadow-gray-400",
    },
    {
      id: 19,
      img: "/img/xd.png",
      title: "XD",
      style: "shadow-purple-800",
    },
  ];

  return (
    <section id="Skills">
      <div>
        <div className="py-20 sm:px-10 w-full">
          <div className="text-3xl font-bold text-center mb-12 text-white">
            SKILLS
          </div>
          <div className="w-full mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-x-2 sm:gap-x-3 lg:gap-x-10 gap-y-4 sm:gap-y-6 lg:gap-y-8 text-center justify-items-center md:px-44">
            {techs.map(({ id, img, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 px-4 rounded-lg ${style}`}
                style={{
                  background:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
              >
                <img src={img} alt={title} className="w-20 mx-auto" />
                <p className="mt-4 text-white">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
