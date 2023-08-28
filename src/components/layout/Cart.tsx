"use client";
import React from "react";

import { textFont } from "../../../utils/fonts";
import { X } from "lucide-react";
import CartItem from "../shared/CartIem";
import { useCartStore } from "@/state/cartState";
import StripeCheckOutButton from "./Checkout";

const Cart = ({ cartClose }: { cartClose(): void }) => {
  const { cartItems, totalPrice, totalQuantity } = useCartStore();

  return (
    <>
      <div
        className={`absolute my-2 p-4 z-20 top-full transition-opacity duration-150  border-black border-2 bg-white right-0  w-[30vw] leading-none box-border`}
      >
        <div className="w-full flex justify-between items-center break-all">
          <h1 className="text-md">Your Bag (14)</h1>
          <button onClick={() => cartClose()}>
            <X color="black" size={20} />
          </button>
        </div>
        {cartItems.map((cartItem, index) => (
          <CartItem key={index} cartItem={cartItem} />
        ))}

        <div className={textFont.className}>
          <div className="flex justify-between my-4  font-bold">
            <h1>Total Items:</h1>
            <h1>{totalQuantity}</h1>
          </div>
          <div className="flex justify-between my-4  font-bold">
            <h1>Total:</h1>
            <h1>{totalPrice}</h1>
          </div>
          <div className="flex justify-between my-4 font-bold text-gray-400">
            <h1>Shipping</h1>
            <h1>Free</h1>
          </div>
        </div>

        <button className="w-full py-4">View Bag</button>
        <StripeCheckOutButton />
      </div>

      <div
        className={`border-black my-2 p-2 border-r-[2px] z-10 top-[90%] left-[10%] bg-black absolute border-b-[2px] rotate-[-135deg] `}
      ></div>
    </>
  );
};

export default Cart;
