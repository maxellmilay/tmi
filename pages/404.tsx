import Header from '@/components/Header';
import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';

export default function pageNotFound() {
	return (
		<>
			<Header />
			<Section className="bg-white text-tmi-blue text-center flex flex-col justify-center items-center gap-6">
				<Image
					src="/images/sad-face.png"
					alt="sad-face"
					width={100}
					height={100}
				/>

				<h2 className="text-5xl font-bold mt-8">Error 404</h2>
				<p className="text-xl font-light max-w-xs">
					Uh oh! We can&apos;t seem to find what you&apos;re looking for
				</p>
				<Link
					className="text-white bg-tmi-blue px-4 mt-6 rounded-xl w-fit"
					href="/"
				>
					Take me home
				</Link>
			</Section>
		</>
	);
}
