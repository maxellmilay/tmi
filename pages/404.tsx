import Image from "next/image";
import TakeMeHomeButton from "@/components/TakeMeHomeButton";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>404 | TMI Fellowship</title>
      </Head>
      <Layout>
        <div className="text-tmi-blue text-center flex flex-col items-center justify-center gap-6 h-empty">
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
      </Layout>
    </>
  );
}
