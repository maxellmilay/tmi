import { ReactNode } from 'react'

interface PropsInterface {
    children: ReactNode
}

export default function Section(props: PropsInterface) {
    const { children, } = props;
    return (
        <div className='w-full h-screen bg-blue-500 px-10' >
            {children}
        </div >
    )
}
