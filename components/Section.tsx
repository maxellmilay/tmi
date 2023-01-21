import { ReactNode } from 'react'

interface PropsInterface {
    children: ReactNode
    className?: string
}

export default function Section(props: PropsInterface) {
    const { children, className } = props;
    return (
        <section className={`w-full h-screen ${className}`}>
            {children}
        </ section>
    )
}
