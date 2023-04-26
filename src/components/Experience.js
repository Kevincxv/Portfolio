import React, { useRef } from 'react'
import {motion, useScroll} from "framer-motion"
import LiIcon from './LiIcon'

const Details =({position, company , companyLink, time, address, work}) => {
    const ref = useRef(null);
    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
            {position}&nbsp;
            <a 
            href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time}  {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const{scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                '/>
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Details 
                
position="Software Engineer Intern" company= "Sebanda Insurance"
companyLink="https://www.sebandainsurance.com/"
time="Mar 2019-Present"  address="| 6401 SW 40th St, Miami, FL 33155"
work="Collaborate closely with cross-functional teams to design, develop, and implement cutting-edge 
software solutions tailored to the specific needs of the insurance industry, optimizing business 
processes, and enhancing customer experiences"
/>
<Details 
                
position="Founder & Owner" company= "Code Culture"
                time="		Aug	2022	– Present" 
                work=" Pioneered	a	non-profit	Discord	server	with	a	dynamic community	of	500+	developers	and	programmers,	leveraging	
                cutting-edge	technologies	to	provide	innovative	solutions	to	complex	technical	problems.
                Customized	and	implemented	advanced	bots	with	features	such	as	automated	moderation	and	customized	role	
                management,	leading	to	a	20%	increase	in	user	engagement and	30%	reduction	in	moderation	workload."
                />
                <Details 
                
                position="Co-Founder" company= "Pencils For	Latin	America"
                time="Apr	2018 – Present" 
                work="Co-Founded	Pencils	for	Latin	America,	a	non-profit	aimed	at	delivering	crucial	school	supplies	to	underprivileged	Latin	
                American	students;	raised	$3,500+,	distributed	700lbs	of	supplies	to	Costa	Rica	and	the	Dominican	Republic.
                mplemented	effective	marketing	strategies and	outreach,	leading	to	heightened	donor	involvement	and	backing.
                Showcased	project	management	expertise	in	supervising	supply	acquisition and	distribution,	while	promoting	operational	
                efficiency	and	responsibility,	fostering	the	organization's	success	and	meaningful	influence	on	disadvantaged	students."
                />
                </ul>
            </div>
        </div>
  )
}

export default Experience