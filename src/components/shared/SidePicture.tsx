import React from "react";
import Image from "next/image";

const SidePicture = ({ imageSrc, key }: { imageSrc: string; key: number }) => {
  return (
    <Image
      key={key}
      className="mb-2 "
      width={100}
      height={94}
      src={imageSrc}
      alt="image"
    />
  );
};

export default SidePicture;
