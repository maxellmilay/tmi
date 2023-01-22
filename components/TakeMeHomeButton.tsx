import Link from "next/link";

export default function TakeMeHomeButton() {
  return (
    <Link
      className="text-white bg-tmi-blue px-4 mt-6 rounded-xl w-fit"
      href="/"
    >
      Take me home
    </Link>
  );
}
