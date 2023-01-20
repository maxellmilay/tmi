import React from 'react';
import TMILogo from '@/public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
    return (
        <header className="p-6 bg-tmi-blue flex justify-between">
            <div className="flex gap-2 items-center text-lg font-bold tracking-wide leading-3">
                <Image alt="tmi" src={TMILogo} height={26} width={26} />
                <p>TMI Fellowship</p>
            </div>
            <div className="flex gap-10 items-center">
                <Link href="/about">About Us</Link>
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
