import React from "react";
import Image from "next/image";
import { textFont } from "../../../utils/fonts";

import type { Dispatch, SetStateAction } from "react";
import ProducPic from "@/assets/images/promo1.jpg";
import { useCartStore } from "@/state/cartState";
import { CartItem } from "../../../utils/types";
import ChangeQuantity from "./changeQuantity";

const CartItem = ({ cartItem, key }: { cartItem: CartItem; key: number }) => {
  const { addProductQuantity, subProductQuantity } = useCartStore();
  return (
    <div key={key} className="flex border-b-[1px] w-full border-grey-700 py-4 ">
      <Image alt="product" width={66} height={84} src={ProducPic} />
      <div
        className={`${textFont.className} flex flex-grow flex-col justify-between ml-4`}
      >
        <div className="flex   justify-between items-center">
          <h1 className="leading-none  text-md font-semibold">
            {cartItem.title}
          </h1>
          <h1 className="leading-none   text-md font-semibold">
            {cartItem.price}
          </h1>
        </div>

        <div className="text-sm text-gray-600">
          <p className="">Color: Stripe</p>
          <p className="">Size: Medium</p>
        </div>
        <div className="flex gap-2">
          {/* <button onClick={increment} className="bg-black flex items-center  text-white justify-center  w-[18px] h-[18px]  text-center">
            <Plus color="white" size={16} />
          </button>
          <button className="bg-black font-bold flex items-center justify-center text-white   w-[20px] h-[18px]   text-center">
            <Minus color="white" size={16} />
          </button> */}

          <ChangeQuantity
            increment={() => addProductQuantity(cartItem)}
            decrement={() => subProductQuantity(cartItem)}
            productQuantity={cartItem.quantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
