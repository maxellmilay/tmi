import React from "react";
import Image from "next/image";

interface PropsInterface {
  imgURL: string;
  alt: string;
  link: string;
}

export default function SocialIcons(props: PropsInterface) {
  const { imgURL, alt, link } = props;

  return (
    <a href={link} className="mr-2" target="_blank" rel="noreferrer">
      <Image src={imgURL} alt={alt} width={50} height={50} />
    </a>
  );
}
