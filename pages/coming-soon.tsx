import Header from '@/components/Header';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';
import TakeMeHomeButton from '@/components/TakeMeHomeButton';

export default function comingSoon() {
	return (
		<>
			<Header />
			<Section className="bg-white text-tmi-blue flex flex-col justify-center items-center gap-6">
				<div className="flex gap-4 mb-5 max-sm:text-center flex-wrap justify-center">
					<Image
						src="/images/coming-soon-logo.png"
						alt="sad-face"
						width={200}
						height={100}
					/>
					<div className="flex items-end min-w-fit max-sm:mt-8">
						<div>
							<h2 className="text-5xl font-bold">Coming Soon!</h2>
							<p className="text-xl font-light max-w-xs">
								This part of the website is still under development.
							</p>
						</div>
					</div>
				</div>
				<TakeMeHomeButton />
			</Section>
		</>
	);
}
