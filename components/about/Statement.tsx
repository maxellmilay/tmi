import React from 'react'
import Section from '../Section'
import WhiteLine from '../WhiteLine'

export default function Statement() {
    return (
        <>
            <Section className="flex items-end justify-end h-[20vh] md:h-[35vh] bg-[url('/images/about/mission-header.png')] no-repeat bg-cover bg-center">
                <div className='flex items-center mb-5'>
                    <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl mr-9 md:mr-14'>Mission</h2>
                    <WhiteLine className='w-[50vw] md:w-[60vw] ' />
                </div>
            </Section>

        </>
    )
}
