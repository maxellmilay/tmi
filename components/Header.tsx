import React, { useEffect, useRef, useState } from 'react';
import TMILogo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import useScroll from '@/hooks/useScroll';
import classNames from 'classnames';
import Dropdown from './Dropdown';
import useMousePosHook from '@/hooks/useMousePosHook';

function Header() {
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [isOnTop] = useScroll();

	const ref = useRef<HTMLDivElement>(null);
	const [isInside] = useMousePosHook(ref);

	useEffect(() => {
		if (!isInside) {
			setIsAboutOpen(false);
		}
	}, [isInside]);

	function handleAboutClick() {
		setIsAboutOpen(!isAboutOpen);
	}

	return (
		<header
			className={classNames(
				'fixed top-0 w-full p-6 flex justify-between transition ease-in',
				{
					'bg-gradient-to-b from-tmi-blue to-transparent': isOnTop,
					'bg-tmi-blue': !isOnTop,
				}
			)}
		>
			<div className="flex gap-2 items-center text-lg font-bold tracking-wide leading-3">
				<Image alt="tmi" src={TMILogo} height={26} width={26} />
				<p>TMI Fellowship</p>
			</div>
			<div className="flex gap-10 items-center">
				<div className="relative" ref={ref}>
					<button onClick={handleAboutClick}>About Us</button>
					<Dropdown isOpen={isAboutOpen}>
						<div className="flex flex-col w-52 tracking-widest text-tmi-blue">
							<Link
								className="p-2 hover:bg-tmi-hover-gray"
								href="/about#history"
							>
								History
							</Link>
							<Link
								className="p-2 hover:bg-tmi-hover-gray"
								href="/about#mission"
							>
								Mission
							</Link>
							<Link
								className="p-2 hover:bg-tmi-hover-gray"
								href="/about#statement"
							>
								Statement of Faith
							</Link>
						</div>
					</Dropdown>
				</div>
				<Link href="/events">Events</Link>
				<Link href="/ministries">Ministries</Link>
				<Link href="/sermons">Sermons</Link>
				<Link className="font-bold" href="/give">
					Give
				</Link>
			</div>
		</header>
	);
}

export default Header;
