import ComingSoon from "@/components/ComingSoon";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";

function Admin() {
  return (
    <>
      <Head>
        <title>Admin | TMI Fellowship</title>
      </Head>
      <Layout>
        <ComingSoon />
      </Layout>
    </>
  );
}

export default Admin;
