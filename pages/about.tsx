import Layout from "@/components/Layout";
import React from "react";
import History from "@/components/about/History";
import Mission from "@/components/about/Mission";
import Statement from "@/components/about/Statement";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <History />
        <Mission />
        <Statement />
      </Layout>
    </>
  );
}
