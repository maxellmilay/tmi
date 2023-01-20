import React from 'react'
import Image from 'next/image'

interface PropsInterface {
    imgURL: string
    alt: string
}

export default function SocialIcons(props: PropsInterface) {
    const { imgURL, alt } = props;

    return (
        <Image src={imgURL} alt={alt} width={50} height={50} className="mr-2"></Image>
    )
}

