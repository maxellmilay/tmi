import React from 'react'
import Section from '../Section'
import WhiteLine from '../WhiteLine'
import StatementDetail from './StatementDetail'

export default function Statement() {
    return (
        <>
            <Section id='stat' className="flex items-end justify-end h-[20vh] md:h-[30vh] bg-[url('/images/about/mission-header.png')] no-repeat bg-cover bg-center">
                <div className='flex items-center mb-5'>
                    <h2 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl mr-5 md:mr-14'>Statement of Faith</h2>
                    <WhiteLine className='w-[40vw] md:w-[50vw] ' />
                </div>
            </Section>
            <Section className='flex flex-col items-center py-14 md:py-24 text-tmi-blue'>
                <StatementDetail className='mb-16' info='We believe in One God, existing in three persons: The Father, the Son, the Holy Spirit' />
                <StatementDetail className='mb-16' info='We believe in Jesus Christ, the begotten Son and eternally one with the Father, became incarnate by the Holy Spirit and was born by the Virgin Mary.' />
                <StatementDetail className='mb-16' info='We believe in the Holy Spirit, eternally one with the Father and the Son, who is ever present and efficiently active in and with the church.' />
                <StatementDetail className='mb-16' info='We believe in the inerrancy of the sixty-six books in the Bible in so far as what it teaches as written by men under the plenary inspiration of the Holy Spirit.' />
                <StatementDetail className='mb-16' info='We believe in the depravity of men because of sin that came into the world.' />
                <StatementDetail className='mb-16' info='We believe that Jesus Christ suffered, died, and is resurrected for the redemption of the fallen man.' />
                <StatementDetail className='mb-16' info='We believe that the depraved man, by repentance, can be saved through the atoning sacrifice of Jesus Christ on the cross.' />
                <StatementDetail className='mb-16' info='We believe in the need for fellowship and corporate gathering of believers for worship, prayer, thanksgiving, and supplication.' />
                <StatementDetail className='mb-16' info='We believe in the twin ordinances of the Lord’s Supper and Water Baptism prescribed in the Bible.' />
                <StatementDetail className='mb-16' info='We believe that the Lord Jesus Christ will come again for the believers to forever be with Him.' />
            </Section>
        </>
    )
}
