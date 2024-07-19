"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Projects",
    },
    {
      id: 2,
      link: "Experience",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Contact",
    },
    
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link:string) => {
    e.preventDefault();
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setNav(false);
    }
  };

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center">
      <div className="flex justify-between items-center border h-14 px-4 text-white bg-black w-1/4 md:w-auto lg:w-auto max-w-screen-lg p-2 rounded-full shadow-lg mt-6">
        <div className="flex justify-center w-full">
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
              >
                <Link href={`#${link}`} onClick={(e) => handleLinkClick(e, link)}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {/* mobile menu */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link href={`#${link}`} onClick={(e) => handleLinkClick(e, link)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
