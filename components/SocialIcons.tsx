import React from "react";
import Image from "next/image";
import useScreen from "@/hooks/useScreen";

interface PropsInterface {
  imgURL: string;
  alt: string;
}

export default function SocialIcons(props: PropsInterface) {
  const { imgURL, alt } = props;
  const [windowSize] = useScreen();

  return (
    <Image
      src={imgURL}
      alt={alt}
      width={windowSize > 768 ? 50 : 30}
      height={windowSize > 768 ? 50 : 30}
      className="mr-2"
    />
  );
}
