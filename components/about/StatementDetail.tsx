import React from "react";

interface PropsInterface {
  className?: string;
  info: string;
  number: string;
}

export default function StatementDetail(props: PropsInterface) {
  const { className, info, number } = props;

  return (
    <div
      className={`flex relative h-auto justify-center items-center text-center w-[70vw] ${className}`}
    >
      <p className="absolute -z-10 shadow-blue text-7xl sm:text-9xl opacity-70 font-garamond text-outlined text-white number-container">
        {number}
      </p>
      <p className="text-xs sm:text-lg md:text-xl">{info}</p>
    </div>
  );
}
