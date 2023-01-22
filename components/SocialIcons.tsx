import React from 'react'
import Image from 'next/image'
import useScreen from '@/hooks/useScreen'
import { MEDIUM_SCREEN } from '@/constants/screen';

interface PropsInterface {
    imgURL: string
    alt: string
}

export default function SocialIcons(props: PropsInterface) {
    const { imgURL, alt } = props;
    const [windowSize] = useScreen();
    const iconSize = windowSize > MEDIUM_SCREEN ? 50 : 50;

    return (
        <Image src={imgURL} alt={alt} width={iconSize} height={iconSize} className="mr-2" />
    )
}
