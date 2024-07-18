import React, { ReactNode } from 'react';

type DottedProps = {
  children: ReactNode;
};

const Dotted: React.FC<DottedProps> = ({ children }) => {
  return (
    <div className="bg-dot-white w-full dark:bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  //    <div className="w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
  //    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
  //    {children}
  //  </div>
  );
};

export default Dotted;
