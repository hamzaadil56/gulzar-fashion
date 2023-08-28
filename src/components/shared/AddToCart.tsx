"use client";
import { useCartStore } from "@/state/cartState";
import React from "react";
import { useState } from "react";
import { Product } from "../../../utils/types";
import ChangeQuantity from "./changeQuantity";
import Button from "./Button";

const AddToCart = ({ product }: { product: Product }) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const { cartItems, totalQuantity, addToCart } = useCartStore();

  const increment = () => {
    return setProductQuantity((quantity) => quantity + 1);
  };

  const decrement = () => {
    return setProductQuantity((quantity) => quantity - 1);
  };

  const handleCartItems = () => {
    addToCart({ ...product, quantity: productQuantity });
  };

  return (
    <div className="my-4">
      <ChangeQuantity
        increment={increment}
        decrement={decrement}
        productQuantity={productQuantity}
      />

      <div>
        <Button onClick={handleCartItems}>Add To Cart</Button>
      </div>
    </div>
  );
};

export default AddToCart;
