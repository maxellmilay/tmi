import React from "react";
import Image from "next/image";

interface PropsInterface {
  className?: string;
  info: string;
  number: string;
}

export default function StatementDetail(props: PropsInterface) {
  const { className, info, number } = props;

  return (
    <div
      className={`flex relative h-fit justify-center items-center text-center w-[70vw] ${className}`}
    >
      <Image
        src={number}
        height={50}
        width={50}
        alt="number"
        className="absolute w-auto h-20"
      />
      <p className="text-md sm:text-lg md:text-xl">{info}</p>
    </div>
  );
}
