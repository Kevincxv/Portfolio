import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[77%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer Intern"
            company="Google"
            companyLink="https://www.google.com/"
            time="Aug 2024 – Nov 2024 | Sunnyvale, CA"
            work="
                        Played a key role in redesigning and merging multiple internal tools into a single, user-friendly interface, automating data synchronization processes, and consolidating critical client information, leading to a reduction in time spent by engineers when accessing and managing client setups. Extended the functionality of Corpus Wiki to integrate with Google's latest search infrastructure, facilitating seamless data aggregation from Spanner and production dashboard."
          />
          <Details
            position="Software Engineer Intern"
            company="Microsoft"
            companyLink="https://www.microsoft.com/en-us/"
            time="May 2024 – July 2024 | Atlanta, GA"
            work="
                        Implemented a gRPC server for CNS using Golang, enabling DNC to maintain persistent connections and monitor node health on AKS, which improved system reliability by immediately detecting and reacting to state loss. Developed a strongly typed protobuf schema for CNS operations and integrated it with Kubernetes, enhancing type safety and reducing errors in network container management through efficient gRPC calls."
          />
          <Details
            position="Software Engineer Intern"
            company="CSC CorpTax"
            companyLink="https://corptax.com/"
            time="Sep 2023 – Dec 2023 | Remote"
            work="
                        In my role as a Software Engineer Intern at CSC Corp Tax, I was responsible for maintaining and enhancing tax-related applications using C#, .NET, and Python. My contributions were critical in automating tax calculations and streamlining tax submissions, resulting in a significant reduction of manual errors by an estimated 25%. I also played a key role in transitioning existing software components to a .NET framework, which improved response times by 20% and facilitated better integration with internal systems. This experience at CSC Corp Tax not only honed my skills in various programming languages and frameworks but also gave me valuable insights into the intersection of software development and tax services."
          />
          <Details
            position="Software Engineer Intern"
            company="Progressive Insurance"
            companyLink="https://www.progressive.com/"
            time="May 2023 – Aug 2023 | Remote"
            work="At Progressive Insurance, my role as a Software Engineer Intern involved developing robust, scalable applications using C# and SQL, leading to a significant 30% improvement in system performance and user experience. My work focused on enhancing business operations through the integration of microservices architecture and SQL databases. Additionally, I contributed to application reliability by optimizing development and deployment processes, utilizing NUnit for C# testing, and ensuring seamless integration with VB and SQL functionalities. This experience not only allowed me to apply and deepen my technical skills but also provided invaluable insights into the intricacies of software development in the insurance industry."
          />
          <Details
            position="Software Engineer Intern"
            company="Sebanda Insurance"
            companyLink="https://www.sebandainsurance.com/"
            time="Oct 2020 – May 2023 | Miami, FL"
            work="
                        During my tenure as a Software Engineer Intern at Sebanda Insurance, I played a key role in developing and integrating a Python-based accounting software system. This project, which leveraged PostgreSQL databases and Flask APIs, led to a noteworthy 20% improvement in data entry accuracy and a 15% increase in overall efficiency. My responsibilities included streamlining workflows, eliminating manual tasks, and conducting hands-on technical training for employees, significantly enhancing both the operational efficiency and user satisfaction. This experience at Sebanda Insurance not only sharpened my technical skills in Python and database management but also honed my abilities in software training and process optimization."
          />
          {/* Add more <Details /> components for other experiences as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
