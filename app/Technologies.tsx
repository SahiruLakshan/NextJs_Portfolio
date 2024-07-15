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
      img: "/img/react.png",
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      img: "/img/nodejs.png",
      title: "Node JS",
      style: "shadow-green-600",
    },
    {
      id: 3,
      img: "/img/nodejs.png",
      title: "Express JS",
      style: "shadow-white",
    },
    {
      id: 4,
      img: "/img/nodejs.png",
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      id: 5,
      img: "/img/nodejs.png",
      title: "Flutter",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      img: "/img/nodejs.png",
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      img: "/img/nodejs.png",
      title: "Mongo DB",
      style: "shadow-green-400",
    },
    {
      id: 8,
      img: "/img/nodejs.png",
      title: "My SQL",
      style: "shadow-purple-400",
    },
    {
      id: 9,
      img: "/img/nodejs.png",
      title: "Firebase",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      img: "/img/nodejs.png",
      title: "Bootstrap",
      style: "shadow-blue-300",
    },
    // {
    //   id: 11,
    //   img: tailwind,
    //   title: "Tailwind CSS",
    //   style: "shadow-sky-500",
    // },
    // {
    //   id: 12,
    //   img: postman,
    //   title: "Postman",
    //   style: "shadow-red-400",
    // },
    // {
    //   id: 13,
    //   img: github,
    //   title: "GitHub",
    //   style: "shadow-gray-400",
    // },
    // {
    //   id: 14,
    //   img: figma,
    //   title: "Figma",
    //   style: "shadow-gray-400",
    // },
    // {
    //   id: 15,
    //   img: xd,
    //   title: "XD",
    //   style: "shadow-purple-600",
    // },
  ];

  return (
    <div>
      <div className="py-20 sm:px-10 w-full">
        <div className="text-3xl font-bold text-center mb-12">SKILLS</div>
        <div className="w-full  mt-12 grid lg:grid-cols-7 sm:grid-cols-2 gap-x-10 gap-y-8 text-center justify-items-center md:px-44">
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
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
