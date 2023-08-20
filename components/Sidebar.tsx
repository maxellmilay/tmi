import Anchors from "@/enums/anchors";
import Routes from "@/enums/routes";
import classNames from "classnames";
import Link from "next/link";
import React, { useState } from "react";
import { BsInstagram, BsFacebook, BsYoutube } from "react-icons/bs";

interface PropsInterface {
  onSidebarClick: () => void;
}

function Sidebar(props: PropsInterface) {
  const { onSidebarClick } = props;

  const [isAboutOpen, setIsAboutOpen] = useState(false);

  function handleAboutClick() {
    setIsAboutOpen(!isAboutOpen);
  }

  return (
    <div className="fixed z-10 text-white w-screen h-[100dvh] overflow-auto bg-tmi-blue pt-24 px-10 sm:px-32 flex flex-col gap-6 text-2xl">
      <div>
        <button onClick={handleAboutClick}>About Us</button>
        <div
          className={classNames("flex flex-col pl-4 text-lg font-thin", {
            visible: isAboutOpen,
            hidden: !isAboutOpen
          })}
        >
          <Link
            className="p-2 hover:bg-tmi-hover-gray"
            href={Routes.ABOUT + Anchors.HISTORY}
            onClick={onSidebarClick}
          >
            History
          </Link>
          <Link
            className="p-2 hover:bg-tmi-hover-gray"
            href={Routes.ABOUT + Anchors.MISSION}
            onClick={onSidebarClick}
          >
            Mission
          </Link>
          <Link
            className="p-2 hover:bg-tmi-hover-gray"
            href={Routes.ABOUT + Anchors.STATEMENT}
            onClick={onSidebarClick}
          >
            Statement of Faith
          </Link>
        </div>
      </div>
      <Link href={Routes.EVENTS}>Events</Link>
      <Link href={Routes.MINISTRIES}>Ministries</Link>
      <Link href={Routes.SERMONS}>Sermons</Link>
      <Link className="font-bold" href={Routes.GIVE}>
        Give
      </Link>
      <hr />
      <div className="flex gap-10 my-6 justify-center ">
        <BsInstagram size={45} />
        <BsFacebook size={45} />
        <BsYoutube size={45} />
      </div>
      <div>
        <p className="text-sm font-thin mt-10">© 2023 TMI Fellowship</p>
        <Link
          className="text-sm text-tmi-link-blue mb-10"
          href={Routes.PRIVACY_POLICY}
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
