import Head from "next/head";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import SphereTagCloud from "../components/SphereTagCloud.js";
import React, { useEffect } from "react";
import { SphereProvider } from "../components/SphereContext.js";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <SphereProvider>
      <Head>
        <title>Kevin Camacho</title>
        <meta name="description" content="Generated by Kevin Camacho" />
      </Head>

      <main className="flex justify-center  xl:items-start items-center w-full min-h-screen bg-white dark:bg-[#151515]">
        {/* Sphere Tag Cloud on the left */}
        <div className=" w-1/2 2xl:ml-10 sm:block">
          <SphereTagCloud />
        </div>
        {/* Content on the right */}
        <div className="w-3/5 text-center xl:w-full xl:mx-auto xl  lg:mx-auto xl:text-center  xl:text-md">
          <h1 className=" md:-ml-[-80px] md:w-full first-letter:xl:w-full xl:text-[30px] sm:ml-28 xl:ml-40 sm:text-[20px] xl:text-center xl:mt-20  text-5xl 2xl:text-[40px] 2xl:mr-30 font-semibold text-dark  mr-44 dark:text-light">
            <div className="  xl:translate-x-[-250px] lg: xl:w-full ">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to my Portfolio!",
                    "Learn More About Me!",
                    "Explore My Projects!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p className=" md:text-[20px] lg:pl-10 lg:pr-10 md:pr-10 md:pl-40 sm:pr-6  sm:pl-60 sm:w-full my-6 lg:justify-center lg:w-full  md:text-sm lg:ml-10  lg:mr-10 md:ml-10 lg:text-md  xl:translate-x-[-280px] xl:w-full xl:mr-[600px]  sm:text-sm md:text-md xl:align-top   xl:text-xl   2xl:text-lg 2xl:ml-5 2xl:mb-60  text-lg font-medium mr-44 text-dark dark:text-light">
            My name is Kevin Camacho, and I'm a student at Florida International
            University with a strong interest in software development. I work on
            various aspects of software, including backend and frontend
            development, as well as mobile, web, and embedded systems. In my
            free time, I enjoy building PCs and working with robotics. I’m also
            the founder of Code Culture, the second-largest nonprofit
            organization in Florida, where we help programmers of all levels,
            from beginners to advanced, offering then workshops, project based
            learning and activities to learn from. It is a pleasure to meet all
            of you!
          </p>
          <div className="xl:mr-60 flex items-center justify-center mt-2 mr-44">
            <Link
              href="/Kevin_Camacho_Resume.pdf"
              target="_blank"
              className="2xl:mr-5 2xl:ml-20 xl:mr-10 xl:ml-40 md:mr-10 md:ml-52 sm:mr-10 sm:ml-96 flex bg-dark 2xl:-mt-96 text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent md:p-2 md:px-4 md:text-base 
  hover:bg-light hover:text-dark hover:border-dark 
  dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
            >
              Resume
            </Link>

            <a
              href="mailto:Kevincxv@outlook.com"
              target="_blank"
              className="2xl:-ml-0 2xl:mr-15 xl:mr-96 xl:-ml-5 flex 2xl:-mt-96 ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
            >
              Contact
            </a>
          </div>
        </div>
      </main>
    </SphereProvider>
  );
}
