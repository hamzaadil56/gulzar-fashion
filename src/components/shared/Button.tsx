import React from "react";

const Button = ({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className}  text-center leading-none p-4 w-full bg-black text-white my-2 hover:bg-gray-950`}
    >
      {children}
    </button>
  );
};

export default Button;
