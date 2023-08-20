import React, { useEffect, useRef, useState } from "react";
import TMILogo from "@/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import classNames from "classnames";
import Dropdown from "./Dropdown";
import useMousePosHook from "@/hooks/useMousePosHook";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Sidebar from "./Sidebar";
import useScreen from "@/hooks/useScreen";
import { MEDIUM_SCREEN } from "@/constants/screen";
import Routes from "@/enums/routes";
import Anchors from "@/enums/anchors";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const { isOnTop, isGoingUp } = useScroll();

  const ref = useRef<HTMLDivElement>(null);
  const [isInside, isHoverInside] = useMousePosHook(ref);

  useEffect(() => {
    if (!isInside) {
      setIsAboutOpen(false);
    }
  }, [isInside]);

  useEffect(() => {
    setIsAboutOpen(isHoverInside);
  }, [isHoverInside]);

  function handleAboutClick() {
    setIsAboutOpen(!isAboutOpen);
  }

  function handleSidebarClick() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const [windowSize] = useScreen();
  useEffect(() => {
    if (windowSize === -1) {
      return;
    }

    if (windowSize > MEDIUM_SCREEN) {
      setIsSidebarOpen(false);
    }
  }, [windowSize]);

  const isHeaderHidden = !isGoingUp && !isOnTop && !isSidebarOpen;
  const renderSidebar = isSidebarOpen && (
    <Sidebar onSidebarClick={handleSidebarClick} />
  );
  const renderBurger = !isSidebarOpen && (
    <button className="block md:hidden" onClick={handleSidebarClick}>
      <RxHamburgerMenu size={25} />
    </button>
  );
  const renderClose = isSidebarOpen && (
    <button className="block md:hidden" onClick={handleSidebarClick}>
      <AiOutlineClose size={25} />
    </button>
  );

  return (
    <>
      <header
        className={classNames(
          "fixed z-20 top-0 w-full p-6 justify-between transition ease-in text-white",
          {
            "flex bg-gradient-to-b from-tmi-blue to-transparent":
              isGoingUp || isOnTop || isSidebarOpen,
            hidden: isHeaderHidden
          }
        )}
      >
        <Link
          className="flex gap-2 items-center text-xl font-bold tracking-wide"
          href="/"
        >
          <Image alt="tmi" src={TMILogo} height={26} width={26} />
          <p>TMI Fellowship</p>
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <div className="relative" ref={ref}>
            <button
              onClick={handleAboutClick}
              className="hover:-translate-y-1 duration-200"
            >
              About Us
            </button>
            <Dropdown isOpen={isAboutOpen}>
              <div className="flex flex-col w-52 tracking-widest text-tmi-white">
                <Link
                  className="p-2 hover:bg-tmi-hover-navbar"
                  href={Routes.ABOUT + Anchors.HISTORY}
                >
                  History
                </Link>
                <Link
                  className="p-2 hover:bg-tmi-hover-navbar"
                  href={Routes.ABOUT + Anchors.MISSION}
                >
                  Mission
                </Link>
                <Link
                  className="p-2 hover:bg-tmi-hover-navbar"
                  href={Routes.ABOUT + Anchors.STATEMENT}
                >
                  Statement of Faith
                </Link>
              </div>
            </Dropdown>
          </div>
          <Link
            href={Routes.EVENTS}
            className="hover:-translate-y-1 duration-200"
          >
            Events
          </Link>
          <Link
            href={Routes.MINISTRIES}
            className="hover:-translate-y-1 duration-200"
          >
            Ministries
          </Link>
          <Link
            href={Routes.SERMONS}
            className="hover:-translate-y-1 duration-200"
          >
            Sermons
          </Link>
          <Link
            className="font-bold hover:-translate-y-1 duration-200"
            href={Routes.GIVE}
          >
            Give
          </Link>
        </div>
        {renderBurger}
        {renderClose}
      </header>
      {renderSidebar}
    </>
  );
}

export default Header;
