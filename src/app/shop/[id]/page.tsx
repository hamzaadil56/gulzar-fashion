import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { textFont } from "../../../../utils/fonts";
import { client } from "../../../../sanity/lib/client";
import { Product } from "../../../../utils/types";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import SidePicture from "@/components/shared/SidePicture";
import AddToCart from "@/components/shared/AddToCart";

const Product = async ({ params }: { params: { id: string } }) => {
  const products = await client.fetch(
    `*[title == "${params.id.replaceAll("-", " ")}"]`
  );
  const product = products[0] as Product;

  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  return (
    <div className="max-w-7xl px-5 md:px-10 py-2 mx-auto ">
      <div className="flex gap-4">
        <div className="pictures-container flex  flex-1">
          <div>
            {product.images.map((image, index) => (
              <SidePicture
                key={index}
                imageSrc={urlFor(image.asset?._ref!).url()}
              />
            ))}
          </div>
          <div className="border-box mx-2">
            <Image
              className=" w-full"
              width={400}
              height={100}
              src={urlFor(product.images[0].asset?._ref!).url()}
              alt="image"
            />
          </div>
        </div>
        <div className={`description flex-1`}>
          <div className="flex justify-between border-b-[1px] border-gray-400 py-4 mb-4">
            <div className="flex gap-4 items-start">
              <Heart />
              <h1 className="text-lg font-semibold ">{product.title}</h1>
            </div>
            <h1 className="text-red-500 font-semibold   text-lg">
              {product.price} Rs
              <br />
              <span className="line-through text-gray-500 font-normal">
                {product.price + product.price * 0.3} Rs
              </span>
            </h1>
          </div>
          <div className={textFont.className}>
            <p className="text-gray-500">{product.description}</p>
            <h1 className="my-4">Size</h1>
            <div className="flex gap-2 ">
              <button className="text-black flex place-content-center bg-gray-200 p-2 leading-none ">
                S
              </button>
              <button className="text-black flex place-content-center bg-gray-200 p-2 leading-none">
                M
              </button>
              <button className="text-black flex place-content-center bg-gray-200 p-2 leading-none">
                L
              </button>
            </div>
            <AddToCart product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
