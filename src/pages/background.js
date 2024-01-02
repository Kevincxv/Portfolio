import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useRef } from "react";
import Experience from "@/components/Experience";
import Leadership from "@/components/Leadership";
import Education from "@/components/Education";


const background = () => {
  return (
    <>
      <Head>
        <title>Kevin Camacho | Background Page</title>
        <meta name="description" content="Software Engineer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <Experience />
          <Leadership />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default background;
