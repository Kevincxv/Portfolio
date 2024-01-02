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
            rel="noopener noreferrer"
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

const Leadership = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-20">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Leadership
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Founder & Owner"
            company="Code Culture"
            companyLink="https://discord.gg/code-culture"
            time="Aug 2022 – Present | Miami, FL"
            work="Led the creation and growth of Code Culture, a non-profit Discord server. Focused on fostering a community of developers and programmers, providing a platform for collaboration, learning, and sharing of ideas. Successfully managed a team of moderators and implemented innovative features to enhance user experience."
          />
          <Details
            position="Executive Board"
            company="INIT"
            companyLink="https://discord.gg/init"
            time="Jan 2023 – Present | Miami, FL"
            work="In my role on the executive board of INIT, I have demonstrated exemplary leadership and technical skills, playing a pivotal role in driving the organization's vision and strategic initiatives. My responsibilities include organizing events, leading project teams, and fostering a culture of innovation and collaboration among our members. I have successfully spearheaded initiatives that focus on the practical application of AI and software development, contributing significantly to the growth and impact of the group. My tenure on INIT's executive board has not only honed my leadership abilities but also deepened my understanding of team dynamics and project management in the tech sector."
          />
          <Details
            position="Lead Full Stack"
            company="Google Student Developer"
            companyLink="https://discord.gg/rVX8XfN7b2"
            time="Jan 2023 – Present | Miami, FL"
            work="As the Lead Full Stack Developer at the Google Student Developer Club at Florida International University, I have been instrumental in guiding a team of talented developers. In this role, I oversee the design and implementation of various web and mobile applications, emphasizing innovation and cutting-edge technologies. My leadership extends to mentoring team members, fostering an environment of learning and professional growth. This position has allowed me to significantly contribute to the club's technical projects, while also enhancing my skills in project management, team coordination, and full-stack development, further establishing my role as a key figure in the tech community at FIU."
          />
        </ul>
      </div>
    </div>
  );
};

export default Leadership;
