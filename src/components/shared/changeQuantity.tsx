import React from "react";
import { Plus, Minus, X } from "lucide-react";

const ChangeQuantity = ({
  increment,
  decrement,
  productQuantity,
}: {
  increment: () => void;
  decrement: () => void;
  productQuantity: number;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={increment}
        className="bg-black flex items-center  text-white justify-center  w-[18px] h-[18px]  text-center"
      >
        <Plus color="white" size={16} />
      </button>
      <span>{productQuantity} </span>
      <button
        onClick={decrement}
        className="bg-black font-bold flex items-center justify-center text-white   w-[20px] h-[18px]   text-center"
      >
        <Minus color="white" size={16} />
      </button>
    </div>
  );
};

export default ChangeQuantity;
