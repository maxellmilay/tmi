import React from 'react'

interface PropsInterface {
    className?: string
    info: string
}

export default function StatementDetail(props: PropsInterface) {
    const { className, info } = props;

    return (
        <div className={`flex justify-center text-center w-[70vw] ${className}`}>
            <p className='text-md sm:text-lg md:text-xl'>{info}</p>
        </div>
    )
}
