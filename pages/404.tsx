import Image from "next/image";
import TakeMeHomeButton from "@/components/TakeMeHomeButton";
import Layout from "@/components/Layout";

export default function PageNotFound() {
  return (
    <Layout>
      <div className="flex flex-col h-full justify-center items-center">
        <div className="text-tmi-blue text-center flex flex-col items-center justify-center gap-6">
          <Image
            src="/images/sad-face.png"
            alt="sad face"
            width={100}
            height={100}
          />
          <h2 className="text-5xl font-bold mt-8">Error 404</h2>
          <p className="text-xl font-light max-w-xs">
            Uh oh! We can&apos;t seem to find what you&apos;re looking for
          </p>
          <TakeMeHomeButton />
        </div>
      </div>
    </Layout>
  );
}
