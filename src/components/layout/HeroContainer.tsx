import React from "react";
import Image from "next/image";
import Hero1 from "@/assets/images/hero1.png";

const HeroContainer = () => {
  return (
    <div
      className="flex grow 
      bg-gray-300 w-full h-full"
    >
      <div className="basis-1/2 ">
        <Image
          className="object-fit w-3/5 h-full drop-shadow-xl"
          src={Hero1}
          alt="hero1"
        />
      </div>
      <div className="basis-1/2  flex items-center justify-center">
        <h1>Elevate your closet</h1>
      </div>
    </div>
  );
};

export default HeroContainer;
