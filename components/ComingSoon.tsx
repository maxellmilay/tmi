import Image from "next/image";
import TakeMeHomeButton from "@/components/TakeMeHomeButton";
import useScreen from "@/hooks/useScreen";

export default function ComingSoon() {
  const [windowSize] = useScreen();

  return (
    <div className="text-tmi-blue flex flex-col justify-center items-center gap-6 h-empty">
      <div className="flex max-sm:flex-col gap-4 mb-5 justify-center items-center">
        <Image
          src="/images/coming-soon-logo.png"
          alt="coming soong logo"
          width={windowSize > 640 ? 200 : 100}
          height={windowSize > 640 ? 100 : 50}
        />
        <div className="flex self-end max-sm:mt-3 max-sm:text-center px-10 sm:px-0">
          <div>
            <h2 className="text-2xl sm:text-5xl font-bold">Coming Soon!</h2>
            <p className="text-xs sm:text-xl font-light max-w-xs">
              This part of the website is still under development.
            </p>
          </div>
        </div>
      </div>
      <TakeMeHomeButton />
    </div>
  );
}
