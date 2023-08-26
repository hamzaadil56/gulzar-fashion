import React from "react";
import ProductCard from "../shared/ProductCard";
import Link from "next/link";

const Featured = () => {
  return (
    <div className="max-w-7xl px-5 md:px-10 m-auto">
      <h1 className="text-center p-10 text-xl">Featured</h1>
      <div className="grid grid-cols-4 gap-10">
        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
      <div className="flex justify-center w-full">
        <Link href={"#"}>See All Products </Link>
      </div>
    </div>
  );
};

export default Featured;
