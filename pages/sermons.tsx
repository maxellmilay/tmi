import ComingSoon from "@/components/ComingSoon";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";

function Sermons() {
  return (
    <>
      <Head>
        <title>Sermons</title>
      </Head>
      <Layout>
        <ComingSoon />
      </Layout>
    </>
  );
}

export default Sermons;
