import React from "react";
import Promo1 from "@/assets/images/promo1.jpg";
import Image from "next/image";
import Promo2 from "@/assets/images/promo2.jpg";

const Promotions = () => {
  return (
    <div className="max-w-7xl m-auto p-5 md:p-10">
      <h2 className="text-lg text-center p-10 text-xl">PARKS AND RECREATION</h2>

      <div className="flex justify-center flex-wrap ">
        <div className="basis-1/3 flex items-center flex-col justify-center">
          <Image className="w-4/5 drop-shadow-md" src={Promo1} alt="promo1" />
          <h2>ALL OVER VELVET</h2>
          <a href="#">Shop back in stock</a>
        </div>
        <div className="basis-1/3 justify-center flex items-center flex-col">
          <Image className="w-4/5 drop-shadow-md" src={Promo2} alt="promo1" />
          <h2>ALL OVER VELVET</h2>
          <a href="#">Shop back in stock</a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Promotions;
