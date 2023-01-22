import Layout from '@/components/Layout';
import React from 'react';
import Section from '@/components/Section';
import WhiteLine from '@/components/WhiteLine';
import Image from 'next/image';
import HistoryPic1 from '@/public/images/about/history-pic-1.png'

export default function about() {
	return (
		<Layout>
			<Section className="flex items-end h-[50vh] md:h-[70vh] bg-[url('/images/about/history-header.png')] no-repeat bg-cover bg-center">
				<div className='flex items-center my-16'>
					<WhiteLine className='w-[55vw] ' />
					<h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-9 md:ml-14'>History</h1>
				</div>
			</Section>
			<Section className="flex flex-col md:flex-row relative justify-start md:justify-start items-center h-[110vh] md:h-[80vh] bg-[url('/images/about/history-bg-1.png')] no-repeat bg-cover bg-center px-10">
				<Image src={HistoryPic1} alt='history pic' className='w-[80vw] h-[65vw] md:w-[50vw] md:h-[80vh] object-cover absolute -top-8 md:bottom-10' />
				<div className='flex mt-[65vw] md:mt-0 justify-center md:justify-end md:items-center w-full h-full'>
					<p className='text-black h-[35vw] md:h-fit w-[80vw] md:max-w-[35vw] text-justify'><span className='font-bold'>MOVED WITH THE DESIRE</span> to make a difference in the lives of underprivileged children in the marginalized sector of society who are deprived of preschool education, three families and one individual from the Nazarene Christian Fellowship College Church (NCF College Church) met, bonded, and crafted the blueprint for the free pre-school program. On February 4, 2018, in a simple worship and thanksgiving service at the residence of the Somera family in Lapu-Lapu City, Cebu, the TMI Mobile school program and Tentmakers Initiative Fellowship (TMI Fellowship) was born.</p>
				</div>
			</Section>
			<Section className="h-[80vh] bg-[url('/images/about/history-bg-2.png')] no-repeat bg-cover bg-right">

			</Section>
			<Section className="h-[120vh] bg-[url('/images/about/history-bg-3.png')] no-repeat bg-cover bg-center">

			</Section>
		</Layout>
	);
}
