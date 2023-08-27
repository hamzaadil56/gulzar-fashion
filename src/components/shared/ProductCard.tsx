import React from "react";

import NextImage from "next/image";
import { textFont } from "../../../utils/fonts";
import type { Image } from "sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface Product {
  title: string;
  description: string;
  images: Image[];
  price: number;
}

const ProductCard = ({ title, description, images, price }: Product) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  return (
    <div className=" bg-white dark:bg-gray-800 ">
      {/* {images.map((image)=>
      <Image className="drop-shadow-md   " src={image} alt="product-image" />
      )} */}
      <div className="relative group transition-all">
        <NextImage
          className="drop-shadow-md "
          src={urlFor(images[0].asset?._ref!).url()}
          alt="product-image"
          width={1200}
          height={1600}
        />
        <div className="absolute w-full top-0 left-0 opacity-0 group-hover:opacity-100 transition-all">
          <NextImage
            className="drop-shadow-md absolute  w-full"
            src={urlFor(images[1].asset?._ref!).url()}
            alt="product-image"
            width={1200}
            height={1600}
          />
        </div>
      </div>

      <div className="  pt-2 ">
        <h5
          className={`${textFont.className} text-md text-center font-semibold tracking-tight text-gray-700 dark:text-white`}
        >
          {title}
        </h5>

        <div>
          <p className="text-xl text-center   text-gray-700 dark:text-white">
            {price} Rs
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
