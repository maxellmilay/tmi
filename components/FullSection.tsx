import { ReactNode } from 'react'
import Section from './Section'

interface PropsInterface {
    children: ReactNode
    className?: string
}

export default function FullSection(props: PropsInterface) {
    const { children, className } = props;

    return (
        <Section className={`h-screen ${className}`}>
            {children}
        </ Section >
    )
}
