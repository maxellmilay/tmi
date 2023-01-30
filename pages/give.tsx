import ComingSoon from "@/components/ComingSoon";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";

function Give() {
  return (
    <>
      <Head>
        <title>Give</title>
      </Head>
      <Layout>
        <ComingSoon />
      </Layout>
    </>
  );
}

export default Give;
