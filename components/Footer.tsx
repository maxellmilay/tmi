import React from 'react';
import TMILogo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
	return (
		<footer className="p-6 bg-tmi-blue flex flex-col md:flex-row justify-between items-center text-white">
			<div className="flex gap-3 items-center">
				<Image alt="tmi" src={TMILogo} height={50} width={50} />
				<div>
					<p className="text-2xl lg:text-3xl font-bold tracking-wide">
						TMI Fellowship
					</p>
					<p className="text-xs leading-3 font-thin">
						Investing for the Cause of Christ
					</p>
				</div>
			</div>
			<hr className="visible md:hidden w-full my-8" />
			<div className="w-full md:w-auto">
				<div className="grid grid-cols-3 grid-rows-2 gap-2 w-[280px] sm:w-[400px] m-auto md:w-auto md:flex md:gap-4 lg:gap-10 text-xs sm:text-sm lg:text-base">
					<Link href="/about">About Us</Link>
					<Link href="/events">Events</Link>
					<Link href="/ministries">Ministries</Link>
					<Link href="/sermons">Sermons</Link>
					<Link href="/give">Give</Link>
					<Link className="underline" href="/admin">
						Admin Login
					</Link>
				</div>
				<hr className="visible md:hidden w-full my-8" />
				<div className="flex justify-center gap-4 md:float-right mt-4 text-xs sm:text-sm">
					<p>© 2023 TMI Fellowship</p>|<p>Privacy Policy</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
