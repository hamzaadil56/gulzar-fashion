import React from "react";
import { textFont } from "../../../utils/fonts";
const NewsLetter = () => {
  return (
    <div className="mx-auto max-w-sm w-full text-center py-20">
      <h1 className=" text-lg font-semibold">Subscribe Our Newsletter</h1>

      <p className="my-4 text-md">
        Get the latest information and promo offers directly
      </p>
      <div className="flex my-8">
        <input
          type="email"
          className={`${textFont.className} flex-1 border border-r-none border-gray-400 p-2`}
          placeholder="Email Address"
        />
        <button type="submit" className="bg-black text-white px-4 ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
