import React from 'react'

interface PropsInterface {
    className?: string
}

export default function WhiteLine(props: PropsInterface) {
    const { className } = props;

    return (
        <div className={`h-2 bg-white ${className}`} />
    )
}
