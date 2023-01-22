import React from 'react'
import Section from '../Section'
import WhiteLine from '../WhiteLine'
import MissionDetail from './MissionDetail'

export default function Mission() {
    return (
        <>
            <Section className="flex items-end justify-end h-[20vh] md:h-[35vh] bg-[url('/images/about/mission-header.png')] no-repeat bg-cover bg-center">
                <div className='flex items-center mb-5'>
                    <h2 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl mr-9 md:mr-14'>Mission</h2>
                    <WhiteLine className='w-[50vw] md:w-[60vw] ' />
                </div>
            </Section>
            <Section className='flex flex-col items-center py-24 text-tmi-blue'>
                <MissionDetail className='mb-16' title='Teach Christ' info='Bring people closer to Jesus Christ and guide them to become better hearers and readers of the Word of God.' />
                <MissionDetail className='mb-16' title='Service' info='Help provide opportunity of learning to preschool children deprived of education because of poverty and other limiting causes.' />
                <MissionDetail className='mb-16' title='Discipleship' info='Discipling people becoming tentmakers who invest for the cause of Christ in time, talent and tithing.' />
                <MissionDetail title='Prayer' info='Share the practice of praying as a direct link to God for worship, thanksgiving and supplication.' />
            </Section>
        </>
    )
}
