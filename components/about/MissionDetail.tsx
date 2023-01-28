import React from "react";

interface PropsInterface {
  className?: string;
  title: string;
  info: string;
}

export default function MissionDetail(props: PropsInterface) {
  const { className, title, info } = props;

  return (
    <div
      className={`flex flex-col md:flex-row justify-center items-center md:mr-[5vw] ${className}`}
    >
      <h3 className="flex justify-center text-center md:justify-end md:mr-10 font-bold w-[70vw] md:w-[35vw] text-4xl mb-3">
        {title}
      </h3>
      <p className="text-center md:text-left w-[70vw] md:w-[30vw] text-lg">
        {info}
      </p>
    </div>
  );
}
