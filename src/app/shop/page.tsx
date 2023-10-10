import ProductCard from "@/components/shared/ProductCard";
import React from "react";
import { client } from "../../../sanity/lib/client";
import BreadCrums from "@/components/shared/BreadCrums";
import Link from "next/link";
import type { Product } from "../../../utils/types";

const Shop = async () => {
  const getProducts = async () => {
    const products = await client.fetch(`*[_type == "products"]{
      title,
      description,
      images,
      price,
      _id
    }`);
    return products;
  };

  const products = await getProducts();
  console.log(products);

  return (
    <div className="max-w-7xl px-5 md:px-10 py-2 mx-auto">
      <BreadCrums />
      <div className="flex w-full mx-auto justify-between">
        <div>
          <p>123</p>
        </div>
        <div className="filter-container ">
          <select name="Sort By" id="sort">
            <option value="low">Low Price</option>
            <option value="high">High Price</option>
            <option value="ascending">A-Z</option>
            <option value="descending">Z-A</option>
          </select>
          <select name="Filter By" id="filter">
            <option value="color">Color</option>
            <option value="category">Category</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 gap-y-20">
        {products.map((product: Product, index: number) => {
          const refactoredTitle = product.title.replaceAll(" ", "-");
          return (
            <Link key={index} href={`/shop/${refactoredTitle}`}>
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                images={product.images}
                price={product.price}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
