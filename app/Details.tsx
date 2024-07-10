import React from 'react'

const Details = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen mt-5 font-bold">
      <div className="text-white text-5xl pl-6 pr-10 text-center">
        FULL STACK WEB DEVELOPER <br /> & <br /> UI/UX DESIGNER
        <div className="text-white text-2xl mt-6 pl-6 pr-10 text-center">
           Hi, I am Sahiru Lakshan from University of Colombo
        </div>
      </div>
      
      <div className="w-1/4 pl-6">
        <img src="/img/user.jpg" alt="Your Image" className="rounded-full" />
      </div>
    </div>
  )
}

export default Details