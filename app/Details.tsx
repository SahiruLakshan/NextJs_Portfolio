import { HeroHighlight } from '@/components/animations/HeroHighlight';
import { Spotlight } from '@/components/animations/Spotlight';
import { TypewriterEffectSmooth } from '@/components/animations/TypewriterEffect'
import React from 'react'

const Details = () => {
  const words = [
    {
      text: "FULL",
    },
    {
      text: "STACK",
    },
    {
      text: "WEB",
    },
    {
      text: "DEVELOPER",
    },
    {
      text: "&",
    },
    {
      text: "UI/UX DESIGNER",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    
    <div className="flex justify-center items-center w-full h-screen font-bold">
      
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="text-white pl-9 text-center">
        {/* FULL STACK WEB DEVELOPER <br /> & <br /> UI/UX DESIGNER */}
        <div className="text-white text-2xl mt-6 pl-6 pr-10 text-center">
          <TypewriterEffectSmooth words={words} />
           Hi, I am Sahiru Lakshan from University of Colombo
        </div>
      </div>
      
      
      <div className="w-1/4 pr-16">
        <img src="/img/user.jpg" alt="Your Image" className="rounded-full" />
      </div>
      
    </div>
   
   
  )
}

export default Details