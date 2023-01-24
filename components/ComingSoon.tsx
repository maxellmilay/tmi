import Image from "next/image";
import TakeMeHomeButton from "@/components/TakeMeHomeButton";

export default function ComingSoon() {
  return (
    <div className="text-tmi-blue flex flex-col justify-center items-center gap-6 h-empty">
      <div className="flex max-sm:flex-col gap-4 mb-5 justify-center items-center">
        <Image
          src="/images/coming-soon-logo.png"
          alt="coming soong logo"
          width={200}
          height={100}
        />
        <div className="flex self-end max-sm:mt-8 max-sm:text-center">
          <div>
            <h2 className="text-5xl font-bold">Coming Soon!</h2>
            <p className="text-xl font-light max-w-xs">
              This part of the website is still under development.
            </p>
          </div>
        </div>
      </div>
      <TakeMeHomeButton />
    </div>
  );
}
